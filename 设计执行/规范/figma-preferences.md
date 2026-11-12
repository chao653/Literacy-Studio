# Figma 项目偏好（Literacy-Studio）

> Agent 在本项目做任何 Figma 绘制/修改前必读。本文件固化 token 与组件的来源约定，优先级高于 agent 自行判断。
> 依据：`设计执行/规范/design.md`（token）+ `components.md`（基础组件）+ `icons.md`（图标）。

## 基础组件（Button / Badge / Input / Textarea / Tabs / Alert / Progress / Dialog / Drawer 等）

- **来源：`ShadCN-Default` 库**（Kira 默认，开项目时确认），清单与能力边界见 `components.md`。
- 禁止自建与该库重复的基础组件；组件能力有限时按「最近似变体」使用，或经用户确认后局部自绘并在日志记录缺口。
- 旧库 / 标注待归档的库（如 `Kira Custom Components (TO BE ARCHIVED)`）不得用于新稿，只作现状参照。

## 颜色 / 圆角 / 间距 / 阴影 / 渐变 / 文本样式

- **来源：`Design System 2.0 Foundations` 库**（Kira 默认，开项目时确认）：semantic 变量（`text/*`、`surface/*`、`fill/*`、`border/*`、`icon/*`）、`spacing`、`radius`、`shadow/*` effect styles、`gradient/AI/*` paint styles、`text/{scale}/{weight}` text styles。
- 库实际值与 `design.md` 有出入时，以库为准并在 `design.md` 记录出入。
- **新建容器不留默认白**：frame / auto layout 创建后自带的 `#FFFFFF` 填充必须当场处理——纯布局容器清空填充，背景容器绑 `surface/*` 等 semantic token；未绑定的默认白为走查必改项。

## 图标

- **来源：`Design System 2.0 Icons` 库（Phosphor）**（Kira 默认，开项目时确认），业务图标映射严格按 `icons.md`。
- 基础组件内置的 icon swap 槽位应 swap 为 Phosphor 图标组件，不用组件库自带的其他 icon pack。
- **图标必须是 SVG 组件实例**：禁止在文本节点里用键盘字符（→、×、✓、•、⋮ 等）手打冒充图标；走查发现即为必改项。

## 业务组件（本项目自建）

- 母版集中放在项目 Figma 文件「Components」页（`888:644`）的 [Components section `4427:1173`](https://www.figma.com/design/pCdwCN68j1KGXz3aZZ6Wn0/Literacy-Studio-AI-Tutor?node-id=4427-1173)。同页的 `AI Tutor` section（`1225:4594`）是学生端画面参照，不是母版。
- 现存母版：随设计推进逐条登记，格式为组件名 + node_id + 变体/属性 + 明细日志链接。
- 已删除组件同样记录在案（不得再引用）。
- 新增业务组件前先查基础组件库清单确认无覆盖；新母版一律放进 Components section。

### 现存母版

**Student Detail（老师端学生详情，17 个）**：2026-11-12 建，明细见 [`设计执行/日志/Student Detail.md`](../日志/Student%20Detail.md) 2026-11-12 节。文字挂 DS 2.0 `text/*` 样式，颜色、间距、圆角绑 DS 2.0 变量，图标是 DS2 Phosphor 实例。

| 组件名 | node_id | 变体 / 属性 |
| --- | --- | --- |
| Student Detail / Card Header | `4427:980` | Type = Timeline / Support / Your Turn / Comprehension / Kira said / Chat Activity / Retelling；Title、Subtitle、Show subtitle、Show info（右上 (i)） |
| Student Detail / Summary Card | `4427:1044` | Card = Progress / Comprehension / Your Turn × Tone = Positive / Warning / Neutral；Answer、Fact |
| Student Detail / Timeline Phase | `4427:1117` | Phase、Duration、Show duration、Show icon（Your Turn 麦克风）、Show divider、Stopped note / Show stopped、Muted note / Show muted |
| Student Detail / Your Turn Status | `4427:1127` | Label = No help / Used help / No usable recording / Not offered；Duration、Show duration |
| Student Detail / Student Pagination | `4427:1152` | 无属性（Previous Student / Next Student） |
| Student Detail / Identity | `4427:1164` | Initials、Name、Task、Status、Show status、Total |
| Student Detail / Word Group | `4430:961` | Heading、Explanation、Show explanation、Show word 1–8 |
| Student Detail / Audio Player | `4430:998` | Current、Total |
| Student Detail / Mark Group | `4430:1053` | Selected = None / Read it / Needs support / Unclear；Show hint |
| Student Detail / MCQ Option | `4430:1123` | State = Default / Correct / Wrong；Letter、Option、Show tag |
| Student Detail / Kira Message | `4430:1149` | Caption、Show caption、Message |
| Student Detail / Question Card | `4434:942` | Status = Correct on 1st try / Correct after hint / Incorrect / Skipped；Question、Show option 1–4（嵌 MCQ Option） |
| Student Detail / Open Response | `4434:1059` | Response = Recording / Typed / Long / Under review / Not submitted；Question、Answer（最多 3 行） |
| Student Detail / Retelling Body | `4434:1461` | Badge = Ready to listen / Cut off early / Too short (under 5s) / No recording；Duration、Transcript、Show transcript、Show unavailable |
| Student Detail / Behavior Alert Row | `4434:1732` | Status = Needs review / Reviewed；Initials、Name、Time、Summary |
| Student Detail / Empty State | `4434:1777` | Title、Body |
| Student Detail / Conversation Detail | `4440:1412` | Status = Needs review / Reviewed；Time、Question、Answer、Review Note（抽屉内容，放进 ShadCN `Sheet`） |

## 复用惯例（业务纹样）

- **数据表格（ShadCN `Table / Head` + `Table / Cell`）**：数字列（WCPM、Accuracy、Comprehension、Interventions 等）一律左对齐、固定列宽；Actions 列表头右对齐、列宽 FILL 吃掉剩余宽度；表头单元格跟随列宽（FILL），保证表头下边线连续。样板：[Screener Monitor 表格](https://www.figma.com/design/pCdwCN68j1KGXz3aZZ6Wn0/Literacy-Studio-AI-Tutor?node-id=2057-19141)（Student 333 / Status 226 / Risk 171 / WCPM 148 / Accuracy 121 / Actions FILL）。依据：用户指令 2026-09-28「表格都按这个来改」。
- **表格卡片整体样板**：[Monitor 表格卡片 `2182:941`](https://www.figma.com/design/pCdwCN68j1KGXz3aZZ6Wn0/Literacy-Studio-AI-Tutor?node-id=2182-941)。状态筛选用灰底分段轨道（`fill/neutral/subtle`、圆角 8、内边距 4）+ `Tabs / Trigger`，不用按钮胶囊；表头 48 高；每行固定 52 高，两行内容收小上下内边距（6 / 8）而不加高；单元格内容不得超出列宽（FILL）；空值 `--` / `—` 用 `text/tertiary`；Actions 单元格右对齐，Link 按钮 + ⋮ 图标按钮，Link 文字用 `text/brand/default`；剩余宽度由名字列（Student / Participants）吸收，Actions 固定宽度、按最长操作文字留够（修订上一条「Actions FILL」）。依据：用户指令 2026-09-29「section 里表格设计都参考这里」。

## 修改记录

- 2026-09-15 由 `project-scaffold` 脚手架创建（模板版，三库口径为 Kira 默认，待项目确认）。
- 2026-09-28 复用惯例补「数据表格」一条。
- 2026-09-29 复用惯例补「表格卡片整体样板」一条（`2182:941`）。
- 2026-11-12 业务组件回填 Components section 链接（`4427:1173`），登记 Student Detail 17 个母版（APAC-6130）。
