# Design System 2.0 组件清单

- Last updated: `2026-07-28`
- Figma 文件：[Design System 2.0 Components](https://www.figma.com/design/ABSA0Rzrd6rpDT9vuv6SO8/)（fileKey `ABSA0Rzrd6rpDT9vuv6SO8`）
- 底座：商业套件「Shadcn UI Kit for Figma」，Kira 在其上做定制并逐步转正
- Scope：shadcn 基础组件 50 个（§5–§12）+ Kira 定制组件 5 组（§3）
- 数据来源：2026-07-28 Figma MCP 全量扫描；变体计数为当日快照，文件更新后以 Figma 为准

## 1. 库状态分区与引用规则

文件页面按发布状态分三个分区（页面列表中的分隔条）：

| 分区 | 页面 | 引用规则 |
| --- | --- | --- |
| 🚀 READY TO SYNC | Assets、Avatar、Global Nav | 已定稿、准备发布，设计稿可直接引用 |
| 🚧 DESIGN WIP | Badge、Wizard | 设计中，只作方向参考，交付稿不引用实例 |
| 🧊 ICE BOX | Accordion ~ Tooltip 共 48 页 | shadcn 套件原装，可用；注意 §2 token 口径 |

组件状态字段含义（沿用原表）：

| Status | Meaning |
| --- | --- |
| Available | 提供可直接使用的基础组件 |
| Composite | 由多个基础组件或子组件组合而成 |
| Example | 只提供固定示例或模板 |
| Limited | 组件可用，但可配置能力有限 |
| Not provided | 当前没有独立组件 |

## 2. Token 体系与 Foundations 2.0 的关系

本文件的本地变量是 shadcn 套件原生三层结构，**不是** Foundations 2.0 的 `Semantic` collection：

| Collection | 变量数 | Modes |
| --- | ---: | --- |
| `1. TailwindCSS` | 448 | Default |
| `2. Theme` | 70 | Default |
| `3. Mode` | 42 | Light, Dark |

本地样式：effect styles 23 个（`shadow/sm`~`shadow/2xl`、`shadow/inner` 数值与 Foundations 一致，另有 `blur/*`、`backdrop-blur/*` 系列）；text style 仅 1 个文档标签（`.documentation/label`）；无本地 paint style。

混用口径（页面设计 vs 库组件实例）：

- 页面级设计（背景、文本、自绘元素、间距圆角）仍按 `design.md` 的 Foundations `Semantic` token 执行。
- 从本库拖出的组件实例内部绑定 TailwindCSS / Theme / Mode 变量，Light 模式下与 Foundations 视觉一致，不要求逐个重绑。
- 深浅色主题切换时两套体系要分别切 mode：Foundations 切 `Semantic` 的 Light/Dark，本库实例切 `3. Mode` 的 Light/Dark。

## 3. Kira 定制组件

### 3.1 Global Nav Item

| Field | Value |
| --- | --- |
| Library status | Ready to sync |
| Figma | 页面 [12368:713](https://www.figma.com/design/ABSA0Rzrd6rpDT9vuv6SO8/?node-id=12368-713)；Default 组件集 [12369:29198](https://www.figma.com/design/ABSA0Rzrd6rpDT9vuv6SO8/?node-id=12369-29198)；Compact 组件集 [12388:166](https://www.figma.com/design/ABSA0Rzrd6rpDT9vuv6SO8/?node-id=12388-166) |
| Purpose | Kira 全局导航项（深紫底导航），纯 Kira 自研 |
| Variant（Default 版） | default, expandable, nested |
| Decorative | icon, avatar |
| State | default, hover, selected |
| Props | `hasBadge?`（通知角标数）、`label`、`icon` |
| Compact 版 | 仅图标收起态；state: default, hover, selected；props: `icon`、`hasBadge?` |

### 3.2 Avatar（Kira 定制版）

| Field | Value |
| --- | --- |
| Library status | Ready to sync |
| Figma | 页面 [23:988](https://www.figma.com/design/ABSA0Rzrd6rpDT9vuv6SO8/?node-id=23-988)；组件集 [12383:371](https://www.figma.com/design/ABSA0Rzrd6rpDT9vuv6SO8/?node-id=12383-371) |
| Purpose | 展示用户或对象头像 |
| Variants | 44 个（变体属性 `avatar`）：插画头像 + 字母缩写 fallback（如 `MS`）+ Kira 吉祥物 |
| Size | 40 × 40 |
| Custom image | Not configurable（沿套件限制） |
| 勘误 | 2026-07-24 版记录「46 个固定头像、Fallback not provided」已过时，以本节为准 |

### 3.3 Assets（Kira Logo 与通用资产）

| Field | Value |
| --- | --- |
| Library status | Ready to sync |
| Figma | 页面 [43:396](https://www.figma.com/design/ABSA0Rzrd6rpDT9vuv6SO8/?node-id=43-396) |

| 组件 | 变体数 | 来源 |
| --- | ---: | --- |
| Kira Logo [12383:633](https://www.figma.com/design/ABSA0Rzrd6rpDT9vuv6SO8/?node-id=12383-633) | 6 | Kira 新增 |
| Social Media Icon | 138 | 套件原装 |
| Flag | 260 | 套件原装 |
| Cursor | 35 | 套件原装 |
| Emoji / Image Placeholder / Video Placeholder | — | 套件原装 |

页内隐藏私有资产（`.Payment Method Icon` 等）不收录，见 §13。

### 3.4 Badge（WIP）

| Field | Value |
| --- | --- |
| Library status | Design WIP |
| Figma | 页面 [12430:145](https://www.figma.com/design/ABSA0Rzrd6rpDT9vuv6SO8/?node-id=12430-145) |
| 现状 | 页面无本地组件，仅两个对照实例：`Badge / Connection Status`（来自已发布远程库，Connected 绿点状态徽章方向）与 ICE BOX shadcn Badge 实例 |
| 使用建议 | 交付稿仍用 §6.2 shadcn Badge；Connection Status 方向定稿后更新本节 |

### 3.5 Wizard（WIP）

| Field | Value |
| --- | --- |
| Library status | Design WIP |
| Figma | 页面 [12433:105](https://www.figma.com/design/ABSA0Rzrd6rpDT9vuv6SO8/?node-id=12433-105)；Step 组件集 [12433:137](https://www.figma.com/design/ABSA0Rzrd6rpDT9vuv6SO8/?node-id=12433-137)；Substep 组件集 [12433:154](https://www.figma.com/design/ABSA0Rzrd6rpDT9vuv6SO8/?node-id=12433-154) |
| Purpose | 向导 / 步骤条指示器 |
| Wizard Step Indicator | state: active, upcoming, completed, error；props: `stepText`、`stepNum` |
| Wizard Substep Indicator | state: active, upcoming, completed；props: `stepText` |
| 现状 | 页面描述文案仍为占位（"Description"），设计初期 |

## 4. 分类总览

⭐ = Kira 定制，详情见 §3；其余均为 shadcn 套件原装（ICE BOX）。

| Category | Components |
| --- | --- |
| Layout & Content | Accordion, Aspect Ratio, Card, Carousel, Separator, Skeleton |
| Feedback & Status | Alert, Badge, Progress, Sonner, Toast, Tooltip；⭐ Badge Connection Status（WIP） |
| Actions & Selection | Button, Checkbox, Radio Group, Slider, Switch, Toggle, Toggle Group |
| Forms & Input | Calendar, Combobox, Date Picker, Form, Input, Input OTP, Select, Textarea |
| Navigation & Menu | Breadcrumb, Command, Context Menu, Dropdown Menu, Menubar, Navigation Menu, Pagination, Sidebar, Tabs；⭐ Global Nav Item、⭐ Wizard（WIP） |
| Overlay | Alert Dialog, Dialog, Drawer, Hover Card, Popover, Sheet |
| Data & Media | ⭐ Avatar（Kira 定制版）, Chart, Data Table, Table |
| Assets | ⭐ Kira Logo, Social Media Icon, Flag, Cursor, Emoji, Placeholders |
| Not provided | Collapsible, Label, Resizable, Scroll Area |

## 5. Layout & Content

### 5.1 Accordion

| Field | Value |
| --- | --- |
| Status | Composite |
| Figma page | [1:434](https://www.figma.com/design/ABSA0Rzrd6rpDT9vuv6SO8/?node-id=1-434) |
| Purpose | 展开和收起分组内容 |
| Subcomponents | Accordion Item |
| Active | Off, On |
| State | Default, Hover |
| Content | Trigger text, Content text |
| Default structure | 3 个 Accordion Item |

### 5.2 Aspect Ratio

| Field | Value |
| --- | --- |
| Status | Available |
| Figma page | [21:535](https://www.figma.com/design/ABSA0Rzrd6rpDT9vuv6SO8/?node-id=21-535) |
| Purpose | 创建固定宽高比的内容容器 |
| Ratio | 1:1, 5:4, 4:3, 3:2, 16:10, 1.618:1, 16:9, 2:1, 21:9, A4, Letter |
| Portrait | No, Yes |
| 50% height | No, Yes |
| Limitation | 只包含预设比例 |

### 5.3 Card

| Field | Value |
| --- | --- |
| Status | Composite |
| Figma page | [46:65](https://www.figma.com/design/ABSA0Rzrd6rpDT9vuv6SO8/?node-id=46-65) |
| Purpose | 承载相关信息、表单或操作 |
| Subcomponents | Header, Footer, Notification, Content |
| Optional regions | Header, Content, Footer |
| Content examples | Form, Notifications |
| Footer | 1 Button, 2 Buttons |
| Custom content | Supported |

### 5.4 Carousel

| Field | Value |
| --- | --- |
| Status | Composite |
| Figma page | [46:66](https://www.figma.com/design/ABSA0Rzrd6rpDT9vuv6SO8/?node-id=46-66) |
| Purpose | 横向或纵向浏览一组内容 |
| Subcomponents | Carousel Item, Arrow Button |
| Orientation | Horizontal, Vertical |
| Arrow direction | Previous, Next |
| Arrow state | Default, Hover, Disabled |
| Responsive variants | Supported |
| Limitation | Vertical large variant 不可用 |

### 5.5 Separator

| Field | Value |
| --- | --- |
| Status | Available |
| Figma page | [118:2682](https://www.figma.com/design/ABSA0Rzrd6rpDT9vuv6SO8/?node-id=118-2682) |
| Purpose | 分隔内容区域 |
| Orientation | Horizontal, Vertical |

### 5.6 Skeleton

| Field | Value |
| --- | --- |
| Status | Available |
| Figma page | [64:243](https://www.figma.com/design/ABSA0Rzrd6rpDT9vuv6SO8/?node-id=64-243) |
| Purpose | 表达内容加载中的占位状态 |
| Variant | Default, Card, Text |

## 6. Feedback & Status

### 6.1 Alert

| Field | Value |
| --- | --- |
| Status | Available |
| Figma page | [21:322](https://www.figma.com/design/ABSA0Rzrd6rpDT9vuv6SO8/?node-id=21-322) |
| Purpose | 展示页面内提示、警告或错误信息 |
| Variant | Default, Destructive |
| Content | Title, Description, Icon |
| Limitation | Icon 不支持隐藏 |

### 6.2 Badge

| Field | Value |
| --- | --- |
| Status | Available |
| Figma page | [23:995](https://www.figma.com/design/ABSA0Rzrd6rpDT9vuv6SO8/?node-id=23-995) |
| Purpose | 表达标签、分类或短状态 |
| Variant | Default, Secondary, Outline, Destructive |
| State | Default, Hover, Focus |
| Content | Badge text |
| Optional content | Leading icon, Trailing icon |
| Limitation | Leading 和 Trailing icon 为固定图标 |

不可用组合：

```text
Secondary + Hover
Outline + Hover
```

Kira 定制方向（Connection Status 徽章）见 §3.4。

### 6.3 Progress

| Field | Value |
| --- | --- |
| Status | Limited |
| Figma page | [65:441](https://www.figma.com/design/ABSA0Rzrd6rpDT9vuv6SO8/?node-id=65-441) |
| Purpose | 表达任务或流程完成进度 |
| Percent | 0%, 25%, 50%, 75%, 100% |
| Limitation | 不支持其他百分比 |

### 6.4 Sonner

| Field | Value |
| --- | --- |
| Status | Composite |
| Figma page | [118:2756](https://www.figma.com/design/ABSA0Rzrd6rpDT9vuv6SO8/?node-id=118-2756) |
| Purpose | 展示带操作的临时通知 |
| Composition | Toast, Button, Icon |
| Top-level configuration | Not available |

### 6.5 Toast

| Field | Value |
| --- | --- |
| Status | Composite |
| Figma page | [132:2043](https://www.figma.com/design/ABSA0Rzrd6rpDT9vuv6SO8/?node-id=132-2043) |
| Purpose | 展示短时反馈或操作结果 |
| Destructive | No, Yes |
| State | Default, Hover |
| Content | Title, Description |
| Optional content | Title, Action button |
| Subcomponents | Close Button |

Close Button：

| Field | Value |
| --- | --- |
| State | Default, Hover |
| Destructive | No, Yes |

### 6.6 Tooltip

| Field | Value |
| --- | --- |
| Status | Limited |
| Figma page | [122:10](https://www.figma.com/design/ABSA0Rzrd6rpDT9vuv6SO8/?node-id=122-10) |
| Purpose | 为控件提供简短补充说明 |
| Content | Tooltip text |
| Placement | Not available |
| Arrow | Not available |
| Trigger | Not included |

## 7. Actions & Selection

### 7.1 Button

| Field | Value |
| --- | --- |
| Status | Available |
| Figma page | [34:6](https://www.figma.com/design/ABSA0Rzrd6rpDT9vuv6SO8/?node-id=34-6) |
| Purpose | 触发操作 |
| Variant | Default, Secondary, Destructive, Outline, Ghost, Link |
| State | Default, Hover, Loading, Disabled |
| Size | default, icon, sm, lg |
| Content | Button text |
| Optional content | Left icon, Right icon |

不可用组合：

```text
Size=icon + State=Loading
Variant=Link + Size=icon
```

### 7.2 Checkbox

| Field | Value |
| --- | --- |
| Status | Available |
| Figma page | [46:67](https://www.figma.com/design/ABSA0Rzrd6rpDT9vuv6SO8/?node-id=46-67) |
| Purpose | 从一组选项中选择零项或多项 |
| Status value | Active, Inactive |
| State | Default, Disabled |
| Optional content | Label, Description |

### 7.3 Radio Group

| Field | Value |
| --- | --- |
| Status | Composite |
| Figma page | [64:316](https://www.figma.com/design/ABSA0Rzrd6rpDT9vuv6SO8/?node-id=64-316) |
| Purpose | 从一组选项中选择一项 |
| Subcomponents | Radio Item |
| Active | Off, On |
| Font weight | Medium, Regular |
| Optional content | Text, Description |
| Default capacity | 6 个 Radio Item |
| Selection rule | 同一组最多一个 Active item |

### 7.4 Slider

| Field | Value |
| --- | --- |
| Status | Limited |
| Figma page | [61:169](https://www.figma.com/design/ABSA0Rzrd6rpDT9vuv6SO8/?node-id=61-169) |
| Purpose | 从连续范围中选择数值 |
| Value | Not configurable |
| Min / Max | Not configurable |
| State | Not configurable |

### 7.5 Switch

| Field | Value |
| --- | --- |
| Status | Available |
| Figma page | [60:438](https://www.figma.com/design/ABSA0Rzrd6rpDT9vuv6SO8/?node-id=60-438) |
| Purpose | 控制一个即时生效的开关设置 |
| Active | Off, On |
| Text placement | Right, Left |
| Optional content | Text, Description |
| Known limitation | 部分右侧文字组合的内容绑定不完整 |

### 7.6 Toggle

| Field | Value |
| --- | --- |
| Status | Available |
| Figma page | [132:1671](https://www.figma.com/design/ABSA0Rzrd6rpDT9vuv6SO8/?node-id=132-1671) |
| Purpose | 在按下和未按下状态之间切换 |
| Variant | Default, Outline |
| Size | Default, sm, lg |
| State | Default, Hover, Pressed, Disabled |
| Optional content | Text, Icon |
| Content rule | Text 和 Icon 不能同时隐藏 |

### 7.7 Toggle Group

| Field | Value |
| --- | --- |
| Status | Composite |
| Figma page | [123:75](https://www.figma.com/design/ABSA0Rzrd6rpDT9vuv6SO8/?node-id=123-75) |
| Purpose | 将多个 Toggle 组织为一组 |
| Capacity | 6 个 Toggle |
| Default visible items | 3 |
| Top-level configuration | Not available |

## 8. Forms & Input

### 8.1 Calendar

| Field | Value |
| --- | --- |
| Status | Composite |
| Figma page | [37:1900](https://www.figma.com/design/ABSA0Rzrd6rpDT9vuv6SO8/?node-id=37-1900) |
| Purpose | 浏览和选择日期 |
| Subcomponents | Day Header, Day Button, Arrow Button |
| Month content | Month text |
| Navigation | Previous, Next |
| Navigation state | Default, Hover, Disabled |

Day Button：

| Field | Value |
| --- | --- |
| Variant | Default, Current, Outside |
| State | Default, Hover, Pressed, Disabled, Selected |
| Content | Number text |
| Limitation | Current + Selected 不可用 |

### 8.2 Combobox

| Field | Value |
| --- | --- |
| Status | Composite |
| Figma page | [60:435](https://www.figma.com/design/ABSA0Rzrd6rpDT9vuv6SO8/?node-id=60-435) |
| Purpose | 在可搜索列表中选择选项 |
| State | Default, Hover, Disabled |
| Optional content | Label, Description |
| List content | Command |

### 8.3 Date Picker

| Field | Value |
| --- | --- |
| Status | Composite |
| Figma page | [244:2898](https://www.figma.com/design/ABSA0Rzrd6rpDT9vuv6SO8/?node-id=244-2898) |
| Purpose | 选择单个日期或日期范围 |
| Components | Date Picker, Range, Day Button, Preset |
| Trigger state | Default, Active, Disabled |
| Range size | md, sm |
| Day variant | Default, Outside, Active |
| Rounded | No, Left, Right |

不可用组合：

```text
Active + Rounded=No
Disabled + Active=Yes
```

### 8.4 Form

| Field | Value |
| --- | --- |
| Status | Example |
| Figma page | [60:290](https://www.figma.com/design/ABSA0Rzrd6rpDT9vuv6SO8/?node-id=60-290) |
| Purpose | 表单组合参考 |
| Examples | Form 1, Form 2, Form 3, Form 4, Form 5, Form 6, Form 7 |
| Responsive examples | Form 6, Form 7 |
| Included components | Input, Select, Textarea, Checkbox, Radio Group, Date Picker, Combobox, Switch, Button, Card |
| Limitation | 不提供通用 Form 基础组件 |

### 8.5 Input

| Field | Value |
| --- | --- |
| Status | Available |
| Figma page | [65:520](https://www.figma.com/design/ABSA0Rzrd6rpDT9vuv6SO8/?node-id=65-520) |
| Purpose | 输入单行文本或选择文件 |
| Components | Basic, With Button |
| Horizontal layout | No, Yes |
| Variant | Default, File |
| State | Default, Focus, Filled, Disabled, Error |
| Content | Label, Placeholder, Button text, Description, Link |
| Optional content | Label, Description, Icon, Link, Description icon |

### 8.6 Input OTP

| Field | Value |
| --- | --- |
| Status | Composite |
| Figma page | [76:89](https://www.figma.com/design/ABSA0Rzrd6rpDT9vuv6SO8/?node-id=76-89) |
| Purpose | 输入一次性验证码 |
| Variant | Pattern, Separator, Controlled |
| Slot state | Default, Focus, Filled |
| Optional content | Description |

### 8.7 Select

| Field | Value |
| --- | --- |
| Status | Composite |
| Figma page | [118:1264](https://www.figma.com/design/ABSA0Rzrd6rpDT9vuv6SO8/?node-id=118-1264) |
| Purpose | 从预定义列表中选择一项 |
| Components | Select, Menu, Item, Label |
| Trigger state | Default, Focus, Disabled |
| Trigger content | Label, Description, Placeholder |
| Item variant | Default, Checkbox |
| Item state | Default, Hover |
| Menu capacity | 7 个 items |
| Scroll indicators | Top, Bottom |

### 8.8 Textarea

| Field | Value |
| --- | --- |
| Status | Available |
| Figma page | [177:367](https://www.figma.com/design/ABSA0Rzrd6rpDT9vuv6SO8/?node-id=177-367) |
| Purpose | 输入多行文本 |
| State | Default, Focus, Filled, Disabled |
| Content | Label, Placeholder, Description |
| Optional content | Label, Description |

## 9. Navigation & Menu

Kira 定制的 Global Nav Item（⭐ Ready to sync）与 Wizard（⭐ WIP）见 §3.1、§3.5。

### 9.1 Breadcrumb

| Field | Value |
| --- | --- |
| Status | Composite |
| Figma page | [23:1004](https://www.figma.com/design/ABSA0Rzrd6rpDT9vuv6SO8/?node-id=23-1004) |
| Purpose | 展示当前页面在层级结构中的位置 |
| Size | md, sm |
| Item variant | Link, Dropdown, Ellipsis, Link Current |
| Item state | Default, Hover |
| Content | Breadcrumb text |
| Capacity | 6 个 items，5 个 separators |
| Limitation | Link Current + Hover 不可用 |

### 9.2 Command

| Field | Value |
| --- | --- |
| Status | Composite |
| Figma page | [60:436](https://www.figma.com/design/ABSA0Rzrd6rpDT9vuv6SO8/?node-id=60-436) |
| Purpose | 搜索、筛选并执行命令 |
| Components | Command, Input, Item, Heading, Separator |
| Variant | Suggestions, Empty |
| Item properties | Level, Variant, State, Selected |
| Capacity | 9 个 items |
| Limitation | 只提供 14 个有效 item combinations |

### 9.3 Context Menu

| Field | Value |
| --- | --- |
| Status | Composite |
| Figma page | [60:437](https://www.figma.com/design/ABSA0Rzrd6rpDT9vuv6SO8/?node-id=60-437) |
| Purpose | 展示与当前对象或位置相关的操作 |
| Components | Context Menu, Item, SubTrigger, Title, Separator |
| Capacity | 10 个 items |
| Level 1 | Default item |
| Level 2 | Default, Checkbox, Radio |
| Submenu | Supported |

### 9.4 Dropdown Menu

| Field | Value |
| --- | --- |
| Status | Composite |
| Figma page | [89:189](https://www.figma.com/design/ABSA0Rzrd6rpDT9vuv6SO8/?node-id=89-189) |
| Purpose | 从触发控件展开操作菜单 |
| Components | Menu, Item, SubTrigger, Label, Separator |
| Item variant | Default, Checkbox, Radio |
| Item state | Default, Hover, Disabled |
| Item content | Text, Shortcut, Icon |
| Capacity | 10 个 items |
| Open state | Supported |

### 9.5 Menubar

| Field | Value |
| --- | --- |
| Status | Composite |
| Figma page | [210:2486](https://www.figma.com/design/ABSA0Rzrd6rpDT9vuv6SO8/?node-id=210-2486) |
| Purpose | 组织一组顶层菜单 |
| Components | Trigger, Menu, Item, SubTrigger, Separator |
| Item level | 1, 2 |
| Item variant | Default, Checkbox, Radio |
| Item state | Default, Hover, Disabled |
| Trigger placement | Default, Bottom, Top |
| Capacity | 10 个 items |
| Limitation | 只提供 12 个有效 item combinations |

### 9.6 Navigation Menu

| Field | Value |
| --- | --- |
| Status | Composite |
| Figma page | [209:1883](https://www.figma.com/design/ABSA0Rzrd6rpDT9vuv6SO8/?node-id=209-1883) |
| Purpose | 网站级导航和多列导航内容 |
| Components | Navigation Menu, Item, Content, List Item |
| Item variant | Trigger, Link |
| Active | On, Off |
| Content variant | Image, Text |
| Content size | lg, md |
| Custom content | Supported |

### 9.7 Pagination

| Field | Value |
| --- | --- |
| Status | Composite |
| Figma page | [65:516](https://www.figma.com/design/ABSA0Rzrd6rpDT9vuv6SO8/?node-id=65-516) |
| Purpose | 在分页内容之间切换 |
| Item variant | Previous, Next, Link, Ellipsis |
| Item state | Default, Disabled, Hover, Active, Active Hover |
| Content | Page number |
| Limitation | Active 只适用于 Link |

### 9.8 Sidebar

| Field | Value |
| --- | --- |
| Status | Composite |
| Figma page | [3212:19592](https://www.figma.com/design/ABSA0Rzrd6rpDT9vuv6SO8/?node-id=3212-19592) |
| Purpose | 提供应用级主导航和分组入口 |
| Core components | Menu Button, Menu Item, Menu Sub, Menu Sub Item, Group, Group Label, Group Action |
| Menu button type | Simple, Collapsible, Dropdown, Tree, Badge, Big Icon, Checkbox |
| State | Default, Hover, Active, Focused |
| Collapsed | False, True |
| Optional content | Text, Subtitle, Badge, Icon, Media |
| Responsive variants | Desktop, Mobile |

推荐层级：

```text
Group
└── Menu Item
    └── Menu Button
        └── Menu Sub
            └── Menu Sub Item
```

### 9.9 Tabs

| Field | Value |
| --- | --- |
| Status | Composite |
| Figma page | [183:417](https://www.figma.com/design/ABSA0Rzrd6rpDT9vuv6SO8/?node-id=183-417) |
| Purpose | 在同一内容区域切换不同视图 |
| Components | Tabs, Trigger |
| Active | On, Off |
| Trigger content | Text, Icon |
| Capacity | 8 个 triggers |
| Fixed triggers | 前 2 个 |
| Selection rule | 同时只能有一个 Active trigger |

## 10. Overlay

### 10.1 Alert Dialog

| Field | Value |
| --- | --- |
| Status | Composite |
| Figma page | [22:307](https://www.figma.com/design/ABSA0Rzrd6rpDT9vuv6SO8/?node-id=22-307) |
| Purpose | 要求用户确认的重要阻断式操作 |
| Size | sm, md |
| Content | Title, Description |
| Footer | sm 为纵向，md 为横向 |
| Actions | Nested buttons |

### 10.2 Dialog

| Field | Value |
| --- | --- |
| Status | Composite |
| Figma page | [112:477](https://www.figma.com/design/ABSA0Rzrd6rpDT9vuv6SO8/?node-id=112-477) |
| Purpose | 在当前页面上方完成聚焦任务 |
| Size | sm, lg |
| Content | Heading, Description, Custom content |
| Close button state | Default, Hover |

### 10.3 Drawer

| Field | Value |
| --- | --- |
| Status | Composite |
| Figma page | [112:454](https://www.figma.com/design/ABSA0Rzrd6rpDT9vuv6SO8/?node-id=112-454) |
| Purpose | 从页面边缘或底部展示补充任务 |
| Size | sm, md |
| Content | Title, Description, Custom content |
| Optional regions | Header, Footer |

### 10.4 Hover Card

| Field | Value |
| --- | --- |
| Status | Composite |
| Figma page | [216:2886](https://www.figma.com/design/ABSA0Rzrd6rpDT9vuv6SO8/?node-id=216-2886) |
| Purpose | 悬浮预览链接或对象的补充信息 |
| Trigger state | Default, Hover, Disabled |
| Active | No, Yes |
| Custom content | Supported |

### 10.5 Popover

| Field | Value |
| --- | --- |
| Status | Limited |
| Figma page | [193:1388](https://www.figma.com/design/ABSA0Rzrd6rpDT9vuv6SO8/?node-id=193-1388) |
| Purpose | 在触发控件附近展示补充内容或操作 |
| Custom content | Supported |
| Trigger | Not included |

### 10.6 Sheet

| Field | Value |
| --- | --- |
| Status | Composite |
| Figma page | [216:3314](https://www.figma.com/design/ABSA0Rzrd6rpDT9vuv6SO8/?node-id=216-3314) |
| Purpose | 从屏幕边缘展示较长的补充内容 |
| Size | sm, md |
| Position | left, right, top, bottom |
| Content | Title, Description, Custom content |
| Close button state | Default, Hover |

## 11. Data & Media

### 11.1 Avatar

已由 Kira 定制并迁至 🚀 READY TO SYNC 分区，详见 §3.2（旧版「46 个固定头像、无 Fallback」记录作废）。

### 11.2 Chart

| Field | Value |
| --- | --- |
| Status | Composite |
| Figma page | [449:6176](https://www.figma.com/design/ABSA0Rzrd6rpDT9vuv6SO8/?node-id=449-6176) |
| Purpose | 可视化数值、趋势和占比 |
| Chart types | Bar, Area, Line, Pie, Donut, Radar, Radial |
| Supporting elements | Grid, Dot, Legend, Tooltip, Label |

已知限制：

```text
Bar Rectangle 不支持 Negative + Active
Dot 不支持 Custom + Size 12
```

### 11.3 Data Table

| Field | Value |
| --- | --- |
| Status | Composite |
| Figma page | [244:2897](https://www.figma.com/design/ABSA0Rzrd6rpDT9vuv6SO8/?node-id=244-2897) |
| Purpose | 展示带筛选、选择和操作的数据集合 |
| Components | Data Table, Table Cell, Table Head |
| Cell variant | Checkbox, Action |
| Cell state | Default, Hover |
| Head variant | Checkbox, Action, Button |
| Head state | Default, Hover |
| Top-level configuration | Limited |

### 11.4 Table

| Field | Value |
| --- | --- |
| Status | Composite |
| Figma page | [184:890](https://www.figma.com/design/ABSA0Rzrd6rpDT9vuv6SO8/?node-id=184-890) |
| Purpose | 展示结构化行列数据 |
| Components | Table, Head, Cell |
| Size | default, md, lg |
| Columns | 1–6 columns, Optional last column |
| Optional regions | Caption, Footer |
| Head state | Default, Hover |
| Cell state | Default, Hover |
| Alignment | Left, Right |

Cell content：

```text
Default
Badge
Avatar
Switch
Button
Dropdown
Progress
Image
Input
Toggle Group
```

Limitation: 当前只提供 144 个有效 Cell combinations。

## 12. Not Provided

以下四个组件在文件中有独立页面，但页面内**只有说明性展示帧、没有任何组件**（2026-07-28 逐页核实），口径维持 Not provided。

### 12.1 Collapsible

| Field | Value |
| --- | --- |
| Status | Not provided |
| Figma page | [60:434](https://www.figma.com/design/ABSA0Rzrd6rpDT9vuv6SO8/?node-id=60-434)（仅展示帧） |
| Purpose | 展开和收起单个内容区域 |
| Alternative | Accordion Item 可覆盖部分相近场景 |

### 12.2 Label

| Field | Value |
| --- | --- |
| Status | Not provided |
| Figma page | [65:517](https://www.figma.com/design/ABSA0Rzrd6rpDT9vuv6SO8/?node-id=65-517)（仅展示帧） |
| Purpose | 描述表单控件 |
| Existing support | Input、Textarea、Select 等组件内置 Label |

### 12.3 Resizable

| Field | Value |
| --- | --- |
| Status | Not provided |
| Figma page | [296:243](https://www.figma.com/design/ABSA0Rzrd6rpDT9vuv6SO8/?node-id=296-243)（仅展示帧） |
| Purpose | 调整相邻面板或内容区域尺寸 |
| Implementation | 由产品实现层处理 |

### 12.4 Scroll Area

| Field | Value |
| --- | --- |
| Status | Not provided |
| Figma page | [296:207](https://www.figma.com/design/ABSA0Rzrd6rpDT9vuv6SO8/?node-id=296-207)（仅展示帧） |
| Purpose | 在固定区域内滚动内容 |
| Implementation | 由产品实现层处理 |

## 13. 不收录范围

以下内容存在于文件中但不收录进本清单（2026-07-28 用户确认口径）：

| 范围 | 内容 | 不收录原因 |
| --- | --- | --- |
| Documentation 页 | 套件使用文档、Theme Preview | 套件自带说明，非组件 |
| Blocks (Official) | 套件官方模板区 | 营销/示例模板，与 Kira 产品设计无关 |
| Pro Blocks (Application) / Pro Blocks (Landing Page) | 套件付费模板区 | 同上 |
| Utility Components 页 | `_Docs Header`、`_Chart / Card`、`Slot`、`Ring`、`_LP / Icon`、`ShadcnDesign Logo`、`.Frame header` | 套件内部工具组件 |
| Assets 页隐藏资产 | `.Payment Method Icon`（42）、`.Crypto Icon`（463）、`.Store Badge`（18） | 点前缀私有组件，非 Kira 业务场景 |

## 14. 已知命名问题

以下名称来自当前组件库，后续版本可能修正：

| Component | Current name | Expected name |
| --- | --- | --- |
| Input OTP Slot | `InplutOTP` | `InputOTP` |
| Toast Close Button | `Distructive` | `Destructive` |
| Table Column | `Show 4rd Column` | `Show 4th Column` |
| Dropdown Menu | `Show Item 11` | `Show Item 10` |
| Button Size | `default` | `Default` |

## 15. 完整清单

Kira 定制（§3）：

- [x] Global Nav Item ⭐
- [x] Avatar（Kira 定制版）⭐
- [x] Kira Logo ⭐
- [ ] Badge / Connection Status（WIP）
- [ ] Wizard Step / Substep Indicator（WIP）

shadcn 默认（ICE BOX）：

- [x] Accordion
- [x] Alert
- [x] Alert Dialog
- [x] Aspect Ratio
- [x] Badge
- [x] Breadcrumb
- [x] Button
- [x] Calendar
- [x] Card
- [x] Carousel
- [x] Chart
- [x] Checkbox
- [ ] Collapsible
- [x] Combobox
- [x] Command
- [x] Context Menu
- [x] Data Table
- [x] Date Picker
- [x] Dialog
- [x] Drawer
- [x] Dropdown Menu
- [x] Form examples
- [x] Hover Card
- [x] Input
- [x] Input OTP
- [ ] Label
- [x] Menubar
- [x] Navigation Menu
- [x] Pagination
- [x] Popover
- [x] Progress
- [x] Radio Group
- [ ] Resizable
- [ ] Scroll Area
- [x] Select
- [x] Separator
- [x] Sheet
- [x] Sidebar
- [x] Skeleton
- [x] Slider
- [x] Sonner
- [x] Switch
- [x] Table
- [x] Tabs
- [x] Textarea
- [x] Toast
- [x] Toggle
- [x] Toggle Group
- [x] Tooltip
