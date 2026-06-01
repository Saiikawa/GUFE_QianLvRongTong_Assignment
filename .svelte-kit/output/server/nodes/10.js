import * as server from '../entries/pages/sverdle/_page.server.js';

export const index = 10;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/sverdle/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/sverdle/+page.server.js";
export const imports = ["_app/immutable/nodes/10.slnWBter.js","_app/immutable/chunks/BJ4-j0j6.js","_app/immutable/chunks/y5BDYc-G.js","_app/immutable/chunks/BoF9a627.js","_app/immutable/chunks/CP97kCR3.js"];
export const stylesheets = ["_app/immutable/assets/10.BWe5PeX9.css"];
export const fonts = [];
