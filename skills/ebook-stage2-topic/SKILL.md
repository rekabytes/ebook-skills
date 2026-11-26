---
name: ebook-stage2-topic
description: "Stage 2 of the Three-Stage Express Workflow: develop and design an educational eBook one topic at a time through two gates. Gate A writes the complete topic manuscript with a Content Coverage Inventory and Content Preservation Audit (zero unapproved omissions), then stops for KEEP CONTENT. Gate B converts the approved manuscript into an editable MCEDS v1 Word topic candidate with conformance checks, then stops for KEEP DESIGN. Use after the Stage 1 Blueprint is KEEP. By Munaisyah Abdullah."
---

# Stage 2 — Develop and Design Topic by Topic

Source: *Developing eBooks with AI: Three-Stage Express Workflow* (Prompt 2) by Munaisyah Abdullah. © 2026 Munaisyah Abdullah, used with permission. Follow only these rules.

The book develops incrementally. First complete and verify the full topic manuscript (**Gate A**). Then convert that approved manuscript into a designed topic eBook candidate using the frozen MCEDS v1 design system (**Gate B**). Freeze the topic only after both content and design are approved. Only **KEEP DESIGN** permits the next topic to begin.

## Use only

The approved eBook Direction Brief, Whole-Book Blueprint, Visual Style Guide, authorised sources, Source and Assumption Register, and the current approved topic material. If Stage 1 has not been approved (KEEP), stop and send the user to `ebook-stage1-blueprint`.

## Question-control rule

Do not conduct a long interview. Ask no more than three consolidated questions, only when the current topic cannot be developed safely or an essential design decision cannot be determined. Use visible markers for non-critical gaps:

`[LECTURER INPUT REQUIRED]` · `[SOURCE EXTENSION REQUIRED]` · `[FORMULA VERIFICATION REQUIRED]` · `[FIGURE/TABLE SOURCE REQUIRED]` · `[ASSET TO BE CREATED]` · `[IMAGE PLACEHOLDER]` · `[COPYRIGHT/PERMISSION CHECK]` · `[CONFIRM DELIVERY FEATURE]`

## Non-negotiable content-preservation rule

Develop from the complete approved topic material. Do not summarise, compress, omit, merge away or replace approved content merely to shorten the eBook or improve appearance. Preserve every approved:

- heading and subheading;
- explanation, definition and academic claim;
- example, demonstration and worked reasoning;
- formula, symbol, variable, unit, condition and calculation step;
- figure, diagram, image and caption requirement;
- table, row, column, label, note and source;
- activity, instruction, worksheet field and expected output;
- question, option, answer and explanatory feedback;
- reflection, transition, cross-reference and topic output; and
- citation, source note, permission condition and unresolved marker.

Do not infer that a shorter output is equivalent. If approved material appears repetitive, classify it as intentional or potentially accidental and request authorisation before deleting it.

## Incremental topic loop

Work on **one topic only**. Complete Gate A before Gate B. Do not begin the next topic until both gates are approved.

---

## Gate A — Complete content development

1. State the topic title, exact learning outcome, topic purpose and authorised source basis.
2. Build a **Content Coverage Inventory** listing every required heading, explanation, example, formula, figure, table, activity, question, feedback item, reflection and output.
3. Draft the complete learner-facing topic using the learning moves the topic needs: **Orient → Explain → Show → Practise → Check → Apply** (see below).
4. Preserve the full academic meaning and source traceability. Add clarification only when supported or clearly labelled.
5. For every **formula**: reproduce it accurately; define symbols, variables and units; show necessary conditions and calculation steps; retain its number, caption and source where supplied; mark any uncertainty `[FORMULA VERIFICATION REQUIRED]`.
6. For every **figure, diagram or image**: include the authorised asset when supplied and permitted, or insert a visible numbered placeholder at the intended location. The placeholder states what learners must see, learning purpose, required content, suggested format, source/permission status, caption and alternative text.
7. Recreate every approved **table** completely. Do not convert a table into abbreviated prose. Preserve labels, rows, columns, notes, units and sources.
8. Include complete **activities**, answer options, answers and explanatory feedback. Open activities must include instructions, expected output and feedback criteria.
9. Produce a **Content Preservation Audit** comparing the Content Coverage Inventory with the drafted topic. Mark each item PRESENT, AUTHORISED CHANGE, PLACEHOLDER or BLOCKED. **Zero unapproved omissions are permitted.**

### Produce for Gate A

- **A.** Topic Source and Coverage Map
- **B.** Complete Topic Manuscript
- **C.** Formula, Figure, Table and Asset Register
- **D.** Content Preservation Audit
- **E.** Gate A Issues Requiring Authorisation

Skeletons: [templates/gate-a-outputs.md](templates/gate-a-outputs.md).

### End Gate A with one decision

> **KEEP CONTENT** — approve the complete topic manuscript and proceed to Gate B
> **REVISE CONTENT** — revise the named content elements
> **HOLD** — essential academic, source, formula or permission evidence is missing

**Stop after Gate A.** Do not design the topic output until the user replies KEEP CONTENT.

---

## Gate B — Design the approved topic output

After the user replies KEEP CONTENT, apply **MCEDS v1 exactly** using the `mceds-v1-design` skill and its full specification. MCEDS v1 is the frozen controlling visual system; treat it as a specification, not inspiration. Do not reinterpret, modernise, simplify, recolour or substitute another visual style.

Key reminders (the full list is in `mceds-v1-design`): A5 portrait 148 × 210 mm; ≈12.5 mm side margins; Arial body ≈11 pt, tables ≈10 pt; navy `#0B2E4E`/`#102D5B`, teal `#169FB2`, orange `#F28C28`, pale teal `#DDEFF2`, pale peach `#FCE4D6`, grey `#F2F2F2`, body `#222222`, secondary `#555555`; orange upper-right page-number box; thin orange footer rule with approved footer text; navy topic-opening panel; `#4F81BD` bold-italic hook; split navy-bar section headings; teal KEY blocks, orange EXAMPLE/SELF-CHECK/REMINDER blocks, teal MINI ACTIVITY bars; navy-header reference tables, teal-header activity tables, zebra rows, pale-teal label cells; restrained colour, single column, moderate density.

- **Design semantics never change:** NAVY = structure/reference; TEAL = concept/activity/takeaway; ORANGE = attention/example/self-check/reminder; PALE TEAL and PALE PEACH = block bodies; LIGHT GREY = alternating table row only.
- **Reproducibility:** reuse an existing MCEDS treatment exactly for the same semantic element. Do not invent a new treatment for variety.
- **Content overrides page count:** never reduce, summarise, merge or remove approved content to fit the layout; add pages.
- **Editability:** produce a fully editable Microsoft Word (.docx) topic master. Keep body text, headings, tables, worksheets, learner-response areas, learning blocks, captions, page numbers, headers and footers editable. Diagrams may remain embedded images when inherently image-based. Do not flatten the topic into page images.

### Design execution

1. Convert only the approved Gate A manuscript into the complete designed topic eBook candidate.
2. Apply MCEDS v1 and the approved course-specific Visual Style Guide without shortening content. MCEDS v1 controls whenever the guide is silent or conflicts without explicit authorisation.
3. Select the right MCEDS treatment for each information type: normal prose, learning block, numbered procedure, list, table, formula panel, figure panel or worksheet/response area.
4. Place every figure, table, formula and image where it supports learning. Never collect them separately for convenience.
5. When the final image is unavailable, keep the designed placeholder in the actual page layout so its size, position, caption, source/permission status and alt-text requirement can be reviewed.
6. Create the complete designed output for the topic — not a cover-only sample and not a shortened mock-up.
7. Render or export the complete Word topic candidate and visually inspect every page for hierarchy, readability, MCEDS conformance, spacing, table/figure integrity, formula accuracy, colour semantics, accessibility cues, page breaks, printing and device suitability.
8. Re-run the Content Preservation Audit against the designed output. Confirm zero unapproved omissions from design conversion.
9. Record any authorised deviation from MCEDS v1 in the Topic Completion Record and require explicit authorisation before KEEP DESIGN.

### Produce for Gate B

- **F.** Designed Topic eBook Candidate (editable .docx)
- **G.** Design Conformance Checklist
- **H.** Updated Asset and Placeholder Register
- **I.** Designed-Output Content Preservation Audit
- **J.** Topic Completion Record

Skeletons: [templates/gate-b-outputs.md](templates/gate-b-outputs.md).

### End Gate B with one decision

> **KEEP DESIGN** — approve the designed topic, freeze its content and design, and begin the next topic
> **REVISE DESIGN** — revise the named visual, layout or delivery elements without altering approved content
> **REVISE CONTENT** — return to Gate A because a content defect was discovered
> **HOLD** — an essential asset, permission or delivery requirement blocks approval

Do not ask the user to repeat the original project information. **Do not modify a previously frozen topic.** Do not force exactly the same structure on topics with different learning needs. After KEEP DESIGN, record the frozen filename and version, then start Gate A for the next topic.

---

## The flexible learning moves

| Move | Learner experience |
| --- | --- |
| Orient | I know why this matters and where I am going. |
| Explain | I can understand the idea without the lecturer beside me. |
| Show | I can see the process, relationship or judgement. |
| Practise | I can try with guidance. |
| Check | I can test myself and recover from an error. |
| Apply | I can use the learning in a meaningful situation. |

**Adaptive, not repetitive:** a topic uses only the moves it needs. Different topics may have different structures while the visual style stays consistent.

## What the user should check before typing KEEP

Show this list to the user at each gate:

- The topic purpose matches the Blueprint.
- Important claims can be traced to authorised sources.
- The explanation is sufficient for independent learning.
- Examples are accurate and serve a learning purpose.
- Activities tell learners exactly what to do and what evidence to produce.
- Feedback explains why, not only which answer is correct.
- Visuals solve a learning problem and include accessibility requirements.
- Terminology and visual style match previously frozen topics.
- The Content Coverage Inventory contains every approved heading, explanation, example, formula, figure, table, activity, question, feedback item, reflection and output.
- The Content Preservation Audit reports zero unapproved omissions in both the manuscript and designed output.
- Every formula is accurate and readable; every supplied figure and table is complete; every missing image has a visible, specified placeholder.
- The complete designed topic — not a shortened sample — has been reviewed before KEEP DESIGN.

## How the two-gate loop works

| User action | Your action | Result |
| --- | --- | --- |
| Start Topic 1 | Draft Gate A content for Topic 1 with coverage/audit outputs | Topic 1 Gate A candidate |
| Reply KEEP CONTENT | Lock the approved content and produce Gate B designed output | Topic 1 content protected |
| Reply KEEP DESIGN | Freeze Topic 1 content and design, then start Topic 2 Gate A | Topic 1 fully protected |
| Reply REVISE / HOLD | Change only named elements, or stop and identify the blocker | Controlled correction or safe stop |
| After final KEEP DESIGN | List every frozen topic and stop | Ready for Stage 3 permission gate |

## Suggested filenames

`Course_Topic01_Content_A1_KEEP.docx` · `Course_Topic01_Design_D1_KEEP.docx` · `Course_Topic02_Content_A1_KEEP.docx` · `Course_Topic02_Design_D1_KEEP.docx`

## After all topics are KEEP DESIGN

Stop and report **TOPIC DEVELOPMENT AND DESIGN COMPLETE**. List every frozen topic, content version, design version, unresolved authorised placeholder and asset status. Do not combine topics at this point.

When the user replies **PROCEED TO ASSEMBLY**, treat it as the Stage 3 permission gate only: confirm that Stage 3 is unlocked, then wait for the full Stage 3 instruction (`ebook-stage3-release`) before taking any assembly action.
