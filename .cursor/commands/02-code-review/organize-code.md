# /organize-code

Analyze and optimize codebase organization using research-backed strategies for workflow-based, feature-based, or hybrid architectures. Provides actionable recommendations and reorganization plans tailored to research/data science projects.

## Usage

```bash
/organize-code [folder-path]
```

## Parameters
- `folder-path` (optional): Target directory path for focused analysis. If omitted, analyzes entire codebase organization strategy.

## Procedure

### Step 1: Structure Analysis
1. **Inventory current organization**: List all files and subfolders in target scope
2. **Identify organizational pattern**: Classify as workflow-based, feature-based, layer-based, or mixed
3. **Count files per category**: Measure distribution to identify overcrowded sections (>5-7 files)
4. **Map dependencies**: Analyze import relationships and cross-folder dependencies
5. **Assess naming conventions**: Evaluate consistency of file naming patterns

### Step 2: Pattern Recognition
1. **Workflow indicators**: Identify sequential stages (e.g., `_0_*`, `_1_*`, `_2_*` prefixes)
2. **Feature boundaries**: Detect self-contained modules or domain-specific code clusters
3. **Shared utilities**: Locate cross-cutting concerns (config, utils, common functions)
4. **Data flow**: Map data pipeline stages (raw → processed → final → results)
5. **Execution order**: Determine if files follow clear sequential workflow

### Step 3: Issue Identification
1. **Overcrowded folders**: Flag categories with >7 files requiring subfolder organization
2. **Scattered features**: Identify related files split across multiple locations
3. **Deep nesting**: Detect folder hierarchies >3 levels deep (prefer flatter structures)
4. **Naming inconsistencies**: Find files that don't follow established conventions
5. **Circular dependencies**: Identify problematic import patterns
6. **Mixed concerns**: Detect folders mixing unrelated functionality

### Step 4: Strategy Recommendation
Apply research-backed decision framework:

**Use workflow-based organization when:**
- Sequential pipeline (data → features → analysis → export)
- Single researcher or small team
- Clear execution order matters
- Methodology documentation is important
- Research/data science project context

**Use feature-based organization when:**
- Multiple independent features/modules
- Large team working in parallel
- Features can be developed independently
- Need to easily remove/refactor features

**Use hybrid organization when:**
- Mix of shared utilities and feature-specific code
- Some stages have many files requiring subfolders
- Need both workflow clarity and feature isolation

### Step 5: Reorganization Plan Generation
1. **Proposed structure**: Design optimized folder hierarchy with rationale
2. **File mapping**: Create migration plan showing current → proposed locations
3. **Subfolder recommendations**: Suggest subfolders for overcrowded categories
4. **Naming improvements**: Propose consistent naming convention updates
5. **Dependency updates**: Identify import statements requiring updates
6. **Relative path preservation**: **CRITICAL** - Map all relative path references and calculate required updates
   - Identify all `Path(__file__).resolve().parents[N]` patterns and calculate new depth after move
   - Map `sys.path.insert()` statements that reference parent directories
   - Track relative imports (`from _0_config_manager import config`) and update if module location changes
   - Identify data file paths relative to project root (e.g., `config.data_paths["sales_csv"]`)
   - Calculate new `parents[N]` values based on new folder depth
   - Create explicit mapping: `old_path_depth → new_path_depth` for each moved file
   - **Cursor rules references**: Identify all file path references in `.cursor/rules/*.mdc` files that point to moved files
     - Search for references like `Code/python/CLAUDE.md`, `Code/Stata/2---Gen_Final_Dataset.do`, etc.
     - Map old paths to new paths for all cursor rule documentation
     - Include this in path reference mapping inventory
7. **Execution order preservation**: Ensure workflow sequence maintained
8. **Plan document creation**: **MANDATORY** - Save comprehensive reorganization plan as markdown document:
   - **File location**: Save to `Documentation/Organization/reorganization_plan_[timestamp].md` or similar organized location
   - **Document length**: Must be approximately 160-240 lines (target ~200 lines)
   - **Content structure**: Include all deliverables (current structure, issues, recommendations, proposed structure, migration plan, path mappings)
   - **Conciseness**: Prioritize essential information; use bullet points and structured sections to maintain target length
   - **Completeness**: Ensure all critical details are captured within length constraint

### Step 6: Implementation Guidance
1. **Plan document saved**: Confirm markdown reorganization plan document has been saved (160-240 lines, target ~200 lines)
2. **Todo list creation**: **MANDATORY** - Immediately after saving plan document, create a structured todo list:
   - Use `todo_write` tool to create actionable todo items for reorganization execution
   - Break down migration into discrete, sequential tasks
   - Include path update tasks, file move operations, import fixes, and verification steps
   - **MUST include**: Review and update file paths/references in `.cursor/rules/*.mdc` files
     - Scan all `.mdc` files in `.cursor/rules/` for references to moved files
     - Update all file path references to reflect new locations
     - Verify cursor rules still reference correct files after reorganization
   - Prioritize critical path items (path updates, dependency fixes, cursor rules updates)
   - Set initial status: mark first actionable item as `in_progress`, others as `pending`
3. **Todo list execution**: **MANDATORY** - Work through todo list systematically:
   - Execute tasks in order, marking each as `completed` upon finish
   - Update status to `in_progress` for current task
   - Address any issues encountered and update todos accordingly
   - Do not proceed to next major phase until current phase todos are complete
4. **Migration steps**: Provide sequential steps for safe reorganization
5. **Import updates**: List files requiring import path changes
6. **Relative path updates**: **MANDATORY** - Explicitly update all relative path references:
   - **Path depth calculations**: For each moved file, calculate new `parents[N]` value:
     - Count directory levels from moved file to project root
     - Update `Path(__file__).resolve().parents[N]` to match new depth
     - Example: File moved from `Code/python/` (depth 2) to `Code/python/utils/` (depth 3) requires `parents[3]` instead of `parents[2]`
   - **sys.path updates**: Recalculate `sys.path.insert()` paths:
     - If file moves deeper: increase `parents[N]` value
     - If file moves shallower: decrease `parents[N]` value
     - Verify imports still resolve correctly after path changes
   - **Data path references**: Ensure relative data paths (e.g., `"Data/Final_Datasets/..."`) still resolve correctly from new location
   - **Cross-file connections**: Verify all file-to-file references (e.g., `open("../data/file.csv")`) are updated
   - **Import statement updates**: Update relative imports if module structure changes:
     - `from _0_config_manager import config` may need path adjustments if config file moves
     - Verify all `from module import` statements resolve from new locations
7. **Connection verification**: **CRITICAL** - Verify all connections still work:
   - Test import resolution: Ensure all `from X import Y` statements work from new locations
   - Verify data file access: Confirm relative data paths resolve correctly
   - Check cross-module dependencies: Ensure moved files can still import required modules
   - Validate execution paths: Confirm scripts can still find config, data, and utility files
   - Test path calculations: Verify `Path(__file__).resolve().parents[N]` reaches correct project root
8. **Testing checklist**: Identify scripts to verify after reorganization
9. **Documentation updates**: Flag documentation needing path updates:
   - Update references in README files, CLAUDE.md, and other documentation
   - **CRITICAL**: Review and update all file path references in `.cursor/rules/*.mdc` files
     - Search for references to moved files (e.g., `Code/python/CLAUDE.md`, `Code/Stata/2---Gen_Final_Dataset.do`)
     - Update paths to reflect new file locations
     - Verify all cursor rule references remain accurate after reorganization
     - Test that cursor rules still apply correctly to reorganized codebase
10. **Risk assessment**: Highlight potential breaking changes, especially path-related failures

## Deliverables

### For Folder-Level Analysis:
- **Current structure report**: Visual tree of current organization
- **Issue summary**: List of organizational problems identified
- **Recommendations**: Specific improvements with rationale
- **Proposed structure**: Optimized folder layout for target folder
- **Migration plan**: Step-by-step reorganization guide
- **Path reference mapping**: Complete inventory of all relative path references requiring updates (including `.cursor/rules/*.mdc` file references)
- **Saved plan document**: Markdown file (160-240 lines, target ~200 lines) containing complete reorganization plan saved to `Documentation/Organization/` or appropriate location

### For Codebase-Level Analysis:
- **Architecture assessment**: Overall organizational pattern evaluation
- **Strategic recommendations**: High-level organization strategy (workflow/feature/hybrid)
- **Priority improvements**: Top 5-10 organizational enhancements
- **Best practices alignment**: Comparison with research-backed standards
- **Scalability analysis**: Assessment of current structure's growth capacity
- **Saved plan document**: Markdown file (160-240 lines, target ~200 lines) containing complete reorganization plan saved to `Documentation/Organization/` or appropriate location

## Quality Standards

### Analysis Rigor
- **Comprehensive inventory**: Complete file listing with categorization
- **Dependency mapping**: Full import relationship analysis
- **Path reference audit**: Complete identification of all relative path patterns (`Path(__file__).resolve().parents[N]`, `sys.path.insert()`, relative imports, data paths, cursor rules file references)
- **Pattern recognition**: Accurate classification of organizational approach
- **Research alignment**: Recommendations based on established best practices

### Recommendations Quality
- **Actionable**: Specific, implementable suggestions with clear rationale
- **Context-aware**: Tailored to research/data science project needs
- **Minimal disruption**: Preserve existing workflow and execution order
- **Path-safe**: All relative path references explicitly updated and verified to maintain file connections
- **Scalable**: Structure supports future growth without major refactoring

### Documentation Standards
- **Visual clarity**: Folder trees and structure diagrams
- **Clear rationale**: Explain why each recommendation improves organization
- **Migration safety**: Identify risks and provide mitigation strategies
- **Reproducibility**: Document analysis methodology for future reference
- **Plan document format**: Saved markdown document must be concise (160-240 lines, target ~200 lines) while maintaining completeness
- **Todo-driven execution**: After saving plan, immediately create and execute todo list for systematic implementation

## Best Practices Applied

1. **Flat over deep**: Prefer flatter structures (<3 levels) with clear naming
2. **Group by change**: Organize files that change together
3. **Workflow-first for research**: Prioritize sequential pipeline clarity
4. **Subfolders when needed**: Add subfolders only when category has >5-7 files
5. **Consistent naming**: Maintain clear, descriptive naming conventions
6. **Preserve execution order**: Maintain workflow sequence in research projects
7. **Documentation alignment**: Ensure structure supports methodology documentation
8. **Path integrity**: **CRITICAL** - Always verify and update relative path references when moving files:
   - Calculate new `parents[N]` depth for each moved file
   - Update all `sys.path.insert()` statements
   - Verify import resolution from new locations
   - Test data file access paths
   - Ensure cross-file connections remain functional

## Usage Examples

```bash
# Analyze entire codebase organization strategy
/organize-code

# Focus on feature engineering folder
/organize-code Code/python/_1_*

# Analyze analysis pipeline organization
/organize-code Code/python/_2_*

# Review export/visualization structure
/organize-code Code/python/_4_*
```

## Validation Checklist

- [ ] Complete file inventory generated
- [ ] Organizational pattern correctly identified
- [ ] Issues flagged with specific examples
- [ ] Recommendations align with research best practices
- [ ] Proposed structure maintains workflow order
- [ ] **All relative path references identified and mapped** (`Path(__file__).resolve().parents[N]`, `sys.path.insert()`, relative imports)
- [ ] **Path depth calculations completed** for all moved files (old depth → new depth)
- [ ] Migration plan includes import updates
- [ ] **Migration plan includes explicit relative path updates** with before/after examples
- [ ] **Cursor rules file references identified** - all `.cursor/rules/*.mdc` files scanned for file path references
- [ ] **Cursor rules updates planned** - mapping of old paths to new paths for cursor rule documentation
- [ ] **Connection verification steps documented** (import resolution, data access, cross-module dependencies)
- [ ] **Reorganization plan document saved** (160-240 lines, target ~200 lines) to `Documentation/Organization/` or appropriate location
- [ ] **Todo list created** using `todo_write` tool with actionable migration tasks (including cursor rules updates)
- [ ] **Todo list execution initiated** - working through tasks systematically
- [ ] **Cursor rules updated** - all file path references in `.cursor/rules/*.mdc` files verified and updated
- [ ] Risk assessment completed (especially path-related breaking changes)
- [ ] Documentation updates identified

Analyze codebase organization and provide research-backed recommendations for optimal folder structure, file organization, and migration strategies.

