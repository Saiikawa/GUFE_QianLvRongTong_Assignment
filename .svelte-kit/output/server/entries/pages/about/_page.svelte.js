import { U as escape_html, a as ensure_array_like, c as store_get, o as head, u as unsubscribe_stores } from "../../../chunks/dev.js";
import { n as t } from "../../../chunks/i18n.js";
//#region src/routes/about/+page.svelte
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		var $$store_subs;
		const services = [
			{
				icon: "📋",
				titleKey: "about.services.projectDeclare",
				descKey: "about.services.projectDeclareDesc"
			},
			{
				icon: "💰",
				titleKey: "about.services.loanService",
				descKey: "about.services.loanServiceDesc"
			},
			{
				icon: "🌿",
				titleKey: "about.services.carbonService",
				descKey: "about.services.carbonServiceDesc"
			},
			{
				icon: "📊",
				titleKey: "about.services.esgService",
				descKey: "about.services.esgServiceDesc"
			},
			{
				icon: "🏢",
				titleKey: "about.services.greenEnterprise",
				descKey: "about.services.greenEnterpriseDesc"
			},
			{
				icon: "🌍",
				titleKey: "about.services.envDisclosure",
				descKey: "about.services.envDisclosureDesc"
			}
		];
		const esgServices = [
			{
				icon: "🔍",
				titleKey: "about.esg.report",
				descKey: "about.esg.reportDesc"
			},
			{
				icon: "📈",
				titleKey: "about.esg.consulting",
				descKey: "about.esg.consultingDesc"
			},
			{
				icon: "⭐",
				titleKey: "about.esg.rating",
				descKey: "about.esg.ratingDesc"
			},
			{
				icon: "📋",
				titleKey: "about.esg.other",
				descKey: "about.esg.otherDesc"
			}
		];
		head("cwls5q", $$renderer, ($$renderer) => {
			$$renderer.title(($$renderer) => {
				$$renderer.push(`<title>${escape_html(store_get($$store_subs ??= {}, "$t", t)("pageTitles.about"))}</title>`);
			});
		});
		$$renderer.push(`<div class="container svelte-cwls5q"><div class="about-content svelte-cwls5q"><div class="about-header svelte-cwls5q"><h1 class="svelte-cwls5q">黔绿融通</h1> <p class="svelte-cwls5q">${escape_html(store_get($$store_subs ??= {}, "$t", t)("aboutPage.companyDesc1").split("。")[0])}</p></div> <div class="about-card svelte-cwls5q"><h2 class="svelte-cwls5q">${escape_html(store_get($$store_subs ??= {}, "$t", t)("aboutPage.companyIntro"))}</h2> <p class="svelte-cwls5q">${escape_html(store_get($$store_subs ??= {}, "$t", t)("aboutPage.companyDesc1"))}</p> <p class="svelte-cwls5q">${escape_html(store_get($$store_subs ??= {}, "$t", t)("aboutPage.companyDesc2"))}</p></div> <div class="about-card svelte-cwls5q"><h2 class="svelte-cwls5q">${escape_html(store_get($$store_subs ??= {}, "$t", t)("aboutPage.mission"))}</h2> <p class="svelte-cwls5q">${escape_html(store_get($$store_subs ??= {}, "$t", t)("aboutPage.missionDesc"))}</p></div> <div class="about-card svelte-cwls5q"><h2 class="svelte-cwls5q">${escape_html(store_get($$store_subs ??= {}, "$t", t)("aboutPage.coreServices"))}</h2> <div class="core-services-grid svelte-cwls5q"><!--[-->`);
		const each_array = ensure_array_like(services);
		for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
			let service = each_array[$$index];
			$$renderer.push(`<div class="core-service-item svelte-cwls5q"><div class="core-service-icon svelte-cwls5q">${escape_html(service.icon)}</div> <h3 class="svelte-cwls5q">${escape_html(store_get($$store_subs ??= {}, "$t", t)(service.titleKey))}</h3> <p class="svelte-cwls5q">${escape_html(store_get($$store_subs ??= {}, "$t", t)(service.descKey))}</p></div>`);
		}
		$$renderer.push(`<!--]--></div></div> <div class="about-card svelte-cwls5q"><h2 class="svelte-cwls5q">${escape_html(store_get($$store_subs ??= {}, "$t", t)("aboutPage.esgServices"))}</h2> <div class="esg-services-section svelte-cwls5q"><!--[-->`);
		const each_array_1 = ensure_array_like(esgServices);
		for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
			let esgService = each_array_1[$$index_1];
			$$renderer.push(`<div class="esg-service-item svelte-cwls5q"><h3 class="svelte-cwls5q">${escape_html(esgService.icon)} ${escape_html(store_get($$store_subs ??= {}, "$t", t)(esgService.titleKey))}</h3> <p class="svelte-cwls5q">${escape_html(store_get($$store_subs ??= {}, "$t", t)(esgService.descKey))}</p></div>`);
		}
		$$renderer.push(`<!--]--></div></div> <div class="about-contact svelte-cwls5q"><h2 class="svelte-cwls5q">${escape_html(store_get($$store_subs ??= {}, "$t", t)("aboutPage.contactUs"))}</h2> <div class="contact-info svelte-cwls5q"><div class="contact-item svelte-cwls5q"><span class="contact-label svelte-cwls5q">${escape_html(store_get($$store_subs ??= {}, "$t", t)("aboutPage.serviceHotline"))}</span> <span class="contact-value svelte-cwls5q">400-888-8888</span></div> <div class="contact-item svelte-cwls5q"><span class="contact-label svelte-cwls5q">${escape_html(store_get($$store_subs ??= {}, "$t", t)("aboutPage.email"))}</span> <span class="contact-value svelte-cwls5q">contact@qianlvtong.com</span></div> <div class="contact-item svelte-cwls5q"><span class="contact-label svelte-cwls5q">${escape_html(store_get($$store_subs ??= {}, "$t", t)("aboutPage.address"))}</span> <span class="contact-value svelte-cwls5q">贵州省贵阳市观山湖区金融城</span></div> <div class="contact-item svelte-cwls5q"><span class="contact-label svelte-cwls5q">${escape_html(store_get($$store_subs ??= {}, "$t", t)("aboutPage.workTime"))}</span> <span class="contact-value svelte-cwls5q">${escape_html(store_get($$store_subs ??= {}, "$t", t)("aboutPage.workSchedule"))}</span></div></div></div></div></div>`);
		if ($$store_subs) unsubscribe_stores($$store_subs);
	});
}
//#endregion
export { _page as default };
