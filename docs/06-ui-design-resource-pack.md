# 网页 UI 设计资源手册

更新时间：2026-06-30

这份文档用于后续网页 UI 设计、页面复刻、交互优化和独立案例调研。内容合并了六个方向的调研：Agent skills、插件与工具、设计方法、案例参考站、AI 辅助 UI 工具，以及可重复执行的生产流程。

## 仓库背景

- Git 仓库：https://github.com/LHyjcy/UIsheji.git
- 当前项目技术栈：Vite、React、TypeScript、原生 CSS、本地图片资源。
- 当前实现原则：除非后续任务明确要求，否则保持现有布局和底层框架不变。
- 对当前项目而言，优先使用流程类 skills、视觉检查工具和浏览器验收工具，不优先引入 UI 组件库。当前页面是高保真静态复刻，组件库默认样式很容易破坏参考图的布局和气质。

## 当前项目优先使用顺序

优化当前页面时，按这个顺序使用：

1. `design-taste-frontend`：检查视觉审美、信息密度、层级、间距和交互克制程度。
2. `accessibility`：检查语义结构、键盘路径、焦点态、对比度和 reduced motion。
3. `playwright`：做桌面端和移动端截图、溢出检查、视觉回归检查。
4. `figma-implement-design`：只有拿到真实 Figma 文件或节点时再使用。
5. `shadcn-component-review`：只有项目以后转成可复用产品界面，且出现表单、表格、弹窗等组件时再使用。

当前静态复刻阶段，不建议为了“看起来更工程化”而加入 Tailwind、shadcn/ui、MUI、Ant Design 等组件库。除非产品方向从“像素级复刻”变成“组件化产品应用”。

## Agent Skills 推荐

安装第三方 skill 前，要先阅读对应的 `SKILL.md`，并检查其中是否包含脚本或自动化命令。已有本地 skill 能覆盖任务时，优先使用本地 skill。

| 优先级 | Skill | 适合做什么 | 安装命令 / 来源 |
|---|---|---|---|
| P0 | `design-taste-frontend` | 反模板化视觉优化、落地页、作品集、品牌页、审美打磨 | `npx skills add https://github.com/leonxlnx/taste-skill --skill design-taste-frontend` / https://www.skills.sh/leonxlnx/taste-skill/design-taste-frontend |
| P0 | `frontend-design` | 通用前端设计质量提升，高质量页面构图 | `npx skills add https://github.com/anthropics/skills --skill frontend-design` / https://www.skills.sh/anthropics/skills/frontend-design |
| P0 | `web-design-guidelines` | 网站设计启发式检查、UX 和可访问性审查 | `npx skills add https://github.com/vercel-labs/agent-skills --skill web-design-guidelines` / https://www.skills.sh/vercel-labs/agent-skills/web-design-guidelines |
| P0 | `figma-implement-design` | 将 Figma 设计上下文转为生产代码 | `npx skills add https://github.com/figma/mcp-server-guide --skill figma-implement-design` / https://officialskills.sh/figma/skills/figma-implement-design |
| P0 | `figma-create-design-system-rules` | 根据 Figma 或代码库生成项目设计系统规则 | `npx skills add https://github.com/figma/mcp-server-guide --skill figma-create-design-system-rules` / https://officialskills.sh/figma/skills/figma-create-design-system-rules |
| P0 | `wcag-accessibility` / `accessibility` | WCAG 检查、屏幕阅读器支持、键盘可用性 | https://aiuxplayground.com/skills/wcag-accessibility/ |
| P1 | `shadcn` / `shadcn-ui` | React + Tailwind + Radix 组件系统 | `npx skills add https://github.com/shadcn/ui --skill shadcn` / https://ui.shadcn.com/docs |
| P1 | `tailwind-design-system` | Tailwind token、工具类约定、组件样式规则 | `npx skills add https://github.com/wshobson/agents --skill tailwind-design-system` |
| P1 | `vercel-react-best-practices` | React / Next.js 实现规范、性能和组件实践 | `npx skills add https://github.com/vercel-labs/agent-skills --skill vercel-react-best-practices` |
| P1 | `vercel-composition-patterns` | React 组件组合模式，减少复杂 prop 和重复组件 | `npx skills add https://github.com/vercel-labs/agent-skills --skill vercel-composition-patterns` |
| P1 | `webapp-testing` | 浏览器内 UI 流程测试、截图和交互验证 | `npx skills add https://github.com/anthropics/skills --skill webapp-testing` |

推荐检索命令：

```powershell
npx skills find "frontend design"
npx skills find "figma design system"
npx skills find "accessibility frontend"
npx skills find "web design guidelines"
```

## 前端 UI 库与设计系统

| 工具 | 最适合的场景 | 使用说明 | 来源 |
|---|---|---|---|
| shadcn/ui | 需要可编辑本地组件源码的 React 应用 | 搭配 Tailwind、Radix、Lucide 很强，适合 SaaS 和产品界面 | https://ui.shadcn.com/docs |
| Radix UI Primitives | 无样式、可访问的底层交互组件 | 适合弹窗、菜单、Tabs、Select 等复杂交互 | https://www.radix-ui.com/primitives/docs/overview/introduction |
| Tailwind CSS | 工具类样式、响应式规则、快速迭代 | 需要团队约定，避免类名堆叠和样式散乱 | https://tailwindcss.com/docs |
| React Aria | 高要求可访问性和自定义渲染 | 适合严肃产品和自建设计系统 | https://react-spectrum.adobe.com/react-aria/ |
| Base UI | 无样式可访问组件 | 想拥有完整视觉控制权时可考虑 | https://base-ui.com/ |
| Headless UI | 无样式可访问组件 | 适合 React / Vue + Tailwind 项目 | https://headlessui.com/ |
| Ant Design | 企业后台、CRUD、表单和表格 | 国内后台系统常用，但默认风格很明显 | https://ant.design/ |
| MUI | Material 风格 React 应用 | 组件覆盖面成熟，适合中大型产品 | https://mui.com/ |
| Fluent UI | 微软生态产品 | 适合 Office、Teams、Windows 风格应用 | https://developer.microsoft.com/en-us/fluentui |
| Carbon | 企业级数据密集产品 | 可学习严谨的企业设计系统规范 | https://carbondesignsystem.com/ |
| Mantine | 快速搭建 React 应用 | 适合仪表盘、内部工具和管理页 | https://mantine.dev/ |
| Chakra UI | 可主题化 React 组件系统 | 适合需要主题能力和开发速度平衡的项目 | https://chakra-ui.com/ |
| Storybook | 组件隔离开发、文档和状态展示 | 适合沉淀组件库和设计系统 | https://storybook.js.org/docs |
| Chromatic | Storybook 视觉回归测试 | UI 改动频繁时能防止样式回退 | https://www.chromatic.com/ |
| Lucide | 统一线性图标库 | 适合作为工具型界面的默认图标来源 | https://lucide.dev/ |

## 动效与交互

| 工具 | 最适合的场景 | 注意事项 |
|---|---|---|
| CSS transitions / keyframes | hover、reveal、focus、loading 等轻量反馈 | 优先使用 `opacity` 和 `transform`。 |
| Motion | React 动画和布局过渡 | 适合作为产品 UI 的默认动效方案，需要处理 reduced motion。来源：https://motion.dev/docs |
| GSAP | 复杂时间线、滚动动画、SVG、canvas 类动画 | 只有 CSS / Motion 不够时再用。来源：https://gsap.com/docs/v3/ |
| Floating UI | Tooltip、Popover、Dropdown、Context menu 定位 | 它解决浮层定位，不等于完整组件库。来源：https://floating-ui.com/docs/getting-started |

基础规则：

- 动效必须解释状态变化，不要只为了装饰。
- 必须尊重 `prefers-reduced-motion`。
- 产品 UI 的动效时长要短：小反馈通常 120-240ms，大区域 reveal 通常 240-480ms。
- 动效不能造成文字重叠、布局跳动或阻塞输入。

## AI UI 与设计转代码工具

| 工具 | 核心能力 | 适合场景 | 风险 / 限制 |
|---|---|---|---|
| Figma AI / Figma Make / Dev Mode MCP | 生成 UI、原型、HTML/CSS/JS 原型，并给 AI 编码工具提供设计上下文 | 已经使用 Figma 的团队 | 生成代码仍要工程 review。https://www.figma.com/ai/ |
| v0 by Vercel | 从提示词、截图、mockup、Figma 生成 React / Tailwind / shadcn 风格 UI | SaaS 仪表盘、React 组件、落地页初稿 | 业务状态、权限和数据逻辑仍需人工接入。https://v0.app/docs |
| Framer AI | AI 建站和可视化发布 | 营销官网、作品集、活动页 | 平台绑定强，不适合复杂产品逻辑。https://www.framer.com/ai/ |
| Relume | AI sitemap、wireframe、style guide、Webflow / Figma 流程 | 营销站信息架构和线框 | 强在结构，不等于最终视觉品质。https://www.relume.io/ |
| Uizard | 文本、草图、截图转 UI mockup | MVP 概念验证、PM 沟通、用户访谈前原型 | 输出容易模板化。https://uizard.io/ |
| Google Stitch / Galileo 方向 | 通过提示词或图片生成 Web / Mobile UI | 快速探索界面方向 | 实验属性强，需要人工校对。https://stitch.withgoogle.com/ |
| Builder.io Visual Copilot | Figma 转代码，支持组件映射和 token | 成熟设计系统映射到真实代码组件 | 前期配置成本较高。https://www.builder.io/m/design-to-code |
| Locofy.ai | Figma / Penpot 转 React、Next、Vue、Angular、Flutter、HTML/CSS | 从规范设计稿生成前端骨架 | 强依赖 Auto Layout 和命名质量。https://www.locofy.ai/ |
| Anima | Figma 转 React / HTML / Tailwind / Vue，也提供 API | 可点击原型和首版代码 | 需要响应式和语义化 review。https://www.animaapp.com/figma |
| html.to.design | 将线上网页导入 Figma | 竞品拆解、旧站重设计 | 注意版权和 IP；导入图层不等于设计系统。https://html.to.design/ |
| Screenshot to Code | 截图 / mockup / Figma 转前端代码 | 静态 UI 复刻初稿 | 缺少业务语义、状态和可访问性。https://github.com/abi/screenshot-to-code |
| Codia AI | 截图转可编辑 Figma / Sketch / Photoshop 图层 | 重建旧视觉资产 | 识别不一定完全准确。https://codia.ai/screenshot-to-figma |
| Canva AI / Canva Code | 快速生成营销素材和轻交互小组件 | 社媒图、演示稿、轻量营销内容 | 不是生产级 App UI 管线。https://www.canva.com/canva-ai/ |

推荐组合：

- 营销站规划：Relume -> Figma -> Framer / Webflow / React。
- React 产品 UI 初稿：v0 -> shadcn/ui -> 人工接入产品逻辑。
- Figma 生产交付：Figma Dev Mode -> Figma skills -> 代码 review -> Playwright 截图验收。
- 截图复刻：Screenshot to Code 或 Codia -> 人工语义化重建 -> 可访问性检查。

## 设计方法

| 阶段 | 方法 | 产出 | 来源 |
|---|---|---|---|
| 问题定义 | Double Diamond / Design Thinking | 明确问题、用户、约束和成功指标 | https://www.designcouncil.org.uk/resources/the-double-diamond/ |
| 信息架构 | Sitemap、导航模型、内容优先级 | 页面地图和内容层级 | https://www.nngroup.com/articles/information-architecture-sitemaps/ |
| 导航验证 | Card Sorting、Tree Testing | 菜单、分类和命名依据 | https://www.nngroup.com/articles/card-sorting-definition/ |
| 流程规划 | User Flow、Wireflow | 从入口到结果的任务路径 | https://www.figma.com/resource-library/user-flow/ |
| 线框设计 | 先做低保真结构，再做视觉 | 布局骨架和状态说明 | https://www.figma.com/resource-library/what-is-wireframing/ |
| 设计系统 | Token、组件、状态、治理 | 可复用视觉和行为规则 | https://www.nngroup.com/articles/design-systems-101/ |
| 界面盘点 | Interface Inventory | 重复模式和组件候选清单 | https://bradfrost.com/blog/post/conducting-an-interface-inventory/ |
| 启发式评估 | Nielsen 10 条可用性原则 | 按严重程度排列的问题列表 | https://www.nngroup.com/articles/ten-usability-heuristics/ |
| 响应式设计 | 断点、重排、图片策略 | 桌面、平板、手机规则 | https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Responsive_Design |
| 可访问性 | WCAG 2.2 AA 方向检查 | 键盘、对比度、标签、错误提示 | https://www.w3.org/WAI/WCAG22/quickref/ |
| 设计交付 | Figma Dev Mode、token、组件规格 | 可实现的设计合同 | https://help.figma.com/hc/en-us/articles/15023124644247-Guide-to-Dev-Mode |
| 视觉验收 | 截图对比和人工检查 | 通过 / 不通过截图与修复项 | https://playwright.dev/docs/test-snapshots |

## 案例参考网站

这些网站用于参考，不用于直接复制。每收集一个参考，都要写清楚它为什么有用，以及可以转化成我们项目规则的部分。

### 综合网页灵感

- Awwwards：获奖网站、实验性网页、强动效与品牌叙事。https://www.awwwards.com/websites/
- SiteInspire：高质量、干净的网站参考。https://www.siteinspire.com/
- Land-book：落地页、作品集、产品页等网页图库。https://land-book.com/
- Godly：现代网页视觉灵感。https://godly.website/
- Httpster：偏独立、排版、极简、创意工作室风格的网站。https://httpster.net/

### 落地页参考

- Lapa Ninja：覆盖大量落地页和产品页面。https://www.lapa.ninja/
- One Page Love：单页网站、活动页、作品集和产品发布页。https://onepagelove.com/
- Saaspo：SaaS 落地页、定价页、产品页参考。https://saaspo.com/

### 产品 UI 与用户流程

- Mobbin：真实移动端和 Web 产品截图。https://mobbin.com/
- Page Flows：真实用户流程、录屏和交互路径。https://pageflows.com/
- Refero：产品 UI 截图和组件状态参考。https://refero.design/
- SaaS Interface：SaaS 产品界面、仪表盘、表格、设置页参考。https://saasinterface.com/
- SaaSFrame：SaaS 官网、产品界面和邮件序列参考。https://www.saasframe.io/

### 值得学习的公开设计系统

- GOV.UK Design System：实用、可访问的政务服务设计系统。https://design-system.service.gov.uk/
- Material Design 3：颜色、字体、动效和可访问性基础。https://m3.material.io/
- IBM Carbon：企业级组件和设计系统纪律。https://carbondesignsystem.com/
- Atlassian Design System：产品 UI 模式和动效规则。https://atlassian.design/

## 参考收集模板

每个参考案例都按下面格式记录：

- 链接：
- 截图位置：
- 页面类型：
- 值得参考的点：
- 不应该复制的点：
- 可转化的布局规则：
- 字体 / 色彩 / 动效备注：
- 移动端表现：
- 可访问性风险：

## 生产流程

后续 UI 工作按这个流程执行：

1. 明确页面目标、用户、主行动作和约束。
2. 收集 10-20 个参考，覆盖结构、视觉语言和交互。
3. 写参考分析：借鉴什么、避免什么、哪些必须原创。
4. 画信息架构和用户流程。
5. 做低保真线框或 UI 骨架。
6. 定义 token：颜色、字号、间距、圆角、阴影、动效时长。
7. 优先使用现有技术栈实现页面。
8. 静态布局稳定后再增加交互。
9. 做可访问性和响应式检查。
10. 截图验收并更新变更记录。
11. 使用清晰的中文提交信息提交并推送到仓库。

## 完成前质量门槛

声明 UI 任务完成前，至少确认：

- `npm run build` 通过。
- 桌面端和移动端截图无横向溢出、重叠、文字裁切、图片丢失。
- 可交互元素有清晰键盘焦点。
- 装饰性媒体不进入 tab 顺序。
- 存在动画时，`prefers-reduced-motion` 有降级方案。
- 参考来源和设计决策已经记录在 `docs/`。

