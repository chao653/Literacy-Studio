# Task Detail 操作日志

> 类型：Task Detail 页（头部、Assignment 列表、Assign 弹窗）、Edit Task 向导、Preview Task 流程。按日期追加，只增不覆盖。

## 2026-09-28 · Preview Task 流程补稿 + 08-19 走查修正（APAC-6133）

- 任务来源：Linear [APAC-6133](https://linear.app/kira-learning/issue/APAC-6133/task-detail-preview-task-流程-走查修正)（父单 APAC-6129）；用户指令「原设计稿 node 1925-16759，有必要的话可以改原稿」。
- 依据：PRD [Teacher View](https://app.notion.com/p/34e70a1b992481f386b9c2d22bf61531) §4.1、§4.2、§7.1、T8；`决策日志.md` 2026-09-24「UI 文案一律以 PRD 为准」。
- 涉及节点：section `Task details` · node_id `1925:16759` · [Figma 链接](https://www.figma.com/design/pCdwCN68j1KGXz3aZZ6Wn0/Literacy-Studio-AI-Tutor?node-id=1925-16759)。section 宽度 7913 → 8300。

**第 1 列 · Task detail - assignments（原地修改）**

| 帧 | node_id | 改动 |
| --- | --- | --- |
| No assignment | [`1925:17567`](https://www.figma.com/design/pCdwCN68j1KGXz3aZZ6Wn0/Literacy-Studio-AI-Tutor?node-id=1925-17567) | 头部通用改动（见下）；空态 “No assignments yet / Create an assignment to share this task with your students.” + “+ New Assignment” |
| with assignments | [`1925:16761`](https://www.figma.com/design/pCdwCN68j1KGXz3aZZ6Wn0/Literacy-Studio-AI-Tutor?node-id=1925-16761) | 头部通用改动；列表重排为 7 张卡 + “All assignments loaded”；帧高 1149 → 1232 |
| Assign - Live Type | [`1925:16903`](https://www.figma.com/design/pCdwCN68j1KGXz3aZZ6Wn0/Literacy-Studio-AI-Tutor?node-id=1925-16903) | “Task Type *” → “Schedule Type *”；背景换成修正后的 Task Detail |
| Assign - Schedule Type | [`1925:17129`](https://www.figma.com/design/pCdwCN68j1KGXz3aZZ6Wn0/Literacy-Studio-AI-Tutor?node-id=1925-17129) | 同上 + “Start Date / End Date” → “Available From / Available Until” |
| Assignment Assigned | [`1925:17403`](https://www.figma.com/design/pCdwCN68j1KGXz3aZZ6Wn0/Literacy-Studio-AI-Tutor?node-id=1925-17403) | “Cancel” → “Done”；背景同上 |

- 头部通用改动（第 1、2 列共 7 帧）：顶栏 “Literacy Studio” → “Back to Dashboard”；任务名 “Fall Benchmark — ORF” → “Butterfly Life Cycle”（ORF 是 Screener，不该挂 AI Tutor 徽章）；元信息 “Just Created · 142 words · Narrative” → “Grade 3 · 200 words · English”；主按钮 “Assign to Students” → “New Assignment”（保留 + 图标）；元信息下方加 T8 常驻说明（DS2 `Info` 16px + “This is assisted practice; results are not used for risk classification.”，`text/sm/regular` + `text/secondary`，图标 `icon/tertiary`，间距 spacing `1_5`）。
- 列表：以原 `Assignment card` 实例（`1925:16849`）克隆 7 张，通过 `Assignment Type` / `Assignment Status` 变体和文字覆盖设内容，按 PRD §4.1 排序：Section C — Makeup、Section A — Live Session、Section B — Homework（In Progress）→ Section E — Small Group（Paused）→ Section D — Next Week（Not Started）→ Section F — Week 1 Live（Ended）→ Section G — Week 1 Homework（Expired，`Status=expired, Type=Default`）。行间距绑 spacing `4`（16px）。去掉 Extended、重名卡、“0/24” 的 In Progress 与 “Due Mar 10” 这种格式。
- Edit 锁定：`1925:16761` 的 Edit Task 禁用态 + tooltip “This task has active assignments and cannot be edited.” 已核对，与 PRD 一致，未改。

**第 2 列 · Task detail - edit task**

| 帧 | node_id | 改动 |
| --- | --- | --- |
| No assignment（Edit 入口） | [`1925:17643`](https://www.figma.com/design/pCdwCN68j1KGXz3aZZ6Wn0/Literacy-Studio-AI-Tutor?node-id=1925-17643) | 头部通用改动 + 空态 |
| edit task - step 1 (6 fixed phases) | [`2095:23358`](https://www.figma.com/design/pCdwCN68j1KGXz3aZZ6Wn0/Literacy-Studio-AI-Tutor?node-id=2095-23358) | 新：克隆 Create task – Latest `1947:13072`，标题 “Edit Task” |
| edit task - step 2 | [`2095:23640`](https://www.figma.com/design/pCdwCN68j1KGXz3aZZ6Wn0/Literacy-Studio-AI-Tutor?node-id=2095-23640) | 新：克隆 `1947:13842`，标题 “Edit Task” |
| edit task - step 3 (review) | [`2095:23824`](https://www.figma.com/design/pCdwCN68j1KGXz3aZZ6Wn0/Literacy-Studio-AI-Tutor?node-id=2095-23824) | 新：克隆 `1947:14236`，标题 “Edit Task”，按钮 “Save & Assign” → “Save” |
| edit task - exit reminder | [`2095:24115`](https://www.figma.com/design/pCdwCN68j1KGXz3aZZ6Wn0/Literacy-Studio-AI-Tutor?node-id=2095-24115) | 新：克隆 `1948:15441`，弹窗改 “Discard edits?” / “All edited information will be lost.” |
| edit task saved | [`1925:17719`](https://www.figma.com/design/pCdwCN68j1KGXz3aZZ6Wn0/Literacy-Studio-AI-Tutor?node-id=1925-17719) | 头部通用改动 + 空态；下移到 y=6998 |

- 已删除：旧 Edit 向导 4 帧 `1925:17797`（step1，阶段开关）、`1925:17863`（step2）、`1925:17933`（step3，Comprehension 开关）、`1925:18034`（exit reminder）。

**第 3 列 · Task detail - preview task（新增）**

| 帧 | node_id | 来源 |
| --- | --- | --- |
| preview task - entry | [`2098:23397`](https://www.figma.com/design/pCdwCN68j1KGXz3aZZ6Wn0/Literacy-Studio-AI-Tutor?node-id=2098-23397) | 修正后的 `1925:16761`，隐藏 Edit tooltip，指针放在 Preview Task 卡上 |
| Preview Task - Mic Check (runs as usual) | [`2098:23757`](https://www.figma.com/design/pCdwCN68j1KGXz3aZZ6Wn0/Literacy-Studio-AI-Tutor?node-id=2098-23757) | 学生端 `1735:5782` |
| Preview Task - Intro | [`2098:23806`](https://www.figma.com/design/pCdwCN68j1KGXz3aZZ6Wn0/Literacy-Studio-AI-Tutor?node-id=2098-23806) | 学生端 `1722:3658`，顶栏任务名改 “Butterfly Life Cycle” |
| Preview Task - Guided Reading | [`2099:23676`](https://www.figma.com/design/pCdwCN68j1KGXz3aZZ6Wn0/Literacy-Studio-AI-Tutor?node-id=2099-23676) | 学生端 `1910:19040` |
| Preview Task - Comprehension (same as student, not saved) | [`2099:23820`](https://www.figma.com/design/pCdwCN68j1KGXz3aZZ6Wn0/Literacy-Studio-AI-Tutor?node-id=2099-23820) | 学生端 `1724:5010` |
| Preview Task - Results (not saved) | [`2099:23930`](https://www.figma.com/design/pCdwCN68j1KGXz3aZZ6Wn0/Literacy-Studio-AI-Tutor?node-id=2099-23930) | 学生端 `1725:5099` |
| preview task - after Exit Preview | [`2099:24071`](https://www.figma.com/design/pCdwCN68j1KGXz3aZZ6Wn0/Literacy-Studio-AI-Tutor?node-id=2099-24071) | 修正后的 `1925:16761` |
| Board · Preview Task rules (PRD §4.1) | [`2100:24154`](https://www.figma.com/design/pCdwCN68j1KGXz3aZZ6Wn0/Literacy-Studio-AI-Tutor?node-id=2100-24154) | 克隆 Home 说明板 `1981:22188`，6 条规则 |

- Preview 横幅：高 48 的 auto layout 横条，底色 `fill/informative/quaternary`，左侧 DS2 `Eye`（20px，`icon/informative`）+ “Preview Mode — Your actions won’t be recorded.”（`text/sm/medium`、`text/primary`），右侧 ShadCN `Button`（Outline / sm）“Exit Preview”；左右内边距 spacing `6`，上下 spacing `2`。先建一份再复制到 5 张学生页顶部：非 auto layout 的帧把原内容下移 48 并加高，auto layout 的帧插到第一个并加高 48。学生页原稿（页面 `Student’s view-AI Tutor`）未改。
- 其他：删除本 section 全部 10 张 `PRD-Review /` 便签（按父单 APAC-6129「每个页面画完后清掉便签」）；左侧加改动说明卡 [`2100:24174`](https://www.figma.com/design/pCdwCN68j1KGXz3aZZ6Wn0/Literacy-Studio-AI-Tutor?node-id=2100-24174)。
- 缺口：
  - Preview 横幅不是组件，5 份是复制的，建议做成业务组件。
  - Assign 弹窗仍是约 1000px 双栏，与 PRD 的 520px + 三段 Accordion 不同。
  - Preview 流程只放了 Mic Check / Intro / Guided Reading / Comprehension / Results 五张学生页；Warm-up、Echo、Your Turn 没有重复画（Your Turn 学生稿还没有）。
- 复核：逐帧截图检查；页面根节点无游离节点；section 内无 `PRD-Review` 便签。
- 结果状态：已完成；待用户确认项见 `决策日志.md` 2026-09-28「Task Detail（APAC-6133）」条目与 `需求文档/待确认问题清单.md` #4–#6。

## 2026-09-28 · 主按钮文案改回 “Assign to Students”

- 任务来源：用户指令「把文案 New Assignment 改成 Assign to Students」。
- 涉及节点：`Task details`（1925:16759）9 帧共 12 个 `Button` 实例：`1925:16761`、`1925:16903`、`1925:17129`、`1925:17403`（各 1 个，头部）；`1925:17567`、`1925:17643`、`1925:17719`（各 2 个，头部 + 空态）；`2098:23397`、`2099:24071`（各 1 个，Preview 列入口与返回帧）。改动说明卡 `2100:24174` 的对应描述同步。
- 操作摘要：`Button Text` 属性 “New Assignment” → “Assign to Students”（保留 + 图标），图层名同步。逐个 section 扫描，其他 section 没有 “New Assignment”。顺带把三张空态帧的说明文字从 FILL 改为 HUG，第二行不再折行。
- 结果状态：已完成；PRD 回写见 `需求文档/待确认问题清单.md` #7。
