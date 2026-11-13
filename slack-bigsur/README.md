# Slack for Big Sur

在 **macOS 11 Big Sur** 上使用最新版 Slack 的桌面程序。

官方 Slack 桌面版现在需要 macOS 14 或更高版本，旧版客户端会被要求升级；用 Big Sur 自带的 Safari 打开 Slack 网页版，又会被提示“浏览器版本过旧”。本程序内置 **Electron 37（Chromium 138，最后一个支持 macOS 11 的版本）**，直接加载 Slack 网页版 `https://app.slack.com/client`，并以当前版本 Google Chrome 的身份访问 Slack。网页版的代码每次都从 Slack 服务器获取，所以你用到的始终是最新的 Slack。

> 这是非官方程序，与 Slack Technologies 无关。

## 安装

1. 下载安装包：
   - 打开本仓库 Actions 中最新一次成功的 **Slack for Big Sur** 运行，下载 `Slack-for-Big-Sur-macOS` 附件并解压。
   - Apple 芯片（M1）的 Mac 选 `*-arm64.dmg`，Intel 处理器的 Mac 选 `*-x64.dmg`。不确定的话，点左上角苹果菜单 › 关于本机，看“芯片”或“处理器”一栏。
   - 也可以按下面的“自行构建”生成安装包。
2. 打开 dmg，把 **Slack for Big Sur** 拖到“应用程序”文件夹。
3. 第一次打开：本程序没有经过 Apple 公证，直接双击会提示“无法验证开发者”。请在“应用程序”里**按住 Control 键点按（或右键）程序 › 打开 › 打开**，之后就可以正常双击打开了。也可以在终端执行：

   ```bash
   xattr -dr com.apple.quarantine "/Applications/Slack for Big Sur.app"
   ```

4. 登录你的工作区。如果“使用 Google 登录”提示浏览器不安全，请改用邮箱登录，Slack 会把登录码发到你的邮箱。

## 功能

- 最新版 Slack 网页客户端，Chrome 版本号按 Chrome 的发布节奏自动更新，不会被 Slack 判定为过旧浏览器。
- Dock 图标显示 @提及数量，有未读消息时显示圆点（可在应用菜单中关闭）。
- macOS 系统通知。
- Huddle 与通话：麦克风、摄像头，并带有屏幕和窗口的共享选择器。
- 下载文件默认保存到“下载”文件夹，也可以设置成每次询问保存位置。
- 消息中的 Slack 网址和 `slack://` 链接在程序内打开，其他链接用默认浏览器打开。
- 文件 › 打开剪贴板中的 Slack 链接。
- 记住窗口位置、大小和缩放比例；关闭窗口后程序留在 Dock 中。
- 断网时显示离线页面，网络恢复后自动重连。
- 菜单跟随系统语言显示中文或英文；可设置“登录时打开”。

## 权限

macOS 会在第一次使用时请求权限：

| 功能 | 在哪里打开 |
| --- | --- |
| 麦克风、摄像头 | 系统偏好设置 › 安全性与隐私 › 隐私 › 麦克风 / 摄像头 |
| 屏幕共享 | 系统偏好设置 › 安全性与隐私 › 隐私 › 屏幕录制（勾选后需要重新打开本程序） |
| 通知 | 系统偏好设置 › 通知 › Slack for Big Sur |

本程序使用 ad-hoc 签名，安装新版本后 macOS 可能会再次请求这些权限。

## 设置

除了菜单中的选项，还可以在 `~/Library/Application Support/Slack for Big Sur/settings.json` 中修改以下设置（先退出程序再编辑）：

| 键 | 作用 |
| --- | --- |
| `chromeVersion` | 固定向 Slack 报告的 Chrome 主版本号，例如 `154`。默认 `null`，表示按日期自动推算。如果 Slack 提示浏览器过旧，可以手动调高。 |
| `platformVersion` | Client Hints 中报告的 macOS 版本，默认 `15.0.0`。 |
| `startUrl` | 启动时打开的地址，例如 `https://你的工作区.slack.com/`。只接受 Slack 的网址。 |

也可以用环境变量 `SLACK_BIGSUR_CHROME_VERSION` 和 `SLACK_BIGSUR_START_URL` 临时覆盖 `chromeVersion` 和 `startUrl`。

遇到问题时，帮助 › 拷贝诊断信息 会拷贝版本号、系统版本和当前伪装的浏览器信息（不含消息内容），方便反馈。

## 自行构建

需要一台 Mac（macOS 11 也可以）和 **Node.js 22**。Node.js 24 需要 macOS 13.5 以上，Big Sur 上请用 22。

```bash
cd slack-bigsur
npm ci
npm start        # 以开发模式运行
npm run dist     # 在 dist/ 生成 Intel 和 Apple 芯片的 dmg、zip
```

生成后可以检查安装包里的每个二进制文件是否都能在 macOS 11 上运行：

```bash
npm run check:mac -- "dist/mac-arm64/Slack for Big Sur.app" --target=11.0
```

## 开发与测试

```bash
npm test         # 单元测试
npm run smoke    # 冒烟测试：连接 app.slack.com，确认没有被判定为过旧浏览器
```

冒烟测试会打开 Slack 登录页，检查 User-Agent、Client Hints、过旧浏览器标记和 preload 脚本，然后输出 `SMOKE_RESULT {...}` 并以 0（通过）或 1（失败）退出。也可以对打包后的程序运行：

```bash
"dist/mac-arm64/Slack for Big Sur.app/Contents/MacOS/Slack for Big Sur" --smoke-test --smoke-screenshot=/tmp/slack.png
```

CI（`.github/workflows/slack-bigsur.yml`）会在 Linux 上跑单元测试，在 macOS 上构建两种架构的安装包，检查最低系统版本、签名和 Electron fuses，对打包后的程序跑冒烟测试，并上传安装包。

### 代码结构

| 文件 | 作用 |
| --- | --- |
| `src/main.js` | 主进程：窗口、菜单、权限、导航与链接处理 |
| `src/user-agent.js` | 推算 Chrome 版本，生成 User-Agent 和 Client Hints |
| `src/ua-override.js` | 通过 Chrome DevTools Protocol 把伪装应用到页面、iframe 和 worker |
| `src/policy.js` | 哪些网址在程序内打开、哪些交给浏览器、哪些阻止 |
| `src/preload.js` | 从 Slack 侧边栏读取未读数，用于 Dock 角标 |
| `src/screen-share.js`、`src/picker/` | 屏幕共享选择器 |
| `src/offline/` | 离线页面 |
| `build/check-macos-target.js` | 检查 .app 中所有 Mach-O 文件的最低 macOS 版本 |

## 限制

- **安全更新**：Electron 37 已停止维护，之后的 Chromium 安全补丁不会进入本程序，而 macOS 11 本身也早已停止安全更新。请只用它访问 Slack，条件允许时尽量升级系统并使用官方客户端。
- **伪装可能失效**：如果 Slack 将来检查 User-Agent 之外的浏览器特性，或开始要求 Chromium 138 不支持的网页功能，本程序可能无法再使用。
- **与官方桌面版的区别**：功能与在 Chrome 中使用 Slack 网页版相同，没有官方桌面版独有的功能；浏览器里的“在 Slack 应用中打开”不会唤起本程序。
- **测试范围**：CI 在新版 macOS 上构建并运行程序，并检查每个二进制文件的最低系统版本为 11.0，但没有在实体 macOS 11 机器上测试过（GitHub 没有 macOS 11 runner）。

## 许可

MIT
