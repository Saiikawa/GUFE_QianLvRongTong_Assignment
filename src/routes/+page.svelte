<script>
  import BannerSlider from '$lib/components/BannerSlider.svelte';
  import NewsItem from '$lib/components/NewsItem.svelte';
  import ProductCard from '$lib/components/ProductCard.svelte';
  import { newsData } from '$lib/data/news.js';
  import { carbonProductsData, productsData } from '$lib/data/products.js';
  import { calculateEqualPrincipalAndInterest } from '$lib/utils/calculator.js';
  import { t } from '$lib/i18n/index.js';
  
  let amount = $state('');
  let term = $state(60);
  let rate = $state(3.5);
  let calcResult = $state(null);
  
  const quickEntries = [
    { icon: '🌿', titleKey: 'quickEntry.carbonProducts', descKey: 'quickEntry.carbonDesc', route: '/carbon' },
    { icon: '📋', titleKey: 'quickEntry.projectDeclare', descKey: 'quickEntry.projectDesc', route: '/project' },
    { icon: '📊', titleKey: 'quickEntry.esg', descKey: 'quickEntry.esgDesc', route: '/about' }
  ];
  
  const serviceItems = [
    { icon: '🔍', titleKey: 'services.diagnosis', descKey: 'services.diagnosisDesc' },
    { icon: '📋', titleKey: 'services.materials', descKey: 'services.materialsDesc' },
    { icon: '✓', titleKey: 'services.verification', descKey: 'services.verificationDesc' },
    { icon: '🏦', titleKey: 'services.matching', descKey: 'services.matchingDesc' }
  ];
  
  function calculate() {
    if (!amount || amount <= 0) {
      alert($t('calculator.enterValidAmount'));
      return;
    }
    const monthlyRate = rate / 100 / 12;
    const result = calculateEqualPrincipalAndInterest(amount * 10000, monthlyRate, term);
    calcResult = {
      amount,
      term,
      rate,
      ...result
    };
  }
  
  const latestNews = newsData.slice(0, 5);
  const latestCarbonProducts = carbonProductsData.slice(0, 2);
  const latestProducts = productsData.slice(0, 2);
</script>

<BannerSlider />

<div class="main-container">
  <!-- 快捷入口 -->
  <div class="quick-entry">
    {#each quickEntries as entry}
      <a href={entry.route} class="quick-item">
        <div class="quick-icon">{entry.icon}</div>
        <div class="quick-text">
          <h3>{$t(entry.titleKey)}</h3>
          <p>{$t(entry.descKey)}</p>
        </div>
      </a>
    {/each}
  </div>
  
  <!-- 资讯和计算器区域 -->
  <div class="news-section">
    <!-- 左侧资讯列表 -->
    <div class="news-list">
      <div class="news-header">
        <h2>{$t('products.platformNews')}</h2>
        <a href="/news" class="more-link">{$t('products.viewMore')}</a>
      </div>
      {#each latestNews as news}
        <NewsItem {news} compact />
      {/each}
    </div>
    
    <!-- 右侧贷款计算器 -->
    <div class="calculator-section">
      <h2>🏦 {$t('calculator.title')}</h2>
      <div class="form-group">
        <label>{$t('calculator.amount')}</label>
        <input type="number" bind:value={amount} placeholder={$t('calculator.amountPlaceholder')} min="1" max="5000">
      </div>
      <div class="form-group">
        <label>{$t('calculator.term')}</label>
        <select bind:value={term}>
          <option value={12}>12{$t('calculator.month')}</option>
          <option value={24}>24{$t('calculator.month')}</option>
          <option value={36}>36{$t('calculator.month')}</option>
          <option value={48}>48{$t('calculator.month')}</option>
          <option value={60}>60{$t('calculator.month')}</option>
        </select>
      </div>
      <div class="form-group">
        <label>{$t('calculator.rate')}</label>
        <select bind:value={rate}>
          <option value={3.4}>3.4%</option>
          <option value={3.45}>3.45%</option>
          <option value={3.5}>3.5%</option>
          <option value={3.6}>3.6%</option>
          <option value={4.2}>4.2%</option>
          <option value={4.35}>4.35%</option>
          <option value={4.5}>4.5%</option>
        </select>
      </div>
      <button class="calc-btn" onclick={calculate}>{$t('calculator.calculate')}</button>
      
      {#if calcResult}
        <div class="result-box show">
          <div class="result-item">
            <span>{$t('calculator.loanAmount')}</span>
            <span>{calcResult.amount}万元</span>
          </div>
          <div class="result-item">
            <span>{$t('calculator.loanTerm')}</span>
            <span>{calcResult.term}{$t('calculator.month')}</span>
          </div>
          <div class="result-item">
            <span>{$t('calculator.annualRate')}</span>
            <span>{calcResult.rate}%</span>
          </div>
          <div class="result-item">
            <span>{$t('calculator.monthlyPayment')}</span>
            <span>{calcResult.monthlyPayment.toFixed(2)}元</span>
          </div>
          <div class="result-item">
            <span>{$t('calculator.totalInterest')}</span>
            <span>{calcResult.totalInterest.toFixed(2)}元</span>
          </div>
          <div class="result-item total">
            <span>{$t('calculator.totalPayment')}</span>
            <span>{calcResult.totalPayment.toFixed(2)}元</span>
          </div>
        </div>
      {/if}
    </div>
  </div>
  
  <!-- 碳金融产品推荐 -->
  <div class="section">
    <div class="section-header">
      <h2>🌱 {$t('products.carbonProducts')}</h2>
      <a href="/carbon" class="more-btn">{$t('products.viewAllProducts')}</a>
    </div>
    <div class="products-grid">
      {#each latestCarbonProducts as product}
        <ProductCard {product} />
      {/each}
    </div>
  </div>
  
  <!-- 银行产品预览 -->
  <div class="section">
    <div class="section-header">
      <h2>💰 {$t('products.greenLoanProducts')}</h2>
      <a href="/products" class="more-btn">{$t('products.viewAllProducts')}</a>
    </div>
    <div class="products-grid">
      {#each latestProducts as product}
        <ProductCard {product} />
      {/each}
    </div>
  </div>
  
  <!-- 服务项目介绍 -->
  <div class="services-section">
    <h2 style="text-align: center; color: var(--primary); margin-bottom: 30px;">{$t('services.title')}</h2>
    <div class="services-grid">
      {#each serviceItems as service}
        <div class="service-card">
          <div class="service-icon">{service.icon}</div>
          <h3>{$t(service.titleKey)}</h3>
          <p>{$t(service.descKey)}</p>
        </div>
      {/each}
    </div>
  </div>
</div>

<style>
  .main-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px 40px;
  }
  
  /* 快捷入口 */
  .quick-entry {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
    margin: -50px 0 50px;
    position: relative;
    z-index: 10;
  }
  
  .quick-item {
    background: linear-gradient(135deg, #fff 0%, #f0fdf4 100%);
    padding: 28px 24px;
    border-radius: 16px;
    box-shadow: 0 4px 25px rgba(16, 185, 129, 0.12);
    display: flex;
    align-items: center;
    gap: 20px;
    transition: all 0.3s ease;
    text-decoration: none;
    color: inherit;
    border: 2px solid transparent;
  }
  
  .quick-item:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 40px rgba(16, 185, 129, 0.2);
    border-color: var(--primary);
  }
  
  .quick-icon {
    font-size: 42px;
    width: 70px;
    height: 70px;
    background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    box-shadow: 0 4px 15px rgba(16, 185, 129, 0.3);
  }
  
  .quick-text {
    flex: 1;
  }
  
  .quick-text h3 {
    color: var(--text-primary);
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 6px;
  }
  
  .quick-text p {
    color: var(--text-secondary);
    font-size: 14px;
    line-height: 1.4;
  }
  
  /* 资讯区域 */
  .news-section {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 30px;
    margin-bottom: 40px;
  }
  
  .news-list {
    background: #fff;
    border-radius: 12px;
    padding: 25px;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.05);
  }
  
  .news-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    padding-bottom: 15px;
    border-bottom: 2px solid var(--primary);
  }
  
  .news-header h2 {
    color: var(--primary);
    font-size: 20px;
  }
  
  .more-link {
    color: var(--primary);
    font-size: 14px;
  }
  
  /* 贷款计算器 */
  .calculator-section {
    background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
    border-radius: 12px;
    padding: 25px;
    color: #fff;
    box-shadow: 0 4px 20px rgba(16, 185, 129, 0.25);
    height: fit-content;
  }
  
  .calculator-section h2 {
    font-size: 20px;
    margin-bottom: 20px;
    text-align: center;
  }
  
  .form-group {
    margin-bottom: 18px;
  }
  
  .form-group label {
    display: block;
    margin-bottom: 8px;
    font-size: 14px;
    color: rgba(255, 255, 255, 0.9);
  }
  
  .form-group input,
  .form-group select {
    width: 100%;
    padding: 12px;
    border: none;
    border-radius: 6px;
    font-size: 14px;
    background: rgba(255, 255, 255, 0.95);
  }
  
  .form-group input:focus,
  .form-group select:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.3);
  }
  
  .calc-btn {
    width: 100%;
    padding: 14px;
    background: #fff;
    color: var(--primary);
    border: none;
    border-radius: 6px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  
  .calc-btn:hover {
    background: #f0fdf4;
    transform: translateY(-2px);
  }
  
  .result-box {
    margin-top: 18px;
    padding: 15px;
    background: rgba(255, 255, 255, 0.15);
    border-radius: 6px;
  }
  
  .result-item {
    display: flex;
    justify-content: space-between;
    padding: 8px 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    font-size: 14px;
  }
  
  .result-item:last-child {
    border-bottom: none;
  }
  
  .result-item.total {
    font-size: 16px;
    font-weight: 600;
    padding-top: 10px;
  }
  
  /* 区块标题 */
  .section {
    margin-bottom: 40px;
  }
  
  .section-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 25px;
  }
  
  .section-header h2 {
    color: var(--text-primary);
    font-size: 22px;
    font-weight: 600;
  }
  
  .more-btn {
    padding: 10px 20px;
    background: var(--primary);
    color: #fff;
    border-radius: 6px;
    font-size: 14px;
    text-decoration: none;
    transition: all 0.3s ease;
  }
  
  .more-btn:hover {
    background: var(--primary-dark);
  }
  
  .products-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
  
  /* 服务卡片 */
  .services-section {
    margin-top: 60px;
  }
  
  .services-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
  }
  
  .service-card {
    background: #fff;
    padding: 30px 20px;
    border-radius: 12px;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.05);
    text-align: center;
    transition: all 0.3s ease;
  }
  
  .service-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px rgba(16, 185, 129, 0.15);
  }
  
  .service-icon {
    font-size: 48px;
    margin-bottom: 20px;
  }
  
  .service-card h3 {
    color: var(--text-primary);
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 10px;
  }
  
  .service-card p {
    color: var(--text-secondary);
    font-size: 14px;
    line-height: 1.5;
  }
  
  @media (max-width: 1100px) {
    .quick-entry {
      grid-template-columns: repeat(3, 1fr);
      margin-top: 20px;
    }
    
    .services-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  
  @media (max-width: 900px) {
    .news-section {
      grid-template-columns: 1fr;
    }
  }
  
  @media (max-width: 768px) {
    .quick-entry {
      grid-template-columns: 1fr;
      margin-top: -30px;
      gap: 16px;
    }
    
    .quick-item {
      padding: 20px;
    }
    
    .quick-icon {
      width: 56px;
      height: 56px;
      font-size: 32px;
    }
    
    .products-grid {
      grid-template-columns: 1fr;
    }
    
    .services-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
