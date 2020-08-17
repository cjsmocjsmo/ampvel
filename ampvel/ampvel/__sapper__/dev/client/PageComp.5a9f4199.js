import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, O as createEventDispatcher, o as onMount, v as validate_slots, y as validate_each_argument, e as element, c as claim_element, a as children, f as detach_dev, h as attr_dev, j as add_location, k as insert_dev, l as append_dev, z as destroy_each, t as text, b as claim_text, m as listen_dev, L as is_function, u as set_data_dev, p as space, x as empty, r as claim_space, n as noop } from './client.b599eec1.js';

/* src/components/PageComp.svelte generated by Svelte v3.24.0 */
const file = "src/components/PageComp.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[9] = list[i];
	return child_ctx;
}

// (52:0) {#if visible}
function create_if_block(ctx) {
	let nav;
	let ul;
	let each_value = /*AS*/ ctx[1];
	validate_each_argument(each_value);
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	const block = {
		c: function create() {
			nav = element("nav");
			ul = element("ul");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			this.h();
		},
		l: function claim(nodes) {
			nav = claim_element(nodes, "NAV", {});
			var nav_nodes = children(nav);
			ul = claim_element(nav_nodes, "UL", { class: true });
			var ul_nodes = children(ul);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(ul_nodes);
			}

			ul_nodes.forEach(detach_dev);
			nav_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(ul, "class", "pageUL svelte-aplvvr");
			add_location(ul, file, 53, 2, 993);
			add_location(nav, file, 52, 1, 985);
		},
		m: function mount(target, anchor) {
			insert_dev(target, nav, anchor);
			append_dev(nav, ul);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(ul, null);
			}
		},
		p: function update(ctx, dirty) {
			if (dirty & /*alphasel, AS*/ 18) {
				each_value = /*AS*/ ctx[1];
				validate_each_argument(each_value);
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(ul, null);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}

				each_blocks.length = each_value.length;
			}
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(nav);
			destroy_each(each_blocks, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block.name,
		type: "if",
		source: "(52:0) {#if visible}",
		ctx
	});

	return block;
}

// (55:3) {#each AS as p}
function create_each_block(ctx) {
	let li;
	let button;
	let t_value = /*p*/ ctx[9] + "";
	let t;
	let mounted;
	let dispose;

	const block = {
		c: function create() {
			li = element("li");
			button = element("button");
			t = text(t_value);
			this.h();
		},
		l: function claim(nodes) {
			li = claim_element(nodes, "LI", { class: true });
			var li_nodes = children(li);
			button = claim_element(li_nodes, "BUTTON", {});
			var button_nodes = children(button);
			t = claim_text(button_nodes, t_value);
			button_nodes.forEach(detach_dev);
			li_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(button, file, 55, 23, 1055);
			attr_dev(li, "class", "pageLI svelte-aplvvr");
			add_location(li, file, 55, 4, 1036);
		},
		m: function mount(target, anchor) {
			insert_dev(target, li, anchor);
			append_dev(li, button);
			append_dev(button, t);

			if (!mounted) {
				dispose = listen_dev(
					button,
					"click",
					function () {
						if (is_function(/*alphasel*/ ctx[4](/*p*/ ctx[9]))) /*alphasel*/ ctx[4](/*p*/ ctx[9]).apply(this, arguments);
					},
					false,
					false,
					false
				);

				mounted = true;
			}
		},
		p: function update(new_ctx, dirty) {
			ctx = new_ctx;
			if (dirty & /*AS*/ 2 && t_value !== (t_value = /*p*/ ctx[9] + "")) set_data_dev(t, t_value);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(li);
			mounted = false;
			dispose();
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block.name,
		type: "each",
		source: "(55:3) {#each AS as p}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let button;
	let t0;
	let span;
	let t1;
	let t2;
	let if_block_anchor;
	let mounted;
	let dispose;
	let if_block = /*visible*/ ctx[2] && create_if_block(ctx);

	const block = {
		c: function create() {
			button = element("button");
			t0 = text("Page");
			span = element("span");
			t1 = text(/*selected*/ ctx[0]);
			t2 = space();
			if (if_block) if_block.c();
			if_block_anchor = empty();
			this.h();
		},
		l: function claim(nodes) {
			button = claim_element(nodes, "BUTTON", { id: true, class: true });
			var button_nodes = children(button);
			t0 = claim_text(button_nodes, "Page");
			span = claim_element(button_nodes, "SPAN", { class: true });
			var span_nodes = children(span);
			t1 = claim_text(span_nodes, /*selected*/ ctx[0]);
			span_nodes.forEach(detach_dev);
			button_nodes.forEach(detach_dev);
			t2 = claim_space(nodes);
			if (if_block) if_block.l(nodes);
			if_block_anchor = empty();
			this.h();
		},
		h: function hydrate() {
			attr_dev(span, "class", "svelte-aplvvr");
			add_location(span, file, 49, 49, 936);
			attr_dev(button, "id", "SongsPageButton");
			attr_dev(button, "class", "svelte-aplvvr");
			add_location(button, file, 49, 0, 887);
		},
		m: function mount(target, anchor) {
			insert_dev(target, button, anchor);
			append_dev(button, t0);
			append_dev(button, span);
			append_dev(span, t1);
			insert_dev(target, t2, anchor);
			if (if_block) if_block.m(target, anchor);
			insert_dev(target, if_block_anchor, anchor);

			if (!mounted) {
				dispose = listen_dev(button, "click", /*fuck*/ ctx[3], false, false, false);
				mounted = true;
			}
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*selected*/ 1) set_data_dev(t1, /*selected*/ ctx[0]);

			if (/*visible*/ ctx[2]) {
				if (if_block) {
					if_block.p(ctx, dirty);
				} else {
					if_block = create_if_block(ctx);
					if_block.c();
					if_block.m(if_block_anchor.parentNode, if_block_anchor);
				}
			} else if (if_block) {
				if_block.d(1);
				if_block = null;
			}
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(button);
			if (detaching) detach_dev(t2);
			if (if_block) if_block.d(detaching);
			if (detaching) detach_dev(if_block_anchor);
			mounted = false;
			dispose();
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance($$self, $$props, $$invalidate) {
	const dispatch = createEventDispatcher();
	let selected = 1;

	function dispatchMyPageEvent() {
		dispatch("message", { text: selected });
	}

	let { ALPHA } = $$props;
	const ADDR = `http://192.168.0.74:6790/${ALPHA}`;
	let AS = [];

	onMount(async () => {
		await fetch(ADDR, { mode: "cors", method: "GET" }).then(r => r.json()).then(data => {
			if (ALPHA === "ArtistAlpha") {
				$$invalidate(1, AS = data.artal);
			}

			if (ALPHA === "AlbumAlpha") {
				$$invalidate(1, AS = data.albal);
			}

			if (ALPHA === "SongAlpha") {
				$$invalidate(1, AS = data.songal);
			}
		});
	});

	let visible = false;

	let fuck = () => {
		if (visible) {
			$$invalidate(2, visible = false);
		} else {
			$$invalidate(2, visible = true);
		}
	};

	let alphasel = asel => {
		$$invalidate(0, selected = asel);
		$$invalidate(2, visible = false);
		dispatchMyPageEvent();
	};

	const writable_props = ["ALPHA"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<PageComp> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("PageComp", $$slots, []);

	$$self.$set = $$props => {
		if ("ALPHA" in $$props) $$invalidate(5, ALPHA = $$props.ALPHA);
	};

	$$self.$capture_state = () => ({
		createEventDispatcher,
		dispatch,
		onMount,
		selected,
		dispatchMyPageEvent,
		ALPHA,
		ADDR,
		AS,
		visible,
		fuck,
		alphasel
	});

	$$self.$inject_state = $$props => {
		if ("selected" in $$props) $$invalidate(0, selected = $$props.selected);
		if ("ALPHA" in $$props) $$invalidate(5, ALPHA = $$props.ALPHA);
		if ("AS" in $$props) $$invalidate(1, AS = $$props.AS);
		if ("visible" in $$props) $$invalidate(2, visible = $$props.visible);
		if ("fuck" in $$props) $$invalidate(3, fuck = $$props.fuck);
		if ("alphasel" in $$props) $$invalidate(4, alphasel = $$props.alphasel);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [selected, AS, visible, fuck, alphasel, ALPHA];
}

class PageComp extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { ALPHA: 5 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "PageComp",
			options,
			id: create_fragment.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*ALPHA*/ ctx[5] === undefined && !("ALPHA" in props)) {
			console.warn("<PageComp> was created without expected prop 'ALPHA'");
		}
	}

	get ALPHA() {
		throw new Error("<PageComp>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set ALPHA(value) {
		throw new Error("<PageComp>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export { PageComp as P };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGFnZUNvbXAuNWE5ZjQxOTkuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1BhZ2VDb21wLnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0PlxuXHRpbXBvcnQgeyBjcmVhdGVFdmVudERpc3BhdGNoZXIgfSBmcm9tICdzdmVsdGUnO1xuXHRjb25zdCBkaXNwYXRjaCA9IGNyZWF0ZUV2ZW50RGlzcGF0Y2hlcigpO1xuXG5cdGltcG9ydCB7IG9uTW91bnQgfSBmcm9tICdzdmVsdGUnO1xuXHRsZXQgc2VsZWN0ZWQgPSAxO1xuXG5cdGZ1bmN0aW9uIGRpc3BhdGNoTXlQYWdlRXZlbnQoKSB7XG5cdFx0ZGlzcGF0Y2goXCJtZXNzYWdlXCIsIHtcblx0XHRcdHRleHQ6IHNlbGVjdGVkXG5cdFx0fSlcblx0fVxuXG5cdGV4cG9ydCBsZXQgQUxQSEE7XG4gICAgY29uc3QgQUREUiA9IGBodHRwOi8vMTkyLjE2OC4wLjc0OjY3OTAvJHtBTFBIQX1gXG5cblx0bGV0IEFTID0gW107XG5cdG9uTW91bnQoYXN5bmMgKCkgPT4ge1xuXHRcdGF3YWl0IGZldGNoKEFERFIsIHttb2RlOiBcImNvcnNcIiwgbWV0aG9kOiBcIkdFVFwifSlcblx0XHQudGhlbihyID0+IHIuanNvbigpKVxuXHRcdC50aGVuKGRhdGEgPT4ge1xuXHRcdFx0aWYgKEFMUEhBID09PSBcIkFydGlzdEFscGhhXCIpIHtcblx0XHRcdFx0QVMgPSBkYXRhLmFydGFsXG5cdFx0XHR9IFxuXHRcdFx0aWYgKEFMUEhBID09PSBcIkFsYnVtQWxwaGFcIikge1xuXHRcdFx0XHRBUyA9IGRhdGEuYWxiYWxcblx0XHRcdH1cblx0XHRcdGlmIChBTFBIQSA9PT0gXCJTb25nQWxwaGFcIikge1xuXHRcdFx0XHRBUyA9IGRhdGEuc29uZ2FsO1xuXHRcdFx0fVxuXHRcdH0pXG5cdH0pXG5cblx0bGV0IHZpc2libGUgPSBmYWxzZTtcbiAgICBsZXQgZnVjayA9ICgpID0+IHtcbiAgICAgICAgaWYgKHZpc2libGUpIHtcbiAgICAgICAgICAgIHZpc2libGUgPSBmYWxzZVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmlzaWJsZSA9IHRydWVcbiAgICAgICAgfVxuXHR9XG5cblx0bGV0IGFscGhhc2VsID0gKGFzZWwpID0+IHtcblx0XHRzZWxlY3RlZCA9IGFzZWxcblx0XHR2aXNpYmxlID0gZmFsc2Vcblx0XHRkaXNwYXRjaE15UGFnZUV2ZW50KClcblx0fVxuPC9zY3JpcHQ+XG5cbjxidXR0b24gaWQ9XCJTb25nc1BhZ2VCdXR0b25cIiBvbjpjbGljaz17ZnVja30+UGFnZTxzcGFuPntzZWxlY3RlZH08L3NwYW4+PC9idXR0b24+XG5cbnsjaWYgdmlzaWJsZX1cblx0PG5hdj5cblx0XHQ8dWwgY2xhc3M9XCJwYWdlVUxcIj5cblx0XHRcdHsjZWFjaCBBUyBhcyBwfVxuXHRcdFx0XHQ8bGkgY2xhc3M9XCJwYWdlTElcIj48YnV0dG9uIG9uOmNsaWNrPXthbHBoYXNlbChwKX0+e3B9PC9idXR0b24+PC9saT5cblx0XHRcdHsvZWFjaH1cblx0XHQ8L3VsPlxuXHQ8L25hdj5cbnsvaWZ9XG5cbjxzdHlsZT5cblx0I1NvbmdzUGFnZUJ1dHRvbiB7XG5cdFx0Y29sb3I6IGJsYWNrO1xuXHR9XG5cdCNTb25nc1BhZ2VCdXR0b24ge1xuXHRcdGJvcmRlci1yYWRpdXM6IDEwcHg7XG5cdFx0Zm9udC1zaXplOiAxN3B4O1xuXHRcdHBhZGRpbmc6IDdweDtcblx0XHR3aWR0aDogMTAwJTtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiBsYXduZ3JlZW47XG5cdH1cblx0LnBhZ2VVTCB7XG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcblx0XHRmb250LXNpemU6IDE5cHg7XG5cdH1cblx0LnBhZ2VMSSB7XG5cdFx0ZGlzcGxheTogaW5saW5lO1xuXHRcdG1hcmdpbjogMjBweDtcblx0fVxuXHRzcGFuIHtcblx0XHRwYWRkaW5nLWxlZnQ6IDE3cHg7XG5cdH1cbjwvc3R5bGU+Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozt5QkFzRFUsR0FBRTs7OztnQ0FBUCxNQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt3QkFBQyxHQUFFOzs7OytCQUFQLE1BQUk7Ozs7Ozs7Ozs7Ozs7Ozs7b0NBQUosTUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3FCQUM4QyxHQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O21DQUFmLEdBQVEsVUFBQyxHQUFDLG9CQUFWLEdBQVEsVUFBQyxHQUFDOzs7Ozs7Ozs7Ozs7d0RBQUksR0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7NEJBSm5ELEdBQU87Ozs7Ozs7MEJBRjRDLEdBQVE7Ozs7Ozs7Ozs7Ozs0Q0FBUixHQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O21EQUF6QixHQUFJOzs7Ozs2REFBYSxHQUFROzttQkFFM0QsR0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztPQWpETCxRQUFRLEdBQUcscUJBQXFCO0tBR2xDLFFBQVEsR0FBRyxDQUFDOztVQUVQLG1CQUFtQjtFQUMzQixRQUFRLENBQUMsU0FBUyxJQUNqQixJQUFJLEVBQUUsUUFBUTs7O09BSUwsS0FBSztPQUNQLElBQUksK0JBQStCLEtBQUs7S0FFN0MsRUFBRTs7Q0FDTixPQUFPO1FBQ0EsS0FBSyxDQUFDLElBQUksSUFBRyxJQUFJLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxLQUFLLElBQzdDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksSUFDaEIsSUFBSSxDQUFDLElBQUk7T0FDTCxLQUFLLEtBQUssYUFBYTtvQkFDMUIsRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLOzs7T0FFWixLQUFLLEtBQUssWUFBWTtvQkFDekIsRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLOzs7T0FFWixLQUFLLEtBQUssV0FBVztvQkFDeEIsRUFBRSxHQUFHLElBQUksQ0FBQyxNQUFNOzs7OztLQUtmLE9BQU8sR0FBRyxLQUFLOztLQUNaLElBQUk7TUFDQSxPQUFPO21CQUNQLE9BQU8sR0FBRyxLQUFLOzttQkFFZixPQUFPLEdBQUcsSUFBSTs7OztLQUlyQixRQUFRLEdBQUksSUFBSTtrQkFDbkIsUUFBUSxHQUFHLElBQUk7a0JBQ2YsT0FBTyxHQUFHLEtBQUs7RUFDZixtQkFBbUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
