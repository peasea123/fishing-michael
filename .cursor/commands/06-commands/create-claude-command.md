# create-claude-command

Design and generate a new Claude Code slash command for specialized research, analytical, or workflow automation needs.

## Claude Code Command Development Process

### Step 1: Command Requirements Analysis
Analyze the specified task to understand Claude Code command requirements:
- **Primary objective**: What specific automation or workflow does this command enable?
- **Execution context**: Terminal-based agentic coding environment with file system access
- **Input parameters**: What arguments or context will users provide via `$ARGUMENTS`?
- **Tool integration**: Which Claude Code tools (Read, Write, Run, etc.) are required?
- **Scope determination**: Project-scoped (`.claude/commands/`) vs user-scoped (`~/.claude/commands/`)

### Step 2: Claude Code Command Architecture
Design the command structure following Claude Code conventions:
- **YAML Front Matter**: Include `description`, `argument-hint`, and `allowed-tools` metadata
- **File naming**: Descriptive, hyphenated name following Claude Code naming patterns
- **Markdown structure**: Clear sections with headers, code blocks, and process flows
- **Tool permissions**: Specify exact tools needed with proper wildcard patterns
- **Error boundaries**: Anticipate common failure modes and provide recovery guidance

### Step 3: Implementation Specifications
Create comprehensive Claude Code command including:
- **Front matter header**: YAML metadata with description and tool permissions
- **Opening directive**: Clear purpose statement and execution context
- **Process methodology**: Step-by-step instructions optimized for terminal environment
- **Tool integration**: Proper tool calling syntax and parameter handling
- **Output formatting**: Structured deliverables with validation checkpoints
- **Usage patterns**: Command invocation examples and parameter combinations

### Step 4: Claude Code Integration Standards
Ensure command meets Claude Code best practices:
- **Tool specificity**: Use exact tool names with appropriate wildcards (Read(*), Write(*), Run)
- **File operations**: Leverage Claude Code's native file system access patterns
- **Context awareness**: Utilize CLAUDE.md files and project-specific documentation
- **Execution safety**: Include validation steps and error handling for destructive operations
- **Performance optimization**: Minimize token usage through focused, single-purpose commands

## Claude Code Command Format Requirements

### YAML Front Matter Structure
```yaml
---
description: "Brief description of command purpose and functionality"
argument-hint: "[parameter-description]"
allowed-tools: "Read(*), Write(*), Run, Search"
---
```

### Command Body Structure
- **Purpose Statement**: Clear objective and expected outcomes
- **Process Sections**: Numbered steps with specific tool usage
- **Code Examples**: Proper Claude Code tool syntax and formatting
- **Validation Steps**: Success criteria and error handling
- **Usage Examples**: Real-world invocation scenarios

### Tool Integration Patterns
- **File Operations**: Use Read(*) and Write(*) for comprehensive file access
- **Terminal Commands**: Leverage Run tool for system operations
- **Search Operations**: Employ grep or codebase_search for code analysis
- **External APIs**: Integrate MCP tools when available

## Deliverable Requirements
Generate a complete `.md` file with:
- Valid YAML front matter with all required fields
- Clear, actionable instructions under 200 lines
- Proper Claude Code tool syntax and integration
- Comprehensive error handling and validation steps
- Save the command in `.claude/commands/` directory
- Include usage examples and parameter documentation

Create a new Claude Code slash command for the specified task or automation need:
