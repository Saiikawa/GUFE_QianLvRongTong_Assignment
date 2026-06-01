export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.svg","image/微信图片_20260510160412_19_186.jpg","image/微信图片_20260510160839_23_186.jpg","image/微信图片_20260510160856_25_186.png","robots.txt"]),
	mimeTypes: {".svg":"image/svg+xml",".jpg":"image/jpeg",".png":"image/png",".txt":"text/plain"},
	_: {
		client: {start:"_app/immutable/entry/start.kbCBQeco.js",app:"_app/immutable/entry/app.6AEHvqfX.js",imports:["_app/immutable/entry/start.kbCBQeco.js","_app/immutable/chunks/y5BDYc-G.js","_app/immutable/chunks/BJ4-j0j6.js","_app/immutable/chunks/BoF9a627.js","_app/immutable/entry/app.6AEHvqfX.js","_app/immutable/chunks/BJ4-j0j6.js","_app/immutable/chunks/O6-aNYLC.js","_app/immutable/chunks/CP97kCR3.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/4.js')),
			__memo(() => import('../output/server/nodes/5.js')),
			__memo(() => import('../output/server/nodes/6.js')),
			__memo(() => import('../output/server/nodes/7.js')),
			__memo(() => import('../output/server/nodes/8.js')),
			__memo(() => import('../output/server/nodes/9.js')),
			__memo(() => import('../output/server/nodes/10.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/api/apply",
				pattern: /^\/api\/apply\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/api/apply/_server.js'))
			},
			{
				id: "/api/apply/export",
				pattern: /^\/api\/apply\/export\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/api/apply/export/_server.js'))
			},
			{
				id: "/calculator",
				pattern: /^\/calculator\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/carbon",
				pattern: /^\/carbon\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/international",
				pattern: /^\/international\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/news",
				pattern: /^\/news\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/products",
				pattern: /^\/products\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/project",
				pattern: /^\/project\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/sverdle",
				pattern: /^\/sverdle\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			}
		],
		prerendered_routes: new Set(["/","/about","/sverdle/how-to-play"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

export const prerendered = new Set(["/","/about","/sverdle/how-to-play"]);

export const base_path = "";
