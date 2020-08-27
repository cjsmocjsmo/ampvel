import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, W as movhttp, g as globals, e as element, t as text, p as space, c as claim_element, a as children, b as claim_text, f as detach_dev, r as claim_space, h as attr_dev, j as add_location, k as insert_dev, l as append_dev, m as listen_dev, n as noop, U as run_all } from './client.2692dbe3.js';

/* src/components/Controls.svelte generated by Svelte v3.24.0 */

const { console: console_1 } = globals;
const file = "src/components/Controls.svelte";

// (83:2) {:else}
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
			add_location(button, file, 83, 3, 2078);
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
		source: "(83:2) {:else}",
		ctx
	});

	return block;
}

// (81:2) {#if visible}
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
			add_location(button, file, 81, 3, 2015);
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
		source: "(81:2) {#if visible}",
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
			add_location(button0, file, 79, 2, 1937);
			attr_dev(button1, "class", "svelte-1fzjfwg");
			add_location(button1, file, 85, 2, 2140);
			attr_dev(button2, "class", "svelte-1fzjfwg");
			add_location(button2, file, 86, 2, 2193);
			add_location(ul, file, 78, 1, 1930);
			add_location(nav, file, 77, 0, 1923);
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

	let movhttp_value;

	const unsubampvel = movhttp_value.subscribe(value => {
		movhttp_value = value;
	});

	async function getPrevious() {
		fetch(`${movhttp_value}/Previous`, { mode: "cors", method: "GET" }).then(r => r.json()).then(data => {
			console.log(data);
		}).catch(err => console.log(err));
	}

	let handlePreviousSubmit = () => {
		let promise = getPrevious().catch(err => console.log(err));
	};

	async function getPause() {
		fetch(`${movhttp_value}/Pause`, { mode: "cors", method: "GET" }).then(r => r.json()).then(data => {
			console.log(data);
		}).catch(err => console.log(err));
	}

	let handlePauseSubmit = () => {
		let promise = getPause().catch(err => console.log(err));
		fuck();
	};

	async function getPlay() {
		fetch(`${movhttp_value}/Play`, { mode: "cors", method: "GET" }).then(r => r.json()).then(data => {
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
		movhttp_value,
		unsubampvel,
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
		if ("movhttp_value" in $$props) movhttp_value = $$props.movhttp_value;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29udHJvbHMuNjFkZmI0OTAuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0NvbnRyb2xzLnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0PlxuXHRpbXBvcnQgeyBtb3ZodHRwIH0gZnJvbSAnLi9QbGF5ZXJTdG9yZS5qcydcblxuICAgIGFzeW5jIGZ1bmN0aW9uIGdldE5leHQoKSB7XG5cdFx0ZmV0Y2goYCR7bW92aHR0cH0vTmV4dGAsIHttb2RlOiBcImNvcnNcIiwgbWV0aG9kOiBcIkdFVFwifSlcblx0XHQudGhlbihyID0+IHIuanNvbigpKVxuXHRcdC50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSlcbiAgICAgICAgfSkuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpO1xuXHR9XG4gICAgbGV0IGhhbmRsZU5leHRTdWJtaXQgPSAoKSA9PiB7XG4gICAgICAgIGxldCBwcm9taXNlID0gZ2V0TmV4dCgpLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKTtcbiAgICB9XG5cblx0YXN5bmMgZnVuY3Rpb24gZ2V0U3RvcCgpIHtcblx0XHRmZXRjaChgJHttb3ZodHRwfS9TdG9wYCwge21vZGU6IFwiY29yc1wiLCBtZXRob2Q6IFwiR0VUXCJ9KVxuXHRcdC50aGVuKHIgPT4gci5qc29uKCkpXG5cdFx0LnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxuICAgICAgICB9KS5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSk7XG5cdH1cbiAgICBsZXQgaGFuZGxlU3RvcFN1Ym1pdCA9ICgpID0+IHtcbiAgICAgICAgbGV0IHByb21pc2UgPSBnZXRTdG9wKCkuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpO1xuXHR9XG5cdFxuXHRsZXQgbW92aHR0cF92YWx1ZTtcblx0XG4gICAgY29uc3QgdW5zdWJhbXB2ZWwgPSBtb3ZodHRwX3ZhbHVlLnN1YnNjcmliZSh2YWx1ZSA9PiB7XG4gICAgICBtb3ZodHRwX3ZhbHVlID0gdmFsdWVcbiAgICB9KVxuXG5cblx0YXN5bmMgZnVuY3Rpb24gZ2V0UHJldmlvdXMoKSB7XG5cdFx0ZmV0Y2goYCR7bW92aHR0cF92YWx1ZX0vUHJldmlvdXNgLCB7bW9kZTogXCJjb3JzXCIsIG1ldGhvZDogXCJHRVRcIn0pXG5cdFx0LnRoZW4ociA9PiByLmpzb24oKSlcblx0XHQudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgICAgIH0pLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKTtcblx0fVxuICAgIGxldCBoYW5kbGVQcmV2aW91c1N1Ym1pdCA9ICgpID0+IHtcbiAgICAgICAgbGV0IHByb21pc2UgPSBnZXRQcmV2aW91cygpLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKTtcblx0fVxuXG5cdGFzeW5jIGZ1bmN0aW9uIGdldFBhdXNlKCkge1xuXHRcdGZldGNoKGAke21vdmh0dHBfdmFsdWV9L1BhdXNlYCwge21vZGU6IFwiY29yc1wiLCBtZXRob2Q6IFwiR0VUXCJ9KVxuXHRcdC50aGVuKHIgPT4gci5qc29uKCkpXG5cdFx0LnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxuICAgICAgICB9KS5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSk7XG5cdH1cbiAgICBsZXQgaGFuZGxlUGF1c2VTdWJtaXQgPSAoKSA9PiB7XG5cdCAgICBsZXQgcHJvbWlzZSA9IGdldFBhdXNlKCkuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpO1xuXHRcdGZ1Y2soKVxuXHR9XG5cblx0YXN5bmMgZnVuY3Rpb24gZ2V0UGxheSgpIHtcblx0XHRmZXRjaChgJHttb3ZodHRwX3ZhbHVlfS9QbGF5YCwge21vZGU6IFwiY29yc1wiLCBtZXRob2Q6IFwiR0VUXCJ9KVxuXHRcdC50aGVuKHIgPT4gci5qc29uKCkpXG5cdFx0LnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxuICAgICAgICB9KS5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSk7XG5cdH1cbiAgICBsZXQgaGFuZGxlUGxheVN1Ym1pdCA9ICgpID0+IHtcblx0ICAgIGxldCBwcm9taXNlID0gZ2V0UGxheSgpLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKTtcblx0XHRmdWNrKClcblx0fVxuXG5cdGxldCB2aXNpYmxlID0gZmFsc2U7XG4gICAgbGV0IGZ1Y2sgPSAoKSA9PiB7XG4gICAgICAgIGlmICh2aXNpYmxlKSB7XG4gICAgICAgICAgICB2aXNpYmxlID0gZmFsc2VcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZpc2libGUgPSB0cnVlXG4gICAgICAgIH1cblx0fVxuPC9zY3JpcHQ+XG5cbjxuYXY+XG5cdDx1bD5cblx0XHQ8YnV0dG9uIG9uOmNsaWNrPXtoYW5kbGVQcmV2aW91c1N1Ym1pdH0gPnByZXZpb3VzPC9idXR0b24+XG5cdFx0eyNpZiB2aXNpYmxlfVxuXHRcdFx0PGJ1dHRvbiBvbjpjbGljaz17aGFuZGxlUGxheVN1Ym1pdH0+cGxheTwvYnV0dG9uPlxuXHRcdHs6ZWxzZX1cblx0XHRcdDxidXR0b24gb246Y2xpY2s9e2hhbmRsZVBhdXNlU3VibWl0fT5wYXVzZTwvYnV0dG9uPlxuXHRcdHsvaWZ9XG5cdFx0PGJ1dHRvbiBvbjpjbGljaz17aGFuZGxlU3RvcFN1Ym1pdH0gPnN0b3A8L2J1dHRvbj5cblx0XHQ8YnV0dG9uIG9uOmNsaWNrPXtoYW5kbGVOZXh0U3VibWl0fSA+bmV4dDwvYnV0dG9uPlxuXHQ8L3VsPlxuPC9uYXY+XG5cbjxzdHlsZT5cblxuXHRidXR0b24ge1xuXHRcdGJhY2tncm91bmQtY29sb3I6IGxhd25ncmVlbjtcblx0XHRib3JkZXItcmFkaXVzOiA3cHg7XG5cdFx0Ym9yZGVyLWNvbG9yOiBibGFjaztcblx0XHRwYWRkaW5nOiA3cHg7XG5cdFx0d2lkdGg6IDI0JTtcblx0XHRjb2xvcjogYmxhY2s7XG5cdH1cblxuPC9zdHlsZT4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2dFQW1GcUIsR0FBaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7K0RBRmpCLEdBQWdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0JBRDlCLEdBQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzJEQURNLEdBQW9CO3VEQU1wQixHQUFnQjt1REFDaEIsR0FBZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2dCQW5GakIsT0FBTztFQUN4QixLQUFLLElBQUksT0FBTyxXQUFVLElBQUksRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEtBQUssSUFDcEQsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxJQUNoQixJQUFJLENBQUMsSUFBSTtHQUNBLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSTtLQUNqQixLQUFLLENBQUMsR0FBRyxJQUFJLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRzs7O0tBRS9CLGdCQUFnQjtNQUNaLE9BQU8sR0FBRyxPQUFPLEdBQUcsS0FBSyxDQUFDLEdBQUcsSUFBSSxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUc7OztnQkFHNUMsT0FBTztFQUNyQixLQUFLLElBQUksT0FBTyxXQUFVLElBQUksRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEtBQUssSUFDcEQsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxJQUNoQixJQUFJLENBQUMsSUFBSTtHQUNBLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSTtLQUNqQixLQUFLLENBQUMsR0FBRyxJQUFJLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRzs7O0tBRS9CLGdCQUFnQjtNQUNaLE9BQU8sR0FBRyxPQUFPLEdBQUcsS0FBSyxDQUFDLEdBQUcsSUFBSSxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUc7OztLQUd2RCxhQUFhOztPQUVSLFdBQVcsR0FBRyxhQUFhLENBQUMsU0FBUyxDQUFDLEtBQUs7RUFDL0MsYUFBYSxHQUFHLEtBQUs7OztnQkFJWCxXQUFXO0VBQ3pCLEtBQUssSUFBSSxhQUFhLGVBQWMsSUFBSSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsS0FBSyxJQUM5RCxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLElBQ2hCLElBQUksQ0FBQyxJQUFJO0dBQ0EsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJO0tBQ2pCLEtBQUssQ0FBQyxHQUFHLElBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHOzs7S0FFL0Isb0JBQW9CO01BQ2hCLE9BQU8sR0FBRyxXQUFXLEdBQUcsS0FBSyxDQUFDLEdBQUcsSUFBSSxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUc7OztnQkFHaEQsUUFBUTtFQUN0QixLQUFLLElBQUksYUFBYSxZQUFXLElBQUksRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEtBQUssSUFDM0QsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxJQUNoQixJQUFJLENBQUMsSUFBSTtHQUNBLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSTtLQUNqQixLQUFLLENBQUMsR0FBRyxJQUFJLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRzs7O0tBRS9CLGlCQUFpQjtNQUNoQixPQUFPLEdBQUcsUUFBUSxHQUFHLEtBQUssQ0FBQyxHQUFHLElBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHO0VBQ3hELElBQUk7OztnQkFHVSxPQUFPO0VBQ3JCLEtBQUssSUFBSSxhQUFhLFdBQVUsSUFBSSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsS0FBSyxJQUMxRCxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLElBQ2hCLElBQUksQ0FBQyxJQUFJO0dBQ0EsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJO0tBQ2pCLEtBQUssQ0FBQyxHQUFHLElBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHOzs7S0FFL0IsZ0JBQWdCO01BQ2YsT0FBTyxHQUFHLE9BQU8sR0FBRyxLQUFLLENBQUMsR0FBRyxJQUFJLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRztFQUN2RCxJQUFJOzs7S0FHRCxPQUFPLEdBQUcsS0FBSzs7S0FDWixJQUFJO01BQ0EsT0FBTzttQkFDUCxPQUFPLEdBQUcsS0FBSzs7bUJBRWYsT0FBTyxHQUFHLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
