# 黔绿融通 — 绿色金融综合服务平台

黔绿融通是一个面向绿色产业的金融综合服务平台，提供绿色贷款在线申请、碳金融产品展示、贷款计算器、项目申报等一站式金融服务。

## 功能特性

- **绿色贷款申请** — 在线填写企业信息并提交贷款申请，支持申请状态实时查询
- **绿色贷款测评** — 通过问卷评估企业绿色属性，自动计算贷款额度和利率建议
- **贷款计算器** — 等额本息还款计算，直观展示月供和还款计划
- **碳金融产品** — 展示碳排放权质押贷款、碳配额回购等碳金融产品
- **新闻资讯** — 绿色金融行业动态和政策解读
- **多语言支持** — 内置中英文切换
- **申请数据导出** — 支持 CSV 格式导出申请数据

## 技术栈

| 类别 | 技术 |
|------|------|
| 前端框架 | [Svelte 5](https://svelte.dev/) + [SvelteKit](https://kit.svelte.dev/) |
| 构建工具 | [Vite](https://vitejs.dev/) |
| 数据库 | [MongoDB Atlas](https://www.mongodb.com/atlas) |
| 部署平台 | [Cloudflare Workers](https://workers.cloudflare.com/) |
| 代码规范 | ESLint + Prettier |

## 项目结构

```
src/
├── lib/
│   ├── components/     # 可复用组件（Banner、产品卡片、申请弹窗等）
│   ├── server/         # 服务端模块（MongoDB 连接层）
│   ├── data/           # 静态数据（产品列表、新闻数据）
│   ├── utils/          # 工具函数（贷款计算器）
│   └── i18n/           # 国际化翻译文件
├── routes/
│   ├── +page.svelte    # 首页
│   ├── api/
│   │   └── apply/      # 贷款申请 API（提交 / 查询 / 导出）
│   ├── calculator/     # 绿色贷款测评页
│   ├── carbon/         # 碳金融产品页
│   ├── products/       # 产品列表页
│   ├── news/           # 新闻资讯页
│   ├── project/        # 项目申报页
│   ├── international/  # 国际框架页（PRB）
│   └── about/          # 关于页
└── app.html            # HTML 模板
```

## 快速开始

### 环境要求

- [Node.js](https://nodejs.org/) >= 18
- npm >= 9

### 安装依赖

```bash
npm install
```

### 配置环境变量

复制 `.env.example` 为 `.env`，并填写你的 MongoDB 连接信息：

```bash
cp .env.example .env
```

需要配置的变量：

| 变量名 | 说明 |
|--------|------|
| `MONGODB_URI` | MongoDB 连接字符串 |
| `MONGODB_DB_NAME` | 数据库名称 |

### 启动开发服务器

```bash
npm run dev
```

浏览器打开 [http://localhost:5173](http://localhost:5173) 即可访问。

### 构建生产版本

```bash
npm run build
```

构建产物可用 `npm run preview` 预览。

## API 接口

| 方法 | 路径 | 说明 |
|------|------|------|
| POST | `/api/apply` | 提交贷款申请 |
| GET | `/api/apply?applicationId=xxx` | 查询申请状态 |
| GET | `/api/apply/export?status=xxx` | 导出申请数据（CSV） |

## 许可证

MIT
