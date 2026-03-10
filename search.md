---
layout: default
title: Search
---

<div class="search-page">
  <h2 class="page-title">🔍 Search Articles</h2>
  
  <div class="search-box">
    <input type="text" id="search-input" placeholder="Enter keywords..." class="search-input">
  </div>
  
  <div id="search-results" class="search-results">
    <!-- Search results will be displayed here -->
  </div>
  
  <div id="all-posts" class="all-posts">
    <h3>All Posts</h3>
    <div class="post-list">
      {% for post in site.posts %}
        {% if post.path contains '-en' or post.lang == 'en' %}
        <div class="post-item" data-title="{{ post.title | downcase }}" data-content="{{ post.content | strip_html | downcase }}">
          <a href="{{ post.url | relative_url }}" class="post-link">{{ post.title }}</a>
          <span class="post-date">{{ post.date | date: "%Y-%m-%d" }}</span>
          <p class="post-excerpt">{{ post.content | strip_html | truncate: 100 }}</p>
        </div>
        {% endif %}
      {% endfor %}
    </div>
  </div>
</div>

<script>
document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.getElementById('search-input');
  const searchResults = document.getElementById('search-results');
  const allPosts = document.getElementById('all-posts');
  const postItems = document.querySelectorAll('.post-item');
  
  searchInput.addEventListener('input', function() {
    const query = this.value.trim().toLowerCase();
    
    if (query.length === 0) {
      searchResults.style.display = 'none';
      allPosts.style.display = 'block';
      return;
    }
    
    searchResults.style.display = 'block';
    allPosts.style.display = 'none';
    
    let resultsHTML = '<h3>Search Results</h3><div class="post-list">';
    let hasResults = false;
    
    postItems.forEach(function(item) {
      const title = item.getAttribute('data-title');
      const content = item.getAttribute('data-content');
      
      if (title.includes(query) || content.includes(query)) {
        hasResults = true;
        const link = item.querySelector('.post-link').href;
        const titleText = item.querySelector('.post-link').textContent;
        const date = item.querySelector('.post-date').textContent;
        const excerpt = item.querySelector('.post-excerpt').textContent;
        
        resultsHTML += `
          <div class="post-item">
            <a href="${link}" class="post-link">${titleText}</a>
            <span class="post-date">${date}</span>
            <p class="post-excerpt">${excerpt}</p>
          </div>
        `;
      }
    });
    
    if (!hasResults) {
      resultsHTML += '<p class="no-results">No matching articles found</p>';
    }
    
    resultsHTML += '</div>';
    searchResults.innerHTML = resultsHTML;
  });
});
</script>

<style>
.search-page {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 1rem;
}

.page-title {
  text-align: center;
  margin-bottom: 2rem;
  color: var(--accent-color);
}

.search-box {
  margin-bottom: 2rem;
}

.search-input {
  width: 100%;
  padding: 1rem 1.5rem;
  font-size: 1.1rem;
  border: 2px solid var(--border-color);
  border-radius: 8px;
  background: var(--card-bg);
  color: var(--text-color);
}

.search-input:focus {
  outline: none;
  border-color: var(--accent-color);
}

.post-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.post-item {
  padding: 1.5rem;
  background: var(--card-bg);
  border-radius: 8px;
  border: 1px solid var(--border-color);
}

.post-link {
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--accent-color);
  text-decoration: none;
}

.post-link:hover {
  text-decoration: underline;
}

.post-date {
  display: block;
  color: var(--text-muted);
  font-size: 0.9rem;
  margin-top: 0.5rem;
}

.post-excerpt {
  margin-top: 0.5rem;
  color: var(--text-secondary);
  font-size: 0.95rem;
}

.no-results {
  text-align: center;
  padding: 3rem;
  color: var(--text-muted);
}
</style>
