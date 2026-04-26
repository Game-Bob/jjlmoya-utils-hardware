Create a new tool in the current utility library repository.

## Tool spec
- Name (camelCase): $TOOL_NAME
- Tool ID (kebab-case slug): $TOOL_ID
- Background icon (MDI): $ICON_BG
- Foreground icon (MDI): $ICON_FG
- Inputs: $INPUTS
- Outputs: $OUTPUTS
- Logic/formula: $LOGIC

## Instructions

1. **Discover patterns first.** Read one existing tool in `src/tool/` completely:
   logic.ts, entry.ts, index.ts, component.astro, seo.astro, bibliography.astro,
   bibliography.ts, the CSS file, and i18n/en.ts.
   Use those files as the exact template — naming conventions, CSS architecture,
   component structure, TypeScript patterns, everything.

2. **Only English.** Create only `i18n/en.ts`. Register only `en` in entry.ts.
   Other locales are added after QA.

3. **Create all tool files** following the discovered pattern:
   - logic.ts, entry.ts, index.ts, component.astro, seo.astro,
     bibliography.astro, bibliography.ts, i18n/en.ts
   - CSS: named after the English slug of the tool
     (e.g. `depth-of-field-calculator.css`, not `style.css`).
     Read existing tools to confirm the naming pattern.

4. **Register the tool** by reading and updating the registration files
   (typically src/index.ts, src/entries.ts, src/tools.ts, src/category/index.ts —
   read each one first to understand exactly what needs adding).

5. **Verify** — run in order and fix any errors before finishing:
   - `npm run type-check`
   - `npm run lint`
   - `npm run test -- --testPathIgnorePatterns=i18n_coverage`
