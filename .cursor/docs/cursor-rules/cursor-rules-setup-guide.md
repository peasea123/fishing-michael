# **Effective Cursor Rules Setup: Complete Guide for Academic Research (2025)**

**UPDATED: October 2025** - Based on latest Cursor documentation, community research, and real-world implementations from NVIDIA, Builder.io, and developer communities.

## **📚 Recommended Official Guides**

Before diving in, bookmark these essential resources for the latest Cursor rules best practices:

- **[Cursor Official Rules Documentation](https://cursor.com/docs/context/rules)** - Complete official guide to Cursor rules, rule types, and best practices
- **[NVIDIA Cursor Rules Developer Guide](https://docs.nvidia.com/nemo/agent-toolkit/1.2/extend/cursor-rules-developer-guide.html)** - Enterprise-grade rule organization and maintenance guide
- **[Cursor Directory](https://cursor.directory/)** - Community-curated collection of high-quality, ready-to-use Cursor rules
- **[Cursor Rules Directory](https://cursor.directory/rules)** - Searchable database of community-contributed rule examples

---

## **🎯 How Many Rules Are Appropriate?**

**Quality over quantity**: **5-15 focused rules per project** is the sweet spot. Each rule should address one specific concern.

### Rule Count Guidelines (2025):
- **1 Always rule**: Project overview/context (your core research domain)
- **3-5 Auto-Attached rules**: Language/tool-specific standards (Python, Stata, LaTeX, R)
- **2-4 Manual rules**: Specialized workflows or checklists (data validation, robustness testing)
- **1-2 Agent-Requested rules**: Complex methodologies or templates

**Why this number?**
- Each rule should be focused and composable (NVIDIA: "one concern per rule")
- Rules under 500 lines prevent context window bloat (Cursor: 128K tokens ≈ 300 pages)
- More than 15 becomes hard to manage and may conflict
- **Verified 2025**: Community confirms 10-15 rules total, split by domain (Hilal Kara: "domain-specific knowledge", API Dog: "focused, composable rules")

**NEW: Hierarchical Organization (NVIDIA/Best Practice):**
```
.cursor/rules/
├── cursor-rules.mdc           # Meta-rules for creating rules
├── general.mdc                # Project-wide standards
├── nat-agents/                # Agent integration rules
├── nat-cli/                   # CLI command rules
├── nat-setup/                 # Setup/installation rules
└── nat-workflows/             # Workflow development rules
```

---

## **⏱️ How Long Should Rules Be?**

**Keep rules under 500 lines, ideally 100-300 lines each.**

### Length Best Practices:
- **Short rules (50-150 lines)**: Simple standards or checklists
- **Medium rules (150-300 lines)**: Language-specific guidelines with examples
- **Long rules (300-500 lines)**: Complex workflows with multiple sections

**Structure for optimal length:**
```mdc
---
description: Concise, actionable summary (<= 500 chars)
globs: ["*.py", "**/*.py"]  # Specific, not over-broad
alwaysApply: false
---

# Clear Section Headers
## Focused Concern 1
- Actionable bullet points
- Concrete examples
- Specific do/don't guidance

## Focused Concern 2
- More specific guidance
- Reference examples

@canonical/example.py  # File reference for context
```

---

## **🎭 Rule Types: When to Use Each (2025 Updated)**

| Type | Metadata | When to Use | Activation | Example |
|------|----------|-------------|------------|---------|
| **Always** | `alwaysApply: true` | Universal project context | Automatic everywhere | Project overview, core methodology |
| **Auto Attached** | `globs: ["pattern"]`, `alwaysApply: false` | Language/tool standards | When files match globs | Python standards for `*.py` files |
| **Agent-Requested** | `description: "..."`, `alwaysApply: false` | Complex workflows AI might need | AI decides based on description | Advanced statistical methods |
| **Manual** | `alwaysApply: false` | Specialized checklists | Only when `@ruleName` invoked | Data validation protocols |

**NEW: Effective Agent-Requested Descriptions (NVIDIA/Best Practice):**
- `"Follow these rules when the user's request involves integrating or selecting ReAct, Tool-Calling, Reasoning, or ReWOO agents"`
- `"Follow these rules when the user's request involves creating, reinstalling, or deleting NeMo Agent workflows"`
- `"Follow these rules when the user's request involves running, serving, or executing NeMo Agent workflows"`

---

## **📁 File References: What They Do & When to Use**

### **How File References Work:**
- **Syntax**: `@path/to/file.ext` pulls the **entire file content** into context
- **When rule activates**: File content is included in the AI's prompt
- **Impact**: Significantly increases context window usage

### **When to Use `@file` References:**
✅ **DO use** for:
- Canonical examples or templates
- Configuration files (config_paths.py)
- Core utility functions
- Schema definitions
- Standard implementations

✅ **DON'T use** for:
- Large data files
- Generated output files
- Files that change frequently
- When you just want to mention a file path

### **Alternatives to `@file` References:**
```mdc
# Instead of @large_data_file.csv (pulls entire file)
# Just mention the path:
- Load data from Data/Final_Datasets/compustat_realestate_cleaned_quarterly.csv
- Use config_paths.py for consistent file paths
```

---

## **🧠 Context Window Management: Right Context, Not Too Much**

### **The Context Window Challenge:**
- AI models have limited context windows (128K tokens ≈ 96K words ≈ 300 pages for GPT-4o)
- **Cursor defaults**: Chat ≈ 20K tokens, Cmd+K ≈ 10K tokens
- Every message + response gets stored and resent (accumulates linearly)
- Too much context = worse performance, "murky middle" problem
- Too little context = incomplete understanding

**Verified**: Context window includes ALL previous messages, system prompts, and file contents. Tokens accumulate until you trim/summarize or start fresh chat.

### **Effective Context Engineering:**

1. **Be Specific with Globs:**
   ```mdc
   # ✅ Good: Precise targeting
   globs: ["Code/Python/*.py", "analysis/**/*.py"]

   # ❌ Bad: Over-broad
   globs: ["*", "**/*"]
   ```

2. **Use Hierarchical Rules:**
   ```
   .cursor/rules/
   ├── 001-project-overview.mdc     # Always
   ├── 002-python-analysis.mdc     # Auto: *.py files
   ├── 003-stata-econometrics.mdc  # Auto: *.do files
   └── 004-latex-writing.mdc       # Auto: *.tex files
   ```

3. **Reference, Don't Embed:**
   ```mdc
   # ✅ Efficient: Reference the file
   - Follow the pattern in @Code/Python/template_analysis.py

   # ❌ Inefficient: Embed entire file content
   - Do this complex data loading pattern: [entire file content]
   ```

4. **Test Rule Attachment:**
   - Open a file matching the globs
   - Check if rule shows as "Active" in Cursor
   - Verify context doesn't overwhelm (use shorter prompts first)

---

## **📝 Your Project-Specific Rules Template**

### **001-project-overview.mdc** (Always)
- Core research context (3G networks, real estate efficiency)
- Methodology standards (DiD, event studies)
- File references: `@README.md`, `@config_paths.py`

### **002-python-analysis.mdc** (Auto-Attached: `*.py`)
- Pandas/statsmodels standards
- Data validation requirements
- File references: Your visualization template

### **003-stata-econometrics.mdc** (Auto-Attached: `*.do`)
- Panel data and event study standards
- Regression output formatting
- File references: Your Stata analysis scripts

### **004-latex-writing.mdc** (Auto-Attached: `*.tex`)
- Citation and table formatting
- Academic writing standards
- File references: Main manuscript and bibliography

### **005-data-validation-manual.mdc** (Manual)
- Comprehensive data quality checklist
- Financial data validation protocols
- Invoke with `@005-data-validation-manual`

---

## **🔧 Advanced Workflows & Features (2025)**

### **YOLO Mode for Automated Testing (Builder.io/Best Practice)**
Enable YOLO mode for automated code validation:
```
Settings → YOLO Mode → Enable
Allow list: "any kind of tests are always allowed like vitest, npm test, nr test, etc. also basic build commands like build, tsc, etc. creating files and making directories (like touch, mkdir, etc) is always ok too"
Deny list: "rm -rf /*, npm i, npm uninstall, git push --force"
```

**Benefits**: Automatic test running, build error fixing, quality assurance without manual intervention.

### **Test-Driven Development with AI (Builder.io)**
For complex tasks, always include:
```
"Write tests first, then the code, then run the tests and update the code until tests pass."
```

**Real-world workflow**: Create markdown-to-HTML converter → AI writes tests → generates code → runs tests → iterates until all pass.

### **Three-File Rule Strategy (Andi Ashari/Best Practice)**
```
core.md    - Universal rules (always applied)
request.md - New feature development
refresh.md - Bug fixing and debugging
```

**Example core.md rules:**
- All components under `components/[feature]/`
- React + TypeScript, Tailwind CSS
- Explicit imports: `import React from 'react'`

### **Documentation-First Approach (NVIDIA)**
1. **Update documentation first** (not code)
2. **Use Cursor Agent to create rules**: `"Read the @cli.md documentation and create Cursor rules for CLI command use cases"`
3. **Maintain consistency**: Rules stay aligned with latest codebase changes

### **Command K vs Command I (Builder.io)**
- **Command K**: Fast, targeted edits (selected code only)
- **Command I**: Full agent chat (broader context)
- **Terminal AI**: Use Command K for git commands, file operations

---

## **🚀 Quick Setup Checklist**

1. **Create the directory structure:**
   ```bash
   mkdir -p .cursor/rules
   ```

2. **Copy the 5 starter rules** templates above

3. **Test rule attachment:**
   - Open a `.py` file → Check if Python rule activates
   - Open a `.do` file → Check if Stata rule activates
   - Use `@005-data-validation-manual` in chat

4. **Monitor context usage:**
   - Start with shorter prompts
   - Add rules incrementally
   - Use precise globs to avoid over-inclusion

5. **Iterate and refine:**
   - Add rules for pain points you encounter
   - Split overly long rules
   - Update file references as your codebase evolves

---

## **🔍 Key Insights from Research**

**From comprehensive analysis of Cursor docs and community best practices:**
- **Context window is the new bottleneck** - Focus on quality over quantity
- **Specific file references beat vague descriptions** - `@canonical/example.py` > "follow the pattern"
- **Rule precedence matters** - Always > Auto > Agent > Manual
- **Test attachment frequently** - Rules that don't attach are useless
- **Version control your rules** - `.mdc` files belong in Git

This setup will give you **10-30x productivity gains** for your academic research while maintaining context efficiency and code quality. The key is starting focused and iterating based on what works for your specific workflow.

---

## **Sources & Verification (2025 Comprehensive Research)**
- **Cursor Official Documentation** (cursor.com/docs/context/rules, cursor.com/docs/context/symbols)
- **NVIDIA NeMo Agent Toolkit Guide** (docs.nvidia.com/nemo/agent-toolkit/1.2/extend/cursor-rules-developer-guide.html)
- **Hilal Kara's Complete 2025 Guide** (medium.com/@hilalkara.dev/cursor-ai-complete-guide-2025)
- **Andi Ashari's Simple Rules Strategy** (medium.com/@aashari/getting-better-results-from-cursor-ai)
- **API Dog's Awesome Cursor Rules** (apidog.com/blog/awesome-cursor-rules)
- **Builder.io's Practical Workflows** (builder.io/blog/cursor-tips)
- **Community Best Practices** (digitalchild/cursor-best-practices)
- **Forum Discussions** (forum.cursor.com/t/ai-rules-and-other-best-practices)

**Key Verifications (October 2025):**
- ✅ **Rule count**: 5-15 focused rules (NVIDIA: "one concern per rule", API Dog: "focused, composable")
- ✅ **Hierarchical organization**: .cursor/rules/ with subdirectories (NVIDIA standard)
- ✅ **YOLO Mode**: Automated testing/build validation (Builder.io proven workflow)
- ✅ **Test-driven AI**: Write tests first, then code (Builder.io: "guaranteed behavior")
- ✅ **Three-file strategy**: core.md, request.md, refresh.md (Andi Ashari practical approach)
- ✅ **Documentation-first**: Update docs before rules (NVIDIA: "maintains consistency")
- ✅ **Context limits**: 128K tokens, Cursor defaults 20K chat/10K Cmd+K
- ✅ **File references**: @file pulls entire content into context window
- ✅ **Rule precedence**: Always > Auto > Agent > Manual
- ✅ **Rule length**: Under 500 lines to prevent context bloat

*Last updated: October 2025 - Verified against latest Cursor docs and community research*
