---
layout: default
title: Categories
---

<div class="categories-page">
  <h2 class="page-title">📂 Categories</h2>
  
  <div class="category-cloud">
    {% assign all_tags = "" | split: "" %}
    {% for post in site.posts %}
      {% if post.path contains '-en' or post.lang == 'en' %}
        {% assign content = post.content | downcase %}
        {% if content contains '#ue5' or content contains '#UE5' %}{% assign all_tags = all_tags | push: 'UE5' %}{% endif %}
        {% if content contains '#unity' or content contains '#Unity' %}{% assign all_tags = all_tags | push: 'Unity' %}{% endif %}
        {% if content contains '#shaders' %}{% assign all_tags = all_tags | push: 'Shaders' %}{% endif %}
        {% if content contains '#lighting' or content contains '#lumen' %}{% assign all_tags = all_tags | push: 'Lighting' %}{% endif %}
        {% if content contains '#animation' %}{% assign all_tags = all_tags | push: 'Animation' %}{% endif %}
        {% if content contains '#materials' %}{% assign all_tags = all_tags | push: 'Materials' %}{% endif %}
        {% if content contains '#indie' %}{% assign all_tags = all_tags | push: 'Indie' %}{% endif %}
        {% if content contains '#tech' %}{% assign all_tags = all_tags | push: 'Tech' %}{% endif %}
        {% if content contains '#tools' %}{% assign all_tags = all_tags | push: 'Tools' %}{% endif %}
        {% if content contains '#pipeline' %}{% assign all_tags = all_tags | push: 'Pipeline' %}{% endif %}
      {% endif %}
    {% endfor %}
    
    {% assign unique_tags = all_tags | uniq | sort %}
    
    <div class="tags-container">
      <button class="tag-btn active" data-tag="all">All</button>
      {% for tag in unique_tags %}
        <button class="tag-btn" data-tag="{{ tag }}">{{ tag }}</button>
      {% endfor %}
    </div>
  </div>
  
  <div class="posts-by-category">
    {% for post in site.posts %}
      {% if post.path contains '-en' or post.lang == 'en' %}
        {% assign content = post.content | downcase %}
        {% assign tags = "" %}
        {% if content contains '#ue5' or content contains '#UE5' %}{% assign tags = tags | append: 'UE5 ' %}{% endif %}
        {% if content contains '#unity' or content contains '#Unity' %}{% assign tags = tags | append: 'Unity ' %}{% endif %}
        {% if content contains '#shaders' %}{% assign tags = tags | append: 'Shaders ' %}{% endif %}
        {% if content contains '#lighting' or content contains '#lumen' %}{% assign tags = tags | append: 'Lighting ' %}{% endif %}
        {% if content contains '#animation' %}{% assign tags = tags | append: 'Animation ' %}{% endif %}
        {% if content contains '#materials' %}{% assign tags = tags | append: 'Materials ' %}{% endif %}
        {% if content contains '#indie' %}{% assign tags = tags | append: 'Indie ' %}{% endif %}
        {% if content contains '#tech' %}{% assign tags = tags | append: 'Tech ' %}{% endif %}
        {% if content contains '#tools' %}{% assign tags = tags | append: 'Tools ' %}{% endif %}
        {% if content contains '#pipeline' %}{% assign tags = tags | append: 'Pipeline ' %}{% endif %}
        
        <div class="category-post" data-tags="{{ tags }} all">
          <a href="{{ post.url | relative_url }}" class="post-title">{{ post.title }}</a>
          <span class="post-date">{{ post.date | date: "%Y-%m-%d" }}</span>
          <div class="post-tags">
            {% assign tag_list = tags | split: ' ' %}
            {% for t in tag_list %}
              {% if t != '' %}
                <span class="tag-badge">{{ t }}</span>
              {% endif %}
            {% endfor %}
          </div>
        </div>
      {% endif %}
    {% endfor %}
  </div>
</div>

<script>
document.addEventListener('DOMContentLoaded', function() {
  const tagBtns = document.querySelectorAll('.tag-btn');
  const posts = document.querySelectorAll('.category-post');
  
  tagBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
      const selectedTag = this.getAttribute('data-tag');
      
      // Update active state
      tagBtns.forEach(function(b) { b.classList.remove('active'); });
      this.classList.add('active');
      
      // Filter posts
      posts.forEach(function(post) {
        const postTags = post.getAttribute('data-tags');
        if (postTags.includes(selectedTag)) {
          post.style.display = 'block';
        } else {
          post.style.display = 'none';
        }
      });
    });
  });
});
</script>

<style>
.categories-page {
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem 1rem;
}

.page-title {
  text-align: center;
  margin-bottom: 2rem;
  color: var(--accent-color);
}

.category-cloud {
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: var(--card-bg);
  border-radius: 12px;
  border: 1px solid var(--border-color);
}

.tags-container {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.tag-btn {
  padding: 0.5rem 1rem;
  background: var(--tag-bg);
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-size: 0.9rem;
  color: var(--text-color);
  transition: all 0.2s;
}

.tag-btn:hover {
  background: var(--accent-color);
  color: white;
}

.tag-btn.active {
  background: var(--accent-color);
  color: white;
  font-weight: 600;
}

.posts-by-category {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.category-post {
  padding: 1.5rem;
  background: var(--card-bg);
  border-radius: 8px;
  border: 1px solid var(--border-color);
}

.post-title {
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--accent-color);
  text-decoration: none;
}

.post-title:hover {
  text-decoration: underline;
}

.post-date {
  display: block;
  color: var(--text-muted);
  font-size: 0.9rem;
  margin-top: 0.5rem;
}

.post-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.75rem;
}

.tag-badge {
  padding: 0.25rem 0.5rem;
  background: var(--tag-bg);
  border-radius: 4px;
  font-size: 0.8rem;
  color: var(--accent-color);
}
</style>
