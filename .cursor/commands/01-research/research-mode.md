# /research-mode

Load the broadband price-efficiency research profile and enforce PhD-level academic output standards.

## Usage
```
/research-mode [topic]
```

## Inputs
- `topic` (optional): Focus area such as `event-study`, `price-efficiency`, `staggered-did`, or `retail-trading`.

## Procedure
1. Activate the project context, including Four Pillars framework and operational standards.
2. Set response tone to scholarly, LaTeX-ready prose with required citation format (`\cite{OpenAlexID}`).
3. Prioritize methodological guidance on Sun & Abraham (2021) DiD, panel regressions, and market microstructure diagnostics.
4. Load documentation requirements: headers describing purpose/inputs/outputs, logging expectations, reproducibility.
5. If `topic` is supplied, surface the most relevant literature, robustness checks, and pipeline steps for that theme.

## Deliverables
- Session-wide configuration enforcing academic language, OpenAlex citation usage, and reproducibility reminders.
- Prompted checklist covering empirical rigor (parallel trends, heterogeneity, robustness, documentation).
- Optional reading list or task list tailored to the specified topic.

## Validation
- Confirm that citations in responses resolve to OpenAlex IDs before final output.
- Ensure recommendations align with the Four Pillars framework and project success metrics.
- Reiterate logging and documentation practices whenever code or analysis guidance is provided.
- Escalate ambiguities or conflicting instructions back to the user for clarification.