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

## 2026-09-28 · Preview 页面改为与学生端页面一一对应

- 任务来源：用户指令「preview 的页面，看的是学生考试的页面，所以需要与学生端这里（node 1719-7766）的相应页面一样，检查并修改」。
- 检查结果：原 5 张预览页与学生端源页面逐节点比对，只有 Intro 顶栏标题被我改成了 “Butterfly Life Cycle”（学生端为 “AI Tutor — [original Screener Task Name]”）；另外只挑了 5 个步骤，Warm-up、Echo 等整段缺失。
- 操作摘要：
  - 删除原 5 张预览页（`2098:23757`、`2098:23806`、`2099:23676`、`2099:23820`、`2099:23930`），按学生端 `Section 2`（1719:7766）的 happy path 重建为 5 列，每张都是学生端页面的未改动副本，命名 “Preview · [学生页名]”，只在顶部加 Preview 横幅（原内容整体下移 48，不改学生页内部）。只有悬停态（Hover / Mic Hover / Pronunciation Playing）和处理中（Processing）没有重复。
  - 列与页面（共 32 张）：
    - Start & Mic Check（x=5793）：Task Detail 入口 `2098:23397` → Mic Check - Request Permission `2118:24215` → Browser Permission Prompt `2118:24248` → Listening `2118:24283` → Passed `2118:24329` → Headphone Question `2118:24363`（学生端也是占位页，横幅改为绝对定位 + 顶部内边距 48，占位文字位置与学生端一致）。
    - Intro & Vocabulary Warm-Up（x=7753）：Intro - Meet Kira `2118:33545`、Intro - Continue Available `2118:33589`、Warm-Up Word 1 Kira Speaking `2118:33633`、Word 1 Navigation Available `2118:33782`、Word 2 Kira Speaking `2118:33931`、Word 3 Kira Speaking `2118:34080`、Word 3 Navigation Available `2118:34229`。
    - Echo Reading (Grade 3–5)（x=9713）：Listen to Kira `2118:34937` → Kira Reading `2118:35041` → Student Turn Prompt `2118:35145` → Student Turn `2118:35247` → Recording `2118:35356` → Feedback 3 Stars `2118:35504` → Next Sentence `2118:35612` → Echo Reading - Complete `2118:35722`。
    - Guided Reading（x=11673）：Start from Echo Complete `2118:36139` → Choose How to Start `2118:36177` → Kira Reading `2118:36326` → Recording `2118:36475`。
    - Comprehension & Results（x=13633）：Question 1 of 2 `2118:36615` → Answer Selected `2118:36723` → Correct Answer `2118:36832` → Open Response Prompt `2118:36942` → Question 2 of 2 `2118:37025` → Open Response Input `2118:37133` → Open Response Submitted `2118:37216` → Results - Completed `2118:37315` → Exit Preview 返回 Task Detail `2099:24071`。
  - 新增 4 个列头（`2118:24159`、`2118:24173`、`2118:24187`、`2118:24201`），原列头 `1925:18136` 改名；规则板 `2100:24154` 移到 x=15593，最后一条改为「Same pages as the student side」；改动说明卡同步。section 尺寸 8300×9816 → 16713×10121。
  - 学生端 “Join - Task Preview” 是占位页（“Placeholder · §2.1”），没有放进预览。
- 复核：32 张预览页与学生端源页面逐节点比对（名称、类型、尺寸、位置、可见性、文字），全部一致；唯一差异是 Warm-Up 3 张里 “Message Bubble” 内布尔运算 `Union` 的包围盒尺寸（复制后重新计算），截图对比外观一致。
- 结果状态：已完成。Your Turn 学生页尚未设计（APAC-6085），预览中暂缺。

## 2026-09-28 · 去掉 Preview 列里重复的 Task Detail 页

- 任务来源：用户指令「这个流程（node 1925-18136）为什么没改？重复吗？重复就去掉」。
- 原因：Start & Mic Check 列顶部的 “Task detail - preview task - entry”（`2098:23397`）和 Comprehension & Results 列末尾的 “Task detail - preview task - after Exit Preview”（`2099:24071`）都是教师端 Task Detail 页，不属于学生页，所以上一轮没有跟着换；内容与第 1 列 “Task detail - with assignments”（`1925:16761`）相同（入口帧只多一个指针），属于重复。
- 操作摘要：删除这两帧；Start & Mic Check 列 5 张学生页上移，从 y=605 开始；规则板 Entry / Exit Preview 两条改为指向第 1 列 “Task detail - with assignments”；改动说明卡同步。section 高度保持 9816。
- 结果状态：已完成；Preview 5 列现在只含学生页（共 32 张）。

## 2026-09-28 · 去掉 Preview 的 Start & Mic Check 列

- 任务来源：用户指令「这个流程（node 1925-18136）下面的五个页面明明都还在啊」——上一条「重复就去掉」指的是这一列的 5 张 Mic Check 页，不是上方的 Task Detail 页。
- 操作摘要：删除 `2118:24215`（Request Permission）、`2118:24248`（Browser Permission Prompt）、`2118:24283`（Listening）、`2118:24329`（Passed）、`2118:24363`（Headphone Question）及列头 `1925:18136`；其余 4 个 Preview 列与规则板整体左移一列（Intro & Warm-Up x=5793、Echo x=7753、Guided x=9713、Comprehension & Results x=11673、规则板 x=13633），section 宽度 16713 → 14753。规则板 “What runs” 保留 “Mic Check (runs as usual)”，最后一条注明 Mic Check 与学生端 “Happy Path 1: Start & Mic Check” 完全相同、不重复放；改动说明卡同步为「第 3–6 列、27 张」。
- 结果状态：已完成；Preview 现为 4 列 27 张学生页。

## 2026-09-29 · Preview 去掉额外预览条，Exit Preview 放进学生顶栏

- 任务来源：用户指令「preview 按照这个（node 2118-33633）来改，去掉多余的 top bar」。样板由用户手改：删除 Preview 横幅，学生顶栏 `Container` 里的 “Home” 按钮改为 “Exit Preview”（`Button` Outline / default，左图标换成 ArrowLeft `1780:6583`），帧高恢复为学生页原高度。用户同时已手改两张 Intro 页（删横幅，顶栏文字改 “Exit Preview”），但帧高仍是 798。
- 操作摘要（其余 24 张）：
  - 删除 Preview 横幅：auto layout 帧直接删并把固定高度减 48；非 auto layout 帧（Comprehension 7 张、Results）删后子元素上移 48、帧高减 48（不触发约束）。
  - Warm-Up / Echo / Guided / Comprehension 共 23 张：顶栏 `Container` 内 “Home” 按钮改为 “Exit Preview” + ArrowLeft，与样板相同。
  - Results - Completed：顶栏是普通 frame 的 “← Home” 文字，改为 “← Exit Preview”。
  - 两张 Intro 页帧高 798 → 750。
  - 4 列按新高度重新排布（间距 200）。规则板 “Preview banner” 改为 “Exit Preview in the top bar”，最后一条同步；改动说明卡「第 3–6 列」与「待确认」同步。
- 复核：27 张与学生端源页面逐节点比对，差异只剩顶栏 “Exit Preview” 文案与 House → ArrowLeft 图标（Intro / Results 为纯文字），无横幅，帧高全部与源页面一致。
- 结果状态：已完成；PRD 的预览提示文案现在不显示、Results 页右下 “Back to Home” 未改，均列入待确认。
