# APACUIX-543 评论存档

> `Linear/AGENTS.md` 默认草稿不代发；这条按用户 2026-11-16 指示「除了需要我改的，把剩下的问题写到 APACUIX-543 评论区」直接发了，[评论链接](https://linear.app/kira-learning/issue/APACUIX-543/design-qa#comment-c5d2e781)。
> 下面是发出去的正文。正文来自 `走查/R1_修改清单.md` 和 [PR #12](https://github.com/chao653/Literacy-Studio/pull/12) 的逐条问题；截图用的是工单描述里已上传的 Linear 图片地址，要登录 Linear 才能看，仓库里的原图在 `走查/截图/`。

---

**R1 走查 · 剩余待改问题（11-16 整理）**

共 37 条，都是 staging 要改的：已确认 31 条、设计判断 6 条。每条的问题、验证链接和截图放在一起，编号和描述里一致。11-16 已按验证链接逐条复核，这 37 条都仍能复现。

这条评论里没有的：

* 需用户确认的 9 条（第 2、16、18、19、22、23、28、29、47 条），等拍板后再派。
* 设计稿自身的 5 条（第 9、48–51 条），11-16 已在 Figma 改完；第 50 条核对 PRD 后改为已确认。描述里这几条的状态以这条评论为准。

第 1、10、33 条里设计稿的部分 11-16 已同步，staging 还要改。

**最优先**：第 31 条（Monitor 状态筛选）、第 43–45 条（Preview）、第 36–40 条（Student Detail 文案）、第 1、3、6 条（Reading Screener 改名）、第 10–15 条（创建向导 Step 1）。

**验证前须知**

* 打开 staging 链接前先切到 **Teacher** 角色（Home 页左下角点角色名切换；Admin 进 Literacy Studio 是 403）。
* 弹窗只看不提交，都点 Cancel。
* **走到 Step 3**：[创建向导](https://staging.kira-learning.com/ai-tools/literacy-studio/create/?from=all-tasks) 选 AI Tutor、填任务名、Grade 3 → Continue → Paste Text，贴一段 150–250 词的文字 → Continue，等约 30 秒生成。看完点左上 ← 再选 Discard，不会留下草稿。
* 截图里的账号姓名和邮箱已替换成 “Test User” / “student@example.com”，Quick Assign 弹窗的学生行已遮住。

---

## Dashboard、All Tasks 与 Reading Screener 入口

### 1. 界面仍叫 “Screener”，没改成 “Reading Screener”

**已确认** · 待改（11-16 设计稿已同步，staging 待改）

- **问题**：11-05 改名没落地：界面上仍叫 “Screener”，PRD 已改为 “Reading Screener”
- **位置**：All Tasks 类型下拉、创建向导 Step 1 类型卡、Quick Assign 来源行、已分配提示
- **怎么验证**：[All Tasks](https://staging.kira-learning.com/ai-tools/literacy-studio/all-tasks/) 点 “All Types” 下拉；[创建向导](https://staging.kira-learning.com/ai-tools/literacy-studio/create/?from=all-tasks) Step 1 类型卡；Quick Assign 打开方式见第 6 条；已分配提示见第 3 条
- **设计稿**：[`1947:13072`](https://www.figma.com/design/pCdwCN68j1KGXz3aZZ6Wn0/Literacy-Studio-AI-Tutor?node-id=1947-13072)、[`2052:17659`](https://www.figma.com/design/pCdwCN68j1KGXz3aZZ6Wn0/Literacy-Studio-AI-Tutor?node-id=2052-17659)
- **依据**：P-02；[PRD Teacher View](https://app.notion.com/p/34e70a1b992481f386b9c2d22bf61531) 开头改名说明（11-05）、§2.3、§3.2、§7.4
- **建议**：所有面向老师的显示名统一换成 “Reading Screener”（只改显示名，不动数据）；设计稿 11-16 已改

R1-03：All Tasks 类型下拉

![R1-03](https://uploads.linear.app/c3f6b71f-56a8-4cb4-a685-4edb2314f811/0cc6e381-e17c-4cd5-ab67-dc578c74e73b/3194d584-afba-4049-b761-321f12533f77)

R1-04：创建向导 Step 1，未选类型

![R1-04](https://uploads.linear.app/c3f6b71f-56a8-4cb4-a685-4edb2314f811/67700e4b-e071-4cba-aec8-13863f4e3666/103dc5ce-ac62-46a2-9d7b-555bf327e63d)

R1-02：Quick Assign 弹窗（默认 Scheduled）

![R1-02](https://uploads.linear.app/c3f6b71f-56a8-4cb4-a685-4edb2314f811/513cebde-1f41-4cf6-bc74-9e640e1678ab/8c704215-1e76-4c40-818d-65e2b138ee36)

R1-01：Dashboard（打开了 Needs Attention 面板，悬停 “Assigned” 的提示）

![R1-01](https://uploads.linear.app/c3f6b71f-56a8-4cb4-a685-4edb2314f811/41babdf9-fd0a-41bd-a39a-2cf2a22893a5/42d661e2-d13a-4d1e-873b-f9ec64bfca98)

R1-27：Reading Screener Monitor，悬停 “Assigned” 的提示

![R1-27](https://uploads.linear.app/c3f6b71f-56a8-4cb4-a685-4edb2314f811/2622da0a-8d20-4d11-9ddd-de3acedc1d8b/1e18580c-d9ab-481c-833d-8d12c4d17a94)

### 3. 已分配提示多了 “from this Screener assignment”

**已确认** · 待改

- **问题**：已分配提示写成 “AI Tutor already assigned from this Screener assignment”（推荐面板为 “AI Tutor is already assigned from this Screener assignment.”），PRD 为 “AI Tutor already assigned”
- **位置**：Dashboard Needs Attention 面板 “Assigned” 悬停提示、Reading Screener Monitor Actions 列悬停提示、Reading Screener Student Detail 推荐面板已分配说明
- **怎么验证**：[Dashboard](https://staging.kira-learning.com/ai-tools/literacy-studio/) 点 Needs Attention 卡，悬停第 1 页任一 “Assigned”；[Screener Monitor](https://staging.kira-learning.com/ai-tools/literacy-studio/task/01a1a4bf-a0c7-72d2-a132-4ef9446fbc7f/session/01a1a4ee-b010-762d-966e-9070b8c8fe6a/) 悬停 Actions 列 “Assigned”；[Screener Student Detail](https://staging.kira-learning.com/ai-tools/literacy-studio/task/01a1a4bf-a0c7-72d2-a132-4ef9446fbc7f/session/01a1a4ee-b010-762d-966e-9070b8c8fe6a/student/0196ec29e03077fc9d420a91f5543373/) 右侧推荐面板底部
- **设计稿**：[`2072:22227`](https://www.figma.com/design/pCdwCN68j1KGXz3aZZ6Wn0/Literacy-Studio-AI-Tutor?node-id=2072-22227) 已是 PRD 写法
- **依据**：P-01、P-02；[PRD](https://app.notion.com/p/34e70a1b992481f386b9c2d22bf61531) §7.4 推荐面板状态
- **建议**：三处统一改为 “AI Tutor already assigned”

R1-01：Dashboard（打开了 Needs Attention 面板，悬停 “Assigned” 的提示）

![R1-01](https://uploads.linear.app/c3f6b71f-56a8-4cb4-a685-4edb2314f811/41babdf9-fd0a-41bd-a39a-2cf2a22893a5/42d661e2-d13a-4d1e-873b-f9ec64bfca98)

R1-27：Reading Screener Monitor，悬停 “Assigned” 的提示

![R1-27](https://uploads.linear.app/c3f6b71f-56a8-4cb4-a685-4edb2314f811/2622da0a-8d20-4d11-9ddd-de3acedc1d8b/1e18580c-d9ab-481c-833d-8d12c4d17a94)

### 4. 推荐面板缺目标词、“What this passage needs” 和 Fixed sequence

**已确认** · 待改

- **问题**：推荐面板没有列出目标词，也没有 “What this passage needs” 来源标签；设计稿里有的 “Fixed sequence” 标记也没有
- **位置**：Reading Screener Student Detail 推荐面板
- **怎么验证**：[Screener Student Detail](https://staging.kira-learning.com/ai-tools/literacy-studio/task/01a1a4bf-a0c7-72d2-a132-4ef9446fbc7f/session/01a1a4ee-b010-762d-966e-9070b8c8fe6a/student/0196ec29e03077fc9d420a91f5543373/) 右侧 “Recommended AI Tutor Plan”
- **设计稿**：[`2066:19598`](https://www.figma.com/design/pCdwCN68j1KGXz3aZZ6Wn0/Literacy-Studio-AI-Tutor?node-id=2066-19598)、[`2072:22227`](https://www.figma.com/design/pCdwCN68j1KGXz3aZZ6Wn0/Literacy-Studio-AI-Tutor?node-id=2072-22227) 已画
- **依据**：P-02；[PRD](https://app.notion.com/p/34e70a1b992481f386b9c2d22bf61531) §7.4（Phase 1 目标词只用 “What this passage needs” 一档）
- **建议**：按设计稿补目标词和 “What this passage needs” 标签、“Fixed sequence” 标记；文案不要暗示是按学生个人错词定制

R1-28：Reading Screener Student Detail 推荐面板

![R1-28](https://uploads.linear.app/c3f6b71f-56a8-4cb4-a685-4edb2314f811/c3fd669b-ce1c-4a1a-b3ad-19e2c8e07f9b/0f2bb465-7f86-415c-93cc-14eb62d72c8f)

### 5. 推荐面板步骤名不对

**已确认** · 待改

- **问题**：步骤名写成 “Warm-up”、“Comprehension”；PRD 为 “Vocabulary Warm-up”，最后一步 G1 为 “Oral Retelling”、G2–5 为 “Comprehension Check”
- **位置**：推荐面板步骤列表
- **怎么验证**：[Screener Student Detail](https://staging.kira-learning.com/ai-tools/literacy-studio/task/01a1a4bf-a0c7-72d2-a132-4ef9446fbc7f/session/01a1a4ee-b010-762d-966e-9070b8c8fe6a/student/0196ec29e03077fc9d420a91f5543373/) 推荐面板里的 6 个步骤
- **依据**：P-02；[PRD](https://app.notion.com/p/34e70a1b992481f386b9c2d22bf61531) §7.4（10-25 按年级列 6 步）
- **建议**：按 PRD 改步骤名，最后一步按来源年级显示

R1-28：Reading Screener Student Detail 推荐面板

![R1-28](https://uploads.linear.app/c3f6b71f-56a8-4cb4-a685-4edb2314f811/c3fd669b-ce1c-4a1a-b3ad-19e2c8e07f9b/0f2bb465-7f86-415c-93cc-14eb62d72c8f)

### 6. Quick Assign 的 Passage 行显示正文片段，不是篇目名

**已确认** · 待改

- **问题**：Passage 行显示的是正文开头片段（“Plants use sunlight, water…”），后面跟 “(same as Screener)”；PRD 要显示篇目名
- **位置**：Quick Assign 弹窗 Passage 行
- **怎么验证**：[Dashboard](https://staging.kira-learning.com/ai-tools/literacy-studio/) 点 Needs Attention 卡 → 翻到有 “AI Tutor” 按钮的页（11-16 在第 2 页）→ 点任一行 “AI Tutor”，看 Passage 行；看完点 Cancel，不要点 Assign
- **设计稿**：[`2052:17659`](https://www.figma.com/design/pCdwCN68j1KGXz3aZZ6Wn0/Literacy-Studio-AI-Tutor?node-id=2052-17659)
- **依据**：P-02；[PRD](https://app.notion.com/p/34e70a1b992481f386b9c2d22bf61531) §7.4 Step 1
- **建议**：改为 “[Passage Name] (same as Reading Screener)”

R1-02：Quick Assign 弹窗（默认 Scheduled）

![R1-02](https://uploads.linear.app/c3f6b71f-56a8-4cb4-a685-4edb2314f811/513cebde-1f41-4cf6-bc74-9e640e1678ab/8c704215-1e76-4c40-818d-65e2b138ee36)

### 7. Quick Assign 的 Scheduled 说明句不对

**已确认** · 待改

- **问题**：写成 “Students can start and continue any time in the window. Self-paced.”
- **位置**：Quick Assign 弹窗 Scheduled 说明
- **怎么验证**：按第 6 条打开 Quick Assign，Mode 默认 Scheduled，看下面的说明句
- **依据**：P-02；[PRD](https://app.notion.com/p/34e70a1b992481f386b9c2d22bf61531) §7.4 Mode
- **建议**：改为 “Students can start any time in the window and pick up where they left off.”

R1-02：Quick Assign 弹窗（默认 Scheduled）

![R1-02](https://uploads.linear.app/c3f6b71f-56a8-4cb4-a685-4edb2314f811/513cebde-1f41-4cf6-bc74-9e640e1678ab/8c704215-1e76-4c40-818d-65e2b138ee36)

### 8. Quick Assign 去向提示的大小写和标点不对

**已确认** · 待改

- **问题**：写成 “A new AI Tutor task and assignment will be created.”，与 PRD 原文大小写、标点不同
- **位置**：Quick Assign 弹窗底部去向提示
- **怎么验证**：按第 6 条打开 Quick Assign，看弹窗底部
- **依据**：P-02；[PRD](https://app.notion.com/p/34e70a1b992481f386b9c2d22bf61531) §7.4 去向提示
- **建议**：按 PRD 原文：“A new AI Tutor task and Assignment will be created”；另一种情况 “A new Assignment will be created” 一并核对

R1-02：Quick Assign 弹窗（默认 Scheduled）

![R1-02](https://uploads.linear.app/c3f6b71f-56a8-4cb4-a685-4edb2314f811/513cebde-1f41-4cf6-bc74-9e640e1678ab/8c704215-1e76-4c40-818d-65e2b138ee36)

## 创建向导

### 10. Step 1 的 Task Type 不在第一位

**已确认** · 待改（11-16 设计稿已同步，staging 待改）

- **问题**：Task Type 排在 Task Name、Grade、Language 下面；PRD 11-05 改为左栏第一项。设计稿 11-16 已改
- **位置**：创建向导 Step 1
- **怎么验证**：[创建向导](https://staging.kira-learning.com/ai-tools/literacy-studio/create/?from=all-tasks) Step 1 左栏，字段顺序是 Task Name → Grade Level → Language → Task Type
- **设计稿**：[`1947:13006`](https://www.figma.com/design/pCdwCN68j1KGXz3aZZ6Wn0/Literacy-Studio-AI-Tutor?node-id=1947-13006)、[`1947:13072`](https://www.figma.com/design/pCdwCN68j1KGXz3aZZ6Wn0/Literacy-Studio-AI-Tutor?node-id=1947-13072)
- **依据**：P-03；[PRD](https://app.notion.com/p/34e70a1b992481f386b9c2d22bf61531) §3.2 Task identity fields（11-05 APACFE-4690）
- **建议**：Task Type 移到左栏最上方

R1-04：创建向导 Step 1，未选类型

![R1-04](https://uploads.linear.app/c3f6b71f-56a8-4cb4-a685-4edb2314f811/67700e4b-e071-4cba-aec8-13863f4e3666/103dc5ce-ac62-46a2-9d7b-555bf327e63d)

R1-05：创建向导 Step 1，选 AI Tutor（G3）

![R1-05](https://uploads.linear.app/c3f6b71f-56a8-4cb4-a685-4edb2314f811/2b41a6c7-19d1-4e74-bd3a-fa4e186c9111/06545d11-9d08-4b89-9dd8-a5040cf09251)

### 11. Step 1 右栏说明卡没和类型卡对齐

**已确认** · 待改

- **问题**：说明卡顶部和 Task Name 对齐，高度也比类型卡小；PRD 要求顶部与类型卡对齐、同高
- **位置**：Step 1 右栏 “Choose a task type” 说明卡
- **怎么验证**：[创建向导](https://staging.kira-learning.com/ai-tools/literacy-studio/create/?from=all-tasks) 先不选类型，看右栏说明卡（11-16 量得：顶部与 Task Name 齐平，高 92px；类型卡高 126px）
- **依据**：[PRD](https://app.notion.com/p/34e70a1b992481f386b9c2d22bf61531) §3.2 Right column（11-05）
- **建议**：第 10 条改完后，说明卡顶部对齐类型卡、高度与类型卡一致

R1-04：创建向导 Step 1，未选类型

![R1-04](https://uploads.linear.app/c3f6b71f-56a8-4cb4-a685-4edb2314f811/67700e4b-e071-4cba-aec8-13863f4e3666/103dc5ce-ac62-46a2-9d7b-555bf327e63d)

### 12. Step 1 步骤卡阶段名不对

**已确认** · 待改

- **问题**：阶段名写成 “Warm-up”、“Comprehension”；PRD 为 “Vocabulary Warm-up”、G2–5 “Comprehension Check”、K–1 “Oral Retelling”
- **位置**：Step 1 选 AI Tutor 后的步骤卡
- **怎么验证**：[创建向导](https://staging.kira-learning.com/ai-tools/literacy-studio/create/?from=all-tasks) 选 AI Tutor、Grade 3，看右侧步骤卡
- **依据**：P-03；[PRD](https://app.notion.com/p/34e70a1b992481f386b9c2d22bf61531) §3.2 Session Phases
- **建议**：按 PRD 改阶段名，最后一步按年级切换

R1-05：创建向导 Step 1，选 AI Tutor（G3）

![R1-05](https://uploads.linear.app/c3f6b71f-56a8-4cb4-a685-4edb2314f811/2b41a6c7-19d1-4e74-bd3a-fa4e186c9111/06545d11-9d08-4b89-9dd8-a5040cf09251)

### 13. Step 1 步骤卡缺 Fixed sequence 和 “New” 标签

**设计判断** · 待改

- **问题**：步骤卡没有 “Fixed sequence” 标记和下面那句 “Every session runs all six phases in this order…”；Your Turn 也没有 “New” 标签（设计稿有）
- **位置**：Step 1 步骤卡
- **怎么验证**：同第 12 条
- **设计稿**：[`1947:13072`](https://www.figma.com/design/pCdwCN68j1KGXz3aZZ6Wn0/Literacy-Studio-AI-Tutor?node-id=1947-13072) 已有
- **依据**：P-03；[PRD](https://app.notion.com/p/34e70a1b992481f386b9c2d22bf61531) §3.2（参考做法，最终样式由设计定）
- **建议**：按设计稿补 “Fixed sequence” 标记、说明句和 “New” 标签

R1-05：创建向导 Step 1，选 AI Tutor（G3）

![R1-05](https://uploads.linear.app/c3f6b71f-56a8-4cb4-a685-4edb2314f811/2b41a6c7-19d1-4e74-bd3a-fa4e186c9111/06545d11-9d08-4b89-9dd8-a5040cf09251)

### 14. Step 1 缺 Session Type（Reading / Phonics）

**已确认** · 待改

- **问题**：没有 Session Type 行（Reading / Phonics），看不到 Phonics 的 Preview 入口
- **位置**：Step 1 选 AI Tutor 后
- **怎么验证**：同第 12 条，步骤卡上方没有 Session Type 行
- **设计稿**：[`1947:13072`](https://www.figma.com/design/pCdwCN68j1KGXz3aZZ6Wn0/Literacy-Studio-AI-Tutor?node-id=1947-13072) 已有
- **依据**：[PRD](https://app.notion.com/p/34e70a1b992481f386b9c2d22bf61531) §3.2 Session Type（Phonics 可见、标 Preview、不能保存）
- **建议**：补 Session Type：Reading 默认选中；Phonics 可点，显示 “Coming soon”，Step 3 不能保存

R1-05：创建向导 Step 1，选 AI Tutor（G3）

![R1-05](https://uploads.linear.app/c3f6b71f-56a8-4cb4-a685-4edb2314f811/2b41a6c7-19d1-4e74-bd3a-fa4e186c9111/06545d11-9d08-4b89-9dd8-a5040cf09251)

### 15. 时长显示格式不对

**已确认** · 待改

- **问题**：显示格式不对：Step 1 为 “About 5-7 min · AI estimate”；PRD 为 “~{low}-{high} min”，说明文字 “Self-paced · AI estimated”
- **位置**：Step 1 步骤卡时长、Step 3 头部时长
- **怎么验证**：Step 1 同第 12 条；Step 3 按开头「走到 Step 3」的步骤
- **依据**：[PRD](https://app.notion.com/p/34e70a1b992481f386b9c2d22bf61531) §3.2 Est. Duration Display；§3.4
- **建议**：统一为 “~5-7 min” + “Self-paced · AI estimated”；Step 3 同步

R1-05：创建向导 Step 1，选 AI Tutor（G3）

![R1-05](https://uploads.linear.app/c3f6b71f-56a8-4cb4-a685-4edb2314f811/2b41a6c7-19d1-4e74-bd3a-fa4e186c9111/06545d11-9d08-4b89-9dd8-a5040cf09251)

R1-09：创建向导 Step 3 Review

![R1-09](https://uploads.linear.app/c3f6b71f-56a8-4cb4-a685-4edb2314f811/b636e4fd-eb6f-4e03-adee-102ecd09a325/b9b5749c-ae73-46b3-b84f-2ea018a4f5ae)

### 17. Step 2 粘贴框 placeholder 全小写，“0 word” 单复数错

**已确认** · 待改

- **问题**：placeholder 是全小写 “paste passage text here...”；字数显示 “0 word”（单复数错）
- **位置**：Step 2 粘贴框
- **怎么验证**：[创建向导](https://staging.kira-learning.com/ai-tools/literacy-studio/create/?from=all-tasks) 填完 Step 1 → Continue → 点 Paste Text
- **依据**：[PRD](https://app.notion.com/p/34e70a1b992481f386b9c2d22bf61531) §3.3 Paste Text；[写作规范](https://github.com/chao653/Literacy-Studio/blob/f3cfd6925f5bc998393b28b55209db72f4b4335e/%E8%AE%BE%E8%AE%A1%E6%89%A7%E8%A1%8C/%E8%A7%84%E8%8C%83/%E5%86%99%E4%BD%9C%E8%A7%84%E8%8C%83.md) 一-5（禁全小写）
- **建议**：placeholder 改为 “Paste passage text here...”；字数改为 “0 words”（1 时用 “1 word”）

R1-06：创建向导 Step 2 粘贴框（空）

![R1-06](https://uploads.linear.app/c3f6b71f-56a8-4cb4-a685-4edb2314f811/38e1d6f2-1fa8-4214-b034-0ad7a267ab1a/1dd8b682-ccb8-4129-acc9-b0377ca554b3)

### 20. 从 All Tasks 进入，Step 3 弃稿后回到 Dashboard

**已确认** · 待改

- **问题**：弃稿后回到 Dashboard，不是来时的 All Tasks（Step 2 弃稿能正确回 All Tasks）
- **位置**：从 All Tasks 进入向导，到 Step 3 点 ← 并确认弃稿
- **怎么验证**：在 [All Tasks](https://staging.kira-learning.com/ai-tools/literacy-studio/all-tasks/) 点 “Create Literacy Task”，按开头「走到 Step 3」的步骤走到 Step 3 → 点左上 ← → Discard，落到 `/dashboard/` 而不是 `/all-tasks/`
- **依据**：[PRD](https://app.notion.com/p/34e70a1b992481f386b9c2d22bf61531) §3.1 Wizard navigation（← 回到来时页面，11-05）
- **建议**：Step 3 的 ← 与 Step 1、2 用同一套返回逻辑

R1-07：创建向导弃稿确认

![R1-07](https://uploads.linear.app/c3f6b71f-56a8-4cb4-a685-4edb2314f811/aff646ef-b377-4d97-982c-c3565789b4b9/5ad4e4a3-f418-487c-ae70-d9998f0c8a47)

R1-09：创建向导 Step 3 Review

![R1-09](https://uploads.linear.app/c3f6b71f-56a8-4cb4-a685-4edb2314f811/b636e4fd-eb6f-4e03-adee-102ecd09a325/b9b5749c-ae73-46b3-b84f-2ea018a4f5ae)

### 21. Task Name placeholder 不对

**已确认** · 待改

- **问题**：placeholder 为 “Enter task name”，PRD 为 “Name your task...”
- **位置**：Step 1 Task Name 输入框
- **怎么验证**：[创建向导](https://staging.kira-learning.com/ai-tools/literacy-studio/create/?from=all-tasks) Task Name 输入框
- **依据**：[PRD](https://app.notion.com/p/34e70a1b992481f386b9c2d22bf61531) §3.2 Task Name
- **建议**：改为 “Name your task...”

R1-04：创建向导 Step 1，未选类型

![R1-04](https://uploads.linear.app/c3f6b71f-56a8-4cb4-a685-4edb2314f811/67700e4b-e071-4cba-aec8-13863f4e3666/103dc5ce-ac62-46a2-9d7b-555bf327e63d)

## Task Detail 与 Assign 弹窗

### 24. Task Detail 返回写成 “← Literacy Studio”

**已确认** · 待改

- **问题**：写成 “← Literacy Studio”，PRD 为 “← Back to Dashboard”
- **位置**：Task Detail 左上返回
- **怎么验证**：[Task Detail](https://staging.kira-learning.com/ai-tools/literacy-studio/task/01a1aacb-5c23-7426-bf3e-45055e0a6346/) 左上
- **设计稿**：[`1925:16761`](https://www.figma.com/design/pCdwCN68j1KGXz3aZZ6Wn0/Literacy-Studio-AI-Tutor?node-id=1925-16761) 已是 PRD 写法
- **依据**：P-04；[PRD](https://app.notion.com/p/34e70a1b992481f386b9c2d22bf61531) §4.1 Breadcrumb
- **建议**：改为 “← Back to Dashboard”

R1-10：Task Detail

![R1-10](https://uploads.linear.app/c3f6b71f-56a8-4cb4-a685-4edb2314f811/d7dbca8d-5f7c-4608-8b5b-e5f6415189ed/fd438bc3-9746-48ef-a508-a8a90978799f)

### 25. Edit Task 锁定说明的文案和形式不对

**已确认** · 待改

- **问题**：锁定说明直接写在卡片里：“Students have started this task, so editing is locked.”；PRD 和设计稿都是悬停提示 “This task has active assignments and cannot be edited.”（文案已确认；用行内文字还是悬停提示属设计判断）
- **位置**：Task Detail Edit Task 卡片
- **怎么验证**：[Task Detail](https://staging.kira-learning.com/ai-tools/literacy-studio/task/01a1aacb-5c23-7426-bf3e-45055e0a6346/) Edit Task 卡片
- **设计稿**：[`1925:16761`](https://www.figma.com/design/pCdwCN68j1KGXz3aZZ6Wn0/Literacy-Studio-AI-Tutor?node-id=1925-16761)
- **依据**：P-04；[PRD](https://app.notion.com/p/34e70a1b992481f386b9c2d22bf61531) §4.1 Edit Task lock
- **建议**：文案按 PRD；形式按设计稿改成悬停提示，或保留行内但换成 PRD 文案

R1-10：Task Detail

![R1-10](https://uploads.linear.app/c3f6b71f-56a8-4cb4-a685-4edb2314f811/d7dbca8d-5f7c-4608-8b5b-e5f6415189ed/fd438bc3-9746-48ef-a508-a8a90978799f)

### 26. 列表标题写成 “Assignments”

**已确认** · 待改

- **问题**：写成 “Assignments”，PRD 为 “View All Assignments”
- **位置**：Task Detail 列表标题
- **怎么验证**：[Task Detail](https://staging.kira-learning.com/ai-tools/literacy-studio/task/01a1aacb-5c23-7426-bf3e-45055e0a6346/) Assignment 列表标题
- **依据**：P-04；[PRD](https://app.notion.com/p/34e70a1b992481f386b9c2d22bf61531) §4.1 Assignment list
- **建议**：改为 “View All Assignments”

R1-10：Task Detail

![R1-10](https://uploads.linear.app/c3f6b71f-56a8-4cb4-a685-4edb2314f811/d7dbca8d-5f7c-4608-8b5b-e5f6415189ed/fd438bc3-9746-48ef-a508-a8a90978799f)

### 27. Assignment 卡片缺时间和完成人数

**设计判断** · 待改

- **问题**：卡片只有 “1 Student”，没有时间（Live 开始时间 / Scheduled 时间窗）和完成人数（设计稿 “8/24 Students ✓”）；列表底部也没有 “All assignments loaded”
- **位置**：Task Detail Assignment 卡片
- **怎么验证**：[Task Detail](https://staging.kira-learning.com/ai-tools/literacy-studio/task/01a1aacb-5c23-7426-bf3e-45055e0a6346/) Assignment 卡片和列表底部
- **设计稿**：[`1925:16761`](https://www.figma.com/design/pCdwCN68j1KGXz3aZZ6Wn0/Literacy-Studio-AI-Tutor?node-id=1925-16761)
- **依据**：[PRD](https://app.notion.com/p/34e70a1b992481f386b9c2d22bf61531) §4.1（只写了底部结束语，卡片内容没写）；设计稿
- **建议**：按设计稿补时间和完成人数；底部结束语按 PRD 加上

R1-10：Task Detail

![R1-10](https://uploads.linear.app/c3f6b71f-56a8-4cb4-a685-4edb2314f811/d7dbca8d-5f7c-4608-8b5b-e5f6415189ed/fd438bc3-9746-48ef-a508-a8a90978799f)

### 30. “Schedule Mode” 应为 “Scheduled Mode”

**已确认** · 待改

- **问题**：选项写成 “Schedule Mode”，PRD 为 “Scheduled Mode”
- **位置**：Assign 弹窗 Schedule Type
- **怎么验证**：[Assign 弹窗](https://staging.kira-learning.com/ai-tools/literacy-studio/task/01a1aacb-5c23-7426-bf3e-45055e0a6346/?assign=true) Schedule Type 选项
- **依据**：P-05；[PRD](https://app.notion.com/p/34e70a1b992481f386b9c2d22bf61531) §7.1 Schedule Type
- **建议**：改为 “Scheduled Mode”

R1-11：Assign 弹窗

![R1-11](https://uploads.linear.app/c3f6b71f-56a8-4cb4-a685-4edb2314f811/43caf258-be07-464e-821d-de3582f913b7/c7cd5990-ed2a-4a2b-b938-73358b120023)

## Monitor

### 31. Monitor 没有状态筛选

**已确认** · 待改

- **问题**：没有状态筛选。PRD 要 All / In Progress / Completed / Ended / Expired / Not Started 六项，设计稿已画（灰底分段 Tabs）
- **位置**：AI Tutor Monitor 表格上方
- **怎么验证**：[Monitor（Live）](https://staging.kira-learning.com/ai-tools/literacy-studio/task/01a1aacb-5c23-7426-bf3e-45055e0a6346/session/01a1aae5-14de-757d-bb9f-25878f5c3a1d/)、[Monitor（Scheduled · Expired）](https://staging.kira-learning.com/ai-tools/literacy-studio/task/01a1a58b-3385-770f-bc79-35937691ac3d/session/01a1a59b-ec21-76b5-a02f-2a336a1b55f4/) 表格上方
- **设计稿**：[`2159:26726`](https://www.figma.com/design/pCdwCN68j1KGXz3aZZ6Wn0/Literacy-Studio-AI-Tutor?node-id=2159-26726) 等已有筛选
- **依据**：P-06；[PRD](https://app.notion.com/p/34e70a1b992481f386b9c2d22bf61531) §5.2 Status filter
- **建议**：按设计稿补六项状态筛选（本轮最优先）

R1-12：Monitor（Live · In Progress）

![R1-12](https://uploads.linear.app/c3f6b71f-56a8-4cb4-a685-4edb2314f811/31b18d15-8c7e-4f52-8a6c-f04b12773b27/f465fe62-410a-49dd-af93-7f7ac645fa50)

R1-18：Monitor（Scheduled · Expired）

![R1-18](https://uploads.linear.app/c3f6b71f-56a8-4cb4-a685-4edb2314f811/1b57ab6e-eece-4cc4-9689-c735806701d2/29c245d6-cc04-43bc-8059-b2b1eb01ed77)

### 32. Ended 的 Join Code 悬停没有提示

**已确认** · 待改

- **问题**：按钮置灰，但悬停没有任何提示（元素关闭了鼠标事件）
- **位置**：Ended 的 Monitor 右上 Join Code
- **怎么验证**：[Monitor（Ended）](https://staging.kira-learning.com/ai-tools/literacy-studio/task/01a1aacb-5c23-7426-bf3e-45055e0a6346/session/01a1ab18-0f0b-71fc-89bc-e3151932b234/) 悬停右上 Join Code
- **依据**：P-06；[PRD](https://app.notion.com/p/34e70a1b992481f386b9c2d22bf61531) §4.2 Join Code（Ended：禁用 + 提示 “This assignment has ended”）
- **建议**：置灰时仍能悬停，显示 “This assignment has ended”

R1-19：Monitor（Ended），Join Code 置灰

![R1-19](https://uploads.linear.app/c3f6b71f-56a8-4cb4-a685-4edb2314f811/f0d33fc0-1c27-4d36-ae8c-13378b9e430f/2dfc72c7-4537-41c6-ab69-ca772c936a23)

### 33. Your Turn 提示末句写 “(teacher)”，应为 “(teacher mark)”

**已确认** · 待改（11-16 设计稿已同步，staging 待改）

- **问题**：提示末句写 “your mark then shows here as “→ … (teacher)””；PRD 为 “(teacher mark)”。设计稿 11-16 已改
- **位置**：Monitor Your Turn 列 (i) 提示
- **怎么验证**：[Monitor（Live）](https://staging.kira-learning.com/ai-tools/literacy-studio/task/01a1aacb-5c23-7426-bf3e-45055e0a6346/session/01a1aae5-14de-757d-bb9f-25878f5c3a1d/) 悬停表头 Your Turn 旁的 (i)，看最后一句
- **设计稿**：Monitor 提示层 [`2488:29877`](https://www.figma.com/design/pCdwCN68j1KGXz3aZZ6Wn0/Literacy-Studio-AI-Tutor?node-id=2488-29877)（在 `2159:26726` 里）
- **依据**：P-06；[PRD](https://app.notion.com/p/34e70a1b992481f386b9c2d22bf61531) §5.4.3 Teacher mark
- **建议**：改为 “(teacher mark)”；标注文案 Needed support / Still needs support 的分歧另行确认

R1-29：Monitor Your Turn 表头 (i) 提示（只截了表头和提示）

![R1-29](https://uploads.linear.app/c3f6b71f-56a8-4cb4-a685-4edb2314f811/c8198d7e-bd0d-4ae1-8c98-e353df923af8/154a237c-3bce-4657-9831-544d27e09b7f)

### 34. Remove 弹窗警告少半句

**已确认** · 待改

- **问题**：只写了 “This action cannot be undone.”，少了后半句
- **位置**：Monitor 行菜单 Remove 弹窗
- **怎么验证**：[Monitor（Live）](https://staging.kira-learning.com/ai-tools/literacy-studio/task/01a1aacb-5c23-7426-bf3e-45055e0a6346/session/01a1aae5-14de-757d-bb9f-25878f5c3a1d/) 学生行最右的 “⋯”（More actions）→ Remove；看完点 Cancel
- **设计稿**：[`2155:26011`](https://www.figma.com/design/pCdwCN68j1KGXz3aZZ6Wn0/Literacy-Studio-AI-Tutor?node-id=2155-26011)
- **依据**：P-07；[PRD](https://app.notion.com/p/34e70a1b992481f386b9c2d22bf61531) §7.2 Warning
- **建议**：补全为 “This action cannot be undone. All progress and results for this student in this assignment will be permanently deleted.”

R1-13：Remove 弹窗

![R1-13](https://uploads.linear.app/c3f6b71f-56a8-4cb4-a685-4edb2314f811/7d717a37-d0fe-4cb8-b414-4bc4d6c69910/d0c190de-0c7a-4357-8a86-ed235935df74)

### 35. Remove 和 End 两个弹窗样式不统一

**设计判断** · 待改

- **问题**：两个确认弹窗样式不统一：关闭图标大小和位置、主按钮红色 / 紫色、按钮圆角都不同
- **位置**：Remove 弹窗与 End Task 弹窗
- **怎么验证**：在 [Monitor（Live）](https://staging.kira-learning.com/ai-tools/literacy-studio/task/01a1aacb-5c23-7426-bf3e-45055e0a6346/session/01a1aae5-14de-757d-bb9f-25878f5c3a1d/) 按第 34 条打开 Remove 弹窗，再点右上 End Task 打开 End 弹窗，两个都点 Cancel（11-16：Remove 主按钮红色、圆角 6px；End Assignment 紫色、全圆角）
- **设计稿**：[`2155:26011`](https://www.figma.com/design/pCdwCN68j1KGXz3aZZ6Wn0/Literacy-Studio-AI-Tutor?node-id=2155-26011)、[`2160:26919`](https://www.figma.com/design/pCdwCN68j1KGXz3aZZ6Wn0/Literacy-Studio-AI-Tutor?node-id=2160-26919)
- **依据**：P-07（[PRD](https://app.notion.com/p/34e70a1b992481f386b9c2d22bf61531) §7.2–§7.3）；组件一致性
- **建议**：两个弹窗用同一个确认弹窗组件；危险操作统一用红色主按钮

R1-13：Remove 弹窗

![R1-13](https://uploads.linear.app/c3f6b71f-56a8-4cb4-a685-4edb2314f811/7d717a37-d0fe-4cb8-b414-4bc4d6c69910/d0c190de-0c7a-4357-8a86-ed235935df74)

R1-14：End Task 弹窗

![R1-14](https://uploads.linear.app/c3f6b71f-56a8-4cb4-a685-4edb2314f811/48c907f1-5711-44ee-99f6-6a9fc3ab7e5b/f681e4ab-95c3-4420-9d0d-0addb9548eb9)

## Student Detail

### 36. Student Detail 返回写成 “← Assignment Monitor”

**已确认** · 待改

- **问题**：写成 “← Assignment Monitor”，PRD 为 “← Back to Assignment”
- **位置**：Student Detail 左上返回
- **怎么验证**：[Student Detail](https://staging.kira-learning.com/ai-tools/literacy-studio/task/01a1aacb-5c23-7426-bf3e-45055e0a6346/session/01a1aaf9-a829-705d-8bee-2edaf7cde712/student/0196ec29e03077fc9d420a91f5543373/) 左上
- **依据**：P-08；[PRD](https://app.notion.com/p/34e70a1b992481f386b9c2d22bf61531) §6.0
- **建议**：改为 “← Back to Assignment”

R1-15：Student Detail 顶部

![R1-15](https://uploads.linear.app/c3f6b71f-56a8-4cb4-a685-4edb2314f811/696446f8-559b-48c2-ae37-7439d0d65fa8/b54bf7e8-d79d-480a-87d6-d9e8b04195a2)

R1-20：Student Detail，有 Kira 提示的学生

![R1-20](https://uploads.linear.app/c3f6b71f-56a8-4cb4-a685-4edb2314f811/7c6f18bd-1d94-4e87-8fed-855b3e59f563/470afc40-fb74-403d-9ba2-3c27b0590e21)

### 37. 翻页写成 “Previous Student” / “Next Student”

**已确认** · 待改

- **问题**：写成 “Previous Student” / “Next Student”，PRD 为 “← Prev” / “Next →”
- **位置**：Student Detail 右上翻页
- **怎么验证**：[Student Detail](https://staging.kira-learning.com/ai-tools/literacy-studio/task/01a1aacb-5c23-7426-bf3e-45055e0a6346/session/01a1aaf9-a829-705d-8bee-2edaf7cde712/student/0196ec29e03077fc9d420a91f5543373/) 右上
- **依据**：P-08；[PRD](https://app.notion.com/p/34e70a1b992481f386b9c2d22bf61531) §6.0
- **建议**：改为 “← Prev” / “Next →”

R1-15：Student Detail 顶部

![R1-15](https://uploads.linear.app/c3f6b71f-56a8-4cb4-a685-4edb2314f811/696446f8-559b-48c2-ae37-7439d0d65fa8/b54bf7e8-d79d-480a-87d6-d9e8b04195a2)

R1-20：Student Detail，有 Kira 提示的学生

![R1-20](https://uploads.linear.app/c3f6b71f-56a8-4cb4-a685-4edb2314f811/7c6f18bd-1d94-4e87-8fed-855b3e59f563/470afc40-fb74-403d-9ba2-3c27b0590e21)

### 38. 教师标注文案还是旧版

**已确认** · 待改

- **问题**：标注按钮为 “Read it / Needs support / Unclear”，Summary 写 “Your mark: Needs support”；已确认文案为 “Read it / Still needs support / Can't tell”
- **位置**：Student Detail 右栏标注按钮、Summary 的 Your Turn 卡
- **怎么验证**：[Student Detail](https://staging.kira-learning.com/ai-tools/literacy-studio/task/01a1aacb-5c23-7426-bf3e-45055e0a6346/session/01a1aaf9-a829-705d-8bee-2edaf7cde712/student/0196ec29e03077fc9d420a91f5543373/) 右栏 Your Turn 下的标注按钮；顶部 Summary 的 Your Turn 卡
- **设计稿**：[`2254:29181`](https://www.figma.com/design/pCdwCN68j1KGXz3aZZ6Wn0/Literacy-Studio-AI-Tutor?node-id=2254-29181) 已按 PRD
- **依据**：P-09；[PRD](https://app.notion.com/p/34e70a1b992481f386b9c2d22bf61531) §6.2；[产品规则](https://github.com/chao653/Literacy-Studio/blob/f3cfd6925f5bc998393b28b55209db72f4b4335e/%E9%9C%80%E6%B1%82%E6%96%87%E6%A1%A3/01_%E4%BA%A7%E5%93%81%E8%A7%84%E5%88%99.md) “教师标注…文案按 PRD §6.2”（2026-11-12）
- **建议**：按钮和 Summary 一起改；Monitor Your Turn 第二行也要同步

R1-20：Student Detail，有 Kira 提示的学生

![R1-20](https://uploads.linear.app/c3f6b71f-56a8-4cb4-a685-4edb2314f811/7c6f18bd-1d94-4e87-8fed-855b3e59f563/470afc40-fb74-403d-9ba2-3c27b0590e21)

### 39. 证据分组标题带了次数

**已确认** · 待改

- **问题**：分组标题写成 “Kira gave a hint on these words · 1”，带了次数
- **位置**：Student Detail 左栏 With Kira's support
- **怎么验证**：[Student Detail](https://staging.kira-learning.com/ai-tools/literacy-studio/task/01a1aacb-5c23-7426-bf3e-45055e0a6346/session/01a1aaf9-a829-705d-8bee-2edaf7cde712/student/0196ec29e03077fc9d420a91f5543373/) 左栏 “With Kira's support” 分组标题
- **依据**：P-09（[PRD](https://app.notion.com/p/34e70a1b992481f386b9c2d22bf61531) §6.2）；[产品规则](https://github.com/chao653/Literacy-Studio/blob/f3cfd6925f5bc998393b28b55209db72f4b4335e/%E9%9C%80%E6%B1%82%E6%96%87%E6%A1%A3/01_%E4%BA%A7%E5%93%81%E8%A7%84%E5%88%99.md) “词标签一律灰色，不写次数”
- **建议**：去掉 “· 1”

R1-20：Student Detail，有 Kira 提示的学生

![R1-20](https://uploads.linear.app/c3f6b71f-56a8-4cb4-a685-4edb2314f811/7c6f18bd-1d94-4e87-8fed-855b3e59f563/470afc40-fb74-403d-9ba2-3c27b0590e21)

### 40. 有 Kira 提示的学生看不到 What Kira said today

**已确认** · 待改

- **问题**：页面上没有 What Kira said today 卡片，但这名学生在 Guided Reading 里收到过 Kira 的提示
- **位置**：Student Detail（G3-recovery 学生，Guided Reading 有 “chrysalis” 提示）
- **怎么验证**：[Student Detail](https://staging.kira-learning.com/ai-tools/literacy-studio/task/01a1aacb-5c23-7426-bf3e-45055e0a6346/session/01a1aaf9-a829-705d-8bee-2edaf7cde712/student/0196ec29e03077fc9d420a91f5543373/) 左栏有 “chrysalis” 提示，整页没有 What Kira said today 卡片
- **设计稿**：[`2253:29137`](https://www.figma.com/design/pCdwCN68j1KGXz3aZZ6Wn0/Literacy-Studio-AI-Tutor?node-id=2253-29137)
- **依据**：P-09；[PRD](https://app.notion.com/p/34e70a1b992481f386b9c2d22bf61531) §6.2；[产品规则](https://github.com/chao653/Literacy-Studio/blob/f3cfd6925f5bc998393b28b55209db72f4b4335e/%E9%9C%80%E6%B1%82%E6%96%87%E6%A1%A3/01_%E4%BA%A7%E5%93%81%E8%A7%84%E5%88%99.md) “What Kira said today 最多 5 条…Phase 1 只收 Guided Reading 点词后的提示…”
- **建议**：先查是后端没产出数据还是前端没渲染，再修

R1-20：Student Detail，有 Kira 提示的学生

![R1-20](https://uploads.linear.app/c3f6b71f-56a8-4cb4-a685-4edb2314f811/7c6f18bd-1d94-4e87-8fed-855b3e59f563/470afc40-fb74-403d-9ba2-3c27b0590e21)

R1-21：Student Detail 下半（Comprehension）

![R1-21](https://uploads.linear.app/c3f6b71f-56a8-4cb4-a685-4edb2314f811/55c7959e-f3a2-4dd3-83cf-bbf096cf58bd/48527c3b-500e-4f94-8e9d-fc2eff378920)

### 41. “Open response” 应为 “Open Response”

**已确认** · 待改

- **问题**：徽标写成 “Open response”，PRD 为 “Open Response”
- **位置**：Student Detail Comprehension 区开放题
- **怎么验证**：[Student Detail](https://staging.kira-learning.com/ai-tools/literacy-studio/task/01a1aacb-5c23-7426-bf3e-45055e0a6346/session/01a1aaf9-a829-705d-8bee-2edaf7cde712/student/0196ec29e03077fc9d420a91f5543373/) 往下滚到 Comprehension 区
- **依据**：P-09；[PRD](https://app.notion.com/p/34e70a1b992481f386b9c2d22bf61531) §6.2 Open Response card；[写作规范](https://github.com/chao653/Literacy-Studio/blob/f3cfd6925f5bc998393b28b55209db72f4b4335e/%E8%AE%BE%E8%AE%A1%E6%89%A7%E8%A1%8C/%E8%A7%84%E8%8C%83/%E5%86%99%E4%BD%9C%E8%A7%84%E8%8C%83.md) 三（Badge 用 Title Case）
- **建议**：改为 “Open Response”

R1-21：Student Detail 下半（Comprehension）

![R1-21](https://uploads.linear.app/c3f6b71f-56a8-4cb4-a685-4edb2314f811/55c7959e-f3a2-4dd3-83cf-bbf096cf58bd/48527c3b-500e-4f94-8e9d-fc2eff378920)

## 侧栏导航

### 42. 深层页面侧栏不再高亮 Literacy Studio

**设计判断** · 待改

- **问题**：进到深层页面后，侧栏 Create 折叠、Literacy Studio 不再高亮，老师看不出自己在哪个模块（Dashboard 页是高亮的，R1-01）。11-16 复核：只有根路径 `/ai-tools/literacy-studio/` 高亮；从侧栏进 Dashboard 再点 View All Tasks，Create 还展开但已不高亮；直接打开任何子路径（包括 `/dashboard/`）时 Create 折叠、也不高亮
- **位置**：All Tasks、Task Detail、Monitor、Student Detail、Preview 的左侧导航
- **怎么验证**：先开 [Dashboard](https://staging.kira-learning.com/ai-tools/literacy-studio/)（Create 展开、Literacy Studio 高亮），再开 [All Tasks](https://staging.kira-learning.com/ai-tools/literacy-studio/all-tasks/) 或 [Task Detail](https://staging.kira-learning.com/ai-tools/literacy-studio/task/01a1aacb-5c23-7426-bf3e-45055e0a6346/) 对比
- **依据**：导航一致性
- **建议**：Literacy Studio 下所有页面（含 `/dashboard/`）都保持 Create 展开、Literacy Studio 高亮

R1-01：Dashboard（打开了 Needs Attention 面板，悬停 “Assigned” 的提示）

![R1-01](https://uploads.linear.app/c3f6b71f-56a8-4cb4-a685-4edb2314f811/41babdf9-fd0a-41bd-a39a-2cf2a22893a5/42d661e2-d13a-4d1e-873b-f9ec64bfca98)

R1-10：Task Detail

![R1-10](https://uploads.linear.app/c3f6b71f-56a8-4cb4-a685-4edb2314f811/d7dbca8d-5f7c-4608-8b5b-e5f6415189ed/fd438bc3-9746-48ef-a508-a8a90978799f)

## Preview

### 43. Preview 没有学生顶栏，Exit Preview 位置不对

**已确认** · 待改

- **问题**：预览页没有学生顶栏（Home、进度条、奖杯），页面上也没有 “Step N of M · step name”；“Exit Preview” 在右上角，不是替换左上的 Home。Step 3 内嵌预览是有顶栏的（R1-09），两处不一致
- **位置**：Task Detail → Preview Task
- **怎么验证**：[Preview](https://staging.kira-learning.com/ai-tools/literacy-studio/task/01a1aacb-5c23-7426-bf3e-45055e0a6346/preview/) 点 Allow Microphone →（没有麦克风时）Skip, start reading → Start → Skip intro，每一页都看顶部
- **设计稿**：[`2118:33782`](https://www.figma.com/design/pCdwCN68j1KGXz3aZZ6Wn0/Literacy-Studio-AI-Tutor?node-id=2118-33782)
- **依据**：[PRD](https://app.notion.com/p/34e70a1b992481f386b9c2d22bf61531) §4.1 Preview Task；[PRD Student View](https://app.notion.com/p/34e70a1b99248122af86e22655dad2ca) §3 Player top bar（10-24）；[产品规则](https://github.com/chao653/Literacy-Studio/blob/f3cfd6925f5bc998393b28b55209db72f4b4335e/%E9%9C%80%E6%B1%82%E6%96%87%E6%A1%A3/01_%E4%BA%A7%E5%93%81%E8%A7%84%E5%88%99.md) “Preview 不加预览条…Home 换成 ← Exit Preview”
- **建议**：预览页用学生端同一顶栏，左上 Home 换成 “← Exit Preview”；页面上补步骤编号

R1-24：Preview Intro

![R1-24](https://uploads.linear.app/c3f6b71f-56a8-4cb4-a685-4edb2314f811/d3136196-f32f-417b-b21e-71d5316cb7c9/da51e5af-c937-46ca-8234-61774bf54587)

R1-25：Preview Warm-up

![R1-25](https://uploads.linear.app/c3f6b71f-56a8-4cb4-a685-4edb2314f811/d13ef3c6-1866-4244-b312-1285b731a27f/148436f7-eacd-44c8-8772-51e5312a1f58)

R1-26：Preview Echo Reading（G3）

![R1-26](https://uploads.linear.app/c3f6b71f-56a8-4cb4-a685-4edb2314f811/88ac6ed5-72d4-403b-9a2b-4b1603e00757/c5c046e3-c7e1-4879-b0bd-5c43de3c02f4)

### 44. Preview 嵌在老师端外壳里

**设计判断** · 待改

- **问题**：预览嵌在老师端外壳里，左侧导航一直可见，和学生真实看到的全屏页面不一样
- **位置**：Preview 页
- **怎么验证**：[Preview](https://staging.kira-learning.com/ai-tools/literacy-studio/task/01a1aacb-5c23-7426-bf3e-45055e0a6346/preview/) 左侧老师端导航一直在
- **依据**：[PRD](https://app.notion.com/p/34e70a1b992481f386b9c2d22bf61531) §4.1（预览 = 学生端体验）
- **建议**：预览改为全屏学生端页面，只留 “← Exit Preview” 出口

R1-22：Preview Mic Check

![R1-22](https://uploads.linear.app/c3f6b71f-56a8-4cb4-a685-4edb2314f811/92e93c2f-9252-4106-8ad6-94ccdb9cefa1/32cbec50-ea83-47a7-9661-1daec829bac8)

### 45. Preview 准备页写着 “Your reading is recorded for your teacher.”

**已确认** · 待改

- **问题**：预览里仍写 “Your reading is recorded for your teacher.”，但 PRD 规定预览不保存任何学生数据
- **位置**：Preview 的 “Ready to read with Kira?” 页
- **怎么验证**：[Preview](https://staging.kira-learning.com/ai-tools/literacy-studio/task/01a1aacb-5c23-7426-bf3e-45055e0a6346/preview/) 点 Allow Microphone →（没有麦克风时）Skip, start reading，看 “Ready to read with Kira?” 页
- **依据**：[PRD](https://app.notion.com/p/34e70a1b992481f386b9c2d22bf61531) §4.1 Preview Task（No student data is saved）
- **建议**：预览模式隐藏这句，或换成不涉及记录的说法（产品规则不加预览条，所以不要加横幅）

R1-23：Preview 准备页 “Ready to read with Kira?”

![R1-23](https://uploads.linear.app/c3f6b71f-56a8-4cb4-a685-4edb2314f811/3349d319-9d40-4b61-ac50-3d03b07cd979/61360e09-5503-4f84-a929-51a08857ad6f)

### 46. Warm-up 的 Kira 气泡和词卡释义重复

**设计判断** · 待改

- **问题**：Kira 气泡里的释义和下面词卡的释义几乎一样，同一屏讲了两遍
- **位置**：Preview Warm-up
- **怎么验证**：[Preview](https://staging.kira-learning.com/ai-tools/literacy-studio/task/01a1aacb-5c23-7426-bf3e-45055e0a6346/preview/) 按第 43 条走到 Warm-up 第 1 个词 “chrysalis”
- **依据**：[PRD](https://app.notion.com/p/34e70a1b992481f386b9c2d22bf61531) §3.4 [T9]（Kira 讲解 = 意思 + 文中用法）
- **建议**：气泡偏“这个词在文中怎么用”，词卡保留简短释义，两段不要重复

R1-25：Preview Warm-up

![R1-25](https://uploads.linear.app/c3f6b71f-56a8-4cb4-a685-4edb2314f811/d13ef3c6-1866-4244-b312-1285b731a27f/148436f7-eacd-44c8-8772-51e5312a1f58)

---

**清单外 1 条**：同一段粘贴文字，Step 2 显示 183 words，Step 3 头部显示 184 words，相差 1 词。请工程核对两处的字数算法是否一致。
