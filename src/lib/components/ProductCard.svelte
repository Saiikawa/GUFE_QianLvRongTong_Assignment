<script>
  import { t } from '$lib/i18n/index.js';
  
  let { product, showRequirements = true } = $props();
</script>

<div class="product-card">
  <div class="product-card-header">
    <div>
      <div class="product-bank">{product.bank}</div>
      <div class="product-name">{product.name}</div>
    </div>
    <div class="product-tags">
      <span class="tag">{product.guarantee}</span>
      <span class="tag">{product.city}</span>
    </div>
  </div>
  
  <div class="product-details">
    <div class="detail-item">
      <div class="detail-label">{$t('productCard.maxAmount')}</div>
      <div class="detail-value">{product.maxAmount}万</div>
    </div>
    <div class="detail-item">
      <div class="detail-label">{$t('productCard.interestRate')}</div>
      <div class="detail-value rate">{product.minRate}%-{product.maxRate}%</div>
    </div>
    <div class="detail-item">
      <div class="detail-label">{$t('productCard.loanTerm')}</div>
      <div class="detail-value">最长{product.term}月</div>
    </div>
    <div class="detail-item">
      <div class="detail-label">{$t('productCard.applicableCity')}</div>
      <div class="detail-value city">{product.city}</div>
    </div>
  </div>
  
  {#if showRequirements && product.requirements}
    <div class="product-requirements">
      <strong>{$t('productCard.requirements')}：</strong>{product.requirements}
    </div>
  {/if}
  
  {#if product.advantages}
    <div class="product-advantages">
      <strong>{$t('productCard.advantages')}：</strong>{product.advantages}
    </div>
  {/if}
  
    <div class="product-actions">
    <button class="btn-primary" data-modal-trigger="contact">{$t('common.consultNow')}</button>
    <button class="btn-secondary">{$t('productCard.learnMore')}</button>
  </div>
</div>

<style>
  .product-card {
    background: #fff;
    border-radius: 12px;
    padding: 25px;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.05);
    margin-bottom: 20px;
    transition: all 0.3s ease;
  }
  
  .product-card:hover {
    box-shadow: 0 8px 30px rgba(16, 185, 129, 0.12);
  }
  
  .product-card-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 20px;
    padding-bottom: 15px;
    border-bottom: 1px solid #f3f4f6;
  }
  
  .product-bank {
    color: var(--primary);
    font-size: 16px;
    font-weight: 600;
  }
  
  .product-name {
    color: var(--text-primary);
    font-size: 18px;
    font-weight: 600;
    margin-top: 5px;
  }
  
  .product-tags {
    display: flex;
    gap: 8px;
  }
  
  .product-tags .tag {
    padding: 4px 12px;
    background: var(--primary-light);
    color: var(--primary);
    font-size: 12px;
    border-radius: 4px;
  }
  
  .product-details {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 15px;
    margin-bottom: 20px;
  }
  
  .detail-item {
    text-align: center;
    padding: 15px;
    background: #f9fafb;
    border-radius: 8px;
  }
  
  .detail-label {
    color: var(--text-secondary);
    font-size: 13px;
    margin-bottom: 8px;
  }
  
  .detail-value {
    color: var(--text-primary);
    font-size: 18px;
    font-weight: 600;
  }
  
  .detail-value.rate {
    color: var(--danger);
  }
  
  .detail-value.city {
    font-size: 14px;
  }
  
  .product-requirements {
    color: var(--text-secondary);
    font-size: 14px;
    line-height: 1.6;
    margin-bottom: 15px;
    padding: 15px;
    background: #f9fafb;
    border-radius: 6px;
  }
  
  .product-advantages {
    color: #065f46;
    font-size: 14px;
    padding: 12px 15px;
    background: var(--primary-light);
    border-radius: 6px;
    margin-bottom: 15px;
  }
  
  .product-actions {
    display: flex;
    gap: 15px;
  }
  
  .btn-primary {
    flex: 1;
    padding: 12px;
    background: var(--primary);
    color: #fff;
    border: none;
    border-radius: 6px;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  
  .btn-primary:hover {
    background: var(--primary-dark);
  }
  
  .btn-secondary {
    padding: 12px 20px;
    background: #f3f4f6;
    color: var(--text-primary);
    border: none;
    border-radius: 6px;
    font-size: 14px;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  
  .btn-secondary:hover {
    background: #e5e7eb;
  }
  
  @media (max-width: 600px) {
    .product-details {
      grid-template-columns: repeat(2, 1fr);
    }
    
    .product-card-header {
      flex-direction: column;
      gap: 10px;
    }
    
    .product-actions {
      flex-direction: column;
    }
  }
</style>
