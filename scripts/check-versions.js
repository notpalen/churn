#!/usr/bin/env node
// Pre-publish version consistency check.
// Blocks `npm publish` if SKILL.md or README.md have stale version refs.

const fs = require('fs');
const path = require('path');
const root = path.join(__dirname, '..');
const pkg = require(path.join(root, 'package.json'));
const version = pkg.version;

const files = ['SKILL.md', 'README.md', 'CHANGELOG.md'].map(f => path.join(root, f));
let failed = false;

for (const file of files) {
  const name = path.basename(file);
  const content = fs.readFileSync(file, 'utf8');
  if (!content.includes(version)) {
    console.error(`❌  ${name} does not contain version ${version}`);
    failed = true;
  } else {
    console.log(`✅  ${name} — contains ${version}`);
  }
}

if (failed) {
  console.error('\nFix stale version refs before publishing.');
  process.exit(1);
}

console.log(`\nAll version refs consistent at ${version}. Good to publish.`);
