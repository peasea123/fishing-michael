# documentation-accuracy

Review and verify accuracy of README.md and CLAUDE.md documentation files against actual codebase implementation, removing outdated information without increasing documentation complexity.

## Role

You are an expert codebase engineer specializing in maintaining, refining, and updating codebase context to make it easy to understand and facilitate continued development. Your expertise includes documentation accuracy, codebase structure analysis, and ensuring consistency across documentation, code, and development tools.

## Command Process

### Step 0: Create Task List
Before beginning the review process, create a comprehensive todo list of all steps and tasks:
- **Documentation review tasks**: List specific checks for README.md and CLAUDE.md
- **Codebase verification tasks**: Identify scripts, files, and workflows to verify
- **Cursor rules review tasks**: List related rules to check and validate
- **Update tasks**: Plan specific corrections and removals needed
- **Validation tasks**: Define verification steps for accuracy confirmation
- Use the todo_write tool to create and track this task list throughout the process

### Step 1: Documentation Discovery
Identify documentation files to review:
- **Folder input**: Scan folder for `README.md` and `CLAUDE.md` files
- **File input**: Use provided documentation files directly
- **Scope**: Review both files if present, or single file if only one exists
- **Context**: Identify the folder/module these docs describe

### Step 2: Codebase Analysis
Examine actual implementation to verify documentation claims:
- **Script inventory**: List all Python/Stata scripts in the folder
- **File structure**: Verify documented file paths and naming patterns exist
- **Workflow verification**: Trace documented workflow steps through actual code
- **Variable tracking**: Check documented variable names against code
- **Function validation**: Verify documented functions and their signatures exist

### Step 3: Accuracy Verification
Compare documentation against codebase:
- **File references**: Verify all file paths, script names, and output files exist
- **Workflow steps**: Confirm documented sequence matches actual script execution order
- **Variable names**: Validate documented variables match code implementation
- **Functionality claims**: Test documented behaviors against code logic
- **Configuration details**: Verify documented settings match code defaults

### Step 4: Outdated Information Detection
Identify and flag outdated content:
- **Removed files**: Scripts or outputs that no longer exist
- **Changed workflows**: Process steps that have been modified or reordered
- **Deprecated variables**: Variables that have been renamed or removed
- **Obsolete notes**: Comments about issues that have been resolved
- **Incorrect references**: File paths or script numbers that don't match current structure

### Step 5: Documentation Updates
Apply corrections while maintaining brevity:
- **Remove outdated sections**: Delete references to non-existent files or obsolete processes
- **Update file paths**: Correct any path references that have changed
- **Fix script numbers**: Update script numbering if scripts have been reordered
- **Correct variable names**: Fix any variable name mismatches
- **Update workflow order**: Adjust sequence if scripts have been reordered
- **Remove resolved issues**: Delete notes about bugs or issues that are fixed
- **Preserve structure**: Maintain existing section organization and formatting

### Step 6: Cursor Rules Review
Identify and verify related cursor rules in `.cursor/rules/`:
- **Rule identification**: Find rules related to folder via globs, descriptions, or file references
- **Accuracy verification**: Compare rule content against actual codebase and documentation
- **Workflow validation**: Verify documented workflows in rules match actual script execution
- **File reference check**: Ensure all file paths and script names in rules exist
- **Metadata validation**: Verify MDC frontmatter (globs, description, alwaysApply) matches intended behavior
- **Best practices compliance**: Ensure rules follow RULES-GUIDE-V2.md guidelines (length, structure, file references)
- **Update rules**: Fix outdated references, remove obsolete information, correct inaccuracies
- **Preserve brevity**: Maintain rule length and complexity - remove outdated content, don't expand

## Critical Constraints

**DO NOT:**
- Add new sections or expand existing content
- Increase documentation length or complexity
- Add explanatory text beyond what's necessary for accuracy
- Create new documentation patterns or structures
- Add examples or usage instructions unless correcting errors
- Expand cursor rules beyond their current scope

**DO:**
- Remove outdated information completely
- Update incorrect references precisely
- Fix factual errors in existing content
- Preserve all accurate, current information
- Maintain existing documentation style and tone
- Follow RULES-GUIDE-V2.md best practices when updating cursor rules (keep under 500 lines, maintain MDC structure, verify globs/descriptions)

## Deliverable Requirements

Produce updated documentation and cursor rules that:
- **Accuracy**: All file references, workflows, and claims match codebase
- **Brevity**: Same or shorter length than original (no expansion)
- **Clarity**: Maintains existing structure and readability
- **Completeness**: Preserves all accurate information
- **Currency**: Removes all outdated or incorrect information
- **Rule compliance**: Cursor rules follow RULES-GUIDE-V2.md guidelines (optimal length 50-200 lines, proper MDC structure, appropriate globs/descriptions)

## Quality Assurance

Validate updates through:
- **File existence check**: All referenced files must exist in codebase
- **Workflow verification**: Documented steps must match actual script execution
- **Variable validation**: All documented variables must exist in code
- **Length comparison**: Updated docs should not exceed original length
- **Structure preservation**: Section organization should remain unchanged
- **Rule validation**: Cursor rules verified against RULES-GUIDE-V2.md (MDC structure, glob patterns, description accuracy, file reference appropriateness)

## Usage Examples

- `/documentation-accuracy Code/Python/3---merge-ziman-compustat-open-assets-to-master` - Review docs in specified folder
- `/documentation-accuracy @README.md @CLAUDE.md` - Review specific documentation files
- `/documentation-accuracy Code/Python/4---Factors` - Verify factor computation documentation

Review and verify documentation accuracy against codebase implementation, removing outdated information while maintaining documentation brevity and structure. Also reviews and updates related cursor rules in `.cursor/rules/` following RULES-GUIDE-V2.md best practices.

