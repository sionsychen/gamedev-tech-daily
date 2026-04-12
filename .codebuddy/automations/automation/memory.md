# Automation Execution History

## 2026-04-11 11:00 AM

**Status**: Partial success (both repos committed locally; push failed — TCP 443 timeout, same recurring network issue)

**gamedev-tech-daily**:
- Fixed: merge conflict in `_posts/2026-04-09-daily-en.md` (kept local 5-article version)
- Created: `_posts/2026-04-11-daily-en.md` (5 articles: Godot vs Unity 2026, DirectX ML SM 6.9, AI sound design, AI NPC UE5 MCP, AI NPC generators)
- Local commit: `e026c67` — push to `main` failed (TCP 443 timeout)

**ai-game-tools-daily**:
- Created: `_posts/2026-04-11-daily.md` (5 articles: AI NPC generators, AI sound pipeline, AI NPC UE5, DirectX neural rendering, Godot vs Unity for AI devs)
- Local commit: `a2051ba` — push to `main` and `gh-pages` both failed (TCP 443 timeout)

**Content sources used**:
- tech-insider.org (Godot vs Unity 2026 — clear winner analysis)
- blog.imseankim.com (DirectX ML Shader Model 6.9 Cooperative Vectors GDC 2026)
- strayspark.studio (AI sound design indie pipeline; AI NPCs UE5 MCP automation)
- genies.com (6 best AI NPC generators 2026 comparison)

**Action needed**: Manual push when network/VPN is available:
- `gamedev-tech-daily`: `git push origin main`
- `ai-game-tools-daily`: `git push origin main && git push origin main:gh-pages`

## 2026-04-09 11:00 AM

**Status**: Partial success (both repos committed locally; push failed due to GitHub port 443 TCP timeout — same recurring network issue as 2026-04-08)

**gamedev-tech-daily**:
- Created: `_posts/2026-04-09-daily-en.md` (5 articles: Godot vs Unity 2026, Godot 4.4 features, ECS architecture, AI coding tools comparison, AI agents for game dev)
- Local commit: `7249910` — push to `main` failed (TCP 443 timeout)

**ai-game-tools-daily**:
- Created: `_posts/2026-04-09-daily.md` (5 articles: AI music generators, AI coding tools, AI agents, Godot vs Unity + AI, complete AI workflow guide)
- Local commit: `c939957` — push to `main` and `gh-pages` both failed (TCP 443 timeout)

**Content sources used**:
- gamedevaihub.com (AI music generators for indie games)
- lumichats.com (Cursor vs Claude Code vs Copilot 2026 comparison)
- index.dev (7 AI agents for game development)
- dev.to (Godot vs Unity in 2026)
- ludara.app (Godot vs Unity detailed comparison)
- blog.desdelinux.net (Godot 4.4 physics/rendering improvements)
- github.com/csprance/gecs (GECS ECS for Godot 4.x)
- tinyash.com (AI game development tools complete guide)

**Action needed**: Manual `git push origin main` for gamedev-tech-daily and `git push origin main && git push origin main:gh-pages` for ai-game-tools-daily when network/VPN is available.

## 2026-04-08 11:00 AM

**Status**: Partial success (gamedev-tech-daily pushed; ai-game-tools-daily commit created but push failed due to network timeout)

**gamedev-tech-daily**:
- Created: `_posts/2026-04-08-daily-en.md` (5 articles, Unity + graphics + architecture + performance)
- Pushed to `main` branch successfully (commit: `68c472d`)

**ai-game-tools-daily**:
- Created: `_posts/2026-04-08-daily.md` (5 articles, AI code/audio/art tools)
- Commit created locally (commit: `5b9c585`) but push to `gh-pages` failed — GitHub port 443 timed out
- **Action needed**: Manual `git push origin gh-pages` when network is available

**Content sources used**:
- gamedev.center (Unity testing, VHS shader, DI+ECS, .NET 9 perf, profiling)
- toolbit.ai (Copilot vs Cursor vs Claude, Suno vs ElevenLabs)
- aloa.co (AI art tools comparison)
- techswill.com (Free AI tools guide)
- artificialanalysis.ai (Agent mode comparison)
