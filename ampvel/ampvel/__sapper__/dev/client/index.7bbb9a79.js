import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, o as onMount, v as validate_slots, g as globals, e as element, t as text, c as claim_element, a as children, b as claim_text, f as detach_dev, h as attr_dev, j as add_location, k as insert_dev, l as append_dev, m as listen_dev, n as noop, p as space, q as query_selector_all, r as claim_space, u as set_data_dev } from './client.932afed9.js';

/* src/routes/index.svelte generated by Svelte v3.24.0 */

const { console: console_1 } = globals;
const file = "src/routes/index.svelte";

// (102:1) {:else}
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
			attr_dev(span0, "class", "svelte-1pyv317");
			add_location(span0, file, 102, 6, 2370);
			attr_dev(span1, "id", "artspan");
			attr_dev(span1, "class", "svelte-1pyv317");
			add_location(span1, file, 102, 41, 2405);
			attr_dev(li, "class", "svelte-1pyv317");
			add_location(li, file, 102, 2, 2366);
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
		source: "(102:1) {:else}",
		ctx
	});

	return block;
}

// (100:1) {#if movcount < 1}
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
			attr_dev(span0, "class", "svelte-1pyv317");
			add_location(span0, file, 100, 6, 2278);
			attr_dev(span1, "id", "artspan");
			attr_dev(span1, "class", "svelte-1pyv317");
			add_location(span1, file, 100, 41, 2313);
			attr_dev(li, "class", "svelte-1pyv317");
			add_location(li, file, 100, 2, 2274);
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
		id: create_if_block_3.name,
		type: "if",
		source: "(100:1) {#if movcount < 1}",
		ctx
	});

	return block;
}

// (108:1) {:else}
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
			attr_dev(span0, "class", "svelte-1pyv317");
			add_location(span0, file, 108, 6, 2572);
			attr_dev(span1, "id", "artspan");
			attr_dev(span1, "class", "svelte-1pyv317");
			add_location(span1, file, 108, 42, 2608);
			attr_dev(li, "class", "svelte-1pyv317");
			add_location(li, file, 108, 2, 2568);
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
		source: "(108:1) {:else}",
		ctx
	});

	return block;
}

// (106:1) {#if tvcount < 1}
function create_if_block_2(ctx) {
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
			attr_dev(span0, "class", "svelte-1pyv317");
			add_location(span0, file, 106, 6, 2480);
			attr_dev(span1, "id", "artspan");
			attr_dev(span1, "class", "svelte-1pyv317");
			add_location(span1, file, 106, 42, 2516);
			attr_dev(li, "class", "svelte-1pyv317");
			add_location(li, file, 106, 2, 2476);
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
		id: create_if_block_2.name,
		type: "if",
		source: "(106:1) {#if tvcount < 1}",
		ctx
	});

	return block;
}

// (114:1) {#if movcount < 1 || movcount === "undefined"}
function create_if_block_1(ctx) {
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
			attr_dev(button, "class", "svelte-1pyv317");
			add_location(button, file, 114, 2, 2719);
		},
		m: function mount(target, anchor) {
			insert_dev(target, button, anchor);
			append_dev(button, t);

			if (!mounted) {
				dispose = listen_dev(button, "click", /*handleMovUpdateClick*/ ctx[6], false, false, false);
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
		source: "(114:1) {#if movcount < 1 || movcount === \\\"undefined\\\"}",
		ctx
	});

	return block;
}

// (117:1) {#if tvcount < 1 || tvcount === "undefined"}
function create_if_block(ctx) {
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
			attr_dev(button, "class", "svelte-1pyv317");
			add_location(button, file, 117, 2, 2836);
		},
		m: function mount(target, anchor) {
			insert_dev(target, button, anchor);
			append_dev(button, t);

			if (!mounted) {
				dispose = listen_dev(button, "click", /*handleTVUpdateClick*/ ctx[7], false, false, false);
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
		source: "(117:1) {#if tvcount < 1 || tvcount === \\\"undefined\\\"}",
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

	function select_block_type(ctx, dirty) {
		if (/*movcount*/ ctx[4] < 1) return create_if_block_3;
		return create_else_block_1;
	}

	let current_block_type = select_block_type(ctx);
	let if_block0 = current_block_type(ctx);

	function select_block_type_1(ctx, dirty) {
		if (/*tvcount*/ ctx[5] < 1) return create_if_block_2;
		return create_else_block;
	}

	let current_block_type_1 = select_block_type_1(ctx);
	let if_block1 = current_block_type_1(ctx);
	let if_block2 = (/*movcount*/ ctx[4] < 1 || /*movcount*/ ctx[4] === "undefined") && create_if_block_1(ctx);
	let if_block3 = (/*tvcount*/ ctx[5] < 1 || /*tvcount*/ ctx[5] === "undefined") && create_if_block(ctx);

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
			nav_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document.title = "AmpVel";
			attr_dev(a, "href", "http://192.168.0.42:4566/");
			add_location(a, file, 83, 5, 1878);
			attr_dev(li0, "class", "svelte-1pyv317");
			add_location(li0, file, 83, 1, 1874);
			attr_dev(ul0, "class", "svelte-1pyv317");
			add_location(ul0, file, 82, 0, 1868);
			attr_dev(img, "alt", "Success Kid");
			if (img.src !== (img_src_value = /*NASA*/ ctx[3])) attr_dev(img, "src", img_src_value);
			attr_dev(img, "class", "svelte-1pyv317");
			add_location(img, file, 88, 1, 1950);
			add_location(figcaption, file, 89, 1, 1986);
			attr_dev(figure, "class", "svelte-1pyv317");
			add_location(figure, file, 87, 0, 1940);
			add_location(span0, file, 93, 5, 2052);
			attr_dev(span1, "id", "artspan");
			attr_dev(span1, "class", "svelte-1pyv317");
			add_location(span1, file, 93, 27, 2074);
			attr_dev(li1, "class", "svelte-1pyv317");
			add_location(li1, file, 93, 1, 2048);
			add_location(span2, file, 94, 5, 2119);
			attr_dev(span3, "id", "artspan");
			attr_dev(span3, "class", "svelte-1pyv317");
			add_location(span3, file, 94, 25, 2139);
			attr_dev(li2, "class", "svelte-1pyv317");
			add_location(li2, file, 94, 1, 2115);
			add_location(span4, file, 95, 5, 2184);
			attr_dev(span5, "id", "artspan");
			attr_dev(span5, "class", "svelte-1pyv317");
			add_location(span5, file, 95, 24, 2203);
			attr_dev(li3, "class", "svelte-1pyv317");
			add_location(li3, file, 95, 1, 2180);
			attr_dev(ul1, "class", "svelte-1pyv317");
			add_location(ul1, file, 92, 0, 2042);
			attr_dev(ul2, "class", "svelte-1pyv317");
			add_location(ul2, file, 98, 0, 2247);
			add_location(nav, file, 112, 0, 2663);
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
					if_block2 = create_if_block_1(ctx);
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
					if_block3 = create_if_block(ctx);
					if_block3.c();
					if_block3.m(nav, null);
				}
			} else if (if_block3) {
				if_block3.d(1);
				if_block3 = null;
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

async function getMovUpdate() {
	await fetch(`http://192.168.0.42:8888/Update`, { mode: "cors", method: "GET" }).then(r => r.json()).then(data => {
		console.log(data);
	});
}

async function getTVUpdate() {
	await fetch(`http://192.168.0.42:9999/Update`, { mode: "cors", method: "GET" }).then(r => r.json()).then(data => {
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
		fetch(`http://192.168.0.42:9999/TVDBCount`, { mode: "cors", method: "GET" }).then(r => r.json()).then(data => {
			console.log(data);
			$$invalidate(5, tvcount = data);
		}).catch(err => console.log(err));
	});

	let handleMovUpdateClick = () => {
		let promise = getMovUpdate().catch(err => console.log(err));
	};

	let handleTVUpdateClick = () => {
		let promise = getTVUpdate().catch(err => console.log(err));
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
		getMovUpdate,
		handleMovUpdateClick,
		getTVUpdate,
		handleTVUpdateClick
	});

	$$self.$inject_state = $$props => {
		if ("STATS" in $$props) STATS = $$props.STATS;
		if ("artist" in $$props) $$invalidate(0, artist = $$props.artist);
		if ("albums" in $$props) $$invalidate(1, albums = $$props.albums);
		if ("mp3" in $$props) $$invalidate(2, mp3 = $$props.mp3);
		if ("NASA" in $$props) $$invalidate(3, NASA = $$props.NASA);
		if ("movcount" in $$props) $$invalidate(4, movcount = $$props.movcount);
		if ("tvcount" in $$props) $$invalidate(5, tvcount = $$props.tvcount);
		if ("handleMovUpdateClick" in $$props) $$invalidate(6, handleMovUpdateClick = $$props.handleMovUpdateClick);
		if ("handleTVUpdateClick" in $$props) $$invalidate(7, handleTVUpdateClick = $$props.handleTVUpdateClick);
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
		handleMovUpdateClick,
		handleTVUpdateClick
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguN2JiYjlhNzkuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvaW5kZXguc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQ+XG5cdGltcG9ydCB7IG9uTW91bnQgfSBmcm9tICdzdmVsdGUnO1xuXHRsZXQgU1RBVFM7XG5cdGxldCBhcnRpc3Q7XG5cdGxldCBhbGJ1bXM7XG5cdGxldCBtcDM7XG5cdG9uTW91bnQoYXN5bmMgKCkgPT4ge1xuXHRcdGZldGNoKGBodHRwOi8vMTkyLjE2OC4wLjc0OjY3OTAvU3RhdHNgLCB7bW9kZTogXCJjb3JzXCIsIG1ldGhvZDogXCJHRVRcIn0pXG5cdFx0LnRoZW4ociA9PiByLmpzb24oKSlcblx0XHQudGhlbihkYXRhID0+IHtcblx0XHRcdFNUQVRTID0gZGF0YS5zdGF0cztcblx0XHRcdGFydGlzdCA9IFNUQVRTLnRvdGFsX2FydGlzdHNcblx0XHRcdGFsYnVtcyA9IFNUQVRTLnRvdGFsX2FsYnVtc1xuXHRcdFx0bXAzID0gU1RBVFMudG90YWxfbXAzXG5cdFx0fSlcblx0XHQuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpXG5cdH0pXG5cblx0bGV0IE5BU0E7XG5cdG9uTW91bnQoYXN5bmMgKCkgPT4ge1xuXHRcdGZldGNoKGBodHRwczovL2FwaS5uYXNhLmdvdi9wbGFuZXRhcnkvYXBvZD9hcGlfa2V5PXFkU2RNTFUyeWM0d1hRTTlnb2F3VGRBQTdzbmdXOUtvTGtEc1ZoV0dgLCB7bW9kZTogXCJjb3JzXCIsIG1ldGhvZDogXCJHRVRcIn0pXG5cdFx0LnRoZW4ociA9PiByLmpzb24oKSlcblx0XHQudGhlbihkYXRhID0+IHtcblx0XHRcdE5BU0EgPSBkYXRhLnVybDtcblx0XHR9KVxuXHRcdC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSlcblx0fSlcblxuXHRsZXQgbW92Y291bnQ7XG5cdG9uTW91bnQoYXN5bmMgKCkgPT4ge1xuXHRcdGZldGNoKGBodHRwOi8vMTkyLjE2OC4wLjQyOjg4ODgvTW92REJDb3VudGAsIHttb2RlOiBcImNvcnNcIiwgbWV0aG9kOiBcIkdFVFwifSlcblx0XHQudGhlbihyID0+IHIuanNvbigpKVxuXHRcdC50aGVuKGRhdGEgPT4ge1xuXHRcdFx0Y29uc29sZS5sb2coZGF0YSlcblx0XHRcdG1vdmNvdW50ID0gZGF0YTtcblx0XHR9KVxuXHRcdC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSlcblx0fSlcblxuXHRsZXQgdHZjb3VudDtcblx0b25Nb3VudChhc3luYyAoKSA9PiB7XG5cdFx0ZmV0Y2goYGh0dHA6Ly8xOTIuMTY4LjAuNDI6OTk5OS9UVkRCQ291bnRgLCB7bW9kZTogXCJjb3JzXCIsIG1ldGhvZDogXCJHRVRcIn0pXG5cdFx0LnRoZW4ociA9PiByLmpzb24oKSlcblx0XHQudGhlbihkYXRhID0+IHtcblx0XHRcdGNvbnNvbGUubG9nKGRhdGEpXG5cdFx0XHR0dmNvdW50ID0gZGF0YTtcblx0XHR9KVxuXHRcdC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSlcblx0fSlcblxuICAgIFxuXHRhc3luYyBmdW5jdGlvbiBnZXRNb3ZVcGRhdGUoKSB7XG5cdFx0YXdhaXQgZmV0Y2goYGh0dHA6Ly8xOTIuMTY4LjAuNDI6ODg4OC9VcGRhdGVgLCB7bW9kZTogXCJjb3JzXCIsIG1ldGhvZDogXCJHRVRcIn0pXG5cdFx0LnRoZW4ociA9PiByLmpzb24oKSlcblx0XHQudGhlbihkYXRhID0+IHtcblx0XHRcdGNvbnNvbGUubG9nKGRhdGEpXG5cdFx0fSlcblx0fVxuXG5cdGxldCBoYW5kbGVNb3ZVcGRhdGVDbGljayA9ICgpID0+IHtcblx0XHRsZXQgcHJvbWlzZSA9IGdldE1vdlVwZGF0ZSgpLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKTtcblx0fVxuXG5cdGFzeW5jIGZ1bmN0aW9uIGdldFRWVXBkYXRlKCkge1xuXHRcdGF3YWl0IGZldGNoKGBodHRwOi8vMTkyLjE2OC4wLjQyOjk5OTkvVXBkYXRlYCwge21vZGU6IFwiY29yc1wiLCBtZXRob2Q6IFwiR0VUXCJ9KVxuXHRcdC50aGVuKHIgPT4gci5qc29uKCkpXG5cdFx0LnRoZW4oZGF0YSA9PiB7XG5cdFx0XHRjb25zb2xlLmxvZyhkYXRhKVxuXHRcdH0pXG5cdH1cblxuXHRsZXQgaGFuZGxlVFZVcGRhdGVDbGljayA9ICgpID0+IHtcblx0XHRsZXQgcHJvbWlzZSA9IGdldFRWVXBkYXRlKCkuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpO1xuXHR9XG5cbjwvc2NyaXB0PlxuXG48c3ZlbHRlOmhlYWQ+XG5cdDwhLS0gPGxpbmsgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vaWNvbj9mYW1pbHk9TWF0ZXJpYWwrSWNvbnNcIiByZWw9XCJzdHlsZXNoZWV0XCI+IC0tPlxuXHQ8dGl0bGU+QW1wVmVsPC90aXRsZT5cbjwvc3ZlbHRlOmhlYWQ+XG5cbjx1bD5cblx0PGxpPjxhIGhyZWY9XCJodHRwOi8vMTkyLjE2OC4wLjQyOjQ1NjYvXCI+WVRTLUVaVFY8L2E+PC9saT5cbjwvdWw+XG5cblxuPGZpZ3VyZT5cblx0PGltZyBhbHQ9J1N1Y2Nlc3MgS2lkJyBzcmM9e05BU0F9PlxuXHQ8ZmlnY2FwdGlvbj5OQVNBIFBpYyBPZiBUaGUgRGF5PC9maWdjYXB0aW9uPlxuPC9maWd1cmU+XG5cbjx1bD5cblx0PGxpPjxzcGFuPkFydGlzdHM6PC9zcGFuPiA8c3BhbiBpZD1cImFydHNwYW5cIj57YXJ0aXN0fTwvc3Bhbj48L2xpPlxuXHQ8bGk+PHNwYW4+QWxidW1zOjwvc3Bhbj48c3BhbiBpZD1cImFydHNwYW5cIj57YWxidW1zfTwvc3Bhbj48L2xpPlxuXHQ8bGk+PHNwYW4+U29uZ3M6PC9zcGFuPjxzcGFuIGlkPVwiYXJ0c3BhblwiPnttcDN9PC9zcGFuPjwvbGk+XG48L3VsPlxuXG48dWw+XG5cdHsjaWYgbW92Y291bnQgPCAxfVxuXHRcdDxsaT48c3BhbiBpZD1cIk1vdlNldHVwMVwiPk1vdmllczo8L3NwYW4+PHNwYW4gaWQ9XCJhcnRzcGFuXCI+e21vdmNvdW50fTwvc3Bhbj48L2xpPlxuXHR7OmVsc2V9XG5cdFx0PGxpPjxzcGFuIGlkPVwiTW92U2V0dXAyXCI+TW92aWVzOjwvc3Bhbj48c3BhbiBpZD1cImFydHNwYW5cIj57bW92Y291bnR9PC9zcGFuPjwvbGk+XG5cdHsvaWZ9XG5cblx0eyNpZiB0dmNvdW50IDwgMX1cblx0XHQ8bGk+PHNwYW4gaWQ9XCJUVlNldHVwMVwiPlRWIFNob3dzOjwvc3Bhbj48c3BhbiBpZD1cImFydHNwYW5cIj57dHZjb3VudH08L3NwYW4+PC9saT5cblx0ezplbHNlfVxuXHRcdDxsaT48c3BhbiBpZD1cIlRWU2V0dXAyXCI+VFYgU2hvd3M6PC9zcGFuPjxzcGFuIGlkPVwiYXJ0c3BhblwiPnt0dmNvdW50fTwvc3Bhbj48L2xpPlxuXHR7L2lmfVxuPC91bD5cblxuPG5hdj5cblx0eyNpZiBtb3Zjb3VudCA8IDEgfHwgbW92Y291bnQgPT09IFwidW5kZWZpbmVkXCJ9XG5cdFx0PGJ1dHRvbiBvbjpjbGljaz17aGFuZGxlTW92VXBkYXRlQ2xpY2t9ID5Nb3ZpZSBTZXR1cDwvYnV0dG9uPlxuXHR7L2lmfVxuXHR7I2lmIHR2Y291bnQgPCAxIHx8IHR2Y291bnQgPT09IFwidW5kZWZpbmVkXCJ9XG5cdFx0PGJ1dHRvbiBvbjpjbGljaz17aGFuZGxlVFZVcGRhdGVDbGlja30gPlRWU2hvd3MgU2V0dXA8L2J1dHRvbj5cblx0ey9pZn1cbjwvbmF2PlxuXG48IS0tIDxpZnJhbWUgc3JjPVwiaHR0cHM6Ly9hcnQxOS5jb20vc2hvd3MvY2JzLWV2ZW5pbmctbmV3cy9lbWJlZFxcXCI+PC9pZnJhbWU+XG5cbjxpZnJhbWUgc3JjPVwiaHR0cHM6Ly9hcnQxOS5jb20vc2hvd3MvY2JzLXRoaXMtbW9ybmluZy9lbWJlZFxcXCI+PC9pZnJhbWU+IC0tPlxuXG48c3R5bGU+XG5cblx0aWZyYW1lIHtcblx0XHR3aWR0aDogNzIwcHg7XG5cdFx0aGVpZ2h0OiA1MDVweDtcblx0XHRib3JkZXI6IDAgbm9uZTtcblx0fVxuXG5cdCNNb3ZTZXR1cDEge1xuXHRcdC8qIGJhY2tncm91bmQtY29sb3I6IHJlZDsgKi9cblx0XHRwYWRkaW5nOiA3cHg7XG5cdFx0Y29sb3I6IHJlZDtcblx0fVxuXHQjTW92U2V0dXAyIHtcblx0XHQvKiBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjsgKi9cblx0XHRwYWRkaW5nOiA3cHg7XG5cdFx0Y29sb3I6IGJsYWNrO1xuXHR9XG5cblx0I1RWU2V0dXAxIHtcblx0XHQvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7ICovXG5cdFx0cGFkZGluZzogN3B4O1xuXHRcdGNvbG9yOiByZWQ7XG5cdH1cblx0I1RWU2V0dXAyIHtcblx0XHQvKiBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjsgKi9cblx0XHRwYWRkaW5nOiA3cHg7XG5cdFx0Y29sb3I6IGJsYWNrO1xuXHR9XG5cblx0I2FydHNwYW4ge1xuXHRcdGNvbG9yOiBibHVlO1xuXHRcdG1hcmdpbi1sZWZ0OiAxMHB4O1xuXHR9XG5cblx0dWwge1xuXHRcdGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdH1cblxuXHRsaSB7XG5cdFx0ZGlzcGxheTogaW5saW5lO1xuXHRcdHBhZGRpbmctbGVmdDogMjBweDtcblx0XHRwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuXHRcdGNvbG9yOiBibGFjaztcblx0fVxuXHRmaWd1cmUge1xuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRtYXJnaW46IDAgYXV0bztcblx0fVxuXG5cdGZpZ3VyZSB7XG5cdFx0bWFyZ2luOiAwIDAgMWVtIDA7XG5cdH1cblxuXHRpbWcge1xuXHRcdHdpZHRoOiAxMDAlO1xuXHRcdG1heC13aWR0aDogNDAwcHg7XG5cdFx0bWFyZ2luOiAwIDAgMWVtIDA7XG5cdH1cblxuXHRidXR0b24ge1xuXHRcdHdpZHRoOiA0OSU7XG5cdH1cblxuXHQvKkBtZWRpYSAobWluLXdpZHRoOiA0ODBweCkge1xuXHRcdGgxIHtcblx0XHRcdGZvbnQtc2l6ZTogNGVtO1xuXHRcdH1cblx0fSAqL1xuPC9zdHlsZT4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQXNHNkQsR0FBUTs7Ozs7Ozs7Ozs7OzZDQUFSLEdBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhEQUFSLEdBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUZSLEdBQVE7Ozs7Ozs7Ozs7Ozs2Q0FBUixHQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs4REFBUixHQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt5QkFRUCxHQUFPOzs7Ozs7Ozs7Ozs7NENBQVAsR0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7NERBQVAsR0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7eUJBRlAsR0FBTzs7Ozs7Ozs7Ozs7OzRDQUFQLEdBQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzREQUFQLEdBQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O21FQVFqRCxHQUFvQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrRUFHcEIsR0FBbUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7bUJBbEJqQyxHQUFRLE1BQUcsQ0FBQzs7Ozs7Ozs7a0JBTVosR0FBTyxNQUFHLENBQUM7Ozs7OzsrQkFRWCxHQUFRLE1BQUcsQ0FBQyxpQkFBSSxHQUFRLFFBQUssV0FBVzs4QkFHeEMsR0FBTyxNQUFHLENBQUMsZ0JBQUksR0FBTyxRQUFLLFdBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7d0JBdkJHLEdBQU07Ozs7Ozt5QkFDUixHQUFNOzs7Ozs7c0JBQ1AsR0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsyQ0FGQSxHQUFNOzs7Ozs7Ozs7Ozs7NENBQ1IsR0FB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
