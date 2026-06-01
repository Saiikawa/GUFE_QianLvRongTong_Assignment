<script>
  import { onMount } from 'svelte';
  
  let isVisible = $state(false);
  let isSubmitting = $state(false);
  let submitResult = $state(null); // { success, applicationId, message }
  
  // 从测评页传递过来的数据
  let quizData = $state(null);
  
  let formData = $state({
    companyName: '',
    creditCode: '',
    legalPerson: '',
    legalPhone: '',
    contactPerson: '',
    contactPhone: '',
    city: '',
    loanAmount: '',
    loanPurpose: '',
    loanTerm: '',
    guaranteeType: '',
    greenProject: '',
    remark: ''
  });
  
  let errors = $state({});
  
  function openModal(quizResult) {
    quizData = quizResult || null;
    
    // 如果有测评数据，预填表单
    if (quizResult) {
      // 预填城市
      if (quizResult.city === 'guiyang') {
        formData.city = '贵阳市';
      } else if (quizResult.city === 'other') {
        formData.city = ''; // 其他地区需手动选择
      }
      
      // 预填贷款金额（根据测评选项映射到具体数值）
      if (quizResult.loanAmount === 'large') {
        formData.loanAmount = '1000';
      } else if (quizResult.loanAmount === 'medium') {
        formData.loanAmount = '500';
      } else if (quizResult.loanAmount === 'small') {
        formData.loanAmount = '100';
      }
      
      // 预填贷款期限
      if (quizResult.loanTerm === 'long') {
        formData.loanTerm = '36';
      } else if (quizResult.loanTerm === 'medium') {
        formData.loanTerm = '12';
      } else if (quizResult.loanTerm === 'short') {
        formData.loanTerm = '6';
      }
      
      // 预填担保方式
      if (quizResult.guarantee === 'mortgage') {
        formData.guaranteeType = '抵押';
      } else if (quizResult.guarantee === 'pledge') {
        formData.guaranteeType = '质押';
      } else if (quizResult.guarantee === 'credit') {
        formData.guaranteeType = '信用';
      }
      
      // 预填贷款用途/绿色项目类型
      if (quizResult.projectType === 'carbon') {
        formData.loanPurpose = '新能源';
        formData.greenProject = '新能源';
      } else if (quizResult.projectType === 'green') {
        formData.loanPurpose = '节能改造';
        formData.greenProject = '工业节能';
      } else {
        formData.loanPurpose = '其他';
        formData.greenProject = '';
      }
    }
    
    submitResult = null;
    isVisible = true;
    document.body.style.overflow = 'hidden';
  }
  
  function closeModal() {
    isVisible = false;
    document.body.style.overflow = '';
    resetForm();
  }
  
  function resetForm() {
    formData = {
      companyName: '',
      creditCode: '',
      legalPerson: '',
      legalPhone: '',
      contactPerson: '',
      contactPhone: '',
      city: '',
      loanAmount: '',
      loanPurpose: '',
      loanTerm: '',
      guaranteeType: '',
      greenProject: '',
      remark: ''
    };
    errors = {};
    quizData = null;
    submitResult = null;
  }
  
  function validateForm() {
    errors = {};
    
    if (!formData.companyName.trim()) errors.companyName = '请填写企业名称';
    if (!formData.creditCode.trim()) errors.creditCode = '请填写统一社会信用代码';
    if (!formData.legalPerson.trim()) errors.legalPerson = '请填写法定代表人';
    if (!formData.legalPhone.trim()) {
      errors.legalPhone = '请填写法人手机号';
    } else if (!/^1[3-9]\d{9}$/.test(formData.legalPhone)) {
      errors.legalPhone = '手机号格式不正确';
    }
    if (formData.contactPhone && !/^1[3-9]\d{9}$/.test(formData.contactPhone)) {
      errors.contactPhone = '手机号格式不正确';
    }
    if (!formData.city) errors.city = '请选择企业所在地';
    if (!formData.loanAmount) errors.loanAmount = '请填写意向贷款金额';
    if (!formData.loanPurpose) errors.loanPurpose = '请选择贷款用途';
    if (!formData.loanTerm) errors.loanTerm = '请选择贷款期限';
    
    return Object.keys(errors).length === 0;
  }
  
  /**
   * 带超时和重试的 fetch（适配 Cloudflare Workers 冷启动）
   */
  async function fetchWithRetry(url, options, maxRetries = 2) {
    let lastError;
    for (let i = 0; i <= maxRetries; i++) {
      try {
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 30000); // 30秒超时
        const response = await fetch(url, { ...options, signal: controller.signal });
        clearTimeout(timeout);
        if (response.ok || response.status === 400) return response; // 400 是验证错误，不需要重试
        if (response.status >= 500 && i < maxRetries) {
          await new Promise(r => setTimeout(r, 1500 * (i + 1)));
          continue;
        }
        return response;
      } catch (error) {
        lastError = error;
        if (i < maxRetries) {
          await new Promise(r => setTimeout(r, 1500 * (i + 1)));
        }
      }
    }
    throw lastError;
  }

  async function handleSubmit() {
    if (!validateForm()) return;
    
    isSubmitting = true;
    
    try {
      // 构建提交数据，同时包含表单字段和测评数据
      const submitData = {
        // 表单基本信息
        companyName: formData.companyName,
        creditCode: formData.creditCode,
        legalPerson: formData.legalPerson,
        legalPhone: formData.legalPhone,
        contactPerson: formData.contactPerson,
        contactPhone: formData.contactPhone,
        city: formData.city,
        loanAmount: formData.loanAmount,
        loanPurpose: formData.loanPurpose,
        loanTerm: formData.loanTerm,
        guaranteeType: formData.guaranteeType,
        greenProject: formData.greenProject,
        remark: formData.remark,
        
        // 测评结果数据（如果来自测评页面）
        quizAnswers: quizData ? {
          enterpriseType: quizData.enterpriseType || '',
          loanAmountLevel: quizData.loanAmount || '',
          loanTermLevel: quizData.loanTerm || '',
          guarantee: quizData.guarantee || '',
          cityLevel: quizData.city || '',
          projectType: quizData.projectType || ''
        } : null,
        recommendationLevel: quizData?.recommendationLevel || '',
        matchedProducts: quizData?.matchedProducts || [],
        totalScore: quizData?.totalScore || 0
      };
      
      // 带超时和重试的请求（Cloudflare 冷启动可能需要更长时间）
      const response = await fetchWithRetry('/api/apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(submitData)
      }, 3);
      
      const result = await response.json();
      
      if (result.success) {
        submitResult = {
          success: true,
          applicationId: result.data.applicationId,
          message: result.data.estimatedReviewTime
        };
      } else {
        submitResult = {
          success: false,
          message: result.message || '提交失败，请稍后重试'
        };
      }
    } catch (error) {
      console.error('提交申请失败:', error);
      submitResult = {
        success: false,
        message: '网络错误，请检查网络连接后重试'
      };
    } finally {
      isSubmitting = false;
    }
  }
  
  function handleOverlayClick(e) {
    if (e.target === e.currentTarget) closeModal();
  }
  
  onMount(() => {
    document.addEventListener('click', (e) => {
      if (e.target.hasAttribute('data-apply-trigger')) {
        // 尝试从按钮的 dataset 获取测评数据
        const quizResultStr = e.target.dataset.quizResult;
        let quizResult = null;
        try {
          quizResult = quizResultStr ? JSON.parse(quizResultStr) : null;
        } catch { /* ignore */ }
        openModal(quizResult);
      }
    });
  });
</script>

<div class="modal-overlay" class:show={isVisible} onclick={handleOverlayClick} role="dialog" aria-modal="true">
  <div class="modal-content" onclick={(e) => e.stopPropagation()}>
    <button class="modal-close" onclick={closeModal} aria-label="关闭">×</button>
    
    {#if submitResult?.success}
      <!-- 提交成功提示 -->
      <div class="success-container">
        <div class="success-icon">✓</div>
        <h2 class="success-title">申请提交成功！</h2>
        <div class="success-info">
          <p>申请编号：<strong>{submitResult.applicationId}</strong></p>
          <p>预计审核时间：{submitResult.message}</p>
        </div>
        <div class="success-tips">
          <h4>后续步骤：</h4>
          <ul>
            <li>平台将在1-3个工作日内审核您的申请</li>
            <li>审核通过后，专业顾问将与您联系</li>
            <li>如有疑问可拨打服务热线：400-888-8888</li>
          </ul>
        </div>
        <button class="btn btn-submit" onclick={closeModal}>我知道了</button>
      </div>
    {:else}
      <h2 class="modal-title">填写贷款申请表</h2>
      
      {#if submitResult?.success === false}
        <div class="error-banner">
          {submitResult.message}
        </div>
      {/if}
      
      {#if quizData}
        <div class="quiz-hint">
          已根据测评结果为您预填部分信息，请补充完善后提交
        </div>
      {/if}
      
      <form class="apply-form" onsubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
        <div class="form-section">
          <h3 class="section-title">企业基本信息</h3>
          <div class="form-row">
            <div class="form-group">
              <label>企业名称 <span class="required">*</span></label>
              <input type="text" bind:value={formData.companyName} placeholder="请输入企业全称" class:error={errors.companyName} />
              {#if errors.companyName}<span class="error-msg">{errors.companyName}</span>{/if}
            </div>
            <div class="form-group">
              <label>统一社会信用代码 <span class="required">*</span></label>
              <input type="text" bind:value={formData.creditCode} placeholder="18位代码" class:error={errors.creditCode} />
              {#if errors.creditCode}<span class="error-msg">{errors.creditCode}</span>{/if}
            </div>
          </div>
          <div class="form-group full-width">
            <label>企业所在地 <span class="required">*</span></label>
            <select bind:value={formData.city} class:error={errors.city}>
              <option value="">请选择地市</option>
              <option value="贵阳市">贵阳市</option>
              <option value="遵义市">遵义市</option>
              <option value="安顺市">安顺市</option>
              <option value="毕节市">毕节市</option>
              <option value="铜仁市">铜仁市</option>
              <option value="六盘水市">六盘水市</option>
              <option value="黔东南州">黔东南州</option>
              <option value="黔南州">黔南州</option>
              <option value="黔西南州">黔西南州</option>
            </select>
            {#if errors.city}<span class="error-msg">{errors.city}</span>{/if}
          </div>
        </div>
        
        <div class="form-section">
          <h3 class="section-title">联系方式</h3>
          <div class="form-row">
            <div class="form-group">
              <label>法定代表人 <span class="required">*</span></label>
              <input type="text" bind:value={formData.legalPerson} placeholder="请输入法人姓名" class:error={errors.legalPerson} />
              {#if errors.legalPerson}<span class="error-msg">{errors.legalPerson}</span>{/if}
            </div>
            <div class="form-group">
              <label>法人手机号 <span class="required">*</span></label>
              <input type="tel" bind:value={formData.legalPhone} placeholder="请输入手机号码" class:error={errors.legalPhone} />
              {#if errors.legalPhone}<span class="error-msg">{errors.legalPhone}</span>{/if}
            </div>
          </div>
          <div class="form-row">
            <div class="form-group">
              <label>联系人</label>
              <input type="text" bind:value={formData.contactPerson} placeholder="请输入联系人姓名（选填）" />
            </div>
            <div class="form-group">
              <label>联系人手机号</label>
              <input type="tel" bind:value={formData.contactPhone} placeholder="请输入手机号码（选填）" class:error={errors.contactPhone} />
              {#if errors.contactPhone}<span class="error-msg">{errors.contactPhone}</span>{/if}
            </div>
          </div>
        </div>
        
        <div class="form-section">
          <h3 class="section-title">贷款需求</h3>
          <div class="form-row">
            <div class="form-group">
              <label>意向贷款金额(万元) <span class="required">*</span></label>
              <input type="number" bind:value={formData.loanAmount} placeholder="请输入金额" class:error={errors.loanAmount} />
              {#if errors.loanAmount}<span class="error-msg">{errors.loanAmount}</span>{/if}
            </div>
            <div class="form-group">
              <label>贷款期限 <span class="required">*</span></label>
              <select bind:value={formData.loanTerm} class:error={errors.loanTerm}>
                <option value="">请选择期限</option>
                <option value="6">6个月</option>
                <option value="12">1年</option>
                <option value="24">2年</option>
                <option value="36">3年</option>
                <option value="60">5年</option>
              </select>
              {#if errors.loanTerm}<span class="error-msg">{errors.loanTerm}</span>{/if}
            </div>
          </div>
          <div class="form-row">
            <div class="form-group">
              <label>贷款用途 <span class="required">*</span></label>
              <select bind:value={formData.loanPurpose} class:error={errors.loanPurpose}>
                <option value="">请选择用途</option>
                <option value="设备更新">设备更新改造</option>
                <option value="节能改造">节能降碳改造</option>
                <option value="新能源">新能源项目</option>
                <option value="环保设施">环保设施升级</option>
                <option value="资源循环">资源循环利用</option>
                <option value="其他">其他绿色项目</option>
              </select>
              {#if errors.loanPurpose}<span class="error-msg">{errors.loanPurpose}</span>{/if}
            </div>
            <div class="form-group">
              <label>担保方式</label>
              <select bind:value={formData.guaranteeType}>
                <option value="">请选择担保方式</option>
                <option value="信用">信用贷款</option>
                <option value="抵押">房产抵押</option>
                <option value="质押">设备质押</option>
                <option value="担保">担保公司担保</option>
              </select>
            </div>
          </div>
        </div>
        
        <div class="form-section">
          <h3 class="section-title">项目信息 <span class="section-hint">（选填）</span></h3>
          <div class="form-group full-width">
            <label>绿色项目类型</label>
            <select bind:value={formData.greenProject}>
              <option value="">请选择项目类型</option>
              <option value="工业节能">工业节能项目</option>
              <option value="建筑节能">建筑节能项目</option>
              <option value="清洁生产">清洁生产项目</option>
              <option value="资源循环">资源循环利用项目</option>
              <option value="新能源">新能源项目</option>
              <option value="生态保护">生态保护项目</option>
              <option value="污染防治">污染防治项目</option>
            </select>
          </div>
          <div class="form-group full-width">
            <label>补充说明</label>
            <textarea bind:value={formData.remark} placeholder="请简要描述项目情况、预期效益等（选填）" rows="3"></textarea>
          </div>
        </div>
        
        <div class="form-actions">
          <button type="button" class="btn btn-cancel" onclick={closeModal} disabled={isSubmitting}>取消</button>
          <button type="submit" class="btn btn-submit" disabled={isSubmitting}>
            {isSubmitting ? '提交中...' : '提交申请'}
          </button>
        </div>
      </form>
    {/if}
  </div>
</div>

<style>
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    display: none;
    justify-content: center;
    align-items: flex-start;
    padding: 40px 20px;
    z-index: 1000;
    overflow-y: auto;
  }
  
  .modal-overlay.show {
    display: flex;
  }
  
  .modal-content {
    background: #fff;
    border-radius: 12px;
    padding: 30px;
    width: 100%;
    max-width: 700px;
    position: relative;
    animation: modalSlideIn 0.3s ease;
  }
  
  @keyframes modalSlideIn {
    from { opacity: 0; transform: translateY(-20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  
  .modal-close {
    position: absolute;
    top: 15px;
    right: 15px;
    width: 32px;
    height: 32px;
    border: none;
    background: #f3f4f6;
    border-radius: 50%;
    font-size: 22px;
    color: #6b7280;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
  }
  
  .modal-close:hover { background: #e5e7eb; }
  
  .modal-title {
    font-size: 22px;
    color: var(--primary);
    margin-bottom: 25px;
    padding-right: 40px;
  }
  
  .quiz-hint {
    background: #ecfdf5;
    border: 1px solid #a7f3d0;
    border-radius: 8px;
    padding: 12px 16px;
    margin-bottom: 20px;
    color: #065f46;
    font-size: 14px;
  }
  
  .error-banner {
    background: #fef2f2;
    border: 1px solid #fecaca;
    border-radius: 8px;
    padding: 12px 16px;
    margin-bottom: 20px;
    color: #dc2626;
    font-size: 14px;
  }
  
  .success-container {
    text-align: center;
    padding: 30px 20px;
  }
  
  .success-icon {
    width: 64px;
    height: 64px;
    background: #059669;
    color: #fff;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30px;
    font-weight: bold;
    margin: 0 auto 20px;
  }
  
  .success-title {
    font-size: 22px;
    color: var(--text-primary);
    margin-bottom: 16px;
  }
  
  .success-info {
    background: #f9fafb;
    border-radius: 8px;
    padding: 16px;
    margin-bottom: 20px;
  }
  
  .success-info p {
    margin: 6px 0;
    color: var(--text-secondary);
    font-size: 15px;
  }
  
  .success-tips {
    text-align: left;
    background: #f9fafb;
    border-radius: 8px;
    padding: 16px;
    margin-bottom: 24px;
  }
  
  .success-tips h4 {
    font-size: 14px;
    color: var(--text-primary);
    margin-bottom: 8px;
  }
  
  .success-tips ul {
    list-style: decimal;
    padding-left: 20px;
  }
  
  .success-tips li {
    font-size: 13px;
    color: var(--text-secondary);
    margin-bottom: 6px;
  }
  
  .apply-form { display: flex; flex-direction: column; gap: 20px; }
  
  .form-section {
    background: #f9fafb;
    padding: 20px;
    border-radius: 8px;
  }
  
  .section-title {
    font-size: 16px;
    color: var(--text-primary);
    margin-bottom: 15px;
    padding-bottom: 10px;
    border-bottom: 2px solid var(--primary);
    display: flex;
    align-items: center;
    gap: 8px;
  }
  
  .section-hint {
    font-size: 13px;
    color: #999;
    font-weight: normal;
  }
  
  .form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 15px;
    margin-bottom: 15px;
  }
  
  .form-row:last-child { margin-bottom: 0; }
  
  .form-group {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }
  
  .form-group.full-width { grid-column: 1 / -1; }
  
  .form-group label {
    font-size: 14px;
    color: var(--text-primary);
    font-weight: 500;
  }
  
  .required { color: var(--danger); }
  
  .form-group input,
  .form-group select,
  .form-group textarea {
    padding: 10px 12px;
    border: 1px solid #d1d5db;
    border-radius: 6px;
    font-size: 14px;
    transition: border-color 0.3s;
  }
  
  .form-group input:focus,
  .form-group select:focus,
  .form-group textarea:focus {
    outline: none;
    border-color: var(--primary);
  }
  
  .form-group input.error,
  .form-group select.error {
    border-color: var(--danger);
  }
  
  .error-msg {
    color: var(--danger);
    font-size: 12px;
  }
  
  .form-group textarea { resize: vertical; min-height: 80px; }
  
  .form-actions {
    display: flex;
    justify-content: center;
    gap: 15px;
    padding-top: 10px;
  }
  
  .btn {
    padding: 12px 40px;
    border-radius: 8px;
    font-size: 15px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s;
    border: none;
  }
  
  .btn:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
  
  .btn-cancel {
    background: #f3f4f6;
    color: var(--text-primary);
  }
  
  .btn-cancel:hover:not(:disabled) { background: #e5e7eb; }
  
  .btn-submit {
    background: var(--primary);
    color: #fff;
  }
  
  .btn-submit:hover:not(:disabled) { background: var(--primary-dark); }
  
  @media (max-width: 600px) {
    .form-row { grid-template-columns: 1fr; }
    .modal-content { padding: 20px; }
  }
</style>
