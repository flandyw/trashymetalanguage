# Metalanguage Highlighter

A browser-based VCE English Language practice app with 170 constructed texts, targeted feature hunts, passage analysis, quizzes and locally saved progress.

Run with Bun:

```sh
bun install
bun --bun run dev --host 0.0.0.0
bun run build
bun run check
bun run lint
```

Use a current supported Node release (22.12+), or run Vite with Bun as above.

Practise starts with short texts in context. Select a word inside a target example to record it; a phrase counts as one example. Explore opens on the passage answer key, with optional automatic suggestions and a custom-text input. The library searches passage content and feature names.

The passage key contains selected teaching examples, not an exhaustive linguistic analysis. Automatic suggestions use local word lists and grammatical context. They are fallible, are labelled separately, and never determine challenge scores. Isolated-word exercises use their specific questions rather than asking learners to infer a text’s register or function without context. Curriculum unit, area and text-type metadata remain optional until individually reviewed; missing values are not inferred.

The contextual classification rules distinguish demonstrative determiners from pronouns, main-verb uses of *need* from modal uses, and auxiliary from main-verb uses of *be*. Grammar references: [Cambridge on demonstratives](https://dictionary.cambridge.org/grammar/british-grammar/this-that-these-those), [need](https://dictionary.cambridge.org/grammar/british-grammar/need), and [be](https://dictionary.cambridge.org/grammar/british-grammar/be-).

`bun run check` runs classification regressions, token alignment across every passage, simulated hunts and scoring, question validation, and data validation. Data warnings include missing explanatory notes and repeated single-word exercises; no validation errors should remain.
