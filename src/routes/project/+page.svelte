<script>
  import { t } from '$lib/i18n/index.js';
</script>

<svelte:head>
  <title>{$t('projectPage.title')} - 黔绿融通</title>
</svelte:head>

<div class="container">
  <div class="page-title">
    <h1>📋 {$t('projectPage.title')}</h1>
    <p>{$t('projectPage.subtitle')}</p>
  </div>

  <!-- 绿色贷款和测评入口 -->
  <div class="loan-access-section">
    <a href="/products" class="loan-access-card">
      <div class="loan-access-icon">💰</div>
      <div class="loan-access-content">
        <h3>{$t('projectPage.greenLoan')}</h3>
        <p>{$t('projectPage.greenLoanDesc')}</p>
      </div>
      <div class="loan-access-arrow">→</div>
    </a>
    <a href="/calculator" class="loan-access-card loan-card-highlight">
      <div class="loan-access-icon">📝</div>
      <div class="loan-access-content">
        <h3>{$t('projectPage.greenLoanAssessment')}</h3>
        <p>{$t('projectPage.greenLoanAssessmentDesc')}</p>
      </div>
      <div class="loan-access-arrow">→</div>
    </a>
  </div>

  <!-- 项目申报服务 -->
  <div class="services-section">
    <h2>🌱 {$t('projectPage.ourServices')}</h2>
    <div class="services-grid">
      <div class="service-card">
        <div class="service-icon">🔍</div>
        <h3>{$t('projectPage.projectDiagnosis')}</h3>
        <p>{$t('projectPage.projectDiagnosisDesc')}</p>
      </div>
      <div class="service-card">
        <div class="service-icon">📋</div>
        <h3>{$t('projectPage.materialsStandardization')}</h3>
        <p>{$t('projectPage.materialsStandardizationDesc')}</p>
      </div>
      <div class="service-card">
        <div class="service-icon">✓</div>
        <h3>{$t('projectPage.materialsVerification')}</h3>
        <p>{$t('projectPage.materialsVerificationDesc')}</p>
      </div>
      <div class="service-card">
        <div class="service-icon">🏦</div>
        <h3>{$t('projectPage.bankMatching')}</h3>
        <p>{$t('projectPage.bankMatchingDesc')}</p>
      </div>
    </div>
  </div>

  <!-- 申报流程 -->
  <div class="process-section">
    <h2>📌 {$t('projectPage.declarationProcess')}</h2>
    <div class="process-steps">
      <div class="process-step">
        <div class="step-number">1</div>
        <div class="step-content">
          <h4>{$t('projectPage.projectDiagnosisStep')}</h4>
          <p>{$t('projectPage.projectDiagnosisStepDesc')}</p>
        </div>
      </div>
      <div class="process-step">
        <div class="step-number">2</div>
        <div class="step-content">
          <h4>{$t('projectPage.materialsPrepStep')}</h4>
          <p>{$t('projectPage.materialsPrepStepDesc')}</p>
        </div>
      </div>
      <div class="process-step">
        <div class="step-number">3</div>
        <div class="step-content">
          <h4>{$t('projectPage.complianceReviewStep')}</h4>
          <p>{$t('projectPage.complianceReviewStepDesc')}</p>
        </div>
      </div>
      <div class="process-step">
        <div class="step-number">4</div>
        <div class="step-content">
          <h4>{$t('projectPage.bankConnectionStep')}</h4>
          <p>{$t('projectPage.bankConnectionStepDesc')}</p>
        </div>
      </div>
    </div>
  </div>

  <!-- 常见问题 -->
  <div class="faq-section">
    <h2>❓ {$t('projectPage.faq')}</h2>
    <div class="faq-list">
      <div class="faq-item">
        <h4>{$t('projectPage.faq1Q')}</h4>
        <p>{$t('projectPage.faq1A')}</p>
      </div>
      <div class="faq-item">
        <h4>{$t('projectPage.faq2Q')}</h4>
        <p>{$t('projectPage.faq2A')}</p>
      </div>
      <div class="faq-item">
        <h4>{$t('projectPage.faq3Q')}</h4>
        <p>{$t('projectPage.faq3A')}</p>
      </div>
      <div class="faq-item">
        <h4>{$t('projectPage.faq4Q')}</h4>
        <p>{$t('projectPage.faq4A')}</p>
      </div>
    </div>
  </div>

  <!-- 咨询入口 -->
  <div class="consult-section">
    <div class="consult-content">
      <h3>💬 {$t('projectPage.otherQuestions')}</h3>
      <p>{$t('projectPage.otherQuestionsDesc')}</p>
      <button class="consult-btn" data-modal-trigger="contact">
        {$t('common.consultNow')}
      </button>
    </div>
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

  /* 贷款入口卡片 */
  .loan-access-section {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    margin-bottom: 50px;
  }

  .loan-access-card {
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 30px;
    background: #fff;
    border-radius: 16px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    text-decoration: none;
    color: inherit;
    transition: all 0.3s ease;
    border: 2px solid transparent;
  }

  .loan-access-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px rgba(16, 185, 129, 0.15);
    border-color: var(--primary);
  }

  .loan-card-highlight {
    background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
    color: #fff;
  }

  .loan-card-highlight:hover {
    border-color: var(--primary-dark);
  }

  .loan-access-icon {
    font-size: 48px;
    width: 80px;
    height: 80px;
    background: #f0fdf4;
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .loan-card-highlight .loan-access-icon {
    background: rgba(255, 255, 255, 0.2);
  }

  .loan-access-content {
    flex: 1;
  }

  .loan-access-content h3 {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 8px;
    color: var(--text-primary);
  }

  .loan-card-highlight .loan-access-content h3 {
    color: #fff;
  }

  .loan-access-content p {
    font-size: 14px;
    color: var(--text-secondary);
    line-height: 1.5;
  }

  .loan-card-highlight .loan-access-content p {
    color: rgba(255, 255, 255, 0.9);
  }

  .loan-access-arrow {
    font-size: 24px;
    color: var(--primary);
    font-weight: bold;
    transition: transform 0.3s ease;
  }

  .loan-access-card:hover .loan-access-arrow {
    transform: translateX(5px);
  }

  .loan-card-highlight .loan-access-arrow {
    color: #fff;
  }

  /* 服务区域 */
  .services-section {
    margin-bottom: 50px;
  }

  .services-section h2 {
    text-align: center;
    color: var(--text-primary);
    font-size: 22px;
    font-weight: 600;
    margin-bottom: 30px;
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

  /* 流程区域 */
  .process-section {
    margin-bottom: 50px;
  }

  .process-section h2 {
    text-align: center;
    color: var(--text-primary);
    font-size: 22px;
    font-weight: 600;
    margin-bottom: 30px;
  }

  .process-steps {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
  }

  .process-step {
    background: #fff;
    padding: 25px;
    border-radius: 12px;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.05);
    position: relative;
  }

  .process-step:not(:last-child)::after {
    content: '→';
    position: absolute;
    right: -18px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 20px;
    color: var(--primary);
    font-weight: bold;
    z-index: 1;
  }

  .step-number {
    width: 40px;
    height: 40px;
    background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
    color: #fff;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 15px;
  }

  .step-content h4 {
    color: var(--text-primary);
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 8px;
  }

  .step-content p {
    color: var(--text-secondary);
    font-size: 13px;
    line-height: 1.5;
  }

  /* 常见问题 */
  .faq-section {
    margin-bottom: 50px;
  }

  .faq-section h2 {
    text-align: center;
    color: var(--text-primary);
    font-size: 22px;
    font-weight: 600;
    margin-bottom: 30px;
  }

  .faq-list {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  .faq-item {
    background: #fff;
    padding: 25px;
    border-radius: 12px;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.05);
  }

  .faq-item h4 {
    color: var(--text-primary);
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 10px;
  }

  .faq-item p {
    color: var(--text-secondary);
    font-size: 14px;
    line-height: 1.6;
  }

  /* 咨询区域 */
  .consult-section {
    background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
    border-radius: 16px;
    padding: 40px;
    text-align: center;
    color: #fff;
  }

  .consult-section h3 {
    font-size: 22px;
    font-weight: 600;
    margin-bottom: 10px;
  }

  .consult-section p {
    font-size: 15px;
    opacity: 0.9;
    margin-bottom: 25px;
  }

  .consult-btn {
    padding: 14px 40px;
    background: #fff;
    color: var(--primary);
    border: none;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .consult-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  }

  /* 响应式 */
  @media (max-width: 1100px) {
    .services-grid {
      grid-template-columns: repeat(2, 1fr);
    }

    .process-steps {
      grid-template-columns: repeat(2, 1fr);
    }

    .process-step:nth-child(2)::after {
      display: none;
    }

    .process-step:nth-child(3)::after {
      display: none;
    }

    .process-step:nth-child(4)::after {
      display: none;
    }
  }

  @media (max-width: 768px) {
    .loan-access-section {
      grid-template-columns: 1fr;
    }

    .services-grid {
      grid-template-columns: 1fr;
    }

    .process-steps {
      grid-template-columns: 1fr;
    }

    .process-step::after {
      display: none !important;
    }

    .process-step {
      display: flex;
      gap: 15px;
      align-items: flex-start;
    }

    .step-number {
      margin-bottom: 0;
      flex-shrink: 0;
    }

    .step-content {
      flex: 1;
    }
  }
</style>
