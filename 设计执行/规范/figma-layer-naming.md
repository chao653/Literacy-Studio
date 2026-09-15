# Figma 图层命名规范

本文档用于规范 Kira 设计系统与业务设计稿中的 Figma 页面、Frame、组件、变体、实例、图层命名。目标是让设计师、研发、Agent 都能稳定理解图层结构，并减少前端还原、设计审查、组件沉淀时的歧义。

## 1. 核心原则

图层命名要描述“结构和意图”，不要描述“长相”。

| 推荐 | 不推荐 |
| --- | --- |
| `Header` | `Frame 129` |
| `Primary Button` | `Blue Button` |
| `Actions` | `Group 4` |
| `Error Message` | `Red Text` |
| `Card / Assignment` | `Rectangle 12` |

必须避免 Figma 默认名称长期留在交付稿中：

```text
Frame 1
Group 2
Rectangle 8
Vector 14
Text
Line
```

如果图层会被研发、Agent、设计 QA、组件库复用或自动化读取，就必须命名。纯装饰性且不会被单独引用的内部 vector 可以保留较低语义，但外层容器必须命名清楚。

## 2. 语言规则

默认使用英文命名。原因是英文更适合和代码组件、token、自动化脚本、Code Connect、Agent 检索对齐。

允许中文出现的场景：

- 页面说明性文档。
- 临时探索稿。
- 展示给业务方看的标题或批注。

不建议中文出现的场景：

- 组件名。
- Variant property。
- 可复用 Frame。
- 交付给研发的关键图层。
- 需要 Agent 读取的图层。

emoji 只允许用于页面导航或大区分隔，例如：

```text
🎨 Color
✏️ Typography
📐 Spacing & Radius
```

组件、变体、关键 Frame、token、图层名称不要使用 emoji。

## 3. 命名格式

### 3.1 基础格式

使用 Title Case 或 slash path。

| 类型 | 格式 | 示例 |
| --- | --- | --- |
| 页面 | `Emoji + Title` 或 `Title` | `🎨 Color`, `Components` |
| Section | `Domain / Area` | `Foundations / Color` |
| 页面级 Frame | `Screen / Breakpoint` | `Assignment Detail / Desktop` |
| 普通 Frame | `Semantic Name` | `Header`, `Content`, `Actions` |
| 组件 | `Component Name` 或 `Domain / Component` | `Button`, `Forms / Input` |
| 组件实例 | `Component Name` 或业务语义 | `Primary Button`, `Submit Assignment` |
| 图标实例 | `Icon / Name` 或语义名 | `Icon / Search`, `Activity Icon` |

### 3.2 大小写

| 场景 | 规则 | 示例 |
| --- | --- | --- |
| 页面、Frame、组件 | Title Case | `Assignment Card` |
| token path | lowercase slash path | `text/primary` |
| 组件变体属性值 | Title Case 或简短枚举 | `State=Default`, `Size=Sm` |
| 前端映射名 | PascalCase | `AssignmentCard` |

不要混用：

```text
assignment_card
assignment-card
assignment Card
assignment/card/Button
```

除非该名称来自 token、代码或既有组件规范。

## 4. 页面命名

页面用于承载稳定内容，不要把大量无关探索都堆在一个页面。

推荐页面类型：

| 页面类型 | 命名示例 | 用途 |
| --- | --- | --- |
| Foundation | `🎨 Color` | 基础规范 |
| Component | `Components / Forms` | 组件库 |
| Flow | `Flow / Grading` | 产品流程 |
| Spec | `Spec / Assignment Detail` | 交付研发 |
| Exploration | `Exploration / AI Feedback` | 探索稿 |
| Archive | `Archive / 2026-07` | 历史内容 |

页面命名规则：

- 页面名必须能说明内容范围。
- 交付页面不要叫 `Draft`、`New Page`、`Untitled`。
- Archive 页面必须带日期或版本。
- 多端设计应在页面或 Frame 中标明 breakpoint。

## 5. Frame 命名

Frame 是结构层级的核心。命名应表达布局关系或业务语义。

### 5.1 页面级 Frame

页面级 Frame 推荐格式：

```text
{Screen Name} / {Breakpoint}
```

示例：

```text
Assignment Detail / Desktop
Assignment Detail / Tablet
Assignment Detail / Mobile
Rubric Builder / Desktop
```

如果是状态稿（**2026-07-27 用户确认：同页面不同状态用 `-` 连接**，`/` 保留给 breakpoint 与类型前缀）：

```text
Assignment Detail - Empty
Assignment Detail - Loading
Assignment Detail - Error
Assignment Detail - Success
```

如果同时存在 breakpoint 和状态：

```text
Assignment Detail / Desktop - Empty
Assignment Detail / Mobile - Error
```

### 5.2 结构 Frame

结构 Frame 使用语义名：

```text
Header
Sidebar
Content
Main
Footer
Toolbar
Actions
Filters
Form
Field Group
List
List Item
Card Grid
```

不要使用视觉名：

```text
Top Blue Bar
Left Grey Area
Big White Box
```

### 5.3 Auto layout Frame

Auto layout Frame 必须用结构语义命名，不要叫 `Auto Layout` 或 `Frame`。

推荐：

```text
Header Row
Button Group
Field Stack
Metadata Row
Card Content
Navigation List
```

如果 Frame 只是为了实现布局，不暴露业务语义，也要表达布局角色：

```text
Content Stack
Action Row
Icon Label Row
```

## 6. Group 命名

优先使用 Frame 和 Auto layout，少用 Group。Group 仅用于临时打包或不可布局的视觉组合。

如果必须使用 Group，命名规则同 Frame：

```text
Illustration Group
Badge Artwork
Chart Decoration
```

不要保留：

```text
Group 1
Group 2
Group 42
```

## 7. 组件命名

组件命名必须稳定、可检索、可映射到代码。

### 7.1 基础组件

推荐：

```text
Button
Input
Select
Checkbox
Badge
Tooltip
Modal
Tabs
Table
```

如果组件属于明确域，可以使用 slash path：

```text
Forms / Input
Forms / Select
Actions / Button
Navigation / Sidebar Item
Data Display / Table
```

### 7.2 业务组件

业务组件应包含业务对象：

```text
Assignment Card
Rubric Row
Grade Summary
Activity Option
Feedback Panel
Student Submission
```

不要使用抽象但无法定位的名称：

```text
Card 1
Item Component
Content Block
New Component
```

### 7.3 私有或实验组件

未准备发布的组件必须标明状态：

```text
WIP / Feedback Card
Experiment / Rubric Density
Deprecated / Old Activity Card
```

不要把临时组件命名得像正式组件。

## 8. Variant 命名

Variant 应使用 Figma component properties，而不是把所有状态塞进组件名称。

推荐属性：

```text
Variant
Size
State
Theme
Selected
Disabled
Icon
Orientation
Density
```

推荐值：

```text
Variant=Primary
Variant=Secondary
Size=Sm
Size=Md
Size=Lg
State=Default
State=Hover
State=Pressed
State=Focus
State=Disabled
Selected=True
Icon=Leading
Icon=None
```

不要这样命名 variant：

```text
Button Primary Small Hover Disabled With Icon
Button 1
Button Copy 3
```

组件 set 内的 variant 名称应由属性自动组成，例如：

```text
Variant=Primary, Size=Md, State=Default, Icon=Leading
```

## 9. 实例命名

组件实例可以保留组件名，也可以改成业务语义名。原则是：研发和 Agent 读到实例名时，能知道这个实例在页面里承担什么角色。

推荐：

```text
Primary Button
Submit Assignment
Cancel Button
Search Input
Status Badge
Activity Icon
```

如果一个页面中出现多个同类实例，使用业务语义区分：

```text
Save Button
Publish Button
Delete Button
Student Search Input
Class Filter Select
```

不要使用：

```text
Button
Button
Button
Instance 12
```

除非实例所在的父级已经能清楚表达语义。

## 10. 文本图层命名

文本图层命名应表达内容角色，而不是实际文案。

推荐：

```text
Title
Subtitle
Description
Body
Label
Helper Text
Error Message
Empty State Message
Timestamp
Student Name
Assignment Title
```

不推荐：

```text
Click here to continue
The quick brown fox jumps over the lazy dog
This assignment is overdue
```

例外：文档展示页中用于展示文本样式的样本文字，可以保留样本文案。

## 11. 图标图层命名

图标必须配合 `icons.md` 使用。

图标图层推荐命名：

```text
Icon / Search
Icon / Close
Icon / Chevron Down
Icon / Activity
Activity Icon
Status Icon
```

业务图标必须使用业务语义：

```text
Read Aloud Icon
MCQ Icon
Free Response Icon
```

不要使用：

```text
Vector
Star
Shape
Icon Copy
```

如果图标来自组件库，应保留或体现原始图标名，便于研发映射到前端 icon component。

## 12. 状态命名

状态必须显式命名，不要用颜色或位置暗示。

推荐状态：

```text
Default
Hover
Pressed
Focus
Disabled
Loading
Empty
Error
Success
Warning
Selected
Expanded
Collapsed
```

页面状态示例（状态用 `-` 连接，见 §5.1）：

```text
Rubric Builder - Loading
Rubric Builder - Empty
Rubric Builder - Error
Rubric Builder - Success
```

组件状态示例：

```text
State=Default
State=Hover
State=Disabled
State=Error
```

## 13. 装饰图层命名

装饰图层可以使用较轻量的命名，但必须能判断是否可删除、是否参与结构。

推荐：

```text
Background
Scrim
Divider
Border
Focus Ring
Decoration
Illustration
Chart Grid
```

不要用：

```text
Rectangle 1
Ellipse 5
Line 7
```

对于不可见或辅助图层，使用明确前缀：

```text
_Measure
_Guide
_Annotation
_Deprecated
```

## 14. 隐藏、废弃和临时图层

隐藏图层必须说明用途。不要把大量无名隐藏图层留在交付页面。

推荐：

```text
_Hidden / Previous Copy
_Deprecated / Old Header
_Reference / Competitor Layout
_Annotation / Dev Note
```

交付前应删除：

```text
Copy
Copy 2
Rectangle 99
Untitled
Random Test
```

如果需要保留历史方案，移动到 Archive 页面。

## 15. Agent 命名规则

Agent 在 Figma 中创建或修改设计时，必须遵守：

1. 创建任何页面级 Frame 时，使用 `{Screen Name} / {Breakpoint}`。
2. 创建结构容器时，使用语义名称，例如 `Header`、`Content`、`Actions`。
3. 创建组件时，使用稳定英文名称，不使用中文、emoji、默认名称。
4. 创建 variant 时，使用 property-based naming。
5. 创建图标时，读取 `icons.md`，使用图标组件，不手绘。
6. 不保留 `Frame 1`、`Group 2`、`Rectangle 3`、`Vector 4` 这类默认名称。
7. 如果无法判断图层语义，先使用父级语义加角色名，例如 `Rubric Header`, `Rubric Actions`。

## 16. 命名前后示例

| Before | After |
| --- | --- |
| `Frame 1` | `Assignment Detail / Desktop` |
| `Frame 42` | `Header` |
| `Group 3` | `Action Row` |
| `Rectangle 8` | `Card Background` |
| `Text` | `Assignment Title` |
| `Vector` | `Icon / Search` |
| `Button Copy 4` | `Submit Assignment` |
| `Component 12` | `Assignment Card` |
| `Variant2` | `State=Hover` |

## 17. 交付检查清单

交付给研发、Agent 或设计评审前，检查：

- 页面名是否清楚。
- 页面级 Frame 是否标明 screen 和 breakpoint。
- 所有关键结构 Frame 是否已命名。
- 是否清理了 `Frame 1`、`Group 2`、`Rectangle 3` 等默认名称。
- 组件名称是否稳定、英文、可映射代码。
- Variant 是否使用 property-based naming。
- 图标是否按 `icons.md` 命名和引用。
- 文本图层是否表达内容角色，而不是随意保留文案或 `Text`。
- 隐藏图层是否有明确原因。
- 临时探索内容是否移入 Archive 或 Exploration。

## 18. AGENTS.md 接入建议

建议在 `AGENTS.md` 中加入：

```md
When creating or editing Figma files, follow figma-layer-naming.md.

Do not leave default Figma layer names such as Frame 1, Group 2, Rectangle 3, Vector 4, or Text on any deliverable design.

Use semantic English names for pages, frames, components, variants, and important layers. Use property-based naming for component variants.

When icons are involved, also read icons.md and use icon components instead of hand-drawn vectors.
```
