# Kira Design System 2.0 Icons 使用规范

本文档用于指导 Agent 和同事在 Figma 设计、前端还原、组件库实现中正确使用 Kira 图标资产。图标属于资产系统，不属于可自由绘制的装饰元素。

图标源文件：[Design System 2.0 Icons](https://www.figma.com/design/QTYpVD4AlCtyUwkUrogZXQ/Design-System-2.0-Icons?node-id=1-156)

## 1. 强制原则

只要任务涉及图标，Agent 必须先读取本文档，再进入设计或实现。

图标使用按以下优先级处理：

1. 明确指定的 Figma 图标组件或业务图标。
2. 本文档 `业务图标` 表中的映射。
3. `Icons / General` 中的全部图标组件。
4. 若仍找不到合适图标，停止并说明缺失，不允许自行绘制或替代。

禁止：

- 禁止手绘图标。
- 禁止新建 vector 图标来模拟已有图标。
- 禁止用键盘输入的文字字符冒充图标（如 →、←、×、✓、•、★、⌄、⋮）。图标必须是图标库组件实例（SVG 矢量），文本节点里的字符不是图标。
- 禁止使用 emoji 代替图标。
- 禁止使用截图、PNG、JPG 作为产品 UI 图标。
- 禁止混用其他 icon pack。
- 禁止因为“看起来差不多”替换业务图标映射。
- 禁止把图标颜色硬编码为 primitive color 或十六进制值。

允许：

- 从图标库实例化已有 Figma component。
- 在前端用对应的 Phosphor icon component 还原。
- 按设计稿或组件状态切换 icon weight。
- 使用 `icon/*` semantic token 控制颜色。

## 2. 文件结构

`Foundations 2.0 — Icons` 页面分为 3 个主要区域：

| 区域 | 类型 | 用途 |
| --- | --- | --- |
| `🗂 Activity types` | 业务图标表 | 定义活动类型和题型的固定图标映射 |
| `Interactive Activities Options` | 业务列表示例 | 展示活动列表中图标的实际落位 |
| `Icons / General` | 全部图标库 | 提供通用 UI 图标组件 |

本文档把图标分为两类：

| 类型 | 使用场景 | 规则 |
| --- | --- | --- |
| 业务图标 | 活动类型、题型、教育业务对象 | 必须按映射表使用 |
| 全部图标 | 通用 UI、操作、导航、状态、工具 | 从 `Icons / General` 中选择 |

业务图标优先级高于全部图标。只要场景能匹配业务图标表，就不要去全部图标里另选一个“更像”的图标。

## 3. 业务图标

业务图标来源于 `🗂 Activity types` 区域。表中的 `PHOSPHOR ICON` 列是权威来源。

注意：当前 Figma 表中部分行的可视图标槽可能为空，或可视占位和 `PHOSPHOR ICON` 列不完全一致。Agent 必须以 `PHOSPHOR ICON` 列为准，不要根据空槽位自行绘制。

| # | Name | Phosphor icon | Level | 说明 |
| --- | --- | --- | --- | --- |
| 01 | Read Aloud | `speaker-high` | Activity | TTS audio playback of a passage. Students listen along. |
| 02 | Read & Respond | `book-open-text` | Activity | Reading passage paired with free response questions. |
| 03 | Read & Chat | `chats` | Activity | Students converse with AI about a reading passage. |
| 04 | MCQ | `list-checks` | Activity | All-multiple-choice quiz. AI generation & auto-grading supported. |
| 05 | Multi-format Quiz | `layout` | Activity | Mixed question types in one quiz. No AI generation yet. |
| 06 | Essay | `file-text` | Activity | Long-form writing. AI feedback & rubric grading supported. |
| 07 | Coding | `code` | Activity | Write & run code with test cases. Sub-types: debug, remix, scratch, fill-in. |
| 08 | Document Upload | `file-arrow-up` | Activity | Student submits a file. Teacher grades manually. |
| 09 | Multiple Choice | `list-checks` | Question type | Single question with selectable options, single or multi-answer. |
| 10 | Free Response | `text-aa` | Question type | Open-ended typed answer. Short, long, or essay-length. |
| 11 | Fill in the Blank | `brackets-square` | Activity | Text with gaps. AI generation & auto-grading supported. |
| 12 | Interactive Video | `monitor-play` | Activity | Video with embedded question checkpoints. |
| 13 | Drag & Order | `list-numbers` | Activity | Students sequence or rank blocks in the correct order. |
| 14 | Chatpods | `robot` | Activity | Open AI conversation with an AI persona or context. |
| 15 | Speak Aloud | `microphone` | Activity | Student records voice. Evaluates pronunciation and speech accuracy. |

`Multiple Choice` 和 `Free Response` 是 question type，不是独立 activity。它们应作为 MCQ 或 Multi-format Quiz 内的问题选项出现。

## 4. 全部图标

全部图标来源于 `Icons / General` 区域。该区域基于 Phosphor Icons 2.1，包含 1,512 个通用 icon component set。

每个通用图标通常包含 6 个 weight：

```text
Weight=Regular
Weight=Thin
Weight=Light
Weight=Bold
Weight=Fill
Weight=Duotone
```

默认使用 `Regular`。除非目标 Figma 设计稿、组件状态或业务规则明确要求，不要擅自切换 weight。

| Weight | 使用场景 |
| --- | --- |
| `Regular` | 默认 UI 图标 |
| `Light` | 低强调、大尺寸、辅助说明 |
| `Thin` | 极低强调或特殊展示，常规产品 UI 中谨慎使用 |
| `Bold` | 高强调、小尺寸仍需清晰识别的图标 |
| `Fill` | selected、active、favorited、completed 等实心状态 |
| `Duotone` | 较大尺寸的说明性图形、空状态或引导模块 |

## 5. 全部图标分类

`Icons / General` 按以下分类组织。查找通用图标时，先定位分类，再选择语义最贴近的 component set。

| Category | 典型内容 |
| --- | --- |
| `Weather & Nature` | 自然、天气、环境 |
| `Communication` | 聊天、消息、广播、联系方式 |
| `Maps & Travel` | 地图、位置、交通、旅行 |
| `Media` | 图片、视频、音频、文章 |
| `Time` | 日期、日历、时间 |
| `Games` | 游戏、运动、娱乐 |
| `Design` | 对齐、布局、形状、设计工具 |
| `Brands` | 品牌类图标 |
| `Health & Wellness` | 健康、身体、医疗 |
| `System & Devices` | 设备、系统、键盘、电池 |
| `Math & Finance` | 图表、计算、金融 |
| `Office & Editing` | 文件、编辑、办公 |
| `Commerce` | 商品、购物、商业 |
| `Arrows` | 方向、导航、展开收起 |
| `People` | 用户、身份、群组 |
| `Development` | 代码、开发、调试 |
| `Security & Warnings` | 安全、告警、提示 |
| `Education` | 书本、课堂、学习 |
| `Social Media` | 社交与第三方服务图标 |

第三方服务图标目前以实例形式出现，包括：

```text
Icons/Google
Icons/Google Docs
Icons/Google Drive
Icons/Google Sheets
Icons/Google Slides
Icons/Microsoft
```

## 6. 尺寸规则

图标组件源尺寸以 `32x32` 为主。产品 UI 中的实际渲染尺寸由组件语境决定。

| 场景 | 建议尺寸 |
| --- | ---: |
| 表单、菜单、列表辅助图标 | 16 |
| 普通按钮、导航、工具栏 | 20 |
| 活动类型、题型、卡片内主图标 | 24 |
| 展示卡片、说明性模块 | 32 |
| 空状态、引导模块 | 32 以上，需以设计稿为准 |

使用要求：

- 图标必须等比缩放。
- 不要非等比拉伸图标。
- 不要为了填满容器而改变图标内部比例。
- 图标外部容器可以有固定宽高，但图标本身应保持视觉居中。

## 7. 颜色规则

图标颜色必须使用 `design.md` 中的 `icon/*` semantic token。

| 场景 | Token |
| --- | --- |
| 主图标 | `icon/primary` |
| 次级图标 | `icon/secondary` |
| 弱图标 | `icon/tertiary` |
| 禁用图标 | `icon/disabled` |
| 反色图标 | `icon/invert` |
| 品牌图标 | `icon/brand` |
| 成功图标 | `icon/positive` |
| 错误图标 | `icon/negative` |
| 警告图标 | `icon/warning` |
| 信息图标 | `icon/informative` |

不要直接使用 `neutral/500`、`brand/periwinkle/600`、`#666666` 等值给图标上色。图标必须跟随主题 mode 切换。

## 8. Agent 在 Figma 中的使用流程

当 Agent 在 Figma 中创建设计，并且需要图标时，必须按以下流程执行：

1. 判断该图标是否属于业务图标。
2. 如果属于业务图标，使用 `业务图标` 表中的 Phosphor icon 名称。
3. 如果不是业务图标，到 `Icons / General` 中查找语义匹配的 component set。
4. 实例化或导入现有 icon component。
5. 设置正确 weight、尺寸和 `icon/*` semantic color。
6. 若找不到合适图标，停止并说明缺失，不允许手绘。

如果 Figma 工具环境无法导入或实例化图标组件，Agent 必须说明限制，并列出需要使用的图标名称。不要退而求其次绘制一个相似图形。

## 9. 前端实现规则

前端实现应优先使用与 Figma 图标名称对应的 Phosphor icon component。

命名转换示例：

| Figma / Phosphor name | React component naming example |
| --- | --- |
| `speaker-high` | `SpeakerHigh` |
| `book-open-text` | `BookOpenText` |
| `file-arrow-up` | `FileArrowUp` |
| `brackets-square` | `BracketsSquare` |
| `monitor-play` | `MonitorPlay` |
| `list-numbers` | `ListNumbers` |
| `text-aa` | `TextAa` |

实现要求：

- icon-only button 必须有可访问名称，例如 `aria-label`。
- 装饰性图标应对辅助技术隐藏。
- 图标不要作为文字字符使用。
- 图标颜色应绑定到 semantic token 或 CSS variable。
- selected、active、completed 等状态优先检查是否需要 `Fill` weight。
- 加载、错误、空状态等系统场景优先使用已有通用图标，不要自绘。

## 10. QA 检查清单

交付前必须检查：

- 是否读取了本文档。
- 是否优先使用业务图标映射。
- 是否从 `Icons / General` 复用图标组件。
- 是否没有手绘、新建 vector、截图或混用其他 icon pack。
- 是否没有文字字符冒充图标（检查文本节点中的 →、×、✓、⋮ 等符号）。
- 是否使用正确 weight。
- 是否使用正确尺寸。
- 是否使用 `icon/*` semantic token。
- 是否保留图标等比缩放。
- icon-only 交互控件是否有可访问名称。
- 找不到图标时是否停止说明，而不是自行替代。

## 11. AGENTS.md 接入建议

建议在 `AGENTS.md` 中加入以下硬性规则：

```md
When a design task includes icons, read icons.md before creating or editing Figma nodes.

Never hand-draw icons. Never create custom vector icons. Icons must come from the Design System 2.0 Icons Figma file or from the matching frontend icon package.

For activity and question type icons, use icons.md business icon mappings exactly. If no matching icon exists, stop and report the missing icon instead of inventing one.
```
