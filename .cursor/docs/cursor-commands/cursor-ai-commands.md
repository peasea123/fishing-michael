# Cursor AI Slash Commands for Academic Research

## 1. Research Mode Command
**File:** `.cursor/commands/research-mode.md`

```markdown
# research-mode

Activate expert finance PhD academic research assistant mode with project context.

## Role Configuration
Act as an elite PhD-level finance research assistant specializing in:
- Empirical finance and real estate economics
- Advanced econometric methods (event studies, panel data, staggered DiD)
- Publication-quality analysis for Journal of Finance, JFE, Real Estate Economics

## Research Standards
- Use rigorous empirical methodology with multiple robustness checks
- Generate publication-ready tables and figures
- Provide Stata 18 and Python code that follows academic best practices
- Include proper citations in Chicago Author-Date format
- Maintain highest standards of statistical inference

## Context Integration
Load knowledge of current project: 3G network rollout and real estate price efficiency research.

## Output Requirements
- Technical precision appropriate for peer review
- Well-documented, reproducible analysis code
- Clear interpretation of statistical results
- Actionable recommendations for further analysis

Initialize research mode for the specified topic or analysis.
```

## 2. Stata Table Generator
**File:** `.cursor/commands/stata-table.md`

```markdown
# stata-table

Generate publication-quality Stata table code with proper formatting for academic journals.

## Table Specifications
Create esttab command with the following requirements:
- Include `nogap` option (essential for LaTeX compatibility)
- Use proper alignment and style for academic publications
- Generate corresponding LaTeX input command
- Follow Journal of Finance formatting standards

## Standard Options
```stata
esttab using "Results/Table_Files/[TABLE_NAME].tex", ///
    nomtitles nogap nofloat nonotes nolegend nobaselevels ///
    style(tex) alignment(c) se r2 replace
```

## LaTeX Integration
```latex
% In Results.tex:
\input{Results/Table_Files/[TABLE_NAME]}
```

## Quality Checklist
- [ ] nogap included (never omit)
- [ ] Proper file path structure
- [ ] Standard academic formatting
- [ ] Compatible with journal templates
- [ ] Error-free LaTeX compilation

Provide the complete esttab command and LaTeX input code for the specified table.
```

## 3. Citation Manager
**File:** `.cursor/commands/cite-paper.md`

```markdown
# cite-paper

Add properly formatted academic citations to project bibliography with automated verification.

## Citation Process
1. **Multi-Source Search**: Query Google Scholar, CrossRef, SSRN, and journal websites
2. **Verification**: Confirm author names, publication details, and DOI accuracy
3. **BibTeX Generation**: Create properly formatted entry for `References/biblio.bib`
4. **LaTeX Commands**: Provide `\citep{}` and `\citet{}` usage examples

## Output Format
### BibTeX Entry
```bibtex
@article{authorkey_year,
  title={Complete and Accurate Title},
  author={Last, First and Last, First},
  journal={Full Journal Name},
  volume={XX},
  number={X},
  pages={XXX--XXX},
  year={20XX},
  doi={10.XXXX/XXXXXX}
}
```

### LaTeX Usage
```latex
\citep{authorkey_year}  % (Author et al., Year)
\citet{authorkey_year}  % Author et al. (Year)
```

## Quality Standards
- Verify all publication details against original source
- Use consistent author key format: firstauthor_year
- Include DOI when available
- Check journal abbreviation accuracy

Generate complete citation materials for the specified paper or author.
```

## 4. Event Study Generator
**File:** `.cursor/commands/event-study.md`

```markdown
# event-study

Generate comprehensive event study analysis code and framework for empirical finance research.

## Analysis Framework
Create complete event study methodology including:

### 1. Data Requirements
- Daily stock returns (CRSP format)
- Event dates with PERMNO identifiers
- Market index returns (CRSP value-weighted)
- Sample selection criteria

### 2. Stata Implementation
```stata
// Event study analysis
// Estimation window: [-250, -31]
// Event window: [-5, +5]

// Calculate normal returns using market model
regress ret_stock ret_market if event_day >= -250 & event_day <= -31

// Compute abnormal returns
predict normal_ret if event_day >= -5 & event_day <= 5
gen abnormal_ret = ret_stock - normal_ret

// Calculate cumulative abnormal returns
sort permno event_day
by permno: gen car = sum(abnormal_ret) if event_day >= -5 & event_day <= 5
```

### 3. Statistical Testing
- Standard t-tests for significance
- Cross-sectional variation analysis
- Robustness checks with alternative estimation windows

### 4. Results Table
Generate publication-ready table showing:
- Average abnormal returns by event day
- Cumulative abnormal returns for key windows
- Statistical significance indicators
- Sample size and test statistics

Provide complete analysis framework for the specified event type and sample period.
```

## 5. Data Validation Suite
**File:** `.cursor/commands/validate-data.md`

```markdown
# validate-data

Perform comprehensive data quality assessment for empirical finance research.

## Validation Protocol

### Phase 1: Basic Integrity
```stata
// Check for duplicates
duplicates report firm_id date
duplicates list if _n <= 10

// Missing data analysis
misstable summarize main_variables
misstable patterns, frequency

// Outlier detection
foreach var of varlist continuous_vars {
    summarize `var', detail
    // Flag extreme values (beyond 1st/99th percentiles)
    gen flag_`var' = (`var' < r(p1) | `var' > r(p99))
}
```

### Phase 2: Financial Data Validation
```stata
// Accounting identities
gen check_balance = abs(assets - liabilities - equity)
count if check_balance > 0.01

// Reasonable bounds for ratios
count if roa < -1 | roa > 1
count if leverage < 0 | leverage > 10
count if market_cap <= 0
```

### Phase 3: Time Series Coverage
```stata
// Examine temporal coverage
tabulate year, missing
bysort year: count

// Industry distribution
tabulate industry_code, sort missing
```

## Validation Report
Generate comprehensive report including:
- Data coverage statistics
- Quality issues identified
- Recommended filters and transformations
- Sample representativeness assessment
- Suggested next steps for data cleaning

Execute validation suite for the specified dataset and provide detailed quality assessment.
```

## 6. Command Creator (Meta-Command)
**File:** `.cursor/commands/make-command.md`

```markdown
# make-command

Create a new Cursor AI slash command tailored to specific academic research needs.

## Command Design Process

### 1. Requirements Analysis
- **Purpose**: What specific task should this command accomplish?
- **Context**: Academic domain (finance, real estate, econometrics)
- **Inputs**: What information does the user need to provide?
- **Outputs**: Expected deliverables (code, tables, analysis)

### 2. Command Structure Template
```markdown
# [command-name]

[Brief description of command purpose]

## [Section 1: Setup/Configuration]
[Configuration details and requirements]

## [Section 2: Main Process]
[Step-by-step process description]

## [Section 3: Output/Results]
[Expected outputs and formats]

## Quality Assurance
[Validation steps and checkpoints]

[Final instruction for execution]
```

### 3. Academic Standards Integration
- Ensure compliance with journal submission requirements
- Include proper citation and documentation standards
- Integrate with existing research workflow
- Maintain reproducibility and transparency

### 4. Command Optimization
- Keep under 150 lines for optimal performance
- Use clear, actionable language
- Include error handling and validation
- Provide usage examples

## Deliverable
Complete `.md` file ready to save in `.cursor/commands/` directory with:
- Proper formatting and structure
- Academic research focus
- Integration with existing workflow
- Quality assurance checklist

Create a new slash command for the specified research task or methodology.
```

## 7. Regression Builder
**File:** `.cursor/commands/build-regression.md`

```markdown
# build-regression

Generate comprehensive regression analysis framework with robustness checks for empirical finance research.

## Regression Specifications

### Base Specification
```stata
// Main regression with firm and year fixed effects
regress outcome_var treatment_var control_vars i.year i.industry, ///
    robust cluster(firm_id)
eststo base_model
```

### Extended Specifications
```stata
// Add additional controls
regress outcome_var treatment_var control_vars additional_controls ///
    i.year i.industry, robust cluster(firm_id)
eststo extended_model

// Interaction terms
regress outcome_var c.treatment_var##c.interaction_var control_vars ///
    i.year i.industry, robust cluster(firm_id)
eststo interaction_model
```

## Robustness Checks
1. **Alternative Standard Errors**: Cluster by different dimensions
2. **Winsorization**: Test sensitivity to outlier treatment
3. **Sample Restrictions**: Vary inclusion criteria
4. **Alternative Controls**: Test with different control variable sets

### Robustness Implementation
```stata
// Different clustering
regress outcome_var treatment_var control_vars i.year i.industry, ///
    robust cluster(industry)
eststo cluster_industry

// Winsorized variables
winsor2 outcome_var, replace cuts(1 99)
regress outcome_var treatment_var control_vars i.year i.industry, ///
    robust cluster(firm_id)
eststo winsorized
```

## Results Table Generation
```stata
// Create comprehensive results table
esttab base_model extended_model interaction_model ///
    using "Results/Table_Files/Regression_Results.tex", ///
    nomtitles nogap nofloat nonotes nolegend nobaselevels ///
    style(tex) alignment(c) se r2 star(* 0.10 ** 0.05 *** 0.01) ///
    replace
```

## Statistical Diagnostics
- Test for heteroskedasticity
- Check for multicollinearity (VIF tests)
- Assess model specification
- Validate exclusion restrictions (if applicable)

Generate complete regression framework including base specification, robustness checks, and diagnostic tests.
```

## 8. Literature Review Assistant
**File:** `.cursor/commands/literature-review.md`

```markdown
# literature-review

Conduct systematic literature review for empirical finance research with automated citation management.

## Review Protocol

### 1. Search Strategy
- **Primary Sources**: Journal of Finance, JFE, RFS, JFQA
- **Secondary Sources**: Real Estate Economics, JRER, Journal of Banking & Finance
- **Working Papers**: NBER, SSRN recent publications
- **Time Frame**: Focus on publications within last 10 years

### 2. Search Terms and Keywords
Develop comprehensive keyword list including:
- Primary research terms
- Methodological terms (event study, difference-in-differences, etc.)
- Market/context specific terms
- Related theoretical concepts

### 3. Paper Classification System
```
Categories:
- Theoretical foundations
- Empirical methodology
- Data and measurement
- Main findings and implications
- Robustness and limitations
```

### 4. Citation Management
For each relevant paper:
- Generate proper BibTeX entry
- Extract key methodological details
- Summarize main findings
- Note sample period and data sources
- Identify potential extensions

## Deliverables
1. **Literature Matrix**: Systematic comparison of key papers
2. **Bibliography File**: Complete BibTeX entries for all sources
3. **Research Gaps**: Identification of unexplored areas
4. **Methodological Notes**: Best practices from reviewed papers

## Quality Standards
- Minimum 50 relevant papers for comprehensive review
- Include both supportive and contrary evidence
- Verify citation accuracy and completeness
- Maintain consistent classification criteria

Execute systematic literature review for the specified research topic and generate comprehensive research foundation.
```

## Usage Instructions

### Setup
1. Create the directory structure:
   ```
   .cursor/
   └── commands/
       ├── research-mode.md
       ├── stata-table.md
       ├── cite-paper.md
       ├── event-study.md
       ├── validate-data.md
       ├── make-command.md
       ├── build-regression.md
       └── literature-review.md
   ```

2. Copy each command into its respective `.md` file

3. Commands will automatically appear in Cursor when you type `/`

### Example Usage
- `/research-mode corporate political connections`
- `/stata-table main_results`
- `/cite-paper boehmer2021tracking`
- `/event-study merger_announcements`
- `/validate-data crsp_compustat_merged`
- `/make-command panel-data-diagnostics`
- `/build-regression outcome_roa treatment_3g_coverage`
- `/literature-review real estate price efficiency`

### Best Practices
- Use descriptive, specific inputs after each command
- Chain commands for comprehensive analysis workflows
- Save output files with consistent naming conventions
- Document all analysis steps for reproducibility