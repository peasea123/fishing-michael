# Component Specification: High-Contrast Interactive Grid Background

## Overview
This document specifies the implementation of a high-contrast, skew-aware interactive grid background for the Senticient landing page. It is designed to work with Next.js 14+ and Tailwind CSS, providing a semi-transparent "glassmorphism" effect that allows the background pattern to be visible through UI components.

## Target Files
1. `components/ui/interactive-grid-pattern.tsx` (New or Update)
2. `app/page.tsx` (Update)
3. `app/globals.css` (Update)

## Technical Requirements

### 1. Coordinate Mapping & Positioning
The grid must use SVG matrix transformations and specific aspect ratio preservation to ensure it stays pinned to the top of the viewport regardless of screen width.
- **Interactivity**: Use `svg.createSVGPoint()` and `svg.getScreenCTM().inverse()` to map screen coordinates to local SVG coordinates. This is critical for supporting CSS transforms like `skew-y`.
- **Vertical Pinning**: Set `preserveAspectRatio="xMidYMin slice"` on the SVG to prevent the grid from shifting vertically when the window width changes.

### 2. Visual Style & Compatibility
- **Grid Lines**: Use `stroke-primary/30` (MTSU Blue) for defined geometric structure.
- **Base Fill**: `fill-muted/20`.
- **Masking**: Use a percentage-based radial mask for broad browser compatibility (including `-webkit-` prefixes).
  - Implementation: `.grid-mask { mask-image: radial-gradient(circle at top, white, transparent 70%); }`
- **Transformation**: Apply `skew-y-12` with `origin-top-left` and a negative vertical translation (`-translate-y-[20%]`) to ensure the top-left corner is always covered by the pattern.

### 3. Layering & Pointer Events
To allow the grid to be interactive behind the UI content:
- The main content container (`z-10`) must use `pointer-events-none`.
- Interactive elements (Nav, Hero content, Feature Cards, Footer) must explicitly re-enable `pointer-events-auto`.
- Feature Cards should use `bg-card/50 backdrop-blur-sm` to show the grid through the cards.

## Implementation Snippets

### InteractiveGridPattern.tsx (SVG Props)
```tsx
<svg
  aria-hidden="true"
  className={cn("pointer-events-auto absolute left-0 top-0 h-full w-full", className)}
  viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
  preserveAspectRatio="xMidYMin slice"
  {...props}
>
  {/* Grid Rendering Logic */}
</svg>
```

### Page.tsx (Layout Structure)
```tsx
<InteractiveGridPattern
  className={cn(
    "grid-mask",
    "absolute inset-x-0 top-0 h-[1000px] w-full skew-y-12 origin-top-left -translate-y-[20%]",
  )}
  squares={[28, 28]}
  squaresClassName="hover:fill-primary/40 stroke-primary/30"
/>
```
