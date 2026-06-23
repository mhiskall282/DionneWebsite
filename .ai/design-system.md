# Design System

This design system is extracted from the Figma source and `COLOR_CODES.md`.

## Colors

### Primary Brand Colors
- **Burgundy (Primary)**: `#9B2430` / `#992430` / `hsl(354, 62%, 37%)`
- **Gold (Secondary)**: `#FFDC00` / `#ffdd00` / `hsl(45, 100%, 50%)`
- **Dark Burgundy (Hover/Cards)**: `#7a1d26` / `#7b1e23`

### Backgrounds
- **Pure Black**: `#000000`
- **Near Black (Footer)**: `#0a0a0a`
- **Dark Gray (Sections)**: `#333333` / `#1a1a1a`

### Accents
- **Orange (Book headings)**: `#b74d01`
- **Tan (Life roles)**: `#9e846b`
- **Yellow/Gold (Buttons)**: `#F3BA00`

### HSL Tokens (Tailwind variables)
- `--background`: Light `0 0% 100%`, Dark `0 0% 6%`
- `--foreground`: Light `0 0% 8%`, Dark `0 0% 95%`
- `--primary`: Light `354 62% 37%`, Dark `345 70% 45%`
- `--secondary`: Light `35 40% 65%`, Dark `35 30% 25%`
- `--accent`: Light `35 45% 70%`, Dark `35 40% 40%`
- `--muted`: Light `30 20% 96%`, Dark `0 0% 15%`

## Typography
- Refer to Figma for specific Google Fonts (typically modern sans-serif or elegant serif for headings, based on the design). Follow the established CSS custom properties for font families if already defined in the CSS framework.

## Spacing Rules
- Use consistent Tailwind spacing utilities (e.g., `p-4`, `m-8`, `gap-6`).
- Maintain uniform padding across major sections (e.g., `py-16` or `py-24`).

## Button Styles
- **Primary Button**: Burgundy background (`#992430`), White text, Gold hover state or Dark Burgundy hover (`#7a1d26`).
- **Accent Button**: Gold background (`#F3BA00` or `#FFD700`), Dark text.
- **Border Radius**: Buttons typically use `rounded-md` or `rounded-full` as dictated by Figma.

## Shadows & Effects
- **Text Shadows**: `rgba(0,0,0,0.5)` to `0.3` for readability on image backgrounds.
- **Box Shadows**: Soft glows using Burgundy (`rgba(155, 36, 48, 0.6)`) or Gold (`rgba(255, 220, 0, 0.3)`).
- **Hover Transitions**: Smooth transition effects (`transition-all duration-300`).

## Consistency Rules
- Always use CSS variables (`var(--primary)`, `bg-primary`) or Tailwind config classes rather than hardcoded hex values across the UI.
- Ensure proper contrast ratios between text and background colors according to WCAG guidelines.
