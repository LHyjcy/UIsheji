# Web UI Design Resource Pack

Updated: 2026-06-30

This document is a practical reference pack for future UI work in this repository and for standalone webpage/UI design research. It combines six research tracks: agent skills, plugins/tools, design methods, inspiration sites, AI-assisted UI tools, and a repeatable production workflow.

## Repository Context

- Git repository: https://github.com/LHyjcy/UIsheji.git
- Current project stack: Vite, React, TypeScript, native CSS, local assets.
- Current implementation rule: preserve the existing layout and framework unless a future task explicitly changes that scope.
- For this project, prefer process skills and visual QA tools over adding UI libraries. The current page is a high-fidelity static replica, so a component library can easily fight the reference layout.

## First Choice For This Repository

Use this order when improving the current page:

1. `design-taste-frontend`: visual taste audit, density, hierarchy, spacing, interaction restraint.
2. `accessibility`: semantic structure, keyboard path, focus state, contrast, reduced motion.
3. `playwright`: desktop/mobile screenshots, overflow checks, visual regression checks.
4. `figma-implement-design`: only when there is a real Figma source file or node.
5. `shadcn-component-review`: only when the project later becomes a reusable app interface with form/table/dialog components.

Avoid adding Tailwind, shadcn/ui, MUI, Ant Design, or other UI libraries to the current static replica unless the product direction changes from "pixel reproduction" to "componentized product app".

## Agent Skills

Install third-party skills only after reading the linked `SKILL.md` and checking any scripts they run. Use local/project skills first when they already cover the task.

| Priority | Skill | Use It For | Install Command / Source |
|---|---|---|---|
| P0 | `design-taste-frontend` | Anti-generic visual polish, landing pages, portfolio pages, tasteful UI refinement | `npx skills add https://github.com/leonxlnx/taste-skill --skill design-taste-frontend` / https://www.skills.sh/leonxlnx/taste-skill/design-taste-frontend |
| P0 | `frontend-design` | General frontend design craft, high-quality page composition | `npx skills add https://github.com/anthropics/skills --skill frontend-design` / https://www.skills.sh/anthropics/skills/frontend-design |
| P0 | `web-design-guidelines` | Website design heuristics and review checklist | `npx skills add https://github.com/vercel-labs/agent-skills --skill web-design-guidelines` / https://www.skills.sh/vercel-labs/agent-skills/web-design-guidelines |
| P0 | `figma-implement-design` | Translate Figma design context into production code | `npx skills add https://github.com/figma/mcp-server-guide --skill figma-implement-design` / https://officialskills.sh/figma/skills/figma-implement-design |
| P0 | `figma-create-design-system-rules` | Generate repo-specific design system rules from Figma/codebase | `npx skills add https://github.com/figma/mcp-server-guide --skill figma-create-design-system-rules` / https://officialskills.sh/figma/skills/figma-create-design-system-rules |
| P0 | `wcag-accessibility` / `accessibility` | WCAG checks, screen reader support, keyboard usability | https://aiuxplayground.com/skills/wcag-accessibility/ |
| P1 | `shadcn` / `shadcn-ui` | React component systems with Tailwind and Radix | `npx skills add https://github.com/shadcn/ui --skill shadcn` / https://ui.shadcn.com/docs |
| P1 | `tailwind-design-system` | Tailwind tokenization, utility conventions, component styling rules | `npx skills add https://github.com/wshobson/agents --skill tailwind-design-system` |
| P1 | `vercel-react-best-practices` | React/Next implementation discipline | `npx skills add https://github.com/vercel-labs/agent-skills --skill vercel-react-best-practices` |
| P1 | `vercel-composition-patterns` | Composition patterns for maintainable React UI | `npx skills add https://github.com/vercel-labs/agent-skills --skill vercel-composition-patterns` |
| P1 | `webapp-testing` | Browser-based UI testing and flow validation | `npx skills add https://github.com/anthropics/skills --skill webapp-testing` |

Recommended search commands:

```powershell
npx skills find "frontend design"
npx skills find "figma design system"
npx skills find "accessibility frontend"
npx skills find "web design guidelines"
```

## Frontend UI Libraries And Systems

| Tool | Best For | Notes | Source |
|---|---|---|---|
| shadcn/ui | React apps that need editable, local component code | Strong default with Tailwind, Radix, Lucide; good for SaaS/product UI | https://ui.shadcn.com/docs |
| Radix UI Primitives | Accessible unstyled primitives | Use when custom styling matters and behavior should be robust | https://www.radix-ui.com/primitives/docs/overview/introduction |
| Tailwind CSS | Token-like utility styling and responsive systems | Good for fast iteration; requires design discipline to avoid noisy classes | https://tailwindcss.com/docs |
| React Aria | Enterprise-grade accessible behavior primitives | Good when accessibility and custom rendering are both required | https://react-spectrum.adobe.com/react-aria/ |
| Base UI | Unstyled accessible components | Good alternative for teams that want primitives without a visual system | https://base-ui.com/ |
| Headless UI | Accessible headless components | Useful with Tailwind, especially menus, dialogs, listboxes | https://headlessui.com/ |
| Ant Design | Dense enterprise admin and CRUD screens | Good for internal tools; visual style is opinionated | https://ant.design/ |
| MUI | Material-style React applications | Mature, broad component coverage | https://mui.com/ |
| Fluent UI | Microsoft-style enterprise products | Best when matching Microsoft ecosystem patterns | https://developer.microsoft.com/en-us/fluentui |
| Carbon | IBM-style product and data-heavy systems | Useful reference for disciplined enterprise design systems | https://carbondesignsystem.com/ |
| Mantine | Fast React app building with many components | Practical for dashboards and internal tools | https://mantine.dev/ |
| Chakra UI | Accessible React component system | Good when theme customization is important | https://chakra-ui.com/ |
| Storybook | Component documentation and isolated review | Pair with visual tests for component QA | https://storybook.js.org/docs |
| Chromatic | Visual regression testing for Storybook | Useful when UI changes are frequent | https://www.chromatic.com/ |
| Lucide | Consistent open-source icon set | Good default for app/tool UIs | https://lucide.dev/ |

## Motion And Interaction

| Tool | Best For | Use With Care |
|---|---|---|
| CSS transitions/keyframes | Lightweight hover, reveal, focus, and loading feedback | Prefer `opacity` and `transform` for performance. |
| Motion | React animation and layout transitions | Good default for app UI; include reduced-motion handling. Source: https://motion.dev/docs |
| GSAP | Advanced timelines, scroll, SVG, canvas-like animation | Use only when CSS/Motion is too limited. Source: https://gsap.com/docs/v3/ |
| Floating UI | Tooltips, popovers, menus, anchored overlays | Useful for interaction-heavy product UI. Source: https://floating-ui.com/docs/getting-started |

Baseline rules:

- Motion must clarify state changes, not decorate every object.
- Respect `prefers-reduced-motion`.
- Keep durations short for product UI: often 120-240ms for small feedback and 240-480ms for larger section reveals.
- Never let animation cause text overlap, layout jumps, or blocked input.

## AI UI And Design-To-Code Tools

| Tool | Main Capability | Good Use Case | Risk / Limit |
|---|---|---|---|
| Figma AI / Figma Make / Dev Mode MCP | Generate UI, prototypes, HTML/CSS/JS prototypes, and give AI coding tools design context | Teams already using Figma | Generated code still needs engineering review. https://www.figma.com/ai/ |
| v0 by Vercel | Generate React/Tailwind/shadcn-style UI from prompts, screenshots, mockups, and Figma | SaaS dashboards, React components, landing page drafts | Needs manual integration with state, permissions, and data. https://v0.app/docs |
| Framer AI | AI website building and visual publishing | Marketing sites, portfolios, campaign pages | Platform-bound; not ideal for complex product logic. https://www.framer.com/ai/ |
| Relume | AI sitemap, wireframe, style guide, Webflow/Figma flow | Marketing website planning | Great for structure, not final product polish. https://www.relume.io/ |
| Uizard | Text/sketch/screenshot to UI mockup | Early MVP concept and PM communication | Output can look templated. https://uizard.io/ |
| Google Stitch / Galileo direction | Prompt or image to web/mobile UI | Fast UI exploration | Experimental; requires review. https://stitch.withgoogle.com/ |
| Builder.io Visual Copilot | Figma to code with component mapping and tokens | Mature design systems mapped to real code | Setup cost is higher. https://www.builder.io/m/design-to-code |
| Locofy.ai | Figma/Penpot to React, Next, Vue, Angular, Flutter, HTML/CSS | Generate frontend skeleton from clean designs | Requires good Auto Layout and naming. https://www.locofy.ai/ |
| Anima | Figma to React/HTML/Tailwind/Vue, API for design-to-code agents | Clickable prototypes and first-pass code | Needs responsive and semantic review. https://www.animaapp.com/figma |
| html.to.design | Import live webpages into Figma | Competitor teardown and old-site redesign | Respect copyright/IP; imported layers are not a design system. https://html.to.design/ |
| Screenshot to Code | Screenshot/mockup/Figma to frontend code | Static UI reproduction drafts | Lacks business semantics, states, accessibility. https://github.com/abi/screenshot-to-code |
| Codia AI | Screenshot to editable Figma/Sketch/Photoshop layers | Rebuilding old visual assets | Recognition may be imperfect. https://codia.ai/screenshot-to-figma |
| Canva AI / Canva Code | Fast marketing assets and light interactive widgets | Social posts, decks, lightweight marketing content | Not a production app UI pipeline. https://www.canva.com/canva-ai/ |

Recommended combinations:

- Marketing site planning: Relume -> Figma -> Framer/Webflow/React.
- React product UI draft: v0 -> shadcn/ui -> manual product integration.
- Figma production handoff: Figma Dev Mode -> figma skills -> code review -> Playwright screenshots.
- Screenshot replica: Screenshot to Code or Codia -> manual semantic rebuild -> accessibility pass.

## Design Methods

| Stage | Method | Output | Source |
|---|---|---|---|
| Problem framing | Double Diamond / design thinking | Clear problem, user, constraints, success metric | https://www.designcouncil.org.uk/resources/the-double-diamond/ |
| Information architecture | Sitemap, navigation model, content priority | Page map and content hierarchy | https://www.nngroup.com/articles/information-architecture-sitemaps/ |
| Navigation validation | Card sorting and tree testing | Evidence for menus/categories | https://www.nngroup.com/articles/card-sorting-definition/ |
| Flow planning | User flows and wireflows | Task path from entry to result | https://www.figma.com/resource-library/user-flow/ |
| Wireframing | Low-fidelity structure before visual detail | Layout skeleton and states | https://www.figma.com/resource-library/what-is-wireframing/ |
| Design system | Tokens, components, states, governance | Reusable visual and behavior rules | https://www.nngroup.com/articles/design-systems-101/ |
| Interface inventory | Audit repeated UI patterns | Cleanup list and component candidates | https://bradfrost.com/blog/post/conducting-an-interface-inventory/ |
| Heuristic review | Nielsen's 10 heuristics | Usability issue list by severity | https://www.nngroup.com/articles/ten-usability-heuristics/ |
| Responsive design | Breakpoints, reflow, image strategy | Desktop/tablet/mobile rules | https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Responsive_Design |
| Accessibility | WCAG 2.2 AA-oriented checks | Keyboard, contrast, labels, errors | https://www.w3.org/WAI/WCAG22/quickref/ |
| Handoff | Figma Dev Mode, tokens, component specs | Build-ready design contract | https://help.figma.com/hc/en-us/articles/15023124644247-Guide-to-Dev-Mode |
| Visual QA | Screenshot comparison and manual review | Pass/fail screenshots and fixes | https://playwright.dev/docs/test-snapshots |

## Inspiration And Case Reference Sites

Use these sites for reference, not direct copying. For each collected reference, write down the reason it is useful and the rule that can be adapted to our page.

### General Web Inspiration

- Awwwards: award-winning and experimental websites. https://www.awwwards.com/websites/
- SiteInspire: curated clean website references. https://www.siteinspire.com/
- Land-book: strong landing page and website gallery. https://land-book.com/
- Godly: modern web design inspiration. https://godly.website/
- Httpster: independent website inspiration. https://httpster.net/

### Landing Pages

- Lapa Ninja: landing page gallery with many product styles. https://www.lapa.ninja/
- One Page Love: one-page website references. https://onepagelove.com/
- Saaspo: SaaS landing page examples. https://saaspo.com/

### Product UI And Flows

- Mobbin: real mobile and web product screens. https://mobbin.com/
- Page Flows: real user flows and interaction journeys. https://pageflows.com/
- Refero: product UI screenshots. https://refero.design/
- SaaS Interface: SaaS product interface references. https://saasinterface.com/
- SaaSFrame: SaaS marketing and product UI references. https://www.saasframe.io/

### Public Design Systems Worth Studying

- GOV.UK Design System: practical, accessible service design. https://design-system.service.gov.uk/
- Material Design 3: color, typography, motion, accessibility foundations. https://m3.material.io/
- IBM Carbon: enterprise component/system discipline. https://carbondesignsystem.com/
- Atlassian Design System: product UI patterns and motion guidance. https://atlassian.design/

## Reference Collection Template

For each reference, record:

- Link:
- Screenshot location:
- Page type:
- What is useful:
- What should not be copied:
- Layout rule to adapt:
- Typography/color/motion note:
- Mobile behavior note:
- Accessibility risk:

## Production Workflow

Use this workflow for future UI work:

1. Define the page goal, audience, primary action, and constraints.
2. Collect 10-20 references across structure, visual language, and interaction.
3. Write a reference audit: what to borrow, what to avoid, what must be original.
4. Draft information architecture and user flow.
5. Create a low-fidelity wireframe or UI skeleton.
6. Define tokens: colors, type scale, spacing, radius, shadows, motion duration.
7. Implement the page using the existing stack first.
8. Add interaction only after static layout is stable.
9. Run accessibility and responsive checks.
10. Capture screenshots and update the change log.
11. Commit with a clear Chinese message and push to the repository.

## Quality Gate

Before calling a UI task complete:

- `npm run build` passes.
- Desktop and mobile screenshots have no overflow, overlap, clipped text, or broken images.
- Keyboard focus is visible for interactive elements.
- Decorative media is not in the tab order.
- `prefers-reduced-motion` has a reduced path when animation exists.
- References and design decisions are documented in `docs/`.

