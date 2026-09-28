# Quick Assign 与 Screener 入口操作日志

> 类型：Quick Assign 弹窗、Screener 三个入口（Dashboard At Risk 面板、Screener Monitor Actions 列、Screener Student Detail 推荐面板）的状态稿。按日期追加，只增不覆盖。

## 2026-09-28 · 推荐计划改为 6 个固定步骤，补齐弹窗与三个入口的状态（APAC-6132）

- 任务来源：Linear [APAC-6132](https://linear.app/kira-learning/issue/APAC-6132/quick-assign-screener-入口-推荐计划-6-步-状态补齐)（父单 APAC-6129）；用户指令「帮我做一下这个 ticket，原设计稿 node 1925-31830」。
- 依据：PRD [Teacher View](https://app.notion.com/p/34e70a1b992481f386b9c2d22bf61531) §2.2、§3.2、§7.4（含 T1、T7）；`决策日志.md` 2026-09-24「UI 文案一律以 PRD 为准」。
- 涉及节点：section `Quick Assign` · node_id `1925:31830` · [Figma 链接](https://www.figma.com/design/pCdwCN68j1KGXz3aZZ6Wn0/Literacy-Studio-AI-Tutor?node-id=1925-31830) · 页面 `teacher‘s view - Student detail`。section 宽度 3498 → 11500，第 1 列原稿（`1925:31833`、`1925:32061`、`1925:32330`、`1925:32599`）未改动。

新增帧（每列顶部各加一个 `Utility / File Section Headers`：`2051:17602` / `2051:17616` / `2051:17630` / `2051:17644`）：

| 列 | 帧 | node_id |
| --- | --- | --- |
| 第 2 列 · 弹窗 | Latest · Quick Assign · Step 1 · Scheduled (default) | [`2052:17659`](https://www.figma.com/design/pCdwCN68j1KGXz3aZZ6Wn0/Literacy-Studio-AI-Tutor?node-id=2052-17659) |
| | Latest · Quick Assign · Step 1 · Live | [`2054:18045`](https://www.figma.com/design/pCdwCN68j1KGXz3aZZ6Wn0/Literacy-Studio-AI-Tutor?node-id=2054-18045) |
| | Latest · Quick Assign · Step 2 · Assigned Successfully! | [`2054:18375`](https://www.figma.com/design/pCdwCN68j1KGXz3aZZ6Wn0/Literacy-Studio-AI-Tutor?node-id=2054-18375) |
| | Latest · Quick Assign · After assign · Dashboard (Toast + Assigned) | [`2056:18779`](https://www.figma.com/design/pCdwCN68j1KGXz3aZZ6Wn0/Literacy-Studio-AI-Tutor?node-id=2056-18779) |
| 第 3 列 · Monitor | Latest · Screener Monitor · Actions by risk | [`2057:19138`](https://www.figma.com/design/pCdwCN68j1KGXz3aZZ6Wn0/Literacy-Studio-AI-Tutor?node-id=2057-19138) |
| | Latest · Screener Monitor · After assign (Toast + Assigned) | [`2062:19598`](https://www.figma.com/design/pCdwCN68j1KGXz3aZZ6Wn0/Literacy-Studio-AI-Tutor?node-id=2062-19598) |
| | Latest · Quick Assign · Board · Entry points & states (PRD §2.2, §7.4) | [`2063:19598`](https://www.figma.com/design/pCdwCN68j1KGXz3aZZ6Wn0/Literacy-Studio-AI-Tutor?node-id=2063-19598) |
| 第 4 列 · 推荐面板 | Latest · Student Detail · At Risk · Grade 3 | [`2066:19598`](https://www.figma.com/design/pCdwCN68j1KGXz3aZZ6Wn0/Literacy-Studio-AI-Tutor?node-id=2066-19598) |
| | Latest · Student Detail · Monitor | [`2067:20189`](https://www.figma.com/design/pCdwCN68j1KGXz3aZZ6Wn0/Literacy-Studio-AI-Tutor?node-id=2067-20189) |
| | Latest · Student Detail · At Risk · Grade 1 (K–2 Echo, K–1 Oral Retelling) | [`2067:20366`](https://www.figma.com/design/pCdwCN68j1KGXz3aZZ6Wn0/Literacy-Studio-AI-Tutor?node-id=2067-20366) |
| 第 5 列 · 面板状态 | Latest · Student Detail · On Track | [`2071:21371`](https://www.figma.com/design/pCdwCN68j1KGXz3aZZ6Wn0/Literacy-Studio-AI-Tutor?node-id=2071-21371) |
| | Latest · Student Detail · No result | [`2071:21580`](https://www.figma.com/design/pCdwCN68j1KGXz3aZZ6Wn0/Literacy-Studio-AI-Tutor?node-id=2071-21580) |
| | Latest · Student Detail · Low confidence | [`2072:22018`](https://www.figma.com/design/pCdwCN68j1KGXz3aZZ6Wn0/Literacy-Studio-AI-Tutor?node-id=2072-22018) |
| | Latest · Student Detail · AI Tutor already assigned | [`2072:22227`](https://www.figma.com/design/pCdwCN68j1KGXz3aZZ6Wn0/Literacy-Studio-AI-Tutor?node-id=2072-22227) |
| 左侧 | 改动说明 · Quick Assign Latest (APAC-6132) | [`2076:23207`](https://www.figma.com/design/pCdwCN68j1KGXz3aZZ6Wn0/Literacy-Studio-AI-Tutor?node-id=2076-23207) |

- 操作摘要：
  - **弹窗**：以 Home section 已按 PRD 改好文案的三帧（`1981:21358`、`1981:21627`）为底克隆。Student 行移到 Mode 之前，只保留头像 + 姓名（Marcus Rivera，与原稿指针所在行一致）；两张 `Select/Item` 互换选中样式，默认选中 Scheduled；从 Create task – Latest 的分配弹窗（`1961:12014`）克隆 Available From / Until 块，改为上下两行，日期 `Sep 28, 2026` / `Oct 5, 2026`、时间 `9:00 AM` / `11:59 PM`，值文字绑 `text/primary`。Live 帧隐藏时间块。成功帧改 summary 为 “Marcus Rivera has been assigned to”、排期改为 Scheduled 默认窗口，隐藏 “New task and assignment created”。分配后 Dashboard 帧以 Home 的 `1981:20861` 为底，Marcus 行 `Button`（Link / sm）切到 `State=Disabled` + “Assigned”，右下角放 ShadCN `Toast`（Destructive=No，隐藏 Title / Button，描述 “AI Tutor assigned to Marcus Rivera”）。
  - **Screener Monitor**：原文件没有这帧，以 Monitor AI tutor 的 `1925:10832` 为外壳克隆，列头改为 Risk / WCPM / Accuracy，Status 用 `Assignment Status` 变体切换，Risk 文字绑 `text/negative` / `text/warning` / `text/positive` / `text/tertiary`。Actions 列复制行内 `Button`（Link）生成 “AI Tutor” / “Assigned”（Disabled），No result 行 Details 切 Disabled；隐藏原帧展开的 More 菜单，David Kim 行的 ⋮ 从 Hover 复位为 Default。分配后帧把 Brandon Lee 行改为 Assigned 并放 Toast。说明板克隆 Home 说明板（`1981:22188`）改写 7 条规则。
  - **推荐面板**：以 `690:8079` 为底克隆。删除 5 张 `Card / toggle`、Tooltip 与 Cursor；新增 “Target Words” 行（ShadCN `Badge` Secondary “What this passage needs” + 3 个 Outline 词：butterfly / amazing / beautiful）；克隆 Create task – Latest 的 Session Phases 块（`1947:13125`），去掉 Est. Duration，“Fixed sequence” 里的自绘锁形矢量换成 Design System 2.0 Icons `Lock` 实例；Echo 按年级只保留对应半句，Warm-up 只保留前半句。副标题修正为 “Fall Benchmark — ORF · Grade 3 · Mar 6, 2026”（原稿重复了 “ORF — ORF”）；非低置信度状态隐藏左侧 “82% (Medium)” 提示条。头部 WCPM / Accuracy / 风险 / Confidence 通过 `Statistic Card` 的 `Statistic Text` 属性改值，风险文字绑语义 token。
  - **面板状态**：On Track 隐藏计划内容，放 DS2 `CheckCircle`（Fill，`icon/positive`）+ “No AI Tutor needed right now” + 辅助说明，无主按钮；No result 头部四项为 “—” / “No result”，面板保留标题、隐藏副标题，放 DS2 `HourglassMedium` 空态（底色 `surface/layer/secondary`、圆角 `radius/md`），左卡换成一行说明；Low confidence 显示提示条（58% Low），面板顶部放 ShadCN `Alert`（Default，图标槽 swap 为 DS2 `WarningCircle`）；已分配在按钮上方加 DS2 `CheckCircle` + “AI Tutor already assigned” + 任务名，主按钮切 `State=Disabled` + “Assigned”。
  - **新建节点的 token**：文字样式 `text/sm/regular`、`text/sm/medium`；颜色 `text/primary`、`text/secondary`、`text/tertiary`、`icon/positive`、`icon/tertiary`、`surface/layer/secondary`；间距 spacing `1` / `2` / `3` / `8`（4 / 8 / 12 / 32px）；新建 auto layout 容器一律清空默认白。克隆节点保留原有绑定。
- 缺口：
  - Session Phases 块沿用 Create task – Latest 的 ShadCN 套件变量（`purple/*`、`gray/100`、`base/*`）与套件文字样式，未改绑 Foundations。
  - 借用的 Monitor 外壳里 `Tabs` 只暴露一个 trigger，Screener 的 Analytics tab 没画出来。
  - 第 2 列弹窗背景沿用 Home 帧，At Risk 面板里的学生名与原稿一致，弹窗里的 Passage 仍为原稿的 “The Red Fox”。
- 复核：14 帧逐张截图检查；section 内无文本字符冒充的图标；新帧互不重叠；文案对照 PRD §7.4 原文逐条核对（“Assign AI Tutor”、“From: …”、“(same as Screener)”、“Mode”、“Assigned Successfully!”、“has been assigned to”、“AI Tutor assigned to [Name]”、“No AI Tutor needed right now”、“AI Tutor already assigned”、“Assigned”、“What this passage needs”）。
- 结果状态：已完成；待用户确认项见 `决策日志.md` 2026-09-28 条目与 `需求文档/待确认问题清单.md` #1–#3。
- 截图证据：本仓库为 GitHub 公开仓库，设计稿截图未入库。
