# Cursor AI Master Guide: Commands, Environment, MCP, & Rules

## Overview

Cursor AI transforms traditional IDEs into collaborative AI development environments. This guide consolidates essential knowledge from multiple specialized guides into one comprehensive resource for effective Cursor AI usage.

### Core Components

- **Commands**: Custom slash commands for specialized workflows
- **Environment**: IDE configuration and optimization
- **MCP**: Model Context Protocol for external tool integration
- **Rules**: Project-specific AI behavior configuration

---

## Part 1: Environment Setup & Optimization

### 1.1 Essential Extensions
Install these core extensions for optimal Cursor experience:

| Extension | Purpose | Installation |
|-----------|---------|-------------|
| **Jupyter** | Interactive Python cells in `.py` files | `ms-toolsai.jupyter` |
| **Python** | Core Python support with IntelliSense | `ms-python.python` |
| **GitLens** | Advanced Git functionality | `eamodio.gitlens` |
| **LaTeX Workshop** | LaTeX editing and compilation | `James-Yu.latex-workshop` |

### 1.2 Python Environment Configuration

```bash
# Create project-specific virtual environment
python -m venv venv
# Activate on Windows
venv\Scripts\activate
# Activate on macOS/Linux
source venv/bin/activate
# Install dependencies
pip install -r requirements.txt
```

### 1.3 Directory Structure Best Practices

```text
.project_root/
├── .cursor/
│   ├── rules/           # Project rules
│   └── commands/        # Custom commands
├── .gitignore          # Exclude venv, __pycache__, etc.
├── requirements.txt    # Python dependencies
└── README.md          # Project documentation
```

### 1.4 Key Settings & Configurations

- **Python Interpreter**: Set to project virtual environment
- **YOLO Mode**: Enable for automated testing and fixes
- **Context Window Management**: Monitor token usage in complex projects

---

## Part 2: Rules System Deep Dive

### 2.1 Rule Types & Activation

| Rule Type | File Location | Activation | Use Case |
|-----------|---------------|------------|----------|
| **Always** | `.cursor/rules/name.mdc` | `alwaysApply: true` | Universal project standards |
| **Auto-Attached** | `.cursor/rules/name.mdc` | `globs: ["*.py"]` | Language-specific rules |
| **Agent-Requested** | `.cursor/rules/name.mdc` | `description: "..."` | Specialized workflows |
| **Manual** | `.cursor/rules/name.mdc` | `alwaysApply: false` | Optional checklists |

### 2.2 Rule File Structure Template

```mdc
---
description: "Brief, actionable summary of rule purpose"
globs: ["*.py", "**/*.py"]  # File patterns for auto-activation
alwaysApply: false          # true for always-active, false for conditional
---

# Section 1: Core Guidelines
- Specific, actionable bullet points
- Concrete examples and standards
- Clear do/don't guidance

# Section 2: Implementation Details
- Code examples and patterns
- File references using @path/to/file
- Integration with other tools

@canonical/example.py  # Reference example files
```

### 2.3 Best Practices for Rule Creation

**Rule Count Guidelines:**

- **5-15 rules per project** (Quality over quantity)
- **Keep rules under 500 lines** (ideally 100-300 lines)
- **One concern per rule** (focused and composable)

**Effective Rule Patterns:**

```mdc
# ✅ Good: Specific and targeted
globs: ["Code/Python/*.py", "analysis/**/*.py"]

# ❌ Bad: Overly broad
globs: ["*", "**/*"]
```

**File References:**

- `@path/to/file.ext` pulls entire file content into context
- Use for canonical examples, templates, and core utilities
- Reserve for files that change infrequently
- Avoid large data files or generated outputs

### 2.4 Hierarchical Organization

```text
.cursor/rules/
├── cursor-rules.mdc      # Meta-rules for rule creation
├── general.mdc           # Project-wide standards
├── nat-agents/           # Agent integration rules
├── nat-cli/              # CLI command rules
├── nat-setup/            # Setup/installation rules
└── nat-workflows/        # Workflow development rules
```

---

## Part 3: Commands System

### 3.1 Command Creation & Structure

Commands are stored as `.md` files in `.cursor/commands/` and accessed via `/command-name`.

**Essential Command Structure:**

```markdown
# command-name

Brief description of what the command does.

## Section 1: Setup/Requirements
- Prerequisites and context needed
- Input expectations and formats

## Section 2: Process Steps
1. Step-by-step execution instructions
2. Quality checkpoints and validation
3. Error handling procedures

## Section 3: Output Specifications
- Expected deliverables and formats
- File naming conventions
- Success criteria

Execute the specified task with these parameters.
```

### 3.2 Command Development Best Practices

**Language & Tone:**

- Use direct, imperative language ("Generate", "Create", "Analyze")
- Be specific about outputs and quality standards
- Avoid ambiguity - specify exact requirements

**Performance Optimization:**

- Keep commands under 150 lines
- Structure with clear sections and headers
- Include quality assurance checklists
- Test with typical and edge cases

### 3.3 Essential Commands Template

```markdown
# analyze-data

Perform comprehensive data analysis with statistical summaries and visualizations.

## Data Requirements
- Clean, structured dataset (CSV/Excel/database)
- Clear variable types and descriptions
- Handle missing values appropriately

## Analysis Framework
1. **Data Quality Check**: Validate structure, missing values, outliers
2. **Descriptive Statistics**: Summary stats, distributions, correlations
3. **Visual Exploration**: Generate appropriate plots and charts
4. **Statistical Testing**: Normality, relationships, patterns

## Output Deliverables
- Statistical summary report
- Generated visualization files
- Data quality assessment
- Recommendations for further analysis

## Quality Standards
- [ ] Proper handling of missing data
- [ ] Statistically appropriate visualizations
- [ ] Clear interpretation of results
- [ ] Reproducible analysis code

Analyze the specified dataset with comprehensive statistical methods.
```

---

## Part 4: Model Context Protocol (MCP)

### 4.1 MCP Fundamentals

The Model Context Protocol enables AI agents to securely interact with external tools and data sources through standardized client-server architecture.

**Core Components:**
- **Tools**: Executable functions exposed by servers
- **Resources**: Data sources that can be read
- **Prompts**: Reusable prompt templates

### 4.2 MCP Server Ecosystem

#### Top-Tier Recommended Servers

**Development & Productivity:**

- **GitHub Official MCP Server**: Programmatic repository management, issue tracking, CI/CD
- **mcp-python-interpreter**: Secure Python code execution with environment isolation
- **RMCP**: Advanced statistical analysis with R integration

**Data & APIs:**

- **54yyyu/zotero-mcp**: Citation management with semantic search
- **imbenrabi/Financial-Modeling-Prep-MCP-Server**: Comprehensive financial data access
- **zellerhaus/batchdata-mcp-real-estate**: Residential property data integration

**Workflow Automation:**

- **Zapier MCP Server**: Connect to 8,000+ applications
- **Yeok-c/latex-mcp-server**: LaTeX manuscript preparation

#### Server Discovery & Registry

- **GitHub MCP Registry**: Official, curated repository
- **Smithery.ai**: App store model with categories
- **MCPServerFinder.com**: Community-driven directory

### 4.3 MCP Server Implementation

**Local Server Setup:**

```bash
# Clone repository
git clone https://github.com/example/mcp-server.git
cd mcp-server

# Install dependencies
npm install  # or pip install for Python servers

# Configure environment
cp .env.example .env
# Edit .env with API keys and settings

# Start server
npm start  # or python main.py
```

**Configuration in Cursor:**

```json
{
  "mcp": {
    "servers": {
      "github": {
        "command": "npx",
        "args": ["-y", "@modelcontextprotocol/server-github"],
        "env": {
          "GITHUB_PERSONAL_ACCESS_TOKEN": "your_token"
        }
      }
    }
  }
}
```

### 4.4 Security & Governance

**Essential Security Practices:**

- **Vetted Registry**: Only use servers from trusted sources
- **Tool Permissions**: Enable/disable specific capabilities
- **Data Governance**: Local deployment for sensitive data
- **Regular Updates**: Keep servers updated for security patches

**Risk Mitigation:**

- Review server descriptions for malicious instructions
- Monitor API permissions and data access
- Use principle of least privilege for tool access

---

## Part 5: Best Practices & Optimization

### 5.1 Context Management

**Context Window Optimization:**
- AI models have 128K token limits (≈96K words)
- Cursor defaults: 20K tokens (chat), 10K tokens (Cmd+K)
- Every message + response accumulates linearly

**Effective Context Engineering:**

1. **Precise Globs**: Use specific file patterns over broad matches
2. **Reference vs. Embed**: Use `@file` sparingly, reference paths when possible
3. **Hierarchical Rules**: Organize rules by domain and scope
4. **Test Activation**: Verify rules attach to intended files

### 5.2 AI Interaction Modes

| Mode | Shortcut | Best For | Context Scope |
|------|----------|----------|---------------|
| **Chat** | `Ctrl/Cmd+L` | Strategic planning, codebase inquiry | Full project context |
| **Inline Edit** | `Ctrl/Cmd+K` | Surgical code modifications | Selected code only |
| **Composer** | `Ctrl/Cmd+I` | Multi-file project orchestration | Configurable scope |
| **Terminal** | `Ctrl/Cmd+K` in terminal | Command generation | Current directory |

### 5.3 Prompt Engineering Principles

**Core Principles:**

- **Role Definition**: Establish AI's role clearly ("You are an expert data scientist...")
- **Negative Constraints**: Use "NEVER" and "DO NOT" to prevent errors
- **Task Decomposition**: Break complex requests into clear steps
- **Context Provision**: Reference relevant files and documentation

**Effective Prompt Structure:**
```markdown
You are an expert [DOMAIN] specializing in [SUBDOMAIN].

Given the codebase in @project and the requirements in @specs,
[DETAILED TASK DESCRIPTION]

Step 1: [Specific action]
Step 2: [Specific action]
Step 3: [Validation step]

Output: [Expected format and deliverables]
```

### 5.4 YOLO Mode & Automated Workflows

**YOLO Mode Configuration:**

```text
Settings → YOLO Mode → Enable
Allow list: "any kind of tests are always allowed like vitest, npm test, nr test, etc. also basic build commands like build, tsc, etc. creating files and making directories (like touch, mkdir, etc) is always ok too"
Deny list: "rm -rf /*, npm i, npm uninstall, git push --force"
```

**Benefits:**

- Automated test execution and validation
- Build error detection and fixing
- Quality assurance without manual intervention

### 5.5 Test-Driven Development with AI

**TDD Workflow:**

1. **Write Tests First**: Define expected behavior
2. **AI Generates Code**: Use prompts to create implementation
3. **Run Tests**: Execute and validate
4. **Iterate**: Refine code until tests pass

**Example Prompt:**

```markdown
Write comprehensive unit tests for the data processing function, including:
- Normal input scenarios
- Edge cases (empty data, invalid formats)
- Error conditions

Then generate the function implementation that passes all tests.
```

---

## Part 6: Advanced Usage & Troubleshooting

### 6.1 Performance Optimization

**Rule Optimization:**
- Limit rule count to 5-15 per project
- Keep individual rules under 500 lines
- Use specific globs to avoid over-inclusion
- Reference files rather than embedding large content

**Command Optimization:**
- Keep commands under 150 lines
- Use clear, actionable language
- Include validation checkpoints
- Test with various inputs

### 6.2 Common Issues & Solutions

**Rules Not Activating:**
- Check glob patterns match file paths
- Verify rule syntax and metadata
- Test with files that should match patterns
- Restart Cursor if issues persist

**MCP Server Connection Issues:**
- Verify server is running and accessible
- Check configuration in Cursor settings
- Review server logs for error messages
- Ensure proper authentication credentials

**Context Window Overload:**
- Break large tasks into smaller steps
- Use more specific file references
- Split complex prompts into phases
- Monitor token usage in chat

### 6.3 Workflow Integration

**Version Control Integration:**
- Store `.cursor/` directory in Git
- Document rule and command purposes
- Version control enables team consistency
- Backup configurations across machines

**Team Collaboration:**
- Share rule and command templates
- Document project-specific conventions
- Establish coding standards via rules
- Train team members on Cursor workflows

### 6.4 Future-Proofing Your Setup

**Stay Updated:**
- Monitor Cursor changelog for new features
- Follow MCP ecosystem developments
- Update extensions regularly
- Review and refine rules quarterly

**Scalability Considerations:**
- Modular rule organization for large projects
- Hierarchical command structure
- Performance monitoring and optimization
- Backup and recovery procedures

---

## Quick Start Checklist

**Initial Setup:**

- [ ] Install essential extensions (Jupyter, Python, GitLens)
- [ ] Create `.cursor/rules/` and `.cursor/commands/` directories
- [ ] Set up project virtual environment
- [ ] Configure Python interpreter in Cursor

**Rules Configuration:**
- [ ] Create core project rules (coding standards, file organization)
- [ ] Set up language-specific auto-attached rules
- [ ] Add manual rules for specialized workflows
- [ ] Test rule activation on sample files

**Commands Development:**
- [ ] Identify common project tasks
- [ ] Create specialized slash commands
- [ ] Test commands with typical use cases
- [ ] Document command purposes and usage

**MCP Integration:**
- [ ] Identify needed external tools/data sources
- [ ] Research and select appropriate MCP servers
- [ ] Configure and test server connections
- [ ] Implement security and access controls

**Optimization:**
- [ ] Enable YOLO mode for automated workflows
- [ ] Set up version control for Cursor configurations
- [ ] Monitor context usage and performance
- [ ] Regularly review and update rules/commands

---

## Resources & Further Reading

- **Cursor Official Documentation**: [cursor.com/docs](https://cursor.com/docs)
- **MCP Specification**: [modelcontextprotocol.io](https://modelcontextprotocol.io)
- **GitHub MCP Registry**: [github.com/modelcontextprotocol/registry](https://github.com/modelcontextprotocol/registry)
- **Cursor Community**: [forum.cursor.com](https://forum.cursor.com)
- **MCP Server Directory**: [mcpservers.org](https://mcpservers.org)

This guide consolidates the most critical aspects of Cursor AI usage. Start with basic setup, then progressively add rules, commands, and MCP servers as your needs evolve. Regular refinement based on your specific workflows will maximize productivity gains.
