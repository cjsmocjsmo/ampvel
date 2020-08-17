import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, g as globals, K as songURLstore, L as artiststore, M as songstore, v as validate_slots, e as element, c as claim_element, a as children, f as detach_dev, h as attr_dev, j as add_location, k as insert_dev, n as noop, t as text, b as claim_text, l as append_dev, p as space, r as claim_space, u as set_data_dev, x as ampvel, R as component_subscribe, A as validate_each_argument, B as destroy_each, m as listen_dev, N as is_function, z as empty } from './client.2fee993c.js';

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
	child_ctx[13] = list[i];
	return child_ctx;
}

// (54:0) {#if cardvisible}
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
			add_location(ul, file$1, 55, 4, 1479);
			add_location(div, file$1, 54, 2, 1469);
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
		source: "(54:0) {#if cardvisible}",
		ctx
	});

	return block;
}

// (57:6) {#each songs as s}
function create_each_block(ctx) {
	let li;
	let button0;
	let t0;
	let t1;
	let button1;
	let t2;
	let t3;
	let span;
	let t4_value = /*s*/ ctx[13][0] + "";
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
			add_location(button0, file$1, 58, 12, 1547);
			attr_dev(button1, "class", "svelte-rppcvz");
			add_location(button1, file$1, 59, 12, 1580);
			attr_dev(span, "id", span_id_value = /*s*/ ctx[13][1]);
			add_location(span, file$1, 60, 12, 1635);
			attr_dev(li, "class", "svelte-rppcvz");
			add_location(li, file$1, 57, 8, 1530);
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
						if (is_function(/*zoo*/ ctx[8](/*s*/ ctx[13][1]))) /*zoo*/ ctx[8](/*s*/ ctx[13][1]).apply(this, arguments);
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
			if (dirty & /*songs*/ 32 && t4_value !== (t4_value = /*s*/ ctx[13][0] + "")) set_data_dev(t4, t4_value);

			if (dirty & /*songs*/ 32 && span_id_value !== (span_id_value = /*s*/ ctx[13][1])) {
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
		source: "(57:6) {#each songs as s}",
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
			add_location(b, file$1, 47, 8, 1319);
			add_location(h4, file$1, 47, 4, 1315);
			add_location(p0, file$1, 48, 4, 1344);
			add_location(p1, file$1, 49, 4, 1363);
			attr_dev(div0, "class", "container svelte-rppcvz");
			add_location(div0, file$1, 46, 2, 1287);
			if (img.src !== (img_src_value = /*albumarthttppath*/ ctx[3])) attr_dev(img, "src", img_src_value);
			attr_dev(img, "alt", /*artist*/ ctx[0]);
			attr_dev(img, "class", "svelte-rppcvz");
			add_location(img, file$1, 51, 2, 1399);
			attr_dev(div1, "id", /*albumid*/ ctx[2]);
			attr_dev(div1, "class", "card svelte-rppcvz");
			add_location(div1, file$1, 45, 0, 1233);
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

	let SONG = "";
	let ARTIST = "";
	let FOOID = "";

	let zoo = x => {
		let promise = getSongURL().catch(err => console.log(err));

		async function getSongURL() {
			fetch(`${ampvle}/PathArt?selected=${x}`, { mode: "cors", method: "GET" }).then(r => r.json()).then(data => {
				let oid = data.HttpMusicPath;
				FOOID = ampvel + oid;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWxidW1DYXJkLjFmMjgxMTJiLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9QbGF5ZXIuc3ZlbHRlIiwiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvQWxidW1DYXJkLnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0PlxuXHRpbXBvcnQge3NvbmdVUkxzdG9yZSwgYXJ0aXN0c3RvcmUsIHNvbmdzdG9yZX0gZnJvbSAnLi9QbGF5ZXJTdG9yZS5qcydcblxuXG5cdGV4cG9ydCBsZXQgc29uZ1VSTHN0b3JlX3ZhbHVlO1xuXHRleHBvcnQgbGV0IGFydGlzdHN0b3JlX3ZhbHVlO1xuXHRleHBvcnQgbGV0IHNvbmdzdG9yZV92YWx1ZTtcblx0XG5cblx0Y29uc3QgdW5zdWJTb25nVXJsID0gc29uZ1VSTHN0b3JlLnN1YnNjcmliZSh2YWx1ZSA9PiB7XG5cdFx0c29uZ1VSTHN0b3JlX3ZhbHVlID0gdmFsdWVcblx0XHRjb25zb2xlLmxvZyhzb25nVVJMc3RvcmVfdmFsdWUpXG5cdH0pXG5cblx0Y29uc3QgdW5zdWJBcnRpc3QgPSBhcnRpc3RzdG9yZS5zdWJzY3JpYmUodmFsdWUgPT4ge1xuXHRcdGFydGlzdHN0b3JlX3ZhbHVlID0gdmFsdWVcblx0fSlcblxuXHRjb25zdCB1bnN1YlNvbmcgPSBzb25nc3RvcmUuc3Vic2NyaWJlKHZhbHVlID0+IHtcblx0XHRzb25nc3RvcmVfdmFsdWUgPSB2YWx1ZVxuXHR9KVxuXG5cdGNvbnNvbGUubG9nKFwiZnJvbSBwbGF5ZXJcIilcblx0Y29uc29sZS5sb2coc29uZ1VSTHN0b3JlX3ZhbHVlKVxuXHRjb25zb2xlLmxvZyhhcnRpc3RzdG9yZV92YWx1ZSlcblx0Y29uc29sZS5sb2coc29uZ3N0b3JlX3ZhbHVlKVxuXG48L3NjcmlwdD5cblxuPG5hdj5cblx0eyNpZiBzb25nVVJMc3RvcmVfdmFsdWUgIT0gXCJcIiAmJiBzb25nVVJMc3RvcmVfdmFsdWUgIT0gdW5kZWZpbmVkfVxuXHRcdDxkaXY+XG5cdFx0XHQ8YXVkaW8gY29udHJvbHMgc3JjPXtzb25nVVJMc3RvcmVfdmFsdWV9PjwvYXVkaW8+XG5cdFx0PC9kaXY+XG5cdFx0PHVsPlxuXHRcdFx0PGxpPjxzcGFuPnthcnRpc3RzdG9yZV92YWx1ZX08L3NwYW4+PC9saT5cblx0XHRcdDxsaT48c3Bhbj57c29uZ3N0b3JlX3ZhbHVlfTwvc3Bhbj48L2xpPlxuXHRcdDwvdWw+XG5cdHs6ZWxzZX1cblx0XHQ8cD5XaG9vcHMgYmFkIFVSTDwvcD5cblx0ey9pZn1cbjwvbmF2PlxuXG48c3R5bGU+XG5cblx0bmF2IHtcblx0XHRwb3NpdGlvbjogZml4ZWQ7XG5cdFx0bGVmdDogMDtcblx0XHRib3R0b206IDA7XG5cdFx0d2lkdGg6IDEwMCU7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogeWVsbG93Z3JlZW47XG5cdFx0Y29sb3I6IHdoaXRlO1xuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0fVxuXG5cdHVsIHtcblx0XHRsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG5cdH1cblxuXHRsaSB7XG5cdFx0ZGlzcGxheTogaW5saW5lO1xuXHRcdG1hcmdpbjogMjBweDtcblx0fVxuXG5cdHNwYW4ge1xuXHRcdGNvbG9yOiBibGFja1xuXHR9XG5cblx0YXVkaW8ge1xuXHRcdHdpZHRoOiA1MCU7XG5cdFx0cGFkZGluZzogN3B4O1xuXHR9XG5cbjwvc3R5bGU+XG5cbiIsIjxzY3JpcHQ+XG4gICAgaW1wb3J0IHsgc29uZ1VSTHN0b3JlLCBhcnRpc3RzdG9yZSwgc29uZ3N0b3JlLCBhbXB2ZWwgfSBmcm9tICcuL1BsYXllclN0b3JlLmpzJ1xuICAgIGltcG9ydCBQbGF5ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9QbGF5ZXIuc3ZlbHRlJztcbiAgICBpbXBvcnQgeyBjb21wb25lbnRfc3Vic2NyaWJlIH0gZnJvbSAnc3ZlbHRlL2ludGVybmFsJztcbiAgICBleHBvcnQgbGV0IGFydGlzdDtcbiAgICBleHBvcnQgbGV0IGFsYnVtO1xuICAgIGV4cG9ydCBsZXQgYWxidW1pZDtcbiAgICBleHBvcnQgbGV0IGFsYnVtYXJ0aHR0cHBhdGg7XG4gICAgZXhwb3J0IGxldCBudW1zb25ncztcbiAgICBleHBvcnQgbGV0IHNvbmdzO1xuXG4gICAgbGV0IGNhcmR2aXNpYmxlID0gZmFsc2U7XG4gICAgbGV0IGNhcmRmdWNrID0gKCkgPT4ge1xuICAgICAgaWYgKGNhcmR2aXNpYmxlKSB7XG4gICAgICAgIGNhcmR2aXNpYmxlID0gZmFsc2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjYXJkdmlzaWJsZSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIGxldCBTT05HID0gXCJcIjtcbiAgICBsZXQgQVJUSVNUID0gXCJcIjtcbiAgICBsZXQgRk9PSUQgPSBcIlwiO1xuICAgIGxldCB6b28gPSAoeCkgPT4ge1xuICAgICAgbGV0IHByb21pc2UgPSBnZXRTb25nVVJMKCkuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpO1xuICAgICAgYXN5bmMgZnVuY3Rpb24gZ2V0U29uZ1VSTCgpIHtcbiAgICAgICAgZmV0Y2goYCR7YW1wdmxlfS9QYXRoQXJ0P3NlbGVjdGVkPSR7eH1gLCB7bW9kZTogXCJjb3JzXCIsIG1ldGhvZDogXCJHRVRcIn0pXG4gICAgICAgIC50aGVuKHIgPT4gci5qc29uKCkpXG4gICAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgIGxldCBvaWQgPSBkYXRhLkh0dHBNdXNpY1BhdGhcbiAgICAgICAgICBGT09JRCA9IGFtcHZlbCArIG9pZFxuICAgICAgICAgIEFSVElTVCA9IGRhdGEuQXJ0aXN0XG4gICAgICAgICAgU09ORyA9IGRhdGEuU29uZ1xuICAgICAgICAgIHNvbmdVUkxzdG9yZS5zZXQoRk9PSUQpXG4gICAgICAgICAgYXJ0aXN0c3RvcmUuc2V0KEFSVElTVClcbiAgICAgICAgICBzb25nc3RvcmUuc2V0KFNPTkcpXG4gICAgICAgIH0pLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XG4gICAgICBwcm9taXNlID0gZ2V0U29uZ1VSTCgpLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKTtcbiAgICB9XG5cbjwvc2NyaXB0PlxuXG48ZGl2IGlkPXthbGJ1bWlkfSBjbGFzcz1cImNhcmRcIiBvbjpjbGljaz17Y2FyZGZ1Y2t9PlxuICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgPGg0PjxiPnthcnRpc3R9PC9iPjwvaDQ+XG4gICAgPHA+e2FsYnVtfTwvcD5cbiAgICA8cD5Tb25nczoge251bXNvbmdzfTwvcD5cbiAgPC9kaXY+XG4gIDxpbWcgc3JjPXthbGJ1bWFydGh0dHBwYXRofSBhbHQ9e2FydGlzdH0+XG48L2Rpdj4gXG57I2lmIGNhcmR2aXNpYmxlfVxuICA8ZGl2PlxuICAgIDx1bCBpZD17YWxidW1pZH0+XG4gICAgICB7I2VhY2ggc29uZ3MgYXMgc31cbiAgICAgICAgPGxpPlxuICAgICAgICAgICAgPGJ1dHRvbj5BZGQ8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gb246Y2xpY2s9e3pvbyhzWzFdKX0+UGxheTwvYnV0dG9uPlxuICAgICAgICAgICAgPHNwYW4gaWQ9e3NbMV19PntzWzBdfTwvc3Bhbj5cbiAgICAgICAgPC9saT5cbiAgICAgICAgey9lYWNofVxuICAgIDwvdWw+XG4gIDwvZGl2Plxuey9pZn1cblxuPCEtLSB7I2lmIEZPT0lEICE9IFwiXCIgJiYgRk9PSUQgIT0gdW5kZWZpbmVkfVxuICA8UGxheWVyIHNvbmdVUkw9e0ZPT0lEfSBhcnRpc3Q9e0FSVElTVH0gc29uZz17U09OR30gLz5cbnsvaWZ9IC0tPlxuXG48c3R5bGU+XG5cbiAgICBidXR0b24ge1xuICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgbWFyZ2luLXJpZ2h0OiAyNXB4O1xuICAgIH1cblxuICAgIC5jYXJkIHtcbiAgICAgIC8qIEFkZCBzaGFkb3dzIHRvIGNyZWF0ZSB0aGUgXCJjYXJkXCIgZWZmZWN0ICovXG4gICAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsMCwwLDAuMik7XG4gICAgICB0cmFuc2l0aW9uOiAwLjNzO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHllbGxvd2dyZWVuO1xuICAgICAgYm9yZGVyOiBibGFjaztcbiAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIH1cbiAgICBcbiAgICAvKiBPbiBtb3VzZS1vdmVyLCBhZGQgYSBkZWVwZXIgc2hhZG93ICovXG4gICAgLmNhcmQ6aG92ZXIge1xuICAgICAgYm94LXNoYWRvdzogMCA4cHggMTZweCAwIHJnYmEoMCwwLDAsMC4yKTtcbiAgICB9XG4gICAgXG4gICAgLyogQWRkIHNvbWUgcGFkZGluZyBpbnNpZGUgdGhlIGNhcmQgY29udGFpbmVyICovXG4gICAgLmNvbnRhaW5lciB7XG4gICAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDM1cHg7XG4gICAgICBmbG9hdDogcmlnaHQ7XG4gICAgfVxuICAgIFxuICAgIGltZyB7XG4gICAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICAgIHBhZGRpbmctYm90dG9tOiA0cHg7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgfVxuICAgIFxuICAgIHVsIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0b21hdG87XG4gICAgYm9yZGVyOiBibGFjaztcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgIH1cblxuICAgIGxpIHtcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuXG48L3N0eWxlPlxuIl0sIm5hbWVz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
