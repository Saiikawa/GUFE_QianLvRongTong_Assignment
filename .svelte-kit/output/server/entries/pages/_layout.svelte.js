import "../../chunks/index-server.js";
import { U as escape_html, V as attr, a as ensure_array_like, c as store_get, n as attr_class, nt as getContext, u as unsubscribe_stores } from "../../chunks/dev.js";
import "../../chunks/client.js";
import { n as t, t as locale } from "../../chunks/i18n.js";
//#region node_modules/@sveltejs/kit/src/runtime/app/stores.js
/**
* A function that returns all of the contextual stores. On the server, this must be called during component initialization.
* Only use this if you need to defer store subscription until after the component has mounted, for some reason.
*
* @deprecated Use `$app/state` instead (requires Svelte 5, [see docs for more info](https://svelte.dev/docs/kit/migrating-to-sveltekit-2#SvelteKit-2.12:-$app-stores-deprecated))
*/
var getStores = () => {
	const stores$1 = getContext("__svelte__");
	return {
		/** @type {typeof page} */
		page: { subscribe: stores$1.page.subscribe },
		/** @type {typeof navigating} */
		navigating: { subscribe: stores$1.navigating.subscribe },
		/** @type {typeof updated} */
		updated: stores$1.updated
	};
};
/**
* A readable store whose value contains page data.
*
* On the server, this store can only be subscribed to during component initialization. In the browser, it can be subscribed to at any time.
*
* @deprecated Use `page` from `$app/state` instead (requires Svelte 5, [see docs for more info](https://svelte.dev/docs/kit/migrating-to-sveltekit-2#SvelteKit-2.12:-$app-stores-deprecated))
* @type {import('svelte/store').Readable<import('@sveltejs/kit').Page>}
*/
var page = { subscribe(fn) {
	return getStores().page.subscribe(fn);
} };
//#endregion
//#region src/lib/components/Header.svelte
function Header($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		var $$store_subs;
		const navItems = [
			{
				path: "/",
				labelKey: "nav.home"
			},
			{
				path: "/carbon",
				labelKey: "nav.carbon"
			},
			{
				path: "/project",
				labelKey: "nav.project"
			},
			{
				path: "/calculator",
				labelKey: "nav.calculator"
			},
			{
				path: "/international",
				labelKey: "nav.international"
			},
			{
				path: "/about",
				labelKey: "nav.about"
			}
		];
		$$renderer.push(`<nav class="header svelte-1elxaub"><div class="header-container svelte-1elxaub"><a href="/" class="logo svelte-1elxaub"><div class="logo-icon svelte-1elxaub">🌿</div> <div class="logo-text svelte-1elxaub"><h1 class="svelte-1elxaub">${escape_html(store_get($$store_subs ??= {}, "$t", t)("header.brandName"))}</h1> <p class="svelte-1elxaub">${escape_html(store_get($$store_subs ??= {}, "$t", t)("header.brandDesc"))}</p></div></a> <ul class="nav-menu svelte-1elxaub"><!--[-->`);
		const each_array = ensure_array_like(navItems);
		for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
			let item = each_array[$$index];
			$$renderer.push(`<li><a${attr("href", item.path)}${attr_class("svelte-1elxaub", void 0, { "active": store_get($$store_subs ??= {}, "$page", page).url.pathname === item.path })}>${escape_html(store_get($$store_subs ??= {}, "$t", t)(item.labelKey))}</a></li>`);
		}
		$$renderer.push(`<!--]--></ul> <div class="header-actions svelte-1elxaub"><button class="lang-btn svelte-1elxaub">${escape_html(store_get($$store_subs ??= {}, "$locale", locale) === "zh" ? "EN" : "中文")}</button> <button class="contact-btn svelte-1elxaub" data-modal-trigger="contact">${escape_html(store_get($$store_subs ??= {}, "$t", t)("common.contactHotline"))}</button></div> <button class="hamburger svelte-1elxaub" aria-label="菜单"><span class="svelte-1elxaub"></span> <span class="svelte-1elxaub"></span> <span class="svelte-1elxaub"></span></button></div> `);
		$$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--></nav>`);
		if ($$store_subs) unsubscribe_stores($$store_subs);
	});
}
//#endregion
//#region src/lib/components/Footer.svelte
function Footer($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		var $$store_subs;
		const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
		$$renderer.push(`<footer class="footer svelte-jz8lnl"><div class="footer-container svelte-jz8lnl"><div class="footer-content svelte-jz8lnl"><div class="footer-section brand svelte-jz8lnl"><div class="brand-logo svelte-jz8lnl"><span class="logo-icon svelte-jz8lnl">🌿</span> <h3 class="svelte-jz8lnl">黔绿融通</h3></div> <p class="brand-desc svelte-jz8lnl">${escape_html(store_get($$store_subs ??= {}, "$t", t)("footer.brandDesc1"))}</p> <p class="brand-desc svelte-jz8lnl">${escape_html(store_get($$store_subs ??= {}, "$t", t)("footer.brandDesc2"))}</p> <p class="brand-desc svelte-jz8lnl">${escape_html(store_get($$store_subs ??= {}, "$t", t)("footer.brandDesc3"))}</p> <div class="social-links svelte-jz8lnl"><a href="/" class="social-btn svelte-jz8lnl" title="微信">💬</a> <a href="/" class="social-btn svelte-jz8lnl" title="微博">📱</a> <a href="/" class="social-btn svelte-jz8lnl" title="邮箱">✉️</a></div></div> <div class="footer-section svelte-jz8lnl"><h4 class="svelte-jz8lnl"><span class="section-icon svelte-jz8lnl">🔗</span> ${escape_html(store_get($$store_subs ??= {}, "$t", t)("footer.quickLinks"))}</h4> <ul class="svelte-jz8lnl"><li class="svelte-jz8lnl"><a href="/" class="svelte-jz8lnl">${escape_html(store_get($$store_subs ??= {}, "$t", t)("nav.home"))}</a></li> <li class="svelte-jz8lnl"><a href="/carbon" class="svelte-jz8lnl">${escape_html(store_get($$store_subs ??= {}, "$t", t)("nav.carbon"))}</a></li> <li class="svelte-jz8lnl"><a href="/products" class="svelte-jz8lnl">${escape_html(store_get($$store_subs ??= {}, "$t", t)("nav.products"))}</a></li> <li class="svelte-jz8lnl"><a href="/project" class="svelte-jz8lnl">${escape_html(store_get($$store_subs ??= {}, "$t", t)("nav.project"))}</a></li> <li class="svelte-jz8lnl"><a href="/international" class="svelte-jz8lnl">${escape_html(store_get($$store_subs ??= {}, "$t", t)("nav.international"))}</a></li></ul></div> <div class="footer-section svelte-jz8lnl"><h4 class="svelte-jz8lnl"><span class="section-icon svelte-jz8lnl">🛠️</span> ${escape_html(store_get($$store_subs ??= {}, "$t", t)("footer.services"))}</h4> <ul class="svelte-jz8lnl"><li class="svelte-jz8lnl"><a href="/carbon" class="svelte-jz8lnl">${escape_html(store_get($$store_subs ??= {}, "$t", t)("nav.carbon"))}</a></li> <li class="svelte-jz8lnl"><a href="/products" class="svelte-jz8lnl">${escape_html(store_get($$store_subs ??= {}, "$t", t)("nav.products"))}</a></li> <li class="svelte-jz8lnl"><a href="/project" class="svelte-jz8lnl">${escape_html(store_get($$store_subs ??= {}, "$t", t)("nav.project"))}</a></li> <li class="svelte-jz8lnl"><a href="/calculator" class="svelte-jz8lnl">${escape_html(store_get($$store_subs ??= {}, "$t", t)("nav.calculator"))}</a></li> <li class="svelte-jz8lnl"><a href="/about" class="svelte-jz8lnl">ESG ${escape_html(store_get($$store_subs ??= {}, "$t", t)("aboutServices.esgService"))}</a></li></ul></div> <div class="footer-section contact svelte-jz8lnl"><h4 class="svelte-jz8lnl"><span class="section-icon svelte-jz8lnl">📞</span> ${escape_html(store_get($$store_subs ??= {}, "$t", t)("footer.contactUs"))}</h4> <div class="contact-item svelte-jz8lnl"><span class="contact-icon svelte-jz8lnl">📞</span> <div class="svelte-jz8lnl"><span class="contact-label svelte-jz8lnl">${escape_html(store_get($$store_subs ??= {}, "$t", t)("footer.hotline"))}</span> <span class="contact-value svelte-jz8lnl">400-888-8888</span></div></div> <div class="contact-item svelte-jz8lnl"><span class="contact-icon svelte-jz8lnl">✉️</span> <div class="svelte-jz8lnl"><span class="contact-label svelte-jz8lnl">${escape_html(store_get($$store_subs ??= {}, "$t", t)("footer.email"))}</span> <span class="contact-value svelte-jz8lnl">contact@qianlvtong.com</span></div></div> <div class="contact-item svelte-jz8lnl"><span class="contact-icon svelte-jz8lnl">📍</span> <div class="svelte-jz8lnl"><span class="contact-label svelte-jz8lnl">${escape_html(store_get($$store_subs ??= {}, "$t", t)("footer.address"))}</span> <span class="contact-value svelte-jz8lnl">贵州省贵阳市观山湖区金融城</span></div></div> <div class="contact-item svelte-jz8lnl"><span class="contact-icon svelte-jz8lnl">🕐</span> <div class="svelte-jz8lnl"><span class="contact-label svelte-jz8lnl">${escape_html(store_get($$store_subs ??= {}, "$t", t)("footer.workTime"))}</span> <span class="contact-value svelte-jz8lnl">${escape_html(store_get($$store_subs ??= {}, "$t", t)("footer.workSchedule"))}</span></div></div></div></div> <div class="footer-bottom svelte-jz8lnl"><div class="footer-logo-small svelte-jz8lnl"><span>🌿</span> <span>黔绿融通</span></div> <p class="svelte-jz8lnl">© ${escape_html(currentYear)} 贵州省绿色金融综合服务平台 | 黔ICP备XXXXXXXX号</p> <p class="footer-credit svelte-jz8lnl">${escape_html(store_get($$store_subs ??= {}, "$t", t)("footer.copyright"))}</p></div></div></footer>`);
		if ($$store_subs) unsubscribe_stores($$store_subs);
	});
}
//#endregion
//#region src/lib/components/ContactModal.svelte
function ContactModal($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		$$renderer.push(`<div${attr_class("modal-overlay svelte-1btwglb", void 0, { "show": false })} role="dialog" aria-modal="true"><div class="modal-content svelte-1btwglb"><button class="modal-close svelte-1btwglb" aria-label="关闭">×</button> <h2 class="modal-title svelte-1btwglb">联系我们</h2> <div class="contact-info svelte-1btwglb"><div class="info-item svelte-1btwglb"><strong class="svelte-1btwglb">服务热线：</strong>400-888-8888</div> <div class="info-item svelte-1btwglb"><strong class="svelte-1btwglb">咨询邮箱：</strong>contact@qianlvtong.com</div> <div class="info-item svelte-1btwglb"><strong class="svelte-1btwglb">公司地址：</strong>贵州省贵阳市观山湖区金融城</div> <div class="info-item svelte-1btwglb"><strong class="svelte-1btwglb">工作时间：</strong>周一至周五 9:00-18:00</div> <p class="tips svelte-1btwglb">感谢您对黔绿融通的关注！我们将竭诚为您提供绿色金融服务。</p></div> <div class="modal-footer svelte-1btwglb"><button class="btn btn-primary svelte-1btwglb">关闭</button></div></div></div>`);
	});
}
//#endregion
//#region src/lib/components/ApplyModal.svelte
function ApplyModal($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let isVisible = false;
		let isSubmitting = false;
		let submitResult = null;
		let formData = {
			companyName: "",
			creditCode: "",
			legalPerson: "",
			legalPhone: "",
			contactPerson: "",
			contactPhone: "",
			city: "",
			loanAmount: "",
			loanPurpose: "",
			loanTerm: "",
			guaranteeType: "",
			greenProject: "",
			remark: ""
		};
		let errors = {};
		$$renderer.push(`<div${attr_class("modal-overlay svelte-j4akgf", void 0, { "show": isVisible })} role="dialog" aria-modal="true"><div class="modal-content svelte-j4akgf"><button class="modal-close svelte-j4akgf" aria-label="关闭">×</button> `);
		if (submitResult?.success) {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<div class="success-container svelte-j4akgf"><div class="success-icon svelte-j4akgf">✓</div> <h2 class="success-title svelte-j4akgf">申请提交成功！</h2> <div class="success-info svelte-j4akgf"><p class="svelte-j4akgf">申请编号：<strong>${escape_html(submitResult.applicationId)}</strong></p> <p class="svelte-j4akgf">预计审核时间：${escape_html(submitResult.message)}</p></div> <div class="success-tips svelte-j4akgf"><h4 class="svelte-j4akgf">后续步骤：</h4> <ul class="svelte-j4akgf"><li class="svelte-j4akgf">平台将在1-3个工作日内审核您的申请</li> <li class="svelte-j4akgf">审核通过后，专业顾问将与您联系</li> <li class="svelte-j4akgf">如有疑问可拨打服务热线：400-888-8888</li></ul></div> <button class="btn btn-submit svelte-j4akgf">我知道了</button></div>`);
		} else {
			$$renderer.push("<!--[-1-->");
			$$renderer.push(`<h2 class="modal-title svelte-j4akgf">填写贷款申请表</h2> `);
			if (submitResult?.success === false) {
				$$renderer.push("<!--[0-->");
				$$renderer.push(`<div class="error-banner svelte-j4akgf">${escape_html(submitResult.message)}</div>`);
			} else $$renderer.push("<!--[-1-->");
			$$renderer.push(`<!--]--> `);
			$$renderer.push("<!--[-1-->");
			$$renderer.push(`<!--]--> <form class="apply-form svelte-j4akgf"><div class="form-section svelte-j4akgf"><h3 class="section-title svelte-j4akgf">企业基本信息</h3> <div class="form-row svelte-j4akgf"><div class="form-group svelte-j4akgf"><label class="svelte-j4akgf">企业名称 <span class="required svelte-j4akgf">*</span></label> <input type="text"${attr("value", formData.companyName)} placeholder="请输入企业全称"${attr_class("svelte-j4akgf", void 0, { "error": errors.companyName })}/> `);
			if (errors.companyName) {
				$$renderer.push("<!--[0-->");
				$$renderer.push(`<span class="error-msg svelte-j4akgf">${escape_html(errors.companyName)}</span>`);
			} else $$renderer.push("<!--[-1-->");
			$$renderer.push(`<!--]--></div> <div class="form-group svelte-j4akgf"><label class="svelte-j4akgf">统一社会信用代码 <span class="required svelte-j4akgf">*</span></label> <input type="text"${attr("value", formData.creditCode)} placeholder="18位代码"${attr_class("svelte-j4akgf", void 0, { "error": errors.creditCode })}/> `);
			if (errors.creditCode) {
				$$renderer.push("<!--[0-->");
				$$renderer.push(`<span class="error-msg svelte-j4akgf">${escape_html(errors.creditCode)}</span>`);
			} else $$renderer.push("<!--[-1-->");
			$$renderer.push(`<!--]--></div></div> <div class="form-group full-width svelte-j4akgf"><label class="svelte-j4akgf">企业所在地 <span class="required svelte-j4akgf">*</span></label> `);
			$$renderer.select({
				value: formData.city,
				class: ""
			}, ($$renderer) => {
				$$renderer.option({ value: "" }, ($$renderer) => {
					$$renderer.push(`请选择地市`);
				});
				$$renderer.option({ value: "贵阳市" }, ($$renderer) => {
					$$renderer.push(`贵阳市`);
				});
				$$renderer.option({ value: "遵义市" }, ($$renderer) => {
					$$renderer.push(`遵义市`);
				});
				$$renderer.option({ value: "安顺市" }, ($$renderer) => {
					$$renderer.push(`安顺市`);
				});
				$$renderer.option({ value: "毕节市" }, ($$renderer) => {
					$$renderer.push(`毕节市`);
				});
				$$renderer.option({ value: "铜仁市" }, ($$renderer) => {
					$$renderer.push(`铜仁市`);
				});
				$$renderer.option({ value: "六盘水市" }, ($$renderer) => {
					$$renderer.push(`六盘水市`);
				});
				$$renderer.option({ value: "黔东南州" }, ($$renderer) => {
					$$renderer.push(`黔东南州`);
				});
				$$renderer.option({ value: "黔南州" }, ($$renderer) => {
					$$renderer.push(`黔南州`);
				});
				$$renderer.option({ value: "黔西南州" }, ($$renderer) => {
					$$renderer.push(`黔西南州`);
				});
			}, "svelte-j4akgf", { error: errors.city });
			$$renderer.push(` `);
			if (errors.city) {
				$$renderer.push("<!--[0-->");
				$$renderer.push(`<span class="error-msg svelte-j4akgf">${escape_html(errors.city)}</span>`);
			} else $$renderer.push("<!--[-1-->");
			$$renderer.push(`<!--]--></div></div> <div class="form-section svelte-j4akgf"><h3 class="section-title svelte-j4akgf">联系方式</h3> <div class="form-row svelte-j4akgf"><div class="form-group svelte-j4akgf"><label class="svelte-j4akgf">法定代表人 <span class="required svelte-j4akgf">*</span></label> <input type="text"${attr("value", formData.legalPerson)} placeholder="请输入法人姓名"${attr_class("svelte-j4akgf", void 0, { "error": errors.legalPerson })}/> `);
			if (errors.legalPerson) {
				$$renderer.push("<!--[0-->");
				$$renderer.push(`<span class="error-msg svelte-j4akgf">${escape_html(errors.legalPerson)}</span>`);
			} else $$renderer.push("<!--[-1-->");
			$$renderer.push(`<!--]--></div> <div class="form-group svelte-j4akgf"><label class="svelte-j4akgf">法人手机号 <span class="required svelte-j4akgf">*</span></label> <input type="tel"${attr("value", formData.legalPhone)} placeholder="请输入手机号码"${attr_class("svelte-j4akgf", void 0, { "error": errors.legalPhone })}/> `);
			if (errors.legalPhone) {
				$$renderer.push("<!--[0-->");
				$$renderer.push(`<span class="error-msg svelte-j4akgf">${escape_html(errors.legalPhone)}</span>`);
			} else $$renderer.push("<!--[-1-->");
			$$renderer.push(`<!--]--></div></div> <div class="form-row svelte-j4akgf"><div class="form-group svelte-j4akgf"><label class="svelte-j4akgf">联系人</label> <input type="text"${attr("value", formData.contactPerson)} placeholder="请输入联系人姓名（选填）" class="svelte-j4akgf"/></div> <div class="form-group svelte-j4akgf"><label class="svelte-j4akgf">联系人手机号</label> <input type="tel"${attr("value", formData.contactPhone)} placeholder="请输入手机号码（选填）"${attr_class("svelte-j4akgf", void 0, { "error": errors.contactPhone })}/> `);
			if (errors.contactPhone) {
				$$renderer.push("<!--[0-->");
				$$renderer.push(`<span class="error-msg svelte-j4akgf">${escape_html(errors.contactPhone)}</span>`);
			} else $$renderer.push("<!--[-1-->");
			$$renderer.push(`<!--]--></div></div></div> <div class="form-section svelte-j4akgf"><h3 class="section-title svelte-j4akgf">贷款需求</h3> <div class="form-row svelte-j4akgf"><div class="form-group svelte-j4akgf"><label class="svelte-j4akgf">意向贷款金额(万元) <span class="required svelte-j4akgf">*</span></label> <input type="number"${attr("value", formData.loanAmount)} placeholder="请输入金额"${attr_class("svelte-j4akgf", void 0, { "error": errors.loanAmount })}/> `);
			if (errors.loanAmount) {
				$$renderer.push("<!--[0-->");
				$$renderer.push(`<span class="error-msg svelte-j4akgf">${escape_html(errors.loanAmount)}</span>`);
			} else $$renderer.push("<!--[-1-->");
			$$renderer.push(`<!--]--></div> <div class="form-group svelte-j4akgf"><label class="svelte-j4akgf">贷款期限 <span class="required svelte-j4akgf">*</span></label> `);
			$$renderer.select({
				value: formData.loanTerm,
				class: ""
			}, ($$renderer) => {
				$$renderer.option({ value: "" }, ($$renderer) => {
					$$renderer.push(`请选择期限`);
				});
				$$renderer.option({ value: "6" }, ($$renderer) => {
					$$renderer.push(`6个月`);
				});
				$$renderer.option({ value: "12" }, ($$renderer) => {
					$$renderer.push(`1年`);
				});
				$$renderer.option({ value: "24" }, ($$renderer) => {
					$$renderer.push(`2年`);
				});
				$$renderer.option({ value: "36" }, ($$renderer) => {
					$$renderer.push(`3年`);
				});
				$$renderer.option({ value: "60" }, ($$renderer) => {
					$$renderer.push(`5年`);
				});
			}, "svelte-j4akgf", { error: errors.loanTerm });
			$$renderer.push(` `);
			if (errors.loanTerm) {
				$$renderer.push("<!--[0-->");
				$$renderer.push(`<span class="error-msg svelte-j4akgf">${escape_html(errors.loanTerm)}</span>`);
			} else $$renderer.push("<!--[-1-->");
			$$renderer.push(`<!--]--></div></div> <div class="form-row svelte-j4akgf"><div class="form-group svelte-j4akgf"><label class="svelte-j4akgf">贷款用途 <span class="required svelte-j4akgf">*</span></label> `);
			$$renderer.select({
				value: formData.loanPurpose,
				class: ""
			}, ($$renderer) => {
				$$renderer.option({ value: "" }, ($$renderer) => {
					$$renderer.push(`请选择用途`);
				});
				$$renderer.option({ value: "设备更新" }, ($$renderer) => {
					$$renderer.push(`设备更新改造`);
				});
				$$renderer.option({ value: "节能改造" }, ($$renderer) => {
					$$renderer.push(`节能降碳改造`);
				});
				$$renderer.option({ value: "新能源" }, ($$renderer) => {
					$$renderer.push(`新能源项目`);
				});
				$$renderer.option({ value: "环保设施" }, ($$renderer) => {
					$$renderer.push(`环保设施升级`);
				});
				$$renderer.option({ value: "资源循环" }, ($$renderer) => {
					$$renderer.push(`资源循环利用`);
				});
				$$renderer.option({ value: "其他" }, ($$renderer) => {
					$$renderer.push(`其他绿色项目`);
				});
			}, "svelte-j4akgf", { error: errors.loanPurpose });
			$$renderer.push(` `);
			if (errors.loanPurpose) {
				$$renderer.push("<!--[0-->");
				$$renderer.push(`<span class="error-msg svelte-j4akgf">${escape_html(errors.loanPurpose)}</span>`);
			} else $$renderer.push("<!--[-1-->");
			$$renderer.push(`<!--]--></div> <div class="form-group svelte-j4akgf"><label class="svelte-j4akgf">担保方式</label> `);
			$$renderer.select({
				value: formData.guaranteeType,
				class: ""
			}, ($$renderer) => {
				$$renderer.option({ value: "" }, ($$renderer) => {
					$$renderer.push(`请选择担保方式`);
				});
				$$renderer.option({ value: "信用" }, ($$renderer) => {
					$$renderer.push(`信用贷款`);
				});
				$$renderer.option({ value: "抵押" }, ($$renderer) => {
					$$renderer.push(`房产抵押`);
				});
				$$renderer.option({ value: "质押" }, ($$renderer) => {
					$$renderer.push(`设备质押`);
				});
				$$renderer.option({ value: "担保" }, ($$renderer) => {
					$$renderer.push(`担保公司担保`);
				});
			}, "svelte-j4akgf");
			$$renderer.push(`</div></div></div> <div class="form-section svelte-j4akgf"><h3 class="section-title svelte-j4akgf">项目信息 <span class="section-hint svelte-j4akgf">（选填）</span></h3> <div class="form-group full-width svelte-j4akgf"><label class="svelte-j4akgf">绿色项目类型</label> `);
			$$renderer.select({
				value: formData.greenProject,
				class: ""
			}, ($$renderer) => {
				$$renderer.option({ value: "" }, ($$renderer) => {
					$$renderer.push(`请选择项目类型`);
				});
				$$renderer.option({ value: "工业节能" }, ($$renderer) => {
					$$renderer.push(`工业节能项目`);
				});
				$$renderer.option({ value: "建筑节能" }, ($$renderer) => {
					$$renderer.push(`建筑节能项目`);
				});
				$$renderer.option({ value: "清洁生产" }, ($$renderer) => {
					$$renderer.push(`清洁生产项目`);
				});
				$$renderer.option({ value: "资源循环" }, ($$renderer) => {
					$$renderer.push(`资源循环利用项目`);
				});
				$$renderer.option({ value: "新能源" }, ($$renderer) => {
					$$renderer.push(`新能源项目`);
				});
				$$renderer.option({ value: "生态保护" }, ($$renderer) => {
					$$renderer.push(`生态保护项目`);
				});
				$$renderer.option({ value: "污染防治" }, ($$renderer) => {
					$$renderer.push(`污染防治项目`);
				});
			}, "svelte-j4akgf");
			$$renderer.push(`</div> <div class="form-group full-width svelte-j4akgf"><label class="svelte-j4akgf">补充说明</label> <textarea placeholder="请简要描述项目情况、预期效益等（选填）" rows="3" class="svelte-j4akgf">`);
			const $$body = escape_html(formData.remark);
			if ($$body) $$renderer.push(`${$$body}`);
			$$renderer.push(`</textarea></div></div> <div class="form-actions svelte-j4akgf"><button type="button" class="btn btn-cancel svelte-j4akgf"${attr("disabled", isSubmitting, true)}>取消</button> <button type="submit" class="btn btn-submit svelte-j4akgf"${attr("disabled", isSubmitting, true)}>${escape_html("提交申请")}</button></div></form>`);
		}
		$$renderer.push(`<!--]--></div></div>`);
	});
}
//#endregion
//#region src/routes/+layout.svelte
function _layout($$renderer, $$props) {
	let { children } = $$props;
	Header($$renderer, {});
	$$renderer.push(`<!----> <main class="svelte-12qhfyh">`);
	children($$renderer);
	$$renderer.push(`<!----></main> `);
	Footer($$renderer, {});
	$$renderer.push(`<!----> `);
	ContactModal($$renderer, {});
	$$renderer.push(`<!----> `);
	ApplyModal($$renderer, {});
	$$renderer.push(`<!---->`);
}
//#endregion
export { _layout as default };
