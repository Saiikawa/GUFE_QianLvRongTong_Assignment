<script>
  import ProductCard from '$lib/components/ProductCard.svelte';
  import { carbonProductsData } from '$lib/data/products.js';
  import { t } from '$lib/i18n/index.js';
  
  let filterAmount = $state('');
  let filterTerm = $state('');
  let filterRate = $state('');
  let filterCity = $state('');
  let filterGuarantee = $state('');
  let currentPage = $state(1);
  const pageSize = 5;
  
  let filteredProducts = $derived.by(() => {
    return carbonProductsData.filter(product => {
      // 融资金额筛选
      if (filterAmount) {
        const [min, max] = filterAmount.split('-').map(Number);
        if (product.maxAmount < min || product.maxAmount > max) return false;
      }
      
      // 融资期限筛选
      if (filterTerm) {
        const [min, max] = filterTerm.split('-').map(Number);
        if (product.term < min || product.term > max) return false;
      }
      
      // 贷款利率筛选
      if (filterRate) {
        const [min, max] = filterRate.split('-').map(Number);
        if (product.minRate < min / 100 || product.minRate > max / 100) return false;
      }
      
      // 适用地市筛选
      if (filterCity && product.city !== filterCity && product.city !== '全省') return false;
      
      // 担保方式筛选
      if (filterGuarantee && !product.guarantee.includes(filterGuarantee)) return false;
      
      return true;
    });
  });
  
  let paginatedProducts = $derived.by(() => {
    const start = (currentPage - 1) * pageSize;
    const end = start + pageSize;
    return filteredProducts.slice(start, end);
  });
  
  let totalPages = $derived(Math.ceil(filteredProducts.length / pageSize));
  
  function resetFilters() {
    filterAmount = '';
    filterTerm = '';
    filterRate = '';
    filterCity = '';
    filterGuarantee = '';
    currentPage = 1;
  }
  
  function applyFilters() {
    currentPage = 1;
  }
  
  function goToPage(page) {
    if (page >= 1 && page <= totalPages) {
      currentPage = page;
    }
  }

</script>

<svelte:head>
  <title>{$t('pageTitles.carbon')}</title>
</svelte:head>

<div class="container">
  <div class="page-title">
    <h1>{$t('carbonPage.title')}</h1>
    <p>{$t('carbonPage.subtitle')}</p>
  </div>
  
  <!-- 筛选区域 -->
  <div class="filter-section">
    <div class="filter-row">
      <div class="filter-item">
        <label>{$t('carbonPage.loanAmount')}</label>
        <select bind:value={filterAmount}>
          <option value="">{$t('carbonPage.unlimited')}</option>
          <option value="0-100">{$t('carbonPage.lessThan100')}</option>
          <option value="100-500">{$t('carbonPage.range100to500')}</option>
          <option value="500-1000">{$t('carbonPage.range500to1000')}</option>
          <option value="1000-9999">{$t('carbonPage.moreThan1000')}</option>
        </select>
      </div>
      <div class="filter-item">
        <label>{$t('carbonPage.loanTerm')}</label>
        <select bind:value={filterTerm}>
          <option value="">{$t('carbonPage.unlimited')}</option>
          <option value="0-12">{$t('carbonPage.within12Months')}</option>
          <option value="12-36">{$t('carbonPage.range12to36')}</option>
          <option value="36-999">{$t('carbonPage.moreThan36')}</option>
        </select>
      </div>
      <div class="filter-item">
        <label>{$t('carbonPage.loanRate')}</label>
        <select bind:value={filterRate}>
          <option value="">{$t('carbonPage.unlimited')}</option>
          <option value="0-4">{$t('carbonPage.below4')}</option>
          <option value="4-5">{$t('carbonPage.range4to5')}</option>
          <option value="5-999">{$t('carbonPage.above5')}</option>
        </select>
      </div>
      <div class="filter-item">
        <label>{$t('carbonPage.applicableCity')}</label>
        <select bind:value={filterCity}>
          <option value="">{$t('carbonPage.unlimited')}</option>
          <option value="贵阳">贵阳市</option>
          <option value="遵义">遵义市</option>
          <option value="六盘水">六盘水市</option>
          <option value="安顺">安顺市</option>
          <option value="毕节">毕节市</option>
          <option value="铜仁">铜仁市</option>
          <option value="黔西南">黔西南州</option>
          <option value="黔东南">黔东南州</option>
          <option value="黔南">黔南州</option>
        </select>
      </div>
      <div class="filter-item">
        <label>{$t('carbonPage.guaranteeMethod')}</label>
        <select bind:value={filterGuarantee}>
          <option value="">{$t('carbonPage.unlimited')}</option>
          <option value="信用">{$t('carbonPage.credit')}</option>
          <option value="抵押">{$t('carbonPage.mortgage')}</option>
          <option value="质押">{$t('carbonPage.pledge')}</option>
          <option value="担保">{$t('carbonPage.guarantee')}</option>
        </select>
      </div>
    </div>
    <div class="filter-actions">
      <button class="filter-reset" onclick={resetFilters}>{$t('carbonPage.reset')}</button>
      <button class="filter-search" onclick={applyFilters}>{$t('carbonPage.search')}</button>
    </div>
  </div>
  
  <!-- 产品列表 -->
  <div class="product-list-header">
    <span>{$t('carbonPage.totalProducts').replace('{count}', filteredProducts.length)}</span>
  </div>
  
  {#each paginatedProducts as product}
    <ProductCard {product} />
  {/each}
  
  {#if filteredProducts.length === 0}
    <div class="empty-state">
      <p>{$t('carbonPage.noResults')}</p>
    </div>
  {/if}
  
  <!-- 分页 -->
  {#if totalPages > 1}
    <div class="pagination">
      <button onclick={() => goToPage(currentPage - 1)} disabled={currentPage === 1}>{$t('carbonPage.prevPage')}</button>
      {#each Array(totalPages) as _, i}
        <button 
          onclick={() => goToPage(i + 1)} 
          class:active={currentPage === i + 1}
        >
          {i + 1}
        </button>
      {/each}
      <button onclick={() => goToPage(currentPage + 1)} disabled={currentPage === totalPages}>{$t('carbonPage.nextPage')}</button>
    </div>
  {/if}
</div>

<style>
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px 40px;
  }
  
  /* 页面头部导航条 */
  .page-header {
    background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
    padding: 40px 0 30px;
  }
  
  /* 页面标题 */
  .page-title {
    text-align: center;
    margin: 40px 0 30px;
  }
  
  .page-title h1 {
    color: var(--text-primary);
    font-size: 28px;
    font-weight: 600;
    margin-bottom: 10px;
  }
  
  .page-title p {
    color: var(--text-secondary);
    font-size: 16px;
  }
  
  /* 筛选区域 */
  .filter-section {
    background: #fff;
    border-radius: 12px;
    padding: 25px;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.05);
    margin-bottom: 25px;
  }
  
  .filter-row {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 15px;
  }
  
  .filter-item {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  
  .filter-item label {
    color: var(--text-secondary);
    font-size: 13px;
  }
  
  .filter-item select {
    padding: 10px 12px;
    border: 1px solid var(--border);
    border-radius: 6px;
    font-size: 14px;
    background: #fff;
    cursor: pointer;
  }
  
  .filter-item select:focus {
    outline: none;
    border-color: var(--primary);
  }
  
  .filter-actions {
    display: flex;
    justify-content: center;
    gap: 15px;
    margin-top: 20px;
    padding-top: 20px;
    border-top: 1px solid #f3f4f6;
  }
  
  .filter-reset {
    padding: 10px 30px;
    background: #f3f4f6;
    color: var(--text-primary);
    border: none;
    border-radius: 6px;
    font-size: 14px;
    cursor: pointer;
  }
  
  .filter-search {
    padding: 10px 40px;
    background: var(--primary);
    color: #fff;
    border: none;
    border-radius: 6px;
    font-size: 14px;
    cursor: pointer;
  }
  
  .filter-search:hover {
    background: var(--primary-dark);
  }
  
  /* 产品列表 */
  .product-list-header {
    padding: 15px 0;
    color: var(--text-secondary);
    font-size: 14px;
  }
  
  .product-list-header strong {
    color: var(--primary);
  }
  
  .empty-state {
    text-align: center;
    padding: 60px;
    color: var(--text-light);
  }
  
  /* 分页 */
  .pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin-top: 30px;
  }
  
  .pagination button {
    padding: 8px 16px;
    background: #fff;
    color: var(--text-primary);
    border: 1px solid var(--border);
    border-radius: 6px;
    font-size: 14px;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  
  .pagination button:hover:not(:disabled) {
    background: var(--primary);
    color: #fff;
    border-color: var(--primary);
  }
  
  .pagination button.active {
    background: var(--primary);
    color: #fff;
    border-color: var(--primary);
  }
  
  .pagination button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  
  @media (max-width: 900px) {
    .filter-row {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  
  @media (max-width: 600px) {
    .filter-row {
      grid-template-columns: 1fr;
    }
  }
</style>
