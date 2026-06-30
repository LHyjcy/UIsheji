# UIsheji 参考界面复刻

这个仓库用于根据参考截图实现高保真单页 UI 复刻。实现范围保持克制：静态前端、本地图片资源提交到仓库，不包含后端、CMS 或登录系统。

## 技术栈

- Vite
- React
- TypeScript
- 使用设计 token 的原生 CSS
- 本地图片资源位于 `public/assets`

## 常用命令

```powershell
npm install
npm run dev -- --host 127.0.0.1 --port 5173
npm run build
npm run preview -- --host 127.0.0.1 --port 4173
```

## 部署

Vercel 部署配置：

- 构建命令：`npm run build`
- 输出目录：`dist`

## 设计资源

- 网页 UI 设计资源手册：`docs/06-ui-design-resource-pack.md`
