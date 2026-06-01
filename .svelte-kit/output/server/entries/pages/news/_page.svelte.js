import { U as escape_html, a as ensure_array_like, c as store_get, i as derived, n as attr_class, o as head, u as unsubscribe_stores } from "../../../chunks/dev.js";
import { n as t } from "../../../chunks/i18n.js";
import { n as newsData, t as NewsItem } from "../../../chunks/NewsItem.js";
//#region src/routes/news/+page.svelte
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		var $$store_subs;
		let selectedCategory = "all";
		let filteredNews = derived(() => {
			if (selectedCategory === "all") return newsData;
			return newsData.filter((n) => n.category === selectedCategory);
		});
		head("1gc460s", $$renderer, ($$renderer) => {
			$$renderer.title(($$renderer) => {
				$$renderer.push(`<title>${escape_html(store_get($$store_subs ??= {}, "$t", t)("newsPage.title"))} - 黔绿融通</title>`);
			});
		});
		$$renderer.push(`<div class="container svelte-1gc460s"><div class="news-content-grid svelte-1gc460s"><div class="news-sidebar svelte-1gc460s"><h3 class="svelte-1gc460s">${escape_html(store_get($$store_subs ??= {}, "$t", t)("newsPage.category"))}</h3> <ul class="news-category-list svelte-1gc460s"><li${attr_class("svelte-1gc460s", void 0, { "active": selectedCategory === "all" })}><span class="svelte-1gc460s">${escape_html(store_get($$store_subs ??= {}, "$t", t)("newsPage.all"))}</span></li> <li${attr_class("svelte-1gc460s", void 0, { "active": selectedCategory === "notice" })}><span class="svelte-1gc460s">${escape_html(store_get($$store_subs ??= {}, "$t", t)("newsPage.notice"))}</span></li> <li${attr_class("svelte-1gc460s", void 0, { "active": selectedCategory === "policy" })}><span class="svelte-1gc460s">${escape_html(store_get($$store_subs ??= {}, "$t", t)("newsPage.policy"))}</span></li> <li${attr_class("svelte-1gc460s", void 0, { "active": selectedCategory === "news" })}><span class="svelte-1gc460s">${escape_html(store_get($$store_subs ??= {}, "$t", t)("newsPage.news"))}</span></li></ul></div> <div class="news-list svelte-1gc460s">`);
		if (filteredNews().length > 0) {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<!--[-->`);
			const each_array = ensure_array_like(filteredNews());
			for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
				let news = each_array[$$index];
				NewsItem($$renderer, { news });
			}
			$$renderer.push(`<!--]-->`);
		} else {
			$$renderer.push("<!--[-1-->");
			$$renderer.push(`<div class="empty-state svelte-1gc460s"><p>${escape_html(store_get($$store_subs ??= {}, "$t", t)("newsPage.noResults"))}</p></div>`);
		}
		$$renderer.push(`<!--]--></div></div></div>`);
		if ($$store_subs) unsubscribe_stores($$store_subs);
	});
}
//#endregion
export { _page as default };
