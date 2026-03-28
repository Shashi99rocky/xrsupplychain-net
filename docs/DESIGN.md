# Design System Document

## 1. Overview & Creative North Star

### The "Epicurean Editorial"
This design system moves away from the traditional, rigid structures of wholesale industrialism and instead embraces the high-end aesthetic of modern culinary publications. Our Creative North Star is **The Epicurean Editorial**: a philosophy that treats every product and category as a curated showcase. 

We break the "template" look by utilizing intentional asymmetry, where large-scale technical typography overlaps soft-edged product imagery. By leveraging a hybrid light/dark aesthetic, we create a rhythmic "pulse" throughout the user journey—moving from expansive, airy white spaces to deep, immersive charcoal environments. This contrast signals the transition from browsing to deep brand engagement, ensuring the experience feels both innovative and deeply trustworthy.

---

## 2. Colors

The palette is designed to balance the clinical precision of a wholesaler with the vibrant energy of the food and beverage industry.

### Tonal Foundations
- **Primary (`#565b69`) & Primary Container (`#e5ebfc`):** Use these for core brand moments. The primary charcoal provides the "Navy" depth requested for heroes and footers.
- **Surface & Background (`#f5f6f7` to `#ffffff`):** These define our "Light" zones. Use `surface_container_lowest` (#ffffff) for active content cards and `background` (#f5f6f7) for the canvas.

### The "No-Line" Rule
To maintain a premium, editorial feel, **1px solid borders are strictly prohibited for sectioning.** We define boundaries through tonal shifts. A section using `surface_container_low` should sit directly against a `surface` background. If you feel the need for a line, use a margin; if you feel the need for a border, use a color transition.

### Surface Hierarchy & Nesting
Treat the UI as a physical stack of premium paper:
- **Base Level:** `surface`
- **Raised Content:** `surface_container_low`
- **Interactive Cards:** `surface_container_lowest` (Pure White)
- **Recessed Areas:** `surface_dim`

### Signature Textures & Glass
- **The Glass Rule:** For floating navigation or over-image headers, use `surface` at 80% opacity with a `24px` backdrop blur.
- **Vibrant Accents:** Use `secondary` (Soft Coral/Terra Cotta) and `tertiary` (Muted Teal) tokens for functional accents. CTAs should utilize a subtle linear gradient from `primary` to `primary_dim` to add "soul" and depth.

---

## 3. Typography

The typography strategy pairs technical precision with human-centric readability.

- **Display & Headlines (Space Grotesk):** This is our "Technical" voice. It feels engineered and innovative. Use `display-lg` for hero statements with tight letter-spacing (-0.02em) to mimic high-end print.
- **Body & Labels (Manrope):** This is our "Functional" voice. Manrope’s geometric but friendly curves ensure readability in long-form product descriptions.
- **The Editorial Scale:** We use extreme contrast. A `display-lg` headline may sit adjacent to a `body-sm` caption. This hierarchy immediately signals what is "Concept" versus what is "Data."

---

## 4. Elevation & Depth

We eschew traditional drop shadows in favor of **Tonal Layering**.

- **The Layering Principle:** Depth is achieved by "stacking." A `surface_container_lowest` card placed on a `surface_container_high` background creates a natural, soft lift.
- **Ambient Shadows:** Only use shadows for "elevated" states (e.g., a picked-up card). Use a large blur (32px) at 4% opacity, using the `on_surface` color tinted with a hint of our Navy `primary` to ensure the shadow feels like a natural lighting effect rather than a digital artifact.
- **The Ghost Border:** If accessibility requires a container edge, use `outline_variant` at 15% opacity. It should be felt, not seen.
- **Glassmorphism:** Use semi-transparent layers for mobile menus and filter overlays to keep the vibrant food photography visible beneath the interface, maintaining the "freshness" of the brand.

---

## 5. Components

### Buttons
- **Primary:** Rounded (`xl`: 0.75rem), `primary` background, `on_primary` text. No border.
- **Secondary:** `surface_container_high` background. Transitions to `surface_container_highest` on hover.
- **Tertiary:** Text-only with an underline that matches the `secondary` (coral) accent on hover.

### Cards & Lists
- **The "No-Divider" Rule:** Forbid the use of horizontal rules (`<hr>`). Use `spacing-8` (2rem) of vertical white space to separate list items, or alternate background colors (`surface` vs `surface_container_low`).
- **Product Cards:** Use `xl` (12px) rounding. Imagery should bleed to the top and sides, with text content nested inside a `surface_container_lowest` area.

### Input Fields
- **Styling:** Use `surface_container_low` as the background fill. Labels should use `label-md` in `on_surface_variant`.
- **Focus State:** Instead of a heavy border, use a 2px `primary` bottom-border or a subtle scale-up effect (1.01x).

### Chips
- **Selection:** Use `primary_container` with `on_primary_container` text. The roundness should always be `full` (pill-shaped) to contrast against the `xl` rounded cards.

---

## 6. Do's and Don'ts

### Do
- **Do** use large amounts of white space (use `spacing-20` and `spacing-24`) to separate major thematic sections.
- **Do** overlap typography over images. For example, a `headline-lg` can partially sit on a product photo to create an editorial layout.
- **Do** use the vibrant accent colors (`secondary`, `tertiary`) sparingly for "micro-moments" like status indicators or price tags.

### Don't
- **Don't** use pure black (#000000) for text. Use `on_surface` (#2c2f30) to maintain a soft, premium feel.
- **Don't** use "Card Shadows" as a default. Default to background color shifts first.
- **Don't** use 1px dividers to separate products in a list. Rely on the Spacing Scale to create "breathing room" that implies separation.
- **Don't** use sharp corners. Every interactive element must use at least the `lg` (0.5rem) or `xl` (0.75rem) rounding to maintain the "Modern & Contemporary" personality.