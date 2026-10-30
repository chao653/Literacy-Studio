# Survey Skip Logic 操作日志

> 类型：Survey 1.0 设计稿（`jEvNyDqXbaksOd6u07p7SX`）`Skip Logic` 页，按前端视觉 QA 的结论同步设计稿。按日期追加，只增不覆盖。

## 2026-10-30 · 按 APACFE-4560 / 4561 的回复同步 summary 文字色、Edit in flow 高度、选择题题干字号

- 任务来源：用户指令「帮我把 figma 设计稿更新一下」，即 10/30 在 [APACFE-4560](https://linear.app/kira-learning/issue/APACFE-4560#comment-05f8821a) 和 [APACFE-4561](https://linear.app/kira-learning/issue/APACFE-4561#comment-41604a3a) 回复里答应的修改。
- 涉及节点（文件 [Survey 1.0 - Design Draft](https://www.figma.com/design/jEvNyDqXbaksOd6u07p7SX)，页面 `Skip Logic`）：
  - Skip logic summary：`Skip Logic Slot`（235 个）与 `Native Inline Skip-logic Summary`；样板 `Skip Logic Slot` · node_id `15476:123429` · [Figma 链接](https://www.figma.com/design/jEvNyDqXbaksOd6u07p7SX?node-id=15476-123429)
  - `Edit In Flow Button`（ShadCN `Button`，Ghost / sm）98 个
  - 选择题卡 `MCQ - Activity card - Preview mode` 9 个：RP01 `14012:5720`、RP03 `14012:5771`、`14012:6042`、`14012:6072`、`14014:7906`、`14030:7708`、`14030:7863`、`18104:67454`、`18104:67595`
- 操作摘要：
  - **summary 文字色**：同一个 `text/secondary` 变量（key `8efc1634…`）在本文件有两份导入：`608:19` 是旧副本，解析为 `#404040`；`1331:698` 是当前副本，解析为 `#525252`，与 Foundations 2.0 库、卡片节点 `15143:43644`、代码一致。summary 里 382 个文字图层（标题 “Skip logic” 等）从旧副本改绑到当前副本。
  - **Edit in flow 高度**：ShadCN `Button` 只有 sm 36 / default 40 / lg 44，没有 32 的变体。在实例上把上下内边距从 `spacing/2`（8）改绑 ShadCN `spacing/1-5`（6），高度 36 → 32，与代码 ui `Button` sm 一致。左右内边距、圆角、文字不变。
  - **选择题题干**：卡片母版来自组件库，本文件改不了母版，改为实例覆盖：题干 `PlaceholderText` 的文本样式由 `text large/leading-normal/medium`（18/28）换成 FU01 在用的 `text base/leading-normal/medium`（16/24）。卡片头部（“Multiple Answers” / “Single Answer”）不动。卡片高度 388 → 384。
- 例外与缺口：
  - 19 个 `Edit In Flow Button` 在隐藏图层里（Survey Editor 的 Locked 2 / 7 / 8 / 9 / 10、Destination Section Removed 8–12、Trigger Not Last 10、Answer Options Change 22 / 23 的备选状态）。Figma 不重排隐藏图层，读数仍为 36；内边距已改为 6，显示后即为 32。
  - 卡片 `14244:5670`（Shared Results 3) My Answers）在隐藏图层里、没有题干，跳过。
  - 本页另有 303 个文字图层仍绑旧副本 `608:19`，分布在 27 个顶层画板，多为 [Flow] 流程图的 Connector Label、Notes、Tag、Board Header、Legend，不是前端实现的界面，本次未动。**需用户确认**是否一并改绑。
  - 文本样式和 spacing 变量沿用本文件已在用的 ShadCN 资产（与 FU01、按钮母版一致），没有换成 Foundations 2.0 的 `text/base/medium` 和 spacing `1_5`。
- 复核：summary `15476:123429` 的变量只剩 `text/secondary` = `#525252`、`spacing/1-5` = 6；可见的 79 个按钮高 32；9 个题干为 16/24；截图检查 summary、RP01、RP03。截图未入库（公开仓库）。
- 结果状态：已完成；隐藏图层与流程图里的旧变量见上，待用户确认。
