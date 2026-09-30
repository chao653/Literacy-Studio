# Student Detail（AI Tutor）操作日志

> 类型：AI Tutor Student Detail 页（头部、Summary、Session Timeline、两栏证据、Comprehension / Open Response、K–1 Oral Retelling、What Kira Said Today、Chat Activity、空态）。按日期追加，只增不覆盖。

## 2026-09-30 · 两栏证据 + Your Turn 时间线 + 缺失卡片（APAC-6130）

- 任务来源：Linear [APAC-6130](https://linear.app/kira-learning/issue/APAC-6130/student-detail-两栏证据-your-turn-时间线-缺失卡片)（父单 APAC-6129）；用户指令「帮我做一下这个，原设计稿 node 286-18332」。
- 依据：PRD [Teacher View](https://app.notion.com/p/34e70a1b992481f386b9c2d22bf61531) §6.0–§6.2（T4 / T6 / T8）、§5.3（Your Turn 标签与教师标注在 Monitor 的显示）；PRD [V2.1 Scope](https://app.notion.com/p/3e470a1b992481a2b1e3e0e77b7ac3c1)（Your Turn 取句规则、闸门、中途结束）；APAC-6023 截图与三个演示场景；APAC-6091；`决策日志.md`「UI 文案一律以 PRD 为准」「待确认项先看工单、再看 PRD」。
- 涉及节点：section `Student detail - AI Tutor` · node_id `286:18332` · [Figma 链接](https://www.figma.com/design/pCdwCN68j1KGXz3aZZ6Wn0/Literacy-Studio-AI-Tutor?node-id=286-18332)。原稿 6 个状态帧（x=1032 / 3065 两列）未改，作对照；section 宽度 5751 → 11320。

新增帧（均命名 `Latest · Student Detail · …`）：

| 列 | 帧 | node_id | 覆盖 |
| --- | --- | --- | --- |
| A（x=5600） | Completed · Help and independent (scenario 1) · Brandon Lee | [`2253:29137`](https://www.figma.com/design/pCdwCN68j1KGXz3aZZ6Wn0/Literacy-Studio-AI-Tutor?node-id=2253-29137) | APAC-6023 场景 1；原稿 completed、Chat activity |
| | Completed · All independent, teacher marked (scenario 2) · Carmen Reyes | [`2254:29181`](https://www.figma.com/design/pCdwCN68j1KGXz3aZZ6Wn0/Literacy-Studio-AI-Tutor?node-id=2254-29181) | 场景 2；教师已标注 Read it；原稿 No Chat Activity |
| | Completed · Gate fired, Your Turn did not run (scenario 3) · Hannah Wilson | [`2254:29489`](https://www.figma.com/design/pCdwCN68j1KGXz3aZZ6Wn0/Literacy-Studio-AI-Tutor?node-id=2254-29489) | 场景 3；Open Response 长文 Show more |
| B（x=7200） | Completed · Your Turn recording unavailable · Gabriel Martinez | [`2257:29424`](https://www.figma.com/design/pCdwCN68j1KGXz3aZZ6Wn0/Literacy-Studio-AI-Tutor?node-id=2257-29424) | 录音 / 上传失败 |
| | Ended · Exited at Your Turn · Fatima Al-Hassan | [`2257:29708`](https://www.figma.com/design/pCdwCN68j1KGXz3aZZ6Wn0/Literacy-Studio-AI-Tutor?node-id=2257-29708) | 原稿 exited；老师在 Your Turn 中途结束 |
| | Not started / In progress · No results yet · Isaac Thompson | [`2257:29973`](https://www.figma.com/design/pCdwCN68j1KGXz3aZZ6Wn0/Literacy-Studio-AI-Tutor?node-id=2257-29973) | §6.0 空态；原稿 not started、In progress |
| C（x=8800） | Kindergarten · Completed (independent retelling + Oral Retelling) · Aaliyah Johnson | [`2259:29635`](https://www.figma.com/design/pCdwCN68j1KGXz3aZZ6Wn0/Literacy-Studio-AI-Tutor?node-id=2259-29635) | K 年级右栏独立复述；Oral Retelling 卡 |
| | Card states (Comprehension G4–5, Open Response, Oral Retelling, Your Turn marks) | [`2259:29943`](https://www.figma.com/design/pCdwCN68j1KGXz3aZZ6Wn0/Literacy-Studio-AI-Tutor?node-id=2259-29943) | 卡片状态板 |
| 右侧（x=10400） | Board · AI Tutor rules (PRD §6.0–§6.2) | [`2261:29870`](https://www.figma.com/design/pCdwCN68j1KGXz3aZZ6Wn0/Literacy-Studio-AI-Tutor?node-id=2261-29870) | 规则板，12 条 |
| 左侧（x=120） | 改动说明 · Student Detail (APAC-6130) | [`2261:29908`](https://www.figma.com/design/pCdwCN68j1KGXz3aZZ6Wn0/Literacy-Studio-AI-Tutor?node-id=2261-29908) | — |
| 顶部（x=5600） | Utility / File Section Headers（Latest 列标题） | [`2261:29856`](https://www.figma.com/design/pCdwCN68j1KGXz3aZZ6Wn0/Literacy-Studio-AI-Tutor?node-id=2261-29856) | 克隆 `537:3357` |

- 原稿 6 帧与 Latest 的对应：not started / In progress → No results yet；completed → 场景 1–3；exited → Exited at Your Turn；No Chat Activity → 场景 2；Chat activity conversation → 场景 1 的 Chat Activity（展开后的对话属 APAC-6094，本单只改按钮文案，未重画展开态）。
- 操作摘要：
  - **搭建方式**：新帧不克隆原稿内容（原稿混用 primitive 颜色、有大量隐藏的 “Invite Students” 残留层），按同一套结构重建：白卡片 `surface/layer/primary` + 圆角 `radius/sm` + 内边距 spacing `6` + 卡片间距 spacing `4`；文字全部用 Foundations `text/*` 样式与 `text/*` 颜色；组件用 ShadCN `Button` / `Badge` / `Toggle Group` / `Progress`，图标用 DS2 Icons（Phosphor）。页面外壳（`Assessment -Top nav`、`Global navigation`、页面渐变底）从原稿克隆，顶栏标题 “Assignment Monitor” → “Back to Assignment”。
  - **头部**：头像 + 姓名 + “Butterfly Life Cycle — AI Tutor · Grade 3 · Mar 6, 2026”（原稿 “AI Tutor — Passage Reading · AI Tutor · …” 不符合 PRD 格式）；下方 T8 常驻说明（DS2 `Info` 16 + `text/sm/regular`，与 Task Detail / Monitor 同一写法）；右侧 `← Prev` / `Next →`（ShadCN `Button` Outline / sm + DS2 `ArrowLeft` / `ArrowRight`）。
  - **Summary**：去掉 Cognitive load 横幅；只留完成 chip（`fill/positive/quaternary` + `border/positive` + DS2 `CheckCircle`）与理解 chip（`fill/neutral/subtle`），下方一行 “All evidence on this page comes from one practice session.”；Exited 用 “Exited at Your Turn”（DS2 `StopCircle`），K 年级理解 chip 换成 “Oral Retelling · Recorded”。不画教学信号卡、不留占位。
  - **Session Timeline**：6 格等宽卡片（`fill/neutral/surface`），Your Turn 格用 `fill/brand/secondary/quaternary` + `border/brand` + DS2 `HandPalm`，显示时长与 “N help request(s)”；闸门触发显示 “Did not attempt independently”、不显示时长；中途结束显示 `StopCircle` + 0:18 + “Ended during this phase”；Comprehension 未到达显示 “Not reached”；K 年级第 6 格为 Oral Retelling。每帧各阶段时长加总 = 完成 chip 的时长。
  - **左栏 With Kira's support**：DS2 `Lifebuoy` + 标题；按 “Give a cue” / “Supply the word” 分组并显示条数，每行 = 词（`text/sm/medium`）+ 需求类型（ShadCN `Badge` Outline：Word reading / Meaning / Comprehension）+ 帮助内容（`text/xs/regular`）；某一级为空时写 “None this session …”；底部边界小字 “No per-word scoring — support is shown by how much help was needed.”。
  - **右栏 Your Turn — on their own**：外框 `border/brand` 与左栏区分；标题旁 “No prompts given”；逐句列条目，每句右侧一个行为标签（Attempted · no help = 中性灰 + `CheckCircle`；Asked for help (…) = `fill/warning/quaternary` + `Hand`；Not enough evidence = 中性灰 + `CircleDashed`），学生点过的词在句中用 `text/warning` + `text/sm/medium` 高亮；下方回放块：ShadCN `Button`（Default / icon + DS2 `Play`）+ `Progress`（改为 6px 高，轨道 `fill/neutral/subtle`、进度 `fill/brand/primary/default`）+ 时长；“Tapped “Listen once” N time(s)”（DS2 `SpeakerHigh`，0 次不出这一行）；分隔线后是教师标注 “Your mark after listening” + ShadCN `Toggle Group`（Outline / sm：Read it / Still needs support / Can't tell），选中项切 `State=Pressed` 并显示 DS2 `CheckCircle` Fill（`icon/brand`），提示文字未标注时 “Optional · you can change it”、标注后 “Marked by you · Mar 7, 2026 · you can change it”；底部边界小字。
  - **闸门 / 失败**：闸门 = 灰框提示 “Independent attempt skipped this session” + “Kira supplied 2 of the 3 target words during assisted reading — more than half — so Your Turn did not run. … It is not a negative result.”，左栏对应把 2 个目标词列在 Supply the word 并标 “Target word”；录音失败 = 每句 Not enough evidence + “Recording unavailable” 提示（DS2 `MicrophoneSlash`，写明是技术问题、不是阅读结果），不出回放与标注；中途结束 = Not enough evidence + “Assignment ended during Your Turn” 提示 + 可回放的半段录音（待确认 #17）。
  - **Kindergarten**：右栏加 “Independent retelling” 标签（`fill/brand/secondary/quaternary` + DS2 `Microphone`），说明 “oral-language and comprehension evidence, not word-reading evidence”，条目是复述题目，底部说明只有 Help me，所以求助一律显示 Asked for help (whole stretch)；左栏只有 Supply the word（K 年级 Kira 读整词、不拆音）和 1 条 Meaning cue。
  - **Comprehension**：两列题卡（`fill/neutral/surface`），每卡 = 状态行（Q 号 + 图标 + Correct on first try / Correct after hint / Incorrect / Skipped）+ 题目 + 作答记录（Answer + 1st try / 2nd try / after hint）+ 需要时的 Correct answer 块（`fill/positive/quaternary` + `border/positive`）；副标题 “X of N correct”。下方 Open Response（DS2 `TextAa`，无对错标记）：Student response + Kira's response（`fill/brand/secondary/quaternary`）。
  - **Oral Retelling（K–1）**：DS2 `Microphone` + 标题 + 状态 badge + “Playback only …” 说明；播放器 + “57s / 120s max”；“Transcript (auto-generated)” 用 ShadCN `Button` Ghost / sm + `CaretDown`，默认收起。
  - **卡片状态板**（`2259:29943`，底色 `surface/layer/secondary`）：Comprehension G4–5 三题（第一次对 / 提示后对 / 跳过，2 of 3）；Open Response 6 态（≤500 字、前 500 字 + Show more、展开 + Show less、5000 字上限 “(truncated)”、Not submitted、[Content under review]）；Oral Retelling 5 态（Recorded、Recorded 展开字幕、Partial recording (38s)、Too short to evaluate、Not recorded 无播放器）；Your Turn 4 种行为标签 + 教师标注 4 态（未标注 / Read it / Still needs support / Can't tell）。
  - **What Kira Said Today**：每帧 2–5 条，按时间排序、时间落在对应阶段区间内；“You said 'butterflies' — the text says 'butterfly'. Try again.” 换成帮助阶梯示例（“Let’s break it into parts: chrys · a · lis.” / “This word is spun. Now keep reading.”）。
  - **Chat Activity**：只在场景 1 出现（有 Behavior alert），一行 = 头像 + 时间 + “Needs review” + 下划线 “Behavior alert” + 摘要 + “See Conversation”（原稿 “Show Conversation”）；原稿两条 alert 改为一条（安全检查只在开放题提交后跑一次），同帧开放题显示 [Content under review]。
- 演示数据：与 Monitor Latest（APAC-6131）同一批学生、同一组数字——Brandon Lee（Asked for help (chrysalis)、1/2、Word reading 5 · Meaning 2 · Comprehension 1）、Carmen Reyes（Attempted · no help → Read it (teacher)、2/2、Word reading 1）、Hannah Wilson（Did not attempt independently、2/2、Word reading 7 · Meaning 2）、Fatima Al-Hassan（Ended · Your Turn · Not enough evidence、Word reading 2）、Aaliyah Johnson（K–1 帧，Word reading 3 · Meaning 1）。Your Turn 句子只取 Kira 没有直接供词的句子（原型场景 1 把已供词的 chrysalis 放进了 Your Turn，已修正）。
- 踩坑与修正：
  - ShadCN `Progress` 默认 16px 高、进度条为近黑色（`base/primary`），与紫色播放按钮不协调；改为 6px，轨道与进度分别绑 `fill/neutral/subtle` / `fill/brand/primary/default`。
  - `Toggle` 的 Pressed 态只是浅灰底，一眼看不出选中；选中项加实心勾选图标（组件自带的 Icon 槽位）。
  - 头像底色先用了 `fill/neutral/secondary`（深灰），改为 `fill/neutral/subtle` + `text/tertiary`，与原稿一致。
  - `$fig.clone` 的列标题落在了页面根节点，手动移回 section。
- 复核：逐帧截图检查；脚本扫描 10 个新节点无零宽 / 溢出文字、无默认图层名、非实例节点的填充与描边全部绑定 token、文字全部挂 text style；新帧之间及与原稿无重叠；本 section 没有 `PRD-Review /` 便签。
- 缺口：
  - 新卡片（证据两栏、题卡、Open Response、Oral Retelling）没有做成业务组件，状态板里的各状态是按同一结构逐个搭的，建议后续收进 Components section。
  - 页面渐变底沿用原稿（未绑 token），与同文件其他页面一致。
  - Chat Activity 展开后的对话（See Conversation 展开态）属 APAC-6094，未重画。
- 结果状态：已完成；待确认项见 `决策日志.md` 2026-09-30「Student Detail（APAC-6130）」条目与 `需求文档/待确认问题清单.md` #17–#20。
