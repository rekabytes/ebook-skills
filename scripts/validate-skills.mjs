#!/usr/bin/env node
// Validate the skills/ layout: SKILL.md frontmatter (name, description) and local Markdown links.
// No dependencies. Run: node scripts/validate-skills.mjs
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const skillsDir = path.join(root, 'skills');
const errors = [];
const NAME = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) =>
    e.isDirectory() ? walk(path.join(dir, e.name)) : [path.join(dir, e.name)]
  );
}

function scalar(raw) {
  raw = raw.trim();
  if (raw.startsWith('"')) return JSON.parse(raw);
  if (raw.startsWith("'")) return raw.slice(1, -1).replace(/''/g, "'");
  return raw;
}

function checkLinks(file, text) {
  const noCode = text.replace(/```[\s\S]*?```/g, '').replace(/`[^`\n]*`/g, '');
  for (const m of noCode.matchAll(/!?\[[^\]\n]*\]\(([^)\s]+)\)/g)) {
    const target = m[1];
    if (/^[a-z]+:/i.test(target) || target.startsWith('#')) continue;
    const p = path.resolve(path.dirname(file), decodeURIComponent(target.split('#')[0]));
    if (!fs.existsSync(p)) errors.push(`${path.relative(root, file)}: broken link ${target}`);
  }
}

const names = fs.readdirSync(skillsDir, { withFileTypes: true }).filter((d) => d.isDirectory());
if (names.length === 0) errors.push('skills/: no skill folders');

for (const d of names) {
  const file = path.join(skillsDir, d.name, 'SKILL.md');
  if (!fs.existsSync(file)) { errors.push(`skills/${d.name}: missing SKILL.md`); continue; }
  const text = fs.readFileSync(file, 'utf8');
  const fm = text.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!fm) { errors.push(`skills/${d.name}/SKILL.md: missing frontmatter`); continue; }
  const fields = {};
  for (const line of fm[1].split(/\r?\n/)) {
    const m = line.match(/^(name|description):\s*(.*)$/);
    if (m) {
      try { fields[m[1]] = scalar(m[2]); } catch { errors.push(`skills/${d.name}/SKILL.md: bad ${m[1]}`); }
    }
  }
  if (!fields.name) errors.push(`skills/${d.name}/SKILL.md: missing name`);
  else {
    if (!NAME.test(fields.name) || fields.name.length > 64) errors.push(`skills/${d.name}: invalid name ${fields.name}`);
    if (fields.name !== d.name) errors.push(`skills/${d.name}: name "${fields.name}" must match folder`);
  }
  if (!fields.description) errors.push(`skills/${d.name}/SKILL.md: missing description`);
  else if (fields.description.length > 1024) errors.push(`skills/${d.name}: description over 1024 chars (${fields.description.length})`);
}

for (const f of [...walk(skillsDir), path.join(root, 'README.md'), path.join(root, 'AGENTS.md')]) {
  if (f.endsWith('.md') && fs.existsSync(f)) checkLinks(f, fs.readFileSync(f, 'utf8'));
}

if (errors.length) {
  console.error(errors.map((e) => `✗ ${e}`).join('\n'));
  process.exit(1);
}
console.log(`✓ ${names.length} skills valid: ${names.map((d) => d.name).join(', ')}`);
