# APACUIX-543 子任务存档

> `Linear/AGENTS.md` 默认草稿不代发；这 6 个 sub issue 按用户 2026-11-17 指示「把除了设计修改之外的，按照问题类型建成 sub issue，放到这个 ticket 下面」直接建在 [APACUIX-543](https://linear.app/kira-learning/issue/APACUIX-543/design-qa) 下。
> 范围：评论区 37 条 + 清单外 1 条（字数）按问题类型分成 5 个；需用户确认的 9 条（#2、16、18、19、22、23、28、29、47）单独放第 6 个，不要可以直接删。设计稿自身的 5 条（#9、48–51）11-16 已在 Figma 改完，不建。
> 正文按 `走查/R1_评论复核.md` 的结论写：分级拆开的条目（#3、4、13、15、25、27）、补的细节、Quick Assign Live 说明句（并进第 7 条）都已写进 sub issue；评论区本身没改。截图用的是工单里已上传的 Linear 图片地址，要登录 Linear 才能看，仓库里的原图在 `走查/截图/`。
> 全部为 Todo、Design QA 标签、项目 Literacy Studio AI Tutor、里程碑 Design。下面是建好时的正文（11-17 读回核对过）。

- [APACUIX-544](https://linear.app/kira-learning/issue/APACUIX-544) R1 走查 · 文案与显示内容（23 条） · High
- [APACUIX-545](https://linear.app/kira-learning/issue/APACUIX-545) R1 走查 · 功能与内容缺失（6 条） · High
- [APACUIX-546](https://linear.app/kira-learning/issue/APACUIX-546) R1 走查 · 布局与样式（4 条） · High
- [APACUIX-547](https://linear.app/kira-learning/issue/APACUIX-547) R1 走查 · 交互与导航（3 条） · High
- [APACUIX-548](https://linear.app/kira-learning/issue/APACUIX-548) R1 走查 · 数据与计算（2 条） · High
- [APACUIX-549](https://linear.app/kira-learning/issue/APACUIX-549) R1 走查 · 需确认后再改（9 条） · Medium

---

## [APACUIX-544](https://linear.app/kira-learning/issue/APACUIX-544) R1 走查 · 文案与显示内容（23 条）

R1 走查 · 文案与显示内容：共 23 条，都是 staging 要改的。已确认 22 条、设计判断 1 条（第 46 条）；第 3、15、25 条各有一小部分属设计判断，条目里写明了。编号沿用 [APACUIX-543 评论区](https://linear.app/kira-learning/issue/APACUIX-543/design-qa#comment-c5d2e781) 和 [PR #12](https://github.com/chao653/Literacy-Studio/pull/12)。每条的问题、验证链接、PRD 原文和截图放在一起。

**11-17 复核**：按下面的验证链接在 staging 上重新走了一遍，23 条都还能复现。

**差异**：PRD、PR #12 正文、评论区和 staging 有对不上的，条目最后有「差异」一行；没有这一行的条目，几处说法一致。

**验证前须知**

* 打开 staging 前先切到 **Teacher** 角色（Home 页左下角点角色名切换；Admin 进 Literacy Studio 是 403）。
* 弹窗只看不提交，都点 Cancel。
* **打开 Quick Assign**：[Dashboard](https://staging.kira-learning.com/ai-tools/literacy-studio/) 点 Needs Attention 卡，翻到有 “AI Tutor” 按钮的页（11-16 在第 2 页），点任一行 “AI Tutor”。看完点 Cancel，不要点 Assign。
* **走到 Step 3**：[创建向导](https://staging.kira-learning.com/ai-tools/literacy-studio/create/?from=all-tasks) 选 AI Tutor、填任务名、Grade 3 → Continue → Paste Text，贴一段 150–250 词的文字 → Continue，等约 30 秒生成。看完点左上 ← 再选 Discard，不会留下草稿。
* 截图里的账号姓名和邮箱已替换成 “Test User” / “student@example.com”，Quick Assign 弹窗的学生行已遮住。

---

## Reading Screener 入口与 Quick Assign

### 1. 界面仍叫 “Screener”，没改成 “Reading Screener”

**已确认** · 待改（设计稿 11-16 已改）

- **staging 现在**：能看到的有 8 处还叫 “Screener”：All Tasks 类型下拉、All Tasks 任务卡封面上的类型标签、创建向导 Step 1 类型卡、Step 1 选 Screener 后右侧步骤卡的标题、Quick Assign Passage 行的 “(same as Screener)”，还有第 3 条的 3 处已分配提示。另外 Quick Assign 弹窗有一句读屏说明 “Assign AI Tutor practice on the same passage as the Screener.”，屏幕上看不到，读屏软件会念出来。
- **PRD**：[Teacher View](https://app.notion.com/p/34e70a1b992481f386b9c2d22bf61531) 开头的改名说明（11-05）：“the task type teachers and students see is now Reading Screener (was Screener), across this page. Only the display name changes”；§3.2：“Reading Screener shows Read aloud / AI scoring / Risk level, with the step card titled "Reading Screener"”
- **怎么验证**：[All Tasks](https://staging.kira-learning.com/ai-tools/literacy-studio/all-tasks/) 点 “All Types” 下拉，再往下滚到 “QA-AIT-20261104-Screener-source” 任务卡，看封面图上的类型标签（任务名里的 Screener 不用改）；[创建向导](https://staging.kira-learning.com/ai-tools/literacy-studio/create/?from=all-tasks) Step 1 看类型卡，再点 Screener 卡看右侧步骤卡标题；按上面的方法打开 Quick Assign 看 Passage 行；已分配提示见第 3 条
- **设计稿**：[`1947:13072`](https://www.figma.com/design/pCdwCN68j1KGXz3aZZ6Wn0/Literacy-Studio-AI-Tutor?node-id=1947-13072)、[`2052:17659`](https://www.figma.com/design/pCdwCN68j1KGXz3aZZ6Wn0/Literacy-Studio-AI-Tutor?node-id=2052-17659)
- **建议**：面向老师的显示名和读屏说明统一换成 “Reading Screener”；只改显示名，不动数据
- **差异**：
  - 评论区第 1 条只列了 4 个位置，漏了 All Tasks 任务卡标签和 Step 1 步骤卡标题。写的 “Quick Assign 来源行” 也不准：From 行显示的是任务名，符合 PRD §7.4 “From: [Reading Screener Task Name]”；真正还叫 Screener 的是 Passage 行和读屏说明。
  - PR #12 结论写 “界面上至少 5 处还叫 Screener”，实际能看到的是 8 处，另有 1 处读屏说明。

R1-03：All Tasks 类型下拉

![R1-03](https://uploads.linear.app/c3f6b71f-56a8-4cb4-a685-4edb2314f811/0cc6e381-e17c-4cd5-ab67-dc578c74e73b/3194d584-afba-4049-b761-321f12533f77)

R1-32：All Tasks 任务卡封面上的类型标签

![R1-32](https://uploads.linear.app/c3f6b71f-56a8-4cb4-a685-4edb2314f811/f821a24e-f692-41b8-be52-8618e350a150/303072a2-052f-44f3-90b0-413925cd1a1d)

R1-04：创建向导 Step 1，未选类型

![R1-04](https://uploads.linear.app/c3f6b71f-56a8-4cb4-a685-4edb2314f811/67700e4b-e071-4cba-aec8-13863f4e3666/103dc5ce-ac62-46a2-9d7b-555bf327e63d)

R1-31：创建向导 Step 1 选 Screener 后的步骤卡

![R1-31](https://uploads.linear.app/c3f6b71f-56a8-4cb4-a685-4edb2314f811/aeb5b2fa-7d00-477f-a590-2a61cec99921/6a286937-bc9a-4ed3-830d-dde5f16faf1e)

R1-02：Quick Assign 弹窗（默认 Scheduled）

![R1-02](https://uploads.linear.app/c3f6b71f-56a8-4cb4-a685-4edb2314f811/513cebde-1f41-4cf6-bc74-9e640e1678ab/8c704215-1e76-4c40-818d-65e2b138ee36)

### 3. 已分配提示多了 “from this Screener assignment”

**已确认**（推荐面板）／**设计判断**（Dashboard、Monitor 悬停提示）· 待改

- **staging 现在**：Dashboard Needs Attention 面板和 Reading Screener Monitor 的 “Assigned” 悬停提示都写 “AI Tutor already assigned from this Screener assignment”；Reading Screener Student Detail 推荐面板写 “AI Tutor is already assigned from this Screener assignment.”
- **PRD**：§7.4：“Same student + same source Reading Screener Assignment already Quick Assigned: show "AI Tutor already assigned", button "Assigned" disabled.”
- **怎么验证**：[Dashboard](https://staging.kira-learning.com/ai-tools/literacy-studio/) 点 Needs Attention 卡，悬停第 1 页任一 “Assigned”；[Screener Monitor](https://staging.kira-learning.com/ai-tools/literacy-studio/task/01a1a4bf-a0c7-72d2-a132-4ef9446fbc7f/session/01a1a4ee-b010-762d-966e-9070b8c8fe6a/) 悬停 Actions 列 “Assigned”；[Screener Student Detail](https://staging.kira-learning.com/ai-tools/literacy-studio/task/01a1a4bf-a0c7-72d2-a132-4ef9446fbc7f/session/01a1a4ee-b010-762d-966e-9070b8c8fe6a/student/0196ec29e03077fc9d420a91f5543373/) 右侧推荐面板底部
- **设计稿**：[`2072:22227`](https://www.figma.com/design/pCdwCN68j1KGXz3aZZ6Wn0/Literacy-Studio-AI-Tutor?node-id=2072-22227) 已是 PRD 写法
- **建议**：三处统一改为 “AI Tutor already assigned”
- **差异**：PRD 只给推荐面板定了这句；Monitor 只写了显示禁用的 “Assigned” 按钮，Dashboard 面板没定悬停提示写什么。评论区和 PR #12 整条标已确认，这里拆开：推荐面板是已确认，另外两处跟着改成同一句是设计判断。

R1-01：Dashboard（打开了 Needs Attention 面板，悬停 “Assigned” 的提示）

![R1-01](https://uploads.linear.app/c3f6b71f-56a8-4cb4-a685-4edb2314f811/41babdf9-fd0a-41bd-a39a-2cf2a22893a5/42d661e2-d13a-4d1e-873b-f9ec64bfca98)

R1-27：Reading Screener Monitor，悬停 “Assigned” 的提示

![R1-27](https://uploads.linear.app/c3f6b71f-56a8-4cb4-a685-4edb2314f811/2622da0a-8d20-4d11-9ddd-de3acedc1d8b/1e18580c-d9ab-481c-833d-8d12c4d17a94)

### 5. 推荐面板步骤名不对

**已确认** · 待改

- **staging 现在**：推荐面板步骤写成 “Warm-up”、“Comprehension”
- **PRD**：§7.4（10-25）：“Grades 1–5, 6 steps: Pre-reading, Vocabulary Warm-up, Echo Reading, Guided Reading, Your Turn, and a final step that is Oral Retelling in Grade 1 and Comprehension Check in Grades 2–5.”；“K, 5 steps: no Your Turn … Guided Reading goes straight to Oral Retelling.”
- **怎么验证**：[Screener Student Detail](https://staging.kira-learning.com/ai-tools/literacy-studio/task/01a1a4bf-a0c7-72d2-a132-4ef9446fbc7f/session/01a1a4ee-b010-762d-966e-9070b8c8fe6a/student/0196ec29e03077fc9d420a91f5543373/) 推荐面板里的 6 个步骤（来源是 Grade 3）
- **建议**：按 PRD 改步骤名，最后一步按来源年级显示；Kindergarten 来源只列 5 步，不列 Your Turn
- **差异**：
  - 评论区和 PR #12 的依据写的是 “按年级列 6 步”，漏了 Kindergarten 只有 5 步。现在验证用的来源是 Grade 3，看到 6 步不受影响。
  - PRD §3.4 Step 3 的标签（“2 · Warm-up”、“6 · Comprehension”）和 §5.3 Monitor Current Phase 用的短名是正式写法。改这条时只改推荐面板（和第 12 条的 Step 1 步骤卡），Step 3 和 Monitor 不要跟着改。

R1-28：Reading Screener Student Detail 推荐面板

![R1-28](https://uploads.linear.app/c3f6b71f-56a8-4cb4-a685-4edb2314f811/c3fd669b-ce1c-4a1a-b3ad-19e2c8e07f9b/0f2bb465-7f86-415c-93cc-14eb62d72c8f)

### 6. Quick Assign 的 Passage 行显示正文片段，不是篇目名

**已确认** · 待改

- **staging 现在**：Passage 行是正文开头片段 “Plants use sunlight, water…”，后面跟 “(same as Screener)”
- **PRD**：§7.4 Quick Assign Step 1：“Passage: [Passage Name] (same as Reading Screener). (11-05 rename)”
- **怎么验证**：按上面的方法打开 Quick Assign，看 Passage 行
- **设计稿**：[`2052:17659`](https://www.figma.com/design/pCdwCN68j1KGXz3aZZ6Wn0/Literacy-Studio-AI-Tutor?node-id=2052-17659)
- **建议**：改为 “[篇目名] (same as Reading Screener)”

R1-02：Quick Assign 弹窗（默认 Scheduled）

![R1-02](https://uploads.linear.app/c3f6b71f-56a8-4cb4-a685-4edb2314f811/513cebde-1f41-4cf6-bc74-9e640e1678ab/8c704215-1e76-4c40-818d-65e2b138ee36)

### 7. Quick Assign 两种模式的说明句都不对

**已确认** · 待改

- **staging 现在**：
  - Scheduled（默认）：“Students can start and continue any time in the window. Self-paced.”
  - Live：“You open, pause and end the practice in class. No duration or buffer.”
- **PRD**：§7.4 Mode：Live “You start, pause and end the practice in class. No time limit.”；Scheduled “Students can start any time in the window and pick up where they left off.”
- **怎么验证**：按上面的方法打开 Quick Assign，Mode 默认 Scheduled，看下面的说明句；再点 Live，看说明句
- **设计稿**：Scheduled [`2052:17659`](https://www.figma.com/design/pCdwCN68j1KGXz3aZZ6Wn0/Literacy-Studio-AI-Tutor?node-id=2052-17659)、Live [`2054:18045`](https://www.figma.com/design/pCdwCN68j1KGXz3aZZ6Wn0/Literacy-Studio-AI-Tutor?node-id=2054-18045)（11-16 已是 PRD 写法）
- **建议**：两句都按 PRD 原文改
- **差异**：Live 这句评论区和 PR #12 都没有，是 11-16 复核时新发现的（R1 只看了默认的 Scheduled）。

R1-02：Quick Assign 弹窗（默认 Scheduled）

![R1-02](https://uploads.linear.app/c3f6b71f-56a8-4cb4-a685-4edb2314f811/513cebde-1f41-4cf6-bc74-9e640e1678ab/8c704215-1e76-4c40-818d-65e2b138ee36)

R1-30：Quick Assign 弹窗，选 Live

![R1-30](https://uploads.linear.app/c3f6b71f-56a8-4cb4-a685-4edb2314f811/8f001af9-a975-4539-8ac2-2ed94cdce581/aad3c687-256f-4fe4-84a0-1a4c27d856db)

### 8. Quick Assign 去向提示的大小写和标点不对

**已确认** · 待改

- **staging 现在**：“A new AI Tutor task and assignment will be created.”
- **PRD**：§7.4 Destination hint：“A new AI Tutor task and Assignment will be created”；另外两种情况是 “A new Assignment will be created” 和 “Will join "[Assignment Name]"”（Scheduled 再加 “· N days left”）
- **怎么验证**：按上面的方法打开 Quick Assign，看弹窗底部
- **建议**：按 PRD 原文改（Assignment 首字母大写，句末不加句号）；另外两种情况一并核对

R1-02：Quick Assign 弹窗（默认 Scheduled）

![R1-02](https://uploads.linear.app/c3f6b71f-56a8-4cb4-a685-4edb2314f811/513cebde-1f41-4cf6-bc74-9e640e1678ab/8c704215-1e76-4c40-818d-65e2b138ee36)

## 创建向导

### 12. Step 1 步骤卡阶段名不对

**已确认** · 待改

- **staging 现在**：选 AI Tutor 后的步骤卡写成 “Warm-up”、“Comprehension”
- **PRD**：§3.2 Session Phases：“2. Vocabulary Warm-up”；“6. K-1: Oral Retelling; Grade 2-5: Comprehension Check.”
- **怎么验证**：[创建向导](https://staging.kira-learning.com/ai-tools/literacy-studio/create/?from=all-tasks) 选 AI Tutor、Grade 3，看右侧步骤卡
- **建议**：按 PRD 改阶段名，最后一步按年级切换
- **差异**：同第 5 条，Step 3 和 Monitor 用的短名是 PRD 的正式写法，不要跟着改。

R1-05：创建向导 Step 1，选 AI Tutor（G3）

![R1-05](https://uploads.linear.app/c3f6b71f-56a8-4cb4-a685-4edb2314f811/2b41a6c7-19d1-4e74-bd3a-fa4e186c9111/06545d11-9d08-4b89-9dd8-a5040cf09251)

### 15. 时长显示格式不对

**已确认**（格式和说明文字）；横线用短横还是长横属**设计判断** · 待改

- **staging 现在**：Step 1 步骤卡是 “About 5-7 min · AI estimate”；Step 3 头部是 “~4–7 min”（11-17 那段文字），用的是长横线 “–”，后面没有 “Self-paced · AI estimated”
- **PRD**：§3.2 Est. Duration Display：“When low ≠ high, show a range ~{low}-{high} min … Helper text: "Self-paced · AI estimated".”；§3.4 Step 3 同样写法
- **怎么验证**：Step 1 同第 12 条；Step 3 按上面「走到 Step 3」的步骤，看任务名下面那一行
- **建议**：两处统一为 “~5-7 min” 这种格式，加说明文字 “Self-paced · AI estimated”，横线都用短横线 “-”
- **差异**：
  - 评论区只写了 Step 1。Step 3 已经是 “~” 开头，但用了长横线，也缺说明文字。
  - PR #12 的「怎么验证」写的是 “按第 16 条走到 Step 3”，第 16 条在「需确认后再改」那张 sub issue 里，步骤和这里的「走到 Step 3」相同。

R1-05：创建向导 Step 1，选 AI Tutor（G3）

![R1-05](https://uploads.linear.app/c3f6b71f-56a8-4cb4-a685-4edb2314f811/2b41a6c7-19d1-4e74-bd3a-fa4e186c9111/06545d11-9d08-4b89-9dd8-a5040cf09251)

R1-09：创建向导 Step 3 Review

![R1-09](https://uploads.linear.app/c3f6b71f-56a8-4cb4-a685-4edb2314f811/b636e4fd-eb6f-4e03-adee-102ecd09a325/b9b5749c-ae73-46b3-b84f-2ea018a4f5ae)

### 17. Step 2 粘贴框 placeholder 全小写，“0 word” 单复数错

**已确认** · 待改

- **staging 现在**：placeholder 是全小写 “paste passage text here...”；字数显示 “0 word”
- **PRD**：§3.3 Paste Text：“placeholder "Paste passage text here...".”；[写作规范](https://github.com/chao653/Literacy-Studio/blob/f3cfd6925f5bc998393b28b55209db72f4b4335e/%E8%AE%BE%E8%AE%A1%E6%89%A7%E8%A1%8C/%E8%A7%84%E8%8C%83/%E5%86%99%E4%BD%9C%E8%A7%84%E8%8C%83.md) 一-5（禁全小写）
- **怎么验证**：[创建向导](https://staging.kira-learning.com/ai-tools/literacy-studio/create/?from=all-tasks) 填完 Step 1 → Continue → 点 Paste Text
- **建议**：placeholder 改为 “Paste passage text here...”；字数改为 “0 words”（1 时用 “1 word”）

R1-06：创建向导 Step 2 粘贴框（空）

![R1-06](https://uploads.linear.app/c3f6b71f-56a8-4cb4-a685-4edb2314f811/38e1d6f2-1fa8-4214-b034-0ad7a267ab1a/1dd8b682-ccb8-4129-acc9-b0377ca554b3)

### 21. Task Name placeholder 不对

**已确认** · 待改

- **staging 现在**：placeholder 是 “Enter task name”
- **PRD**：§3.2：“Task Name: large text input, required, max 60 characters, placeholder "Name your task...".”
- **怎么验证**：[创建向导](https://staging.kira-learning.com/ai-tools/literacy-studio/create/?from=all-tasks) Task Name 输入框
- **建议**：改为 “Name your task...”

R1-04：创建向导 Step 1，未选类型

![R1-04](https://uploads.linear.app/c3f6b71f-56a8-4cb4-a685-4edb2314f811/67700e4b-e071-4cba-aec8-13863f4e3666/103dc5ce-ac62-46a2-9d7b-555bf327e63d)

## Task Detail 与 Assign 弹窗

### 24. Task Detail 返回写成 “← Literacy Studio”

**已确认** · 待改

- **staging 现在**：左上返回是 “← Literacy Studio”
- **PRD**：§4.1：“Breadcrumb: ← Back to Dashboard.”
- **怎么验证**：[Task Detail](https://staging.kira-learning.com/ai-tools/literacy-studio/task/01a1aacb-5c23-7426-bf3e-45055e0a6346/) 左上
- **设计稿**：[`1925:16761`](https://www.figma.com/design/pCdwCN68j1KGXz3aZZ6Wn0/Literacy-Studio-AI-Tutor?node-id=1925-16761) 已是 PRD 写法
- **建议**：改为 “← Back to Dashboard”

R1-10：Task Detail

![R1-10](https://uploads.linear.app/c3f6b71f-56a8-4cb4-a685-4edb2314f811/d7dbca8d-5f7c-4608-8b5b-e5f6415189ed/fd438bc3-9746-48ef-a508-a8a90978799f)

### 25. Edit Task 锁定说明的文案和形式不对

**已确认**（文案）／**设计判断**（用行内文字还是悬停提示）· 待改

- **staging 现在**：锁定说明直接写在卡片里：“Students have started this task, so editing is locked.”
- **PRD**：§4.1 Edit Task：“If any Assignment is In Progress / Paused / Ended / Expired: disabled, tooltip "This task has active assignments and cannot be edited."”
- **怎么验证**：[Task Detail](https://staging.kira-learning.com/ai-tools/literacy-studio/task/01a1aacb-5c23-7426-bf3e-45055e0a6346/) Edit Task 卡片
- **设计稿**：[`1925:16761`](https://www.figma.com/design/pCdwCN68j1KGXz3aZZ6Wn0/Literacy-Studio-AI-Tutor?node-id=1925-16761)（悬停提示）
- **建议**：文案按 PRD；形式按设计稿改成悬停提示，或保留行内但换成 PRD 文案

R1-10：Task Detail

![R1-10](https://uploads.linear.app/c3f6b71f-56a8-4cb4-a685-4edb2314f811/d7dbca8d-5f7c-4608-8b5b-e5f6415189ed/fd438bc3-9746-48ef-a508-a8a90978799f)

### 26. 列表标题写成 “Assignments”

**已确认** · 待改

- **staging 现在**：Assignment 列表标题是 “Assignments”
- **PRD**：§4.1：“Assignment list: title "View All Assignments".”
- **怎么验证**：[Task Detail](https://staging.kira-learning.com/ai-tools/literacy-studio/task/01a1aacb-5c23-7426-bf3e-45055e0a6346/) Assignment 列表标题
- **建议**：改为 “View All Assignments”

R1-10：Task Detail

![R1-10](https://uploads.linear.app/c3f6b71f-56a8-4cb4-a685-4edb2314f811/d7dbca8d-5f7c-4608-8b5b-e5f6415189ed/fd438bc3-9746-48ef-a508-a8a90978799f)

### 30. “Schedule Mode” 应为 “Scheduled Mode”

**已确认** · 待改

- **staging 现在**：Assign 弹窗 Schedule Type 选项写 “Schedule Mode”
- **PRD**：§7.1：“Schedule Type: Live Mode or Scheduled Mode.”
- **怎么验证**：[Assign 弹窗](https://staging.kira-learning.com/ai-tools/literacy-studio/task/01a1aacb-5c23-7426-bf3e-45055e0a6346/?assign=true)（链接直接打开弹窗；看完点 Cancel 或按 Esc）
- **建议**：改为 “Scheduled Mode”

R1-11：Assign 弹窗

![R1-11](https://uploads.linear.app/c3f6b71f-56a8-4cb4-a685-4edb2314f811/43caf258-be07-464e-821d-de3582f913b7/c7cd5990-ed2a-4a2b-b938-73358b120023)

## Monitor

### 33. Your Turn 提示末句写 “(teacher)”，应为 “(teacher mark)”

**已确认** · 待改（设计稿 11-16 已改）

- **staging 现在**：Monitor Your Turn 列表头 (i) 提示最后一句是 “your mark then shows here as “→ … (teacher)””
- **PRD**：§5.4.3 Teacher mark：“Monitor then appends after the behavior label, e.g. No help → Read it (teacher mark).”
- **怎么验证**：[Monitor（Live）](https://staging.kira-learning.com/ai-tools/literacy-studio/task/01a1aacb-5c23-7426-bf3e-45055e0a6346/session/01a1aae5-14de-757d-bb9f-25878f5c3a1d/) 悬停表头 Your Turn 旁的 (i)，看最后一句
- **设计稿**：Monitor 提示层 [`2488:29877`](https://www.figma.com/design/pCdwCN68j1KGXz3aZZ6Wn0/Literacy-Studio-AI-Tutor?node-id=2488-29877)（在 [`2159:26726`](https://www.figma.com/design/pCdwCN68j1KGXz3aZZ6Wn0/Literacy-Studio-AI-Tutor?node-id=2159-26726) 里）
- **建议**：改为 “(teacher mark)”
- **差异**：
  - PRD 自己前后不一致：§5.4.3 的标注三选一写 “Read it / Needed support / Can't tell”，§6.2 写 “Read it / Still needs support / Can't tell”。[产品规则](https://github.com/chao653/Literacy-Studio/blob/f3cfd6925f5bc998393b28b55209db72f4b4335e/%E9%9C%80%E6%B1%82%E6%96%87%E6%A1%A3/01_%E4%BA%A7%E5%93%81%E8%A7%84%E5%88%99.md)（11-12）定为按 §6.2，§5.4.3 还没回写，前端别照 §5.4.3 做出第三种写法。提示的整句 PRD 没定，只给了上面这个例子。
  - PR #12 的建议引了仓库里 `待确认问题清单.md` 第 21 条，评论区没引，说的是同一件事。

R1-29：Monitor Your Turn 表头 (i) 提示（只截了表头和提示）

![R1-29](https://uploads.linear.app/c3f6b71f-56a8-4cb4-a685-4edb2314f811/c8198d7e-bd0d-4ae1-8c98-e353df923af8/154a237c-3bce-4657-9831-544d27e09b7f)

### 34. Remove 弹窗警告少半句

**已确认** · 待改

- **staging 现在**：警告只有 “This action cannot be undone.”
- **PRD**：§7.2 Warning：“This action cannot be undone. All progress and results for this student in this assignment will be permanently deleted.”
- **怎么验证**：[Monitor（Live）](https://staging.kira-learning.com/ai-tools/literacy-studio/task/01a1aacb-5c23-7426-bf3e-45055e0a6346/session/01a1aae5-14de-757d-bb9f-25878f5c3a1d/) 学生行最右的 “⋯”（More actions）→ Remove；看完点 Cancel
- **设计稿**：[`2155:26011`](https://www.figma.com/design/pCdwCN68j1KGXz3aZZ6Wn0/Literacy-Studio-AI-Tutor?node-id=2155-26011)
- **建议**：补全后半句

R1-13：Remove 弹窗

![R1-13](https://uploads.linear.app/c3f6b71f-56a8-4cb4-a685-4edb2314f811/7d717a37-d0fe-4cb8-b414-4bc4d6c69910/d0c190de-0c7a-4357-8a86-ed235935df74)

## Student Detail

### 36. 返回写成 “← Assignment Monitor”

**已确认** · 待改

- **staging 现在**：左上返回是 “← Assignment Monitor”
- **PRD**：§6.0：“Back: ← Back to Assignment.”
- **怎么验证**：[Student Detail](https://staging.kira-learning.com/ai-tools/literacy-studio/task/01a1aacb-5c23-7426-bf3e-45055e0a6346/session/01a1aaf9-a829-705d-8bee-2edaf7cde712/student/0196ec29e03077fc9d420a91f5543373/) 左上
- **建议**：改为 “← Back to Assignment”

R1-15：Student Detail 顶部

![R1-15](https://uploads.linear.app/c3f6b71f-56a8-4cb4-a685-4edb2314f811/696446f8-559b-48c2-ae37-7439d0d65fa8/b54bf7e8-d79d-480a-87d6-d9e8b04195a2)

### 37. 翻页写成 “Previous Student” / “Next Student”

**已确认** · 待改

- **staging 现在**：右上翻页是 “Previous Student” / “Next Student”
- **PRD**：§6.0：“Student pagination: ← Prev / Next →.”
- **怎么验证**：[Student Detail](https://staging.kira-learning.com/ai-tools/literacy-studio/task/01a1aacb-5c23-7426-bf3e-45055e0a6346/session/01a1aaf9-a829-705d-8bee-2edaf7cde712/student/0196ec29e03077fc9d420a91f5543373/) 右上
- **建议**：改为 “← Prev” / “Next →”

R1-15：Student Detail 顶部

![R1-15](https://uploads.linear.app/c3f6b71f-56a8-4cb4-a685-4edb2314f811/696446f8-559b-48c2-ae37-7439d0d65fa8/b54bf7e8-d79d-480a-87d6-d9e8b04195a2)

### 38. 教师标注文案还是旧版

**已确认** · 待改

- **staging 现在**：标注按钮是 “Read it / Needs support / Unclear”，Summary 写 “Your mark: Needs support”
- **PRD**：§6.2：“the teacher gets a three-way choice — Read it / Still needs support / Can't tell”
- **怎么验证**：[Student Detail](https://staging.kira-learning.com/ai-tools/literacy-studio/task/01a1aacb-5c23-7426-bf3e-45055e0a6346/session/01a1aaf9-a829-705d-8bee-2edaf7cde712/student/0196ec29e03077fc9d420a91f5543373/) 右栏 Your Turn 下的标注按钮；顶部 Summary 的 Your Turn 卡
- **设计稿**：[`2254:29181`](https://www.figma.com/design/pCdwCN68j1KGXz3aZZ6Wn0/Literacy-Studio-AI-Tutor?node-id=2254-29181) 已按 PRD
- **建议**：按钮和 Summary 一起改；Monitor Your Turn 第二行也要同步
- **差异**：同第 33 条，PRD §5.4.3 写的是 “Needed support”，按产品规则以 §6.2 为准。

R1-20：Student Detail，有 Kira 提示的学生

![R1-20](https://uploads.linear.app/c3f6b71f-56a8-4cb4-a685-4edb2314f811/7c6f18bd-1d94-4e87-8fed-855b3e59f563/470afc40-fb74-403d-9ba2-3c27b0590e21)

### 39. 证据分组标题带了次数

**已确认** · 待改

- **staging 现在**：左栏分组标题写成 “Kira gave a hint on these words · 1”
- **PRD**：§6.2 分组标题就是 “Kira gave a hint on these words”；[产品规则](https://github.com/chao653/Literacy-Studio/blob/f3cfd6925f5bc998393b28b55209db72f4b4335e/%E9%9C%80%E6%B1%82%E6%96%87%E6%A1%A3/01_%E4%BA%A7%E5%93%81%E8%A7%84%E5%88%99.md) “词标签一律灰色，不写次数”
- **怎么验证**：[Student Detail](https://staging.kira-learning.com/ai-tools/literacy-studio/task/01a1aacb-5c23-7426-bf3e-45055e0a6346/session/01a1aaf9-a829-705d-8bee-2edaf7cde712/student/0196ec29e03077fc9d420a91f5543373/) 左栏 “With Kira's support” 分组标题
- **建议**：去掉 “· 1”

R1-20：Student Detail，有 Kira 提示的学生

![R1-20](https://uploads.linear.app/c3f6b71f-56a8-4cb4-a685-4edb2314f811/7c6f18bd-1d94-4e87-8fed-855b3e59f563/470afc40-fb74-403d-9ba2-3c27b0590e21)

### 41. “Open response” 应为 “Open Response”

**已确认** · 待改

- **staging 现在**：Comprehension 区开放题徽标写成 “Open response”
- **PRD**：§6.2 Open Response card：“Title: "Open Response".”；[写作规范](https://github.com/chao653/Literacy-Studio/blob/f3cfd6925f5bc998393b28b55209db72f4b4335e/%E8%AE%BE%E8%AE%A1%E6%89%A7%E8%A1%8C/%E8%A7%84%E8%8C%83/%E5%86%99%E4%BD%9C%E8%A7%84%E8%8C%83.md) 三（Badge 用 Title Case）
- **怎么验证**：[Student Detail](https://staging.kira-learning.com/ai-tools/literacy-studio/task/01a1aacb-5c23-7426-bf3e-45055e0a6346/session/01a1aaf9-a829-705d-8bee-2edaf7cde712/student/0196ec29e03077fc9d420a91f5543373/) 往下滚到 Comprehension 区
- **建议**：改为 “Open Response”

R1-21：Student Detail 下半（Comprehension）

![R1-21](https://uploads.linear.app/c3f6b71f-56a8-4cb4-a685-4edb2314f811/55c7959e-f3a2-4dd3-83cf-bbf096cf58bd/48527c3b-500e-4f94-8e9d-fc2eff378920)

## Preview

### 45. Preview 准备页写着 “Your reading is recorded for your teacher.”

**已确认** · 待改

- **staging 现在**：预览的 “Ready to read with Kira?” 页写着 “Your reading is recorded for your teacher.”
- **PRD**：§4.1 Preview Task：“No student data is saved.”
- **怎么验证**：[Preview](https://staging.kira-learning.com/ai-tools/literacy-studio/task/01a1aacb-5c23-7426-bf3e-45055e0a6346/preview/) 点 Allow Microphone →（没有麦克风时）Skip, start reading，看 “Ready to read with Kira?” 页
- **建议**：预览模式隐藏这句，或换成不涉及记录的说法；不要加横幅
- **差异**：PRD §4.1 还写着要显示预览横幅 “Preview Mode — Your actions won't be recorded.”，“Exit Preview” 回到 Assignment 列表；[产品规则](https://github.com/chao653/Literacy-Studio/blob/f3cfd6925f5bc998393b28b55209db72f4b4335e/%E9%9C%80%E6%B1%82%E6%96%87%E6%A1%A3/01_%E4%BA%A7%E5%93%81%E8%A7%84%E5%88%99.md)（用户 09-29 定）是不加预览条、左上 Home 换成 “← Exit Preview”。用户的决定优先于 PRD，所以这条按产品规则建议。PRD §4.1 还没回写，前端别照 PRD 加横幅。

R1-23：Preview 准备页 “Ready to read with Kira?”

![R1-23](https://uploads.linear.app/c3f6b71f-56a8-4cb4-a685-4edb2314f811/3349d319-9d40-4b61-ac50-3d03b07cd979/61360e09-5503-4f84-a929-51a08857ad6f)

### 46. Warm-up 的 Kira 气泡和词卡内容重复

**设计判断** · 待改

- **staging 现在**：第 1 个词 “chrysalis”，意思和文中用法都讲了两遍：
  - Kira 气泡：“A chrysalis is the case a butterfly grows in as it changes. In this passage, the class watches a chrysalis near the window.”
  - 词卡：“A chrysalis is the hard case where a butterfly changes before it becomes an adult butterfly.” 下面还有 “This word names the thing the class is watching near the window.”
- **PRD**：§3.4 [T9]：“Each warm-up word comes with a pre-generated spoken Kira explanation (plain-language meaning + how the word is used in this passage).”
- **怎么验证**：[Preview](https://staging.kira-learning.com/ai-tools/literacy-studio/task/01a1aacb-5c23-7426-bf3e-45055e0a6346/preview/) 点 Allow Microphone →（没有麦克风时）Skip, start reading → Start → Skip intro，走到 Warm-up 第 1 个词
- **建议**：气泡偏讲 “这个词在文中怎么用”，词卡只留简短释义，去掉 “This word names…” 这一句
- **差异**：评论区和 PR #12 只写了释义重复；复核看到文中用法也重复了（11-17 仍是这样）。

R1-25：Preview Warm-up

![R1-25](https://uploads.linear.app/c3f6b71f-56a8-4cb4-a685-4edb2314f811/d13ef3c6-1866-4244-b312-1285b731a27f/148436f7-eacd-44c8-8772-51e5312a1f58)

---

## [APACUIX-545](https://linear.app/kira-learning/issue/APACUIX-545) R1 走查 · 功能与内容缺失（6 条）

R1 走查 · 功能与内容缺失：共 6 条，都是 staging 要改的。已确认 5 条、设计判断 1 条（第 27 条）；第 4、13 条各有一部分属设计判断，第 27 条有一部分属已确认，这 3 条的分级和评论区不同，条目里写明了。编号沿用 [APACUIX-543 评论区](https://linear.app/kira-learning/issue/APACUIX-543/design-qa#comment-c5d2e781) 和 [PR #12](https://github.com/chao653/Literacy-Studio/pull/12)。每条的问题、验证链接、PRD 原文和截图放在一起。

**11-17 复核**：按下面的验证链接在 staging 上重新走了一遍，6 条都还能复现。

**差异**：PRD、PR #12 正文、评论区和 staging 有对不上的，条目最后有「差异」一行；没有这一行的条目，几处说法一致。

**验证前须知**

* 打开 staging 前先切到 **Teacher** 角色（Home 页左下角点角色名切换；Admin 进 Literacy Studio 是 403）。
* 创建向导看完点左上 ← 再选 Discard，不会留下草稿。
* 截图里的账号姓名已替换成 “Test User”。

---

### 31. Monitor 没有状态筛选

**已确认** · 待改（本轮最优先）

- **staging 现在**：AI Tutor Monitor 表格上方没有状态筛选
- **PRD**：§5.2：“Status filter: All / In Progress / Completed / Ended / Expired / Not Started.”
- **怎么验证**：[Monitor（Live）](https://staging.kira-learning.com/ai-tools/literacy-studio/task/01a1aacb-5c23-7426-bf3e-45055e0a6346/session/01a1aae5-14de-757d-bb9f-25878f5c3a1d/)、[Monitor（Scheduled · Expired）](https://staging.kira-learning.com/ai-tools/literacy-studio/task/01a1a58b-3385-770f-bc79-35937691ac3d/session/01a1a59b-ec21-76b5-a02f-2a336a1b55f4/) 表格上方
- **设计稿**：[`2159:26726`](https://www.figma.com/design/pCdwCN68j1KGXz3aZZ6Wn0/Literacy-Studio-AI-Tutor?node-id=2159-26726) 等已有（灰底分段 Tabs）
- **建议**：按设计稿补六项状态筛选

R1-12：Monitor（Live · In Progress）

![R1-12](https://uploads.linear.app/c3f6b71f-56a8-4cb4-a685-4edb2314f811/31b18d15-8c7e-4f52-8a6c-f04b12773b27/f465fe62-410a-49dd-af93-7f7ac645fa50)

R1-18：Monitor（Scheduled · Expired）

![R1-18](https://uploads.linear.app/c3f6b71f-56a8-4cb4-a685-4edb2314f811/1b57ab6e-eece-4cc4-9689-c735806701d2/29c245d6-cc04-43bc-8059-b2b1eb01ed77)

### 43. Preview 没有学生顶栏，Exit Preview 位置不对

**已确认** · 待改

- **staging 现在**：预览页没有学生顶栏（Home、进度条、奖杯），页面上也没有 “Step N of M · step name”；“Exit Preview” 在右上角，不是替换左上的 Home。Step 3 内嵌预览是有顶栏的（R1-09），两处不一致
- **PRD**：[Student View](https://app.notion.com/p/34e70a1b99248122af86e22655dad2ca) §3 Player top bar（10-24）：“The top bar holds only three things: "Home" at the top left, one progress bar, and a trophy at the end.”；“The step number is written on the page, not in the top bar: "Step N of M · step name".”；[产品规则](https://github.com/chao653/Literacy-Studio/blob/f3cfd6925f5bc998393b28b55209db72f4b4335e/%E9%9C%80%E6%B1%82%E6%96%87%E6%A1%A3/01_%E4%BA%A7%E5%93%81%E8%A7%84%E5%88%99.md) “Preview 不加预览条…Home 换成 ← Exit Preview”
- **怎么验证**：[Preview](https://staging.kira-learning.com/ai-tools/literacy-studio/task/01a1aacb-5c23-7426-bf3e-45055e0a6346/preview/) 点 Allow Microphone →（没有麦克风时）Skip, start reading → Start → Skip intro，每一页都看顶部
- **设计稿**：[`2118:33782`](https://www.figma.com/design/pCdwCN68j1KGXz3aZZ6Wn0/Literacy-Studio-AI-Tutor?node-id=2118-33782)（11-16 已按 10-24 版改顶栏，左上是 “← Exit Preview”）
- **建议**：预览页用学生端同一顶栏，左上 Home 换成 “← Exit Preview”；页面上补步骤编号
- **差异**：PRD Teacher View §4.1 还写着要显示预览横幅，并且 “"Exit Preview" returns to the task's Assignment list”，和产品规则不同（文案 sub issue 第 45 条同一个问题）。按用户定的产品规则做，PRD §4.1 待回写。

R1-24：Preview Intro

![R1-24](https://uploads.linear.app/c3f6b71f-56a8-4cb4-a685-4edb2314f811/d3136196-f32f-417b-b21e-71d5316cb7c9/da51e5af-c937-46ca-8234-61774bf54587)

R1-25：Preview Warm-up

![R1-25](https://uploads.linear.app/c3f6b71f-56a8-4cb4-a685-4edb2314f811/d13ef3c6-1866-4244-b312-1285b731a27f/148436f7-eacd-44c8-8772-51e5312a1f58)

R1-26：Preview Echo Reading（G3）

![R1-26](https://uploads.linear.app/c3f6b71f-56a8-4cb4-a685-4edb2314f811/88ac6ed5-72d4-403b-9a2b-4b1603e00757/c5c046e3-c7e1-4879-b0bd-5c43de3c02f4)

### 4. 推荐面板缺目标词和 “What this passage needs” 标签

**已确认**（目标词、“What this passage needs” 标签）／**设计判断**（“Fixed sequence” 标记）· 待改

- **staging 现在**：推荐面板只有 6 个步骤，没有列目标词，也没有 “What this passage needs” 标签；设计稿里画的 “Fixed sequence” 标记也没有
- **PRD**：§7.4：“Phase 1: target-word recommendations use the "what this passage needs" tier only — AI picks core words from the passage, all honestly tagged "What this passage needs". The recommendation panel copy must not imply "a personalised plan based on this student's misread words"”
- **怎么验证**：[Screener Student Detail](https://staging.kira-learning.com/ai-tools/literacy-studio/task/01a1a4bf-a0c7-72d2-a132-4ef9446fbc7f/session/01a1a4ee-b010-762d-966e-9070b8c8fe6a/student/0196ec29e03077fc9d420a91f5543373/) 右侧 “Recommended AI Tutor Plan”
- **设计稿**：[`2066:19598`](https://www.figma.com/design/pCdwCN68j1KGXz3aZZ6Wn0/Literacy-Studio-AI-Tutor?node-id=2066-19598)、[`2072:22227`](https://www.figma.com/design/pCdwCN68j1KGXz3aZZ6Wn0/Literacy-Studio-AI-Tutor?node-id=2072-22227) 已画
- **建议**：按设计稿补目标词和 “What this passage needs” 标签，“Fixed sequence” 标记也按设计稿加；文案不要暗示是按学生个人错词定制
- **差异**：PRD 没要求推荐面板有 “Fixed sequence” 标记，只有设计稿画了。评论区和 PR #12 整条标已确认，这里拆开。

R1-28：Reading Screener Student Detail 推荐面板

![R1-28](https://uploads.linear.app/c3f6b71f-56a8-4cb4-a685-4edb2314f811/c3fd669b-ce1c-4a1a-b3ad-19e2c8e07f9b/0f2bb465-7f86-415c-93cc-14eb62d72c8f)

### 13. Step 1 步骤卡看不出是固定顺序，Your Turn 缺 “New” 标签

**已确认**（“New” 标签；让老师一眼看出是固定顺序）／**设计判断**（用 “Fixed sequence” 标记加说明句的具体做法）· 待改

- **staging 现在**：步骤卡没有 “Fixed sequence” 标记和说明句；Your Turn 没有 “New” 标签
- **PRD**：§3.2：“[New] Your Turn — … Carries a "New" tag.”；“Product requirement: teachers must see at a glance that these six phases are a fixed sequence, not selectable options.”；参考做法（“final styling is Design's call”）：标题行加 “Fixed sequence” 标记，下面一句 “Every session runs all six phases in this order; they cannot be disabled or reordered”
- **怎么验证**：[创建向导](https://staging.kira-learning.com/ai-tools/literacy-studio/create/?from=all-tasks) 选 AI Tutor、Grade 3，看右侧步骤卡
- **设计稿**：[`1947:13072`](https://www.figma.com/design/pCdwCN68j1KGXz3aZZ6Wn0/Literacy-Studio-AI-Tutor?node-id=1947-13072) 已有
- **建议**：按设计稿补 “Fixed sequence” 标记、说明句和 “New” 标签
- **差异**：评论区和 PR #12 整条标设计判断。PRD 里 “New” 标签和 “一眼看出是固定顺序” 是写死的要求，应为已确认；只有具体样式由设计定。

R1-05：创建向导 Step 1，选 AI Tutor（G3）

![R1-05](https://uploads.linear.app/c3f6b71f-56a8-4cb4-a685-4edb2314f811/2b41a6c7-19d1-4e74-bd3a-fa4e186c9111/06545d11-9d08-4b89-9dd8-a5040cf09251)

### 14. Step 1 缺 Session Type（Reading / Phonics）

**已确认** · 待改

- **staging 现在**：选 AI Tutor 后没有 Session Type 行，看不到 Phonics 的 Preview 入口
- **PRD**：§3.2 Session Type：“Reading is the default and can be saved.”；“Phonics is visible as a "Preview". It can be clicked for stakeholder feedback, but a Phonics task cannot be saved in this release.”；“If Phonics is selected, show "Coming soon"; … Step 3 "Save & Assign" is disabled with the tooltip "Phonics is coming soon."”
- **怎么验证**：同第 13 条，步骤卡上方没有 Session Type 行
- **设计稿**：[`1947:13072`](https://www.figma.com/design/pCdwCN68j1KGXz3aZZ6Wn0/Literacy-Studio-AI-Tutor?node-id=1947-13072) 已有
- **建议**：补 Session Type：Reading 默认选中；Phonics 可点，显示 “Coming soon”，Step 3 不能保存

R1-05：创建向导 Step 1，选 AI Tutor（G3）

![R1-05](https://uploads.linear.app/c3f6b71f-56a8-4cb4-a685-4edb2314f811/2b41a6c7-19d1-4e74-bd3a-fa4e186c9111/06545d11-9d08-4b89-9dd8-a5040cf09251)

### 27. Assignment 卡片缺时间和完成人数

**设计判断**（卡片上的时间和完成人数）／**已确认**（列表底部 “All assignments loaded”）· 待改

- **staging 现在**：卡片只有 “1 Student”，没有时间（Live 开始时间 / Scheduled 时间窗）和完成人数；列表底部也没有 “All assignments loaded”
- **PRD**：§4.1：“Grid: 2 columns, 10 cards per page, infinite scroll, then "All assignments loaded".”；卡片上显示什么，PRD 没写
- **怎么验证**：[Task Detail](https://staging.kira-learning.com/ai-tools/literacy-studio/task/01a1aacb-5c23-7426-bf3e-45055e0a6346/) Assignment 卡片和列表底部
- **设计稿**：[`1925:16761`](https://www.figma.com/design/pCdwCN68j1KGXz3aZZ6Wn0/Literacy-Studio-AI-Tutor?node-id=1925-16761)（卡片上有时间和 “8/24 Students ✓”）
- **建议**：按设计稿补时间和完成人数；底部结束语按 PRD 加上
- **差异**：评论区和 PR #12 整条标设计判断；底部结束语 PRD 有原文，应为已确认。

R1-10：Task Detail

![R1-10](https://uploads.linear.app/c3f6b71f-56a8-4cb4-a685-4edb2314f811/d7dbca8d-5f7c-4608-8b5b-e5f6415189ed/fd438bc3-9746-48ef-a508-a8a90978799f)

---

## [APACUIX-546](https://linear.app/kira-learning/issue/APACUIX-546) R1 走查 · 布局与样式（4 条）

R1 走查 · 布局与样式：共 4 条，都是 staging 要改的。已确认 2 条、设计判断 2 条。编号沿用 [APACUIX-543 评论区](https://linear.app/kira-learning/issue/APACUIX-543/design-qa#comment-c5d2e781) 和 [PR #12](https://github.com/chao653/Literacy-Studio/pull/12)。每条的问题、验证链接、PRD 原文和截图放在一起。

**11-17 复核**：按下面的验证链接在 staging 上重新走了一遍，4 条都还能复现。

**差异**：PRD、PR #12 正文、评论区和 staging 有对不上的，条目最后有「差异」一行；没有这一行的条目，几处说法一致。

**验证前须知**

* 打开 staging 前先切到 **Teacher** 角色（Home 页左下角点角色名切换；Admin 进 Literacy Studio 是 403）。
* 弹窗只看不提交，都点 Cancel；创建向导看完点左上 ← 再选 Discard。
* 截图里的账号姓名已替换成 “Test User”。

---

### 10. Step 1 的 Task Type 不在第一位

**已确认** · 待改（设计稿 11-16 已改）

- **staging 现在**：Step 1 左栏顺序是 Task Name → Grade Level → Language → Task Type
- **PRD**：§3.2（11-05 [APACFE-4690](https://linear.app/kira-learning/issue/APACFE-4690/literacy-studio-ai-tutorfecreate-task-step-1)）：“Task Type: first field in the left column, above Task Name, Grade and Language. Two-card single selection: Reading Screener and AI Tutor. Neither card is selected on entry.”
- **怎么验证**：[创建向导](https://staging.kira-learning.com/ai-tools/literacy-studio/create/?from=all-tasks) Step 1 左栏
- **设计稿**：[`1947:13006`](https://www.figma.com/design/pCdwCN68j1KGXz3aZZ6Wn0/Literacy-Studio-AI-Tutor?node-id=1947-13006)、[`1947:13072`](https://www.figma.com/design/pCdwCN68j1KGXz3aZZ6Wn0/Literacy-Studio-AI-Tutor?node-id=1947-13072)
- **建议**：Task Type 移到左栏最上方

R1-04：创建向导 Step 1，未选类型

![R1-04](https://uploads.linear.app/c3f6b71f-56a8-4cb4-a685-4edb2314f811/67700e4b-e071-4cba-aec8-13863f4e3666/103dc5ce-ac62-46a2-9d7b-555bf327e63d)

R1-05：创建向导 Step 1，选 AI Tutor（G3）

![R1-05](https://uploads.linear.app/c3f6b71f-56a8-4cb4-a685-4edb2314f811/2b41a6c7-19d1-4e74-bd3a-fa4e186c9111/06545d11-9d08-4b89-9dd8-a5040cf09251)

### 11. Step 1 右栏说明卡没和类型卡对齐

**已确认** · 待改

- **staging 现在**：11-17 量得：右栏 “Choose a task type” 说明卡顶部和 Task Name 齐平，高 92px；类型卡高 126px
- **PRD**：§3.2 Right column（11-05）：“Its top aligns with the type cards (not with the "Task Type" label) and it has the same height as them.”
- **怎么验证**：[创建向导](https://staging.kira-learning.com/ai-tools/literacy-studio/create/?from=all-tasks) 先不选类型，看右栏说明卡
- **建议**：第 10 条改完后，说明卡顶部对齐类型卡，高度和类型卡一致

R1-04：创建向导 Step 1，未选类型

![R1-04](https://uploads.linear.app/c3f6b71f-56a8-4cb4-a685-4edb2314f811/67700e4b-e071-4cba-aec8-13863f4e3666/103dc5ce-ac62-46a2-9d7b-555bf327e63d)

### 35. Remove 和 End 两个确认弹窗样式不统一

**设计判断** · 待改

- **staging 现在**（11-16 量得）：
  - Remove 弹窗宽 480px，右上关闭是 16px 的图标，主按钮红色、圆角 6px
  - End 弹窗宽 600px，右上关闭是 36px 的按钮，主按钮紫色、全圆角
  - End 弹窗右上关闭按钮的读屏名称是 “Cancel”，和底部 Cancel 按钮重名（11-17 仍是）
- **PRD**：§7.2（Remove）和 §7.3（End，标题 “End This Assignment?”，按钮 Cancel / End Assignment）只定了文案，没定样式
- **怎么验证**：[Monitor（Live）](https://staging.kira-learning.com/ai-tools/literacy-studio/task/01a1aacb-5c23-7426-bf3e-45055e0a6346/session/01a1aae5-14de-757d-bb9f-25878f5c3a1d/) 学生行最右的 “⋯” → Remove 打开 Remove 弹窗；再点右上 End Task 打开 End 弹窗；两个都点 Cancel
- **设计稿**：[`2155:26011`](https://www.figma.com/design/pCdwCN68j1KGXz3aZZ6Wn0/Literacy-Studio-AI-Tutor?node-id=2155-26011)、[`2160:26919`](https://www.figma.com/design/pCdwCN68j1KGXz3aZZ6Wn0/Literacy-Studio-AI-Tutor?node-id=2160-26919)
- **建议**：两个弹窗用同一个确认弹窗组件，宽度和关闭按钮一致；危险操作统一用红色主按钮；End 弹窗关闭按钮的读屏名称改成 “Close”
- **差异**：评论区只写了关闭图标、按钮颜色和圆角；宽度不同和读屏名称重名是 11-16 复核补的。PR #12 的依据写 “B 轨组件一致性”，评论区写 “组件一致性”，意思一样。

R1-13：Remove 弹窗

![R1-13](https://uploads.linear.app/c3f6b71f-56a8-4cb4-a685-4edb2314f811/7d717a37-d0fe-4cb8-b414-4bc4d6c69910/d0c190de-0c7a-4357-8a86-ed235935df74)

R1-14：End Task 弹窗

![R1-14](https://uploads.linear.app/c3f6b71f-56a8-4cb4-a685-4edb2314f811/48c907f1-5711-44ee-99f6-6a9fc3ab7e5b/f681e4ab-95c3-4420-9d0d-0addb9548eb9)

### 44. Preview 嵌在老师端外壳里

**设计判断** · 待改

- **staging 现在**：预览嵌在老师端外壳里，左侧老师端导航一直可见，和学生真实看到的全屏页面不一样
- **PRD**：§4.1 Preview Task：“The teacher enters the student-side AI Tutor experience from Task Detail.”
- **怎么验证**：[Preview](https://staging.kira-learning.com/ai-tools/literacy-studio/task/01a1aacb-5c23-7426-bf3e-45055e0a6346/preview/) 每一页左侧都有老师端导航
- **建议**：预览改为全屏学生端页面，只留 “← Exit Preview” 出口（和功能 sub issue 第 43 条一起改）

R1-22：Preview Mic Check

![R1-22](https://uploads.linear.app/c3f6b71f-56a8-4cb4-a685-4edb2314f811/92e93c2f-9252-4106-8ad6-94ccdb9cefa1/32cbec50-ea83-47a7-9661-1daec829bac8)

---

## [APACUIX-547](https://linear.app/kira-learning/issue/APACUIX-547) R1 走查 · 交互与导航（3 条）

R1 走查 · 交互与导航：共 3 条，都是 staging 要改的。已确认 2 条、设计判断 1 条。编号沿用 [APACUIX-543 评论区](https://linear.app/kira-learning/issue/APACUIX-543/design-qa#comment-c5d2e781) 和 [PR #12](https://github.com/chao653/Literacy-Studio/pull/12)。每条的问题、验证链接、PRD 原文和截图放在一起。

**11-17 复核**：按下面的验证链接在 staging 上重新走了一遍，3 条都还能复现。

**差异**：PRD、PR #12 正文、评论区和 staging 有对不上的，条目最后有「差异」一行；没有这一行的条目，几处说法一致。

**验证前须知**

* 打开 staging 前先切到 **Teacher** 角色（Home 页左下角点角色名切换；Admin 进 Literacy Studio 是 403）。
* **走到 Step 3**：[创建向导](https://staging.kira-learning.com/ai-tools/literacy-studio/create/?from=all-tasks) 选 AI Tutor、填任务名、Grade 3 → Continue → Paste Text，贴一段 150–250 词的文字 → Continue，等约 30 秒生成。看完点左上 ← 再选 Discard，不会留下草稿。
* 截图里的账号姓名已替换成 “Test User”。

---

### 20. 从 All Tasks 进入，Step 3 弃稿后回到 Dashboard

**已确认** · 待改

- **staging 现在**：从 All Tasks 进入向导，到 Step 3 点 ← 再选 Discard，落到 `/dashboard/`，不是来时的 `/all-tasks/`。Step 2 弃稿能正确回到 `/all-tasks/`（11-17 两个都又试了一次）
- **PRD**：§3.1 Wizard navigation（11-05）：“← always leaves the create flow and returns to the page the teacher came from (Dashboard or View All Tasks); it does not step back through browser history.”
- **怎么验证**：在 [All Tasks](https://staging.kira-learning.com/ai-tools/literacy-studio/all-tasks/) 点 “Create Literacy Task”，按上面「走到 Step 3」的步骤走到 Step 3 → 点左上 ← → Discard，看落到哪个页面
- **建议**：Step 3 的 ← 和 Step 1、2 用同一套返回逻辑
- **差异**：PR #12 的验证步骤写 “按第 16 条走到 Step 3”，第 16 条在「需确认后再改」那张 sub issue 里，步骤和这里相同。

R1-07：创建向导弃稿确认

![R1-07](https://uploads.linear.app/c3f6b71f-56a8-4cb4-a685-4edb2314f811/aff646ef-b377-4d97-982c-c3565789b4b9/5ad4e4a3-f418-487c-ae70-d9998f0c8a47)

R1-09：创建向导 Step 3 Review

![R1-09](https://uploads.linear.app/c3f6b71f-56a8-4cb4-a685-4edb2314f811/b636e4fd-eb6f-4e03-adee-102ecd09a325/b9b5749c-ae73-46b3-b84f-2ea018a4f5ae)

### 32. Ended 的 Join Code 悬停没有提示

**已确认** · 待改

- **staging 现在**：Ended 的 Monitor 右上 Join Code 置灰，悬停没有任何提示（按钮关了鼠标事件）
- **PRD**：§5.1 Top Control Bar：“Ended: disabled, tooltip "This assignment has ended".”
- **怎么验证**：[Monitor（Ended）](https://staging.kira-learning.com/ai-tools/literacy-studio/task/01a1aacb-5c23-7426-bf3e-45055e0a6346/session/01a1ab18-0f0b-71fc-89bc-e3151932b234/) 悬停右上 Join Code
- **建议**：置灰时仍能悬停，显示 “This assignment has ended”
- **差异**：评论区和 PR #12 的依据都写成 “§4.2 Join Code”。PRD §4.2 讲的是 Assignment 状态，Join Code 的规则在 §5.1。

R1-19：Monitor（Ended），Join Code 置灰

![R1-19](https://uploads.linear.app/c3f6b71f-56a8-4cb4-a685-4edb2314f811/f0d33fc0-1c27-4d36-ae8c-13378b9e430f/2dfc72c7-4537-41c6-ab69-ca772c936a23)

### 42. 深层页面侧栏不再高亮 Literacy Studio

**设计判断** · 待改

- **staging 现在**：只有根路径 `/ai-tools/literacy-studio/` 会展开 Create、高亮 Literacy Studio。从侧栏进 Dashboard 再点 View All Tasks，Create 还展开但已不高亮；直接打开任何子路径（包括 `/dashboard/`）时 Create 折叠，也不高亮。老师看不出自己在哪个模块
- **PRD**：没写侧栏规则；依据是导航一致性
- **怎么验证**：先开 [Dashboard](https://staging.kira-learning.com/ai-tools/literacy-studio/)（Create 展开、Literacy Studio 高亮），再开 [All Tasks](https://staging.kira-learning.com/ai-tools/literacy-studio/all-tasks/) 或 [Task Detail](https://staging.kira-learning.com/ai-tools/literacy-studio/task/01a1aacb-5c23-7426-bf3e-45055e0a6346/) 对比
- **建议**：Literacy Studio 下所有页面（含 `/dashboard/`）都保持 Create 展开、Literacy Studio 高亮

R1-01：Dashboard（侧栏 Literacy Studio 高亮）

![R1-01](https://uploads.linear.app/c3f6b71f-56a8-4cb4-a685-4edb2314f811/41babdf9-fd0a-41bd-a39a-2cf2a22893a5/42d661e2-d13a-4d1e-873b-f9ec64bfca98)

R1-10：Task Detail（侧栏 Create 折叠）

![R1-10](https://uploads.linear.app/c3f6b71f-56a8-4cb4-a685-4edb2314f811/d7dbca8d-5f7c-4608-8b5b-e5f6415189ed/fd438bc3-9746-48ef-a508-a8a90978799f)

---

## [APACUIX-548](https://linear.app/kira-learning/issue/APACUIX-548) R1 走查 · 数据与计算（2 条）

R1 走查 · 数据与计算：共 2 条，都是已确认，要先查原因再改。一条是评论区第 40 条；另一条是评论区末尾的「清单外 1 条」（字数），PR #12 只在「说明」里提过，没进清单。编号沿用 [APACUIX-543 评论区](https://linear.app/kira-learning/issue/APACUIX-543/design-qa#comment-c5d2e781) 和 [PR #12](https://github.com/chao653/Literacy-Studio/pull/12)。每条的问题、验证链接、PRD 原文和截图放在一起。

**11-17 复核**：按下面的验证链接在 staging 上重新走了一遍，2 条都还能复现。

**差异**：PRD、PR #12 正文、评论区和 staging 有对不上的，条目最后有「差异」一行；没有这一行的条目，几处说法一致。

**验证前须知**

* 打开 staging 前先切到 **Teacher** 角色（Home 页左下角点角色名切换；Admin 进 Literacy Studio 是 403）。
* **走到 Step 3**：[创建向导](https://staging.kira-learning.com/ai-tools/literacy-studio/create/?from=all-tasks) 选 AI Tutor、填任务名、Grade 3 → Continue → Paste Text，贴一段 150–250 词的文字 → Continue，等约 30 秒生成。看完点左上 ← 再选 Discard，不会留下草稿。
* 截图里的账号姓名已替换成 “Test User”。

---

### 清单外：同一段文字，Step 2 和 Step 3 的字数不一样

**已确认** · 待查

- **staging 现在**：同一段粘贴文字，Step 2 粘贴框下的字数和 Step 3 头部的字数不同，差值也不固定：
  - 11-13：183 / 184，差 1
  - 11-16：180 / 182，差 2
  - 11-17：185 / 187，差 2。这段是 6 词标题加 179 词正文，Step 2 的 185 正好是标题加正文
- **PRD**：§3.2：“Step 3 and Task Detail: recompute from the chosen passage's actual word count”。PRD 里一篇文字只有一个字数，没有说两处可以不同
- **怎么验证**：按上面「走到 Step 3」的步骤，贴完文字先看 Step 2 粘贴框下的字数，再看 Step 3 任务名下面的字数
- **建议**：请工程核对两处的数法，统一成一个；首行标题算不算字数，等「需确认后再改」sub issue 里第 18 条定
- **差异**：评论区写的是 183 / 184、差 1，像是固定差一个；实际差值随文字变化，说明两处数法不一样。PR #12 只在「说明」里提了一句，没进清单。

R1-08：创建向导 Step 2，贴完文字（11-13）

![R1-08](https://uploads.linear.app/c3f6b71f-56a8-4cb4-a685-4edb2314f811/9ad47cc9-2945-4de6-9ee0-8c59d4dc0bb5/8ad1c723-53e7-4fa1-b601-0bc080a134a2)

R1-09：创建向导 Step 3 Review（11-13）

![R1-09](https://uploads.linear.app/c3f6b71f-56a8-4cb4-a685-4edb2314f811/b636e4fd-eb6f-4e03-adee-102ecd09a325/b9b5749c-ae73-46b3-b84f-2ea018a4f5ae)

### 40. 有 Kira 提示的学生看不到 What Kira said today

**已确认** · 待查

- **staging 现在**：这名学生在 Guided Reading 里收到过 Kira 对 “chrysalis” 的提示（左栏能看到），但整页没有 What Kira said today 卡片
- **PRD**：§6.2：“"What Kira said today" — key intervention quotes, shown as Kira chat bubbles (time + quote).”；[产品规则](https://github.com/chao653/Literacy-Studio/blob/f3cfd6925f5bc998393b28b55209db72f4b4335e/%E9%9C%80%E6%B1%82%E6%96%87%E6%A1%A3/01_%E4%BA%A7%E5%93%81%E8%A7%84%E5%88%99.md) “What Kira said today 最多 5 条…Phase 1 只收 Guided Reading 点词后的提示…”
- **怎么验证**：[Student Detail](https://staging.kira-learning.com/ai-tools/literacy-studio/task/01a1aacb-5c23-7426-bf3e-45055e0a6346/session/01a1aaf9-a829-705d-8bee-2edaf7cde712/student/0196ec29e03077fc9d420a91f5543373/) 左栏有 “chrysalis” 提示，往下滚，整页没有 What Kira said today 卡片
- **设计稿**：[`2253:29137`](https://www.figma.com/design/pCdwCN68j1KGXz3aZZ6Wn0/Literacy-Studio-AI-Tutor?node-id=2253-29137)
- **建议**：先查是后端没产出数据，还是前端没渲染，再修

R1-20：Student Detail，有 Kira 提示的学生

![R1-20](https://uploads.linear.app/c3f6b71f-56a8-4cb4-a685-4edb2314f811/7c6f18bd-1d94-4e87-8fed-855b3e59f563/470afc40-fb74-403d-9ba2-3c27b0590e21)

R1-21：Student Detail 下半（Comprehension）

![R1-21](https://uploads.linear.app/c3f6b71f-56a8-4cb4-a685-4edb2314f811/55c7959e-f3a2-4dd3-83cf-bbf096cf58bd/48527c3b-500e-4f94-8e9d-fc2eff378920)

---

## [APACUIX-549](https://linear.app/kira-learning/issue/APACUIX-549) R1 走查 · 需确认后再改（9 条）

R1 走查 · 需确认后再改：共 9 条，都是**需用户确认**。PRD、产品规则、设计稿或 staging 之间说法不一致，要先由产品或设计定了再改，前端先别动。这 9 条没发到评论区，编号沿用 [PR #12](https://github.com/chao653/Literacy-Studio/pull/12) 和 `走查/R1_修改清单.md`。每条的问题、验证链接、PRD 原文和截图放在一起。

**11-17 复核**：第 16、18、19、23、29 条按验证链接重新看过，还是这样；第 2、22、28 条是 11-16 看的；第 47 条要用有麦克风的真机，还没测。

**差异**：这 9 条本身就是几处说法不一致；除此之外 PR #12 正文和 staging 还有对不上的，条目最后有「差异」一行。

**验证前须知**

* 打开 staging 前先切到 **Teacher** 角色（Home 页左下角点角色名切换；Admin 进 Literacy Studio 是 403）。
* 弹窗只看不提交，都点 Cancel。
* **走到 Step 3**：[创建向导](https://staging.kira-learning.com/ai-tools/literacy-studio/create/?from=all-tasks) 选 AI Tutor、填任务名、Grade 3 → Continue → Paste Text，贴一段 150–250 词的文字 → Continue，等约 30 秒生成。看完点左上 ← 再选 Discard，不会留下草稿。
* 截图里的账号姓名已替换成 “Test User”。

---

## 文案

### 2. 创建入口叫 “Create Literacy Task”，PRD 是 “+ Create New Task”

**需用户确认** · 搁置

- **staging 现在**：Dashboard 创建卡、All Tasks 右上按钮、向导页标题都是 “Create Literacy Task”
- **PRD**：§3.1 Entry and Navigation：“Dashboard "+ Create New Task" card.”；“View All Tasks "+ Create New Task" button.”
- **怎么验证**：[Dashboard](https://staging.kira-learning.com/ai-tools/literacy-studio/)、[All Tasks](https://staging.kira-learning.com/ai-tools/literacy-studio/all-tasks/)、[创建向导](https://staging.kira-learning.com/ai-tools/literacy-studio/create/?from=all-tasks)
- **要定的**：这是和 Reading Screener 共用的 V1 外壳，生产上一直叫 Create Literacy Task。要不要按 PRD 改名？要改就和 Reading Screener 一起改

R1-01：Dashboard

![R1-01](https://uploads.linear.app/c3f6b71f-56a8-4cb4-a685-4edb2314f811/41babdf9-fd0a-41bd-a39a-2cf2a22893a5/42d661e2-d13a-4d1e-873b-f9ec64bfca98)

R1-03：All Tasks

![R1-03](https://uploads.linear.app/c3f6b71f-56a8-4cb4-a685-4edb2314f811/0cc6e381-e17c-4cd5-ab67-dc578c74e73b/3194d584-afba-4049-b761-321f12533f77)

### 22. 字段名和语言默认值三处不一致

**需用户确认** · 搁置

- **staging 现在**：字段名是 “Grade Level”；选 AI Tutor 后语言默认 “English (United States)”
- **PRD**：§3.2：“Grade: required dropdown, options K / Grade 1 / … / Grade 5.”；“Language: dropdown, defaults to English (US).”
- **怎么验证**：[创建向导](https://staging.kira-learning.com/ai-tools/literacy-studio/create/?from=all-tasks) 看 Grade Level 字段名；选 AI Tutor 后看 Language 默认值
- **设计稿**：[`1947:13072`](https://www.figma.com/design/pCdwCN68j1KGXz3aZZ6Wn0/Literacy-Studio-AI-Tutor?node-id=1947-13072)
- **要定的**：统一成哪种写法；这是共用外壳，要和 Reading Screener 一起定
- **差异**：三处各不相同。字段名 staging 和设计稿是 “Grade Level”，PRD 是 “Grade”；语言 PRD 和设计稿是 “English (US)”，staging 是 “English (United States)”。

R1-04：创建向导 Step 1，未选类型

![R1-04](https://uploads.linear.app/c3f6b71f-56a8-4cb4-a685-4edb2314f811/67700e4b-e071-4cba-aec8-13863f4e3666/103dc5ce-ac62-46a2-9d7b-555bf327e63d)

R1-05：创建向导 Step 1，选 AI Tutor（G3）

![R1-05](https://uploads.linear.app/c3f6b71f-56a8-4cb4-a685-4edb2314f811/2b41a6c7-19d1-4e74-bd3a-fa4e186c9111/06545d11-9d08-4b89-9dd8-a5040cf09251)

### 23. Step 3 预览的步骤标签是全大写

**需用户确认** · 搁置

- **staging 现在**：Step 3 右侧学生端预览顶部是 “STEP 1 OF 5 · LEARN THE WORDS”
- **PRD**：[Student View](https://app.notion.com/p/34e70a1b99248122af86e22655dad2ca) §3 Player top bar：“The step number is written on the page, not in the top bar: "Step N of M · step name".”；[写作规范](https://github.com/chao653/Literacy-Studio/blob/f3cfd6925f5bc998393b28b55209db72f4b4335e/%E8%AE%BE%E8%AE%A1%E6%89%A7%E8%A1%8C/%E8%A7%84%E8%8C%83/%E5%86%99%E4%BD%9C%E8%A7%84%E8%8C%83.md) 一-4 禁 ALL CAPS，交用户定
- **怎么验证**：按上面「走到 Step 3」的步骤，看右侧预览顶部
- **要定的**：要不要改为 “Step 1 of 5 · Learn the words”；学生端正式页面用同一写法
- **差异**：Preview 页（功能与内容缺失 sub issue 第 43 条）现在根本没有这行步骤标签，两处要一起定。

R1-09：创建向导 Step 3 Review

![R1-09](https://uploads.linear.app/c3f6b71f-56a8-4cb4-a685-4edb2314f811/b636e4fd-eb6f-4e03-adee-102ecd09a325/b9b5749c-ae73-46b3-b84f-2ea018a4f5ae)

### 28. 投放方式徽标大小写不一致

**需用户确认** · 搁置

- **staging 现在**：Task Detail 卡片上是 “Live”；Monitor 顶部是 “LIVE” / “SCHEDULED”
- **PRD**：没写这个徽标的大小写；依据是[写作规范](https://github.com/chao653/Literacy-Studio/blob/f3cfd6925f5bc998393b28b55209db72f4b4335e/%E8%AE%BE%E8%AE%A1%E6%89%A7%E8%A1%8C/%E8%A7%84%E8%8C%83/%E5%86%99%E4%BD%9C%E8%A7%84%E8%8C%83.md) 一-1（同角色一致）、一-4（禁 ALL CAPS）、三（Badge 用 Title Case）
- **怎么验证**：[Task Detail](https://staging.kira-learning.com/ai-tools/literacy-studio/task/01a1aacb-5c23-7426-bf3e-45055e0a6346/) 卡片上的 “Live”；[Monitor（Live）](https://staging.kira-learning.com/ai-tools/literacy-studio/task/01a1aacb-5c23-7426-bf3e-45055e0a6346/session/01a1aae5-14de-757d-bb9f-25878f5c3a1d/) 顶部 “LIVE”；[Monitor（Scheduled · Expired）](https://staging.kira-learning.com/ai-tools/literacy-studio/task/01a1a58b-3385-770f-bc79-35937691ac3d/session/01a1a59b-ec21-76b5-a02f-2a336a1b55f4/) 顶部 “SCHEDULED”
- **要定的**：要不要统一为 “Live” / “Scheduled”；这是 Reading Screener 共用组件，要一起改
- **差异**：staging 两个页面大小写不同；设计稿两处都是全大写。

R1-10：Task Detail

![R1-10](https://uploads.linear.app/c3f6b71f-56a8-4cb4-a685-4edb2314f811/d7dbca8d-5f7c-4608-8b5b-e5f6415189ed/fd438bc3-9746-48ef-a508-a8a90978799f)

R1-12：Monitor（Live · In Progress）

![R1-12](https://uploads.linear.app/c3f6b71f-56a8-4cb4-a685-4edb2314f811/31b18d15-8c7e-4f52-8a6c-f04b12773b27/f465fe62-410a-49dd-af93-7f7ac645fa50)

R1-18：Monitor（Scheduled · Expired）

![R1-18](https://uploads.linear.app/c3f6b71f-56a8-4cb4-a685-4edb2314f811/1b57ab6e-eece-4cc4-9689-c735806701d2/29c245d6-cc04-43bc-8059-b2b1eb01ed77)

## 布局

### 29. Assign 弹窗是 600px 单栏，产品规则定的是约 1000px 双栏

**需用户确认** · 搁置

- **staging 现在**：Task Detail “+ Assign to Students” 打开的弹窗宽 600px（11-17 量得），单栏折叠式
- **PRD**：§7.1：“Container: centred, 520px wide, max height 90vh”，下面分段折叠（Accordion）
- **产品规则**：[产品规则](https://github.com/chao653/Literacy-Studio/blob/f3cfd6925f5bc998393b28b55209db72f4b4335e/%E9%9C%80%E6%B1%82%E6%96%87%E6%A1%A3/01_%E4%BA%A7%E5%93%81%E8%A7%84%E5%88%99.md) “Assign 弹窗保留约 1000px 双栏（PRD 待回写）”
- **怎么验证**：[Assign 弹窗](https://staging.kira-learning.com/ai-tools/literacy-studio/task/01a1aacb-5c23-7426-bf3e-45055e0a6346/?assign=true)（链接直接打开弹窗；看完点 Cancel 或按 Esc）
- **设计稿**：[`1925:16903`](https://www.figma.com/design/pCdwCN68j1KGXz3aZZ6Wn0/Literacy-Studio-AI-Tutor?node-id=1925-16903)（双栏）
- **要定的**：本期让工程按双栏重做，还是接受现状并改产品规则
- **差异**：三处各不相同：staging 600px 单栏；PRD 520px 分段折叠；产品规则和设计稿约 1000px 双栏。

R1-11：Assign 弹窗

![R1-11](https://uploads.linear.app/c3f6b71f-56a8-4cb4-a685-4edb2314f811/43caf258-be07-464e-821d-de3582f913b7/c7cd5990-ed2a-4a2b-b938-73358b120023)

## 功能

### 19. Step 3 左栏有 “Practice focus” 下拉，PRD 定了 Phase 1 不显示

**需用户确认** · 搁置

- **staging 现在**：Step 3 左栏第一块是 “Practice focus / Key vocabulary” 下拉，下面写着 “Warm-up and Your Turn words follow it.”
- **PRD**：§3.4 [T2]：“"Primary Reading Objective" — Phase 1 does not show this card (10-25)”
- **怎么验证**：按上面「走到 Step 3」的步骤，看左栏第一块
- **要定的**：如果它就是 Primary Reading Objective，Phase 1 去掉；如果是别的需求，请 PM 补进 PRD
- **差异**：设计稿 11-16 已按 PRD 去掉 Phase 1 Step 3 的 Objective 卡（见 PR #12「11-16 复查」），staging 还有。

R1-09：创建向导 Step 3 Review

![R1-09](https://uploads.linear.app/c3f6b71f-56a8-4cb4-a685-4edb2314f811/b636e4fd-eb6f-4e03-adee-102ecd09a325/b9b5749c-ae73-46b3-b84f-2ea018a4f5ae)

## 数据

### 16. Step 3 的时长可能少算

**需用户确认** · 搁置

- **staging 现在**：11-13 用一个 G3 任务（篇章约 177 词）走到 Step 3，显示 “~4–6 min”，按 PRD 公式手算大约 5–7 min。11-17 换了一段（179 词正文加 6 词标题），显示 “~4–7 min”
- **PRD**：§3.2 How each step is counted，比如 “Vocabulary Warm-up: the number of words in this task (maximum 10) × 5 seconds.”、“Guided Reading: full passage word count ÷ student rate.”；“Step 3 and Task Detail: recompute from the chosen passage's actual word count, actual first-paragraph word count and actual audio duration.”
- **怎么验证**：按上面「走到 Step 3」的步骤，看任务名下面的时长
- **要定的**：请工程核对 Step 3 的计算，尤其 Echo 和 Your Turn 两段有没有算进去。Step 1 和 Step 3 数值不同本身是对的（Step 1 用年级默认字数）

R1-09：创建向导 Step 3 Review

![R1-09](https://uploads.linear.app/c3f6b71f-56a8-4cb4-a685-4edb2314f811/b636e4fd-eb6f-4e03-adee-102ecd09a325/b9b5749c-ae73-46b3-b84f-2ea018a4f5ae)

### 18. 粘贴的首行标题被并进正文、算进字数

**需用户确认** · 搁置

- **staging 现在**：11-17 贴了 6 词标题加 179 词正文，Step 2 显示 185 words，标题被算进去了；11-13 看到字数范围判断也按含标题的数
- **PRD**：§3.3 没写标题行怎么处理。[Student View](https://app.notion.com/p/34e70a1b99248122af86e22655dad2ca)「Task name (10-25)」提到 “The passage's own title is not used as a page title; it appears only when Kira introduces the story in the Intro.”，说明篇章有单独的标题，但没说粘贴时怎么拆
- **怎么验证**：[创建向导](https://staging.kira-learning.com/ai-tools/literacy-studio/create/?from=all-tasks) 填完 Step 1 → Continue → Paste Text，贴一段首行是标题的文字，看粘贴框下的字数
- **要定的**：首行标题要不要拆出来做篇目名、算不算字数
- **差异**：
  - PR #12 这条前后数字对不上：问题写 “182 = 标题 5 词 + 正文 177 词”，验证步骤写 “6 词标题 + 177 词正文，显示 183 words”。
  - Step 3 的字数和 Step 2 也不一样，见「数据与计算」sub issue 的清单外那条。

R1-08：创建向导 Step 2，贴完文字（11-13）

![R1-08](https://uploads.linear.app/c3f6b71f-56a8-4cb4-a685-4edb2314f811/9ad47cc9-2945-4de6-9ee0-8c59d4dc0bb5/8ad1c723-53e7-4fa1-b601-0bc080a134a2)

## 要用真机确认

### 47. Echo Reading 没有跟读录音按钮

**需用户确认** · 搁置

- **staging 现在**：无头浏览器没有麦克风，走的是 “Skip, start reading”，G3 Echo Reading 页面上没有跟读录音按钮。不确定有麦克风时是否正常
- **PRD**：[Student View](https://app.notion.com/p/34e70a1b99248122af86e22655dad2ca) §3.5 Page 3：“Grade 3–5 students follow-read each sentence and are recorded; K–2 students only listen to the model and are not asked to follow-read or record”
- **怎么验证**：用有麦克风的真实设备打开 [Preview](https://staging.kira-learning.com/ai-tools/literacy-studio/task/01a1aacb-5c23-7426-bf3e-45055e0a6346/preview/)，允许麦克风，走到 Echo Reading
- **要定的**：请用真机复测一次 G3 Echo；没有麦克风时不显示录音按钮可能是对的

R1-26：Preview Echo Reading（G3，无麦克风）

![R1-26](https://uploads.linear.app/c3f6b71f-56a8-4cb4-a685-4edb2314f811/88ac6ed5-72d4-403b-9a2b-4b1603e00757/c5c046e3-c7e1-4879-b0bd-5c43de3c02f4)
