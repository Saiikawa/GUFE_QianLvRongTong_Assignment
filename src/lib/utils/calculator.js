/**
 * 贷款计算工具函数
 */

/**
 * 等额本息计算
 * @param {number} principal 本金（元）
 * @param {number} monthlyRate 月利率
 * @param {number} term 还款月数
 * @returns {Object} 计算结果
 */
export function calculateEqualPrincipalAndInterest(principal, monthlyRate, term) {
  const monthlyPayment = principal * monthlyRate * Math.pow(1 + monthlyRate, term) / (Math.pow(1 + monthlyRate, term) - 1);
  const totalPayment = monthlyPayment * term;
  const totalInterest = totalPayment - principal;
  
  return {
    monthlyPayment,
    totalPayment,
    totalInterest
  };
}

/**
 * 生成还款计划表
 * @param {number} principal 本金
 * @param {number} term 还款月数
 * @param {number} monthlyRate 月利率
 * @param {number} monthlyPayment 月供
 * @returns {Array} 还款计划表
 */
export function generateRepaymentSchedule(principal, term, monthlyRate, monthlyPayment) {
  const schedule = [];
  let remaining = principal;
  
  for (let i = 1; i <= term; i++) {
    const interest = remaining * monthlyRate;
    const principalPaid = monthlyPayment - interest;
    remaining -= principalPaid;
    
    schedule.push({
      period: i,
      monthlyPayment,
      principal: principalPaid,
      interest,
      remaining: Math.max(0, remaining)
    });
  }
  
  return schedule;
}

/**
 * 验证手机号
 */
export function validatePhone(phone) {
  return /^1[3-9]\d{9}$/.test(phone);
}

/**
 * 验证统一社会信用代码
 */
export function validateCreditCode(code) {
  return /^[0-9A-HJ-NPQRTUWXY]{2}\d{6}[0-9A-HJ-NPQRTUWXY]{10}$/.test(code);
}

/**
 * 生成申请编号
 */
export function generateApplyNo() {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const random = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
  return `GL${year}${month}${day}${random}`;
}
