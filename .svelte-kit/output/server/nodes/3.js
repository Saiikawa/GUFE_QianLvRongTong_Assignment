import * as universal from '../entries/pages/about/_page.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/about/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/about/+page.js";
export const imports = ["_app/immutable/nodes/3.D_P0yIuf.js","_app/immutable/chunks/BJ4-j0j6.js","_app/immutable/chunks/CP97kCR3.js","_app/immutable/chunks/osqW8-PO.js","_app/immutable/chunks/CXCb1xwh.js","_app/immutable/chunks/BoF9a627.js"];
export const stylesheets = ["_app/immutable/assets/3.CLLJJuUx.css"];
export const fonts = [];
