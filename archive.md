---
layout: default
title: Archive
---

<section class="archive-page">
  <h2 class="page-title">📚 Archive</h2>
  
  <div class="archive-list-full">
    {% assign sorted_posts = site.posts | sort: 'date' | reverse %}
    {% for post in sorted_posts %}
      {% if post.path contains '-en' or post.lang == 'en' %}
      <a href="{{ post.url | relative_url }}" class="archive-item">
        <span class="archive-date">{{ post.date | date: "%Y-%m-%d" }}</span>
        <span class="archive-title">{{ post.title }}</span>
        <svg class="archive-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" style="width:16px;height:16px;flex-shrink:0;">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </a>
      {% endif %}
    {% endfor %}
  </div>
  
  <div class="back-link-container">
    <a href="{{ '/' | relative_url }}" class="back-link">← Back to Home</a>
  </div>
</section>

<style>
.archive-page {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 1rem;
}

.page-title {
  text-align: center;
  margin-bottom: 2rem;
  color: var(--text-primary);
  font-size: 1.8rem;
}

.archive-list-full {
  display: flex;
  flex-direction: column;
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  overflow: hidden;
  background: var(--bg-secondary);
}

.archive-item {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 1rem 1.25rem;
  border-bottom: 1px solid var(--border);
  text-decoration: none;
  transition: all 0.2s ease;
}

.archive-item:last-child {
  border-bottom: none;
}

.archive-item:hover {
  background: var(--bg-tertiary);
  padding-left: 1.5rem;
}

.archive-date {
  font-family: var(--font-mono);
  font-size: 0.8125rem;
  color: var(--accent-light);
  white-space: nowrap;
  min-width: 100px;
  flex-shrink: 0;
}

.archive-title {
  flex: 1;
  color: var(--text-secondary);
  font-weight: 500;
  font-size: 0.9375rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.back-link-container {
  margin-top: 2rem;
  text-align: center;
}

.back-link {
  color: var(--accent-light);
  text-decoration: none;
  font-weight: 500;
  font-size: 0.875rem;
  transition: color 0.2s;
}

.back-link:hover {
  color: var(--accent);
}

@media (max-width: 600px) {
  .archive-item {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.25rem;
  }
}
</style>
