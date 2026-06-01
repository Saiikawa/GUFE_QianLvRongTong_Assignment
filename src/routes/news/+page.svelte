<script>
  import NewsItem from '$lib/components/NewsItem.svelte';
  import { newsData, getCategoryName } from '$lib/data/news.js';
  import { t } from '$lib/i18n/index.js';
  
  let selectedCategory = $state('all');
  
  let filteredNews = $derived.by(() => {
    if (selectedCategory === 'all') {
      return newsData;
    }
    return newsData.filter(n => n.category === selectedCategory);
  });
</script>

<svelte:head>
  <title>{$t('newsPage.title')} - 黔绿融通</title>
</svelte:head>

<div class="container">
  <div class="news-content-grid">
    <!-- 左侧分类 -->
    <div class="news-sidebar">
      <h3>{$t('newsPage.category')}</h3>
      <ul class="news-category-list">
        <li 
          class:active={selectedCategory === 'all'}
          onclick={() => selectedCategory = 'all'}
        >
          <span>{$t('newsPage.all')}</span>
        </li>
        <li 
          class:active={selectedCategory === 'notice'}
          onclick={() => selectedCategory = 'notice'}
        >
          <span>{$t('newsPage.notice')}</span>
        </li>
        <li 
          class:active={selectedCategory === 'policy'}
          onclick={() => selectedCategory = 'policy'}
        >
          <span>{$t('newsPage.policy')}</span>
        </li>
        <li 
          class:active={selectedCategory === 'news'}
          onclick={() => selectedCategory = 'news'}
        >
          <span>{$t('newsPage.news')}</span>
        </li>
      </ul>
    </div>
    
    <!-- 右侧资讯列表 -->
    <div class="news-list">
      {#if filteredNews.length > 0}
        {#each filteredNews as news}
          <NewsItem {news} />
        {/each}
      {:else}
        <div class="empty-state">
          <p>{$t('newsPage.noResults')}</p>
        </div>
      {/if}
    </div>
  </div>
</div>

<style>
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px 40px;
  }
  
  .news-content-grid {
    display: grid;
    grid-template-columns: 200px 1fr;
    gap: 25px;
    margin-top: 30px;
  }
  
  .news-sidebar {
    background: #fff;
    padding: 20px;
    border-radius: 12px;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.05);
    height: fit-content;
  }
  
  .news-sidebar h3 {
    color: var(--text-primary);
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 15px;
    padding-bottom: 10px;
    border-bottom: 2px solid var(--primary);
  }
  
  .news-category-list {
    list-style: none;
  }
  
  .news-category-list li {
    padding: 12px 15px;
    color: var(--text-primary);
    cursor: pointer;
    border-radius: 6px;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
  }
  
  .news-category-list li:hover,
  .news-category-list li.active {
    background: var(--primary-light);
    color: var(--primary);
  }
  
  .news-category-list li.active span {
    font-weight: 600;
  }
  
  .news-list {
    background: #fff;
    border-radius: 12px;
    padding: 25px;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.05);
  }
  
  .empty-state {
    text-align: center;
    padding: 60px;
    color: var(--text-light);
  }
  
  @media (max-width: 768px) {
    .news-content-grid {
      grid-template-columns: 1fr;
    }
    
    .news-sidebar {
      display: none;
    }
  }
</style>
