# Development Workflow

Define the workflow that every AI agent or developer must follow when contributing to the Dionne Website.

## Workflow Steps

- **Step 1: Read `.ai/context.md`**
  Understand the current state of the project, the overarching goals, and what remains to be completed.
- **Step 2: Validate task against Figma**
  Check the Figma Design to ensure the requested changes align with the intended UI. Do not add arbitrary elements.
- **Step 3: Check component reuse before creating new ones**
  Review `.ai/components-map.md`. If a similar component exists, adapt or reuse it instead of creating duplicates.
- **Step 4: Implement feature**
  Write clean, modular, production-ready code. Adhere strictly to the `.ai/rules.md`.
- **Step 5: Test responsiveness**
  Verify layouts on mobile, tablet, and desktop breakpoints. Ensure accessibility standards are met and there are no layout shifts.
- **Step 6: Commit-ready clean structure**
  Clean up any temporary comments, `console.log` statements, and unused imports. Ensure the formatting aligns with the project's standards before considering the task done.

## Branching Strategy Suggestion
- Use descriptive feature branches (e.g., `feature/hero-section`, `fix/navbar-mobile-menu`).
- Always commit atomic, focused changes with clear commit messages.
- Avoid pushing directly to `main` without review.

## How to Handle Unfinished Sections
- If a section lacks final assets, copy, or URLs (e.g., pending external links), insert reasonable placeholders.
- Leave a clear TODO comment in the codebase (e.g., `// TODO: Update URL when provided`) so it can be easily tracked and updated later.
- Do not invent content or design elements not requested in the Figma design.

## How to Continue Paused Work Safely
- Always run `npm install` and `npm run dev` to verify the application builds and runs before starting new modifications.
- Read through the recent commit history to understand what was last modified.
- If an agent was working on a component, check its state against the Figma design before making structural rewrites.
