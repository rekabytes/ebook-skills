# Instructions for AI Agents

This file tells an AI coding agent (Claude Code, Codex, Cursor, OpenCode or similar) how to install these skills for a user and how to start the workflow. The skills come from *Developing eBooks with AI: Three-Stage Express Workflow* by Munaisyah Abdullah. Follow only the rules in the skills; do not add eBook-development rules from other sources.

## If the user asks you to install these skills

1. Check that Node.js is available: `node --version`. If it is missing, ask the user to install Node.js from https://nodejs.org and stop.
2. Ask (in one question) whether they want the skills for **this project only** or **all projects**, unless they already said. Default to this project.
3. Tell the user you are about to run the installer, then run it in the user's project folder:
   - this project: `npx skills add rekabytes/ebook-skills`
   - all projects: `npx skills add rekabytes/ebook-skills -g`
   The installer is interactive: the user selects the skills (recommend **all five**) and their agent. If your environment cannot run interactive commands, ask the user to run the command in their own terminal.
4. If `npx` is not allowed or fails, install manually: download or clone `https://github.com/rekabytes/ebook-skills`, then copy every folder under `skills/` into the agent's skills folder, keeping `SKILL.md`, `references/` and `templates/` together. For Claude Code that is `.claude/skills/` in the project (or `~/.claude/skills/` for all projects). For other agents, use the skills folder their documentation names. Check for existing folders with the same names first and ask before overwriting.
5. Confirm that these five folders exist in the chosen location, each with a `SKILL.md`:
   `ebook-workflow`, `ebook-stage1-blueprint`, `ebook-stage2-topic`, `ebook-stage3-release`, `mceds-v1-design`.
6. Tell the user the skills are installed. Some agents only load new skills in a new session, so suggest restarting the agent if the skills do not appear.

## How to start the workflow

When the user wants to make an eBook, teaching module, workbook or hybrid eBook:

1. Load **`ebook-workflow`** first. It is the entry point and routes to the stage skills.
2. Act as the user's **AI-assisted eBook Development Coach**.
3. Gather the source pack from what the user attached. Extract before asking: course/module, proposed title, **exact approved learning outcome**, target learners, main topics, available sources, preferred format, known constraints.
4. Apply the **Question-Control Rule**: no long interview; at most three consolidated questions, only for gaps that would cause academic error, misalignment or an unusable product; recommended choice first; label non-critical gaps as assumptions or markers and continue.
5. Decide the route: topic by topic, unless the eBook is one topic of about 5–10 pages with few sources and no complex, technical or interactive features.
6. Run **`ebook-stage1-blueprint`**, present the four outputs, ask for KEEP / REVISE / HOLD, and **stop**.

Starter message the user can paste:

```text
Use the ebook-workflow skill. I want to build an eBook for [course/module].
Exact approved learning outcome: [paste].
Topics: [list]. Learners: [short description]. Format: [Word/PDF/print/VLE].
My source files are attached.
```

## Stage order and gates (never skip)

| Step | Skill | Stop and wait for |
| --- | --- | --- |
| Stage 1: Set Up & Blueprint | `ebook-stage1-blueprint` | KEEP / REVISE / HOLD |
| Stage 2 Gate A: topic content | `ebook-stage2-topic` | KEEP CONTENT / REVISE CONTENT / HOLD |
| Stage 2 Gate B: topic design | `ebook-stage2-topic` + `mceds-v1-design` | KEEP DESIGN / REVISE DESIGN / REVISE CONTENT / HOLD |
| Repeat Gate A and B for each topic | | After the last KEEP DESIGN, report TOPIC DEVELOPMENT AND DESIGN COMPLETE and stop |
| Permission gate | | PROCEED TO ASSEMBLY (confirm readiness, then wait) |
| Stage 3: Assemble, Check & Release | `ebook-stage3-release` | Give exactly one: READY FOR HUMAN TESTING / REVISION REQUIRED / RELEASE READY |

## Rules that always apply

- Preserve the exact approved learning outcome word for word.
- Zero unapproved omissions: never summarise, compress or drop approved content to shorten the book or fit a layout.
- Never modify a frozen (KEEP DESIGN) topic.
- Apply MCEDS v1 exactly; do not redesign, recolour or substitute another style.
- Produce an editable Word master first; generate the PDF only from the final checked Word master.
- Never claim learner, lecturer, usability, accessibility, device or print testing, or institutional approval, without evidence the user supplied. Automated QA is not human testing.
- Keep the attribution "The Three-Stage Express Workflow™ developed by Munaisyah Abdullah" when sharing the complete resource.
