import { H as clsx, U as escape_html, V as attr, a as ensure_array_like, i as derived, l as stringify, n as attr_class, o as head } from "../../../chunks/dev.js";
import { a as resolve } from "../../../chunks/client.js";
globalThis.Date;
globalThis.Set;
globalThis.Map;
globalThis.URL;
globalThis.URLSearchParams;
var MediaQuery = class {
	current;
	/**
	* @param {string} query
	* @param {boolean} [matches]
	*/
	constructor(query, matches = false) {
		this.current = matches;
	}
};
//#endregion
//#region src/routes/sverdle/+page.svelte
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { data } = $$props;
		new MediaQuery("(prefers-reduced-motion: reduce)");
		let shake = false;
		/** Whether or not the user has won */
		let won = derived(() => data.answers.at(-1) === "xxxxx");
		/** The index of the current guess */
		let i = derived(() => won() ? -1 : data.answers.length);
		/** The current guess */
		let currentGuess = derived(() => data.guesses[i()] || "");
		/** Whether the current guess can be submitted */
		let submittable = derived(() => currentGuess().length === 5);
		const $$d = derived(() => {
			/**
			* A map of classnames for all letters that have been guessed,
			* used for styling the keyboard
			*/
			let classnames = {};
			/**
			* A map of descriptions for all letters that have been guessed,
			* used for adding text for assistive technology (e.g. screen readers)
			*/
			let description = {};
			data.answers.forEach((answer, i) => {
				const guess = data.guesses[i];
				for (let i = 0; i < 5; i += 1) {
					const letter = guess[i];
					if (answer[i] === "x") {
						classnames[letter] = "exact";
						description[letter] = "correct";
					} else if (!classnames[letter]) {
						classnames[letter] = answer[i] === "c" ? "close" : "missing";
						description[letter] = answer[i] === "c" ? "present" : "absent";
					}
				}
			});
			return {
				classnames,
				description
			};
		}), classnames = derived(() => $$d().classnames), description = derived(() => $$d().description);
		head("115oxdy", $$renderer, ($$renderer) => {
			$$renderer.title(($$renderer) => {
				$$renderer.push(`<title>Sverdle</title>`);
			});
			$$renderer.push(`<meta name="description" content="A Wordle clone written in SvelteKit" class="svelte-115oxdy"/>`);
		});
		$$renderer.push(`<h1 class="visually-hidden svelte-115oxdy">Sverdle</h1> <form method="post" action="?/enter" class="svelte-115oxdy"><a class="how-to-play svelte-115oxdy"${attr("href", resolve("/sverdle/how-to-play"))}>How to play</a> <div${attr_class("grid svelte-115oxdy", void 0, {
			"playing": !won(),
			"shake": shake
		})}><!--[-->`);
		const each_array = ensure_array_like(Array.from(Array(6).keys()));
		for (let $$index_1 = 0, $$length = each_array.length; $$index_1 < $$length; $$index_1++) {
			let row = each_array[$$index_1];
			const current = row === i();
			$$renderer.push(`<h2 class="visually-hidden svelte-115oxdy">Row ${escape_html(row + 1)}</h2> <div${attr_class("row svelte-115oxdy", void 0, { "current": current })}><!--[-->`);
			const each_array_1 = ensure_array_like(Array.from(Array(5).keys()));
			for (let $$index = 0, $$length = each_array_1.length; $$index < $$length; $$index++) {
				let column = each_array_1[$$index];
				const guess = current ? currentGuess() : data.guesses[row];
				const answer = data.answers[row]?.[column];
				const value = guess?.[column] ?? "";
				const selected = current && column === guess.length;
				const exact = answer === "x";
				const close = answer === "c";
				const missing = answer === "_";
				$$renderer.push(`<div${attr_class("letter svelte-115oxdy", void 0, {
					"exact": exact,
					"close": close,
					"missing": missing,
					"selected": selected
				})}>${escape_html(value)} <span class="visually-hidden svelte-115oxdy">`);
				if (exact) {
					$$renderer.push("<!--[0-->");
					$$renderer.push(`(correct)`);
				} else if (close) {
					$$renderer.push("<!--[1-->");
					$$renderer.push(`(present)`);
				} else if (missing) {
					$$renderer.push("<!--[2-->");
					$$renderer.push(`(absent)`);
				} else {
					$$renderer.push("<!--[-1-->");
					$$renderer.push(`empty`);
				}
				$$renderer.push(`<!--]--></span> <input name="guess"${attr("disabled", !current, true)} type="hidden"${attr("value", value)} class="svelte-115oxdy"/></div>`);
			}
			$$renderer.push(`<!--]--></div>`);
		}
		$$renderer.push(`<!--]--></div> <div class="controls svelte-115oxdy">`);
		if (won() || data.answers.length >= 6) {
			$$renderer.push("<!--[0-->");
			if (!won() && data.answer) {
				$$renderer.push("<!--[0-->");
				$$renderer.push(`<p class="svelte-115oxdy">the answer was "${escape_html(data.answer)}"</p>`);
			} else $$renderer.push("<!--[-1-->");
			$$renderer.push(`<!--]--> <button data-key="enter" class="restart selected svelte-115oxdy" formaction="?/restart">${escape_html(won() ? "you won :)" : `game over :(`)} play again?</button>`);
		} else {
			$$renderer.push("<!--[-1-->");
			$$renderer.push(`<div class="keyboard svelte-115oxdy"><button data-key="enter"${attr("disabled", !submittable(), true)}${attr_class("svelte-115oxdy", void 0, { "selected": submittable() })}>enter</button> <button data-key="backspace" formaction="?/update" name="key" value="backspace" class="svelte-115oxdy">back</button> <!--[-->`);
			const each_array_2 = ensure_array_like([
				"qwertyuiop",
				"asdfghjkl",
				"zxcvbnm"
			]);
			for (let $$index_3 = 0, $$length = each_array_2.length; $$index_3 < $$length; $$index_3++) {
				let row = each_array_2[$$index_3];
				$$renderer.push(`<div class="row svelte-115oxdy"><!--[-->`);
				const each_array_3 = ensure_array_like(row);
				for (let index = 0, $$length = each_array_3.length; index < $$length; index++) {
					let letter = each_array_3[index];
					$$renderer.push(`<button${attr("data-key", letter)}${attr_class(clsx(classnames()[letter]), "svelte-115oxdy")}${attr("disabled", submittable(), true)} formaction="?/update" name="key"${attr("value", letter)}${attr("aria-label", `${stringify(letter)} ${stringify(description()[letter] || "")}`)}>${escape_html(letter)}</button>`);
				}
				$$renderer.push(`<!--]--></div>`);
			}
			$$renderer.push(`<!--]--></div>`);
		}
		$$renderer.push(`<!--]--></div></form> `);
		if (won()) {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<div style="position: absolute; left: 50%; top: 30%" class="svelte-115oxdy"></div>`);
		} else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]-->`);
	});
}
//#endregion
export { _page as default };
