<script>
  import { t } from '$lib/i18n/index.js';
  
  const currentYear = new Date().getFullYear();
</script>

<footer class="footer">
  <div class="footer-container">
    <div class="footer-content">
      <!-- 品牌区域 -->
      <div class="footer-section brand">
        <div class="brand-logo">
          <span class="logo-icon">🌿</span>
          <h3>黔绿融通</h3>
        </div>
        <p class="brand-desc">{$t('footer.brandDesc1')}</p>
        <p class="brand-desc">{$t('footer.brandDesc2')}</p>
        <p class="brand-desc">{$t('footer.brandDesc3')}</p>
        <div class="social-links">
          <a href="/" class="social-btn" title="微信">💬</a>
          <a href="/" class="social-btn" title="微博">📱</a>
          <a href="/" class="social-btn" title="邮箱">✉️</a>
        </div>
      </div>
      
      <!-- 快速链接 -->
      <div class="footer-section">
        <h4>
          <span class="section-icon">🔗</span>
          {$t('footer.quickLinks')}
        </h4>
        <ul>
          <li><a href="/">{$t('nav.home')}</a></li>
          <li><a href="/carbon">{$t('nav.carbon')}</a></li>
          <li><a href="/products">{$t('nav.products')}</a></li>
          <li><a href="/project">{$t('nav.project')}</a></li>
          <li><a href="/international">{$t('nav.international')}</a></li>
        </ul>
      </div>
      
      <!-- 服务项目 -->
      <div class="footer-section">
        <h4>
          <span class="section-icon">🛠️</span>
          {$t('footer.services')}
        </h4>
        <ul>
          <li><a href="/carbon">{$t('nav.carbon')}</a></li>
          <li><a href="/products">{$t('nav.products')}</a></li>
          <li><a href="/project">{$t('nav.project')}</a></li>
          <li><a href="/calculator">{$t('nav.calculator')}</a></li>
          <li><a href="/about">ESG {$t('aboutServices.esgService')}</a></li>
        </ul>
      </div>
      
      <!-- 联系我们 -->
      <div class="footer-section contact">
        <h4>
          <span class="section-icon">📞</span>
          {$t('footer.contactUs')}
        </h4>
        <div class="contact-item">
          <span class="contact-icon">📞</span>
          <div>
            <span class="contact-label">{$t('footer.hotline')}</span>
            <span class="contact-value">400-888-8888</span>
          </div>
        </div>
        <div class="contact-item">
          <span class="contact-icon">✉️</span>
          <div>
            <span class="contact-label">{$t('footer.email')}</span>
            <span class="contact-value">contact@qianlvtong.com</span>
          </div>
        </div>
        <div class="contact-item">
          <span class="contact-icon">📍</span>
          <div>
            <span class="contact-label">{$t('footer.address')}</span>
            <span class="contact-value">贵州省贵阳市观山湖区金融城</span>
          </div>
        </div>
        <div class="contact-item">
          <span class="contact-icon">🕐</span>
          <div>
            <span class="contact-label">{$t('footer.workTime')}</span>
            <span class="contact-value">{$t('footer.workSchedule')}</span>
          </div>
        </div>
      </div>
      

    </div>
    
    <!-- 底部版权 -->
    <div class="footer-bottom">
      <div class="footer-logo-small">
        <span>🌿</span>
        <span>黔绿融通</span>
      </div>
      <p>&copy; {currentYear} 贵州省绿色金融综合服务平台 | 黔ICP备XXXXXXXX号</p>
      <p class="footer-credit">{$t('footer.copyright')}</p>
    </div>
  </div>
</footer>

<style>
  .footer {
    background: linear-gradient(180deg, #1a1a2e 0%, #16213e 100%);
    color: #fff;
    padding: 60px 20px 30px;
    margin-top: 60px;
    position: relative;
  }
  
  .footer::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, var(--primary) 0%, #10b981 50%, var(--primary) 100%);
  }
  
  .footer-container {
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .footer-content {
    display: grid;
    grid-template-columns: 1.2fr 1fr 1fr 1.3fr;
    gap: 35px;
  }
  
  /* 品牌区域 */
  .footer-section.brand {
    padding-right: 10px;
  }
  
  .brand-logo {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 20px;
  }
  
  .logo-icon {
    font-size: 32px;
  }
  
  .brand-logo h3 {
    font-size: 22px;
    color: var(--primary);
    margin: 0;
    font-weight: 700;
  }
  
  .brand-desc {
    color: #94a3b8;
    font-size: 14px;
    line-height: 1.6;
    margin-bottom: 8px;
  }
  
  .social-links {
    display: flex;
    gap: 12px;
    margin-top: 20px;
  }
  
  .social-btn {
    width: 38px;
    height: 38px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    transition: all 0.3s ease;
  }
  
  .social-btn:hover {
    background: var(--primary);
    transform: translateY(-3px);
  }
  
  /* 通用 section 样式 */
  .footer-section h4 {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 16px;
    color: #fff;
    margin-bottom: 20px;
    padding-bottom: 12px;
    border-bottom: 2px solid rgba(16, 185, 129, 0.3);
    font-weight: 600;
  }
  
  .section-icon {
    font-size: 18px;
  }
  
  .footer-section ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  .footer-section ul li {
    margin-bottom: 10px;
  }
  
  .footer-section ul li a {
    color: #94a3b8;
    font-size: 14px;
    text-decoration: none;
    transition: all 0.3s ease;
    display: inline-flex;
    align-items: center;
  }
  
  .footer-section ul li a::before {
    content: '›';
    margin-right: 8px;
    color: var(--primary);
    font-weight: bold;
    opacity: 0;
    transform: translateX(-5px);
    transition: all 0.3s ease;
  }
  
  .footer-section ul li a:hover {
    color: var(--primary);
    padding-left: 5px;
  }
  
  .footer-section ul li a:hover::before {
    opacity: 1;
    transform: translateX(0);
  }
  
  /* 联系我们 */
  .contact-item {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    margin-bottom: 15px;
  }
  
  .contact-icon {
    font-size: 16px;
    margin-top: 2px;
  }
  
  .contact-item div {
    display: flex;
    flex-direction: column;
  }
  
  .contact-label {
    font-size: 12px;
    color: #64748b;
    margin-bottom: 2px;
  }
  
  .contact-value {
    font-size: 14px;
    color: #e2e8f0;
  }
  
  /* 底部版权 */
  .footer-bottom {
    margin-top: 50px;
    padding-top: 25px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    text-align: center;
    position: relative;
  }
  
  .footer-logo-small {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    margin-bottom: 15px;
    font-size: 18px;
    color: var(--primary);
    font-weight: 600;
  }
  
  .footer-bottom p {
    color: #64748b;
    font-size: 13px;
    margin-bottom: 5px;
  }
  
  .footer-credit {
    color: #475569;
    font-size: 12px;
  }
  
  /* 响应式 */
  @media (max-width: 1100px) {
    .footer-content {
      grid-template-columns: repeat(3, 1fr);
      gap: 25px;
    }
    
    .footer-section.brand {
      grid-column: span 3;
      text-align: center;
      padding-right: 0;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      padding-bottom: 25px;
      margin-bottom: 10px;
    }
    
    .social-links {
      justify-content: center;
    }
  }

  @media (max-width: 768px) {
    .footer-content {
      grid-template-columns: repeat(2, 1fr);
    }
    
    .footer-section.brand {
      grid-column: span 2;
    }
    
    .footer-section.contact {
      grid-column: span 2;
    }
  }

  @media (max-width: 500px) {
    .footer-content {
      grid-template-columns: 1fr;
    }
    
    .footer-section.brand,
    .footer-section.contact {
      grid-column: span 1;
    }
    
    .footer {
      padding: 40px 15px 20px;
    }
  }

</style>
