# 学生端 Player 顶栏操作日志

> 类型：学生端页面 `Student’s view-AI Tutor` 的 `Player Top Bar` 组件，以及各步骤帧页面上的步骤标签。按日期追加，只增不覆盖。

## 2026-11-16 · 顶栏按 Student View 10-24 版改为只有 Home、一条进度条、奖杯；步骤写到页面上（R1 #51）

- 任务来源：用户指令「把设计稿没有同步的地方先改一下」；`走查/R1_修改清单.md` #51（Preview 顶栏和学生端是同一个组件，一起改）。
- 依据：PRD [Student View](https://app.notion.com/p/34e70a1b99248122af86e22655dad2ca) §3 “Player top bar (10-24)”：顶栏只有左上 Home、一条进度条和末端奖杯，不列步骤名；步骤号写在页面上 “Step N of M · step name”，从 Warm-up 开始编号，Intro 和结果页不编号，Echo 和 Echo Complete 算一步；Kindergarten 没有 Your Turn 是 4 步，Grades 1–5 是 5 步。
- 涉及节点：
  - 组件集 `Player Top Bar` · node_id `3620:24677` · [Figma 链接](https://www.figma.com/design/pCdwCN68j1KGXz3aZZ6Wn0/Literacy-Studio-AI-Tutor?node-id=3620-24677)（section `Components` `3494:20656`）
  - section `AI Tutor` · node_id `3218:23201` · [Figma 链接](https://www.figma.com/design/pCdwCN68j1KGXz3aZZ6Wn0/Literacy-Studio-AI-Tutor?node-id=3218-23201)
- 操作摘要：
  - **组件**：13 个非 Review 变体全部隐藏 Title 块和 “Up Next”；进度轨道和底色改为填满（850 → 1226），已完成段和 Kira 位置按比例放大；Done 变体奖杯点亮。Review 变体（只有 Home）没动。页面上 94 个实例随组件更新。
  - **步骤标签**：77 张步骤帧加一行 `Step label`（顶栏下方居中，宽 600，`text small/leading-normal/regular` + `base/muted-foreground`）。数量：
    - Steps=5：“Step 1 of 5 · Learn the words” 7、“Step 2 of 5 · Read along with Kira” 15、“Step 3 of 5 · Read the story” 12、“Step 4 of 5 · Read on your own” 9、“Step 5 of 5 · Answer questions” 16。
    - Steps=4：“Step 1 of 4 · Learn the words” 2、“Step 2 of 4 · Read along with Kira” 4、“Step 3 of 4 · Read the story” 6、“Step 4 of 4 · Tell the story” 6。
    - Intro、结果页、Ended / Expired 回看页不加。
- 设计判断：步骤名用学生能看懂的说法，同 `Task Detail.md` 同日条目。PRD 只给了格式，没给每步的名字。
- 复核：截图检查 `3887:25807`（Warm-up G3–5）、`3923:25783`（Echo G3–5）、`4061:31214`（Your Turn G3–5）、`4073:31647`（Your Turn Wrap）、`4090:31433`（Retell K–2）。顶栏只剩 Home、进度条和奖杯，标签不和卡片重叠。
- 缺口（需用户确认）：
  - 学生端帧按 “K–2” 一组画成 4 步（顶栏 Steps=4，标签 “of 4”）。PRD 写的是只有 Kindergarten 是 4 步，Grades 1–5 是 5 步。本次照原分组加标签，没改分组。
  - 这个页面可能另有负责人，组件改动需要对方知悉。
- 结果状态：已完成；K–2 分组待用户确认。
- 截图证据：本仓库为 GitHub 公开仓库，设计稿截图未入库。
