# Token 绑定操作日志

> 类型：把画板上的裸样式值（颜色 / 圆角 / 间距 / 文本样式 / 阴影）绑定到 Design System 2.0 Foundations 的 token 与样式。按日期追加，只增不覆盖。

## 2026-09-15 · [Teacher view] Assignment Monitor - Analytics 全量绑定 Foundations 2.0

- 任务来源：用户指令「把这页上的 UI 样式参数全部绑定到 Foundation 2.0 的 token 上，找和原参数最相近的 token 去绑」。
- 涉及节点：`[Teacher view] Assignment Monitor- Analytics - default` · node_id `14221:3` · [Figma 链接](https://www.figma.com/design/CuPgFVMaxtXV5CM6Yl10YX/Literacy-Studio-Reading-Screener?node-id=14221-3) · 页面 `Bug fixing`。
- 操作范围：画板内 162 个非实例节点（frame / text / rectangle / ellipse / vector）。31 个库组件实例（Global navigation、Top nav、Button、Tabs、Statistic Card、Card / Header、Info、Separator、Avatar、Library Badge）**未动**，其样式由母版控制。
- 匹配规则：
  - 颜色：文本填充只在 `text/*` 里找（排除 `text/on-*`）；容器填充在 `surface/*` + `fill/*`；描边在 `border/*` + `separator/*`；语义 token 距离 > 24（RGB 欧氏，含透明度惩罚）且无更近语义 token 时，退到 primitives 最近色并标记。
  - 间距 / 圆角：取 spacing / radius collection 最近值；0 不绑。
  - 文本：按字号取最近 scale、按字重取 weight，套库里的 `text/{scale}/{weight}` 文本样式。
- 操作摘要（共 225 处绑定，0 报错）：

| 类别 | 原值 → token | 数量 | 备注 |
| --- | --- | --- | --- |
| 文本填充 | `#000000` → `text/primary` | 4 | 设计判断：最近的是 `text/on-warning`（同为纯黑），但语义不对，改绑 `text/primary`（#0A0A0A） |
| 文本填充 | `#222222` → `text/primary` | 1 | 环形图中央大数字「8」 |
| 文本填充 | `#6D6D6D` → `text/secondary` | 7 | 图例标签；与 `text/tertiary` 等距，按「辅助文本用 secondary」取 secondary |
| 文本填充 | `#FFFFFF` → `text/invert` | 6 | 条形图内白字 |
| 容器填充 | `#FFFFFF` → `surface/layer/primary` | 2 | 两张白卡背景（`14221:7`、`14221:37`） |
| 图表色 | `#60D16C` → primitive `green/400` | 8 | **需用户确认**：无近似语义 token（最近 `border/positive` d=65），暂绑 primitive |
| 图表色 | `#FFC45D` → primitive `amber/300` | 8 | 同上（最近语义 `border/warning` d=60） |
| 图表色 | `#F9715E` → primitive `red/400` | 7 | 同上（最近语义 `border/warning` d=47） |
| 描边 | `#FFFFFF` 1px → `surface/layer/primary` | 11 | 散点 / 环形图的白描边，`border/*` 无白色，按「与卡片底色同色」绑 surface |
| 圆角 | 8 → `radius/sm` | 6 节点 × 4 角 | 精确匹配 |
| 圆角 | 2 → `radius/xs`（4） | 6 节点 × 4 角 | 图例 12px 色块，2→4 有 2px 变化 |
| 间距 | 4 / 6 / 8 / 10 / 12 / 16 / 20 / 24 → `spacing/1 · 1_5 · 2 · 2_5 · 3 · 4 · 5 · 6` | 109 | 全部精确匹配（itemSpacing 64、padding 45） |
| 文本样式 | Inter Regular 12/(16 · 18 · 100%) → `text/xxs/regular` | 11 | 行高统一为 16 |
| 文本样式 | Inter Semi Bold 32/40 → `text/3xl/semibold` | 1 | 大数字「8」，32→30；按 design.md「超大数字可例外用 semibold」保留 semibold |

- 未处理项：无渐变 / 图片填充、无未绑阴影；实例内部不在范围。描边宽度（1px）无通用 token，保持字面值。
- 复核：绑定后重扫，剩余未绑定项 0。截图对比：整体一致，仅图表三色略有偏移（green/400 更亮、amber/300 更黄、red/400 更粉）、图例文字略深、图例色块圆角略大。
- 结果状态：已完成；3 项待用户确认——① 图表状态色是否改用语义 status token（`fill/positive/default` #16A34A / `fill/warning/default` #F97316 / `fill/negative/default` #DC2626，颜色会明显变深）；② 图例色块圆角 2→4 是否接受；③ 白描边绑 `surface/layer/primary` 的口径。
- 截图证据：本仓库为 GitHub 公开仓库，未把设计稿截图入库；需要时可在本地补到 `参考截图/2026-09-15-14221-3-token绑定-前.png / -后.png`。
