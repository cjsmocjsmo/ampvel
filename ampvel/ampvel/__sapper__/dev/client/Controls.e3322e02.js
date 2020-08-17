import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, g as globals, e as element, t as text, p as space, c as claim_element, a as children, b as claim_text, f as detach_dev, r as claim_space, h as attr_dev, j as add_location, k as insert_dev, l as append_dev, m as listen_dev, n as noop, Q as run_all } from './client.aec25243.js';

/* src/components/Controls.svelte generated by Svelte v3.24.0 */

const { console: console_1 } = globals;
const file = "src/components/Controls.svelte";

// (75:2) {:else}
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
			add_location(button, file, 75, 3, 1969);
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
		source: "(75:2) {:else}",
		ctx
	});

	return block;
}

// (73:2) {#if visible}
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
			add_location(button, file, 73, 3, 1906);
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
		source: "(73:2) {#if visible}",
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
			add_location(button0, file, 71, 2, 1828);
			attr_dev(button1, "class", "svelte-1fzjfwg");
			add_location(button1, file, 77, 2, 2031);
			attr_dev(button2, "class", "svelte-1fzjfwg");
			add_location(button2, file, 78, 2, 2084);
			add_location(ul, file, 70, 1, 1821);
			add_location(nav, file, 69, 0, 1814);
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

async function getNext() {
	fetch(`http://192.168.0.42:8181/Next`, { mode: "cors", method: "GET" }).then(r => r.json()).then(data => {
		console.log(data);
	}).catch(err => console.log(err));
}

async function getStop() {
	fetch(`http://192.168.0.42:8181/Stop`, { mode: "cors", method: "GET" }).then(r => r.json()).then(data => {
		console.log(data);
	}).catch(err => console.log(err));
}

async function getPrevious() {
	fetch(`http://192.168.0.42:8181/Previous`, { mode: "cors", method: "GET" }).then(r => r.json()).then(data => {
		console.log(data);
	}).catch(err => console.log(err));
}

async function getPause() {
	fetch(`http://192.168.0.42:8181/Pause`, { mode: "cors", method: "GET" }).then(r => r.json()).then(data => {
		console.log(data);
	}).catch(err => console.log(err));
}

async function getPlay() {
	fetch(`http://192.168.0.42:8181/Play`, { mode: "cors", method: "GET" }).then(r => r.json()).then(data => {
		console.log(data);
	}).catch(err => console.log(err));
}

function instance($$self, $$props, $$invalidate) {
	let handleNextSubmit = () => {
		let promise = getNext().catch(err => console.log(err));
	};

	let handleStopSubmit = () => {
		let promise = getStop().catch(err => console.log(err));
	};

	let handlePreviousSubmit = () => {
		let promise = getPrevious().catch(err => console.log(err));
	};

	let handlePauseSubmit = () => {
		let promise = getPause().catch(err => console.log(err));
		fuck();
	};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29udHJvbHMuZTMzMjJlMDIuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0NvbnRyb2xzLnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0PlxuXHRcbiAgICBhc3luYyBmdW5jdGlvbiBnZXROZXh0KCkge1xuXHRcdGZldGNoKGBodHRwOi8vMTkyLjE2OC4wLjQyOjgxODEvTmV4dGAsIHttb2RlOiBcImNvcnNcIiwgbWV0aG9kOiBcIkdFVFwifSlcblx0XHQudGhlbihyID0+IHIuanNvbigpKVxuXHRcdC50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSlcbiAgICAgICAgfSkuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpO1xuXHR9XG4gICAgbGV0IGhhbmRsZU5leHRTdWJtaXQgPSAoKSA9PiB7XG4gICAgICAgIGxldCBwcm9taXNlID0gZ2V0TmV4dCgpLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKTtcbiAgICB9XG5cblx0YXN5bmMgZnVuY3Rpb24gZ2V0U3RvcCgpIHtcblx0XHRmZXRjaChgaHR0cDovLzE5Mi4xNjguMC40Mjo4MTgxL1N0b3BgLCB7bW9kZTogXCJjb3JzXCIsIG1ldGhvZDogXCJHRVRcIn0pXG5cdFx0LnRoZW4ociA9PiByLmpzb24oKSlcblx0XHQudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgICAgIH0pLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKTtcblx0fVxuICAgIGxldCBoYW5kbGVTdG9wU3VibWl0ID0gKCkgPT4ge1xuICAgICAgICBsZXQgcHJvbWlzZSA9IGdldFN0b3AoKS5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSk7XG5cdH1cblx0XG5cdGFzeW5jIGZ1bmN0aW9uIGdldFByZXZpb3VzKCkge1xuXHRcdGZldGNoKGBodHRwOi8vMTkyLjE2OC4wLjQyOjgxODEvUHJldmlvdXNgLCB7bW9kZTogXCJjb3JzXCIsIG1ldGhvZDogXCJHRVRcIn0pXG5cdFx0LnRoZW4ociA9PiByLmpzb24oKSlcblx0XHQudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgICAgIH0pLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKTtcblx0fVxuICAgIGxldCBoYW5kbGVQcmV2aW91c1N1Ym1pdCA9ICgpID0+IHtcbiAgICAgICAgbGV0IHByb21pc2UgPSBnZXRQcmV2aW91cygpLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKTtcblx0fVxuXG5cdGFzeW5jIGZ1bmN0aW9uIGdldFBhdXNlKCkge1xuXHRcdGZldGNoKGBodHRwOi8vMTkyLjE2OC4wLjQyOjgxODEvUGF1c2VgLCB7bW9kZTogXCJjb3JzXCIsIG1ldGhvZDogXCJHRVRcIn0pXG5cdFx0LnRoZW4ociA9PiByLmpzb24oKSlcblx0XHQudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgICAgIH0pLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKTtcblx0fVxuICAgIGxldCBoYW5kbGVQYXVzZVN1Ym1pdCA9ICgpID0+IHtcblx0ICAgIGxldCBwcm9taXNlID0gZ2V0UGF1c2UoKS5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSk7XG5cdFx0ZnVjaygpXG5cdH1cblxuXHRhc3luYyBmdW5jdGlvbiBnZXRQbGF5KCkge1xuXHRcdGZldGNoKGBodHRwOi8vMTkyLjE2OC4wLjQyOjgxODEvUGxheWAsIHttb2RlOiBcImNvcnNcIiwgbWV0aG9kOiBcIkdFVFwifSlcblx0XHQudGhlbihyID0+IHIuanNvbigpKVxuXHRcdC50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSlcbiAgICAgICAgfSkuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpO1xuXHR9XG4gICAgbGV0IGhhbmRsZVBsYXlTdWJtaXQgPSAoKSA9PiB7XG5cdCAgICBsZXQgcHJvbWlzZSA9IGdldFBsYXkoKS5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSk7XG5cdFx0ZnVjaygpXG5cdH1cblxuXHRsZXQgdmlzaWJsZSA9IGZhbHNlO1xuICAgIGxldCBmdWNrID0gKCkgPT4ge1xuICAgICAgICBpZiAodmlzaWJsZSkge1xuICAgICAgICAgICAgdmlzaWJsZSA9IGZhbHNlXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2aXNpYmxlID0gdHJ1ZVxuICAgICAgICB9XG5cdH1cbjwvc2NyaXB0PlxuXG48bmF2PlxuXHQ8dWw+XG5cdFx0PGJ1dHRvbiBvbjpjbGljaz17aGFuZGxlUHJldmlvdXNTdWJtaXR9ID5wcmV2aW91czwvYnV0dG9uPlxuXHRcdHsjaWYgdmlzaWJsZX1cblx0XHRcdDxidXR0b24gb246Y2xpY2s9e2hhbmRsZVBsYXlTdWJtaXR9PnBsYXk8L2J1dHRvbj5cblx0XHR7OmVsc2V9XG5cdFx0XHQ8YnV0dG9uIG9uOmNsaWNrPXtoYW5kbGVQYXVzZVN1Ym1pdH0+cGF1c2U8L2J1dHRvbj5cblx0XHR7L2lmfVxuXHRcdDxidXR0b24gb246Y2xpY2s9e2hhbmRsZVN0b3BTdWJtaXR9ID5zdG9wPC9idXR0b24+XG5cdFx0PGJ1dHRvbiBvbjpjbGljaz17aGFuZGxlTmV4dFN1Ym1pdH0gPm5leHQ8L2J1dHRvbj5cblx0PC91bD5cbjwvbmF2PlxuXG48c3R5bGU+XG5cblx0YnV0dG9uIHtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiBsYXduZ3JlZW47XG5cdFx0Ym9yZGVyLXJhZGl1czogN3B4O1xuXHRcdGJvcmRlci1jb2xvcjogYmxhY2s7XG5cdFx0cGFkZGluZzogN3B4O1xuXHRcdHdpZHRoOiAyNCU7XG5cdFx0Y29sb3I6IGJsYWNrO1xuXHR9XG5cbjwvc3R5bGU+Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztnRUEyRXFCLEdBQWlCOzs7Ozs7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
