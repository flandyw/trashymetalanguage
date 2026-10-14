# Task: audit and repair one passage bank

You are fixing the **texts and text classifications** in one passage-bank file of the app *trashymetalanguage*, a practice app for **VCE English Language** (VCAA study design 2024–2028). The bank was written against an older, looser scheme. Your job is to bring every passage up to the standard in `docs/annotation-guide.md`.

## Read first (in this order)
1. `docs/annotation-guide.md` — the schema, answer-key rules, classification rules and the full list of valid feature ids with their study-design definitions. **Read all of it.**
2. `docs/exemplars.ts` — two model passages.
3. `src/lib/passages.ts` — the TypeScript `Passage` type.
4. Your assigned bank file (path given in your instructions).

## Rules of engagement
- Edit **only your assigned bank file**. Do not touch any other file, any `index.ts`, the taxonomy, or the scripts. Other agents are editing other bank files at the same time.
- Keep the file's exported bank constant name, its `id`, `label` and `blurb` (you may improve `blurb` wording). Keep passage `id`s unchanged, except for passages you are told to delete.
- Use Edit/Write to modify the file. Work passage by passage. Do not rewrite the file from memory in one go; make targeted edits and re-read what you changed.
- Run `bun scripts/check-bank.ts <your file>` after every few passages. Finish only when it reports **0 errors**, and reduce warnings wherever it is honest to do so (a warning that a feature is "not listed for unit N" is acceptable when the feature is legitimately present).

## What to fix, for EVERY passage
1. **Text**: fix typos, broken or unnatural wording, stray whitespace, American spellings (use Australian English), anything factually wrong. Keep the passage's character; change as little as needed. If you change the text, re-check every gold span, quiz question and note against it.
2. **New required fields** (see the schema): `unit`, `areaOfStudy` (must belong to the unit), `textType`, `setting` (the old free-text `mode` description was moved into `setting`; rewrite it into a short, clean phrase: time, place, medium), and verify `mode` is exactly `written`, `spoken` or `multimodal`. Add `secondaryFunctions` where another Jakobson function is clearly present.
3. **Classification accuracy** — re-derive each from the text, do not trust the old values:
   - `field`, `tenor`, `setting` as short noun phrases (situational context).
   - `register` and `registerNote`: evidence-based.
   - `dominantFunction` must be one of referential / emotive / conative / phatic / metalinguistic / poetic. The old data used "expressive" — it is now emotive. Check the choice; many ads and persuasive texts are conative, news is referential, greetings are phatic.
   - `dominantSentenceType`, `sentenceStructure` (now includes `compound-complex-sentence`), `lengthTier` (0 word; 1 phrase/one short sentence; 2 two–three sentences; 3 paragraph or transcript), `difficulty` (1–5).
   - `unit` + `areaOfStudy` by what the passage best serves (Unit 3 informal/formal registers, Unit 4 Australian varieties and identity, Unit 2 change/contact, Unit 1 language basics/acquisition).
4. **Answer key (`gold`)** — audit every group against the VCE definitions in the guide:
   - Remove or fix wrong annotations; correct feature ids (old ids no longer exist: use `emotive`, `shortening`, `taboo-language`, `connotation`, `determiner`).
   - Sub-word features (prefix, suffix, shortening, hypocoristic…) must use the **whole word** as the span, with the morpheme named in the note.
   - Each feature id appears in **one** gold group; merge duplicates.
   - Remove spans that would also match a wrong word elsewhere in the passage (every occurrence is marked).
   - Add important missing features (a VCE examiner would expect them), keep 5–12 groups for a paragraph, ≤10 occurrences per feature, spanning several subsystems. Do not over-annotate.
   - Every group needs a one-sentence `note` that teaches (why it is that feature, citing the text).
5. **Quiz**: verify every answer is actually correct under the study design. Fix wrong ones. Make options plausible and distinct, 3–5 per question, `explain` citing the text and why the nearest distractor is wrong. Vary the position of the correct answer. Ensure at least 2 good questions for tier 2–3 passages, 1 for tier 0–1. Never "all/none of the above".
6. **teach** line: one or two sentences that genuinely help a student, in correct metalanguage.
7. Remove any passage you are told is a duplicate. If after your repairs a passage is still weak, rewrite it properly rather than leaving it.

## Final report (your last message, max 120 words)
State: passages kept/deleted, number of classification corrections (function/register/etc.), number of gold groups removed/added/fixed, quiz questions fixed, final validator output (errors/warnings), and anything you were unsure about.
