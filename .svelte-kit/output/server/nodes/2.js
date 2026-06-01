import * as universal from '../entries/pages/_page.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.js";
export const imports = ["_app/immutable/nodes/2.MKUinYLe.js","_app/immutable/chunks/BJ4-j0j6.js","_app/immutable/chunks/CP97kCR3.js","_app/immutable/chunks/w85DOvFB.js","_app/immutable/chunks/BGaYA3LN.js","_app/immutable/chunks/CXCb1xwh.js","_app/immutable/chunks/BoF9a627.js"];
export const stylesheets = ["_app/immutable/assets/NewsItem.CTdnLy5U.css","_app/immutable/assets/products.D1Tp-G_c.css","_app/immutable/assets/2.CENX0lH6.css"];
export const fonts = [];
