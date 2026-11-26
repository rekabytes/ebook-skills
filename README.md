<div align="center">
  <h1>eBook Skills — Three-Stage Express Workflow</h1>
  <p>Develop educational eBooks with AI: fewer prompts, controlled gates, evidence-based release.</p>
  <p>By <strong>Munaisyah Abdullah</strong> · Agent skills for Claude Code, Codex, Cursor and other agents that read <code>SKILL.md</code></p>
</div>

<p align="center">
  <a href="#quick-start">Quick start</a> ·
  <a href="#skills">Skills</a> ·
  <a href="#how-it-works">How it works</a> ·
  <a href="AGENTS.md">Instructions for AI agents</a> ·
  <a href="LICENSE.md">Licence</a>
</p>

---

> **AI proposes and drafts. The educator authorises the learning outcome, sources, instructional decisions and final release.**

These skills turn the *Developing eBooks with AI: Three-Stage Express Workflow* by Munaisyah Abdullah into instructions your AI agent follows. You get to a coherent teaching module, workbook or hybrid eBook through three stages, and you approve each stage with plain decision words (KEEP, REVISE, HOLD). Every rule in these skills comes from that eBook.

## Quick start

You need [Node.js](https://nodejs.org) (which includes `npx`).

### 1. Install

In your project folder, run:

```bash
npx skills add rekabytes/ebook-skills
```

Choose **all skills**, then pick your AI tool (Claude Code, Codex, Cursor, OpenCode and others). The [Skills CLI](https://github.com/vercel-labs/skills) puts the files in the right place for that tool.

To install once for all your projects, add `-g`:

```bash
npx skills add rekabytes/ebook-skills -g
```

<details>
<summary><strong>Install without npm (Git or ZIP)</strong></summary>

[Download the ZIP](https://github.com/rekabytes/ebook-skills/archive/refs/heads/main.zip) or clone the repository. Then copy each folder inside `skills/` into your agent's skills folder, keeping `SKILL.md`, `references/` and `templates/` together.

Claude Code, from your project folder:

```bash
mkdir -p .claude/skills
cp -R /path/to/ebook-skills/skills/* .claude/skills/
```

Use `~/.claude/skills/` instead for all projects. Other agents use their own skills folder; check their documentation.

</details>

### 2. Start

Open your AI tool in the project folder, attach your course outline, learning outcome and source materials, and say:

```text
Use the ebook-workflow skill. I want to build an eBook for [course/module].
Here is my exact approved learning outcome: [paste it].
My topics are: [list]. My learners are: [short description].
```

The agent sorts your sources, then runs **Stage 1** and stops for your decision.

### 3. Approve stage by stage

| When the agent asks | You reply |
| --- | --- |
| Stage 1 setup and Blueprint | `KEEP`, `REVISE <what to change>`, or `HOLD` |
| Stage 2 Gate A (topic content) | `KEEP CONTENT`, `REVISE CONTENT <what>`, or `HOLD` |
| Stage 2 Gate B (topic design) | `KEEP DESIGN`, `REVISE DESIGN <what>`, `REVISE CONTENT`, or `HOLD` |
| All topics frozen | `PROCEED TO ASSEMBLY`, then `Run Stage 3` |
| Stage 3 result | The agent gives one recommendation: READY FOR HUMAN TESTING, REVISION REQUIRED, or RELEASE READY |

**Keep it manageable:** finish one complete topic first, then scale to the rest.

## Skills

| Skill | Use it for | It produces |
| --- | --- | --- |
| [**ebook-workflow**](skills/ebook-workflow/SKILL.md) | Start here. Stages, source pack, Question-Control Rule, gap markers, decision words, all-at-once check, recovery prompts | Routing to the right stage, decision trail, completion checklist |
| [**ebook-stage1-blueprint**](skills/ebook-stage1-blueprint/SKILL.md) | Stage 1: Set Up & Blueprint (run once) | Direction Brief, Whole-Book Blueprint, Visual Style Guide, Source and Assumption Register |
| [**ebook-stage2-topic**](skills/ebook-stage2-topic/SKILL.md) | Stage 2: one topic at a time through Gate A (content) and Gate B (design) | Topic manuscript, coverage and preservation audits, designed Word topic, Topic Completion Record |
| [**ebook-stage3-release**](skills/ebook-stage3-release/SKILL.md) | Stage 3: Assemble, Check & Release (after PROCEED TO ASSEMBLY) | Final editable Word master, publication PDF, Release Evidence Pack, one release recommendation |
| [**mceds-v1-design**](skills/mceds-v1-design/SKILL.md) | The frozen Made Clear Educational eBook Design System (MCEDS v1) | A5, Arial, navy/teal/orange design applied exactly and checked page by page |

## How it works

```text
Source pack ─► Stage 1: Set Up & Blueprint ─► KEEP
                     │
                     ▼
        ┌─► Stage 2, Topic n ──────────────────────────────┐
        │     Gate A: complete content + preservation audit │─► KEEP CONTENT
        │     Gate B: MCEDS v1 designed Word topic          │─► KEEP DESIGN (frozen)
        └──── next topic ◄─────────────────────────────────┘
                     │ all topics frozen
                     ▼
        PROCEED TO ASSEMBLY (permission gate only)
                     │
                     ▼
        Stage 3: assemble Word master + PDF, whole-book QA,
        evidence pack ─► READY FOR HUMAN TESTING / REVISION REQUIRED / RELEASE READY
```

What the workflow protects:

- **Learning alignment.** Exact approved outcomes stay connected to content, activities, self-checks and expected learner performance.
- **Content and source integrity.** Registers, coverage maps and preservation audits separate authorised evidence from assumptions and expose omissions. Zero unapproved omissions are allowed.
- **Consistency and accountability.** MCEDS design controls, approval decisions, change logs and frozen versions make responsibility and revision visible.
- **Quality and release evidence.** Conformance checks, defect records, retesting and real human testing support a defensible release decision. Automated QA is never reported as human testing.

## Repository layout

```text
skills/
  ebook-workflow/         SKILL.md, references/, templates/
  ebook-stage1-blueprint/ SKILL.md, templates/
  ebook-stage2-topic/     SKILL.md, templates/
  ebook-stage3-release/   SKILL.md, templates/
  mceds-v1-design/        SKILL.md, references/mceds-v1-spec.md
scripts/validate-skills.mjs   checks frontmatter and links (node scripts/validate-skills.mjs)
AGENTS.md                     install and start instructions for AI agents
```

## Licence and attribution

The Three-Stage Express Workflow™ and MCEDS v1 were developed by **Munaisyah Abdullah**. © 2026 Munaisyah Abdullah. All rights reserved. Packaged as agent skills by [Reka Bytes](https://github.com/rekabytes) with her agreement.

You may use the workflow to create authorised teaching materials. Do not use it for another training programme without her written permission, and keep the developer attribution when sharing the complete resource. Full terms: [LICENSE.md](LICENSE.md).
