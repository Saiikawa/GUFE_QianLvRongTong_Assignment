<script>
  import { t } from '$lib/i18n/index.js';
  
  const services = [
    { icon: '📋', titleKey: 'about.services.projectDeclare', descKey: 'about.services.projectDeclareDesc' },
    { icon: '💰', titleKey: 'about.services.loanService', descKey: 'about.services.loanServiceDesc' },
    { icon: '🌿', titleKey: 'about.services.carbonService', descKey: 'about.services.carbonServiceDesc' },
    { icon: '📊', titleKey: 'about.services.esgService', descKey: 'about.services.esgServiceDesc' },
    { icon: '🏢', titleKey: 'about.services.greenEnterprise', descKey: 'about.services.greenEnterpriseDesc' },
    { icon: '🌍', titleKey: 'about.services.envDisclosure', descKey: 'about.services.envDisclosureDesc' }
  ];
  
  const esgServices = [
    {
      icon: '🔍',
      titleKey: 'about.esg.report',
      descKey: 'about.esg.reportDesc'
    },
    {
      icon: '📈',
      titleKey: 'about.esg.consulting',
      descKey: 'about.esg.consultingDesc'
    },
    {
      icon: '⭐',
      titleKey: 'about.esg.rating',
      descKey: 'about.esg.ratingDesc'
    },
    {
      icon: '📋',
      titleKey: 'about.esg.other',
      descKey: 'about.esg.otherDesc'
    }
  ];
</script>

<svelte:head>
  <title>{$t('pageTitles.about')}</title>
</svelte:head>

<div class="container">
  <div class="about-content">
    <div class="about-header">
      <h1>黔绿融通</h1>
      <p>{$t('aboutPage.companyDesc1').split('。')[0]}</p>
    </div>
    
    <div class="about-card">
      <h2>{$t('aboutPage.companyIntro')}</h2>
      <p>{$t('aboutPage.companyDesc1')}</p>
      <p>{$t('aboutPage.companyDesc2')}</p>
    </div>
    
    <div class="about-card">
      <h2>{$t('aboutPage.mission')}</h2>
      <p>{$t('aboutPage.missionDesc')}</p>
    </div>
    
    <div class="about-card">
      <h2>{$t('aboutPage.coreServices')}</h2>
      <div class="core-services-grid">
        {#each services as service}
          <div class="core-service-item">
            <div class="core-service-icon">{service.icon}</div>
            <h3>{$t(service.titleKey)}</h3>
            <p>{$t(service.descKey)}</p>
          </div>
        {/each}
      </div>
    </div>
    
    <div class="about-card">
      <h2>{$t('aboutPage.esgServices')}</h2>
      <div class="esg-services-section">
        {#each esgServices as esgService}
          <div class="esg-service-item">
            <h3>{esgService.icon} {$t(esgService.titleKey)}</h3>
            <p>{$t(esgService.descKey)}</p>
          </div>
        {/each}
      </div>
    </div>
    
    <div class="about-contact">
      <h2>{$t('aboutPage.contactUs')}</h2>
      <div class="contact-info">
        <div class="contact-item">
          <span class="contact-label">{$t('aboutPage.serviceHotline')}</span>
          <span class="contact-value">400-888-8888</span>
        </div>
        <div class="contact-item">
          <span class="contact-label">{$t('aboutPage.email')}</span>
          <span class="contact-value">contact@qianlvtong.com</span>
        </div>
        <div class="contact-item">
          <span class="contact-label">{$t('aboutPage.address')}</span>
          <span class="contact-value">贵州省贵阳市观山湖区金融城</span>
        </div>
        <div class="contact-item">
          <span class="contact-label">{$t('aboutPage.workTime')}</span>
          <span class="contact-value">{$t('aboutPage.workSchedule')}</span>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px 40px;
  }
  
  .about-content {
    max-width: 900px;
    margin: 0 auto;
  }
  
  .about-header {
    text-align: center;
    margin-bottom: 50px;
  }
  
  .about-header h1 {
    color: var(--primary);
    font-size: 42px;
    margin-bottom: 10px;
  }
  
  .about-header p {
    color: var(--text-secondary);
    font-size: 18px;
  }
  
  .about-card {
    background: #fff;
    padding: 35px;
    border-radius: 12px;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.05);
    margin-bottom: 25px;
  }
  
  .about-card h2 {
    color: var(--primary);
    font-size: 20px;
    margin-bottom: 20px;
    padding-bottom: 15px;
    border-bottom: 2px solid #f3f4f6;
  }
  
  .about-card p {
    color: var(--text-primary);
    line-height: 1.8;
    margin-bottom: 15px;
  }
  
  .about-card p:last-child {
    margin-bottom: 0;
  }
  
  .core-services-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }
  
  .core-service-item {
    background: #f9fafb;
    padding: 25px;
    border-radius: 10px;
    text-align: center;
    transition: all 0.3s ease;
  }
  
  .core-service-item:hover {
    background: var(--primary-light);
  }
  
  .core-service-icon {
    font-size: 36px;
    margin-bottom: 15px;
  }
  
  .core-service-item h3 {
    color: var(--text-primary);
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 8px;
  }
  
  .core-service-item p {
    color: var(--text-secondary);
    font-size: 13px;
  }
  
  .esg-services-section {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
  
  .esg-service-item {
    background: #f9fafb;
    padding: 25px;
    border-radius: 10px;
    border-left: 4px solid var(--primary);
    transition: all 0.3s ease;
  }
  
  .esg-service-item:hover {
    background: var(--primary-light);
  }
  
  .esg-service-item h3 {
    color: var(--text-primary);
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 10px;
  }
  
  .esg-service-item p {
    color: var(--text-secondary);
    font-size: 14px;
    line-height: 1.6;
  }
  
  .about-contact {
    background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
    padding: 35px;
    border-radius: 12px;
    color: #fff;
  }
  
  .about-contact h2 {
    color: #fff;
    font-size: 20px;
    margin-bottom: 25px;
  }
  
  .contact-info {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
  
  .contact-item {
    display: flex;
    gap: 10px;
  }
  
  .contact-label {
    color: rgba(255, 255, 255, 0.8);
  }
  
  .contact-value {
    font-weight: 500;
  }
  
  @media (max-width: 900px) {
    .core-services-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  
  @media (max-width: 600px) {
    .about-header h1 {
      font-size: 32px;
    }
    
    .core-services-grid {
      grid-template-columns: 1fr;
    }
    
    .esg-services-section {
      grid-template-columns: 1fr;
    }
    
    .contact-info {
      grid-template-columns: 1fr;
    }
  }
</style>
