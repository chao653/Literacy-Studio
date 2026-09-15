# Kira Design System 2.0 Agent 使用规范

本文档用于指导同事在使用 Agent 进行产品设计、Figma 生成、前端还原、视觉 QA 时如何使用 Kira Design System 2.0。所有设计与实现应优先遵循本文档和 Figma 文件中的变量、样式、组件，不要凭常识另起一套视觉规范。

Figma 源文件：[Foundations 2.0](https://www.figma.com/design/28D7W2zcmVWpuyvmW7IwfI/Foundations-2.0?node-id=3-155&t=Bt8Lhm1zgas6DKWo-1)

## 1. 优先级

当设计稿、本文档、代码实现、Agent 默认审美发生冲突时，按以下顺序处理：

1. 明确指定的 Figma 节点或页面。
2. Figma 文件中的变量、文本样式、颜色样式、阴影样式。
3. 本文档中的 token 使用规则和数值表。
4. 现有代码库中已经落地的 token 映射与组件实现。
5. Agent 的通用 UI 经验。

禁止为了“看起来更好”擅自替换品牌色、字号、圆角、阴影、断点、间距。确实需要新增样式时，必须说明原因，并优先新增为 token 或组件变体，而不是一次性硬编码。

## 2. Agent 工作流

设计或还原前，Agent 必须先识别任务类型：

| 任务类型 | 必做动作 |
| --- | --- |
| 根据 Figma 还原前端 | 先读取目标 Figma 节点，再抽取该节点使用的变量、文本样式、组件和截图 |
| 在 Figma 中继续设计 | 先复用现有变量、文本样式、阴影样式、组件实例 |
| 从零生成页面 | 先使用本文档定义 token，再按业务场景选择语义色和 typography scale |
| 修改已有前端 | 先查现有 token 映射；若没有映射，再按本文档建立 token 层 |
| 视觉 QA | 对照 Figma 截图检查颜色、字号、行高、间距、圆角、阴影、断点行为 |

还原时不要只看截图像素。截图用于校验结果，真正的样式来源应是 Figma 变量、样式和组件。

## 3. Figma 文件地图

| 页面 | 内容 | 用途 |
| --- | --- | --- |
| `🎨 Color` | Primitive colors、Semantic colors、色板组件 | 查颜色 token 与语义色分类 |
| `✏️ Typography` | 文本样式、Typography responsive variables、使用指南、Desktop/Tablet/Mobile demo | 查字号、行高、字重和响应式字体行为 |
| `📐 Spacing & Radius` | Spacing、Radius、使用指南、Spacing modes demo | 查间距、圆角、响应式 spacing |
| `🌲 Shadows & Gradients` | Shadow styles、Gradient styles | 查阴影和渐变 style 名称 |
| `📱Breakpoints` | 断点标尺 | 查响应式断点 |

## 4. Token 使用原则

### 4.1 使用语义 token，不直接使用 primitive

实际 UI 中优先使用 `Semantic` collection：

- 文本：`text/*`
- 图标：`icon/*`
- 背景与状态填充：`fill/*`
- 描边：`border/*`
- 页面和层级背景：`surface/*`
- 分隔线：`separator/*`
- 表单基础 token：`input/*`
- focus ring：`focus/*`
- badge spacing：`badge/*`

`Primitives` 只用于定义和维护语义 token，或在确实没有语义 token 覆盖的新场景中作为临时依据。产品 UI 不应直接写 `purple/600`、`neutral/900`、`brand/periwinkle/600` 这类 primitive。

### 4.2 Mode 规则

`Semantic` 有 4 个模式：

| Mode | 用途 |
| --- | --- |
| `Light` | 默认浅色模式 |
| `Brand (New)` | 新品牌浅色模式 |
| `Dark` | 默认深色模式 |
| `Brand Dark (New)` | 新品牌深色模式 |

如果任务没有明确指定主题，默认使用 `Light`。涉及 Kira 新品牌视觉时，优先使用 `Brand (New)` 或 `Brand Dark (New)`。

前端实现时应保留 mode 概念，至少支持将语义 token 映射到 light / dark 两组 CSS variables。不要把 mode 后的解析值写死到组件里。

## 5. Color

### 5.1 Semantic token 分组

| 分组 | token |
| --- | --- |
| `surface` | `surface/layer/primary`, `surface/layer/secondary`, `surface/layer/tertiary`, `surface/layer/scrim` |
| `text` | `text/primary`, `text/secondary`, `text/tertiary`, `text/disabled`, `text/placeholder`, `text/invert`, `text/brand/default`, `text/brand/hover`, `text/brand/active`, `text/link/default`, `text/link/hover`, `text/link/active`, `text/positive`, `text/negative`, `text/warning`, `text/informative`, `text/on-brand`, `text/on-positive`, `text/on-negative`, `text/on-warning`, `text/on-informative` |
| `icon` | `icon/primary`, `icon/secondary`, `icon/tertiary`, `icon/disabled`, `icon/invert`, `icon/brand`, `icon/positive`, `icon/negative`, `icon/warning`, `icon/informative` |
| `fill` | `fill/brand/primary/*`, `fill/brand/secondary/*`, `fill/positive/*`, `fill/negative/*`, `fill/warning/*`, `fill/informative/*`, `fill/neutral/*`, `fill/selected/*`, `fill/disabled/*`, `fill/overlay/*` |
| `border` | `border/primary`, `border/secondary`, `border/tertiary`, `border/hover`, `border/active`, `border/disabled`, `border/focus`, `border/brand`, `border/brand/hover`, `border/brand/active`, `border/positive`, `border/negative`, `border/warning`, `border/informative`, `border/error` |
| `input` | `input/text`, `input/border/default`, `input/border/hover`, `input/border/width`, `input/gap/horizontal`, `input/padding/horizontal`, `input/padding/vertical` |
| `focus` | `focus/ring/width`, `focus/ring/offset` |
| `separator` | `separator/primary` |
| `badge` | `badge/gap`, `badge/padding/horizontal`, `badge/padding/vertical` |

### 5.2 常用语义选择

| 场景 | 应使用 |
| --- | --- |
| 页面背景 | `surface/layer/primary` |
| 次级背景、卡片区域 | `surface/layer/secondary` 或 `surface/layer/tertiary` |
| 主文本 | `text/primary` |
| 辅助文本 | `text/secondary` |
| 弱提示文本 | `text/tertiary` 或 `text/placeholder` |
| 禁用文本 | `text/disabled` |
| 主品牌按钮背景 | `fill/brand/primary/default` |
| 主品牌按钮 hover | `fill/brand/primary/hover` |
| 主品牌按钮 active | `fill/brand/primary/active` |
| 成功状态 | `fill/positive/*`, `text/positive`, `icon/positive`, `border/positive` |
| 错误或危险状态 | `fill/negative/*`, `text/negative`, `icon/negative`, `border/negative` |
| 警告状态 | `fill/warning/*`, `text/warning`, `icon/warning`, `border/warning` |
| 信息状态 | `fill/informative/*`, `text/informative`, `icon/informative`, `border/informative` |
| focus ring | `border/focus` + `focus/ring/width` + `focus/ring/offset` |

### 5.3 品牌 primitive 快查

品牌 primitive 主要用于维护语义 token，不建议组件直接引用。

| Token | Value |
| --- | --- |
| `brand/periwinkle/50` | `#F5F3FF` |
| `brand/periwinkle/100` | `#EDE8FF` |
| `brand/periwinkle/200` | `#DDD5FF` |
| `brand/periwinkle/300` | `#AC99FF` |
| `brand/periwinkle/400` | `#9780FF` |
| `brand/periwinkle/500` | `#775CFF` |
| `brand/periwinkle/600` | `#6244F5` |
| `brand/periwinkle/700` | `#4F33D4` |
| `brand/periwinkle/800` | `#3D27A8` |
| `brand/periwinkle/900` | `#391B7E` |
| `brand/periwinkle/950` | `#1F0F4A` |
| `brand/cyan/light` | `#96F6FF` |
| `brand/cyan/medium` | `#33DDFF` |
| `brand/cyan/default` | `#00AEF8` |
| `brand/cyan/dark` | `#004766` |
| `brand/pink/light` | `#FFCCFF` |
| `brand/pink/medium` | `#FFB2FF` |
| `brand/pink/default` | `#FF93E6` |
| `brand/pink/dark` | `#660059` |
| `brand/yellow/light` | `#FDFF85` |
| `brand/yellow/medium` | `#FFF01A` |
| `brand/yellow/default` | `#FFDD0A` |
| `brand/yellow/dark` | `#5A5C00` |
| `brand/green/light` | `#56EAAF` |
| `brand/green/medium` | `#19D188` |
| `brand/green/default` | `#12AF6E` |
| `brand/green/dark` | `#115544` |
| `brand/orange/light` | `#FBB079` |
| `brand/orange/medium` | `#F98A39` |
| `brand/orange/default` | `#FF6A00` |
| `brand/orange/dark` | `#773722` |
| `brand/ecru` | `#FFFDF0` |
| `brand/white` | `#FFFFFF` |
| `brand/black` | `#1A1A1A` |

## 6. Typography

### 6.1 字体与样式

字体使用 `Inter`。本地 text styles 命名为：

```text
text/{scale}/{weight}
```

可用 scale：

```text
xs, sm, base, lg, xl, 2xl, 3xl, 4xl, 5xl, 6xl
```

可用 weight：

```text
regular, medium, semibold
```

额外可用：

```text
text/6xl/bold
```

注意：Figma 字重名称中 `Semi Bold` 有空格。Agent 操作 Figma 文本时不要写成 `SemiBold`。

**字重使用规则**：一般不使用 `semibold`。正文与辅助信息用 `regular`；标题、强调、按钮与标签文字优先用 `medium`。仅当 `medium` 确实压不住层级的个别场景（如超大数字、hero 级标题）才可例外使用 `semibold`，使用时需说明理由并记录在案。

### 6.2 Text style 基础值

| Style | Font | Size | Line height | Letter spacing |
| --- | --- | --- | --- | --- |
| `text/xs/regular` | Inter Regular | 12 | 16 | 0 |
| `text/xs/medium` | Inter Medium | 12 | 16 | 0 |
| `text/xs/semibold` | Inter Semi Bold | 12 | 16 | 0 |
| `text/sm/regular` | Inter Regular | 14 | 20 | 0 |
| `text/sm/medium` | Inter Medium | 14 | 20 | 0 |
| `text/sm/semibold` | Inter Semi Bold | 14 | 20 | 0 |
| `text/base/regular` | Inter Regular | 16 | 24 | 0 |
| `text/base/medium` | Inter Medium | 16 | 24 | 0 |
| `text/base/semibold` | Inter Semi Bold | 16 | 24 | 0 |
| `text/lg/regular` | Inter Regular | 18 | 28 | 0 |
| `text/lg/medium` | Inter Medium | 18 | 28 | 0 |
| `text/lg/semibold` | Inter Semi Bold | 18 | 28 | 0 |
| `text/xl/regular` | Inter Regular | 20 | 30 | 0 |
| `text/xl/medium` | Inter Medium | 20 | 30 | 0 |
| `text/xl/semibold` | Inter Semi Bold | 20 | 30 | 0 |
| `text/2xl/regular` | Inter Regular | 24 | 32 | 0 |
| `text/2xl/medium` | Inter Medium | 24 | 32 | 0 |
| `text/2xl/semibold` | Inter Semi Bold | 24 | 32 | 0 |
| `text/3xl/regular` | Inter Regular | 30 | 36 | 0 |
| `text/3xl/medium` | Inter Medium | 30 | 36 | 0 |
| `text/3xl/semibold` | Inter Semi Bold | 30 | 36 | 0 |
| `text/4xl/regular` | Inter Regular | 36 | 40 | 0 |
| `text/4xl/medium` | Inter Medium | 36 | 40 | 0 |
| `text/4xl/semibold` | Inter Semi Bold | 36 | 40 | 0 |
| `text/5xl/regular` | Inter Regular | 48 | 56 | 0 |
| `text/5xl/medium` | Inter Medium | 48 | 56 | 0 |
| `text/5xl/semibold` | Inter Semi Bold | 48 | 56 | 0 |
| `text/6xl/regular` | Inter Regular | 60 | 72 | 0 |
| `text/6xl/medium` | Inter Medium | 60 | 72 | 0 |
| `text/6xl/semibold` | Inter Semi Bold | 60 | 72 | 0 |
| `text/6xl/bold` | Inter Bold | 60 | 72 | 0 |

### 6.3 Responsive typography variables

Typography collection 有 3 个模式：`Desktop`、`Tablet`、`Mobile`。

| Scale | Desktop size/line-height | Tablet size/line-height | Mobile size/line-height |
| --- | --- | --- | --- |
| `xs` | 12 / 16 | 12 / 16 | 12 / 16 |
| `sm` | 14 / 20 | 14 / 20 | 14 / 20 |
| `base` | 16 / 24 | 16 / 24 | 16 / 24 |
| `lg` | 18 / 28 | 18 / 28 | 16 / 24 |
| `xl` | 20 / 30 | 20 / 28 | 18 / 24 |
| `2xl` | 24 / 32 | 22 / 30 | 20 / 28 |
| `3xl` | 30 / 36 | 28 / 32 | 24 / 28 |
| `4xl` | 36 / 40 | 30 / 36 | 28 / 32 |
| `5xl` | 48 / 56 | 40 / 48 | 32 / 40 |
| `6xl` | 60 / 72 | 48 / 56 | 40 / 48 |

前端实现时不要用 `vw` 动态缩放字号。应按断点切换 token 对应值。

## 7. Spacing

Spacing collection 有 3 个模式：`Default`、`Tablet`、`Mobile`。

基础 token 用于 gap、padding、margin、布局间距。Figma 使用 token 名称如 `4`、`10`；文档中可写作 `Spacing/4` 或 `spacing/4` 便于理解。

| Token | Default | Tablet | Mobile |
| --- | ---: | ---: | ---: |
| `0` | 0 | 0 | 0 |
| `0_5` | 2 | 2 | 2 |
| `1` | 4 | 4 | 4 |
| `1_5` | 6 | 6 | 6 |
| `2` | 8 | 8 | 8 |
| `2_5` | 10 | 10 | 10 |
| `3` | 12 | 12 | 12 |
| `4` | 16 | 16 | 16 |
| `5` | 20 | 20 | 20 |
| `6` | 24 | 24 | 24 |
| `7` | 28 | 28 | 28 |
| `8` | 32 | 32 | 32 |
| `9` | 36 | 36 | 32 |
| `10` | 40 | 32 | 24 |
| `12` | 48 | 40 | 32 |
| `13` | 56 | 48 | 40 |
| `16` | 64 | 56 | 48 |
| `20` | 80 | 64 | 56 |
| `24` | 96 | 80 | 64 |
| `32` | 128 | 96 | 80 |
| `40` | 160 | 128 | 96 |
| `48` | 192 | 160 | 128 |
| `56` | 224 | 192 | 160 |
| `64` | 256 | 224 | 192 |

### 7.1 固定间距与 Auto spacing

当元素之间的距离大于当前 spacing token 能表达的范围时，不要直接写一个任意像素值。先判断这个距离是不是由布局分布产生的。

如果该距离用于把元素推向容器两端、占满剩余空间、或随容器宽度变化，例如 toolbar 左右两组操作、card header 标题与操作按钮、footer 两端信息，应优先使用 Figma Auto layout 的 `Auto` spacing。

在前端中，这类布局通常对应：

- `justify-content: space-between`
- `margin-left: auto`
- CSS grid 的弹性列分布

如果这个距离是内容之间的固定视觉节奏，例如 section 与 section 之间、card 内部内容组之间、表单字段之间，则仍应使用 spacing token。若现有 token 无法表达该固定节奏，需要说明原因并新增 token，而不是硬编码。

判断方式：

- 两组内容需要分开到容器两端时，用 Auto spacing 或前端弹性布局。
- 内容之间需要固定呼吸感时，用 spacing token。
- 只是从 Figma 量出来一个很大的距离时，先检查它是不是容器剩余空间，不要直接当成 gap。

### 7.2 Alias tokens

| Token | Alias |
| --- | --- |
| `space/component/xs` | `2` |
| `space/component/sm` | `3` |
| `space/component/md` | `4` |
| `space/component/lg` | `6` |
| `space/layout/sm` | `10` |
| `space/layout/md` | `16` |
| `space/layout/lg` | `24` |

组件内部优先使用 `space/component/*`。页面、section、主要内容块之间的距离优先使用 `space/layout/*` 或 `10` 以上的 spacing token。

不要使用 spacer 组件模拟间距。Auto layout 中应直接把 spacing variable 绑定到 `gap` 或 `padding`。

## 8. Radius

| Token | Value |
| --- | ---: |
| `xs` | 4 |
| `input` | 6 |
| `sm` | 8 |
| `md` | 12 |
| `lg` | 16 |
| `xl` | 24 |
| `full` | 9999 |

输入框使用 `radius/input`。普通卡片和浮层优先使用 `sm` 或 `md`，不要随意使用过大的圆角。

## 9. Breakpoints

| Token | Width |
| --- | ---: |
| `sm` | 640 |
| `md` | 768 |
| `lg` | 900 |
| `xl` | 1024 |
| `2xl` | 1280 |
| `3xl` | 1536 |
| `4xl` | 1920 |

响应式实现时按这些断点切换布局、spacing mode 和 typography mode。不要新增 `480`、`720`、`960` 等临时断点，除非具体业务场景已有设计稿明确要求。

## 10. Shadows

使用 Figma 本地 effect styles，不要手写近似阴影。

| Style | Effects |
| --- | --- |
| `shadow/none` | `0 0 0 0 #000000/0%` |
| `shadow/sm` | `0 1 2 0 #000000/5%` |
| `shadow/base` | `0 1 3 0 #000000/10%`, `0 1 2 0 #000000/6%` |
| `shadow/md` | `0 4 6 -1 #000000/7%`, `0 2 4 -1 #000000/6%` |
| `shadow/lg` | `0 10 15 -3 #000000/10%`, `0 4 6 -2 #000000/5%` |
| `shadow/xl` | `0 20 25 -5 #000000/10%`, `0 10 10 -5 #000000/4%` |
| `shadow/2xl` | `0 25 50 -12 #000000/25%` |
| `shadow/inner` | inner `0 2 4 0 #000000/6%` |

一般层级建议：

| 场景 | Style |
| --- | --- |
| 普通卡片 | `shadow/sm` 或 `shadow/base` |
| dropdown、popover | `shadow/md` 或 `shadow/lg` |
| modal、dialog | `shadow/xl` 或 `shadow/2xl` |
| 输入框内凹效果 | `shadow/inner` |

## 11. Gradients

使用 Figma 本地 paint styles：

```text
gradient/AI/primary/default
gradient/AI/primary/hover
gradient/AI/primary/active
gradient/AI/primary/dark-bg
gradient/AI/secondary/hover
gradient/AI/secondary/active
gradient/page/background
gradient/page/background-contrast
gradient/editor/background
```

渐变主要用于 AI 相关入口、页面背景、编辑器背景。常规按钮、表单、业务卡片不要擅自使用渐变。

## 12. Sizing

`Sizing` collection 包含：

```text
Width/w-*
Height/h-*
```

用于固定宽高，如 avatar、icon container、checkbox size、固定列宽。数值梯度与 spacing default scale 对齐。不要用 spacing token 直接表达固定宽高，除非代码 token 层尚未区分 sizing 与 spacing。

## 13. Component-level tokens

当前文件已有组件级 token collection。实现对应组件时优先使用这些 token，而不是只用全局 semantic token 拼装。

### 13.1 Button

Collection：`actions/button`

可用 token：

```text
button/primary/bg
button/primary/bg-hover
button/primary/bg-active
button/primary/fg
button/secondary/bg
button/secondary/bg-hover
button/secondary/bg-active
button/secondary/fg
button/outline/bg
button/outline/bg-hover
button/outline/bg-active
button/outline/border
button/outline/fg
button/ghost/bg-hover
button/ghost/bg-active
button/ghost/fg
button/danger/bg
button/danger/bg-hover
button/danger/bg-active
button/danger/fg
button/disabled/bg
button/disabled/border
button/disabled/fg
button/focus-ring
button/font-size
button/line-height
button/radius
```

### 13.2 Input

Collection：`forms/input`

可用 token：

```text
input/bg
input/bg-disabled
input/bg-error
input/bg-focus
input/border
input/border-hover
input/border-focus
input/border-error
input/border-success
input/border-disabled
input/text
input/text-disabled
input/text-error
input/text-success
input/placeholder
input/placeholder-disabled
input/label
input/helper
input/icon
input/icon-error
input/icon-success
input/font-size
input/line-height
input/radius
```

### 13.3 Select

Collection：`forms/select`

可用 token：

```text
select/trigger/bg
select/trigger/bg-open
select/trigger/bg-disabled
select/trigger/border
select/trigger/border-hover
select/trigger/border-open
select/trigger/border-disabled
select/trigger/text
select/trigger/text-disabled
select/trigger/placeholder
select/trigger/icon
select/trigger/icon-disabled
select/menu/bg
select/menu/border
select/menu/radius
select/item/bg-hover
select/item/bg-selected
select/item/text
select/item/text-selected
select/item/text-secondary
select/item/text-disabled
select/item/icon
select/item/icon-selected
select/font-size
select/line-height
select/radius
```

### 13.4 Checkbox

Collection：`forms/checkbox`

可用 token：

```text
checkbox/control/bg
checkbox/control/bg-checked
checkbox/control/bg-disabled
checkbox/control/bg-error
checkbox/control/border
checkbox/control/border-hover
checkbox/control/border-checked
checkbox/control/border-disabled
checkbox/control/border-error
checkbox/control/icon
checkbox/control/icon-disabled
checkbox/label/text
checkbox/label/text-disabled
checkbox/label/error
checkbox/label/helper
checkbox/label/font-size
checkbox/label/line-height
checkbox/radius
checkbox/size-width
checkbox/size-height
```

## 14. 前端实现映射建议

### 14.1 CSS variables

建议保留 Figma token path，并映射为稳定 CSS variables：

```css
:root {
  --surface-layer-primary: var(--primitive-base-white);
  --text-primary: var(--primitive-neutral-950);
  --fill-brand-primary-default: var(--primitive-brand-periwinkle-600);
  --space-4: 16px;
  --radius-input: 6px;
}

[data-theme="dark"] {
  --surface-layer-primary: var(--primitive-neutral-950);
  --text-primary: var(--primitive-neutral-50);
}
```

如果项目使用 Tailwind，应把 token 写入 theme，而不是在组件中大量使用 arbitrary value，例如 `text-[#1A1A1A]`、`rounded-[13px]`。

### 14.2 命名转换

| Figma token | CSS var 建议 |
| --- | --- |
| `text/primary` | `--text-primary` |
| `surface/layer/primary` | `--surface-layer-primary` |
| `fill/brand/primary/default` | `--fill-brand-primary-default` |
| `border/focus` | `--border-focus` |
| `space/component/md` | `--space-component-md` |
| `radius/input` | `--radius-input` |

转换时只改变分隔符，不改变语义层级。

## 15. 设计与还原检查清单

交付前，Agent 必须自查：

- 是否使用 `Semantic` token，而不是直接硬编码 primitive color。
- 是否使用现有 text styles，字号、行高、字重是否与 token 一致；字重是否遵守「一般不使用 semibold」规则。
- 是否使用 spacing token，主要容器间距是否随断点变化。
- 是否使用 radius token，没有出现随意的 `10px`、`14px`、`18px` 圆角。
- 是否使用 shadow style，没有手写近似阴影。
- 是否存在遗留的默认 `#FFFFFF` 填充——纯布局容器应无填充，背景容器必须绑 semantic token。
- 是否按 `sm / md / lg / xl / 2xl / 3xl / 4xl` 断点处理响应式。
- 是否区分组件级 token 和全局 semantic token。
- 是否检查 hover、active、focus、disabled、error、success 等状态。
- 是否保证文本不溢出、不互相遮挡、不因内容变化破坏布局。
- 是否在桌面、平板、移动视口中检查过关键页面。

## 16. 特别注意

Typography 页面画布上可能存在旧展示标签或 demo 文案。若画布展示名与本地 text style 或 variable collection 不一致，以 Figma 本地样式和变量为准。

Spacing usage guide 中的文字说明可帮助理解用途，但具体数值以变量值为准。例如当前 `Spacing/9` 在 `Mobile` 模式下为 `32`。

Agent 在 Figma 中创建或修改内容时，应使用 auto layout 表达结构关系，直接把 spacing variable 绑定到 gap/padding。不要用绝对定位堆版，也不要用空 frame 当 spacer。

新建 frame / auto layout 容器时，Figma 自带的默认填充 `#FFFFFF` 必须当场处理：纯布局容器一律清空填充；确实需要背景的容器绑对应 semantic token（如 `surface/*`、`fill/*`）。不允许留下未绑定的默认白底。

前端还原时，除非设计稿明确要求，不要引入额外品牌色、额外断点、额外字体、额外阴影层级。
