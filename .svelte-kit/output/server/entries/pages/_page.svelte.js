import "../../chunks/index-server.js";
import { U as escape_html, V as attr, a as ensure_array_like, c as store_get, l as stringify, n as attr_class, r as attr_style, u as unsubscribe_stores } from "../../chunks/dev.js";
import { n as t } from "../../chunks/i18n.js";
import { n as newsData, t as NewsItem } from "../../chunks/NewsItem.js";
import { n as productsData, r as ProductCard, t as carbonProductsData } from "../../chunks/products.js";
//#region src/lib/components/BannerSlider.svelte
function BannerSlider($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		var $$store_subs;
		let currentIndex = 0;
		const slides = [
			{
				titleKey: "banner.platform",
				subtitleKey: "banner.platformSub",
				image: "/image/微信图片_20260510160412_19_186.jpg",
				buttons: [{
					textKey: "banner.carbonProducts",
					route: "/carbon"
				}, {
					textKey: "banner.greenLoan",
					route: "/products"
				}]
			},
			{
				titleKey: "banner.credit",
				subtitleKey: "banner.creditSub",
				image: "/image/微信图片_20260510160839_23_186.jpg",
				buttons: [{
					textKey: "banner.learnMore",
					route: "/products"
				}, {
					textKey: "banner.loanCalculator",
					route: "/calculator"
				}]
			},
			{
				titleKey: "banner.carbon",
				subtitleKey: "banner.carbonSub",
				image: "/image/微信图片_20260510160856_25_186.png",
				buttons: [{
					textKey: "banner.carbonProducts",
					route: "/carbon"
				}, {
					textKey: "banner.contactNow",
					action: "contact"
				}]
			}
		];
		$$renderer.push(`<div class="banner-slider svelte-dka00l"><div class="banner-slides svelte-dka00l"><!--[-->`);
		const each_array = ensure_array_like(slides);
		for (let index = 0, $$length = each_array.length; index < $$length; index++) {
			let slide = each_array[index];
			$$renderer.push(`<div${attr_class("banner-slide svelte-dka00l", void 0, { "active": currentIndex === index })}${attr_style(`background-image: url('${stringify(slide.image)}'); background-size: cover; background-position: center;`)}><div class="banner-overlay svelte-dka00l"><div class="banner-content svelte-dka00l"><h1 class="svelte-dka00l">${escape_html(store_get($$store_subs ??= {}, "$t", t)(slide.titleKey))}</h1> <p class="svelte-dka00l">${escape_html(store_get($$store_subs ??= {}, "$t", t)(slide.subtitleKey))}</p> <div class="banner-btns svelte-dka00l"><!--[-->`);
			const each_array_1 = ensure_array_like(slide.buttons);
			for (let $$index = 0, $$length = each_array_1.length; $$index < $$length; $$index++) {
				let btn = each_array_1[$$index];
				if (btn.route) {
					$$renderer.push("<!--[0-->");
					$$renderer.push(`<a${attr("href", btn.route)}${attr_class("btn-primary", void 0, { "secondary": btn.route !== "/carbon" })}>${escape_html(store_get($$store_subs ??= {}, "$t", t)(btn.textKey))}</a>`);
				} else {
					$$renderer.push("<!--[-1-->");
					$$renderer.push(`<button class="btn-secondary" data-modal-trigger="contact">${escape_html(store_get($$store_subs ??= {}, "$t", t)(btn.textKey))}</button>`);
				}
				$$renderer.push(`<!--]-->`);
			}
			$$renderer.push(`<!--]--></div></div></div></div>`);
		}
		$$renderer.push(`<!--]--></div> <div class="banner-indicators svelte-dka00l"><!--[-->`);
		const each_array_2 = ensure_array_like(slides);
		for (let index = 0, $$length = each_array_2.length; index < $$length; index++) {
			each_array_2[index];
			$$renderer.push(`<button${attr_class("indicator svelte-dka00l", void 0, { "active": currentIndex === index })}${attr("aria-label", `跳转到第${stringify(index + 1)}张`)}></button>`);
		}
		$$renderer.push(`<!--]--></div> <button class="banner-arrow arrow-left svelte-dka00l" aria-label="上一张">‹</button> <button class="banner-arrow arrow-right svelte-dka00l" aria-label="下一张">›</button></div>`);
		if ($$store_subs) unsubscribe_stores($$store_subs);
	});
}
//#endregion
//#region src/routes/+page.svelte
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		var $$store_subs;
		let amount = "";
		let term = 60;
		let rate = 3.5;
		const quickEntries = [
			{
				icon: "🌿",
				titleKey: "quickEntry.carbonProducts",
				descKey: "quickEntry.carbonDesc",
				route: "/carbon"
			},
			{
				icon: "📋",
				titleKey: "quickEntry.projectDeclare",
				descKey: "quickEntry.projectDesc",
				route: "/project"
			},
			{
				icon: "📊",
				titleKey: "quickEntry.esg",
				descKey: "quickEntry.esgDesc",
				route: "/about"
			}
		];
		const serviceItems = [
			{
				icon: "🔍",
				titleKey: "services.diagnosis",
				descKey: "services.diagnosisDesc"
			},
			{
				icon: "📋",
				titleKey: "services.materials",
				descKey: "services.materialsDesc"
			},
			{
				icon: "✓",
				titleKey: "services.verification",
				descKey: "services.verificationDesc"
			},
			{
				icon: "🏦",
				titleKey: "services.matching",
				descKey: "services.matchingDesc"
			}
		];
		const latestNews = newsData.slice(0, 5);
		const latestCarbonProducts = carbonProductsData.slice(0, 2);
		const latestProducts = productsData.slice(0, 2);
		BannerSlider($$renderer, {});
		$$renderer.push(`<!----> <div class="main-container svelte-1uha8ag"><div class="quick-entry svelte-1uha8ag"><!--[-->`);
		const each_array = ensure_array_like(quickEntries);
		for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
			let entry = each_array[$$index];
			$$renderer.push(`<a${attr("href", entry.route)} class="quick-item svelte-1uha8ag"><div class="quick-icon svelte-1uha8ag">${escape_html(entry.icon)}</div> <div class="quick-text svelte-1uha8ag"><h3 class="svelte-1uha8ag">${escape_html(store_get($$store_subs ??= {}, "$t", t)(entry.titleKey))}</h3> <p class="svelte-1uha8ag">${escape_html(store_get($$store_subs ??= {}, "$t", t)(entry.descKey))}</p></div></a>`);
		}
		$$renderer.push(`<!--]--></div> <div class="news-section svelte-1uha8ag"><div class="news-list svelte-1uha8ag"><div class="news-header svelte-1uha8ag"><h2 class="svelte-1uha8ag">${escape_html(store_get($$store_subs ??= {}, "$t", t)("products.platformNews"))}</h2> <a href="/news" class="more-link svelte-1uha8ag">${escape_html(store_get($$store_subs ??= {}, "$t", t)("products.viewMore"))}</a></div> <!--[-->`);
		const each_array_1 = ensure_array_like(latestNews);
		for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
			let news = each_array_1[$$index_1];
			NewsItem($$renderer, {
				news,
				compact: true
			});
		}
		$$renderer.push(`<!--]--></div> <div class="calculator-section svelte-1uha8ag"><h2 class="svelte-1uha8ag">🏦 ${escape_html(store_get($$store_subs ??= {}, "$t", t)("calculator.title"))}</h2> <div class="form-group svelte-1uha8ag"><label class="svelte-1uha8ag">${escape_html(store_get($$store_subs ??= {}, "$t", t)("calculator.amount"))}</label> <input type="number"${attr("value", amount)}${attr("placeholder", store_get($$store_subs ??= {}, "$t", t)("calculator.amountPlaceholder"))} min="1" max="5000" class="svelte-1uha8ag"/></div> <div class="form-group svelte-1uha8ag"><label class="svelte-1uha8ag">${escape_html(store_get($$store_subs ??= {}, "$t", t)("calculator.term"))}</label> `);
		$$renderer.select({
			value: term,
			class: ""
		}, ($$renderer) => {
			$$renderer.option({ value: 12 }, ($$renderer) => {
				$$renderer.push(`12${escape_html(store_get($$store_subs ??= {}, "$t", t)("calculator.month"))}`);
			});
			$$renderer.option({ value: 24 }, ($$renderer) => {
				$$renderer.push(`24${escape_html(store_get($$store_subs ??= {}, "$t", t)("calculator.month"))}`);
			});
			$$renderer.option({ value: 36 }, ($$renderer) => {
				$$renderer.push(`36${escape_html(store_get($$store_subs ??= {}, "$t", t)("calculator.month"))}`);
			});
			$$renderer.option({ value: 48 }, ($$renderer) => {
				$$renderer.push(`48${escape_html(store_get($$store_subs ??= {}, "$t", t)("calculator.month"))}`);
			});
			$$renderer.option({ value: 60 }, ($$renderer) => {
				$$renderer.push(`60${escape_html(store_get($$store_subs ??= {}, "$t", t)("calculator.month"))}`);
			});
		}, "svelte-1uha8ag");
		$$renderer.push(`</div> <div class="form-group svelte-1uha8ag"><label class="svelte-1uha8ag">${escape_html(store_get($$store_subs ??= {}, "$t", t)("calculator.rate"))}</label> `);
		$$renderer.select({
			value: rate,
			class: ""
		}, ($$renderer) => {
			$$renderer.option({ value: 3.4 }, ($$renderer) => {
				$$renderer.push(`3.4%`);
			});
			$$renderer.option({ value: 3.45 }, ($$renderer) => {
				$$renderer.push(`3.45%`);
			});
			$$renderer.option({ value: 3.5 }, ($$renderer) => {
				$$renderer.push(`3.5%`);
			});
			$$renderer.option({ value: 3.6 }, ($$renderer) => {
				$$renderer.push(`3.6%`);
			});
			$$renderer.option({ value: 4.2 }, ($$renderer) => {
				$$renderer.push(`4.2%`);
			});
			$$renderer.option({ value: 4.35 }, ($$renderer) => {
				$$renderer.push(`4.35%`);
			});
			$$renderer.option({ value: 4.5 }, ($$renderer) => {
				$$renderer.push(`4.5%`);
			});
		}, "svelte-1uha8ag");
		$$renderer.push(`</div> <button class="calc-btn svelte-1uha8ag">${escape_html(store_get($$store_subs ??= {}, "$t", t)("calculator.calculate"))}</button> `);
		$$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--></div></div> <div class="section svelte-1uha8ag"><div class="section-header svelte-1uha8ag"><h2 class="svelte-1uha8ag">🌱 ${escape_html(store_get($$store_subs ??= {}, "$t", t)("products.carbonProducts"))}</h2> <a href="/carbon" class="more-btn svelte-1uha8ag">${escape_html(store_get($$store_subs ??= {}, "$t", t)("products.viewAllProducts"))}</a></div> <div class="products-grid svelte-1uha8ag"><!--[-->`);
		const each_array_2 = ensure_array_like(latestCarbonProducts);
		for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
			let product = each_array_2[$$index_2];
			ProductCard($$renderer, { product });
		}
		$$renderer.push(`<!--]--></div></div> <div class="section svelte-1uha8ag"><div class="section-header svelte-1uha8ag"><h2 class="svelte-1uha8ag">💰 ${escape_html(store_get($$store_subs ??= {}, "$t", t)("products.greenLoanProducts"))}</h2> <a href="/products" class="more-btn svelte-1uha8ag">${escape_html(store_get($$store_subs ??= {}, "$t", t)("products.viewAllProducts"))}</a></div> <div class="products-grid svelte-1uha8ag"><!--[-->`);
		const each_array_3 = ensure_array_like(latestProducts);
		for (let $$index_3 = 0, $$length = each_array_3.length; $$index_3 < $$length; $$index_3++) {
			let product = each_array_3[$$index_3];
			ProductCard($$renderer, { product });
		}
		$$renderer.push(`<!--]--></div></div> <div class="services-section svelte-1uha8ag"><h2 style="text-align: center; color: var(--primary); margin-bottom: 30px;">${escape_html(store_get($$store_subs ??= {}, "$t", t)("services.title"))}</h2> <div class="services-grid svelte-1uha8ag"><!--[-->`);
		const each_array_4 = ensure_array_like(serviceItems);
		for (let $$index_4 = 0, $$length = each_array_4.length; $$index_4 < $$length; $$index_4++) {
			let service = each_array_4[$$index_4];
			$$renderer.push(`<div class="service-card svelte-1uha8ag"><div class="service-icon svelte-1uha8ag">${escape_html(service.icon)}</div> <h3 class="svelte-1uha8ag">${escape_html(store_get($$store_subs ??= {}, "$t", t)(service.titleKey))}</h3> <p class="svelte-1uha8ag">${escape_html(store_get($$store_subs ??= {}, "$t", t)(service.descKey))}</p></div>`);
		}
		$$renderer.push(`<!--]--></div></div></div>`);
		if ($$store_subs) unsubscribe_stores($$store_subs);
	});
}
//#endregion
export { _page as default };
