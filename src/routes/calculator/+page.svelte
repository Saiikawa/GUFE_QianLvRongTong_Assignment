<script>
  import { t } from '$lib/i18n/index.js';


  let currentStep = $state(1);
  let answers = $state({
    // 绿色属性
    greenDirectoryType: '',
    greenBenefitQuantifiable: '',
    // 数据完整度
    energyData: '',
    carbonCalcData: '',
    envMonitorData: '',
    // 财务可行性
    revenueStability: '',
    financialReports: '',
    repaymentSource: '',
    // 信用风险
    envViolation: '',
    creditStatus: '',
    businessLicense: '',
    // 政策匹配度
    guizhouIndustry: '',
    specializedEnterprise: '',
    // 材料完整度
    basicMaterials: '',
    projectCompliance: '',
    greenProof: '',
    loanApplication: ''
  });

  // 问卷题目（分6个维度）
  const dimensions = [
    {
      name: '绿色属性',
      weight: '25%',
      questions: [
        {
          id: 'greenDirectoryType',
          title: '您的项目属于以下哪个类别？',
          subtitle: '请根据《绿色金融支持项目目录（2025年版）》选择',
          options: [
            { value: 'energy', label: '节能降碳产业' },
            { value: 'environment', label: '环境保护产业' },
            { value: 'resource', label: '资源循环利用产业' },
            { value: 'cleanEnergy', label: '清洁能源产业' },
            { value: 'otherGreen', label: '其他绿色项目' },
            { value: 'notInList', label: '不属于目录范围' }
          ]
        },
        {
          id: 'greenBenefitQuantifiable',
          title: '您的项目能提供哪些绿色效益测算数据？',
          subtitle: '包括节能率、碳减排率等可量化数据',
          options: [
            { value: 'complete', label: '能提供完整的节能率/减排率测算数据，且数据合理' },
            { value: 'partial', label: '有测算但数据不完整' },
            { value: 'none', label: '无法提供绿色效益测算' }
          ]
        }
      ]
    },
    {
      name: '数据完整度',
      weight: '20%',
      questions: [
        {
          id: 'energyData',
          title: '您的企业能提供近12个月的能耗数据吗？',
          subtitle: '包括用电量、用水量、用气量等',
          options: [
            { value: 'complete', label: '能提供完整的近12个月能耗数据' },
            { value: 'partial', label: '仅能提供部分能耗数据' },
            { value: 'none', label: '无法提供能耗数据' }
          ]
        },
        {
          id: 'carbonCalcData',
          title: '您的项目能提供碳减排效果测算数据吗？',
          subtitle: '包括项目实施前后的碳排放对比',
          options: [
            { value: 'complete', label: '能提供完整的碳减排对比测算' },
            { value: 'simple', label: '仅能提供简单估算' },
            { value: 'none', label: '无法提供碳减排测算' }
          ]
        },
        {
          id: 'envMonitorData',
          title: '您的企业能提供环保监测数据吗？',
          subtitle: '包括排污许可证、环保设施运行记录等',
          options: [
            { value: 'complete', label: '能提供完整的环保监测数据（排污许可证、运行记录、监测报告）' },
            { value: 'partial', label: '仅能提供部分数据' },
            { value: 'none', label: '无法提供环保监测数据' }
          ]
        }
      ]
    },
    {
      name: '财务可行性',
      weight: '20%',
      questions: [
        {
          id: 'revenueStability',
          title: '您的上年度营业收入与融资金额的比例是？',
          subtitle: '融资金额不超过营收的2倍更有利于获批',
          options: [
            { value: 'above2', label: '营收 ≥ 融资金额 × 2' },
            { value: '1to2', label: '营收为融资金额的 1-2 倍' },
            { value: 'below1', label: '营收 < 融资金额' }
          ]
        },
        {
          id: 'financialReports',
          title: '您的企业能提供近2年的财务报表吗？',
          subtitle: '包括资产负债表和利润表',
          options: [
            { value: 'complete', label: '能提供2023-2024年完整财务报表，且数据勾稽一致' },
            { value: 'partial', label: '仅能提供1年财务报表' },
            { value: 'none', label: '无法提供财务报表' }
          ]
        },
        {
          id: 'repaymentSource',
          title: '您的还款来源规划是？',
          options: [
            { value: 'clear', label: '还款来源为经营收入，有具体的还款计划' },
            { value: 'vague', label: '还款来源明确，但还款计划不具体' },
            { value: 'unclear', label: '还款来源不明确' }
          ]
        }
      ]
    },
    {
      name: '信用风险',
      weight: '15%',
      questions: [
        {
          id: 'envViolation',
          title: '您的企业近3年是否有环保行政处罚记录？',
          options: [
            { value: 'none', label: '近3年无环保行政处罚记录' },
            { value: 'rectified', label: '有记录但已完成整改' },
            { value: 'unrectified', label: '有未整改的处罚' }
          ]
        },
        {
          id: 'creditStatus',
          title: '您的企业征信状况是？',
          options: [
            { value: 'good', label: '企业征信良好，无逾期、无失信记录' },
            { value: 'minor', label: '有轻微逾期但已结清' },
            { value: 'bad', label: '有当前逾期或失信记录' }
          ]
        },
        {
          id: 'businessLicense',
          title: '您的企业经营资质状况是？',
          subtitle: '包括营业执照、相关许可证等',
          options: [
            { value: 'valid', label: '证照齐全且在有效期内' },
            { value: 'expiring', label: '证照齐全但即将到期' },
            { value: 'missing', label: '证照缺失或不完整' }
          ]
        }
      ]
    },
    {
      name: '政策匹配度',
      weight: '10%',
      questions: [
        {
          id: 'guizhouIndustry',
          title: '您的企业所属行业属于贵州省重点支持产业吗？',
          subtitle: '贵州省重点支持十大工业产业、特色轻工等',
          options: [
            { value: 'priority', label: '属于贵州省十大工业产业、特色轻工、民族民间工艺品等' },
            { value: 'general', label: '属于一般制造业' },
            { value: 'other', label: '其他行业' }
          ]
        },
        {
          id: 'specializedEnterprise',
          title: '您的企业是否获得"专精特新"或"绿色工厂"认定？',
          options: [
            { value: 'certified', label: '已获得"专精特新"或"绿色工厂"认定' },
            { value: 'applying', label: '已申报，认定在审' },
            { value: 'none', label: '未获得相关认定' }
          ]
        }
      ]
    },
    {
      name: '材料完整度',
      weight: '10%',
      questions: [
        {
          id: 'basicMaterials',
          title: '您能提供以下哪些基础资质材料？',
          subtitle: '营业执照、法人身份证、银行流水、征信报告',
          options: [
            { value: 'complete', label: '四类材料齐全' },
            { value: 'partial', label: '缺1项材料' },
            { value: 'missing', label: '缺2项及以上材料' }
          ]
        },
        {
          id: 'projectCompliance',
          title: '您能提供以下哪些项目合规材料？',
          subtitle: '立项/备案文件、可研报告、环保批复',
          options: [
            { value: 'complete', label: '三类材料齐全' },
            { value: 'partial', label: '缺1项材料' },
            { value: 'missing', label: '缺2项及以上材料' }
          ]
        },
        {
          id: 'greenProof',
          title: '您能提供绿色属性证明材料吗？',
          subtitle: '包括节能降耗测算报告、能耗监测数据、绿色认证等',
          options: [
            { value: 'complete', label: '能提供完整的绿色属性证明材料' },
            { value: 'partial', label: '仅能提供部分材料' },
            { value: 'none', label: '无法提供绿色属性证明' }
          ]
        },
        {
          id: 'loanApplication',
          title: '您能提供以下贷款申请材料吗？',
          subtitle: '包括贷款申请书、资金使用计划、还款计划',
          options: [
            { value: 'complete', label: '三类材料齐全' },
            { value: 'partial', label: '缺1项材料' }
          ]
        }
      ]
    }
  ];


  // 计算总题目数
  const totalQuestions = dimensions.reduce((sum, dim) => sum + dim.questions.length, 0);

  // 选项分数映射（内部使用，不显示给用户）
  const optionScores = {
    greenDirectoryType: { energy: 15, environment: 12, resource: 12, cleanEnergy: 10, otherGreen: 5, notInList: 0 },
    greenBenefitQuantifiable: { complete: 10, partial: 5, none: 0 },
    energyData: { complete: 8, partial: 4, none: 0 },
    carbonCalcData: { complete: 7, simple: 3, none: 0 },
    envMonitorData: { complete: 5, partial: 2, none: 0 },
    revenueStability: { above2: 8, '1to2': 4, below1: 0 },
    financialReports: { complete: 6, partial: 3, none: 0 },
    repaymentSource: { clear: 6, vague: 3, unclear: 0 },
    envViolation: { none: 8, rectified: 3, unrectified: 0 },
    creditStatus: { good: 4, minor: 2, bad: 0 },
    businessLicense: { valid: 3, expiring: 1, missing: 0 },
    guizhouIndustry: { priority: 5, general: 2, other: 0 },
    specializedEnterprise: { certified: 5, applying: 2, none: 0 },
    basicMaterials: { complete: 3, partial: 1, missing: 0 },
    projectCompliance: { complete: 3, partial: 1, missing: 0 },
    greenProof: { complete: 2, partial: 1, none: 0 },
    loanApplication: { complete: 2, partial: 0 }
  };

  // 计算总分
  function calculateScore() {
    let score = 0;
    const dimensionScores = {};
    
    dimensions.forEach(dim => {
      let dimScore = 0;
      dim.questions.forEach(q => {
        const selectedValue = answers[q.id];
        if (selectedValue && optionScores[q.id] && optionScores[q.id][selectedValue] !== undefined) {
          dimScore += optionScores[q.id][selectedValue];
        }
      });
      dimensionScores[dim.name] = dimScore;
      score += dimScore;
    });
    
    return { total: score, dimensions: dimensionScores };
  }

  // 确定等级和推荐
  function getResult(result, answers) {
    const { total, dimensions: dimScores } = result;
    
    let level, levelName, description, actions, recommendations;
    
    if (total >= 85) {
      level = 'A';
      levelName = 'A级（高度适配）';
      description = '项目绿色属性强，材料完整，财务可行，信用良好';
      actions = [
        '优先推荐国有大行绿色信贷产品',
        '可争取纯信用贷款',
        '建议尽快提交申请，抢占额度'
      ];
      recommendations = answers.greenDirectoryType === 'energy' || 
                        answers.greenDirectoryType === 'environment' ||
                        answers.greenDirectoryType === 'resource' ? [
        { bank: '工商银行贵州省分行', product: '"绿色制造贷"', maxAmount: '最高3000万', rate: '年化3.45%-4.35%', features: '审批快、可信用可抵押' },
        { bank: '农业银行贵州省分行', product: '"绿色节能贷"', maxAmount: '最高2000万', rate: '年化3.5%-4.3%', features: '期限最长5年' }
      ] : [
        { bank: '建设银行贵州省分行', product: '"绿色贷款通"', maxAmount: '最高2000万', rate: '年化3.6%-4.5%', features: '纯信用/抵押均可' },
        { bank: '贵阳银行', product: '"绿易贷"', maxAmount: '最高1000万', rate: '年化4%-5%', features: '绿色企业优先' }
      ];
    } else if (total >= 70) {
      level = 'B';
      levelName = 'B级（基本适配）';
      description = '具备绿色融资基本条件，但存在材料或数据缺口';
      actions = [
        '推荐地方城商行产品',
        '需补充缺项材料后申报',
        '可通过担保增信提升通过率'
      ];
      recommendations = [
        { bank: '贵阳银行', product: '"绿易贷"', maxAmount: '最高1000万', rate: '年化4%-5%', features: '门槛相对较低' },
        { bank: '贵州银行', product: '"绿色普惠信用贷"', maxAmount: '最高500万', rate: '年化4.5%-5.5%', features: '小微企业友好' }
      ];
    } else if (total >= 55) {
      level = 'C';
      levelName = 'C级（条件不足）';
      description = '绿色属性尚可，但某方面存在明显短板';
      actions = [
        '建议先完成材料整改和合规核验',
        '可匹配担保增信或抵押方式',
        '3个月后复评'
      ];
      recommendations = [
        { bank: '贵州银行', product: '"普惠小微贷"', maxAmount: '最高300万', rate: '年化5%-6%', features: '需要担保抵押' },
        { bank: '贵阳银行', product: '"普惠信用贷"', maxAmount: '最高200万', rate: '年化5.5%-6.5%', features: '小微专项' }
      ];
    } else if (total >= 40) {
      level = 'D';
      levelName = 'D级（暂不适配）';
      description = '绿色属性不明确或信用/财务存在重大风险';
      actions = [
        '建议重新评估项目绿色属性',
        '如属于目录外项目，建议转向普通普惠贷款',
        '需实质性改善经营或信用状况'
      ];
      recommendations = [
        { bank: '贵州省农村信用社', product: '"普惠通"', maxAmount: '最高100万', rate: '年化6%-8%', features: '门槛较低' },
        { bank: '各商业银行', product: '普通小额贷款', maxAmount: '视情况', rate: '年化6%-10%', features: '建议先规范经营' }
      ];
    } else {
      level = 'E';
      levelName = 'E级（不建议申报）';
      description = '不符合绿色信贷基本准入条件';
      actions = [
        '不建议当前申报绿色贷款',
        '建议先进行环保整改、财务规范',
        '或选择其他融资方式'
      ];
      recommendations = [
        { bank: '-', product: '建议先完善企业资质', maxAmount: '-', rate: '-', features: '完成整改后再评估' }
      ];
    }
    
    return {
      total,
      level,
      levelName,
      description,
      actions,
      recommendations,
      dimensionScores: dimScores
    };
  }

  // 生成改进建议
  function generateSuggestions(result) {
    const suggestions = [];
    const { dimensions: dimScores } = result;
    
    // 绿色属性建议
    if (dimScores['绿色属性'] < 20) {
      if (dimScores['绿色属性'] === 0) {
        suggestions.push('您的项目暂未被纳入《绿色金融支持项目目录》，建议先确认项目归属类别或考虑其他融资渠道');
      } else if (dimScores['绿色属性'] < 15) {
        suggestions.push('建议完善绿色效益测算报告，提供具体的节能率和减排率数据');
      }
    }
    
    // 数据完整度建议
    if (dimScores['数据完整度'] < 15) {
      suggestions.push('建议补充近12个月完整能耗数据和碳减排效果测算数据');
    }
    
    // 财务可行性建议
    if (dimScores['财务可行性'] < 15) {
      suggestions.push('建议提供近2年完整财务报表，确保数据准确一致');
      suggestions.push('合理规划融资金额，不宜超过年营收的2倍');
    }
    
    // 信用风险建议
    if (dimScores['信用风险'] < 10) {
      if (dimScores['信用风险'] < 8) {
        suggestions.push('建议处理完所有环保处罚记录并获取结案证明');
      }
      suggestions.push('保持良好征信记录，结清所有逾期款项');
    }
    
    // 政策匹配度建议
    if (dimScores['政策匹配度'] < 5) {
      suggestions.push('建议积极申报"专精特新"企业或"绿色工厂"认定，可显著提升政策匹配度');
      suggestions.push('关注贵州省重点产业政策，确保项目符合支持方向');
    }
    
    // 材料完整度建议
    if (dimScores['材料完整度'] < 8) {
      suggestions.push('建议按照《项目申报材料标准化清单》逐一核对并补充缺项材料');
    }
    
    if (suggestions.length === 0) {
      suggestions.push('您的企业条件优秀，建议尽快提交绿色贷款申请');
    }
    
    return suggestions;
  }

  function selectOption(questionId, value) {
    answers[questionId] = value;
    
    // 自动进入下一步
    if (currentStep < totalQuestions) {
      currentStep++;
    }
  }

  function prevStep() {
    if (currentStep > 1) {
      currentStep--;
    }
  }

  function resetQuiz() {
    currentStep = 1;
    answers = {
      greenDirectoryType: '',
      greenBenefitQuantifiable: '',
      energyData: '',
      carbonCalcData: '',
      envMonitorData: '',
      revenueStability: '',
      financialReports: '',
      repaymentSource: '',
      envViolation: '',
      creditStatus: '',
      businessLicense: '',
      guizhouIndustry: '',
      specializedEnterprise: '',
      basicMaterials: '',
      projectCompliance: '',
      greenProof: '',
      loanApplication: ''
    };
  }

  function showResults() {
    // 设置一个大于总题数的值，进入结果页面
    currentStep = totalQuestions + 1;
  }

  // 获取当前显示的题目信息
  let currentQuestionInfo = $derived(() => {
    let index = currentStep - 1;
    let questionIndex = 0;
    
    for (let i = 0; i < dimensions.length; i++) {
      const dim = dimensions[i];
      for (let j = 0; j < dim.questions.length; j++) {
        if (questionIndex === index) {
          return {
            dimensionIndex: i,
            dimensionName: dim.name,
            dimensionWeight: dim.weight,
            questionIndexInDim: j,
            totalQuestionsInDim: dim.questions.length,
            question: dim.questions[j]
          };
        }
        questionIndex++;
      }
    }
    return null;
  });

  let canProceed = $derived(() => {
    const info = currentQuestionInfo();
    if (!info) return false;
    return !!answers[info.question.id];
  });

  let scoreResult = $derived(() => {
    if (currentStep <= totalQuestions) return null;
    return calculateScore();
  });

  let finalResult = $derived(() => {
    const score = scoreResult();
    if (!score) return null;
    return getResult(score, answers);
  });

  let suggestions = $derived(() => {
    const result = finalResult();
    if (!result) return [];
    return generateSuggestions(result);
  });
</script>

<svelte:head>
  <title>{$t('quizPage.title')} - 黔绿融通</title>
</svelte:head>

<div class="container">
  <div class="page-title">
    <h1>🌿 {$t('quizPage.title')}</h1>
    <p>{$t('quizPage.subtitle')}</p>
  </div>
  
  <div class="quiz-container">
    {#if currentStep <= totalQuestions}
      {@const info = currentQuestionInfo()}
      {#if info}
        <!-- 进度条 -->
        <div class="progress-container">
          <div class="progress-bar">
            <div class="progress-fill" style="width: {((currentStep - 1) / totalQuestions) * 100}%"></div>
          </div>
          <span class="progress-text">第 {currentStep} / {totalQuestions} 题</span>
        </div>
        
        <!-- 维度指示器 -->
        <div class="dimension-indicator">
          <span class="dimension-name">{info.dimensionName}</span>
          <span class="dimension-progress">({info.questionIndexInDim + 1}/{info.totalQuestionsInDim})</span>
        </div>
        
        <!-- 题目 -->
        <div class="question-card">
          <h2 class="question-title">{info.question.title}</h2>
          {#if info.question.subtitle}
            <p class="question-subtitle">{info.question.subtitle}</p>
          {/if}
          
          <div class="options-list">
            {#each info.question.options as option}
              <button 
                class="option-btn" 
                class:selected={answers[info.question.id] === option.value}
                onclick={() => selectOption(info.question.id, option.value)}
              >
                <span class="option-icon">
                  {#if answers[info.question.id] === option.value}✓{/if}
                </span>
                <span class="option-text">{option.label}</span>
              </button>
            {/each}
          </div>
        </div>
        
        <!-- 导航按钮 -->
        <div class="quiz-nav">
          {#if currentStep > 1}
            <button class="nav-btn prev-btn" onclick={prevStep}>{$t('quizPage.prevBtn')}</button>
          {/if}
          {#if currentStep === totalQuestions}
            <button class="nav-btn next-btn" onclick={showResults} disabled={!canProceed}>
              {$t('quizPage.viewResults')}
            </button>
          {:else}
            <button class="nav-btn next-btn" onclick={() => currentStep++} disabled={!canProceed}>
              {$t('quizPage.nextBtn')}
            </button>
          {/if}
        </div>
        
        <!-- 重新开始 -->
        <button class="reset-link" onclick={resetQuiz}>{$t('quizPage.restartQuiz')}</button>
      {/if}
    
    {:else}
      <!-- 结果页面 -->
      {@const result = finalResult()}
      {#if result}
        <div class="results-container">
          <!-- 总分和等级 -->
          <div class="score-card">
            <div class="score-main">
              <div class="score-number">{result.total}</div>
              <div class="score-label">{$t('quizPage.scoreLabel')}</div>
            </div>
            <div class="level-badge level-{result.level}">
              {result.levelName}
            </div>
          </div>
          
          <!-- 等级说明 -->
          <div class="level-desc">
            <h3>{$t('quizPage.fitDescription')}</h3>
            <p>{result.description}</p>
          </div>
          
          <!-- 推荐银行产品 -->
          <div class="recommendations">
            <h3>{$t('quizPage.recommendedProducts')}</h3>
            <div class="products-list">
              {#each result.recommendations as rec}
                <div class="product-item">
                  <div class="product-header">
                    <span class="product-bank">{rec.bank}</span>
                    <span class="product-name">{rec.product}</span>
                  </div>
                  <div class="product-details">
                    <div class="product-detail">
                      <span class="detail-label">{$t('quizPage.amount')}</span>
                      <span class="detail-value">{rec.maxAmount}</span>
                    </div>
                    <div class="product-detail">
                      <span class="detail-label">{$t('quizPage.rate')}</span>
                      <span class="detail-value">{rec.rate}</span>
                    </div>
                    <div class="product-detail full">
                      <span class="detail-label">{$t('quizPage.features')}</span>
                      <span class="detail-value">{rec.features}</span>
                    </div>
                  </div>
                </div>
              {/each}
            </div>
          </div>
          
          <!-- 行动建议 -->
          <div class="actions-section">
            <h3>{$t('quizPage.actionTips')}</h3>
            <ul class="actions-list">
              {#each result.actions as action}
                <li>{action}</li>
              {/each}
            </ul>
          </div>
          
          <!-- 操作按钮 -->
          <div class="result-actions">
            <button 
              class="action-btn primary" 
              data-apply-trigger
              data-quiz-result={JSON.stringify({
                recommendationLevel: result.levelName,
                totalScore: result.total,
                matchedProducts: result.recommendations.map(r => `${r.bank} - ${r.product}`)
              })}
            >
              {$t('quizPage.applyNow')}
            </button>
            <button class="action-btn secondary" onclick={resetQuiz}>{$t('quizPage.restartAssessment')}</button>
            <a href="/products" class="action-btn secondary">{$t('quizPage.viewAllProducts')}</a>
          </div>
        </div>
      {/if}
    {/if}
  </div>
</div>

<style>
  .container {
    max-width: 800px;
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

  .quiz-container {
    background: #fff;
    border-radius: 16px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    padding: 30px;
  }

  .progress-container {
    display: flex;
    align-items: center;
    gap: 15px;
    margin-bottom: 20px;
  }

  .progress-bar {
    flex: 1;
    height: 8px;
    background: #e5e7eb;
    border-radius: 4px;
    overflow: hidden;
  }

  .progress-fill {
    height: 100%;
    background: linear-gradient(90deg, var(--primary) 0%, var(--primary-dark) 100%);
    border-radius: 4px;
    transition: width 0.3s ease;
  }

  .progress-text {
    font-size: 14px;
    color: var(--text-secondary);
    font-weight: 500;
    white-space: nowrap;
  }

  .dimension-indicator {
    text-align: center;
    margin-bottom: 25px;
    padding: 12px;
    background: #f0fdf4;
    border-radius: 8px;
  }

  .dimension-name {
    font-size: 16px;
    font-weight: 600;
    color: var(--primary);
  }

  .dimension-weight {
    font-size: 14px;
    color: var(--text-secondary);
    margin-left: 10px;
  }

  .dimension-progress {
    font-size: 14px;
    color: var(--text-light);
    margin-left: 5px;
  }

  .question-card {
    text-align: center;
    margin-bottom: 30px;
  }

  .question-title {
    font-size: 20px;
    color: var(--text-primary);
    font-weight: 600;
    margin-bottom: 10px;
  }

  .question-subtitle {
    font-size: 14px;
    color: var(--text-secondary);
    margin-bottom: 25px;
  }

  .options-list {
    display: flex;
    flex-direction: column;
    gap: 12px;
    text-align: left;
  }

  .option-btn {
    display: flex;
    align-items: center;
    gap: 15px;
    padding: 16px 20px;
    background: #f9fafb;
    border: 2px solid #e5e7eb;
    border-radius: 12px;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .option-btn:hover {
    border-color: var(--primary);
    background: #ecfdf5;
  }

  .option-btn.selected {
    border-color: var(--primary);
    background: #ecfdf5;
  }

  .option-icon {
    width: 26px;
    height: 26px;
    min-width: 26px;
    border-radius: 50%;
    background: #fff;
    border: 2px solid #d1d5db;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 13px;
    font-weight: bold;
    color: var(--primary);
    transition: all 0.3s ease;
  }

  .option-btn.selected .option-icon {
    background: var(--primary);
    border-color: var(--primary);
    color: #fff;
  }

  .option-text {
    font-size: 15px;
    color: var(--text-primary);
    line-height: 1.4;
  }

  .quiz-nav {
    display: flex;
    justify-content: space-between;
    gap: 15px;
    margin-bottom: 20px;
  }

  .nav-btn {
    padding: 14px 28px;
    font-size: 15px;
    font-weight: 500;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease;
    border: none;
  }

  .prev-btn {
    background: #f3f4f6;
    color: var(--text-primary);
  }

  .prev-btn:hover {
    background: #e5e7eb;
  }

  .next-btn {
    background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
    color: #fff;
    flex: 1;
    max-width: 200px;
  }

  .next-btn:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(16, 185, 129, 0.3);
  }

  .next-btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .reset-link {
    display: block;
    margin: 0 auto;
    background: none;
    border: none;
    color: var(--text-light);
    font-size: 14px;
    cursor: pointer;
    text-decoration: underline;
  }

  /* 结果页面 */
  .results-container {
    animation: fadeIn 0.5s ease;
  }

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .score-card {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
    border-radius: 16px;
    padding: 30px;
    margin-bottom: 25px;
  }

  .score-main {
    text-align: center;
    color: #fff;
  }

  .score-number {
    font-size: 64px;
    font-weight: 700;
    line-height: 1;
  }

  .score-label {
    font-size: 16px;
    opacity: 0.9;
    margin-top: 10px;
  }

  .level-badge {
    padding: 12px 24px;
    border-radius: 12px;
    font-size: 18px;
    font-weight: 600;
  }

  .level-A {
    background: #dcfce7;
    color: #166534;
  }

  .level-B {
    background: #dbeafe;
    color: #1e40af;
  }

  .level-C {
    background: #fef3c7;
    color: #92400e;
  }

  .level-D {
    background: #fed7aa;
    color: #c2410c;
  }

  .level-E {
    background: #fee2e2;
    color: #b91c1c;
  }

  .level-desc {
    background: #f9fafb;
    border-radius: 12px;
    padding: 20px;
    margin-bottom: 25px;
  }

  .level-desc h3 {
    font-size: 16px;
    color: var(--text-primary);
    margin-bottom: 10px;
  }

  .level-desc p {
    font-size: 15px;
    color: var(--text-secondary);
    line-height: 1.6;
  }

  .recommendations {
    margin-bottom: 25px;
  }

  .products-list {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .product-item {
    border: 1px solid var(--border);
    border-radius: 12px;
    padding: 15px;
    background: #fff;
  }

  .product-header {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 12px;
  }

  .product-bank {
    font-size: 14px;
    font-weight: 600;
    color: var(--primary);
  }

  .product-name {
    font-size: 15px;
    font-weight: 600;
    color: var(--text-primary);
  }

  .product-details {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8px;
  }

  .product-detail {
    font-size: 13px;
  }

  .product-detail.full {
    grid-column: 1 / -1;
  }

  .detail-label {
    color: var(--text-light);
  }

  .detail-value {
    color: var(--text-secondary);
    font-weight: 500;
  }

  .suggestions {
    margin-bottom: 25px;
    padding: 20px;
    background: #fffbeb;
    border-radius: 12px;
    border-left: 4px solid #f59e0b;
  }

  .suggestions h3 {
    font-size: 16px;
    color: #92400e;
    margin-bottom: 12px;
  }

  .suggestions-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .suggestions-list li {
    font-size: 14px;
    color: #78350f;
    padding: 8px 0;
    padding-left: 20px;
    position: relative;
    line-height: 1.5;
  }

  .suggestions-list li::before {
    content: '•';
    position: absolute;
    left: 0;
    color: #f59e0b;
  }

  .actions-section {
    margin-bottom: 25px;
    padding: 20px;
    background: #f0fdf4;
    border-radius: 12px;
    border-left: 4px solid var(--primary);
  }

  .actions-section h3 {
    font-size: 16px;
    color: var(--text-primary);
    margin-bottom: 12px;
  }

  .actions-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .actions-list li {
    font-size: 14px;
    color: var(--text-secondary);
    padding: 6px 0;
    padding-left: 20px;
    position: relative;
  }

  .actions-list li::before {
    content: '✓';
    position: absolute;
    left: 0;
    color: var(--primary);
    font-weight: bold;
  }

  .result-actions {
    display: flex;
    justify-content: center;
    gap: 15px;
    margin-top: 30px;
    flex-wrap: wrap;
  }

  .action-btn {
    padding: 14px 30px;
    font-size: 15px;
    font-weight: 500;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease;
    border: none;
    text-decoration: none;
    display: inline-block;
  }

  .action-btn.primary {
    background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
    color: #fff;
  }

  .action-btn.primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(16, 185, 129, 0.3);
  }

  .action-btn.secondary {
    background: #f3f4f6;
    color: var(--text-primary);
    border: 1px solid var(--border);
  }

  .action-btn.secondary:hover {
    background: #e5e7eb;
  }

  @media (max-width: 600px) {
    .score-card {
      flex-direction: column;
      text-align: center;
      gap: 20px;
    }

    .score-number {
      font-size: 48px;
    }

    .product-details {
      grid-template-columns: 1fr;
    }

    .result-actions {
      flex-direction: column;
    }

    .action-btn {
      width: 100%;
      text-align: center;
    }
  }
</style>
