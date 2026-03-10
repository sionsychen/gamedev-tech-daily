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
      <div class="archive-item">
        <div class="archive-date">{{ post.date | date: "%Y-%m-%d" }}</div>
        <a href="{{ post.url | relative_url }}" class="archive-title">{{ post.title }}</a>
      </div>
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
  color: var(--accent-color, #2c5aa0);
  font-size: 1.8rem;
}

.archive-list-full {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.archive-item {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 1rem 1.5rem;
  background: var(--card-bg, #f8f9fa);
  border-radius: 8px;
  border: 1px solid var(--border-color, #e0e0e0);
  transition: all 0.2s ease;
}

.archive-item:hover {
  background: var(--hover-bg, #e8e8e8);
  transform: translateX(4px);
}

.archive-date {
  color: var(--text-muted, #666);
  font-size: 0.9rem;
  font-family: monospace;
  white-space: nowrap;
  min-width: 100px;
}

.archive-title {
  color: var(--accent-color, #2c5aa0);
  text-decoration: none;
  font-weight: 500;
  font-size: 1.1rem;
}

.archive-title:hover {
  text-decoration: underline;
}

.back-link-container {
  margin-top: 2rem;
  text-align: center;
}

.back-link {
  color: var(--accent-color, #2c5aa0);
  text-decoration: none;
  font-weight: 500;
}

.back-link:hover {
  text-decoration: underline;
}

@media (max-width: 600px) {
  .archive-item {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
}
</style>
