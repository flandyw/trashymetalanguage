# Task: write a new passage bank

You are writing new practice passages for the app *trashymetalanguage*, a practice app for **VCE English Language** (VCAA study design 2024–2028). Students highlight metalanguage features in each passage (a "hunt"), analyse it, and answer questions. Quality matters more than speed: the answer key is what students are marked against.

## Read first (in this order)
1. `docs/annotation-guide.md` — schema, answer-key rules, classification rules, transcript conventions, content rules and the full list of valid feature ids with study-design definitions. **Read all of it.**
2. `docs/exemplars.ts` — two model passages (one transcript, one written). Match their level of care.
3. `src/lib/passages.ts` — the `Passage` and `PassageBank` types.
4. One existing bank for house style, e.g. the first three passages of `src/data/passages/bank06.ts` (note: it predates the new fields, so follow the guide where they differ).

## Rules of engagement
- Create **only your assigned bank file**. Export exactly the constant name given. It must have the given `id`, `label`, `blurb`, and ids for passages `<prefix>-01`, `<prefix>-02`, … with no gaps. Do not edit any other file (not `index.ts`, not the taxonomy). Other agents are working in parallel.
- Write the file in several steps (create with 3–4 passages, then append more) rather than one huge write. After each step run `bun scripts/check-bank.ts <your file>`.
- Finish only at **0 errors**; also reduce warnings where honest (a "not listed for unit N" warning is acceptable only when the feature is genuinely present and relevant).
- In TypeScript strings use single quotes and the curly apostrophe ’ inside text (never a backtick; avoid straight double quotes inside text: use “ ” if you need quotation marks). `\n` separates transcript lines.
- Texts must be **original or public domain** and must pass the content rules in the guide (respectful treatment of Aboriginal and Torres Strait Islander languages and of ethnolects; no caricature; no real private persons).
- Every passage must be something a VCE English Language teacher would be happy to put in front of a Year 11–12 student: natural, specific, and rich in the features of its unit.

## Per-passage requirements
- All schema fields from the guide, including `unit`, `areaOfStudy`, `textType`, `mode`, `field`, `tenor`, `setting`, `register` + `registerNote`, `dominantFunction` (+ `secondaryFunctions` when apt) + `functionNote`, `dominantSentenceType`, `sentenceStructure`, `lengthTier`, `difficulty`, `gold`, `quiz`, `teach`. Tier-3 passages: 70–220 words (transcripts: 6–14 turns). Tier-2: 2–3 sentences, ~20–60 words. Tier-1: a short phrase or one sentence.
- `gold`: 6–12 feature groups for tier 3 (4–6 for tier 2, 2–4 for tier 0–1), each with a teaching `note`; spans that are exact substrings of the text; every occurrence of a span must be a genuine example; sub-word features use the whole word as the span. At least **one feature per passage must be in each of 3 different subsystems** for tier 3.
- `quiz`: 2–3 analysis questions (tier 2–3), 3–5 plausible options, correct answer position varied across the bank, an `explain` that cites the text. Include at least one question per passage about the text’s function, register, politeness strategy or a salient feature — not trivia.
- Spread difficulty 1–5 across the bank (roughly a third easier, a third mid, a third harder), spread `lengthTier` as requested, and vary `textType`, `field` and `tenor` — no two passages should feel alike.
- Each passage should be clearly *about* the theme you were given, so it serves the assigned unit/area of study.

## Final report (your last message, max 100 words)
State: number of passages, tiers, validator result (errors/warnings), the feature ids covered, and anything you were unsure about.
