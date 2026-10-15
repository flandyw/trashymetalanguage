# VCE English Language

A browser-based VCE English Language practice app with 179 constructed texts, targeted feature hunts, passage analysis, quizzes and locally saved progress.

Run with Bun:

```sh
bun install
bun --bun run dev --host 0.0.0.0
bun run build
bun run check
bun run lint
```

Use a current supported Node release (22.12+), or run Vite with Bun as above.

Course opens on a unit-by-unit guide aligned with the supplied VCAA study design (version 1.2, July 2023). Choose an area of study, identify features, explore the teaching key, then draft a short answer or commentary plan. Each task has its own saved draft and self-review checklist. Use the evidence notebook to record authentic examples with sources.

Identify uses short texts in context. Select a word inside a target example to record it; a phrase counts as one example. Explore opens on the passage answer key, with optional automatic suggestions and a custom-text input. The library searches passage content and feature names.

The passage key contains selected teaching examples, not an exhaustive linguistic analysis. Automatic suggestions use local word lists and grammatical context. They are fallible, are labelled separately, and never determine challenge scores. Isolated-word exercises use their specific questions rather than asking learners to infer a text’s register or function without context. Every active text has an editorial teaching-focus mapping to a unit and area, plus a text type. This is not an official assignment of that text to a VCAA unit. See [study-design alignment](docs/study-design-alignment.md) for source traceability, course coverage and limits.

The contextual classification rules distinguish demonstrative determiners from pronouns, main-verb uses of *need* from modal uses, and auxiliary from main-verb uses of *be*. Grammar references: [Cambridge on demonstratives](https://dictionary.cambridge.org/grammar/british-grammar/this-that-these-those), [need](https://dictionary.cambridge.org/grammar/british-grammar/need), and [be](https://dictionary.cambridge.org/grammar/british-grammar/be-).

`bun run check` runs curriculum mappings, unit-specific navigation, source-table and persistence checks, classification regressions, token alignment across every passage, simulated hunts and scoring, question validation, and data validation. Data warnings include missing explanatory notes and repeated single-word exercises; no validation errors should remain.
