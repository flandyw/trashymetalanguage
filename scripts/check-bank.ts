/**
 * Validate one or more passage bank files without loading the whole corpus.
 *
 *   bun scripts/check-bank.ts src/data/passages/bank01.ts [more files...]
 *
 * Prints every error and warning with the passage id. Exits non-zero on error.
 * Add `--quiet` to hide warnings.
 */

import { resolve } from 'node:path'
import type { Passage, PassageBank } from '../src/lib/passages'
import { validatePassages } from '../src/lib/resolve'

const args = process.argv.slice(2)
const quiet = args.includes('--quiet')
const files = args.filter((a) => !a.startsWith('--'))
if (files.length === 0) {
  console.error('usage: bun scripts/check-bank.ts <bank file> [...]')
  process.exit(2)
}

let failed = false
for (const file of files) {
  let mod: Record<string, unknown>
  try {
    mod = (await import(resolve(file))) as Record<string, unknown>
  } catch (err) {
    console.log(`✗ ${file}: does not load\n    ${String(err)}`)
    failed = true
    continue
  }
  const banks = [...new Set(Object.values(mod))].filter(
    (v): v is PassageBank => !!v && typeof v === 'object' && Array.isArray((v as PassageBank).passages),
  )
  if (banks.length === 0) {
    console.log(`✗ ${file}: exports no PassageBank`)
    failed = true
    continue
  }
  const passages: Passage[] = banks.flatMap((b) => b.passages)
  const report = validatePassages(passages)
  console.log(
    `${report.errors.length ? '✗' : '✓'} ${file}: ${passages.length} passages, ` +
      `${report.errors.length} errors, ${report.warnings.length} warnings`,
  )
  for (const e of report.errors) console.log('   ERROR ' + e)
  if (!quiet) for (const w of report.warnings) console.log('   warn  ' + w)
  if (report.errors.length) failed = true
}
process.exit(failed ? 1 : 0)
