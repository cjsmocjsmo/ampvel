import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, o as onMount, v as validate_slots, g as globals, e as element, t as text, c as claim_element, a as children, b as claim_text, f as detach_dev, h as attr_dev, j as add_location, k as insert_dev, l as append_dev, m as listen_dev, n as noop, p as space, q as claim_space, r as run_all, u as query_selector_all, w as set_data_dev } from './client.d1d9cc5c.js';

/* src/routes/index.svelte generated by Svelte v3.24.0 */

const { console: console_1 } = globals;
const file = "src/routes/index.svelte";

// (132:1) {:else}
function create_else_block_1(ctx) {
	let li;
	let span0;
	let t0;
	let span1;
	let t1;

	const block = {
		c: function create() {
			li = element("li");
			span0 = element("span");
			t0 = text("Movies:");
			span1 = element("span");
			t1 = text(/*movcount*/ ctx[4]);
			this.h();
		},
		l: function claim(nodes) {
			li = claim_element(nodes, "LI", { class: true });
			var li_nodes = children(li);
			span0 = claim_element(li_nodes, "SPAN", { id: true, class: true });
			var span0_nodes = children(span0);
			t0 = claim_text(span0_nodes, "Movies:");
			span0_nodes.forEach(detach_dev);
			span1 = claim_element(li_nodes, "SPAN", { id: true, class: true });
			var span1_nodes = children(span1);
			t1 = claim_text(span1_nodes, /*movcount*/ ctx[4]);
			span1_nodes.forEach(detach_dev);
			li_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(span0, "id", "MovSetup2");
			attr_dev(span0, "class", "svelte-e40yap");
			add_location(span0, file, 132, 6, 2949);
			attr_dev(span1, "id", "artspan");
			attr_dev(span1, "class", "svelte-e40yap");
			add_location(span1, file, 132, 41, 2984);
			attr_dev(li, "class", "svelte-e40yap");
			add_location(li, file, 132, 2, 2945);
		},
		m: function mount(target, anchor) {
			insert_dev(target, li, anchor);
			append_dev(li, span0);
			append_dev(span0, t0);
			append_dev(li, span1);
			append_dev(span1, t1);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*movcount*/ 16) set_data_dev(t1, /*movcount*/ ctx[4]);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(li);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_else_block_1.name,
		type: "else",
		source: "(132:1) {:else}",
		ctx
	});

	return block;
}

// (130:1) {#if movcount < 1}
function create_if_block_4(ctx) {
	let li;
	let span0;
	let t0;
	let span1;
	let t1;

	const block = {
		c: function create() {
			li = element("li");
			span0 = element("span");
			t0 = text("Movies:");
			span1 = element("span");
			t1 = text(/*movcount*/ ctx[4]);
			this.h();
		},
		l: function claim(nodes) {
			li = claim_element(nodes, "LI", { class: true });
			var li_nodes = children(li);
			span0 = claim_element(li_nodes, "SPAN", { id: true, class: true });
			var span0_nodes = children(span0);
			t0 = claim_text(span0_nodes, "Movies:");
			span0_nodes.forEach(detach_dev);
			span1 = claim_element(li_nodes, "SPAN", { id: true, class: true });
			var span1_nodes = children(span1);
			t1 = claim_text(span1_nodes, /*movcount*/ ctx[4]);
			span1_nodes.forEach(detach_dev);
			li_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(span0, "id", "MovSetup1");
			attr_dev(span0, "class", "svelte-e40yap");
			add_location(span0, file, 130, 6, 2857);
			attr_dev(span1, "id", "artspan");
			attr_dev(span1, "class", "svelte-e40yap");
			add_location(span1, file, 130, 41, 2892);
			attr_dev(li, "class", "svelte-e40yap");
			add_location(li, file, 130, 2, 2853);
		},
		m: function mount(target, anchor) {
			insert_dev(target, li, anchor);
			append_dev(li, span0);
			append_dev(span0, t0);
			append_dev(li, span1);
			append_dev(span1, t1);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*movcount*/ 16) set_data_dev(t1, /*movcount*/ ctx[4]);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(li);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block_4.name,
		type: "if",
		source: "(130:1) {#if movcount < 1}",
		ctx
	});

	return block;
}

// (138:1) {:else}
function create_else_block(ctx) {
	let li;
	let span0;
	let t0;
	let span1;
	let t1;

	const block = {
		c: function create() {
			li = element("li");
			span0 = element("span");
			t0 = text("TV Shows:");
			span1 = element("span");
			t1 = text(/*tvcount*/ ctx[5]);
			this.h();
		},
		l: function claim(nodes) {
			li = claim_element(nodes, "LI", { class: true });
			var li_nodes = children(li);
			span0 = claim_element(li_nodes, "SPAN", { id: true, class: true });
			var span0_nodes = children(span0);
			t0 = claim_text(span0_nodes, "TV Shows:");
			span0_nodes.forEach(detach_dev);
			span1 = claim_element(li_nodes, "SPAN", { id: true, class: true });
			var span1_nodes = children(span1);
			t1 = claim_text(span1_nodes, /*tvcount*/ ctx[5]);
			span1_nodes.forEach(detach_dev);
			li_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(span0, "id", "TVSetup2");
			attr_dev(span0, "class", "svelte-e40yap");
			add_location(span0, file, 138, 6, 3151);
			attr_dev(span1, "id", "artspan");
			attr_dev(span1, "class", "svelte-e40yap");
			add_location(span1, file, 138, 42, 3187);
			attr_dev(li, "class", "svelte-e40yap");
			add_location(li, file, 138, 2, 3147);
		},
		m: function mount(target, anchor) {
			insert_dev(target, li, anchor);
			append_dev(li, span0);
			append_dev(span0, t0);
			append_dev(li, span1);
			append_dev(span1, t1);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*tvcount*/ 32) set_data_dev(t1, /*tvcount*/ ctx[5]);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(li);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_else_block.name,
		type: "else",
		source: "(138:1) {:else}",
		ctx
	});

	return block;
}

// (136:1) {#if tvcount < 1}
function create_if_block_3(ctx) {
	let li;
	let span0;
	let t0;
	let span1;
	let t1;

	const block = {
		c: function create() {
			li = element("li");
			span0 = element("span");
			t0 = text("TV Shows:");
			span1 = element("span");
			t1 = text(/*tvcount*/ ctx[5]);
			this.h();
		},
		l: function claim(nodes) {
			li = claim_element(nodes, "LI", { class: true });
			var li_nodes = children(li);
			span0 = claim_element(li_nodes, "SPAN", { id: true, class: true });
			var span0_nodes = children(span0);
			t0 = claim_text(span0_nodes, "TV Shows:");
			span0_nodes.forEach(detach_dev);
			span1 = claim_element(li_nodes, "SPAN", { id: true, class: true });
			var span1_nodes = children(span1);
			t1 = claim_text(span1_nodes, /*tvcount*/ ctx[5]);
			span1_nodes.forEach(detach_dev);
			li_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(span0, "id", "TVSetup1");
			attr_dev(span0, "class", "svelte-e40yap");
			add_location(span0, file, 136, 6, 3059);
			attr_dev(span1, "id", "artspan");
			attr_dev(span1, "class", "svelte-e40yap");
			add_location(span1, file, 136, 42, 3095);
			attr_dev(li, "class", "svelte-e40yap");
			add_location(li, file, 136, 2, 3055);
		},
		m: function mount(target, anchor) {
			insert_dev(target, li, anchor);
			append_dev(li, span0);
			append_dev(span0, t0);
			append_dev(li, span1);
			append_dev(span1, t1);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*tvcount*/ 32) set_data_dev(t1, /*tvcount*/ ctx[5]);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(li);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block_3.name,
		type: "if",
		source: "(136:1) {#if tvcount < 1}",
		ctx
	});

	return block;
}

// (144:1) {#if movcount < 1 || movcount === "undefined"}
function create_if_block_2(ctx) {
	let button;
	let t;
	let mounted;
	let dispose;

	const block = {
		c: function create() {
			button = element("button");
			t = text("Movie Setup");
			this.h();
		},
		l: function claim(nodes) {
			button = claim_element(nodes, "BUTTON", { class: true });
			var button_nodes = children(button);
			t = claim_text(button_nodes, "Movie Setup");
			button_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(button, "class", "svelte-e40yap");
			add_location(button, file, 144, 2, 3298);
		},
		m: function mount(target, anchor) {
			insert_dev(target, button, anchor);
			append_dev(button, t);

			if (!mounted) {
				dispose = listen_dev(button, "click", /*handleMovSetUpClick*/ ctx[6], false, false, false);
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
		id: create_if_block_2.name,
		type: "if",
		source: "(144:1) {#if movcount < 1 || movcount === \\\"undefined\\\"}",
		ctx
	});

	return block;
}

// (147:1) {#if tvcount < 1 || tvcount === "undefined"}
function create_if_block_1(ctx) {
	let button;
	let t;
	let mounted;
	let dispose;

	const block = {
		c: function create() {
			button = element("button");
			t = text("TVShows Setup");
			this.h();
		},
		l: function claim(nodes) {
			button = claim_element(nodes, "BUTTON", { class: true });
			var button_nodes = children(button);
			t = claim_text(button_nodes, "TVShows Setup");
			button_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(button, "class", "svelte-e40yap");
			add_location(button, file, 147, 2, 3414);
		},
		m: function mount(target, anchor) {
			insert_dev(target, button, anchor);
			append_dev(button, t);

			if (!mounted) {
				dispose = listen_dev(button, "click", /*handleTVSetUpClick*/ ctx[7], false, false, false);
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
		id: create_if_block_1.name,
		type: "if",
		source: "(147:1) {#if tvcount < 1 || tvcount === \\\"undefined\\\"}",
		ctx
	});

	return block;
}

// (150:1) {#if movcount > 0 || tvcount > 0 }
function create_if_block(ctx) {
	let button0;
	let t0;
	let t1;
	let button1;
	let t2;
	let mounted;
	let dispose;

	const block = {
		c: function create() {
			button0 = element("button");
			t0 = text("Movie Update");
			t1 = space();
			button1 = element("button");
			t2 = text("TV Shows Update");
			this.h();
		},
		l: function claim(nodes) {
			button0 = claim_element(nodes, "BUTTON", { class: true });
			var button0_nodes = children(button0);
			t0 = claim_text(button0_nodes, "Movie Update");
			button0_nodes.forEach(detach_dev);
			t1 = claim_space(nodes);
			button1 = claim_element(nodes, "BUTTON", { class: true });
			var button1_nodes = children(button1);
			t2 = claim_text(button1_nodes, "TV Shows Update");
			button1_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(button0, "class", "svelte-e40yap");
			add_location(button0, file, 150, 2, 3521);
			attr_dev(button1, "class", "svelte-e40yap");
			add_location(button1, file, 151, 2, 3586);
		},
		m: function mount(target, anchor) {
			insert_dev(target, button0, anchor);
			append_dev(button0, t0);
			insert_dev(target, t1, anchor);
			insert_dev(target, button1, anchor);
			append_dev(button1, t2);

			if (!mounted) {
				dispose = [
					listen_dev(button0, "click", /*handleMovUpDateClick*/ ctx[8], false, false, false),
					listen_dev(button1, "click", /*handleTVUpDateClick*/ ctx[9], false, false, false)
				];

				mounted = true;
			}
		},
		p: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(button0);
			if (detaching) detach_dev(t1);
			if (detaching) detach_dev(button1);
			mounted = false;
			run_all(dispose);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block.name,
		type: "if",
		source: "(150:1) {#if movcount > 0 || tvcount > 0 }",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let t0;
	let ul0;
	let li0;
	let a;
	let t1;
	let t2;
	let figure;
	let img;
	let img_src_value;
	let t3;
	let figcaption;
	let t4;
	let t5;
	let ul1;
	let li1;
	let span0;
	let t6;
	let t7;
	let span1;
	let t8;
	let t9;
	let li2;
	let span2;
	let t10;
	let span3;
	let t11;
	let t12;
	let li3;
	let span4;
	let t13;
	let span5;
	let t14;
	let t15;
	let ul2;
	let t16;
	let t17;
	let nav;
	let t18;
	let t19;

	function select_block_type(ctx, dirty) {
		if (/*movcount*/ ctx[4] < 1) return create_if_block_4;
		return create_else_block_1;
	}

	let current_block_type = select_block_type(ctx);
	let if_block0 = current_block_type(ctx);

	function select_block_type_1(ctx, dirty) {
		if (/*tvcount*/ ctx[5] < 1) return create_if_block_3;
		return create_else_block;
	}

	let current_block_type_1 = select_block_type_1(ctx);
	let if_block1 = current_block_type_1(ctx);
	let if_block2 = (/*movcount*/ ctx[4] < 1 || /*movcount*/ ctx[4] === "undefined") && create_if_block_2(ctx);
	let if_block3 = (/*tvcount*/ ctx[5] < 1 || /*tvcount*/ ctx[5] === "undefined") && create_if_block_1(ctx);
	let if_block4 = (/*movcount*/ ctx[4] > 0 || /*tvcount*/ ctx[5] > 0) && create_if_block(ctx);

	const block = {
		c: function create() {
			t0 = space();
			ul0 = element("ul");
			li0 = element("li");
			a = element("a");
			t1 = text("YTS-EZTV");
			t2 = space();
			figure = element("figure");
			img = element("img");
			t3 = space();
			figcaption = element("figcaption");
			t4 = text("NASA Pic Of The Day");
			t5 = space();
			ul1 = element("ul");
			li1 = element("li");
			span0 = element("span");
			t6 = text("Artists:");
			t7 = space();
			span1 = element("span");
			t8 = text(/*artist*/ ctx[0]);
			t9 = space();
			li2 = element("li");
			span2 = element("span");
			t10 = text("Albums:");
			span3 = element("span");
			t11 = text(/*albums*/ ctx[1]);
			t12 = space();
			li3 = element("li");
			span4 = element("span");
			t13 = text("Songs:");
			span5 = element("span");
			t14 = text(/*mp3*/ ctx[2]);
			t15 = space();
			ul2 = element("ul");
			if_block0.c();
			t16 = space();
			if_block1.c();
			t17 = space();
			nav = element("nav");
			if (if_block2) if_block2.c();
			t18 = space();
			if (if_block3) if_block3.c();
			t19 = space();
			if (if_block4) if_block4.c();
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-1295xmn\"]", document.head);
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			ul0 = claim_element(nodes, "UL", { class: true });
			var ul0_nodes = children(ul0);
			li0 = claim_element(ul0_nodes, "LI", { class: true });
			var li0_nodes = children(li0);
			a = claim_element(li0_nodes, "A", { href: true });
			var a_nodes = children(a);
			t1 = claim_text(a_nodes, "YTS-EZTV");
			a_nodes.forEach(detach_dev);
			li0_nodes.forEach(detach_dev);
			ul0_nodes.forEach(detach_dev);
			t2 = claim_space(nodes);
			figure = claim_element(nodes, "FIGURE", { class: true });
			var figure_nodes = children(figure);
			img = claim_element(figure_nodes, "IMG", { alt: true, src: true, class: true });
			t3 = claim_space(figure_nodes);
			figcaption = claim_element(figure_nodes, "FIGCAPTION", {});
			var figcaption_nodes = children(figcaption);
			t4 = claim_text(figcaption_nodes, "NASA Pic Of The Day");
			figcaption_nodes.forEach(detach_dev);
			figure_nodes.forEach(detach_dev);
			t5 = claim_space(nodes);
			ul1 = claim_element(nodes, "UL", { class: true });
			var ul1_nodes = children(ul1);
			li1 = claim_element(ul1_nodes, "LI", { class: true });
			var li1_nodes = children(li1);
			span0 = claim_element(li1_nodes, "SPAN", {});
			var span0_nodes = children(span0);
			t6 = claim_text(span0_nodes, "Artists:");
			span0_nodes.forEach(detach_dev);
			t7 = claim_space(li1_nodes);
			span1 = claim_element(li1_nodes, "SPAN", { id: true, class: true });
			var span1_nodes = children(span1);
			t8 = claim_text(span1_nodes, /*artist*/ ctx[0]);
			span1_nodes.forEach(detach_dev);
			li1_nodes.forEach(detach_dev);
			t9 = claim_space(ul1_nodes);
			li2 = claim_element(ul1_nodes, "LI", { class: true });
			var li2_nodes = children(li2);
			span2 = claim_element(li2_nodes, "SPAN", {});
			var span2_nodes = children(span2);
			t10 = claim_text(span2_nodes, "Albums:");
			span2_nodes.forEach(detach_dev);
			span3 = claim_element(li2_nodes, "SPAN", { id: true, class: true });
			var span3_nodes = children(span3);
			t11 = claim_text(span3_nodes, /*albums*/ ctx[1]);
			span3_nodes.forEach(detach_dev);
			li2_nodes.forEach(detach_dev);
			t12 = claim_space(ul1_nodes);
			li3 = claim_element(ul1_nodes, "LI", { class: true });
			var li3_nodes = children(li3);
			span4 = claim_element(li3_nodes, "SPAN", {});
			var span4_nodes = children(span4);
			t13 = claim_text(span4_nodes, "Songs:");
			span4_nodes.forEach(detach_dev);
			span5 = claim_element(li3_nodes, "SPAN", { id: true, class: true });
			var span5_nodes = children(span5);
			t14 = claim_text(span5_nodes, /*mp3*/ ctx[2]);
			span5_nodes.forEach(detach_dev);
			li3_nodes.forEach(detach_dev);
			ul1_nodes.forEach(detach_dev);
			t15 = claim_space(nodes);
			ul2 = claim_element(nodes, "UL", { class: true });
			var ul2_nodes = children(ul2);
			if_block0.l(ul2_nodes);
			t16 = claim_space(ul2_nodes);
			if_block1.l(ul2_nodes);
			ul2_nodes.forEach(detach_dev);
			t17 = claim_space(nodes);
			nav = claim_element(nodes, "NAV", {});
			var nav_nodes = children(nav);
			if (if_block2) if_block2.l(nav_nodes);
			t18 = claim_space(nav_nodes);
			if (if_block3) if_block3.l(nav_nodes);
			t19 = claim_space(nav_nodes);
			if (if_block4) if_block4.l(nav_nodes);
			nav_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document.title = "AmpVel";
			attr_dev(a, "href", "http://192.168.0.42:4566/");
			add_location(a, file, 113, 5, 2457);
			attr_dev(li0, "class", "svelte-e40yap");
			add_location(li0, file, 113, 1, 2453);
			attr_dev(ul0, "class", "svelte-e40yap");
			add_location(ul0, file, 112, 0, 2447);
			attr_dev(img, "alt", "Success Kid");
			if (img.src !== (img_src_value = /*NASA*/ ctx[3])) attr_dev(img, "src", img_src_value);
			attr_dev(img, "class", "svelte-e40yap");
			add_location(img, file, 118, 1, 2529);
			add_location(figcaption, file, 119, 1, 2565);
			attr_dev(figure, "class", "svelte-e40yap");
			add_location(figure, file, 117, 0, 2519);
			add_location(span0, file, 123, 5, 2631);
			attr_dev(span1, "id", "artspan");
			attr_dev(span1, "class", "svelte-e40yap");
			add_location(span1, file, 123, 27, 2653);
			attr_dev(li1, "class", "svelte-e40yap");
			add_location(li1, file, 123, 1, 2627);
			add_location(span2, file, 124, 5, 2698);
			attr_dev(span3, "id", "artspan");
			attr_dev(span3, "class", "svelte-e40yap");
			add_location(span3, file, 124, 25, 2718);
			attr_dev(li2, "class", "svelte-e40yap");
			add_location(li2, file, 124, 1, 2694);
			add_location(span4, file, 125, 5, 2763);
			attr_dev(span5, "id", "artspan");
			attr_dev(span5, "class", "svelte-e40yap");
			add_location(span5, file, 125, 24, 2782);
			attr_dev(li3, "class", "svelte-e40yap");
			add_location(li3, file, 125, 1, 2759);
			attr_dev(ul1, "class", "svelte-e40yap");
			add_location(ul1, file, 122, 0, 2621);
			attr_dev(ul2, "class", "svelte-e40yap");
			add_location(ul2, file, 128, 0, 2826);
			add_location(nav, file, 142, 0, 3242);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, ul0, anchor);
			append_dev(ul0, li0);
			append_dev(li0, a);
			append_dev(a, t1);
			insert_dev(target, t2, anchor);
			insert_dev(target, figure, anchor);
			append_dev(figure, img);
			append_dev(figure, t3);
			append_dev(figure, figcaption);
			append_dev(figcaption, t4);
			insert_dev(target, t5, anchor);
			insert_dev(target, ul1, anchor);
			append_dev(ul1, li1);
			append_dev(li1, span0);
			append_dev(span0, t6);
			append_dev(li1, t7);
			append_dev(li1, span1);
			append_dev(span1, t8);
			append_dev(ul1, t9);
			append_dev(ul1, li2);
			append_dev(li2, span2);
			append_dev(span2, t10);
			append_dev(li2, span3);
			append_dev(span3, t11);
			append_dev(ul1, t12);
			append_dev(ul1, li3);
			append_dev(li3, span4);
			append_dev(span4, t13);
			append_dev(li3, span5);
			append_dev(span5, t14);
			insert_dev(target, t15, anchor);
			insert_dev(target, ul2, anchor);
			if_block0.m(ul2, null);
			append_dev(ul2, t16);
			if_block1.m(ul2, null);
			insert_dev(target, t17, anchor);
			insert_dev(target, nav, anchor);
			if (if_block2) if_block2.m(nav, null);
			append_dev(nav, t18);
			if (if_block3) if_block3.m(nav, null);
			append_dev(nav, t19);
			if (if_block4) if_block4.m(nav, null);
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*NASA*/ 8 && img.src !== (img_src_value = /*NASA*/ ctx[3])) {
				attr_dev(img, "src", img_src_value);
			}

			if (dirty & /*artist*/ 1) set_data_dev(t8, /*artist*/ ctx[0]);
			if (dirty & /*albums*/ 2) set_data_dev(t11, /*albums*/ ctx[1]);
			if (dirty & /*mp3*/ 4) set_data_dev(t14, /*mp3*/ ctx[2]);

			if (current_block_type === (current_block_type = select_block_type(ctx)) && if_block0) {
				if_block0.p(ctx, dirty);
			} else {
				if_block0.d(1);
				if_block0 = current_block_type(ctx);

				if (if_block0) {
					if_block0.c();
					if_block0.m(ul2, t16);
				}
			}

			if (current_block_type_1 === (current_block_type_1 = select_block_type_1(ctx)) && if_block1) {
				if_block1.p(ctx, dirty);
			} else {
				if_block1.d(1);
				if_block1 = current_block_type_1(ctx);

				if (if_block1) {
					if_block1.c();
					if_block1.m(ul2, null);
				}
			}

			if (/*movcount*/ ctx[4] < 1 || /*movcount*/ ctx[4] === "undefined") {
				if (if_block2) {
					if_block2.p(ctx, dirty);
				} else {
					if_block2 = create_if_block_2(ctx);
					if_block2.c();
					if_block2.m(nav, t18);
				}
			} else if (if_block2) {
				if_block2.d(1);
				if_block2 = null;
			}

			if (/*tvcount*/ ctx[5] < 1 || /*tvcount*/ ctx[5] === "undefined") {
				if (if_block3) {
					if_block3.p(ctx, dirty);
				} else {
					if_block3 = create_if_block_1(ctx);
					if_block3.c();
					if_block3.m(nav, t19);
				}
			} else if (if_block3) {
				if_block3.d(1);
				if_block3 = null;
			}

			if (/*movcount*/ ctx[4] > 0 || /*tvcount*/ ctx[5] > 0) {
				if (if_block4) {
					if_block4.p(ctx, dirty);
				} else {
					if_block4 = create_if_block(ctx);
					if_block4.c();
					if_block4.m(nav, null);
				}
			} else if (if_block4) {
				if_block4.d(1);
				if_block4 = null;
			}
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(ul0);
			if (detaching) detach_dev(t2);
			if (detaching) detach_dev(figure);
			if (detaching) detach_dev(t5);
			if (detaching) detach_dev(ul1);
			if (detaching) detach_dev(t15);
			if (detaching) detach_dev(ul2);
			if_block0.d();
			if_block1.d();
			if (detaching) detach_dev(t17);
			if (detaching) detach_dev(nav);
			if (if_block2) if_block2.d();
			if (if_block3) if_block3.d();
			if (if_block4) if_block4.d();
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

async function getMovSetUp() {
	await fetch(`http://192.168.0.42:8888/MovSetUp`, { mode: "cors", method: "GET" }).then(r => r.json()).then(data => {
		console.log(data);
	});
}

async function getTVSetUp() {
	await fetch(`http://192.168.0.42:8888/TVSetUp`, { mode: "cors", method: "GET" }).then(r => r.json()).then(data => {
		console.log(data);
	});
}

async function getMovUpDate() {
	await fetch(`http://192.168.0.42:8888/MovUpDate`, { mode: "cors", method: "GET" }).then(r => r.json()).then(data => {
		console.log(data);
	});
}

async function getTVUpDate() {
	await fetch(`http://192.168.0.42:8888/TVUpDate`, { mode: "cors", method: "GET" }).then(r => r.json()).then(data => {
		console.log(data);
	});
}

function instance($$self, $$props, $$invalidate) {
	let STATS;
	let artist;
	let albums;
	let mp3;

	onMount(async () => {
		fetch(`http://192.168.0.74:6790/Stats`, { mode: "cors", method: "GET" }).then(r => r.json()).then(data => {
			STATS = data.stats;
			$$invalidate(0, artist = STATS.total_artists);
			$$invalidate(1, albums = STATS.total_albums);
			$$invalidate(2, mp3 = STATS.total_mp3);
		}).catch(err => console.log(err));
	});

	let NASA;

	onMount(async () => {
		fetch(`https://api.nasa.gov/planetary/apod?api_key=qdSdMLU2yc4wXQM9goawTdAA7sngW9KoLkDsVhWG`, { mode: "cors", method: "GET" }).then(r => r.json()).then(data => {
			$$invalidate(3, NASA = data.url);
		}).catch(err => console.log(err));
	});

	let movcount;

	onMount(async () => {
		fetch(`http://192.168.0.42:8888/MovDBCount`, { mode: "cors", method: "GET" }).then(r => r.json()).then(data => {
			console.log(data);
			$$invalidate(4, movcount = data);
		}).catch(err => console.log(err));
	});

	let tvcount;

	onMount(async () => {
		fetch(`http://192.168.0.42:8888/TVDBCount`, { mode: "cors", method: "GET" }).then(r => r.json()).then(data => {
			console.log(data);
			$$invalidate(5, tvcount = data);
		}).catch(err => console.log(err));
	});

	let handleMovSetUpClick = () => {
		let promise = getMovSetUp().catch(err => console.log(err));
	};

	let handleTVSetUpClick = () => {
		let promise = getTVSetUp().catch(err => console.log(err));
	};

	let handleMovUpDateClick = () => {
		let promise = getMovUpDate().catch(err => console.log(err));
	};

	let handleTVUpDateClick = () => {
		let promise = getTVUpDate().catch(err => console.log(err));
	};

	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1.warn(`<Routes> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Routes", $$slots, []);

	$$self.$capture_state = () => ({
		onMount,
		STATS,
		artist,
		albums,
		mp3,
		NASA,
		movcount,
		tvcount,
		getMovSetUp,
		handleMovSetUpClick,
		getTVSetUp,
		handleTVSetUpClick,
		getMovUpDate,
		handleMovUpDateClick,
		getTVUpDate,
		handleTVUpDateClick
	});

	$$self.$inject_state = $$props => {
		if ("STATS" in $$props) STATS = $$props.STATS;
		if ("artist" in $$props) $$invalidate(0, artist = $$props.artist);
		if ("albums" in $$props) $$invalidate(1, albums = $$props.albums);
		if ("mp3" in $$props) $$invalidate(2, mp3 = $$props.mp3);
		if ("NASA" in $$props) $$invalidate(3, NASA = $$props.NASA);
		if ("movcount" in $$props) $$invalidate(4, movcount = $$props.movcount);
		if ("tvcount" in $$props) $$invalidate(5, tvcount = $$props.tvcount);
		if ("handleMovSetUpClick" in $$props) $$invalidate(6, handleMovSetUpClick = $$props.handleMovSetUpClick);
		if ("handleTVSetUpClick" in $$props) $$invalidate(7, handleTVSetUpClick = $$props.handleTVSetUpClick);
		if ("handleMovUpDateClick" in $$props) $$invalidate(8, handleMovUpDateClick = $$props.handleMovUpDateClick);
		if ("handleTVUpDateClick" in $$props) $$invalidate(9, handleTVUpDateClick = $$props.handleTVUpDateClick);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [
		artist,
		albums,
		mp3,
		NASA,
		movcount,
		tvcount,
		handleMovSetUpClick,
		handleTVSetUpClick,
		handleMovUpDateClick,
		handleTVUpDateClick
	];
}

class Routes extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Routes",
			options,
			id: create_fragment.name
		});
	}
}

export default Routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguNmJlMWZjODkuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvaW5kZXguc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQ+XG5cdGltcG9ydCB7IG9uTW91bnQgfSBmcm9tICdzdmVsdGUnO1xuXHRsZXQgU1RBVFM7XG5cdGxldCBhcnRpc3Q7XG5cdGxldCBhbGJ1bXM7XG5cdGxldCBtcDM7XG5cdG9uTW91bnQoYXN5bmMgKCkgPT4ge1xuXHRcdGZldGNoKGBodHRwOi8vMTkyLjE2OC4wLjc0OjY3OTAvU3RhdHNgLCB7bW9kZTogXCJjb3JzXCIsIG1ldGhvZDogXCJHRVRcIn0pXG5cdFx0LnRoZW4ociA9PiByLmpzb24oKSlcblx0XHQudGhlbihkYXRhID0+IHtcblx0XHRcdFNUQVRTID0gZGF0YS5zdGF0cztcblx0XHRcdGFydGlzdCA9IFNUQVRTLnRvdGFsX2FydGlzdHNcblx0XHRcdGFsYnVtcyA9IFNUQVRTLnRvdGFsX2FsYnVtc1xuXHRcdFx0bXAzID0gU1RBVFMudG90YWxfbXAzXG5cdFx0fSlcblx0XHQuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpXG5cdH0pXG5cblx0bGV0IE5BU0E7XG5cdG9uTW91bnQoYXN5bmMgKCkgPT4ge1xuXHRcdGZldGNoKGBodHRwczovL2FwaS5uYXNhLmdvdi9wbGFuZXRhcnkvYXBvZD9hcGlfa2V5PXFkU2RNTFUyeWM0d1hRTTlnb2F3VGRBQTdzbmdXOUtvTGtEc1ZoV0dgLCB7bW9kZTogXCJjb3JzXCIsIG1ldGhvZDogXCJHRVRcIn0pXG5cdFx0LnRoZW4ociA9PiByLmpzb24oKSlcblx0XHQudGhlbihkYXRhID0+IHtcblx0XHRcdE5BU0EgPSBkYXRhLnVybDtcblx0XHR9KVxuXHRcdC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSlcblx0fSlcblxuXHRsZXQgbW92Y291bnQ7XG5cdG9uTW91bnQoYXN5bmMgKCkgPT4ge1xuXHRcdGZldGNoKGBodHRwOi8vMTkyLjE2OC4wLjQyOjg4ODgvTW92REJDb3VudGAsIHttb2RlOiBcImNvcnNcIiwgbWV0aG9kOiBcIkdFVFwifSlcblx0XHQudGhlbihyID0+IHIuanNvbigpKVxuXHRcdC50aGVuKGRhdGEgPT4ge1xuXHRcdFx0Y29uc29sZS5sb2coZGF0YSlcblx0XHRcdG1vdmNvdW50ID0gZGF0YTtcblx0XHR9KVxuXHRcdC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSlcblx0fSlcblxuXHRsZXQgdHZjb3VudDtcblx0b25Nb3VudChhc3luYyAoKSA9PiB7XG5cdFx0ZmV0Y2goYGh0dHA6Ly8xOTIuMTY4LjAuNDI6ODg4OC9UVkRCQ291bnRgLCB7bW9kZTogXCJjb3JzXCIsIG1ldGhvZDogXCJHRVRcIn0pXG5cdFx0LnRoZW4ociA9PiByLmpzb24oKSlcblx0XHQudGhlbihkYXRhID0+IHtcblx0XHRcdGNvbnNvbGUubG9nKGRhdGEpXG5cdFx0XHR0dmNvdW50ID0gZGF0YTtcblx0XHR9KVxuXHRcdC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSlcblx0fSlcblxuICAgIFxuXHRhc3luYyBmdW5jdGlvbiBnZXRNb3ZTZXRVcCgpIHtcblx0XHRhd2FpdCBmZXRjaChgaHR0cDovLzE5Mi4xNjguMC40Mjo4ODg4L01vdlNldFVwYCwge21vZGU6IFwiY29yc1wiLCBtZXRob2Q6IFwiR0VUXCJ9KVxuXHRcdC50aGVuKHIgPT4gci5qc29uKCkpXG5cdFx0LnRoZW4oZGF0YSA9PiB7XG5cdFx0XHRjb25zb2xlLmxvZyhkYXRhKVxuXHRcdH0pXG5cdH1cblxuXHRsZXQgaGFuZGxlTW92U2V0VXBDbGljayA9ICgpID0+IHtcblx0XHRsZXQgcHJvbWlzZSA9IGdldE1vdlNldFVwKCkuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpO1xuXG5cdH1cblxuXHRhc3luYyBmdW5jdGlvbiBnZXRUVlNldFVwKCkge1xuXHRcdGF3YWl0IGZldGNoKGBodHRwOi8vMTkyLjE2OC4wLjQyOjg4ODgvVFZTZXRVcGAsIHttb2RlOiBcImNvcnNcIiwgbWV0aG9kOiBcIkdFVFwifSlcblx0XHQudGhlbihyID0+IHIuanNvbigpKVxuXHRcdC50aGVuKGRhdGEgPT4ge1xuXHRcdFx0Y29uc29sZS5sb2coZGF0YSlcblx0XHR9KVxuXHR9XG5cblx0bGV0IGhhbmRsZVRWU2V0VXBDbGljayA9ICgpID0+IHtcblx0XHRsZXQgcHJvbWlzZSA9IGdldFRWU2V0VXAoKS5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSk7XG5cdH1cblxuXG5cblxuXG5cdGFzeW5jIGZ1bmN0aW9uIGdldE1vdlVwRGF0ZSgpIHtcblx0XHRhd2FpdCBmZXRjaChgaHR0cDovLzE5Mi4xNjguMC40Mjo4ODg4L01vdlVwRGF0ZWAsIHttb2RlOiBcImNvcnNcIiwgbWV0aG9kOiBcIkdFVFwifSlcblx0XHQudGhlbihyID0+IHIuanNvbigpKVxuXHRcdC50aGVuKGRhdGEgPT4ge1xuXHRcdFx0Y29uc29sZS5sb2coZGF0YSlcblx0XHR9KVxuXHR9XG5cblx0bGV0IGhhbmRsZU1vdlVwRGF0ZUNsaWNrID0gKCkgPT4ge1xuXHRcdGxldCBwcm9taXNlID0gZ2V0TW92VXBEYXRlKCkuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpO1xuXG5cdH1cblxuXHRhc3luYyBmdW5jdGlvbiBnZXRUVlVwRGF0ZSgpIHtcblx0XHRhd2FpdCBmZXRjaChgaHR0cDovLzE5Mi4xNjguMC40Mjo4ODg4L1RWVXBEYXRlYCwge21vZGU6IFwiY29yc1wiLCBtZXRob2Q6IFwiR0VUXCJ9KVxuXHRcdC50aGVuKHIgPT4gci5qc29uKCkpXG5cdFx0LnRoZW4oZGF0YSA9PiB7XG5cdFx0XHRjb25zb2xlLmxvZyhkYXRhKVxuXHRcdH0pXG5cdH1cblxuXHRsZXQgaGFuZGxlVFZVcERhdGVDbGljayA9ICgpID0+IHtcblx0XHRsZXQgcHJvbWlzZSA9IGdldFRWVXBEYXRlKCkuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpO1xuXHR9XG5cbjwvc2NyaXB0PlxuXG48c3ZlbHRlOmhlYWQ+XG5cdDwhLS0gPGxpbmsgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vaWNvbj9mYW1pbHk9TWF0ZXJpYWwrSWNvbnNcIiByZWw9XCJzdHlsZXNoZWV0XCI+IC0tPlxuXHQ8dGl0bGU+QW1wVmVsPC90aXRsZT5cbjwvc3ZlbHRlOmhlYWQ+XG5cbjx1bD5cblx0PGxpPjxhIGhyZWY9XCJodHRwOi8vMTkyLjE2OC4wLjQyOjQ1NjYvXCI+WVRTLUVaVFY8L2E+PC9saT5cbjwvdWw+XG5cblxuPGZpZ3VyZT5cblx0PGltZyBhbHQ9J1N1Y2Nlc3MgS2lkJyBzcmM9e05BU0F9PlxuXHQ8ZmlnY2FwdGlvbj5OQVNBIFBpYyBPZiBUaGUgRGF5PC9maWdjYXB0aW9uPlxuPC9maWd1cmU+XG5cbjx1bD5cblx0PGxpPjxzcGFuPkFydGlzdHM6PC9zcGFuPiA8c3BhbiBpZD1cImFydHNwYW5cIj57YXJ0aXN0fTwvc3Bhbj48L2xpPlxuXHQ8bGk+PHNwYW4+QWxidW1zOjwvc3Bhbj48c3BhbiBpZD1cImFydHNwYW5cIj57YWxidW1zfTwvc3Bhbj48L2xpPlxuXHQ8bGk+PHNwYW4+U29uZ3M6PC9zcGFuPjxzcGFuIGlkPVwiYXJ0c3BhblwiPnttcDN9PC9zcGFuPjwvbGk+XG48L3VsPlxuXG48dWw+XG5cdHsjaWYgbW92Y291bnQgPCAxfVxuXHRcdDxsaT48c3BhbiBpZD1cIk1vdlNldHVwMVwiPk1vdmllczo8L3NwYW4+PHNwYW4gaWQ9XCJhcnRzcGFuXCI+e21vdmNvdW50fTwvc3Bhbj48L2xpPlxuXHR7OmVsc2V9XG5cdFx0PGxpPjxzcGFuIGlkPVwiTW92U2V0dXAyXCI+TW92aWVzOjwvc3Bhbj48c3BhbiBpZD1cImFydHNwYW5cIj57bW92Y291bnR9PC9zcGFuPjwvbGk+XG5cdHsvaWZ9XG5cblx0eyNpZiB0dmNvdW50IDwgMX1cblx0XHQ8bGk+PHNwYW4gaWQ9XCJUVlNldHVwMVwiPlRWIFNob3dzOjwvc3Bhbj48c3BhbiBpZD1cImFydHNwYW5cIj57dHZjb3VudH08L3NwYW4+PC9saT5cblx0ezplbHNlfVxuXHRcdDxsaT48c3BhbiBpZD1cIlRWU2V0dXAyXCI+VFYgU2hvd3M6PC9zcGFuPjxzcGFuIGlkPVwiYXJ0c3BhblwiPnt0dmNvdW50fTwvc3Bhbj48L2xpPlxuXHR7L2lmfVxuPC91bD5cblxuPG5hdj5cblx0eyNpZiBtb3Zjb3VudCA8IDEgfHwgbW92Y291bnQgPT09IFwidW5kZWZpbmVkXCJ9XG5cdFx0PGJ1dHRvbiBvbjpjbGljaz17aGFuZGxlTW92U2V0VXBDbGlja30gPk1vdmllIFNldHVwPC9idXR0b24+XG5cdHsvaWZ9XG5cdHsjaWYgdHZjb3VudCA8IDEgfHwgdHZjb3VudCA9PT0gXCJ1bmRlZmluZWRcIn1cblx0XHQ8YnV0dG9uIG9uOmNsaWNrPXtoYW5kbGVUVlNldFVwQ2xpY2t9ID5UVlNob3dzIFNldHVwPC9idXR0b24+XG5cdHsvaWZ9XG5cdHsjaWYgbW92Y291bnQgPiAwIHx8IHR2Y291bnQgPiAwIH1cblx0XHQ8YnV0dG9uIG9uOmNsaWNrPXtoYW5kbGVNb3ZVcERhdGVDbGlja30gPk1vdmllIFVwZGF0ZTwvYnV0dG9uPlxuXHRcdDxidXR0b24gb246Y2xpY2s9e2hhbmRsZVRWVXBEYXRlQ2xpY2t9ID5UViBTaG93cyBVcGRhdGU8L2J1dHRvbj5cblx0ey9pZn1cblxuPC9uYXY+XG5cbjwhLS0gPGlmcmFtZSBzcmM9XCJodHRwczovL2FydDE5LmNvbS9zaG93cy9jYnMtZXZlbmluZy1uZXdzL2VtYmVkXFxcIj48L2lmcmFtZT5cblxuPGlmcmFtZSBzcmM9XCJodHRwczovL2FydDE5LmNvbS9zaG93cy9jYnMtdGhpcy1tb3JuaW5nL2VtYmVkXFxcIj48L2lmcmFtZT4gLS0+XG5cbjxzdHlsZT5cblxuXHQvKiBpZnJhbWUge1xuXHRcdHdpZHRoOiA3MjBweDtcblx0XHRoZWlnaHQ6IDUwNXB4O1xuXHRcdGJvcmRlcjogMCBub25lO1xuXHR9ICovXG5cblx0I01vdlNldHVwMSB7XG5cdFx0LyogYmFja2dyb3VuZC1jb2xvcjogcmVkOyAqL1xuXHRcdHBhZGRpbmc6IDdweDtcblx0XHRjb2xvcjogcmVkO1xuXHR9XG5cdCNNb3ZTZXR1cDIge1xuXHRcdC8qIGJhY2tncm91bmQtY29sb3I6IGdyZWVuOyAqL1xuXHRcdHBhZGRpbmc6IDdweDtcblx0XHRjb2xvcjogYmxhY2s7XG5cdH1cblxuXHQjVFZTZXR1cDEge1xuXHRcdC8qIGJhY2tncm91bmQtY29sb3I6IHJlZDsgKi9cblx0XHRwYWRkaW5nOiA3cHg7XG5cdFx0Y29sb3I6IHJlZDtcblx0fVxuXHQjVFZTZXR1cDIge1xuXHRcdC8qIGJhY2tncm91bmQtY29sb3I6IGdyZWVuOyAqL1xuXHRcdHBhZGRpbmc6IDdweDtcblx0XHRjb2xvcjogYmxhY2s7XG5cdH1cblxuXHQjYXJ0c3BhbiB7XG5cdFx0Y29sb3I6IGJsdWU7XG5cdFx0bWFyZ2luLWxlZnQ6IDEwcHg7XG5cdH1cblxuXHR1bCB7XG5cdFx0bGlzdC1zdHlsZS10eXBlOiBub25lO1xuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0fVxuXG5cdGxpIHtcblx0XHRkaXNwbGF5OiBpbmxpbmU7XG5cdFx0cGFkZGluZy1sZWZ0OiAyMHB4O1xuXHRcdHBhZGRpbmctcmlnaHQ6IDIwcHg7XG5cdFx0Y29sb3I6IGJsYWNrO1xuXHR9XG5cdGZpZ3VyZSB7XG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdG1hcmdpbjogMCBhdXRvO1xuXHR9XG5cblx0ZmlndXJlIHtcblx0XHRtYXJnaW46IDAgMCAxZW0gMDtcblx0fVxuXG5cdGltZyB7XG5cdFx0d2lkdGg6IDEwMCU7XG5cdFx0bWF4LXdpZHRoOiA0MDBweDtcblx0XHRtYXJnaW46IDAgMCAxZW0gMDtcblx0fVxuXG5cdGJ1dHRvbiB7XG5cdFx0d2lkdGg6IDQ5JTtcblx0fVxuXG5cdC8qQG1lZGlhIChtaW4td2lkdGg6IDQ4MHB4KSB7XG5cdFx0aDEge1xuXHRcdFx0Zm9udC1zaXplOiA0ZW07XG5cdFx0fVxuXHR9ICovXG48L3N0eWxlPiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7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
