--- Cursor Command: visualize-data.md ---
# visualize-data

Generate diverse, publication-quality data visualizations, charts, and graphs from various data inputs using rigorous statistical and econometric approaches suitable for academic research.

## Visualization Generation Process

### Step 1: Input Analysis & Data Assessment
Analyze provided data source to identify:
- **Variable types**: Continuous, categorical, temporal, spatial, or relational data
- **Data structure**: Univariate, bivariate, multivariate, or panel/time-series format
- **Research context**: Academic domain and analytical objectives
- **Sample characteristics**: Size, distribution patterns, and data quality metrics
- **Publication requirements**: Journal standards and figure specifications

### Step 2: Visualization Strategy Design
Develop comprehensive visualization approach with:
- **Primary chart types**: Scatter plots, histograms, box plots, line charts, heatmaps
- **Advanced visualizations**: Violin plots, ridge plots, Sankey diagrams, network graphs
- **Statistical enhancements**: Regression lines, confidence intervals, effect sizes
- **Comparative analysis**: Side-by-side, faceted, or animated visualizations
- **Interactive elements**: Hover effects, zoom capabilities, filter controls

### Step 3: Academic Quality Assurance
Ensure scholarly rigor through:
- **Statistical validation**: Appropriate tests for data distributions and relationships
- **Econometric modeling**: Regression analysis, causal inference, robustness checks
- **Literature integration**: Context from seminal papers in the research domain
- **Reproducibility standards**: Complete code documentation and data provenance
- **Publication formatting**: LaTeX-ready outputs with proper styling and annotations
- **Code quality standards**: Never include emojis in Python code - they can cause execution errors across different environments and platforms

### Step 4: Output Generation & Validation
Produce publication-quality deliverables:
- **Multiple formats**: PNG, PDF, SVG, and interactive HTML visualizations
- **Academic styling**: Professional color schemes, typography, and layout
- **Comprehensive documentation**: Caption text, methodological notes, data sources
- **Quality metrics**: Resolution standards, accessibility compliance, file size optimization
- **Integration support**: LaTeX figure environments and cross-referencing

## Input Specifications

### Data Source Options
- **Variable relationship**: Specify two variables (e.g., "private_equity_ownership vs facility_closure_rate")
- **Dataset analysis**: Provide dataset path or DataFrame with exploratory instructions
- **Table visualization**: Reference existing table data for alternative visual representations
- **Figure variation**: Supply existing figure for alternative designs and perspectives

### Parameter Configuration
- **Visualization types**: "scatter", "histogram", "boxplot", "line", "heatmap", "violin", "ridge", "sankey", "network"
- **Academic styling**: "publication", "presentation", "web", "minimal"
- **Statistical features**: "regression", "confidence_intervals", "effect_sizes", "significance_markers"
- **Output formats**: "png", "pdf", "svg", "html", "all"
- **Analysis depth**: "exploratory", "confirmatory", "comprehensive"

## Usage Examples

### Example 1: Variable Relationship Analysis
```
/visualize-data private_equity_ownership vs facility_closure_rate --context "senior housing markets" --types scatter,boxplot,violin --stats regression,confidence_intervals
```

### Example 2: Dataset Exploration
```
/visualize-data --dataset "Data/Final_Datasets/senior_housing_panel.csv" --explore --types histogram,heatmap,ridge --academic publication
```

### Example 3: Table Data Visualization
```
/visualize-data --table "Results/Tables/regression_table.tex" --alternative-views --types scatter,line,network --format all
```

### Example 4: Figure Variations
```
/visualize-data --figure "Results/Figures/ownership_timeline.png" --variations --types sankey,heatmap,animated --context "private equity effects"
```

## Academic Integration Features

### Research Context Integration
- **Domain-specific insights**: Automatic recognition of finance, real estate, and healthcare research contexts
- **Literature connections**: Citation suggestions for visualization methodologies
- **Statistical rigor**: Appropriate econometric models and specification tests
- **Causal inference**: Visualization of treatment effects, parallel trends, and robustness checks

### Publication Standards
- **Journal compliance**: Formatting for top finance journals (JF, JFE, RFS, REE)
- **Professional aesthetics**: Color-blind friendly palettes and accessibility standards
- **Reproducibility**: Complete code generation with proper documentation
- **Archival quality**: High-resolution outputs suitable for print publication

## Quality Assurance Checks

### Validation Steps
- **Data integrity**: Missing value analysis, outlier detection, distribution assessment
- **Statistical appropriateness**: Test selection based on data characteristics and research questions
- **Visual effectiveness**: Clarity, interpretability, and information-to-ink ratio optimization
- **Academic standards**: Methodological soundness and contribution to research narrative

### Success Criteria
- **Scholarly impact**: Clear communication of research findings and relationships
- **Technical quality**: Error-free execution and proper file generation
- **Reproducibility**: Complete documentation for replication by other researchers
- **Publication readiness**: Professional presentation suitable for academic journals

Generate diverse, publication-quality data visualizations from the specified data source:
--- End Command ---
