import { U as escape_html, V as attr, a as ensure_array_like, c as store_get, i as derived, n as attr_class, o as head, u as unsubscribe_stores } from "../../../chunks/dev.js";
import { n as t } from "../../../chunks/i18n.js";
import { r as ProductCard, t as carbonProductsData } from "../../../chunks/products.js";
//#region src/routes/carbon/+page.svelte
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		var $$store_subs;
		let filterAmount = "";
		let filterTerm = "";
		let filterRate = "";
		let filterCity = "";
		let filterGuarantee = "";
		let currentPage = 1;
		const pageSize = 5;
		let filteredProducts = derived(() => {
			return carbonProductsData.filter((product) => {
				return true;
			});
		});
		let paginatedProducts = derived(() => {
			const start = (currentPage - 1) * pageSize;
			const end = start + pageSize;
			return filteredProducts().slice(start, end);
		});
		let totalPages = derived(() => Math.ceil(filteredProducts().length / pageSize));
		head("slsu7m", $$renderer, ($$renderer) => {
			$$renderer.title(($$renderer) => {
				$$renderer.push(`<title>${escape_html(store_get($$store_subs ??= {}, "$t", t)("pageTitles.carbon"))}</title>`);
			});
		});
		$$renderer.push(`<div class="container svelte-slsu7m"><div class="page-title svelte-slsu7m"><h1 class="svelte-slsu7m">${escape_html(store_get($$store_subs ??= {}, "$t", t)("carbonPage.title"))}</h1> <p class="svelte-slsu7m">${escape_html(store_get($$store_subs ??= {}, "$t", t)("carbonPage.subtitle"))}</p></div> <div class="filter-section svelte-slsu7m"><div class="filter-row svelte-slsu7m"><div class="filter-item svelte-slsu7m"><label class="svelte-slsu7m">${escape_html(store_get($$store_subs ??= {}, "$t", t)("carbonPage.loanAmount"))}</label> `);
		$$renderer.select({
			value: filterAmount,
			class: ""
		}, ($$renderer) => {
			$$renderer.option({ value: "" }, ($$renderer) => {
				$$renderer.push(`${escape_html(store_get($$store_subs ??= {}, "$t", t)("carbonPage.unlimited"))}`);
			});
			$$renderer.option({ value: "0-100" }, ($$renderer) => {
				$$renderer.push(`${escape_html(store_get($$store_subs ??= {}, "$t", t)("carbonPage.lessThan100"))}`);
			});
			$$renderer.option({ value: "100-500" }, ($$renderer) => {
				$$renderer.push(`${escape_html(store_get($$store_subs ??= {}, "$t", t)("carbonPage.range100to500"))}`);
			});
			$$renderer.option({ value: "500-1000" }, ($$renderer) => {
				$$renderer.push(`${escape_html(store_get($$store_subs ??= {}, "$t", t)("carbonPage.range500to1000"))}`);
			});
			$$renderer.option({ value: "1000-9999" }, ($$renderer) => {
				$$renderer.push(`${escape_html(store_get($$store_subs ??= {}, "$t", t)("carbonPage.moreThan1000"))}`);
			});
		}, "svelte-slsu7m");
		$$renderer.push(`</div> <div class="filter-item svelte-slsu7m"><label class="svelte-slsu7m">${escape_html(store_get($$store_subs ??= {}, "$t", t)("carbonPage.loanTerm"))}</label> `);
		$$renderer.select({
			value: filterTerm,
			class: ""
		}, ($$renderer) => {
			$$renderer.option({ value: "" }, ($$renderer) => {
				$$renderer.push(`${escape_html(store_get($$store_subs ??= {}, "$t", t)("carbonPage.unlimited"))}`);
			});
			$$renderer.option({ value: "0-12" }, ($$renderer) => {
				$$renderer.push(`${escape_html(store_get($$store_subs ??= {}, "$t", t)("carbonPage.within12Months"))}`);
			});
			$$renderer.option({ value: "12-36" }, ($$renderer) => {
				$$renderer.push(`${escape_html(store_get($$store_subs ??= {}, "$t", t)("carbonPage.range12to36"))}`);
			});
			$$renderer.option({ value: "36-999" }, ($$renderer) => {
				$$renderer.push(`${escape_html(store_get($$store_subs ??= {}, "$t", t)("carbonPage.moreThan36"))}`);
			});
		}, "svelte-slsu7m");
		$$renderer.push(`</div> <div class="filter-item svelte-slsu7m"><label class="svelte-slsu7m">${escape_html(store_get($$store_subs ??= {}, "$t", t)("carbonPage.loanRate"))}</label> `);
		$$renderer.select({
			value: filterRate,
			class: ""
		}, ($$renderer) => {
			$$renderer.option({ value: "" }, ($$renderer) => {
				$$renderer.push(`${escape_html(store_get($$store_subs ??= {}, "$t", t)("carbonPage.unlimited"))}`);
			});
			$$renderer.option({ value: "0-4" }, ($$renderer) => {
				$$renderer.push(`${escape_html(store_get($$store_subs ??= {}, "$t", t)("carbonPage.below4"))}`);
			});
			$$renderer.option({ value: "4-5" }, ($$renderer) => {
				$$renderer.push(`${escape_html(store_get($$store_subs ??= {}, "$t", t)("carbonPage.range4to5"))}`);
			});
			$$renderer.option({ value: "5-999" }, ($$renderer) => {
				$$renderer.push(`${escape_html(store_get($$store_subs ??= {}, "$t", t)("carbonPage.above5"))}`);
			});
		}, "svelte-slsu7m");
		$$renderer.push(`</div> <div class="filter-item svelte-slsu7m"><label class="svelte-slsu7m">${escape_html(store_get($$store_subs ??= {}, "$t", t)("carbonPage.applicableCity"))}</label> `);
		$$renderer.select({
			value: filterCity,
			class: ""
		}, ($$renderer) => {
			$$renderer.option({ value: "" }, ($$renderer) => {
				$$renderer.push(`${escape_html(store_get($$store_subs ??= {}, "$t", t)("carbonPage.unlimited"))}`);
			});
			$$renderer.option({ value: "贵阳" }, ($$renderer) => {
				$$renderer.push(`贵阳市`);
			});
			$$renderer.option({ value: "遵义" }, ($$renderer) => {
				$$renderer.push(`遵义市`);
			});
			$$renderer.option({ value: "六盘水" }, ($$renderer) => {
				$$renderer.push(`六盘水市`);
			});
			$$renderer.option({ value: "安顺" }, ($$renderer) => {
				$$renderer.push(`安顺市`);
			});
			$$renderer.option({ value: "毕节" }, ($$renderer) => {
				$$renderer.push(`毕节市`);
			});
			$$renderer.option({ value: "铜仁" }, ($$renderer) => {
				$$renderer.push(`铜仁市`);
			});
			$$renderer.option({ value: "黔西南" }, ($$renderer) => {
				$$renderer.push(`黔西南州`);
			});
			$$renderer.option({ value: "黔东南" }, ($$renderer) => {
				$$renderer.push(`黔东南州`);
			});
			$$renderer.option({ value: "黔南" }, ($$renderer) => {
				$$renderer.push(`黔南州`);
			});
		}, "svelte-slsu7m");
		$$renderer.push(`</div> <div class="filter-item svelte-slsu7m"><label class="svelte-slsu7m">${escape_html(store_get($$store_subs ??= {}, "$t", t)("carbonPage.guaranteeMethod"))}</label> `);
		$$renderer.select({
			value: filterGuarantee,
			class: ""
		}, ($$renderer) => {
			$$renderer.option({ value: "" }, ($$renderer) => {
				$$renderer.push(`${escape_html(store_get($$store_subs ??= {}, "$t", t)("carbonPage.unlimited"))}`);
			});
			$$renderer.option({ value: "信用" }, ($$renderer) => {
				$$renderer.push(`${escape_html(store_get($$store_subs ??= {}, "$t", t)("carbonPage.credit"))}`);
			});
			$$renderer.option({ value: "抵押" }, ($$renderer) => {
				$$renderer.push(`${escape_html(store_get($$store_subs ??= {}, "$t", t)("carbonPage.mortgage"))}`);
			});
			$$renderer.option({ value: "质押" }, ($$renderer) => {
				$$renderer.push(`${escape_html(store_get($$store_subs ??= {}, "$t", t)("carbonPage.pledge"))}`);
			});
			$$renderer.option({ value: "担保" }, ($$renderer) => {
				$$renderer.push(`${escape_html(store_get($$store_subs ??= {}, "$t", t)("carbonPage.guarantee"))}`);
			});
		}, "svelte-slsu7m");
		$$renderer.push(`</div></div> <div class="filter-actions svelte-slsu7m"><button class="filter-reset svelte-slsu7m">${escape_html(store_get($$store_subs ??= {}, "$t", t)("carbonPage.reset"))}</button> <button class="filter-search svelte-slsu7m">${escape_html(store_get($$store_subs ??= {}, "$t", t)("carbonPage.search"))}</button></div></div> <div class="product-list-header svelte-slsu7m"><span>${escape_html(store_get($$store_subs ??= {}, "$t", t)("carbonPage.totalProducts").replace("{count}", filteredProducts().length))}</span></div> <!--[-->`);
		const each_array = ensure_array_like(paginatedProducts());
		for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
			let product = each_array[$$index];
			ProductCard($$renderer, { product });
		}
		$$renderer.push(`<!--]--> `);
		if (filteredProducts().length === 0) {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<div class="empty-state svelte-slsu7m"><p>${escape_html(store_get($$store_subs ??= {}, "$t", t)("carbonPage.noResults"))}</p></div>`);
		} else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--> `);
		if (totalPages() > 1) {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<div class="pagination svelte-slsu7m"><button${attr("disabled", currentPage === 1, true)} class="svelte-slsu7m">${escape_html(store_get($$store_subs ??= {}, "$t", t)("carbonPage.prevPage"))}</button> <!--[-->`);
			const each_array_1 = ensure_array_like(Array(totalPages()));
			for (let i = 0, $$length = each_array_1.length; i < $$length; i++) {
				each_array_1[i];
				$$renderer.push(`<button${attr_class("svelte-slsu7m", void 0, { "active": currentPage === i + 1 })}>${escape_html(i + 1)}</button>`);
			}
			$$renderer.push(`<!--]--> <button${attr("disabled", currentPage === totalPages(), true)} class="svelte-slsu7m">${escape_html(store_get($$store_subs ??= {}, "$t", t)("carbonPage.nextPage"))}</button></div>`);
		} else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--></div>`);
		if ($$store_subs) unsubscribe_stores($$store_subs);
	});
}
//#endregion
export { _page as default };
