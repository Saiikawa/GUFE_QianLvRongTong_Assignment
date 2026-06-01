
// this file is generated — do not edit it


declare module "svelte/elements" {
	export interface HTMLAttributes<T> {
		'data-sveltekit-keepfocus'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-noscroll'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-preload-code'?:
			| true
			| ''
			| 'eager'
			| 'viewport'
			| 'hover'
			| 'tap'
			| 'off'
			| undefined
			| null;
		'data-sveltekit-preload-data'?: true | '' | 'hover' | 'tap' | 'off' | undefined | null;
		'data-sveltekit-reload'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-replacestate'?: true | '' | 'off' | undefined | null;
	}
}

export {};


declare module "$app/types" {
	type MatcherParam<M> = M extends (param : string) => param is (infer U extends string) ? U : string;

	export interface AppTypes {
		RouteId(): "/" | "/about" | "/api" | "/api/apply" | "/api/apply/export" | "/calculator" | "/carbon" | "/international" | "/news" | "/products" | "/project" | "/sverdle" | "/sverdle/how-to-play";
		RouteParams(): {
			
		};
		LayoutParams(): {
			"/": Record<string, never>;
			"/about": Record<string, never>;
			"/api": Record<string, never>;
			"/api/apply": Record<string, never>;
			"/api/apply/export": Record<string, never>;
			"/calculator": Record<string, never>;
			"/carbon": Record<string, never>;
			"/international": Record<string, never>;
			"/news": Record<string, never>;
			"/products": Record<string, never>;
			"/project": Record<string, never>;
			"/sverdle": Record<string, never>;
			"/sverdle/how-to-play": Record<string, never>
		};
		Pathname(): "/" | "/about" | "/about/" | "/api/apply" | "/api/apply/export" | "/calculator" | "/carbon" | "/international" | "/news" | "/products" | "/project" | "/sverdle" | "/sverdle/how-to-play" | "/sverdle/how-to-play/";
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/favicon.svg" | "/image/微信图片_20260510160412_19_186.jpg" | "/image/微信图片_20260510160839_23_186.jpg" | "/image/微信图片_20260510160856_25_186.png" | "/robots.txt" | string & {};
	}
}