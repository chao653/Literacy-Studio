# Monitor（AI Tutor）操作日志

> 类型：Assignment Monitor 页（顶栏、状态筛选、学生表格、19 行状态矩阵、AI Insights、Remove / End 弹窗）。按日期追加，只增不覆盖。

## 2026-09-29 · Your Turn 列 + Interventions 分类 + AI Insights + 走查 P0（APAC-6131）

- 任务来源：Linear [APAC-6131](https://linear.app/kira-learning/issue/APAC-6131/monitor-your-turn-列-interventions-分类-ai-insights-走查-p0)（父单 APAC-6129）；用户指令「帮我做一下这个需求，原设计稿 node 1925-10702」。
- 依据：PRD [Teacher View](https://app.notion.com/p/34e70a1b992481f386b9c2d22bf61531) §5.1–§5.5（T3 / T4 / T5）、§7.2–§7.3；`决策日志.md`「UI 文案一律以 PRD 为准」「数据表格数字列左对齐」。
- 涉及节点：section `Monitor AI tutor` · node_id `1925:10702` · [Figma 链接](https://www.figma.com/design/pCdwCN68j1KGXz3aZZ6Wn0/Literacy-Studio-AI-Tutor?node-id=1925-10702)。原稿两列（Scheduled x=1032、Live x=3194）未改，作对照；section 宽度 5622 → 14560。

新增帧（均命名 `Latest · Monitor · …`）：

| 列 | 帧 | node_id | 对应 19 行矩阵 |
| --- | --- | --- | --- |
| Scheduled（x=5600） | Scheduled · Not Started | [`2155:25493`](https://www.figma.com/design/pCdwCN68j1KGXz3aZZ6Wn0/Literacy-Studio-AI-Tutor?node-id=2155-25493) | 行 11 |
| | Scheduled · In Progress（模板） | [`2152:25300`](https://www.figma.com/design/pCdwCN68j1KGXz3aZZ6Wn0/Literacy-Studio-AI-Tutor?node-id=2152-25300) | 行 12–14 |
| | Scheduled · In Progress · Remove student | [`2155:26011`](https://www.figma.com/design/pCdwCN68j1KGXz3aZZ6Wn0/Literacy-Studio-AI-Tutor?node-id=2155-26011) | §7.2 |
| | Scheduled · Expired (ended by window) | [`2155:26507`](https://www.figma.com/design/pCdwCN68j1KGXz3aZZ6Wn0/Literacy-Studio-AI-Tutor?node-id=2155-26507) | 行 12、18、19 |
| Live（x=7560） | Live · Not Started | [`2159:26220`](https://www.figma.com/design/pCdwCN68j1KGXz3aZZ6Wn0/Literacy-Studio-AI-Tutor?node-id=2159-26220) | 行 1 |
| | Live · In Progress | [`2159:26726`](https://www.figma.com/design/pCdwCN68j1KGXz3aZZ6Wn0/Literacy-Studio-AI-Tutor?node-id=2159-26726) | 行 2–4 |
| | Live · Paused | [`2159:27203`](https://www.figma.com/design/pCdwCN68j1KGXz3aZZ6Wn0/Literacy-Studio-AI-Tutor?node-id=2159-27203) | 行 5–7 |
| | Live · End confirm | [`2160:26919`](https://www.figma.com/design/pCdwCN68j1KGXz3aZZ6Wn0/Literacy-Studio-AI-Tutor?node-id=2160-26919) | §7.3 |
| | Live · Ended | [`2160:27241`](https://www.figma.com/design/pCdwCN68j1KGXz3aZZ6Wn0/Literacy-Studio-AI-Tutor?node-id=2160-27241) | 行 8–10 |
| AI Insights（x=9520） | In progress · 0 completed | [`2167:27408`](https://www.figma.com/design/pCdwCN68j1KGXz3aZZ6Wn0/Literacy-Studio-AI-Tutor?node-id=2167-27408) | §5.5 |
| | In progress · partial (≥ 1 completed) | [`2167:27912`](https://www.figma.com/design/pCdwCN68j1KGXz3aZZ6Wn0/Literacy-Studio-AI-Tutor?node-id=2167-27912) | §5.5 |
| | Ended · 0 completed | [`2167:28398`](https://www.figma.com/design/pCdwCN68j1KGXz3aZZ6Wn0/Literacy-Studio-AI-Tutor?node-id=2167-28398) | §5.5 |
| AI Insights（x=11480） | Ended · partially completed | [`2168:28110`](https://www.figma.com/design/pCdwCN68j1KGXz3aZZ6Wn0/Literacy-Studio-AI-Tutor?node-id=2168-28110) | §5.5 |
| | Generation failed | [`2168:28420`](https://www.figma.com/design/pCdwCN68j1KGXz3aZZ6Wn0/Literacy-Studio-AI-Tutor?node-id=2168-28420) | §5.5 |
| | K–1 (no insights in Phase 1) | [`2168:28913`](https://www.figma.com/design/pCdwCN68j1KGXz3aZZ6Wn0/Literacy-Studio-AI-Tutor?node-id=2168-28913) | §5.5 |
| 右侧（x=13440） | Board · AI Tutor rules (PRD §5.1–§5.5) | [`2170:28819`](https://www.figma.com/design/pCdwCN68j1KGXz3aZZ6Wn0/Literacy-Studio-AI-Tutor?node-id=2170-28819) | — |
| 左侧 | 改动说明 · Monitor (APAC-6131) | [`2170:28848`](https://www.figma.com/design/pCdwCN68j1KGXz3aZZ6Wn0/Literacy-Studio-AI-Tutor?node-id=2170-28848) | — |

- 操作摘要：
  - **模板**：克隆原稿 `1925:10832`，先做成「Scheduled · In Progress」一张完整稿，其余 Scheduled / Live / AI Insights 帧都从它（或 Live · Ended）克隆再改数据。
  - **顶栏**：名称去掉状态后缀（Scheduled 用 “Section B — Homework”，Live 用 “Section A — Live Session”，K–1 用 “Kindergarten — Live Session”）；Scheduled 计时器改为 `Opens / Ends / Expired {time}` + helper “Self-paced · Mar 12, 9:00 AM – Mar 14, 11:59 PM”，Not Started 加 “Edit Assignment Time”（ShadCN `Button` Link / sm + DS2 `PencilSimple`）；Scheduled Not Started / In Progress 补 Pause（沿用 Live 稿的橙色按钮）与 End Task；Live 沿用原稿 Start / Pause / Continue + “Self-paced · no countdown”，状态胶囊 Ready to start / Open now / Paused / Ended；每帧加完成统计（DS2 `CheckCircle` + “X/10 completed”）与 T8 常驻说明（复用 Task Detail 的说明组）；Ended / Expired 的 Join Code 切 `State=Disabled`，Live · Ended 加 Tooltip “This assignment has ended”。
  - **状态筛选**：去掉原来孤零零的 `Tabs`（Overview），换成 6 个 ShadCN `Tabs / Trigger`（All 为 Active）组成的灰底轨道（`fill/neutral/subtle`）。
  - **表格**：复制 Current Phase 列生成 Your Turn 列并插在其后；列宽 Student 200 / Status 130 / Current Phase 136 / Your Turn 240 / Comprehension 150 / Interventions 210 / Actions FILL。Your Turn 教师标注放第二行（`text/xxs/regular` + `text/secondary`）；Interventions 两行 “Word reading N · Meaning N / Comprehension N · Technical N”（`text/xxs/regular`）；空值 `--` / `—` 用 `text/tertiary`。状态、Details、More 按 19 行矩阵逐行设置；原稿展开的 More 菜单保留一处作「只剩 Remove」示意，其余隐藏。停在 Your Turn 时被结束的学生（Ended / Expired + Current Phase = Your Turn）显示 “Not enough evidence”，共 5 格：Scheduled · Expired、Live · Ended、AI Insights · Ended · 0 completed（2 格）、AI Insights · Ended · partially completed；规则板 Your Turn 段补了这一句。至此 5 种行为标签在表格里都有示例。
  - **弹窗**：Remove Student 沿用原稿（与 §7.2 一致）；End 弹窗标题改 “End This Assignment?”、按钮 “Cancel / End Assignment”，警告人数改为 7。
  - **AI Insights 卡片**：克隆原卡 `1925:12310`，去掉 Regenerate；Priority 1 标题 “Low Comprehension”，列出学生与分数，下一步用 PRD 原文，部分完成时加 “Based on X/Y completed students so far.” / “Based on 5/10 completed students.”；其余状态按 §5.5 原文；失败态加 ShadCN `Button`（Outline / sm）“Retry”。
  - 删除本 section 全部 10 张 `PRD-Review /` 便签。
- 踩坑与修正：
  - **变量绑定的文字重绑同一个 token 时，填充的缓存色会停在传入的兜底色 `#000`**，画面显示为黑色。改为用 `variable.resolveForConsumer(node)` 的解析值作为 paint 颜色再绑定；并对本单 15 帧及 APAC-6132 的 13 帧做了一次修复扫描（APAC-6132 共修正 18 处，外观回到 token 颜色）。
  - 状态胶囊切换变体后会保留原来的圆点颜色覆盖，先 `resetOverrides()` 再切变体。
  - 学生姓名在单元格里被包在 120px 的 Text Wrapper 中，改为 FILL 反而截断；恢复为 HUG + 不截断。
- 缺口：Scheduled「被老师手动 End」（矩阵行 15–17）没有单独出帧（PRD 没有这种情况下的计时器文案）；K–1 的 Comprehension 列先用 “Recorded” 表示复述录音状态；学生默认排序沿用原稿顺序。
- 结果状态：已完成；待确认项见 `决策日志.md` 2026-09-29「Monitor（APAC-6131）」条目与 `需求文档/待确认问题清单.md` #10–#16。

## 2026-09-29 · 按「工单 → PRD」收掉待确认项，补 Scheduled 手动 End 帧

- 任务来源：用户指令「需要确认的内容，先以工单为主，再以PRD为准，不确定的再问我」。
- 依据：Linear APAC-6131（P0「Ended 后学生行必须转为终态，按 19 行矩阵」）；PRD Teacher View §5.3（Your Turn 标签定义、19 行矩阵行 15–17）；PRD V2.1 Scope（Kindergarten 复述只有 Help me 按钮）。
- 操作摘要：
  - **新增帧** [`2182:902`](https://www.figma.com/design/pCdwCN68j1KGXz3aZZ6Wn0/Literacy-Studio-AI-Tutor?node-id=2182-902) `Latest · Monitor · Scheduled · Ended (ended by teacher)`，放在 Scheduled 列第 5 张（x=5600, y=5423），对应矩阵行 15–17：从 Scheduled · Expired 克隆，顶栏与 5 名未完成学生的 `Assignment Status` 由 expired 切为 Ended（先 `resetOverrides()`，与 Live · Ended 同一变体），时间改为 “Ended Mar 13, 2:30 PM”（PRD 未定义，暂定，待确认 #11）。
  - **K–1 帧**（`2168:28913`）：Brandon Lee 的 “Asked for help (chrysalis)” 改为 “Asked for help (whole stretch)”（Kindergarten 不能点词）；Fatima Al-Hassan 停在 Oral Retelling（已过 Your Turn），Your Turn 由 “--” 改为 “Attempted · no help”。
  - **规则板**（`2170:28819`）Your Turn 段补一句 Kindergarten 只有 Help me、不会出现 “Asked for help ({word})”。
  - **改动说明**（`2170:28848`）：Scheduled 改为 5 帧、矩阵覆盖改为行 11–19；「文案口径」写明按工单 / PRD 定下的 5 条；「待确认」只留 #11、#15。
- 复核：新帧与 K–1 帧截图检查；新帧只剩筛选器里的 “Expired” 页签文字；改动说明与新帧无重叠。
- 结果状态：已完成；#11（Scheduled 暂停 / 手动 End 后的时间文案）、#15（默认排序）待用户确认。
