# Home 与 Dashboard 操作日志

> 类型：老师端 section `Home`（`1981:20858`）里的 Dashboard、View All Tasks Latest 帧和规则板。按日期追加，只增不覆盖。

## 2026-11-16 · 复查补改：补任务卡 “准备中 / 失败” 状态；面板改名 Needs Attention，并按 V1 规则写清谁会出现

- 任务来源：用户指令「检查一下设计稿需要修改的内容，是否都改好了」。对照 PRD 原文复查时发现的遗漏。
- 依据：PRD [Teacher View](https://app.notion.com/p/34e70a1b992481f386b9c2d22bf61531)：
  - §2.1 卡片状态（11-11，APACBE-2371）：
    - 准备中显示 “AI Generating”。
    - 失败或 10 分钟内没准备好，显示 “Generation Failed” / “Something went wrong.” / “Retry”。
    - 准备好但没分配，显示普通卡片 + “0 Assignments”，不加 Draft 标签。
  - §2.2：卡片叫 Needs Attention（面板全名 Students Needing Attention），只按 Reading Screener 结果算。名单按 V1 规则：最近一次计分阅读是 At Risk、Accuracy 四舍五入低于 90%、只读了 1–9 个词、或完全没识别到阅读，任一条成立就列出。所以 Monitor 但 Accuracy 低于 90% 的学生也在名单里。
- 涉及节点：
  - 卡片状态板 [`1981:22787`](https://www.figma.com/design/pCdwCN68j1KGXz3aZZ6Wn0/Literacy-Studio-AI-Tutor?node-id=1981-22787)：新行 `4517:33381`，卡片 `4517:33386`、`4517:33391`，说明 `1981:22800`
  - 规则板 [`1981:22188`](https://www.figma.com/design/pCdwCN68j1KGXz3aZZ6Wn0/Literacy-Studio-AI-Tutor?node-id=1981-22188)：文字 `1981:22191`、`1981:22192`、`1981:22200`、`1981:22201`
  - Dashboard Latest 帧：[`1981:21890`](https://www.figma.com/design/pCdwCN68j1KGXz3aZZ6Wn0/Literacy-Studio-AI-Tutor?node-id=1981-21890)、[`1981:21985`](https://www.figma.com/design/pCdwCN68j1KGXz3aZZ6Wn0/Literacy-Studio-AI-Tutor?node-id=1981-21985)、[`1981:22091`](https://www.figma.com/design/pCdwCN68j1KGXz3aZZ6Wn0/Literacy-Studio-AI-Tutor?node-id=1981-22091)
  - View All Tasks Latest 帧：`1981:22208`、`1981:22318`、`1981:22437`、`1981:22547`、`1981:22657`
- 操作摘要：
  - **卡片状态**：`1981:22787` 加一行 “States · content preparation (PRD §2.1, 11-11)”，板高 1250 → 1784。
    - AI Generating：Library Cards 组件切到 generating 变体（`2032:17613`），清掉旧覆盖。显示 “AI Generating” / “Drafting questions...” 和骨架条，隐藏 Retry 和 ×。
    - Generation Failed：在同一个变体上改成 “Generation Failed” / “Something went wrong.”，显示 Retry，隐藏骨架条和 ×。
    - 每张卡下面写 PRD 说明，并注明组件缺口。
  - **准备好但没分配**（`1981:22800`）：改为 “Ready but not yet assigned — a fresh Duplicate, saved as draft, missing comprehension questions, or left mid-wizard (11-11). Shows “0 Assignments” like Reading Screener — no Draft label; click opens Task Detail.”
  - **规则板**：
    - “At Risk Students” 改为 “Needs Attention (Students Needing Attention)”，说明改为只按 Reading Screener 结果算，AI Tutor 不加也不减。
    - “At-Risk panel · AI Tutor action” 改为 “Needs Attention panel · AI Tutor action”。
    - `1981:22201` 原来写 “Monitor students are not listed here”，和 PRD §2.2 相反。改为按 V1 规则写清谁会出现、每个 Assignment 一行，Monitor 但 Accuracy 低于 90% 的也在；其他学生从 Reading Screener Monitor 的 Actions 列分配。
  - **Dashboard 命名**：
    - 3 张 Dashboard 帧：卡片 “At Risk Students / Need attention” 改为 “Needs Attention / Students across all assignments”（远程组件实例里的覆盖文字）。面板标题改为 “Students Needing Attention”，副标题改为 “Students across all assignments whose latest reading needs a closer look.”
    - 5 张 View All Tasks 帧：只有面板标题和副标题，同样改。
- 设计判断：
  - 失败卡是在 generating 变体上改出来的示意。Library Cards 组件没有 AI Tutor 的准备中和失败变体，generating 变体只有 Screener 一种。
  - 副标题沿用 V1 生产文案（见 staging 截图 `走查/截图/R1-01-needs-attention-assigned-tooltip.png`）。PRD 只给了名称。
- 复核：截图检查 `1981:22787`、`1981:22188` 和一张 Dashboard 帧，没有溢出或重叠。两块板都在 section 内，和其他帧不重叠。
- 缺口：
  - Library Cards 组件要补 AI Tutor 的 “AI Generating / Generation Failed” 变体，需要组件库负责人改。
  - 非 Latest 的旧帧（`1981:20861`、`1981:21089`、`1981:21358`、`1981:21627`）没改。
  - Due This Week 卡副标题设计稿写 “Overdue”，staging 写 “Due soon”。PRD 没规定，没改。
- 结果状态：已完成（组件变体待补）。
- 截图证据：本仓库为 GitHub 公开仓库，设计稿截图未入库。
