# CLAUDE.md

## Overview

This project uses Claude as a core assistant for frontend development, particularly for layout structuring and UI/UX design. The collaboration is structured so that AI accelerates implementation while all final decisions and refinements remain under developer control.

---

## How Claude Was Used

### 1. UI/UX & Layout Generation

Claude was primarily used to:

- Generate initial layout structures
- Design UI components
- Suggest UX flows and component hierarchy

This includes:

- Page layouts
- Component structure
- Visual hierarchy and spacing

---

### 2. Developer Adjustments & Validation

All AI-generated output was reviewed and refined manually:

- Fixed invalid or non-standard Tailwind CSS classes
- Ensured consistency with project styling conventions
- Cleaned up redundant or conflicting styles

---

### 3. Component Refactoring

Claude often generated large single-file components. These were manually refactored into smaller, reusable components by:

- Splitting UI into modular components
- Improving readability and maintainability
- Aligning with scalable React architecture

---

## Constraints Given to Claude

- Focus on Tailwind CSS for styling
- Avoid overcomplicated logic in UI components
- Prefer simple and readable structures
- Do not handle business logic or backend concerns

---

## Responsibilities Split

### Claude

- Layout generation
- UI structure
- Initial component scaffolding

### Developer

- Code validation and correction
- Tailwind class cleanup
- Component architecture and separation
- Integration with backend (API, auth, data flow)

---

## Notes

AI was used as a productivity tool, not as a source of truth.  
All generated code was reviewed, adjusted, and integrated intentionally to ensure code quality and maintainability.

---

## Summary

Claude significantly accelerated UI development, while the developer maintained full control over structure, correctness, and system design.
