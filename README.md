# 📚 学习资源导航站 | Learning Hub

> 全类型学习资源导航，涵盖编程开发、AI 机器学习、设计产品、金融投资、语言学习等领域。

**在线访问：** https://learning-hub-hub.vercel.app

---

## ✨ 功能特点

- 🏷️ **6 大分类**：编程开发 / AI 机器学习 / 设计产品 / 金融投资 / 语言学习 / 综合资源
- 🔍 **实时搜索**：按名称、描述、标签快速过滤
- 🌙 **暗色极客风格**：护眼的深色主题，现代卡片式布局
- 📱 **完全响应式**：适配桌面端、移动端和平板设备
- ⚡ **纯静态部署**：无需后端服务，CDN 全球加速

---

## 🛠️ 技术栈

- HTML5 + CSS3 + Vanilla JavaScript（零依赖）
- 静态站点，可部署到 GitHub Pages / Vercel / Netlify 等任意平台

---

## 🚀 部署到 Vercel（推荐）

### 方式一：手动连接 GitHub（推荐）

1. 访问 [vercel.com](https://vercel.com)，使用 GitHub 账号登录
2. 点击 **Add New... → Project**
3. 在 Import Git Repository 页面找到 `heboshangui/learning-hub`
4. 点击 **Import**，Vercel 会自动检测为 Static Site
5. Framework Preset 选择 **Other**（或保持默认）
6. 点击 **Deploy**，等待 30 秒左右即可完成
7. 获得一个 `.vercel.app` 子域名，可自定义

### 方式二：Vercel CLI 部署

```bash
# 安装 Vercel CLI
npm i -g vercel

# 在项目根目录执行
cd learning-hub
vercel

# 按提示操作，几秒钟完成部署
```

### 方式三：GitHub Pages（免费，无需注册）

1. 进入仓库 **Settings → Pages**
2. Source 选择 **Deploy from a branch**
3. Branch 选择 `main`，文件夹选 `/ (root)`
4. 点击 Save，稍后即可通过 `https://heboshangui.github.io/learning-hub` 访问

---

## 📁 项目结构

```
learning-hub/
├── index.html    # 主页面 HTML
├── styles.css    # 暗色主题样式
├── script.js     # 资源数据 + 渲染逻辑
├── README.md     # 本文件
└── vercel.json   # Vercel 配置文件（可选）
```

---

## 🎨 自定义资源数据

编辑 `script.js` 中的 `resources` 数组即可添加/修改/删除资源：

```javascript
{
  category: 'programming', // 分类 key
  name: '网站名称',
  desc: '简短描述',
  url: 'https://example.com',
  tags: ['标签1', '标签2'],
  favicon: 'https://.../favicon.ico', // 可选，留空则自动生成
}
```

支持的分类 key：
| Key | 名称 |
|-----|------|
| `programming` | 💻 编程开发 |
| `ai` | 🤖 AI/机器学习 |
| `design` | 🎨 设计产品 |
| `finance` | 💰 金融投资 |
| `language` | 🌏 语言学习 |
| `general` | 🚀 综合资源 |

---

## 📝 License

MIT © [@heboshangui](https://github.com/heboshangui)
