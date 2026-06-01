import { U as escape_html, c as store_get, u as unsubscribe_stores } from "./dev.js";
import { n as t } from "./i18n.js";
//#region src/lib/components/ProductCard.svelte
function ProductCard($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		var $$store_subs;
		let { product, showRequirements = true } = $$props;
		$$renderer.push(`<div class="product-card svelte-11ja2cl"><div class="product-card-header svelte-11ja2cl"><div><div class="product-bank svelte-11ja2cl">${escape_html(product.bank)}</div> <div class="product-name svelte-11ja2cl">${escape_html(product.name)}</div></div> <div class="product-tags svelte-11ja2cl"><span class="tag svelte-11ja2cl">${escape_html(product.guarantee)}</span> <span class="tag svelte-11ja2cl">${escape_html(product.city)}</span></div></div> <div class="product-details svelte-11ja2cl"><div class="detail-item svelte-11ja2cl"><div class="detail-label svelte-11ja2cl">${escape_html(store_get($$store_subs ??= {}, "$t", t)("productCard.maxAmount"))}</div> <div class="detail-value svelte-11ja2cl">${escape_html(product.maxAmount)}万</div></div> <div class="detail-item svelte-11ja2cl"><div class="detail-label svelte-11ja2cl">${escape_html(store_get($$store_subs ??= {}, "$t", t)("productCard.interestRate"))}</div> <div class="detail-value rate svelte-11ja2cl">${escape_html(product.minRate)}%-${escape_html(product.maxRate)}%</div></div> <div class="detail-item svelte-11ja2cl"><div class="detail-label svelte-11ja2cl">${escape_html(store_get($$store_subs ??= {}, "$t", t)("productCard.loanTerm"))}</div> <div class="detail-value svelte-11ja2cl">最长${escape_html(product.term)}月</div></div> <div class="detail-item svelte-11ja2cl"><div class="detail-label svelte-11ja2cl">${escape_html(store_get($$store_subs ??= {}, "$t", t)("productCard.applicableCity"))}</div> <div class="detail-value city svelte-11ja2cl">${escape_html(product.city)}</div></div></div> `);
		if (showRequirements && product.requirements) {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<div class="product-requirements svelte-11ja2cl"><strong>${escape_html(store_get($$store_subs ??= {}, "$t", t)("productCard.requirements"))}：</strong>${escape_html(product.requirements)}</div>`);
		} else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--> `);
		if (product.advantages) {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<div class="product-advantages svelte-11ja2cl"><strong>${escape_html(store_get($$store_subs ??= {}, "$t", t)("productCard.advantages"))}：</strong>${escape_html(product.advantages)}</div>`);
		} else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--> <div class="product-actions svelte-11ja2cl"><button class="btn-primary svelte-11ja2cl" data-modal-trigger="contact">${escape_html(store_get($$store_subs ??= {}, "$t", t)("common.consultNow"))}</button> <button class="btn-secondary svelte-11ja2cl">${escape_html(store_get($$store_subs ??= {}, "$t", t)("productCard.learnMore"))}</button></div></div>`);
		if ($$store_subs) unsubscribe_stores($$store_subs);
	});
}
//#endregion
//#region src/lib/data/products.js
/**
* 碳金融产品数据
*/
var carbonProductsData = [
	{
		id: 1,
		bank: "工商银行贵州省分行",
		name: "碳排放权抵押贷款",
		maxAmount: 5e3,
		minRate: 3.2,
		maxRate: 4,
		term: 36,
		city: "全省",
		guarantee: "质押",
		repayment: "按月付息，到期还本",
		usage: "生产经营周转",
		target: "碳排放权配额持有企业",
		requirements: "持有碳排放权配额，有稳定经营收入，无不良征信",
		advantages: "以碳资产作为质押物，盘活企业碳资产，拓宽融资渠道"
	},
	{
		id: 2,
		bank: "建设银行贵州省分行",
		name: "碳配额回购融资",
		maxAmount: 3e3,
		minRate: 3.5,
		maxRate: 4.2,
		term: 24,
		city: "全省",
		guarantee: "信用",
		repayment: "一次性还本付息",
		usage: "短期资金周转",
		target: "持有碳配额的控排企业",
		requirements: "纳入碳排放权交易控排企业，有碳配额变现需求",
		advantages: "快速变现碳资产，解决短期资金需求，操作灵活便捷"
	},
	{
		id: 3,
		bank: "中国银行贵州省分行",
		name: "碳预期收益权质押贷款",
		maxAmount: 2e3,
		minRate: 3.8,
		maxRate: 4.5,
		term: 48,
		city: "全省",
		guarantee: "质押",
		repayment: "等额本息",
		usage: "节能改造项目投资",
		target: "有碳减排项目的企业",
		requirements: "有经核证的碳减排项目，未来有可预期的碳收益",
		advantages: "基于未来碳收益提供融资，支持企业低碳转型发展"
	},
	{
		id: 4,
		bank: "交通银行贵州省分行",
		name: "碳中和挂钩贷款",
		maxAmount: 5e3,
		minRate: 3,
		maxRate: 3.8,
		term: 60,
		city: "全省",
		guarantee: "抵押",
		repayment: "等额本息/等额本金",
		usage: "生产经营、技术改造",
		target: "有明确碳中和目标的企业",
		requirements: "有碳中和承诺或规划，有稳定经营收入，资产负债率适中",
		advantages: "利率与碳减排绩效挂钩，实现碳减排可享利率优惠"
	},
	{
		id: 5,
		bank: "贵州银行",
		name: "林业碳汇质押贷款",
		maxAmount: 1e3,
		minRate: 4,
		maxRate: 5,
		term: 60,
		city: "全省",
		guarantee: "质押",
		repayment: "按年付息，到期还本",
		usage: "林业碳汇项目开发",
		target: "林业碳汇项目业主",
		requirements: "拥有符合条件的林业碳汇资源，有林权证",
		advantages: "盘活林业碳汇资源，支持生态文明建设"
	},
	{
		id: 6,
		bank: "贵阳银行",
		name: "绿色低碳信用卡",
		maxAmount: 100,
		minRate: 4.5,
		maxRate: 6,
		term: 12,
		city: "贵阳",
		guarantee: "信用",
		repayment: "随借随还",
		usage: "日常经营周转",
		target: "小微企业主",
		requirements: "经营满1年，信用记录良好",
		advantages: "纯信用、免担保，专为小微企业主设计的绿色信贷产品"
	},
	{
		id: 7,
		bank: "农业银行贵州省分行",
		name: "碳排放权质押+保证贷款",
		maxAmount: 3e3,
		minRate: 3.6,
		maxRate: 4.3,
		term: 36,
		city: "全省",
		guarantee: "质押+保证",
		repayment: "按月等额本息",
		usage: "生产经营",
		target: "碳排放权配额持有企业",
		requirements: "持有碳配额，有一定经营规模，可提供保证担保",
		advantages: "碳排放权质押+保证人组合担保，额度更高，手续简便"
	},
	{
		id: 8,
		bank: "邮储银行贵州省分行",
		name: "碳普惠贷款",
		maxAmount: 500,
		minRate: 4.2,
		maxRate: 5.5,
		term: 24,
		city: "全省",
		guarantee: "信用",
		repayment: "随借随还",
		usage: "小规模经营周转",
		target: "小微企业、个体工商户",
		requirements: "经营满6个月，有绿色低碳相关业务",
		advantages: "面向小微企业的碳普惠贷款，门槛低、审批快"
	}
];
/**
* 银行绿色贷款产品数据
*/
var productsData = [
	{
		id: 1,
		bank: "工商银行贵州省分行",
		name: "绿色制造贷",
		maxAmount: 3e3,
		minRate: 3.45,
		maxRate: 4.35,
		term: 60,
		city: "全省",
		guarantee: "抵押/信用",
		requirements: "属于绿色产业目录内的中小制造企业，经营正常，无不良征信",
		advantages: "审批快、利率低，可信用可抵押，还款方式灵活"
	},
	{
		id: 2,
		bank: "建设银行贵州省分行",
		name: "绿色普惠贷",
		maxAmount: 1e3,
		minRate: 3.5,
		maxRate: 4.2,
		term: 36,
		city: "全省",
		guarantee: "信用/抵押",
		requirements: "小微企业，项目符合绿色产业标准，经营满1年以上",
		advantages: "线上即可申请，随借随还，无抵押信用额度最高500万"
	},
	{
		id: 3,
		bank: "贵阳银行",
		name: "绿易贷",
		maxAmount: 2e3,
		minRate: 3.6,
		maxRate: 4.5,
		term: 48,
		city: "贵阳",
		guarantee: "抵押/质押",
		requirements: "贵州省内注册的中小微企业，项目为节能环保、绿色制造类",
		advantages: "本地银行审批灵活，可配套财政贴息，综合成本低"
	},
	{
		id: 4,
		bank: "贵州银行",
		name: "绿色普惠信用贷",
		maxAmount: 500,
		minRate: 3.4,
		maxRate: 4.2,
		term: 24,
		city: "全省",
		guarantee: "信用",
		requirements: "贵州省内小微企业，符合绿色信贷标准，经营满2年",
		advantages: "纯信用、无抵押，线上审批，最快3个工作日放款"
	},
	{
		id: 5,
		bank: "农业银行贵州省分行",
		name: "绿色节能贷",
		maxAmount: 2e3,
		minRate: 3.5,
		maxRate: 4.3,
		term: 60,
		city: "全省",
		guarantee: "抵押/担保",
		requirements: "节能改造、环保升级类项目，经营正常，有稳定还款来源",
		advantages: "可享受普惠金融优惠政策，期限最长5年，还款压力小"
	},
	{
		id: 6,
		bank: "中国银行贵州省分行",
		name: "碳易贷",
		maxAmount: 1e3,
		minRate: 3.8,
		maxRate: 4.6,
		term: 36,
		city: "全省",
		guarantee: "信用/质押",
		requirements: "碳减排项目企业，有经核证的碳减排量",
		advantages: "支持碳减排项目，盘活碳资产，利率优惠"
	}
];
//#endregion
export { productsData as n, ProductCard as r, carbonProductsData as t };
