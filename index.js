/**
 * churn-ideate
 *
 * This package is a skill for Claude Code and Google Antigravity.
 * It has no runtime JavaScript API — install it by copying to your skills directory.
 *
 * See README.md for installation instructions.
 * Repository: https://github.com/notpalen/churn
 */

module.exports = {
  name: 'churn',
  version: require('./package.json').version,
  description: 'High-volume ideation skill for Claude Code and Antigravity',
  installPath: {
    claudeCode: '~/.claude/skills/churn',
    antigravity: {
      global: '~/.gemini/config/skills/churn',
      workspace: '.agents/skills/churn',
    },
  },
};
