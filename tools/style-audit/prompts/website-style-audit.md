---
name: website-style-audit
description: Audit a webpage section by section and element by element using computed styles extracted from the rendered DOM.
---

# Goal

Use this skill when the user asks for a precise visual/style audit of a webpage.

# Rules

- Never guess CSS values if computed values are available.
- Group output by section.
- For each section, summarize:
  - layout
  - spacing
  - colors
  - typography
  - borders/shadows
  - positioning
- For each element, preserve exact computed values.
- Mention responsive limitations if only one viewport is available.
- If JSON is too large, summarize section by section.

# Expected input

A JSON document with this shape:

- page
- sections[]
- sections[].elements[]

# Expected output

1. High-level summary of page structure
2. Section-by-section style report
3. Optional recreation hints for frontend implementation