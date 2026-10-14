/**
 * Validates every curated passage bank.
 *
 *   bun scripts/check-data.ts
 *
 * Exits non-zero if any error is found. Warnings are printed but do not fail.
 */

import { BANKS } from '../src/data/passages/index'
import { validatePassages } from '../src/lib/resolve'
import { wordCount } from '../src/lib/passages'
import { FEATURE_MAP } from '../src/lib/taxonomy'

const all = BANKS.flatMap((b) => b.passages)
const report = validatePassages(all)

const tierCounts = [0, 0, 0, 0]
const featureUse = new Map<string, number>()
let goldTotal = 0
let targetTotal = 0

for (const b of BANKS) {
  for (const p of b.passages) {
    tierCounts[p.lengthTier] = (tierCounts[p.lengthTier] ?? 0) + 1
    for (const g of p.gold) {
      featureUse.set(g.feature, (featureUse.get(g.feature) ?? 0) + 1)
      goldTotal += 1
    }
  }
}

console.log('=== Passage banks ===')
for (const b of BANKS) {
  const words = b.passages.reduce((n, p) => n + wordCount(p.text), 0)
  const golds = b.passages.reduce((n, p) => n + p.gold.length, 0)
  console.log(
    `  ${b.id.padEnd(14)} ${String(b.passages.length).padStart(3)} passages  ${String(golds).padStart(4)} gold groups  ${String(words).padStart(6)} words  — ${b.label}`,
  )
}
console.log(
  `\n  TOTAL ${all.length} passages, ${goldTotal} gold groups, ` +
    `tiers word/phrase/sentence/paragraph = ${tierCounts.join(' / ')}`,
)

const unused = Object.keys(FEATURE_MAP).filter(
  (id) => !featureUse.has(id) && FEATURE_MAP[id].scope === 'word',
)
if (unused.length) {
  console.log(`\n  word-scope features never used in gold (${unused.length}):`)
  console.log('   ', unused.join(', '))
}

if (report.warnings.length) {
  console.log(`\n=== Warnings (${report.warnings.length}) ===`)
  for (const w of report.warnings.slice(0, 40)) console.log('  ! ' + w)
  if (report.warnings.length > 40) console.log(`  … and ${report.warnings.length - 40} more`)
}

if (report.errors.length) {
  console.log(`\n=== ERRORS (${report.errors.length}) ===`)
  for (const e of report.errors) console.log('  x ' + e)
  process.exit(1)
}

console.log('\nOK — no data errors.')
void targetTotal
