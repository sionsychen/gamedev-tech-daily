#!/bin/bash
# 自动发布日报到 GitHub Pages
# 这个脚本由日报生成后调用

REPO_DIR="/root/.openclaw/workspace/gamedev-tech-daily"
DATE=$(date '+%Y-%m-%d')
POST_FILE="$REPO_DIR/_posts/${DATE}-daily.md"

echo "[$(date)] 开始发布日报到网站..."

# 检查是否有新内容生成
if [ ! -f "$POST_FILE" ]; then
    echo "错误：没有找到今天的日报文件"
    exit 1
fi

# 进入仓库目录
cd "$REPO_DIR"

# 配置 git（如果还没配置）
git config user.name "OpenClaw Bot" 2>/dev/null || true
git config user.email "bot@openclaw.ai" 2>/dev/null || true

# 添加新文章
git add _posts/
git add -A

# 提交
git commit -m "📰 发布日报: $DATE" || echo "没有新内容需要提交"

# 推送到 GitHub
git push origin main || echo "推送失败，请检查 GitHub 配置"

echo "[$(date)] 日报发布完成"
