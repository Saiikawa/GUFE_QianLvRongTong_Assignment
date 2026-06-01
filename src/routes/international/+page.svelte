<script>
  import { t } from '$lib/i18n/index.js';
</script>

<svelte:head>
  <title>{$t('internationalPage.title')} - 黔绿融通</title>
</svelte:head>

<div class="container">
  <div class="page-title">
    <h1>🌍 {$t('internationalPage.title')}</h1>
    <p>{$t('internationalPage.subtitle')}</p>
  </div>
  
  <div class="framework-content">
    <!-- 项目标题 -->
    <div class="section-card project-header">
      <div class="project-badge">Project Title</div>
      <h2>Qianlv Rongtong (Green Finance Platform)</h2>
      <div class="team-info">
        <span class="team-badge">Team Name:</span>
        <span>Financial 1Group 1</span>
      </div>
    </div>
    
    <!-- 1. Selected Framework -->
    <div class="section-card framework-section">
      <div class="section-number">01</div>
      <h2>Selected Framework</h2>
      <div class="framework-name">
        <span class="framework-tag">PRB</span>
        <span class="framework-full">Principles for Responsible Banking</span>
      </div>
      
      <div class="framework-desc">
        <h3>What is this framework about?</h3>
        <p>Launched by UNEP FI in September 2019, PRB is a global sustainable banking framework with six core principles requiring banks to embed sustainability into strategy, portfolio decisions, and risk management, aligned with the Paris Agreement and UN SDGs. It emphasizes transparency, accountability, and target-setting.</p>
      </div>
    </div>
    
    <!-- 2. Why It Fits -->
    <div class="section-card">
      <div class="section-number">02</div>
      <h2>Why It Fits Our Project</h2>
      <p class="intro-text">Our project addresses information asymmetry and high compliance costs in green financing for SMEs in Guizhou Province. Local manufacturing SMEs struggle to access green credit due to fragmented environmental data and banks' reluctance to conduct costly due diligence on small borrowers.</p>
      
      <div class="principles-grid">
        <div class="principle-card">
          <div class="principle-icon">🎯</div>
          <h4>Principle 2</h4>
          <p>Impact and Target Setting</p>
          <span class="principle-desc">Guide banks to assess and disclose environmental impacts of their portfolios</span>
        </div>
        <div class="principle-card">
          <div class="principle-icon">📊</div>
          <h4>Principle 4</h4>
          <p>Transparency and Accountability</p>
          <span class="principle-desc">Require transparent reporting in lending decisions</span>
        </div>
      </div>
      
      <div class="connection-box">
        <h4>🔗 Connection to Our Platform</h4>
        <p>Our platform operationalizes these principles by providing standardized, technology-enabled verification that helps banks evaluate green projects efficiently. The "Green Credit Compliance Verification Module" is most closely connected to PRB's demand for robust environmental risk assessment and transparent reporting in lending decisions.</p>
      </div>
    </div>
    
    <!-- 3. Overseas Practice -->
    <div class="section-card">
      <div class="section-number">03</div>
      <h2>Overseas Practice / International Case</h2>
      
      <div class="case-card">
        <div class="case-header">
          <span class="case-tag">Case Study</span>
          <h3>Prototype Hong Kong Green Fintech Map (2024)</h3>
        </div>
        
        <div class="case-body">
          <p><strong>Launched on 1 March 2024</strong> by the Green and Sustainable Finance Cross-Agency Steering Group (co-chaired by HKMA and SFC), the Prototype Hong Kong Green Fintech Map is a centralized directory of <strong>50+ green fintech firms</strong> offering solutions across five categories:</p>
          
          <div class="categories-grid">
            <div class="category-item">📈 ESG Data</div>
            <div class="category-item">📋 Disclosure</div>
            <div class="category-item">🌡️ Climate Risk</div>
            <div class="category-item">💚 Green Finance</div>
            <div class="category-item">🌲 Carbon Trading</div>
          </div>
        </div>
      </div>
      
      <div class="lessons-section">
        <h4>📚 Lessons Learned from Hong Kong Model</h4>
        <div class="lessons-grid">
          <div class="lesson-card">
            <div class="lesson-number">1</div>
            <div class="lesson-content">
              <h5>Government-backed Directory</h5>
              <p>A centralized directory reduces search costs for banks, inspiring our unified green project database</p>
            </div>
          </div>
          <div class="lesson-card">
            <div class="lesson-number">2</div>
            <div class="lesson-content">
              <h5>Five-category Classification</h5>
              <p>The classification provides a reference for structuring our platform's modules</p>
            </div>
          </div>
          <div class="lesson-card">
            <div class="lesson-number">3</div>
            <div class="lesson-content">
              <h5>Multi-stakeholder Model</h5>
              <p>Collaboration between regulators, technology parks, and investment agencies demonstrates ecosystem-building approaches we replicate with local partners in Guizhou</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- 4. Local Solution -->
    <div class="section-card">
      <div class="section-number">04</div>
      <h2>Local Solution</h2>
      <p class="intro-text">Our project adapts the Hong Kong model to Guizhou through three localization strategies:</p>
      
      <div class="strategies-tabs">
        <div class="strategy-tab">
          <div class="tab-header">
            <span class="tab-icon">✅</span>
            <h4>Directly Borrowed</h4>
          </div>
          <ul class="tab-list">
            <li>A centralized directory connecting providers with financial institutions</li>
            <li>A multi-stakeholder governance model</li>
            <li>A five-category classification framework (ESG data, disclosure, climate risk, green finance, carbon analytics)</li>
          </ul>
        </div>
        
        <div class="strategy-tab">
          <div class="tab-header">
            <span class="tab-icon">🔄</span>
            <h4>Local Adjustments</h4>
          </div>
          <ul class="tab-list">
            <li>Targeting SMEs with simplified templates instead of advanced AI/blockchain solutions</li>
            <li>Aligning with China's Green Industry Guidance Catalogue and Guizhou's credit policies instead of ISSB standards</li>
            <li>Verifying environmental penalty records and energy data authenticity for unlisted SMEs</li>
          </ul>
        </div>
        
        <div class="strategy-tab highlight">
          <div class="tab-header">
            <span class="tab-icon">🛠️</span>
            <h4>Project Design Innovations</h4>
          </div>
          <ul class="tab-list">
            <li>Refining national standards into Guizhou-specific criteria aligned with <strong>ICBC Green Manufacturing Loan</strong> and <strong>Bank of Guiyang Green Easy Loan</strong></li>
            <li>Developing ready-to-use templates for fragmented SME data</li>
            <li>Establishing compliance checklists with result-sharing to reduce bank audit costs by over <strong>30%</strong></li>
            <li>Replicating Hong Kong's multi-stakeholder model with local regulators, industrial associations, and SME service centers</li>
          </ul>
        </div>
      </div>
    </div>
    
    <!-- Source of Overseas Case -->
    <div class="section-card source-section">
      <div class="section-number">05</div>
      <h2>Source of Overseas Case</h2>
      <div class="source-list">
        <div class="source-item">
          <span class="source-label">Organization:</span>
          <span class="source-value">Hong Kong Fintech</span>
        </div>
        <div class="source-item">
          <span class="source-label">Title:</span>
          <span class="source-value">Green Fintech Map launch showcases Hong Kong's edge</span>
        </div>
        <div class="source-item">
          <span class="source-label">Source:</span>
          <span class="source-value">Hong Kong Fintech Hub</span>
        </div>
        <div class="source-item">
          <span class="source-label">Date:</span>
          <span class="source-value">2026-04-22</span>
        </div>
        <a href="https://www.hongkong-fintech.hk/en/insights/news/news-2024/green-fintech-map-launch-showcases-hong-kong-s-edge-in-sustainable-finance/index.html" target="_blank" class="source-link">
          🔗 View Source Page
        </a>
      </div>
    </div>
  </div>
</div>

<style>
  .container {
    max-width: 1000px;
    margin: 0 auto;
    padding: 0 20px 60px;
  }
  
  .page-title {
    text-align: center;
    margin: 40px 0 35px;
  }
  
  .page-title h1 {
    color: var(--text-primary);
    font-size: 32px;
    font-weight: 600;
    margin-bottom: 10px;
  }
  
  .page-title p {
    color: var(--text-secondary);
    font-size: 18px;
    font-style: italic;
  }
  
  .framework-content {
    display: flex;
    flex-direction: column;
    gap: 25px;
  }
  
  .section-card {
    background: #fff;
    border-radius: 16px;
    padding: 30px;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.05);
    position: relative;
  }
  
  .section-number {
    position: absolute;
    top: 20px;
    right: 25px;
    font-size: 48px;
    font-weight: 700;
    color: #e5e7eb;
    line-height: 1;
  }
  
  .section-card h2 {
    color: var(--primary);
    font-size: 22px;
    margin-bottom: 20px;
    padding-bottom: 15px;
    border-bottom: 2px solid #f0fdf4;
  }
  
  /* Project Header */
  .project-header {
    background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
    color: #fff;
    text-align: center;
  }
  
  .project-header h2 {
    color: #fff;
    font-size: 26px;
    border: none;
    margin-bottom: 15px;
  }
  
  .team-info {
    font-size: 16px;
    opacity: 0.9;
  }
  
  .team-badge {
    font-weight: 600;
  }
  
  /* Framework Section */
  .framework-name {
    display: flex;
    align-items: center;
    gap: 15px;
    margin-bottom: 25px;
  }
  
  .framework-tag {
    background: var(--primary);
    color: #fff;
    padding: 8px 20px;
    border-radius: 20px;
    font-weight: 700;
    font-size: 18px;
  }
  
  .framework-full {
    font-size: 18px;
    color: var(--text-primary);
    font-weight: 500;
  }
  
  .framework-desc h3 {
    color: var(--text-primary);
    font-size: 16px;
    margin-bottom: 10px;
  }
  
  .framework-desc p {
    color: var(--text-secondary);
    line-height: 1.8;
    font-size: 15px;
  }
  
  /* Why It Fits */
  .intro-text {
    color: var(--text-secondary);
    line-height: 1.8;
    margin-bottom: 25px;
    font-size: 15px;
  }
  
  .principles-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    margin-bottom: 25px;
  }
  
  .principle-card {
    background: #f9fafb;
    border-radius: 12px;
    padding: 20px;
    text-align: center;
  }
  
  .principle-icon {
    font-size: 36px;
    margin-bottom: 10px;
  }
  
  .principle-card h4 {
    color: var(--primary);
    font-size: 16px;
    margin-bottom: 5px;
  }
  
  .principle-card p {
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 8px;
  }
  
  .principle-desc {
    color: var(--text-secondary);
    font-size: 13px;
  }
  
  .connection-box {
    background: #ecfdf5;
    border-radius: 12px;
    padding: 20px;
    border-left: 4px solid var(--primary);
  }
  
  .connection-box h4 {
    color: var(--primary);
    margin-bottom: 10px;
  }
  
  .connection-box p {
    color: var(--text-secondary);
    line-height: 1.7;
    font-size: 14px;
  }
  
  /* Case Study */
  .case-card {
    background: #f9fafb;
    border-radius: 12px;
    padding: 25px;
    margin-bottom: 25px;
  }
  
  .case-header {
    margin-bottom: 15px;
  }
  
  .case-tag {
    background: var(--primary);
    color: #fff;
    padding: 4px 12px;
    border-radius: 4px;
    font-size: 12px;
    font-weight: 600;
  }
  
  .case-header h3 {
    color: var(--text-primary);
    font-size: 18px;
    margin-top: 10px;
    border: none;
    padding: 0;
  }
  
  .case-body p {
    color: var(--text-secondary);
    line-height: 1.7;
    font-size: 14px;
    margin-bottom: 15px;
  }
  
  .categories-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }
  
  .category-item {
    background: #fff;
    padding: 8px 16px;
    border-radius: 20px;
    font-size: 13px;
    color: var(--text-primary);
    border: 1px solid #e5e7eb;
  }
  
  .lessons-section h4 {
    color: var(--text-primary);
    font-size: 16px;
    margin-bottom: 15px;
  }
  
  .lessons-grid {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  
  .lesson-card {
    display: flex;
    gap: 15px;
    align-items: flex-start;
  }
  
  .lesson-number {
    width: 32px;
    height: 32px;
    min-width: 32px;
    background: var(--primary);
    color: #fff;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: 14px;
  }
  
  .lesson-content h5 {
    color: var(--text-primary);
    font-size: 15px;
    margin-bottom: 5px;
  }
  
  .lesson-content p {
    color: var(--text-secondary);
    font-size: 14px;
    line-height: 1.6;
  }
  
  /* Strategies */
  .strategies-tabs {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  
  .strategy-tab {
    background: #f9fafb;
    border-radius: 12px;
    padding: 20px;
  }
  
  .strategy-tab.highlight {
    background: #ecfdf5;
    border: 2px solid var(--primary);
  }
  
  .tab-header {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 15px;
  }
  
  .tab-icon {
    font-size: 24px;
  }
  
  .tab-header h4 {
    color: var(--text-primary);
    font-size: 16px;
  }
  
  .tab-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  .tab-list li {
    color: var(--text-secondary);
    font-size: 14px;
    padding: 8px 0;
    padding-left: 20px;
    position: relative;
    line-height: 1.6;
  }
  
  .tab-list li::before {
    content: '•';
    position: absolute;
    left: 5px;
    color: var(--primary);
    font-weight: bold;
  }

  /* Source Section */
  .source-section {
    background: linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(5, 150, 105, 0.05) 100%);
    border: 1px solid rgba(16, 185, 129, 0.2);
  }

  .source-list {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .source-item {
    display: flex;
    gap: 12px;
    font-size: 14px;
    align-items: flex-start;
  }

  .source-label {
    color: #64748b;
    min-width: 85px;
    font-weight: 500;
  }

  .source-value {
    color: var(--text-secondary);
    word-break: break-word;
  }

  .source-link {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    margin-top: 15px;
    padding: 10px 18px;
    background: var(--primary);
    color: #fff;
    border-radius: 8px;
    font-size: 14px;
    text-decoration: none;
    transition: all 0.3s ease;
    font-weight: 500;
  }

  .source-link:hover {
    background: var(--primary-dark);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);
  }

  @media (max-width: 768px) {
    .page-title h1 {
      font-size: 26px;
    }
    
    .principles-grid {
      grid-template-columns: 1fr;
    }
    
    .section-number {
      font-size: 36px;
    }
  }
</style>
