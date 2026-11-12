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

## 2026-11-12 · 按最新 PRD（11-08）和原型同步（APAC-6130）

- 任务来源：用户指令「按照最新PRD和原型同步一下」。前一轮核对的结论是：9/30 稿交付后，PRD 又改了三轮，产品也改为以原型为准，9/30 稿已经过时。Linear [APAC-6130](https://linear.app/kira-learning/issue/APAC-6130/student-detail-两栏证据-your-turn-时间线-缺失卡片)。
- 依据：
  - **PR #27776 代码原型**：11-03 产品确认老师端 AI Tutor 的页面去向和交互以它为准（[APACFE-4659](https://linear.app/kira-learning/issue/APACFE-4659)），前端已按原型做完（APACFE-4428、APACFE-4659 均为 Done）。Monitor 的教师标注文案也已按原型改（[APACFE-4890](https://linear.app/kira-learning/issue/APACFE-4890)）。
  - **PRD [Teacher View](https://app.notion.com/p/34e70a1b992481f386b9c2d22bf61531)** §6.0–§6.2，以及 §5.4.2、§5.4.3、§5.4.5、§5.4.6。§6 在 10-20、10-25、11-08 各修订过一轮，Notion 最后编辑时间是 2026-11-11。
  - 相关 Linear 单：APACFE-4835（删除头部常驻说明）、APACFE-4889（没有告警时不显示 Chat Activity）、APACFE-4891（K 年级身份行）、APACPO-468（未完成但有行为提醒）、APACPO-471（开放题录音连播）、APACPO-459（Transcript 只放在复述卡，朗读页不出）、APACPO-472（What Kira said today 收录规则）。
  - 取证限制：原型环境已经下线，staging 账号没有 Literacy Studio 权限，所以原型画面只能靠 Linear 工单里的截图和描述，没法逐屏点开对照。
- 口径：版式和文案按原型；原型没画到的状态按 PRD 补；两边说法不一致的，画板按原型，差异进「待确认问题清单」#21–#32 交 PM 回写。这一条修订了 09-24「UI 文案一律以 PRD 为准」，见 `决策日志.md` 2026-11-12。
- 涉及节点：
  - section `Student detail - AI Tutor` · node_id `286:18332` · [Figma 链接](https://www.figma.com/design/pCdwCN68j1KGXz3aZZ6Wn0/Literacy-Studio-AI-Tutor?node-id=286-18332)。9/30 的 8 帧原地重建（node_id 和页面外壳不变，只换 Content），另新增 2 帧；原稿 6 帧未动。section 现在是 11320 × 8066。
  - Components 页「Student Detail」分区 · node_id `4427:1173` · [Figma 链接](https://www.figma.com/design/pCdwCN68j1KGXz3aZZ6Wn0/Literacy-Studio-AI-Tutor?node-id=4427-1173)：新建 17 个业务组件，清单登记在 `设计执行/规范/figma-preferences.md`「业务组件」。

帧清单（均命名 `Latest · Student Detail · …`，宽 1440）：

| 列 | 帧 | node_id | 学生与状态 |
| --- | --- | --- | --- |
| A（x=5600） | Completed · Used help · Behavior alert (G2–3) | [`2253:29137`](https://www.figma.com/design/pCdwCN68j1KGXz3aZZ6Wn0/Literacy-Studio-AI-Tutor?node-id=2253-29137) | Brandon Lee：Your Turn 点过 1 个词、未标注；1 of 2 correct；开放题 [Content under review]；Kira 5 条；Chat Activity Needs review |
| | Completed · No help · Marked Read it (G2–3) | [`2254:29181`](https://www.figma.com/design/pCdwCN68j1KGXz3aZZ6Wn0/Literacy-Studio-AI-Tutor?node-id=2254-29181) | Carmen Reyes：No help、老师已标 Read it；2 of 2（1 题提示后答对）；开放题有录音 |
| | Completed · Your Turn not offered · Long response (G2–3) | [`2254:29489`](https://www.figma.com/design/pCdwCN68j1KGXz3aZZ6Wn0/Literacy-Studio-AI-Tutor?node-id=2254-29489) | Hannah Wilson：时间线 Your Turn 格写 Not offered；右栏 “Independent attempt skipped this session” + 原因；开放题长回答 3 行截断 + Show more |
| B（x=7200） | Completed · No usable recording · Typed response (G2–3) | [`2257:29424`](https://www.figma.com/design/pCdwCN68j1KGXz3aZZ6Wn0/Literacy-Studio-AI-Tutor?node-id=2257-29424) | Gabriel Martinez：右栏无播放器、无标注，只有一行提示；开放题 “Typed answer, no recording” |
| | Didn't finish · Stopped at Your Turn (G2–3) | [`2257:29708`](https://www.figma.com/design/pCdwCN68j1KGXz3aZZ6Wn0/Literacy-Studio-AI-Tutor?node-id=2257-29708) | Fatima Al-Hassan：Progress “Didn't finish” + “· stopped at Your Turn”；时间线 Stopped here / Didn't get here；右栏 No usable recording + “The task ended at this step.”；没有 Comprehension 卡 |
| | No results yet | [`2257:29973`](https://www.figma.com/design/pCdwCN68j1KGXz3aZZ6Wn0/Literacy-Studio-AI-Tutor?node-id=2257-29973) | Isaac Thompson：身份卡 + 空态 |
| | In progress · Behavior alert（新增） | [`4441:31559`](https://www.figma.com/design/pCdwCN68j1KGXz3aZZ6Wn0/Literacy-Studio-AI-Tutor?node-id=4441-31559) | Emma Rodriguez：身份卡 + Chat Activity + 空态（APACPO-468） |
| | See Conversation drawer（新增） | [`4441:31646`](https://www.figma.com/design/pCdwCN68j1KGXz3aZZ6Wn0/Literacy-Studio-AI-Tutor?node-id=4441-31646) | Brandon 的页面 + 遮罩 + 右侧 ShadCN `Sheet`，内容是 Conversation Detail（Needs review） |
| C（x=8800） | Kindergarten · Oral Retelling as independent evidence | [`2259:29635`](https://www.figma.com/design/pCdwCN68j1KGXz3aZZ6Wn0/Literacy-Studio-AI-Tutor?node-id=2259-29635) | Aaliyah Johnson：没有摘要行，身份卡里写 “Completed · 6m 59s total”；时间线末格 Oral Retelling；右栏复述卡 Ready to listen；不能标注 |
| | Card states | [`2259:29943`](https://www.figma.com/design/pCdwCN68j1KGXz3aZZ6Wn0/Literacy-Studio-AI-Tutor?node-id=2259-29943) | 卡片状态板，6 组（见下） |
| 右侧（x=10400） | Board · Student Detail rules | [`2261:29870`](https://www.figma.com/design/pCdwCN68j1KGXz3aZZ6Wn0/Literacy-Studio-AI-Tutor?node-id=2261-29870) | 规则板重写为 11 条（PRD 11-08 + 原型） |
| 左侧（x=120） | 改动说明 | [`2261:29908`](https://www.figma.com/design/pCdwCN68j1KGXz3aZZ6Wn0/Literacy-Studio-AI-Tutor?node-id=2261-29908) | 改为 6 段中文：以什么为准 / 改了什么 / 组件化 / 画板 / 待 PM 回写 / 原稿 |
| 顶部 | 列标题 | [`2261:29856`](https://www.figma.com/design/pCdwCN68j1KGXz3aZZ6Wn0/Literacy-Studio-AI-Tutor?node-id=2261-29856) | “[Teacher view]  Student detail  - Latest (PRD 11-08 + prototype · APAC-6130)” |

- 和 9/30 帧的对应：三个演示场景改为按状态区分（场景 1 → Used help，场景 2 → No help + Read it，场景 3 → Not offered）；「录音不可用」→ No usable recording；「Exited at Your Turn」→ Didn't finish · Stopped at Your Turn；新增「进行中 + 行为提醒」和「See Conversation 抽屉」两帧。
- 操作摘要：
  - **搭建方式**：先在 Components 页建 17 个业务组件，再用实例拼帧。颜色、间距、圆角绑 DS 2.0 变量，文字挂 DS 2.0 `text/*` 样式，图标用 DS2 Phosphor 实例，抽屉用 ShadCN `Sheet`。顶栏标题从 “Back to Assignment” 改成 “Assignment Monitor”（原型）。
  - **头部**：身份卡 = 头像 + 姓名 + “{task} — AI Tutor · Grade {N} · {date}”。删掉 9/30 的 T8 常驻说明（PRD 10-25、APACFE-4835）。Previous Student / Next Student 放在 Content 右上（原型）。
  - **Summary**：Progress / Comprehension / Your Turn 三张卡。第一行是答案，第二行是支撑事实，卡里不放标签；状态只靠左侧图标颜色（绿 = 顺利，橙 = 值得看，灰 = 没内容）。文案逐字按 PRD §6.2。K 年级不出这一行。
  - **Assignment Timeline**：6 列平铺，细线分隔，只写阶段名 + 时长。不能点、没有进度条，Your Turn 只加一个麦克风图标。异常写 Not offered / Stopped here / Didn't get here（§5.4.5）。
  - **左栏 With Kira's support**：按 Guided Reading 里达到的最高帮助级别分组，每个词只出现一次。“Kira read these words for them” 在前，“Kira gave a hint on these words” 在后；词标签一律灰色，不写次数、不写 cue 原文；空组隐藏，两组都空时写 “No words tapped during Guided Reading.”。
  - **右栏 Your Turn — on their own**：行为标签 + 时长；点过 Help me 时加一行 “They tapped “Help me””；Your Turn 里点过的词按左栏同样两组列出；下面是回放和教师标注 Read it / Needs support / Unclear（原型文案）。Listen once 次数只记录、不显示。No usable recording 时不出播放器和标注，只留一行提示（原型文案），老师结束或窗口到期时再加 “The task ended at this step.”。Not offered 时写 “Independent attempt skipped this session”，原因用 PRD 原句。
  - **Comprehension**：副标题 “{c} of {t} correct · hint answers count as correct”。每题列出全部选项：正确项绿勾、选错的红叉，标 Picked 1st try / Picked after hint / Correct answer，不再单独放正确答案块；状态用文字 badge。Open Response 不标对错，有五种状态：有录音（多段连播）、只打字（“Typed answer, no recording”）、长回答（3 行截断 + Show more）、[Content under review]、Not submitted。
  - **Kindergarten**：没有 Your Turn，也没有摘要行。右栏直接放复述卡（Ready to listen / Cut off early / Too short (under 5s) / No recording），只能回放、不能标注。时间线末格是 Oral Retelling；复述卡在页面上只出现一次（PRD 10-25）。
  - **What Kira said today**：最多 5 条，按时间排，每条只有 “Kira · {time}” + 气泡，不带分类标签（PRD 11-08、APACPO-472）。
  - **Chat Activity**：只在有行为提醒或可复核的对话时出现，不写 “All clear”。一行 = 头像 + 姓名 + 时间 + Needs review / Reviewed + Behavior alert 摘要 + See Conversation。点开是右侧抽屉，页面上不展开学生原话；抽屉内容顺序按 PRD：状态 + 时间 → 题目 → 学生原话 → Kira 回复（标 Fixed line）→ 复核说明 → 复核状态。
  - **卡片状态板**（`2259:29943`）：摘要卡 9 种（3 卡 × 绿 / 橙 / 灰）；Comprehension G4–5 三题（第一次对 / 答错 / 跳过）；Open Response 5 态；Oral Retelling 4 态；Your Turn 4 个行为标签 + 教师标注 4 态；Chat Activity 两种状态的提醒行 + 抽屉两态。
- 设计判断（PRD 和原型都没写到）：
  - Not submitted 用灰色小字；Under review 和 Not submitted 时不显示 Kira 的回复。
  - 复述转写不可用时写 “Transcript unavailable — listen to the recording.”（PRD 只要求「说明转写不可用、请老师直接听」）。
  - Skipped 的题，正确选项也标 “Correct answer”。
  - Kira 的时间用钟点（“Kira · 2:35 PM”）；PRD 只写 “time”。
  - 抽屉标题 “Behavior alert”，副标题 “{name} · {task}”；复核说明等抽屉文案是示意，PRD 只给了结构。
  - 摘要卡不放小标签、分组标题不带数量：从截图看不清原型有没有，按 PRD 原文去掉。
- 踩坑与修正：
  - Your Turn Status、Student Pagination 两个纵向母版默认固定 100 高，改为 hug。
  - Open Response 的 Long 变体原来放的是短文本，看不出截断效果：母版 Answer 设为最多 3 行截断，实例换成长回答。
  - 抽屉 `Sheet` 面板高度只有 867，改为 FILL 撑满 900。
  - 复核时发现画板里 18 个、母版里 144 个文字节点没挂 text style，另有 20 个容器叫 “Text”：按字号和字重挂上 DS 2.0 对应样式（`text/{xs,sm,base,lg,2xl}/{regular,medium,semibold}`），容器改名为 “Copy”。
  - 重建时演示学生的姓和 Monitor Latest 对不上，已改回同一名单（Carmen Reyes、Hannah Wilson、Gabriel Martinez、Fatima Al-Hassan、Isaac Thompson、Emma Rodriguez、Aaliyah Johnson）。进行中帧选 Emma，是因为她在 Monitor「Scheduled · In Progress」帧里停在 Comprehension，开放题提交后才会有行为提醒。其他人的状态不和那一帧对齐：每帧示意的是作业的不同时刻。
- 复核：每帧截图检查。脚本扫描 10 帧 + 17 个母版：非实例节点的填充和描边全部绑定变量、文字全部挂样式、没有默认图层名、帧之间不重叠。抽屉帧固定 900 高、裁掉超出部分，这是有意的。
- 缺口：
  - 原型只能看 Linear 截图，没法逐屏比对；原型没画到的状态是按 PRD 补的。
  - PRD 要求抽屉用 Assessment 学生作答抽屉的同一组件，但本文件里没有这个组件，暂时用 ShadCN `Sheet`。
  - 卡片右上 (i) 的 “How to read this card” 只画了图标，提示内容看不到原型，没有编。
  - 页面渐变底仍沿用原稿（未绑 token）。
  - 截图没有入库（公开仓库，沿用 `Token绑定.md` 和 9/30 的做法）。
- 结果状态：已完成；口径修订见 `决策日志.md` 2026-11-12，PM 待回写见 `需求文档/待确认问题清单.md` #21–#32。
