<script>
  import ProductCard from '$lib/components/ProductCard.svelte';
  import { productsData } from '$lib/data/products.js';
  import { t } from '$lib/i18n/index.js';
</script>

<svelte:head>
  <title>{$t('pageTitles.products')}</title>
</svelte:head>

<div class="container">
  <div class="page-title">
    <h1>{$t('productsPage.title')}</h1>
    <p>{$t('productsPage.subtitle')}</p>
  </div>

  <div class="products-list">
    {#each productsData as product}
      <ProductCard {product} />
    {/each}
  </div>
</div>

<style>
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px 40px;
  }
  
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
  
  .products-list {
    display: grid;
    gap: 20px;
  }
</style>
