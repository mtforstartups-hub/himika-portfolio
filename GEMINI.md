# Project Development Rules

## 1. Responsiveness (Mobile-First)

- **Do NOT** follow the original HTML's static widths or complex absolute positioning blindly.
- **Tabs/Navigation:** Always ensure horizontal scrollability (`overflow-x-auto`) for list-based navigations on mobile.
- **Images:** Prioritize `h-auto` and natural aspect ratios for photos of people to avoid cutting off faces.
- **Overflow:** Prevent horizontal overflow by ensuring absolute elements are contained and grids collapse early.

## 2. Svelte 5 Patterns

- **Keyed Each Blocks:** ALWAYS provide a unique key for `{#each}` loops to ensure efficient DOM updates and prevent state bugs.
  - _Pattern:_ `{#each items as item (item.id)}`
- **Runes:** Use `$state` and `$derived` for all reactive logic.
- **Events:** Use the new `onclick` attribute syntax.

## 4. Link Handling

- **Internal/Fragment Links:** ALWAYS use the `resolve()` function from `$app/paths` for internal paths or fragment identifiers.
  - _Good:_ `href={resolve('/')}` or `href="{resolve('/')}#section"`
- **Mixed/Dynamic Links:** If a link can be either internal or external, or if the linter flags a dynamic variable, use `rel="external"`. This informs the linter (and SvelteKit) that the browser should handle the navigation directly, bypassing the `resolve` requirement.
  - _Pattern:_ `<a href={dynamicLink} rel="external">`

## 5. Validation Workflow

- **Loop:** After ANY code change, you MUST perform this sequence:
  1. Run `bun lint`.
  2. If warnings or errors are received, run `bun format`.
  3. Run `bun lint` again and manually fix any remaining errors.
  4. Repeat until `bun lint` reports **zero** errors and warnings.
- **Persistence:** Never consider a task finished until the linting loop is fully satisfied.
