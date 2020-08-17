import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, W as movhttp, g as globals, e as element, t as text, p as space, c as claim_element, a as children, b as claim_text, f as detach_dev, r as claim_space, h as attr_dev, j as add_location, k as insert_dev, l as append_dev, m as listen_dev, n as noop, U as run_all } from './client.6caa419a.js';

/* src/components/Controls.svelte generated by Svelte v3.24.0 */

const { console: console_1 } = globals;
const file = "src/components/Controls.svelte";

// (76:2) {:else}
function create_else_block(ctx) {
	let button;
	let t;
	let mounted;
	let dispose;

	const block = {
		c: function create() {
			button = element("button");
			t = text("pause");
			this.h();
		},
		l: function claim(nodes) {
			button = claim_element(nodes, "BUTTON", { class: true });
			var button_nodes = children(button);
			t = claim_text(button_nodes, "pause");
			button_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(button, "class", "svelte-1fzjfwg");
			add_location(button, file, 76, 3, 1942);
		},
		m: function mount(target, anchor) {
			insert_dev(target, button, anchor);
			append_dev(button, t);

			if (!mounted) {
				dispose = listen_dev(button, "click", /*handlePauseSubmit*/ ctx[4], false, false, false);
				mounted = true;
			}
		},
		p: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(button);
			mounted = false;
			dispose();
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_else_block.name,
		type: "else",
		source: "(76:2) {:else}",
		ctx
	});

	return block;
}

// (74:2) {#if visible}
function create_if_block(ctx) {
	let button;
	let t;
	let mounted;
	let dispose;

	const block = {
		c: function create() {
			button = element("button");
			t = text("play");
			this.h();
		},
		l: function claim(nodes) {
			button = claim_element(nodes, "BUTTON", { class: true });
			var button_nodes = children(button);
			t = claim_text(button_nodes, "play");
			button_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(button, "class", "svelte-1fzjfwg");
			add_location(button, file, 74, 3, 1879);
		},
		m: function mount(target, anchor) {
			insert_dev(target, button, anchor);
			append_dev(button, t);

			if (!mounted) {
				dispose = listen_dev(button, "click", /*handlePlaySubmit*/ ctx[5], false, false, false);
				mounted = true;
			}
		},
		p: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(button);
			mounted = false;
			dispose();
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block.name,
		type: "if",
		source: "(74:2) {#if visible}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let nav;
	let ul;
	let button0;
	let t0;
	let t1;
	let t2;
	let button1;
	let t3;
	let t4;
	let button2;
	let t5;
	let mounted;
	let dispose;

	function select_block_type(ctx, dirty) {
		if (/*visible*/ ctx[0]) return create_if_block;
		return create_else_block;
	}

	let current_block_type = select_block_type(ctx);
	let if_block = current_block_type(ctx);

	const block = {
		c: function create() {
			nav = element("nav");
			ul = element("ul");
			button0 = element("button");
			t0 = text("previous");
			t1 = space();
			if_block.c();
			t2 = space();
			button1 = element("button");
			t3 = text("stop");
			t4 = space();
			button2 = element("button");
			t5 = text("next");
			this.h();
		},
		l: function claim(nodes) {
			nav = claim_element(nodes, "NAV", {});
			var nav_nodes = children(nav);
			ul = claim_element(nav_nodes, "UL", {});
			var ul_nodes = children(ul);
			button0 = claim_element(ul_nodes, "BUTTON", { class: true });
			var button0_nodes = children(button0);
			t0 = claim_text(button0_nodes, "previous");
			button0_nodes.forEach(detach_dev);
			t1 = claim_space(ul_nodes);
			if_block.l(ul_nodes);
			t2 = claim_space(ul_nodes);
			button1 = claim_element(ul_nodes, "BUTTON", { class: true });
			var button1_nodes = children(button1);
			t3 = claim_text(button1_nodes, "stop");
			button1_nodes.forEach(detach_dev);
			t4 = claim_space(ul_nodes);
			button2 = claim_element(ul_nodes, "BUTTON", { class: true });
			var button2_nodes = children(button2);
			t5 = claim_text(button2_nodes, "next");
			button2_nodes.forEach(detach_dev);
			ul_nodes.forEach(detach_dev);
			nav_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(button0, "class", "svelte-1fzjfwg");
			add_location(button0, file, 72, 2, 1801);
			attr_dev(button1, "class", "svelte-1fzjfwg");
			add_location(button1, file, 78, 2, 2004);
			attr_dev(button2, "class", "svelte-1fzjfwg");
			add_location(button2, file, 79, 2, 2057);
			add_location(ul, file, 71, 1, 1794);
			add_location(nav, file, 70, 0, 1787);
		},
		m: function mount(target, anchor) {
			insert_dev(target, nav, anchor);
			append_dev(nav, ul);
			append_dev(ul, button0);
			append_dev(button0, t0);
			append_dev(ul, t1);
			if_block.m(ul, null);
			append_dev(ul, t2);
			append_dev(ul, button1);
			append_dev(button1, t3);
			append_dev(ul, t4);
			append_dev(ul, button2);
			append_dev(button2, t5);

			if (!mounted) {
				dispose = [
					listen_dev(button0, "click", /*handlePreviousSubmit*/ ctx[3], false, false, false),
					listen_dev(button1, "click", /*handleStopSubmit*/ ctx[2], false, false, false),
					listen_dev(button2, "click", /*handleNextSubmit*/ ctx[1], false, false, false)
				];

				mounted = true;
			}
		},
		p: function update(ctx, [dirty]) {
			if (current_block_type === (current_block_type = select_block_type(ctx)) && if_block) {
				if_block.p(ctx, dirty);
			} else {
				if_block.d(1);
				if_block = current_block_type(ctx);

				if (if_block) {
					if_block.c();
					if_block.m(ul, t2);
				}
			}
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(nav);
			if_block.d();
			mounted = false;
			run_all(dispose);
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
	async function getNext() {
		fetch(`${movhttp}/Next`, { mode: "cors", method: "GET" }).then(r => r.json()).then(data => {
			console.log(data);
		}).catch(err => console.log(err));
	}

	let handleNextSubmit = () => {
		let promise = getNext().catch(err => console.log(err));
	};

	async function getStop() {
		fetch(`${movhttp}/Stop`, { mode: "cors", method: "GET" }).then(r => r.json()).then(data => {
			console.log(data);
		}).catch(err => console.log(err));
	}

	let handleStopSubmit = () => {
		let promise = getStop().catch(err => console.log(err));
	};

	async function getPrevious() {
		fetch(`${movhttp}/Previous`, { mode: "cors", method: "GET" }).then(r => r.json()).then(data => {
			console.log(data);
		}).catch(err => console.log(err));
	}

	let handlePreviousSubmit = () => {
		let promise = getPrevious().catch(err => console.log(err));
	};

	async function getPause() {
		fetch(`${movhttp}/Pause`, { mode: "cors", method: "GET" }).then(r => r.json()).then(data => {
			console.log(data);
		}).catch(err => console.log(err));
	}

	let handlePauseSubmit = () => {
		let promise = getPause().catch(err => console.log(err));
		fuck();
	};

	async function getPlay() {
		fetch(`${movhttp}/Play`, { mode: "cors", method: "GET" }).then(r => r.json()).then(data => {
			console.log(data);
		}).catch(err => console.log(err));
	}

	let handlePlaySubmit = () => {
		let promise = getPlay().catch(err => console.log(err));
		fuck();
	};

	let visible = false;

	let fuck = () => {
		if (visible) {
			$$invalidate(0, visible = false);
		} else {
			$$invalidate(0, visible = true);
		}
	};

	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1.warn(`<Controls> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Controls", $$slots, []);

	$$self.$capture_state = () => ({
		movhttp,
		getNext,
		handleNextSubmit,
		getStop,
		handleStopSubmit,
		getPrevious,
		handlePreviousSubmit,
		getPause,
		handlePauseSubmit,
		getPlay,
		handlePlaySubmit,
		visible,
		fuck
	});

	$$self.$inject_state = $$props => {
		if ("handleNextSubmit" in $$props) $$invalidate(1, handleNextSubmit = $$props.handleNextSubmit);
		if ("handleStopSubmit" in $$props) $$invalidate(2, handleStopSubmit = $$props.handleStopSubmit);
		if ("handlePreviousSubmit" in $$props) $$invalidate(3, handlePreviousSubmit = $$props.handlePreviousSubmit);
		if ("handlePauseSubmit" in $$props) $$invalidate(4, handlePauseSubmit = $$props.handlePauseSubmit);
		if ("handlePlaySubmit" in $$props) $$invalidate(5, handlePlaySubmit = $$props.handlePlaySubmit);
		if ("visible" in $$props) $$invalidate(0, visible = $$props.visible);
		if ("fuck" in $$props) fuck = $$props.fuck;
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [
		visible,
		handleNextSubmit,
		handleStopSubmit,
		handlePreviousSubmit,
		handlePauseSubmit,
		handlePlaySubmit
	];
}

class Controls extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Controls",
			options,
			id: create_fragment.name
		});
	}
}

export { Controls as C };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29udHJvbHMuNDkzMmQ2ZDAuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0NvbnRyb2xzLnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0PlxuXHRpbXBvcnQgeyBtb3ZodHRwIH0gZnJvbSAnLi9QbGF5ZXJTdG9yZS5qcydcblxuICAgIGFzeW5jIGZ1bmN0aW9uIGdldE5leHQoKSB7XG5cdFx0ZmV0Y2goYCR7bW92aHR0cH0vTmV4dGAsIHttb2RlOiBcImNvcnNcIiwgbWV0aG9kOiBcIkdFVFwifSlcblx0XHQudGhlbihyID0+IHIuanNvbigpKVxuXHRcdC50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSlcbiAgICAgICAgfSkuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpO1xuXHR9XG4gICAgbGV0IGhhbmRsZU5leHRTdWJtaXQgPSAoKSA9PiB7XG4gICAgICAgIGxldCBwcm9taXNlID0gZ2V0TmV4dCgpLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKTtcbiAgICB9XG5cblx0YXN5bmMgZnVuY3Rpb24gZ2V0U3RvcCgpIHtcblx0XHRmZXRjaChgJHttb3ZodHRwfS9TdG9wYCwge21vZGU6IFwiY29yc1wiLCBtZXRob2Q6IFwiR0VUXCJ9KVxuXHRcdC50aGVuKHIgPT4gci5qc29uKCkpXG5cdFx0LnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxuICAgICAgICB9KS5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSk7XG5cdH1cbiAgICBsZXQgaGFuZGxlU3RvcFN1Ym1pdCA9ICgpID0+IHtcbiAgICAgICAgbGV0IHByb21pc2UgPSBnZXRTdG9wKCkuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpO1xuXHR9XG5cdFxuXHRhc3luYyBmdW5jdGlvbiBnZXRQcmV2aW91cygpIHtcblx0XHRmZXRjaChgJHttb3ZodHRwfS9QcmV2aW91c2AsIHttb2RlOiBcImNvcnNcIiwgbWV0aG9kOiBcIkdFVFwifSlcblx0XHQudGhlbihyID0+IHIuanNvbigpKVxuXHRcdC50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSlcbiAgICAgICAgfSkuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpO1xuXHR9XG4gICAgbGV0IGhhbmRsZVByZXZpb3VzU3VibWl0ID0gKCkgPT4ge1xuICAgICAgICBsZXQgcHJvbWlzZSA9IGdldFByZXZpb3VzKCkuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpO1xuXHR9XG5cblx0YXN5bmMgZnVuY3Rpb24gZ2V0UGF1c2UoKSB7XG5cdFx0ZmV0Y2goYCR7bW92aHR0cH0vUGF1c2VgLCB7bW9kZTogXCJjb3JzXCIsIG1ldGhvZDogXCJHRVRcIn0pXG5cdFx0LnRoZW4ociA9PiByLmpzb24oKSlcblx0XHQudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgICAgIH0pLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKTtcblx0fVxuICAgIGxldCBoYW5kbGVQYXVzZVN1Ym1pdCA9ICgpID0+IHtcblx0ICAgIGxldCBwcm9taXNlID0gZ2V0UGF1c2UoKS5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSk7XG5cdFx0ZnVjaygpXG5cdH1cblxuXHRhc3luYyBmdW5jdGlvbiBnZXRQbGF5KCkge1xuXHRcdGZldGNoKGAke21vdmh0dHB9L1BsYXlgLCB7bW9kZTogXCJjb3JzXCIsIG1ldGhvZDogXCJHRVRcIn0pXG5cdFx0LnRoZW4ociA9PiByLmpzb24oKSlcblx0XHQudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgICAgIH0pLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKTtcblx0fVxuICAgIGxldCBoYW5kbGVQbGF5U3VibWl0ID0gKCkgPT4ge1xuXHQgICAgbGV0IHByb21pc2UgPSBnZXRQbGF5KCkuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpO1xuXHRcdGZ1Y2soKVxuXHR9XG5cblx0bGV0IHZpc2libGUgPSBmYWxzZTtcbiAgICBsZXQgZnVjayA9ICgpID0+IHtcbiAgICAgICAgaWYgKHZpc2libGUpIHtcbiAgICAgICAgICAgIHZpc2libGUgPSBmYWxzZVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmlzaWJsZSA9IHRydWVcbiAgICAgICAgfVxuXHR9XG48L3NjcmlwdD5cblxuPG5hdj5cblx0PHVsPlxuXHRcdDxidXR0b24gb246Y2xpY2s9e2hhbmRsZVByZXZpb3VzU3VibWl0fSA+cHJldmlvdXM8L2J1dHRvbj5cblx0XHR7I2lmIHZpc2libGV9XG5cdFx0XHQ8YnV0dG9uIG9uOmNsaWNrPXtoYW5kbGVQbGF5U3VibWl0fT5wbGF5PC9idXR0b24+XG5cdFx0ezplbHNlfVxuXHRcdFx0PGJ1dHRvbiBvbjpjbGljaz17aGFuZGxlUGF1c2VTdWJtaXR9PnBhdXNlPC9idXR0b24+XG5cdFx0ey9pZn1cblx0XHQ8YnV0dG9uIG9uOmNsaWNrPXtoYW5kbGVTdG9wU3VibWl0fSA+c3RvcDwvYnV0dG9uPlxuXHRcdDxidXR0b24gb246Y2xpY2s9e2hhbmRsZU5leHRTdWJtaXR9ID5uZXh0PC9idXR0b24+XG5cdDwvdWw+XG48L25hdj5cblxuPHN0eWxlPlxuXG5cdGJ1dHRvbiB7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogbGF3bmdyZWVuO1xuXHRcdGJvcmRlci1yYWRpdXM6IDdweDtcblx0XHRib3JkZXItY29sb3I6IGJsYWNrO1xuXHRcdHBhZGRpbmc6IDdweDtcblx0XHR3aWR0aDogMjQlO1xuXHRcdGNvbG9yOiBibGFjaztcblx0fVxuXG48L3N0eWxlPiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0VBNEVxQixHQUFpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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
