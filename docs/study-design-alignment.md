# Alignment with the supplied VCE English Language study design

Source: the user-provided `2024EnglishLanguageSD.docx`, version 1.2, July 2023, implementation from 2024. SHA-256: `83cead09d05e744c3ecd5289ffe173c4b3c98fa5ee86a6eeedd11d788a3183da`. The document was read directly, including its table cells; this change does not assert that the attachment is the latest VCAA publication.

The source defines four units and eight areas of study, six language subsystems, a unit-by-unit metalanguage table, and key knowledge and skills for each outcome. The app's course guides paraphrase the unit requirements and cite the relevant supplied page. The 35 metalanguage rows in `src/data/study-design.ts` preserve the source rows and their unit inclusions. Two vertically split rows are scoped when displayed: word loss is limited to Unit 2, while code switching is shown as language learning in Unit 1 and group membership in Unit 4. Context/function and variation/identity remain useful glossary groups but are explicitly distinguished from the six subsystems.

## Learning pathways

- Unit 1: language functions, conventions, context and speech/writing; acquisition patterns, theories, multilingualism, IPA and consent in fieldwork.
- Unit 2: change, codification, attitudes and the elective distinction; contact, English varieties, maintenance, shift and reclamation.
- Unit 3: informality and formality, cooperation, face, authority, cohesion/coherence and transcript conventions.
- Unit 4: Australian Englishes, accent attitudes, national identity, repertoire, social identity and overt/covert prestige.

Each area has an outcome guide, a knowledge checklist, a contextual writing prompt and an aligned text route. Checklists record self-review, not assessed mastery. The new conceptual explanations separate register/mode, function/purpose, positive/negative face, cohesion/coherence, accent/dialect and style shifting/code switching.

## Text classification

All 179 active texts receive a primary teaching focus in `src/lib/curriculum.ts`, preserving explicit source metadata with reviewed overrides. Bank-level mappings are editorial choices about the teaching activity, not VCAA assignments of those texts to units, not predictions of exam questions, and not statistical classification from register. Text-form overrides were reviewed against the constructed source descriptions. A feature can be useful outside the unit in which its table row is listed.

The previously disconnected four-text acquisition bank is active. Five new texts provide close-analysis data for attitudes to innovation, language maintenance, audience-sensitive workplace styles, accent prestige and a spoken repair sequence. These texts are labelled as original constructions and include teaching discussions. The app does not present constructed data as historical or contemporary source evidence.

Next/previous passage navigation stays in the current unit. The library filters by unit, area, mode, text type, length and bank; filters combine and can be cleared.

## Analysis and evidence

The writing workspace offers separate, locally saved short-answer responses and commentary plans for each passage. Selected examples can be inserted with transcript turn references. Area-specific planning, a self-review checklist and a passage teaching discussion support explanation, rather than feature listing. There is no automatic marking or official mark allocation.

Spoken texts explicitly authored as transcripts display numbered turns and a convention legend. Numbers identify the supplied turns rather than browser line wrapping. Legacy inline dialogue is not silently reformatted, since that would alter annotation token positions.

The real-world evidence notebook stores source, date where known, optional source link, quotation and analysis by unit. This supports the study design's requirement to engage with authentic contemporary and historical language data. It does not verify source credibility. All saved data remain in browser storage; blocked or full storage can prevent persistence.

## Assessment and limits

The supplied source assigns 25% each to Unit 3 and Unit 4 coursework, and 50% to the examination. The app does not infer exam timing or detailed exam section rules from the study design. School SAC arrangements and teacher assessment remain separate from app practice.

This is a study-design-specific practice tool, not a complete taught course or an official VCAA product. Historical source sets, full IPA/audio instruction, learner fieldwork and an exhaustive collection of authentic contemporary examples remain outside this implementation. The notebook lets learners bring their own sourced evidence. Automatic annotation is still heuristic, and legacy keys contain selected teaching examples rather than exhaustive analyses.

## Validation

`bun run check` includes curriculum coverage and consistency, source-row inclusions, within-unit navigation, persistence/malformed storage cases, existing classification regressions, every passage's token alignment, simulated hunts, scoring and question/data validation. Browser checks exercise the unit/area routes, transcript references, draft isolation and reload persistence, source notebook, and mobile layouts. Existing data warnings about missing explanatory notes and reusable foundation terms remain visible.
