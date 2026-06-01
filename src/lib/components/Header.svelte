<script>
  import { page } from '$app/stores';
  import { locale, toggleLocale, t } from '$lib/i18n/index.js';
  
  let mobileMenuOpen = $state(false);
  
  const navItems = [
    { path: '/', labelKey: 'nav.home' },
    { path: '/carbon', labelKey: 'nav.carbon' },
    { path: '/project', labelKey: 'nav.project' },
    { path: '/calculator', labelKey: 'nav.calculator' },
    { path: '/international', labelKey: 'nav.international' },
    { path: '/about', labelKey: 'nav.about' }
  ];
  
  function toggleMobileMenu() {
    mobileMenuOpen = !mobileMenuOpen;
    if (mobileMenuOpen) {
      document.body.classList.add('mobile-menu-open');
    } else {
      document.body.classList.remove('mobile-menu-open');
    }
  }

  function closeMobileMenu() {
    mobileMenuOpen = false;
    document.body.classList.remove('mobile-menu-open');
  }

</script>

<nav class="header">
  <div class="header-container">
    <a href="/" class="logo" onclick={closeMobileMenu}>
      <div class="logo-icon">🌿</div>
      <div class="logo-text">
        <h1>{$t('header.brandName')}</h1>
        <p>{$t('header.brandDesc')}</p>
      </div>
    </a>
    
    <ul class="nav-menu">
      {#each navItems as item}
        <li>
          <a 
            href={item.path} 
            class:active={$page.url.pathname === item.path}
          >
            {$t(item.labelKey)}
          </a>
        </li>
      {/each}
    </ul>
    
    <div class="header-actions">
      <button class="lang-btn" onclick={toggleLocale}>
        {$locale === 'zh' ? 'EN' : '中文'}
      </button>
      
      <button class="contact-btn" data-modal-trigger="contact">
        {$t('common.contactHotline')}
      </button>
    </div>
    
    <button class="hamburger" onclick={toggleMobileMenu} aria-label="菜单">
      <span></span>
      <span></span>
      <span></span>
    </button>
  </div>
  
  <!-- 移动端菜单 -->
  {#if mobileMenuOpen}
    <div class="mobile-menu" onclick={closeMobileMenu}>
      <div class="mobile-menu-content" onclick={(e) => e.stopPropagation()}>
        <div class="mobile-menu-header">
          <div class="mobile-menu-logo">
            <span>🌿</span>
            <span>{$t('header.brandName')}</span>
          </div>
          <button class="mobile-menu-close" onclick={closeMobileMenu}>✕</button>
        </div>
        <ul class="mobile-menu-list">
          {#each navItems as item}
            <li>
              <a 
                href={item.path} 
                class:active={$page.url.pathname === item.path}
                onclick={closeMobileMenu}
              >
                <span class="menu-icon">{$page.url.pathname === item.path ? '🏠' : '📄'}</span>
                {$t(item.labelKey)}
              </a>
            </li>
          {/each}
        </ul>
        <div class="mobile-menu-footer">
          <!-- 语言切换 -->
          <div class="mobile-lang-switch">
            <span class="lang-label">🌐 {$t('header.language')}</span>
            <button 
              class="lang-toggle" 
              onclick={toggleLocale}
            >
              {$locale === 'zh' ? '中文 ✓' : 'EN ✓'}
            </button>
          </div>
          <button class="contact-btn-mobile" data-modal-trigger="contact" data-close-menu="true">
            📞 {$t('common.consultNow')}
          </button>
        </div>
      </div>
    </div>
  {/if}
</nav>

<style>
  .header {
    background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
    position: sticky;
    top: 0;
    z-index: 100;
    box-shadow: 0 2px 10px rgba(16, 185, 129, 0.3);
  }
  
  .header-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 15px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 15px;
  }
  
  .logo {
    display: flex;
    align-items: center;
    gap: 12px;
    color: #fff;
    flex-shrink: 0;
  }
  
  .logo-icon {
    width: 45px;
    height: 45px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
  }
  
  .logo-text h1 {
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 2px;
    white-space: nowrap;
  }
  
  .logo-text p {
    font-size: 11px;
    opacity: 0.8;
    white-space: nowrap;
  }
  
  .header-actions {
    display: flex;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;
  }
  
  .nav-menu {
    display: flex;
    list-style: none;
    gap: 5px;
    flex-shrink: 0;
  }
  
  .nav-menu a {
    color: #fff;
    font-size: 15px;
    padding: 10px 16px;
    border-radius: 6px;
    display: block;
    transition: all 0.3s ease;
  }
  
  .nav-menu a:hover,
  .nav-menu a.active {
    background-color: rgba(255, 255, 255, 0.2);
  }
  
  .contact-btn {
    background-color: #fff;
    color: var(--primary);
    border: none;
    padding: 10px 20px;
    font-size: 14px;
    font-weight: 600;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  
  .contact-btn:hover {
    background-color: #f0fdf4;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
  
  .lang-btn {
    background-color: rgba(255, 255, 255, 0.2);
    color: #fff;
    border: 1px solid rgba(255, 255, 255, 0.5);
    padding: 8px 14px;
    font-size: 14px;
    font-weight: 600;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  
  .lang-btn:hover {
    background-color: rgba(255, 255, 255, 0.3);
    border-color: #fff;
  }
  
  .hamburger {
    display: none;
    flex-direction: column;
    justify-content: space-between;
    width: 28px;
    height: 20px;
    background: transparent;
    border: none;
    cursor: pointer;
    z-index: 1001;
    padding: 0;
  }

  .hamburger span {
    display: block;
    width: 100%;
    height: 2.5px;
    background: #fff;
    border-radius: 2px;
    transition: all 0.3s ease;
  }

  .hamburger:hover span {
    background: rgba(255, 255, 255, 0.8);
  }

  .mobile-menu {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(4px);
    z-index: 1000;
    animation: fadeIn 0.2s ease;
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @keyframes slideIn {
    from { transform: translateX(100%); }
    to { transform: translateX(0); }
  }
  
  .mobile-menu-content {
    position: absolute;
    top: 0;
    right: 0;
    width: 300px;
    max-width: 85vw;
    height: 100%;
    background: linear-gradient(180deg, #047857 0%, var(--primary) 100%);
    padding: 20px;
    animation: slideIn 0.3s ease;
  }
  
  .mobile-menu-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 20px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    margin-bottom: 15px;
  }

  .mobile-menu-logo {
    display: flex;
    align-items: center;
    gap: 10px;
    color: #fff;
    font-size: 18px;
    font-weight: 600;
  }

  .mobile-menu-logo span:first-child {
    font-size: 26px;
  }

  .mobile-menu-close {
    width: 36px;
    height: 36px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    border: none;
    color: #fff;
    font-size: 18px;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .mobile-menu-close:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: rotate(90deg);
  }
  
  .mobile-menu-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .mobile-menu-list li {
    border-bottom: 1px solid rgba(255, 255, 255, 0.12);
  }

  .mobile-menu-list li:first-child {
    border-top: 1px solid rgba(255, 255, 255, 0.12);
  }

  .mobile-menu-list a {
    display: flex;
    align-items: center;
    gap: 14px;
    padding: 16px 10px;
    color: #fff;
    font-size: 16px;
    transition: all 0.2s ease;
  }

  .mobile-menu-list a:hover {
    background: rgba(255, 255, 255, 0.1);
    padding-left: 15px;
  }

  .mobile-menu-list a.active {
    background: rgba(255, 255, 255, 0.15);
    border-left: 3px solid #fff;
    padding-left: 7px;
  }

  .menu-icon {
    font-size: 20px;
    width: 24px;
    text-align: center;
  }

  .mobile-menu-footer {
    position: absolute;
    bottom: 20px;
    left: 20px;
    right: 20px;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .mobile-lang-switch {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 14px 16px;
    background: rgba(255, 255, 255, 0.15);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.2);
  }

  .lang-label {
    color: #fff;
    font-size: 15px;
  }

  .lang-toggle {
    padding: 8px 16px;
    background: #fff;
    color: var(--primary);
    border: none;
    border-radius: 20px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .lang-toggle:hover {
    transform: scale(1.05);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  }

  .contact-btn-mobile {
    width: 100%;
    padding: 16px;
    background: #fff;
    color: var(--primary);
    border: none;
    border-radius: 10px;
    font-size: 17px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .contact-btn-mobile:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    .nav-menu,
    .contact-btn,
    .lang-btn {
      display: none;
    }
    
    .hamburger {
      display: flex;
    }
    
    .logo-text h1 {
      font-size: 20px;
    }
    
    .logo-text p {
      display: none;
    }
  }
</style>
