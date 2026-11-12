# PRD 溯源

## PRD 来源

- 类型：Notion
- 链接或路径：[PRD — Teacher View](https://app.notion.com/p/34e70a1b992481f386b9c2d22bf61531)（父页 [PRD] Literacy Studio AI Tutor）
- 版本 / 最后更新日期：2026-11-11（Notion `page_last_edited_at` 2026-11-11T03:10Z；§6 最近几轮修订标注为 10-20、10-25、11-08）。上一版记录：2026-09-23。
- 老师端 AI Tutor 页面另参照代码原型：PR #27776 原型，11-03 产品确认（Linear APACFE-4659）。用户 2026-11-12 定了原型和 PRD 不一致时以 PRD 为准，原型只补 PRD 没写到的版式和细节；差异和处理见 `设计执行/日志/Student Detail.md` 2026-11-12（二）。原型环境已下线，核对靠 Linear 工单里的截图和描述。

## 章节锚点表

> 走查按锚点逐项核对：每个锚点对应 PRD 的一个章节，以及落地的设计文档 / Figma 节点。锚点编号一经分配不复用。

| 锚点 | PRD 章节 | 对应设计文档 / 节点 |
| --- | --- | --- |
| P-01 | Teacher View §2.2 Dashboard Metric Cards（At Risk 面板 “AI Tutor” 入口） | Figma `Quick Assign` section 第 2 列 `2056:18779`；`设计执行/日志/Quick Assign 与 Screener 入口.md` |
| P-02 | Teacher View §7.4 Quick Assign Modal（入口、Monitor actions、推荐面板状态、T7、6 步、Step 1 / Step 2、分配后） | Figma `Quick Assign` section（1925:31830）第 2–5 列；同上日志 |
| P-03 | Teacher View §3.2 Session Phases（6 个阶段描述、固定顺序） | 推荐面板 Session Phases 块（如 `2066:19598`）；Create task – Latest（1947:12808） |
| P-04 | Teacher View §4.1 Page Structure / Preview Task / Edit lock / Assignment list；§4.2 Assignment 状态 | Figma `Task details`（1925:16759）；`设计执行/日志/Task Detail.md` |
| P-05 | Teacher View §7.1 Assign Modal | `Task details` 第 1 列 `1925:16903`、`1925:17129`、`1925:17403` |
| P-06 | Teacher View §5.1–§5.5 Monitor（顶栏、表格、19 行矩阵、AI Insights） | Figma `Monitor AI tutor`（1925:10702）Latest 列；`设计执行/日志/Monitor.md` |
| P-07 | Teacher View §7.2 Remove Student / §7.3 End Task 弹窗 | `2155:26011`（Remove）、`2160:26919`（End） |
| P-08 | Teacher View §6.0 Navigation and Empty State；§6.1 Header — Identity Only（T8 已于 10-25 删除） | Figma `Student detail - AI Tutor`（286:18332）Latest 列各帧头部；空态 `2257:29973`；进行中 + 行为提醒 `4441:31559`；`设计执行/日志/Student Detail.md`（2026-11-12 节） |
| P-09 | Teacher View §6.2 Body（Summary、Assignment Timeline T4、两栏证据 T6、教师标注、Comprehension / Open Response、K–1 Oral Retelling、What Kira said today、Chat Activity 与 See Conversation 抽屉）；§5.4.2、§5.4.3、§5.4.5、§5.4.6 定义 | Latest 列 `2253:29137`、`2254:29181`、`2254:29489`、`2257:29424`、`2257:29708`、`2259:29635`；抽屉 `4441:31646`；卡片状态板 `2259:29943`；规则板 `2261:29870`；业务组件 Components section `4427:1173` |
