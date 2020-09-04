import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, g as globals, K as songURLstore, L as artiststore, M as songstore, v as validate_slots, e as element, c as claim_element, a as children, f as detach_dev, h as attr_dev, j as add_location, k as insert_dev, n as noop, t as text, b as claim_text, l as append_dev, p as space, r as claim_space, u as set_data_dev, w as ampvel, R as component_subscribe, A as validate_each_argument, B as destroy_each, m as listen_dev, N as is_function, z as empty } from './client.3f96834f.js';

/* src/components/Player.svelte generated by Svelte v3.24.0 */

const { console: console_1 } = globals;
const file = "src/components/Player.svelte";

// (39:1) {:else}
function create_else_block(ctx) {
	let p;
	let t;

	const block = {
		c: function create() {
			p = element("p");
			t = text("Whoops bad URL");
			this.h();
		},
		l: function claim(nodes) {
			p = claim_element(nodes, "P", {});
			var p_nodes = children(p);
			t = claim_text(p_nodes, "Whoops bad URL");
			p_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(p, file, 39, 2, 861);
		},
		m: function mount(target, anchor) {
			insert_dev(target, p, anchor);
			append_dev(p, t);
		},
		p: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(p);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_else_block.name,
		type: "else",
		source: "(39:1) {:else}",
		ctx
	});

	return block;
}

// (31:1) {#if songURLstore_value != "" && songURLstore_value != undefined}
function create_if_block(ctx) {
	let div;
	let audio;
	let audio_src_value;
	let t0;
	let ul;
	let li0;
	let span0;
	let t1;
	let t2;
	let li1;
	let span1;
	let t3;

	const block = {
		c: function create() {
			div = element("div");
			audio = element("audio");
			t0 = space();
			ul = element("ul");
			li0 = element("li");
			span0 = element("span");
			t1 = text(/*artiststore_value*/ ctx[1]);
			t2 = space();
			li1 = element("li");
			span1 = element("span");
			t3 = text(/*songstore_value*/ ctx[2]);
			this.h();
		},
		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", {});
			var div_nodes = children(div);
			audio = claim_element(div_nodes, "AUDIO", { controls: true, src: true, class: true });
			children(audio).forEach(detach_dev);
			div_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			ul = claim_element(nodes, "UL", { class: true });
			var ul_nodes = children(ul);
			li0 = claim_element(ul_nodes, "LI", { class: true });
			var li0_nodes = children(li0);
			span0 = claim_element(li0_nodes, "SPAN", { class: true });
			var span0_nodes = children(span0);
			t1 = claim_text(span0_nodes, /*artiststore_value*/ ctx[1]);
			span0_nodes.forEach(detach_dev);
			li0_nodes.forEach(detach_dev);
			t2 = claim_space(ul_nodes);
			li1 = claim_element(ul_nodes, "LI", { class: true });
			var li1_nodes = children(li1);
			span1 = claim_element(li1_nodes, "SPAN", { class: true });
			var span1_nodes = children(span1);
			t3 = claim_text(span1_nodes, /*songstore_value*/ ctx[2]);
			span1_nodes.forEach(detach_dev);
			li1_nodes.forEach(detach_dev);
			ul_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			audio.controls = true;
			if (audio.src !== (audio_src_value = /*songURLstore_value*/ ctx[0])) attr_dev(audio, "src", audio_src_value);
			attr_dev(audio, "class", "svelte-1kwrqte");
			add_location(audio, file, 32, 3, 688);
			add_location(div, file, 31, 2, 679);
			attr_dev(span0, "class", "svelte-1kwrqte");
			add_location(span0, file, 35, 7, 761);
			attr_dev(li0, "class", "svelte-1kwrqte");
			add_location(li0, file, 35, 3, 757);
			attr_dev(span1, "class", "svelte-1kwrqte");
			add_location(span1, file, 36, 7, 806);
			attr_dev(li1, "class", "svelte-1kwrqte");
			add_location(li1, file, 36, 3, 802);
			attr_dev(ul, "class", "svelte-1kwrqte");
			add_location(ul, file, 34, 2, 749);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);
			append_dev(div, audio);
			insert_dev(target, t0, anchor);
			insert_dev(target, ul, anchor);
			append_dev(ul, li0);
			append_dev(li0, span0);
			append_dev(span0, t1);
			append_dev(ul, t2);
			append_dev(ul, li1);
			append_dev(li1, span1);
			append_dev(span1, t3);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*songURLstore_value*/ 1 && audio.src !== (audio_src_value = /*songURLstore_value*/ ctx[0])) {
				attr_dev(audio, "src", audio_src_value);
			}

			if (dirty & /*artiststore_value*/ 2) set_data_dev(t1, /*artiststore_value*/ ctx[1]);
			if (dirty & /*songstore_value*/ 4) set_data_dev(t3, /*songstore_value*/ ctx[2]);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(ul);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block.name,
		type: "if",
		source: "(31:1) {#if songURLstore_value != \\\"\\\" && songURLstore_value != undefined}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let nav;

	function select_block_type(ctx, dirty) {
		if (/*songURLstore_value*/ ctx[0] != "" && /*songURLstore_value*/ ctx[0] != undefined) return create_if_block;
		return create_else_block;
	}

	let current_block_type = select_block_type(ctx);
	let if_block = current_block_type(ctx);

	const block = {
		c: function create() {
			nav = element("nav");
			if_block.c();
			this.h();
		},
		l: function claim(nodes) {
			nav = claim_element(nodes, "NAV", { class: true });
			var nav_nodes = children(nav);
			if_block.l(nav_nodes);
			nav_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(nav, "class", "svelte-1kwrqte");
			add_location(nav, file, 29, 0, 604);
		},
		m: function mount(target, anchor) {
			insert_dev(target, nav, anchor);
			if_block.m(nav, null);
		},
		p: function update(ctx, [dirty]) {
			if (current_block_type === (current_block_type = select_block_type(ctx)) && if_block) {
				if_block.p(ctx, dirty);
			} else {
				if_block.d(1);
				if_block = current_block_type(ctx);

				if (if_block) {
					if_block.c();
					if_block.m(nav, null);
				}
			}
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(nav);
			if_block.d();
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
	let { songURLstore_value } = $$props;
	let { artiststore_value } = $$props;
	let { songstore_value } = $$props;

	const unsubSongUrl = songURLstore.subscribe(value => {
		$$invalidate(0, songURLstore_value = value);
		console.log(songURLstore_value);
	});

	const unsubArtist = artiststore.subscribe(value => {
		$$invalidate(1, artiststore_value = value);
	});

	const unsubSong = songstore.subscribe(value => {
		$$invalidate(2, songstore_value = value);
	});

	console.log("from player");
	console.log(songURLstore_value);
	console.log(artiststore_value);
	console.log(songstore_value);
	const writable_props = ["songURLstore_value", "artiststore_value", "songstore_value"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1.warn(`<Player> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Player", $$slots, []);

	$$self.$set = $$props => {
		if ("songURLstore_value" in $$props) $$invalidate(0, songURLstore_value = $$props.songURLstore_value);
		if ("artiststore_value" in $$props) $$invalidate(1, artiststore_value = $$props.artiststore_value);
		if ("songstore_value" in $$props) $$invalidate(2, songstore_value = $$props.songstore_value);
	};

	$$self.$capture_state = () => ({
		songURLstore,
		artiststore,
		songstore,
		songURLstore_value,
		artiststore_value,
		songstore_value,
		unsubSongUrl,
		unsubArtist,
		unsubSong
	});

	$$self.$inject_state = $$props => {
		if ("songURLstore_value" in $$props) $$invalidate(0, songURLstore_value = $$props.songURLstore_value);
		if ("artiststore_value" in $$props) $$invalidate(1, artiststore_value = $$props.artiststore_value);
		if ("songstore_value" in $$props) $$invalidate(2, songstore_value = $$props.songstore_value);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [songURLstore_value, artiststore_value, songstore_value];
}

class Player extends SvelteComponentDev {
	constructor(options) {
		super(options);

		init(this, options, instance, create_fragment, safe_not_equal, {
			songURLstore_value: 0,
			artiststore_value: 1,
			songstore_value: 2
		});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Player",
			options,
			id: create_fragment.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*songURLstore_value*/ ctx[0] === undefined && !("songURLstore_value" in props)) {
			console_1.warn("<Player> was created without expected prop 'songURLstore_value'");
		}

		if (/*artiststore_value*/ ctx[1] === undefined && !("artiststore_value" in props)) {
			console_1.warn("<Player> was created without expected prop 'artiststore_value'");
		}

		if (/*songstore_value*/ ctx[2] === undefined && !("songstore_value" in props)) {
			console_1.warn("<Player> was created without expected prop 'songstore_value'");
		}
	}

	get songURLstore_value() {
		throw new Error("<Player>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set songURLstore_value(value) {
		throw new Error("<Player>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get artiststore_value() {
		throw new Error("<Player>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set artiststore_value(value) {
		throw new Error("<Player>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get songstore_value() {
		throw new Error("<Player>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set songstore_value(value) {
		throw new Error("<Player>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

/* src/components/AlbumCard.svelte generated by Svelte v3.24.0 */

const { console: console_1$1 } = globals;
const file$1 = "src/components/AlbumCard.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[15] = list[i];
	return child_ctx;
}

// (60:0) {#if cardvisible}
function create_if_block$1(ctx) {
	let div;
	let ul;
	let each_value = /*songs*/ ctx[5];
	validate_each_argument(each_value);
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	const block = {
		c: function create() {
			div = element("div");
			ul = element("ul");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			this.h();
		},
		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", {});
			var div_nodes = children(div);
			ul = claim_element(div_nodes, "UL", { id: true, class: true });
			var ul_nodes = children(ul);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(ul_nodes);
			}

			ul_nodes.forEach(detach_dev);
			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(ul, "id", /*albumid*/ ctx[2]);
			attr_dev(ul, "class", "svelte-rppcvz");
			add_location(ul, file$1, 61, 4, 1601);
			add_location(div, file$1, 60, 2, 1591);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);
			append_dev(div, ul);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(ul, null);
			}
		},
		p: function update(ctx, dirty) {
			if (dirty & /*songs, zoo*/ 288) {
				each_value = /*songs*/ ctx[5];
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

			if (dirty & /*albumid*/ 4) {
				attr_dev(ul, "id", /*albumid*/ ctx[2]);
			}
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
			destroy_each(each_blocks, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block$1.name,
		type: "if",
		source: "(60:0) {#if cardvisible}",
		ctx
	});

	return block;
}

// (63:6) {#each songs as s}
function create_each_block(ctx) {
	let li;
	let button0;
	let t0;
	let t1;
	let button1;
	let t2;
	let t3;
	let span;
	let t4_value = /*s*/ ctx[15][0] + "";
	let t4;
	let span_id_value;
	let t5;
	let mounted;
	let dispose;

	const block = {
		c: function create() {
			li = element("li");
			button0 = element("button");
			t0 = text("Add");
			t1 = space();
			button1 = element("button");
			t2 = text("Play");
			t3 = space();
			span = element("span");
			t4 = text(t4_value);
			t5 = space();
			this.h();
		},
		l: function claim(nodes) {
			li = claim_element(nodes, "LI", { class: true });
			var li_nodes = children(li);
			button0 = claim_element(li_nodes, "BUTTON", { class: true });
			var button0_nodes = children(button0);
			t0 = claim_text(button0_nodes, "Add");
			button0_nodes.forEach(detach_dev);
			t1 = claim_space(li_nodes);
			button1 = claim_element(li_nodes, "BUTTON", { class: true });
			var button1_nodes = children(button1);
			t2 = claim_text(button1_nodes, "Play");
			button1_nodes.forEach(detach_dev);
			t3 = claim_space(li_nodes);
			span = claim_element(li_nodes, "SPAN", { id: true });
			var span_nodes = children(span);
			t4 = claim_text(span_nodes, t4_value);
			span_nodes.forEach(detach_dev);
			t5 = claim_space(li_nodes);
			li_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(button0, "class", "svelte-rppcvz");
			add_location(button0, file$1, 64, 12, 1669);
			attr_dev(button1, "class", "svelte-rppcvz");
			add_location(button1, file$1, 65, 12, 1702);
			attr_dev(span, "id", span_id_value = /*s*/ ctx[15][1]);
			add_location(span, file$1, 66, 12, 1757);
			attr_dev(li, "class", "svelte-rppcvz");
			add_location(li, file$1, 63, 8, 1652);
		},
		m: function mount(target, anchor) {
			insert_dev(target, li, anchor);
			append_dev(li, button0);
			append_dev(button0, t0);
			append_dev(li, t1);
			append_dev(li, button1);
			append_dev(button1, t2);
			append_dev(li, t3);
			append_dev(li, span);
			append_dev(span, t4);
			append_dev(li, t5);

			if (!mounted) {
				dispose = listen_dev(
					button1,
					"click",
					function () {
						if (is_function(/*zoo*/ ctx[8](/*s*/ ctx[15][1]))) /*zoo*/ ctx[8](/*s*/ ctx[15][1]).apply(this, arguments);
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
			if (dirty & /*songs*/ 32 && t4_value !== (t4_value = /*s*/ ctx[15][0] + "")) set_data_dev(t4, t4_value);

			if (dirty & /*songs*/ 32 && span_id_value !== (span_id_value = /*s*/ ctx[15][1])) {
				attr_dev(span, "id", span_id_value);
			}
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
		source: "(63:6) {#each songs as s}",
		ctx
	});

	return block;
}

function create_fragment$1(ctx) {
	let div1;
	let div0;
	let h4;
	let b;
	let t0;
	let t1;
	let p0;
	let t2;
	let t3;
	let p1;
	let t4;
	let t5;
	let t6;
	let img;
	let img_src_value;
	let t7;
	let if_block_anchor;
	let mounted;
	let dispose;
	let if_block = /*cardvisible*/ ctx[6] && create_if_block$1(ctx);

	const block = {
		c: function create() {
			div1 = element("div");
			div0 = element("div");
			h4 = element("h4");
			b = element("b");
			t0 = text(/*artist*/ ctx[0]);
			t1 = space();
			p0 = element("p");
			t2 = text(/*album*/ ctx[1]);
			t3 = space();
			p1 = element("p");
			t4 = text("Songs: ");
			t5 = text(/*numsongs*/ ctx[4]);
			t6 = space();
			img = element("img");
			t7 = space();
			if (if_block) if_block.c();
			if_block_anchor = empty();
			this.h();
		},
		l: function claim(nodes) {
			div1 = claim_element(nodes, "DIV", { id: true, class: true });
			var div1_nodes = children(div1);
			div0 = claim_element(div1_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			h4 = claim_element(div0_nodes, "H4", {});
			var h4_nodes = children(h4);
			b = claim_element(h4_nodes, "B", {});
			var b_nodes = children(b);
			t0 = claim_text(b_nodes, /*artist*/ ctx[0]);
			b_nodes.forEach(detach_dev);
			h4_nodes.forEach(detach_dev);
			t1 = claim_space(div0_nodes);
			p0 = claim_element(div0_nodes, "P", {});
			var p0_nodes = children(p0);
			t2 = claim_text(p0_nodes, /*album*/ ctx[1]);
			p0_nodes.forEach(detach_dev);
			t3 = claim_space(div0_nodes);
			p1 = claim_element(div0_nodes, "P", {});
			var p1_nodes = children(p1);
			t4 = claim_text(p1_nodes, "Songs: ");
			t5 = claim_text(p1_nodes, /*numsongs*/ ctx[4]);
			p1_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			t6 = claim_space(div1_nodes);
			img = claim_element(div1_nodes, "IMG", { src: true, alt: true, class: true });
			div1_nodes.forEach(detach_dev);
			t7 = claim_space(nodes);
			if (if_block) if_block.l(nodes);
			if_block_anchor = empty();
			this.h();
		},
		h: function hydrate() {
			add_location(b, file$1, 53, 8, 1441);
			add_location(h4, file$1, 53, 4, 1437);
			add_location(p0, file$1, 54, 4, 1466);
			add_location(p1, file$1, 55, 4, 1485);
			attr_dev(div0, "class", "container svelte-rppcvz");
			add_location(div0, file$1, 52, 2, 1409);
			if (img.src !== (img_src_value = /*albumarthttppath*/ ctx[3])) attr_dev(img, "src", img_src_value);
			attr_dev(img, "alt", /*artist*/ ctx[0]);
			attr_dev(img, "class", "svelte-rppcvz");
			add_location(img, file$1, 57, 2, 1521);
			attr_dev(div1, "id", /*albumid*/ ctx[2]);
			attr_dev(div1, "class", "card svelte-rppcvz");
			add_location(div1, file$1, 51, 0, 1355);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div1, anchor);
			append_dev(div1, div0);
			append_dev(div0, h4);
			append_dev(h4, b);
			append_dev(b, t0);
			append_dev(div0, t1);
			append_dev(div0, p0);
			append_dev(p0, t2);
			append_dev(div0, t3);
			append_dev(div0, p1);
			append_dev(p1, t4);
			append_dev(p1, t5);
			append_dev(div1, t6);
			append_dev(div1, img);
			insert_dev(target, t7, anchor);
			if (if_block) if_block.m(target, anchor);
			insert_dev(target, if_block_anchor, anchor);

			if (!mounted) {
				dispose = listen_dev(div1, "click", /*cardfuck*/ ctx[7], false, false, false);
				mounted = true;
			}
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*artist*/ 1) set_data_dev(t0, /*artist*/ ctx[0]);
			if (dirty & /*album*/ 2) set_data_dev(t2, /*album*/ ctx[1]);
			if (dirty & /*numsongs*/ 16) set_data_dev(t5, /*numsongs*/ ctx[4]);

			if (dirty & /*albumarthttppath*/ 8 && img.src !== (img_src_value = /*albumarthttppath*/ ctx[3])) {
				attr_dev(img, "src", img_src_value);
			}

			if (dirty & /*artist*/ 1) {
				attr_dev(img, "alt", /*artist*/ ctx[0]);
			}

			if (dirty & /*albumid*/ 4) {
				attr_dev(div1, "id", /*albumid*/ ctx[2]);
			}

			if (/*cardvisible*/ ctx[6]) {
				if (if_block) {
					if_block.p(ctx, dirty);
				} else {
					if_block = create_if_block$1(ctx);
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
			if (detaching) detach_dev(div1);
			if (detaching) detach_dev(t7);
			if (if_block) if_block.d(detaching);
			if (detaching) detach_dev(if_block_anchor);
			mounted = false;
			dispose();
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment$1.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance$1($$self, $$props, $$invalidate) {
	let { artist } = $$props;
	let { album } = $$props;
	let { albumid } = $$props;
	let { albumarthttppath } = $$props;
	let { numsongs } = $$props;
	let { songs } = $$props;
	let cardvisible = false;

	let cardfuck = () => {
		if (cardvisible) {
			$$invalidate(6, cardvisible = false);
		} else {
			$$invalidate(6, cardvisible = true);
		}
	};

	let ampvel_value;

	const unsubampvel = ampvel.subscribe(value => {
		ampvel_value = value;
	});

	let SONG = "";
	let ARTIST = "";
	let FOOID = "";

	let zoo = x => {
		let promise = getSongURL().catch(err => console.log(err));

		async function getSongURL() {
			fetch(`${ampvel_value}/PathArt?selected=${x}`, { mode: "cors", method: "GET" }).then(r => r.json()).then(data => {
				let oid = data.HttpMusicPath;
				FOOID = ampvel_value + oid;
				ARTIST = data.Artist;
				SONG = data.Song;
				songURLstore.set(FOOID);
				artiststore.set(ARTIST);
				songstore.set(SONG);
			}).catch(err => console.log(err));
		}
	};

	let handleClick = () => {
		promise = getSongURL().catch(err => console.log(err));
	};

	const writable_props = ["artist", "album", "albumid", "albumarthttppath", "numsongs", "songs"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1$1.warn(`<AlbumCard> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("AlbumCard", $$slots, []);

	$$self.$set = $$props => {
		if ("artist" in $$props) $$invalidate(0, artist = $$props.artist);
		if ("album" in $$props) $$invalidate(1, album = $$props.album);
		if ("albumid" in $$props) $$invalidate(2, albumid = $$props.albumid);
		if ("albumarthttppath" in $$props) $$invalidate(3, albumarthttppath = $$props.albumarthttppath);
		if ("numsongs" in $$props) $$invalidate(4, numsongs = $$props.numsongs);
		if ("songs" in $$props) $$invalidate(5, songs = $$props.songs);
	};

	$$self.$capture_state = () => ({
		songURLstore,
		artiststore,
		songstore,
		ampvel,
		Player,
		component_subscribe,
		artist,
		album,
		albumid,
		albumarthttppath,
		numsongs,
		songs,
		cardvisible,
		cardfuck,
		ampvel_value,
		unsubampvel,
		SONG,
		ARTIST,
		FOOID,
		zoo,
		handleClick
	});

	$$self.$inject_state = $$props => {
		if ("artist" in $$props) $$invalidate(0, artist = $$props.artist);
		if ("album" in $$props) $$invalidate(1, album = $$props.album);
		if ("albumid" in $$props) $$invalidate(2, albumid = $$props.albumid);
		if ("albumarthttppath" in $$props) $$invalidate(3, albumarthttppath = $$props.albumarthttppath);
		if ("numsongs" in $$props) $$invalidate(4, numsongs = $$props.numsongs);
		if ("songs" in $$props) $$invalidate(5, songs = $$props.songs);
		if ("cardvisible" in $$props) $$invalidate(6, cardvisible = $$props.cardvisible);
		if ("cardfuck" in $$props) $$invalidate(7, cardfuck = $$props.cardfuck);
		if ("ampvel_value" in $$props) ampvel_value = $$props.ampvel_value;
		if ("SONG" in $$props) SONG = $$props.SONG;
		if ("ARTIST" in $$props) ARTIST = $$props.ARTIST;
		if ("FOOID" in $$props) FOOID = $$props.FOOID;
		if ("zoo" in $$props) $$invalidate(8, zoo = $$props.zoo);
		if ("handleClick" in $$props) handleClick = $$props.handleClick;
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [
		artist,
		album,
		albumid,
		albumarthttppath,
		numsongs,
		songs,
		cardvisible,
		cardfuck,
		zoo
	];
}

class AlbumCard extends SvelteComponentDev {
	constructor(options) {
		super(options);

		init(this, options, instance$1, create_fragment$1, safe_not_equal, {
			artist: 0,
			album: 1,
			albumid: 2,
			albumarthttppath: 3,
			numsongs: 4,
			songs: 5
		});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "AlbumCard",
			options,
			id: create_fragment$1.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*artist*/ ctx[0] === undefined && !("artist" in props)) {
			console_1$1.warn("<AlbumCard> was created without expected prop 'artist'");
		}

		if (/*album*/ ctx[1] === undefined && !("album" in props)) {
			console_1$1.warn("<AlbumCard> was created without expected prop 'album'");
		}

		if (/*albumid*/ ctx[2] === undefined && !("albumid" in props)) {
			console_1$1.warn("<AlbumCard> was created without expected prop 'albumid'");
		}

		if (/*albumarthttppath*/ ctx[3] === undefined && !("albumarthttppath" in props)) {
			console_1$1.warn("<AlbumCard> was created without expected prop 'albumarthttppath'");
		}

		if (/*numsongs*/ ctx[4] === undefined && !("numsongs" in props)) {
			console_1$1.warn("<AlbumCard> was created without expected prop 'numsongs'");
		}

		if (/*songs*/ ctx[5] === undefined && !("songs" in props)) {
			console_1$1.warn("<AlbumCard> was created without expected prop 'songs'");
		}
	}

	get artist() {
		throw new Error("<AlbumCard>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set artist(value) {
		throw new Error("<AlbumCard>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get album() {
		throw new Error("<AlbumCard>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set album(value) {
		throw new Error("<AlbumCard>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get albumid() {
		throw new Error("<AlbumCard>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set albumid(value) {
		throw new Error("<AlbumCard>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get albumarthttppath() {
		throw new Error("<AlbumCard>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set albumarthttppath(value) {
		throw new Error("<AlbumCard>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get numsongs() {
		throw new Error("<AlbumCard>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set numsongs(value) {
		throw new Error("<AlbumCard>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get songs() {
		throw new Error("<AlbumCard>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set songs(value) {
		throw new Error("<AlbumCard>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export { AlbumCard as A, Player as P };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWxidW1DYXJkLjIzNWFmMDJkLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9QbGF5ZXIuc3ZlbHRlIiwiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvQWxidW1DYXJkLnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0PlxuXHRpbXBvcnQge3NvbmdVUkxzdG9yZSwgYXJ0aXN0c3RvcmUsIHNvbmdzdG9yZX0gZnJvbSAnLi9QbGF5ZXJTdG9yZS5qcydcblxuXG5cdGV4cG9ydCBsZXQgc29uZ1VSTHN0b3JlX3ZhbHVlO1xuXHRleHBvcnQgbGV0IGFydGlzdHN0b3JlX3ZhbHVlO1xuXHRleHBvcnQgbGV0IHNvbmdzdG9yZV92YWx1ZTtcblx0XG5cblx0Y29uc3QgdW5zdWJTb25nVXJsID0gc29uZ1VSTHN0b3JlLnN1YnNjcmliZSh2YWx1ZSA9PiB7XG5cdFx0c29uZ1VSTHN0b3JlX3ZhbHVlID0gdmFsdWVcblx0XHRjb25zb2xlLmxvZyhzb25nVVJMc3RvcmVfdmFsdWUpXG5cdH0pXG5cblx0Y29uc3QgdW5zdWJBcnRpc3QgPSBhcnRpc3RzdG9yZS5zdWJzY3JpYmUodmFsdWUgPT4ge1xuXHRcdGFydGlzdHN0b3JlX3ZhbHVlID0gdmFsdWVcblx0fSlcblxuXHRjb25zdCB1bnN1YlNvbmcgPSBzb25nc3RvcmUuc3Vic2NyaWJlKHZhbHVlID0+IHtcblx0XHRzb25nc3RvcmVfdmFsdWUgPSB2YWx1ZVxuXHR9KVxuXG5cdGNvbnNvbGUubG9nKFwiZnJvbSBwbGF5ZXJcIilcblx0Y29uc29sZS5sb2coc29uZ1VSTHN0b3JlX3ZhbHVlKVxuXHRjb25zb2xlLmxvZyhhcnRpc3RzdG9yZV92YWx1ZSlcblx0Y29uc29sZS5sb2coc29uZ3N0b3JlX3ZhbHVlKVxuXG48L3NjcmlwdD5cblxuPG5hdj5cblx0eyNpZiBzb25nVVJMc3RvcmVfdmFsdWUgIT0gXCJcIiAmJiBzb25nVVJMc3RvcmVfdmFsdWUgIT0gdW5kZWZpbmVkfVxuXHRcdDxkaXY+XG5cdFx0XHQ8YXVkaW8gY29udHJvbHMgc3JjPXtzb25nVVJMc3RvcmVfdmFsdWV9PjwvYXVkaW8+XG5cdFx0PC9kaXY+XG5cdFx0PHVsPlxuXHRcdFx0PGxpPjxzcGFuPnthcnRpc3RzdG9yZV92YWx1ZX08L3NwYW4+PC9saT5cblx0XHRcdDxsaT48c3Bhbj57c29uZ3N0b3JlX3ZhbHVlfTwvc3Bhbj48L2xpPlxuXHRcdDwvdWw+XG5cdHs6ZWxzZX1cblx0XHQ8cD5XaG9vcHMgYmFkIFVSTDwvcD5cblx0ey9pZn1cbjwvbmF2PlxuXG48c3R5bGU+XG5cblx0bmF2IHtcblx0XHRwb3NpdGlvbjogZml4ZWQ7XG5cdFx0bGVmdDogMDtcblx0XHRib3R0b206IDA7XG5cdFx0d2lkdGg6IDEwMCU7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogeWVsbG93Z3JlZW47XG5cdFx0Y29sb3I6IHdoaXRlO1xuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0fVxuXG5cdHVsIHtcblx0XHRsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG5cdH1cblxuXHRsaSB7XG5cdFx0ZGlzcGxheTogaW5saW5lO1xuXHRcdG1hcmdpbjogMjBweDtcblx0fVxuXG5cdHNwYW4ge1xuXHRcdGNvbG9yOiBibGFja1xuXHR9XG5cblx0YXVkaW8ge1xuXHRcdHdpZHRoOiA1MCU7XG5cdFx0cGFkZGluZzogN3B4O1xuXHR9XG5cbjwvc3R5bGU+XG5cbiIsIjxzY3JpcHQ+XG4gICAgaW1wb3J0IHsgc29uZ1VSTHN0b3JlLCBhcnRpc3RzdG9yZSwgc29uZ3N0b3JlLCBhbXB2ZWwgfSBmcm9tICcuL1BsYXllclN0b3JlLmpzJ1xuICAgIGltcG9ydCBQbGF5ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9QbGF5ZXIuc3ZlbHRlJztcbiAgICBpbXBvcnQgeyBjb21wb25lbnRfc3Vic2NyaWJlIH0gZnJvbSAnc3ZlbHRlL2ludGVybmFsJztcbiAgICBleHBvcnQgbGV0IGFydGlzdDtcbiAgICBleHBvcnQgbGV0IGFsYnVtO1xuICAgIGV4cG9ydCBsZXQgYWxidW1pZDtcbiAgICBleHBvcnQgbGV0IGFsYnVtYXJ0aHR0cHBhdGg7XG4gICAgZXhwb3J0IGxldCBudW1zb25ncztcbiAgICBleHBvcnQgbGV0IHNvbmdzO1xuXG4gICAgbGV0IGNhcmR2aXNpYmxlID0gZmFsc2U7XG4gICAgbGV0IGNhcmRmdWNrID0gKCkgPT4ge1xuICAgICAgaWYgKGNhcmR2aXNpYmxlKSB7XG4gICAgICAgIGNhcmR2aXNpYmxlID0gZmFsc2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjYXJkdmlzaWJsZSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGV0IGFtcHZlbF92YWx1ZTtcbiAgICBjb25zdCB1bnN1YmFtcHZlbCA9IGFtcHZlbC5zdWJzY3JpYmUodmFsdWUgPT4ge1xuICAgICAgYW1wdmVsX3ZhbHVlID0gdmFsdWVcbiAgICB9KVxuXG4gICAgbGV0IFNPTkcgPSBcIlwiO1xuICAgIGxldCBBUlRJU1QgPSBcIlwiO1xuICAgIGxldCBGT09JRCA9IFwiXCI7XG4gICAgbGV0IHpvbyA9ICh4KSA9PiB7XG4gICAgICBsZXQgcHJvbWlzZSA9IGdldFNvbmdVUkwoKS5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSk7XG4gICAgICBhc3luYyBmdW5jdGlvbiBnZXRTb25nVVJMKCkge1xuICAgICAgICBmZXRjaChgJHthbXB2ZWxfdmFsdWV9L1BhdGhBcnQ/c2VsZWN0ZWQ9JHt4fWAsIHttb2RlOiBcImNvcnNcIiwgbWV0aG9kOiBcIkdFVFwifSlcbiAgICAgICAgLnRoZW4ociA9PiByLmpzb24oKSlcbiAgICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgbGV0IG9pZCA9IGRhdGEuSHR0cE11c2ljUGF0aFxuICAgICAgICAgIEZPT0lEID0gYW1wdmVsX3ZhbHVlICsgb2lkXG4gICAgICAgICAgQVJUSVNUID0gZGF0YS5BcnRpc3RcbiAgICAgICAgICBTT05HID0gZGF0YS5Tb25nXG4gICAgICAgICAgc29uZ1VSTHN0b3JlLnNldChGT09JRClcbiAgICAgICAgICBhcnRpc3RzdG9yZS5zZXQoQVJUSVNUKVxuICAgICAgICAgIHNvbmdzdG9yZS5zZXQoU09ORylcbiAgICAgICAgfSkuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxldCBoYW5kbGVDbGljayA9ICgpID0+IHtcbiAgICAgIHByb21pc2UgPSBnZXRTb25nVVJMKCkuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpO1xuICAgIH1cblxuPC9zY3JpcHQ+XG5cbjxkaXYgaWQ9e2FsYnVtaWR9IGNsYXNzPVwiY2FyZFwiIG9uOmNsaWNrPXtjYXJkZnVja30+XG4gIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICA8aDQ+PGI+e2FydGlzdH08L2I+PC9oND5cbiAgICA8cD57YWxidW19PC9wPlxuICAgIDxwPlNvbmdzOiB7bnVtc29uZ3N9PC9wPlxuICA8L2Rpdj5cbiAgPGltZyBzcmM9e2FsYnVtYXJ0aHR0cHBhdGh9IGFsdD17YXJ0aXN0fT5cbjwvZGl2PiBcbnsjaWYgY2FyZHZpc2libGV9XG4gIDxkaXY+XG4gICAgPHVsIGlkPXthbGJ1bWlkfT5cbiAgICAgIHsjZWFjaCBzb25ncyBhcyBzfVxuICAgICAgICA8bGk+XG4gICAgICAgICAgICA8YnV0dG9uPkFkZDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiBvbjpjbGljaz17em9vKHNbMV0pfT5QbGF5PC9idXR0b24+XG4gICAgICAgICAgICA8c3BhbiBpZD17c1sxXX0+e3NbMF19PC9zcGFuPlxuICAgICAgICA8L2xpPlxuICAgICAgICB7L2VhY2h9XG4gICAgPC91bD5cbiAgPC9kaXY+XG57L2lmfVxuXG48IS0tIHsjaWYgRk9PSUQgIT0gXCJcIiAmJiBGT09JRCAhPSB1bmRlZmluZWR9XG4gIDxQbGF5ZXIgc29uZ1VSTD17Rk9PSUR9IGFydGlzdD17QVJUSVNUfSBzb25nPXtTT05HfSAvPlxuey9pZn0gLS0+XG5cbjxzdHlsZT5cblxuICAgIGJ1dHRvbiB7XG4gICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDI1cHg7XG4gICAgfVxuXG4gICAgLmNhcmQge1xuICAgICAgLyogQWRkIHNoYWRvd3MgdG8gY3JlYXRlIHRoZSBcImNhcmRcIiBlZmZlY3QgKi9cbiAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwwLDAsMC4yKTtcbiAgICAgIHRyYW5zaXRpb246IDAuM3M7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93Z3JlZW47XG4gICAgICBib3JkZXI6IGJsYWNrO1xuICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgfVxuICAgIFxuICAgIC8qIE9uIG1vdXNlLW92ZXIsIGFkZCBhIGRlZXBlciBzaGFkb3cgKi9cbiAgICAuY2FyZDpob3ZlciB7XG4gICAgICBib3gtc2hhZG93OiAwIDhweCAxNnB4IDAgcmdiYSgwLDAsMCwwLjIpO1xuICAgIH1cbiAgICBcbiAgICAvKiBBZGQgc29tZSBwYWRkaW5nIGluc2lkZSB0aGUgY2FyZCBjb250YWluZXIgKi9cbiAgICAuY29udGFpbmVyIHtcbiAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgICAgcGFkZGluZy1yaWdodDogMzVweDtcbiAgICAgIGZsb2F0OiByaWdodDtcbiAgICB9XG4gICAgXG4gICAgaW1nIHtcbiAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgICAgcGFkZGluZy1ib3R0b206IDRweDtcbiAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICB9XG4gICAgXG4gICAgdWwge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRvbWF0bztcbiAgICBib3JkZXI6IGJsYWNrO1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgfVxuXG4gICAgbGkge1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG5cbjwvc3R5bGU+XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O21DQW1DYyxHQUFpQjs7OztpQ0FDakIsR0FBZTs7Ozs7Ozs7Ozs7Ozs7OztzREFEZixHQUFpQjs7Ozs7Ozs7b0RBQ2pCLEdBQWU7Ozs7Ozs7OytEQUpMLEdBQWtCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzttR0FBbEIsR0FBa0I7Ozs7K0VBRzVCLEdBQWlCOzJFQUNqQixHQUFlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7NkJBTnZCLEdBQWtCLE9BQUksRUFBRSwyQkFBSSxHQUFrQixPQUFJLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7T0ExQnJELGtCQUFrQjtPQUNsQixpQkFBaUI7T0FDakIsZUFBZTs7T0FHcEIsWUFBWSxHQUFHLFlBQVksQ0FBQyxTQUFTLENBQUMsS0FBSztrQkFDaEQsa0JBQWtCLEdBQUcsS0FBSztFQUMxQixPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQjs7O09BR3pCLFdBQVcsR0FBRyxXQUFXLENBQUMsU0FBUyxDQUFDLEtBQUs7a0JBQzlDLGlCQUFpQixHQUFHLEtBQUs7OztPQUdwQixTQUFTLEdBQUcsU0FBUyxDQUFDLFNBQVMsQ0FBQyxLQUFLO2tCQUMxQyxlQUFlLEdBQUcsS0FBSzs7O0NBR3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYTtDQUN6QixPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQjtDQUM5QixPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQjtDQUM3QixPQUFPLENBQUMsR0FBRyxDQUFD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
