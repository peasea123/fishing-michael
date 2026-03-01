# Cursor AI Command Writing Guide & Generator

## Part I: Comprehensive Guide to Writing Effective Cursor AI Commands

### Core Principles

**1. Command Structure**
- Use clear, descriptive command names (hyphenated for multi-word commands)
- Keep commands under 150 lines for optimal performance
- Structure with logical sections using markdown headers
- Start with a brief, actionable description

**2. Language and Tone**
- Use direct, imperative language ("Generate", "Create", "Analyze")
- Be specific about expected outputs and deliverables
- Avoid ambiguous terms - specify exactly what you want
- Use academic/professional terminology appropriate to context

**3. Context and Scope**
- Provide sufficient background for the AI to understand the task
- Define any specialized terms or methodologies
- Specify quality standards and academic rigor expectations
- Include relevant constraints (time, format, style requirements)

### Essential Components

**Opening Statement**
- Clear, one-sentence description of what the command does
- Should immediately communicate the command's purpose

**Process Steps**
- Break complex tasks into logical phases or steps
- Use numbered lists for sequential processes
- Use bullet points for parallel or optional activities
- Include quality checkpoints and validation steps

**Output Specifications**
- Clearly define what formats are expected (code, tables, text)
- Specify file naming conventions and directory structures
- Include template examples when helpful
- Define success criteria and quality metrics

**Integration Points**
- Reference how the command fits into broader workflows
- Mention compatibility with other commands or tools
- Specify any prerequisites or dependencies

### Advanced Techniques

**Conditional Logic**
```markdown
If working with financial data:
- Apply winsorization at 1st/99th percentiles
- Include industry and year fixed effects

If working with survey data:
- Check for survey design effects
- Apply appropriate sampling weights
```

**Template Integration**
```markdown
## Standard Output Format
```stata
// Generated code template
regress outcome treatment controls, robust cluster(id)
esttab using "Results/[TABLE_NAME].tex", nogap replace
```
```

**Error Prevention**
```markdown
## Quality Assurance Checklist
- [ ] All variable names follow project conventions
- [ ] Code includes proper documentation
- [ ] Results tables use nogap option for LaTeX
- [ ] Statistical significance tests included
```

### Common Pitfalls to Avoid

**1. Overly Generic Instructions**
- ❌ "Analyze the data"
- ✅ "Perform event study analysis using market model with [-250,-31] estimation window"

**2. Missing Context**
- ❌ "Create a regression table"
- ✅ "Generate publication-quality regression table following Journal of Finance formatting standards"

**3. Unclear Output Expectations**
- ❌ "Provide results"
- ✅ "Generate Stata .do file, LaTeX table output, and interpretation paragraph"

**4. No Quality Standards**
- ❌ "Make it good"
- ✅ "Ensure academic rigor appropriate for top-tier finance journal submission"

### Best Practices for Academic Commands

**Methodology Specifications**
```markdown
## Analysis Standards
- Use staggered difference-in-differences (Sun & Abraham, 2021)
- Cluster standard errors at firm level
- Include industry and year fixed effects
- Report F-statistics for weak instruments (if applicable)
```

**Citation Integration**
```markdown
## Literature Foundation
Reference and build upon:
- Seminal papers in the field
- Recent methodological advances
- Established measurement approaches
- Standard robustness checks
```

**Reproducibility Requirements**
```markdown
## Code Quality Standards
- Well-commented code with clear variable definitions
- Modular structure allowing easy modifications
- Comprehensive logging of all analytical steps
- Version control compatible file organization
```

### Testing Your Commands

**Validation Steps**
1. Test command with typical use cases
2. Try edge cases and unusual inputs
3. Verify outputs meet specified quality standards
4. Check integration with existing workflow
5. Confirm reproducibility of results

**Performance Optimization**
- Monitor command execution time
- Streamline unnecessarily verbose instructions  
- Remove redundant specifications
- Balance comprehensiveness with efficiency

---

## Part II: Command Creator Meta-Command

**File:** `.cursor/commands/create-command.md`

```markdown
# create-command

Design and generate a new Cursor AI slash command tailored to specific research, analytical, or workflow needs.

## Command Development Process

### Step 1: Requirements Analysis
Analyze the specified task or process to understand:
- **Primary objective**: What specific problem does this command solve?
- **User context**: Academic, professional, or technical domain requirements
- **Input expectations**: What information will users typically provide?
- **Output requirements**: What deliverables should be produced?
- **Quality standards**: What level of rigor and documentation is needed?

### Step 2: Command Architecture
Design the command structure with:
- **Clear naming**: Descriptive, hyphenated command name following conventions
- **Logical organization**: Well-structured sections with appropriate headers
- **Process flow**: Sequential steps or parallel activities as appropriate
- **Integration points**: How the command fits into broader workflows
- **Error handling**: Anticipate common issues and provide guidance

### Step 3: Implementation Specifications
Create comprehensive command including:
- **Opening statement**: Brief, clear description of command purpose
- **Process methodology**: Step-by-step instructions with academic rigor
- **Output formats**: Specific deliverable requirements with examples
- **Quality assurance**: Validation steps and success criteria
- **Usage examples**: Typical use cases and parameter options

### Step 4: Academic Integration
Ensure the command meets scholarly standards:
- **Methodological rigor**: Appropriate analytical approaches for the domain
- **Citation standards**: Proper reference formats and academic conventions  
- **Reproducibility**: Code and analysis documentation requirements
- **Publication quality**: Output suitable for academic or professional use

## Deliverable Requirements
Generate a complete `.md` file with:
- Proper Cursor AI command format
- Clear, actionable instructions under 150 lines
- Academic rigor appropriate for research contexts
- Integration with existing workflow and tools
- Quality assurance checkpoints and validation steps

Create a new Cursor AI slash command for the specified task or process:
```

### Usage Instructions

**For the Guide**: Reference this document when writing new commands to ensure best practices and comprehensive coverage.

**For the Command Creator**: Use `/create-command` followed by your specific need:
- `/create-command panel data diagnostics for finance research`
- `/create-command automated literature search and citation`  
- `/create-command stata robustness check generator`
- `/create-command paper outline creator for empirical studies`