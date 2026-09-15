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

- 母版集中放进项目 Figma 文件的「Components」section（待建，建好后回填链接）。
- 现存母版：待填——随设计推进逐条登记：组件名 + node_id + 变体/属性 + 明细日志链接。
- 已删除组件同样记录在案（不得再引用）。
- 新增业务组件前先查基础组件库清单确认无覆盖；新母版一律放进 Components section。

## 复用惯例（业务纹样）

- 待填（如文字缩写 Avatar 的配色与字样先例）。

## 修改记录

- 2026-09-15 由 `project-scaffold` 脚手架创建（模板版，三库口径为 Kira 默认，待项目确认）。
