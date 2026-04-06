# 游戏技术策划日报 - 项目文档

**版本**: v2.0
**最后更新**: 2026-04-06
**负责人**: 小黑 (OpenClaw)

---

## 1. 项目概述

### 1.1 项目目标
为游戏技术策划从业者提供每日精选的技术文章，聚焦：
- UE5/Unreal Engine 技术方案
- Unity 引擎开发实践
- 开放世界与关卡管线
- 游戏工业化与工具链
- 技术策划与原型开发

### 1.2 交付物
| 平台 | 地址 | 说明 |
|------|------|------|
| 网站 | https://sionsychen.github.io/gamedev-tech-daily | 中英文双语 |
| 飞书 | 每日 11:00 推送 | 文章摘要 + 链接 |

---

## 2. 技术架构

### 2.1 技术栈
```
┌─────────────────────────────────────────────────────────┐
│                    前端展示层                            │
│  Jekyll + GitHub Pages + 自定义主题                      │
├─────────────────────────────────────────────────────────┤
│                    内容生成层                            │
│  Python 脚本 + Brave Search API                         │
├─────────────────────────────────────────────────────────┤
│                    定时任务层                            │
│  Cron (工作日 03:00 UTC / 11:00 GMT+8)                  │
├─────────────────────────────────────────────────────────┤
│                    消息推送层                            │
│  飞书 Bot (OpenClaw Gateway)                            │
└─────────────────────────────────────────────────────────┘
```

### 2.2 目录结构
```
gamedev-tech-daily/
├── _config.yml              # Jekyll 配置
├── _layouts/
│   ├── default.html         # 主布局（含语言切换器）
│   └── post.html            # 文章布局
├── _posts/
│   ├── YYYY-MM-DD-daily.md       # 中文版
│   └── YYYY-MM-DD-daily-en.md    # 英文版
├── assets/
│   └── css/style.css        # 自定义样式
├── index.html               # 首页（双语切换逻辑）
├── search.html              # 搜索页面
└── ...
```

---

## 3. 自动化流程

### 3.1 执行时序
```
11:00 GMT+8 (工作日)
    │
    ▼
┌─────────────────┐
│   Cron 触发     │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  搜索 API 调用   │  Brave Search API
│  (3个主题/语言) │  - UE5 技术动态
└────────┬────────┘  - Unity 工具链
         │            - 开放世界管线
         ▼
┌─────────────────┐
│  内容生成       │  300字深度分析
│  (中英文各3篇) │  技术要点提炼
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  Markdown 输出  │  _posts/YYYYMMDD-daily.md
│  (Jekyll 格式)  │  _posts/YYYYMMDD-daily-en.md
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  GitHub 推送    │  git push origin main
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  飞书消息推送   │  文章摘要 + 网站链接
└─────────────────┘
```

### 3.2 Cron 配置
```bash
# 工作日上午 11:00 (GMT+8) 执行
0 3 * * 1-5 [脚本路径]
```

---

## 4. 双语实现方案

### 4.1 内容分离策略
| 维度 | 中文版 | 英文版 |
|------|--------|--------|
| **文件名** | `*-daily.md` | `*-daily-en.md` |
| **Frontmatter** | `lang: zh` | `lang: en` |
| **Permalink** | 默认 | `/YYYY/MM/DD/daily-en/` |
| **标题** | 全中文 | 全英文 |
| **标签** | #技术设计 #渲染 | #TechDesign #Rendering |
| **描述** | 300字中文深度分析 | 300字英文深度分析 |

### 4.2 首页切换逻辑
```javascript
// 根据 localStorage 语言偏好切换显示
zh-content: 显示中文文章 (zh_post.content)
en-content: 显示英文文章 (en_post.content)

// 同时更新
- 网站标题/描述
- 导航文字
- 页脚信息
```

### 4.3 导航栏语言切换器
```html
<select id="lang-select" onchange="applyTranslations(this.value)">
  <option value="zh">🇨🇳 中文</option>
  <option value="en">🇺🇸 English</option>
</select>
```

---

## 5. 配置信息

### 5.1 API 服务
| 服务 | 用途 | 配置位置 |
|------|------|----------|
| Brave Search | 文章搜索 | 环境变量 |
| GitHub Token | 代码推送 | 环境变量 |

### 5.2 搜索主题配置
```python
SEARCH_TOPICS = {
    "zh": [
        ("UE5 游戏开发 技术", ["UE5", "技术设计", "渲染"]),
        ("Unity 工具链", ["Unity", "工具链", "开发"]),
        ("开放世界 关卡", ["开放世界", "关卡", "工业化"]),
    ],
    "en": [
        ("UE5 game development technical", ["UE5", "TechDesign", "Rendering"]),
        ("Unity toolchain", ["Unity", "Toolchain", "Dev"]),
        ("open world pipeline", ["OpenWorld", "LevelDesign", "Production"]),
    ]
}
```

---

## 6. 运维监控

### 6.1 日志文件
- 日报生成日志
- 飞书消息草稿

### 6.2 健康检查
- **GitHub Pages**: 自动部署，构建状态邮件通知
- **Cron 任务**: 日志记录执行状态
- **飞书推送**: 消息送达确认

### 6.3 故障恢复
| 场景 | 处理方案 |
|------|----------|
| API 搜索失败 | 使用默认文章兜底 |
| GitHub 推送失败 | 日志记录，手动重试 |
| 飞书推送失败 | 保存到文件，主会话补发 |

---

## 7. 待优化项

### 7.1 内容质量
- [ ] 接入 AI 对搜索结果进行摘要改写（当前为模板化描述）
- [ ] 添加文章来源可信度评分
- [ ] 实现用户反馈机制（👍/👎）

### 7.2 技术改进
- [ ] 本地 LLM 接入（节约 API Token）
- [ ] 搜索功能优化（已完成：标题/摘要/Tag 搜索）

### 7.3 内容扩展
- [ ] 周末精选周刊模式
- [ ] 专题系列（如 "UE5 渲染管线深度解析"）
- [ ] 行业报告月度汇总

---

## 8. 更新记录

| 日期 | 版本 | 变更内容 |
|------|------|----------|
| 2026-04-06 | v2.0 | 历史记录重置，从本日起重新累积。修复 archive.md / categories.md CSS 变量错误（--accent-color → --accent 等），修复 archive.md div.archive-item 改为 a 标签，新增 source-link 样式，categories.html 重定向至 categories.md |

---

## 附录

### A. 相关链接
- 网站: https://sionsychen.github.io/gamedev-tech-daily
- 源码: https://github.com/sionsychen/gamedev-tech-daily

### B. 联系方式
- 技术负责人: 小黑 (OpenClaw)

---

*文档由 OpenClaw 自动生成于 2026-03-04*
