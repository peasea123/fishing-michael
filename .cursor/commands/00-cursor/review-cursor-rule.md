# /review-cursor-rule

Review and validate **existing** Cursor rules to ensure accuracy, correct file references, and adherence to best practices. This command is for reviewing rules that already exist—it does not create new rules.

## Source of Truth: Cursor Rules Guide

**⚠️ REQUIRED READING**: Before reviewing any rule, you **must** read `@.cursor/rules/RULES-GUIDE-V2.md` as the authoritative source of truth for Cursor rules. This guide covers MDC file structure, four application modes (Always, Auto Attached, Agent Requested, Manual), frontmatter metadata rules, best practices (optimal file length 50-250 lines, token awareness, meaningful descriptions), critical behaviors and gotchas, file reference patterns, and context inclusion priority. Use this guide to validate that rules follow correct patterns, use appropriate application modes, maintain optimal length, and reference files correctly. All validation should align with the standards and practices documented in this guide.

## Initial Setup: Create Todo List

**Before starting the review, create a todo list** with step-by-step instructions for completing the review process. Use the `todo_write` tool to create a structured task list that includes:

1. Read the Cursor Rules Guide (`@.cursor/rules/RULES-GUIDE-V2.md`)
2. Read and analyze each specified rule file
3. Validate frontmatter (description, globs, alwaysApply)
4. Validate content (size, clarity, file references, naming conventions)
5. Check rule type appropriateness (Always, Auto Attached, Agent Requested, Manual)
6. If multiple rules: Check for duplicates, conflicts, and unnecessary complexity
7. Verify all file references (`@path/to/file`) point to existing files
8. Check related documentation files for updates needed
9. Update, delete, or consolidate documentation as needed
10. Make necessary corrections and updates

The todo list should break down the review into clear, actionable steps that can be tracked and completed systematically.

## Usage

```bash
/review-cursor-rule <rule-name> [<rule-name2> ...] [--validate-only]
```

## Parameters

- `rule-name`: Name of **existing** rule file(s) from `.cursor/rules/` directory (e.g., `004-python-development`, `001-workspace`). The rule file must already exist. Multiple rules can be specified for batch review.
- `--validate-only` (optional): Verify rule without making changes

## Reviewing Multiple Rules

When multiple rules are specified (or when reviewing the entire `.cursor/rules/` folder), review **all** rules together and check for:

- **Duplicate information** — Identify overlapping guidance, patterns, or examples that appear in multiple rules
- **Unnecessary complexity** — Look for redundant explanations, overly verbose sections, or duplicated file references across rules
- **Glob structure conflicts** — Verify glob patterns don't create unintended overlaps or conflicts between Auto Attached rules
- **Consistent patterns** — Ensure rules follow the same structure, formatting, and style conventions
- **Optimal organization** — Confirm rules are logically separated and each serves a distinct purpose without excessive overlap

The goal is to ensure the rule set as a whole is well-organized, non-redundant, and maintains clear boundaries between individual rules.

## Documentation Maintenance

When reviewing rules, also check and maintain related documentation files and guides referenced in the rules:

- **Update outdated documentation** — If rules reference documentation files (e.g., `@docs/guide.md`, `@CLAUDE.md`), verify those files are current and update them if they contain outdated information
- **Delete obsolete documentation** — If documentation files are completely outdated or no longer relevant, delete them rather than leaving stale references
- **Consolidate duplicates** — If multiple documentation files cover the same topic, consolidate them into a single authoritative source and update rule references accordingly
- **Verify file references** — Ensure all `@path/to/file` references in rules point to existing, up-to-date documentation

**Proceed intelligently** — Make these revisions and updates without asking for clarification. Use your judgment to determine what needs updating, what should be deleted, and how to best consolidate duplicate documentation. The goal is to maintain accurate, current documentation that supports the rules effectively.

## Review Checklist

**Purpose**: Validate accuracy and correctness—do NOT expand or make rules more complex. Keep existing length and scope.

**Frontmatter Validation:**
- Description is clear and one-sentence
- Globs are correct format (no quotes, comma-separated) and reference existing file paths
- `alwaysApply` is set appropriately (false unless small and universally safe)

**Content Validation:**
- Rule size is 50-250 lines (1,000-4,000 tokens) — maintain current size, don't expand
- Bullets are specific, imperative, and testable (not vague)
- No anti-patterns: bloated globs, duplicate guidance, over-broad scope
- Naming follows numeric prefix conventions (e.g., `001-name.mdc`)
- File references (e.g., `@path/to/file`) point to actual existing files
- **When reviewing multiple rules**: Check for duplicate information, overlapping glob patterns, and unnecessary complexity across the rule set

**Rule Type Check:**
- **Always**: Only for small, universally safe rules
- **Auto Attached** (globs): Attaches to intended files, not unrelated
- **Agent Requested** (description): Description accurately describes when rule applies
- **Manual**: Only invoked explicitly with `@ruleName`

## Quick Examples

```bash
/review-cursor-rule 004-python-development

/review-cursor-rule 001-workspace 004-python-development 008-database --validate-only

/review-cursor-rule 015-api-patterns
```

## Validation Principles

- **No expansion or complexity increase** — Maintain rule length and scope exactly as-is
- **Accuracy only** — Correct outdated file references, fix broken paths, update deprecated patterns
- **Accurate globs** — Verify paths exist and scope is precise
- **Actionable content** — Ensure constraints, decisions, and patterns remain clear
- **Correct metadata** — Verify frontmatter format and rule type match rule purpose
- **File reference validation** — Confirm all `@path/to/file` references point to existing files
- **Documentation maintenance** — Update, delete, or consolidate related documentation files as needed
- Frontmatter follows MDC format (see `@.cursor/rules/RULES-GUIDE-V2.md`)
- **Proceed autonomously** — Make intelligent revisions and updates without requesting clarification
