<script>
  import { getCategoryName } from '$lib/data/news.js';
  
  let { news, compact = false } = $props();
</script>

<div class="news-item">
  <span class="tag tag-{news.category}">{getCategoryName(news.category)}</span>
  <div class="news-content">
    {#if news.link}
      <h3><a href={news.link} target="_blank" rel="noopener noreferrer" onclick={(e) => e.stopPropagation()}>{news.title} ↗</a></h3>
    {:else}
      <h3><a href="/news/{news.id}">{news.title}</a></h3>
    {/if}
    <div class="news-meta">
      <span>📅 {news.date}</span>
      <span>📌 {news.source}</span>
      {#if news.link}
        <span class="external-link">🔗</span>
      {/if}
    </div>
    {#if !compact}
      <p class="news-summary">{news.summary}</p>
    {/if}
  </div>
</div>

<style>
  .news-item {
    display: flex;
    padding: 18px 0;
    border-bottom: 1px solid #f3f4f6;
    transition: all 0.3s ease;
  }
  
  .news-item:hover {
    background-color: #f9fafb;
    margin: 0 -15px;
    padding: 18px 15px;
    border-radius: 8px;
  }
  
  .news-item:last-child {
    border-bottom: none;
  }
  
  .tag {
    padding: 4px 10px;
    font-size: 12px;
    border-radius: 4px;
    margin-right: 15px;
    white-space: nowrap;
    height: fit-content;
  }
  
  .tag-policy {
    background: var(--info-bg);
    color: var(--info);
  }
  
  .tag-notice {
    background: var(--warning-bg);
    color: var(--warning);
  }
  
  .tag-news {
    background: #fce7f3;
    color: #db2777;
  }
  
  .news-content {
    flex: 1;
  }
  
  .news-content h3 {
    font-size: 16px;
    margin-bottom: 8px;
    color: var(--text-primary);
    font-weight: 500;
  }
  
  .news-content h3 a {
    color: var(--text-primary);
  }
  
  .news-content h3 a:hover {
    color: var(--primary);
  }
  
  .news-meta {
    display: flex;
    gap: 20px;
    color: var(--text-light);
    font-size: 13px;
  }
  
  .external-link {
    color: var(--primary);
  }
  
  .news-summary {
    margin-top: 8px;
    color: var(--text-secondary);
    font-size: 14px;
    line-height: 1.5;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  
  @media (max-width: 600px) {
    .news-item {
      flex-direction: column;
    }
    
    .tag {
      margin-bottom: 8px;
    }
    
    .news-meta {
      flex-wrap: wrap;
      gap: 10px;
    }
  }
</style>
