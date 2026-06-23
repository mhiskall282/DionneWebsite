# Development Rules

## UI & Design
1. **Follow Figma Exactly**: Adhere to pixel-level accuracy whenever possible based on the Figma design. Treat Figma as the source of truth for all visual elements.
2. **Do Not Hallucinate UI Elements**: Do not introduce new UI components, colors, or typography that are not present in the design.
3. **Maintain Responsive Design**: All features must work seamlessly across mobile, tablet, and desktop viewports. Test thoroughly on all breakpoints.
4. **No Breaking Changes Without Confirmation**: Ask before making any structural changes or rewriting existing core components.

## Architecture & Code Quality
1. **Clean Modular Architecture**: Keep the codebase modular. Prefer extending or modifying existing code over writing from scratch.
2. **Reuse Components**: Reuse existing components (e.g., Buttons, Loaders, NavLinks) instead of duplicating logic or styles. Check the components map before creating new ones.
3. **Avoid Inline Styling**: Do not use inline styles unless strictly required (e.g., dynamic style calculations). Rely on Tailwind CSS utility classes and the defined design system.
4. **Keep Styling Consistent**: Ensure that styling patterns are uniform across all pages.
5. **Maintain Accessibility Standards**: Use semantic HTML elements and include appropriate ARIA attributes for screen readers and keyboard navigation.
6. **Production-Ready Code**: Keep the code production-ready at all times.
