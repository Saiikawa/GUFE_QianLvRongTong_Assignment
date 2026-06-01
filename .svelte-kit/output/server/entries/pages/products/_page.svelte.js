import { U as escape_html, a as ensure_array_like, c as store_get, o as head, u as unsubscribe_stores } from "../../../chunks/dev.js";
import { n as t } from "../../../chunks/i18n.js";
import { n as productsData, r as ProductCard } from "../../../chunks/products.js";
//#region src/routes/products/+page.svelte
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		var $$store_subs;
		head("1dj9mz1", $$renderer, ($$renderer) => {
			$$renderer.title(($$renderer) => {
				$$renderer.push(`<title>${escape_html(store_get($$store_subs ??= {}, "$t", t)("pageTitles.products"))}</title>`);
			});
		});
		$$renderer.push(`<div class="container svelte-1dj9mz1"><div class="page-title svelte-1dj9mz1"><h1 class="svelte-1dj9mz1">${escape_html(store_get($$store_subs ??= {}, "$t", t)("productsPage.title"))}</h1> <p class="svelte-1dj9mz1">${escape_html(store_get($$store_subs ??= {}, "$t", t)("productsPage.subtitle"))}</p></div> <div class="products-list svelte-1dj9mz1"><!--[-->`);
		const each_array = ensure_array_like(productsData);
		for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
			let product = each_array[$$index];
			ProductCard($$renderer, { product });
		}
		$$renderer.push(`<!--]--></div></div>`);
		if ($$store_subs) unsubscribe_stores($$store_subs);
	});
}
//#endregion
export { _page as default };
