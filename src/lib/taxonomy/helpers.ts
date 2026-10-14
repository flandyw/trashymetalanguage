import type { FeatureInput, FeatureScope, Subsystem, Unit } from './types'

/**
 * Compact constructor so the data files stay readable.
 *
 *   f(id, label, group, units, short, detail, hint, examples, opts)
 */
export function maker(subsystem: Subsystem) {
  return (
    id: string,
    label: string,
    group: string,
    units: Unit[],
    short: string,
    detail: string,
    hint: string,
    examples: string[],
    opts: { scope?: FeatureScope; test?: string; core?: boolean } = {},
  ): FeatureInput => ({
    id,
    label,
    subsystem,
    group,
    scope: opts.scope ?? 'word',
    units,
    short,
    detail,
    hint,
    examples,
    test: opts.test,
    core: opts.core,
  })
}
