import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, A as validate_each_argument, v as validate_slots, K as songURLstore, L as artiststore, M as songstore, x as ampvel, g as globals, e as element, t as text, c as claim_element, a as children, b as claim_text, f as detach_dev, h as attr_dev, j as add_location, k as insert_dev, l as append_dev, m as listen_dev, N as is_function, u as set_data_dev, p as space, r as claim_space, B as destroy_each, z as empty, n as noop, o as onMount, D as create_component, E as claim_component, F as mount_component, G as transition_in, H as transition_out, I as destroy_component, q as query_selector_all, O as check_outros, P as group_outros } from './client.f6d5fdfb.js';
import { A as AlbumCard, P as Player } from './AlbumCard.c5b6454b.js';
import { P as PageComp } from './PageComp.46692fc9.js';

/* src/components/ArtistAlbums.svelte generated by Svelte v3.24.0 */

const { console: console_1 } = globals;
const file = "src/components/ArtistAlbums.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[14] = list[i];
	return child_ctx;
}

function get_each_context_1(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[17] = list[i];
	return child_ctx;
}

// (64:8) {#each infoalbums.Albums as alb}
function create_each_block_1(ctx) {
	let button;
	let t_value = /*alb*/ ctx[17][0] + "";
	let t;
	let button_id_value;
	let mounted;
	let dispose;

	const block = {
		c: function create() {
			button = element("button");
			t = text(t_value);
			this.h();
		},
		l: function claim(nodes) {
			button = claim_element(nodes, "BUTTON", { id: true });
			var button_nodes = children(button);
			t = claim_text(button_nodes, t_value);
			button_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(button, "id", button_id_value = /*alb*/ ctx[17][1]);
			add_location(button, file, 64, 12, 1941);
		},
		m: function mount(target, anchor) {
			insert_dev(target, button, anchor);
			append_dev(button, t);

			if (!mounted) {
				dispose = listen_dev(
					button,
					"click",
					function () {
						if (is_function(/*handleMyClick*/ ctx[5](/*alb*/ ctx[17][1]))) /*handleMyClick*/ ctx[5](/*alb*/ ctx[17][1]).apply(this, arguments);
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
			if (dirty & /*infoalbums*/ 1 && t_value !== (t_value = /*alb*/ ctx[17][0] + "")) set_data_dev(t, t_value);

			if (dirty & /*infoalbums*/ 1 && button_id_value !== (button_id_value = /*alb*/ ctx[17][1])) {
				attr_dev(button, "id", button_id_value);
			}
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(button);
			mounted = false;
			dispose();
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block_1.name,
		type: "each",
		source: "(64:8) {#each infoalbums.Albums as alb}",
		ctx
	});

	return block;
}

// (71:0) {#if artalbvisible}
function create_if_block(ctx) {
	let img;
	let img_src_value;
	let t0;
	let div;
	let ul;
	let t1;
	let button;
	let t2;
	let each_value = /*SONGS*/ ctx[2];
	validate_each_argument(each_value);
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	const block = {
		c: function create() {
			img = element("img");
			t0 = space();
			div = element("div");
			ul = element("ul");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			t1 = space();
			button = element("button");
			t2 = text("Play All");
			this.h();
		},
		l: function claim(nodes) {
			img = claim_element(nodes, "IMG", { src: true, alt: true, class: true });
			t0 = claim_space(nodes);
			div = claim_element(nodes, "DIV", { class: true });
			var div_nodes = children(div);
			ul = claim_element(div_nodes, "UL", { id: true, class: true });
			var ul_nodes = children(ul);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(ul_nodes);
			}

			ul_nodes.forEach(detach_dev);
			div_nodes.forEach(detach_dev);
			t1 = claim_space(nodes);
			button = claim_element(nodes, "BUTTON", { class: true });
			var button_nodes = children(button);
			t2 = claim_text(button_nodes, "Play All");
			button_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			if (img.src !== (img_src_value = /*THUMB*/ ctx[3])) attr_dev(img, "src", img_src_value);
			attr_dev(img, "alt", "fuckme");
			attr_dev(img, "class", "svelte-1enwpj0");
			add_location(img, file, 71, 4, 2121);
			attr_dev(ul, "id", "bobo");
			attr_dev(ul, "class", "svelte-1enwpj0");
			add_location(ul, file, 74, 8, 2193);
			attr_dev(div, "class", "artimg");
			add_location(div, file, 73, 4, 2164);
			attr_dev(button, "class", "playall svelte-1enwpj0");
			add_location(button, file, 83, 4, 2495);
		},
		m: function mount(target, anchor) {
			insert_dev(target, img, anchor);
			insert_dev(target, t0, anchor);
			insert_dev(target, div, anchor);
			append_dev(div, ul);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(ul, null);
			}

			insert_dev(target, t1, anchor);
			insert_dev(target, button, anchor);
			append_dev(button, t2);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*THUMB*/ 8 && img.src !== (img_src_value = /*THUMB*/ ctx[3])) {
				attr_dev(img, "src", img_src_value);
			}

			if (dirty & /*handlePlayClick, SONGS*/ 68) {
				each_value = /*SONGS*/ ctx[2];
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
			if (detaching) detach_dev(img);
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(div);
			destroy_each(each_blocks, detaching);
			if (detaching) detach_dev(t1);
			if (detaching) detach_dev(button);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block.name,
		type: "if",
		source: "(71:0) {#if artalbvisible}",
		ctx
	});

	return block;
}

// (76:12) {#each SONGS as so}
function create_each_block(ctx) {
	let li;
	let span;
	let h2;
	let t0_value = /*so*/ ctx[14][0] + "";
	let t0;
	let button0;
	let t1;
	let button1;
	let t2;
	let t3;
	let mounted;
	let dispose;

	const block = {
		c: function create() {
			li = element("li");
			span = element("span");
			h2 = element("h2");
			t0 = text(t0_value);
			button0 = element("button");
			t1 = text("Play");
			button1 = element("button");
			t2 = text("Add");
			t3 = space();
			this.h();
		},
		l: function claim(nodes) {
			li = claim_element(nodes, "LI", {});
			var li_nodes = children(li);
			span = claim_element(li_nodes, "SPAN", {});
			var span_nodes = children(span);
			h2 = claim_element(span_nodes, "H2", {});
			var h2_nodes = children(h2);
			t0 = claim_text(h2_nodes, t0_value);
			h2_nodes.forEach(detach_dev);
			span_nodes.forEach(detach_dev);
			button0 = claim_element(li_nodes, "BUTTON", { class: true });
			var button0_nodes = children(button0);
			t1 = claim_text(button0_nodes, "Play");
			button0_nodes.forEach(detach_dev);
			button1 = claim_element(li_nodes, "BUTTON", { class: true });
			var button1_nodes = children(button1);
			t2 = claim_text(button1_nodes, "Add");
			button1_nodes.forEach(detach_dev);
			t3 = claim_space(li_nodes);
			li_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(h2, file, 77, 26, 2287);
			add_location(span, file, 77, 20, 2281);
			attr_dev(button0, "class", "play svelte-1enwpj0");
			add_location(button0, file, 77, 49, 2310);
			attr_dev(button1, "class", "playadd svelte-1enwpj0");
			add_location(button1, file, 77, 117, 2378);
			add_location(li, file, 76, 16, 2256);
		},
		m: function mount(target, anchor) {
			insert_dev(target, li, anchor);
			append_dev(li, span);
			append_dev(span, h2);
			append_dev(h2, t0);
			append_dev(li, button0);
			append_dev(button0, t1);
			append_dev(li, button1);
			append_dev(button1, t2);
			append_dev(li, t3);

			if (!mounted) {
				dispose = listen_dev(
					button0,
					"click",
					function () {
						if (is_function(/*handlePlayClick*/ ctx[6](/*so*/ ctx[14][1]))) /*handlePlayClick*/ ctx[6](/*so*/ ctx[14][1]).apply(this, arguments);
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
			if (dirty & /*SONGS*/ 4 && t0_value !== (t0_value = /*so*/ ctx[14][0] + "")) set_data_dev(t0, t0_value);
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
		source: "(76:12) {#each SONGS as so}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let div;
	let ul;
	let t0;
	let button;
	let t1;
	let ul_id_value;
	let t2;
	let if_block_anchor;
	let mounted;
	let dispose;
	let each_value_1 = /*infoalbums*/ ctx[0].Albums;
	validate_each_argument(each_value_1);
	let each_blocks = [];

	for (let i = 0; i < each_value_1.length; i += 1) {
		each_blocks[i] = create_each_block_1(get_each_context_1(ctx, each_value_1, i));
	}

	let if_block = /*artalbvisible*/ ctx[1] && create_if_block(ctx);

	const block = {
		c: function create() {
			div = element("div");
			ul = element("ul");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			t0 = space();
			button = element("button");
			t1 = text("+/-");
			t2 = space();
			if (if_block) if_block.c();
			if_block_anchor = empty();
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

			t0 = claim_space(ul_nodes);
			button = claim_element(ul_nodes, "BUTTON", {});
			var button_nodes = children(button);
			t1 = claim_text(button_nodes, "+/-");
			button_nodes.forEach(detach_dev);
			ul_nodes.forEach(detach_dev);
			div_nodes.forEach(detach_dev);
			t2 = claim_space(nodes);
			if (if_block) if_block.l(nodes);
			if_block_anchor = empty();
			this.h();
		},
		h: function hydrate() {
			add_location(button, file, 66, 8, 2037);
			attr_dev(ul, "id", ul_id_value = /*infoalbums*/ ctx[0].ArtistId);
			attr_dev(ul, "class", "svelte-1enwpj0");
			add_location(ul, file, 62, 4, 1858);
			add_location(div, file, 61, 0, 1848);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);
			append_dev(div, ul);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(ul, null);
			}

			append_dev(ul, t0);
			append_dev(ul, button);
			append_dev(button, t1);
			insert_dev(target, t2, anchor);
			if (if_block) if_block.m(target, anchor);
			insert_dev(target, if_block_anchor, anchor);

			if (!mounted) {
				dispose = listen_dev(button, "click", /*HideShow*/ ctx[4], false, false, false);
				mounted = true;
			}
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*infoalbums, handleMyClick*/ 33) {
				each_value_1 = /*infoalbums*/ ctx[0].Albums;
				validate_each_argument(each_value_1);
				let i;

				for (i = 0; i < each_value_1.length; i += 1) {
					const child_ctx = get_each_context_1(ctx, each_value_1, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block_1(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(ul, t0);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}

				each_blocks.length = each_value_1.length;
			}

			if (dirty & /*infoalbums*/ 1 && ul_id_value !== (ul_id_value = /*infoalbums*/ ctx[0].ArtistId)) {
				attr_dev(ul, "id", ul_id_value);
			}

			if (/*artalbvisible*/ ctx[1]) {
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
			if (detaching) detach_dev(div);
			destroy_each(each_blocks, detaching);
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
	let { infoalbums = [] } = $$props;
	let artalbvisible = false;

	let HideShow = () => {
		if (artalbvisible) {
			$$invalidate(1, artalbvisible = false);
		} else {
			$$invalidate(1, artalbvisible = true);
		}
	};

	let selected;

	let handleMyClick = x => {
		selected = x;
		let promise = getAlbumInfoalbums2().catch(err => console.log(err));
	};

	let SONGS = [];
	let THUMB;

	async function getAlbumInfoalbums2() {
		fetch(`${ampvel}/ImageSongsForAlbum?selected=${selected}`, { mode: "cors", method: "GET" }).then(r => r.json()).then(data => {
			$$invalidate(3, THUMB = data.getimgsonalb.thumbnail);
			$$invalidate(2, SONGS = data.getimgsonalb.songs);
		}).catch(err => console.log(err));
	}

	let handleClick = () => {
		promise = getAlbumInfoalbums2().catch(err => console.log(err));
	};

	let oid;
	let SONG = "";
	let ARTIST = "";
	let FOOID = "";

	let handlePlayClick = x => {
		selected = x;
		let promise = getSongURL().catch(err => console.log(err));

		async function getSongURL() {
			fetch(`${ampvel}/PathArt?selected=${x}`, { mode: "cors", method: "GET" }).then(r => r.json()).then(data => {
				let oid = data.HttpMusicPath;
				ARTIST = data.Artist;
				SONG = data.Song;
				FOOID = `http://192.168.0.74:6790` + oid;
				songURLstore.set(FOOID);
				artiststore.set(ARTIST);
				songstore.set(SONG);
			}).catch(err => console.log(err));
		}
	};

	const writable_props = ["infoalbums"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1.warn(`<ArtistAlbums> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("ArtistAlbums", $$slots, []);

	$$self.$set = $$props => {
		if ("infoalbums" in $$props) $$invalidate(0, infoalbums = $$props.infoalbums);
	};

	$$self.$capture_state = () => ({
		songURLstore,
		artiststore,
		songstore,
		ampvel,
		AlbumCard,
		Player,
		infoalbums,
		artalbvisible,
		HideShow,
		selected,
		handleMyClick,
		SONGS,
		THUMB,
		getAlbumInfoalbums2,
		handleClick,
		oid,
		SONG,
		ARTIST,
		FOOID,
		handlePlayClick
	});

	$$self.$inject_state = $$props => {
		if ("infoalbums" in $$props) $$invalidate(0, infoalbums = $$props.infoalbums);
		if ("artalbvisible" in $$props) $$invalidate(1, artalbvisible = $$props.artalbvisible);
		if ("HideShow" in $$props) $$invalidate(4, HideShow = $$props.HideShow);
		if ("selected" in $$props) selected = $$props.selected;
		if ("handleMyClick" in $$props) $$invalidate(5, handleMyClick = $$props.handleMyClick);
		if ("SONGS" in $$props) $$invalidate(2, SONGS = $$props.SONGS);
		if ("THUMB" in $$props) $$invalidate(3, THUMB = $$props.THUMB);
		if ("handleClick" in $$props) handleClick = $$props.handleClick;
		if ("oid" in $$props) oid = $$props.oid;
		if ("SONG" in $$props) SONG = $$props.SONG;
		if ("ARTIST" in $$props) ARTIST = $$props.ARTIST;
		if ("FOOID" in $$props) FOOID = $$props.FOOID;
		if ("handlePlayClick" in $$props) $$invalidate(6, handlePlayClick = $$props.handlePlayClick);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [
		infoalbums,
		artalbvisible,
		SONGS,
		THUMB,
		HideShow,
		handleMyClick,
		handlePlayClick
	];
}

class ArtistAlbums extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { infoalbums: 0 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "ArtistAlbums",
			options,
			id: create_fragment.name
		});
	}

	get infoalbums() {
		throw new Error("<ArtistAlbums>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set infoalbums(value) {
		throw new Error("<ArtistAlbums>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

/* src/routes/artists.svelte generated by Svelte v3.24.0 */

const { console: console_1$1 } = globals;
const file$1 = "src/routes/artists.svelte";

function get_each_context$1(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[5] = list[i];
	return child_ctx;
}

// (31:1) {#each ART as a}
function create_each_block$1(ctx) {
	let div;
	let h2;
	let t0_value = /*a*/ ctx[5].Artist + "";
	let t0;
	let t1;
	let artistalbums;
	let t2;
	let current;

	artistalbums = new ArtistAlbums({
			props: { infoalbums: /*a*/ ctx[5] },
			$$inline: true
		});

	const block = {
		c: function create() {
			div = element("div");
			h2 = element("h2");
			t0 = text(t0_value);
			t1 = space();
			create_component(artistalbums.$$.fragment);
			t2 = space();
			this.h();
		},
		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", { class: true });
			var div_nodes = children(div);
			h2 = claim_element(div_nodes, "H2", {});
			var h2_nodes = children(h2);
			t0 = claim_text(h2_nodes, t0_value);
			h2_nodes.forEach(detach_dev);
			t1 = claim_space(div_nodes);
			claim_component(artistalbums.$$.fragment, div_nodes);
			t2 = claim_space(div_nodes);
			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(h2, file$1, 32, 3, 833);
			attr_dev(div, "class", "bar svelte-33flk0");
			add_location(div, file$1, 31, 2, 812);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);
			append_dev(div, h2);
			append_dev(h2, t0);
			append_dev(div, t1);
			mount_component(artistalbums, div, null);
			append_dev(div, t2);
			current = true;
		},
		p: function update(ctx, dirty) {
			if ((!current || dirty & /*ART*/ 1) && t0_value !== (t0_value = /*a*/ ctx[5].Artist + "")) set_data_dev(t0, t0_value);
			const artistalbums_changes = {};
			if (dirty & /*ART*/ 1) artistalbums_changes.infoalbums = /*a*/ ctx[5];
			artistalbums.$set(artistalbums_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(artistalbums.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(artistalbums.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
			destroy_component(artistalbums);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block$1.name,
		type: "each",
		source: "(31:1) {#each ART as a}",
		ctx
	});

	return block;
}

function create_fragment$1(ctx) {
	let t0;
	let h2;
	let t1;
	let t2;
	let pagecomp;
	let t3;
	let div;
	let current;

	pagecomp = new PageComp({
			props: { ALPHA: "ArtistAlpha" },
			$$inline: true
		});

	pagecomp.$on("message", /*handleMessage*/ ctx[1]);
	let each_value = /*ART*/ ctx[0];
	validate_each_argument(each_value);
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block$1(get_each_context$1(ctx, each_value, i));
	}

	const out = i => transition_out(each_blocks[i], 1, 1, () => {
		each_blocks[i] = null;
	});

	const block = {
		c: function create() {
			t0 = space();
			h2 = element("h2");
			t1 = text("Artists");
			t2 = space();
			create_component(pagecomp.$$.fragment);
			t3 = space();
			div = element("div");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-1lz9013\"]", document.head);
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			h2 = claim_element(nodes, "H2", {});
			var h2_nodes = children(h2);
			t1 = claim_text(h2_nodes, "Artists");
			h2_nodes.forEach(detach_dev);
			t2 = claim_space(nodes);
			claim_component(pagecomp.$$.fragment, nodes);
			t3 = claim_space(nodes);
			div = claim_element(nodes, "DIV", { class: true });
			var div_nodes = children(div);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(div_nodes);
			}

			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document.title = "Artists";
			add_location(h2, file$1, 25, 0, 695);
			attr_dev(div, "class", "foo");
			add_location(div, file$1, 29, 0, 774);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, h2, anchor);
			append_dev(h2, t1);
			insert_dev(target, t2, anchor);
			mount_component(pagecomp, target, anchor);
			insert_dev(target, t3, anchor);
			insert_dev(target, div, anchor);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(div, null);
			}

			current = true;
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*ART*/ 1) {
				each_value = /*ART*/ ctx[0];
				validate_each_argument(each_value);
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context$1(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
						transition_in(each_blocks[i], 1);
					} else {
						each_blocks[i] = create_each_block$1(child_ctx);
						each_blocks[i].c();
						transition_in(each_blocks[i], 1);
						each_blocks[i].m(div, null);
					}
				}

				group_outros();

				for (i = each_value.length; i < each_blocks.length; i += 1) {
					out(i);
				}

				check_outros();
			}
		},
		i: function intro(local) {
			if (current) return;
			transition_in(pagecomp.$$.fragment, local);

			for (let i = 0; i < each_value.length; i += 1) {
				transition_in(each_blocks[i]);
			}

			current = true;
		},
		o: function outro(local) {
			transition_out(pagecomp.$$.fragment, local);
			each_blocks = each_blocks.filter(Boolean);

			for (let i = 0; i < each_blocks.length; i += 1) {
				transition_out(each_blocks[i]);
			}

			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(h2);
			if (detaching) detach_dev(t2);
			destroy_component(pagecomp, detaching);
			if (detaching) detach_dev(t3);
			if (detaching) detach_dev(div);
			destroy_each(each_blocks, detaching);
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
	let selected = 1;
	let ART = [];
	let promise = getArtistInfo().catch(err => console.log(err));

	async function getArtistInfo() {
		await fetch(`http://192.168.0.74:6790/ArtistInfo?selected=${selected}`, { mode: "cors", method: "GET" }).then(r => r.json()).then(data => {
			$$invalidate(0, ART = data.arts);
		}).catch(err => console.log(err));
	}

	function handleMessage(event) {
		selected = event.detail.text;
		promise = getArtistInfo().catch(err => console.log(err));
	}

	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1$1.warn(`<Artists> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Artists", $$slots, []);

	$$self.$capture_state = () => ({
		ArtistAlbums,
		PageComp,
		onMount,
		selected,
		ART,
		promise,
		getArtistInfo,
		handleMessage
	});

	$$self.$inject_state = $$props => {
		if ("selected" in $$props) selected = $$props.selected;
		if ("ART" in $$props) $$invalidate(0, ART = $$props.ART);
		if ("promise" in $$props) promise = $$props.promise;
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [ART, handleMessage];
}

class Artists extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$1, create_fragment$1, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Artists",
			options,
			id: create_fragment$1.name
		});
	}
}

export default Artists;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJ0aXN0cy44NWFlNTBjNC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvQXJ0aXN0QWxidW1zLnN2ZWx0ZSIsIi4uLy4uLy4uL3NyYy9yb3V0ZXMvYXJ0aXN0cy5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdD5cbiAgICBpbXBvcnQgeyBzb25nVVJMc3RvcmUsIGFydGlzdHN0b3JlLCBzb25nc3RvcmUsIGFtcHZlbCB9IGZyb20gJy4vUGxheWVyU3RvcmUuanMnXG4gICAgaW1wb3J0IEFsYnVtQ2FyZCBmcm9tIFwiLi9BbGJ1bUNhcmQuc3ZlbHRlXCI7XG4gICAgaW1wb3J0IFBsYXllciBmcm9tICcuLi9jb21wb25lbnRzL1BsYXllci5zdmVsdGUnXG4gICAgZXhwb3J0IGxldCBpbmZvYWxidW1zID0gW107XG5cbiAgICBsZXQgYXJ0YWxidmlzaWJsZSA9IGZhbHNlO1xuICAgIGxldCBIaWRlU2hvdyA9ICgpID0+IHtcbiAgICAgICAgaWYgKGFydGFsYnZpc2libGUpIHtcbiAgICAgICAgICAgIGFydGFsYnZpc2libGUgPSBmYWxzZVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYXJ0YWxidmlzaWJsZSA9IHRydWVcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxldCBzZWxlY3RlZDtcbiAgICBcbiAgICBsZXQgaGFuZGxlTXlDbGljayA9ICh4KSA9PiB7XG4gICAgICAgIHNlbGVjdGVkID0geFxuICAgICAgICBsZXQgcHJvbWlzZSA9IGdldEFsYnVtSW5mb2FsYnVtczIoKS5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSk7XG4gICAgfVxuXG4gICAgbGV0IFNPTkdTID0gW10gO1xuICAgIGxldCBUSFVNQiA7IFxuICAgIGFzeW5jIGZ1bmN0aW9uIGdldEFsYnVtSW5mb2FsYnVtczIoKSB7XG4gICAgICAgIGZldGNoKGAke2FtcHZlbH0vSW1hZ2VTb25nc0ZvckFsYnVtP3NlbGVjdGVkPSR7c2VsZWN0ZWR9YCwge21vZGU6IFwiY29yc1wiLCBtZXRob2Q6IFwiR0VUXCJ9KVxuICAgICAgICAudGhlbihyID0+IHIuanNvbigpKVxuICAgICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgIFRIVU1CID0gZGF0YS5nZXRpbWdzb25hbGIudGh1bWJuYWlsXG4gICAgICAgICAgICBTT05HUyA9IGRhdGEuZ2V0aW1nc29uYWxiLnNvbmdzXG4gICAgICAgIH0pLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKTtcbiAgICB9XG5cbiAgICBsZXQgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XG4gICAgICAgIHByb21pc2UgPSBnZXRBbGJ1bUluZm9hbGJ1bXMyKCkuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpO1xuICAgIH1cblxuICAgIGxldCBvaWQ7XG4gICAgbGV0IFNPTkcgPSBcIlwiO1xuICAgIGxldCBBUlRJU1QgPSBcIlwiO1xuICAgIGxldCBGT09JRCA9IFwiXCI7XG4gICAgbGV0IGhhbmRsZVBsYXlDbGljayA9ICh4KSA9PiB7XG4gICAgICAgIHNlbGVjdGVkID0geFxuICAgICAgICBsZXQgcHJvbWlzZSA9IGdldFNvbmdVUkwoKS5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSk7XG4gICAgICAgIGFzeW5jIGZ1bmN0aW9uIGdldFNvbmdVUkwoKSB7XG4gICAgICAgICAgICBmZXRjaChgJHthbXB2ZWx9L1BhdGhBcnQ/c2VsZWN0ZWQ9JHt4fWAsIHttb2RlOiBcImNvcnNcIiwgbWV0aG9kOiBcIkdFVFwifSlcbiAgICAgICAgICAgICAgICAudGhlbihyID0+IHIuanNvbigpKVxuICAgICAgICAgICAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgb2lkID0gZGF0YS5IdHRwTXVzaWNQYXRoXG4gICAgICAgICAgICAgICAgICAgIEFSVElTVCA9IGRhdGEuQXJ0aXN0XG4gICAgICAgICAgICAgICAgICAgIFNPTkcgPSBkYXRhLlNvbmdcbiAgICAgICAgICAgICAgICAgICAgRk9PSUQgPSBgaHR0cDovLzE5Mi4xNjguMC43NDo2NzkwYCArIG9pZFxuICAgICAgICAgICAgICAgICAgICBzb25nVVJMc3RvcmUuc2V0KEZPT0lEKVxuICAgICAgICAgICAgICAgICAgICBhcnRpc3RzdG9yZS5zZXQoQVJUSVNUKVxuICAgICAgICAgICAgICAgICAgICBzb25nc3RvcmUuc2V0KFNPTkcpXG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbjwvc2NyaXB0PlxuXG48ZGl2PlxuICAgIDx1bCBpZD17aW5mb2FsYnVtcy5BcnRpc3RJZH0+XG4gICAgICAgIHsjZWFjaCBpbmZvYWxidW1zLkFsYnVtcyBhcyBhbGJ9XG4gICAgICAgICAgICA8YnV0dG9uIGlkPXthbGJbMV19IG9uOmNsaWNrPXtoYW5kbGVNeUNsaWNrKGFsYlsxXSl9ID57YWxiWzBdfTwvYnV0dG9uPlxuICAgICAgICB7L2VhY2h9XG4gICAgICAgIDxidXR0b24gb246Y2xpY2s9e0hpZGVTaG93fSA+Ky8tPC9idXR0b24+XG4gICAgPC91bD5cbjwvZGl2PlxuXG57I2lmIGFydGFsYnZpc2libGV9XG4gICAgPGltZyAgc3JjPXtUSFVNQn0gYWx0PVwiZnVja21lXCIgLz5cbiAgICBcbiAgICA8ZGl2IGNsYXNzPVwiYXJ0aW1nXCI+XG4gICAgICAgIDx1bCBpZD1cImJvYm9cIj5cbiAgICAgICAgICAgIHsjZWFjaCBTT05HUyBhcyBzb31cbiAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPjxoMj57c29bMF19PC9oMj48L3NwYW4+PGJ1dHRvbiBjbGFzcz1cInBsYXlcIiBvbjpjbGljaz17aGFuZGxlUGxheUNsaWNrKHNvWzFdKX0+UGxheTwvYnV0dG9uPjxidXR0b24gY2xhc3M9XCJwbGF5YWRkXCI+QWRkPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIHsvZWFjaH1cbiAgICAgICAgPC91bD5cbiAgICAgICAgXG4gICAgPC9kaXY+XG4gICAgPGJ1dHRvbiBjbGFzcz1cInBsYXlhbGxcIj5QbGF5IEFsbDwvYnV0dG9uPlxuey9pZn1cbjwhLS0geyNpZiBGT09JRCAhPSBcIlwiICYmIEZPT0lEICE9IHVuZGVmaW5lZH1cbiAgICA8UGxheWVyIHNvbmdVUkw9e0ZPT0lEfSBhcnRpc3Q9e0FSVElTVH0gc29uZz17U09OR30gLz5cbnsvaWZ9IC0tPlxuPHN0eWxlPlxuICAgIC8qIGNsZWFyZml4ICovXG5cdHVsI2JvYm86OmFmdGVyIHtcblx0XHRjb250ZW50OiAnJztcblx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRjbGVhcjogYm90aDtcblx0fVxuICAgIGltZyB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG4gICAgdWwjYm9ibyB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgIH1cblxuICAgIGJ1dHRvbi5wbGF5YWRkIHsgXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7IFxuICAgIH1cblxuICAgIGJ1dHRvbi5wbGF5IHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDsgXG4gICAgfVxuICAgIFxuICAgIC5wbGF5YWxsIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICAgICAgcGFkZGluZzogN3B4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsYXduZ3JlZW47XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgfVxuPC9zdHlsZT5cbiIsIjxzY3JpcHQ+XG5cdGltcG9ydCBBcnRpc3RBbGJ1bXMgZnJvbSAnLi4vY29tcG9uZW50cy9BcnRpc3RBbGJ1bXMuc3ZlbHRlJ1xuXHRpbXBvcnQgUGFnZUNvbXAgZnJvbSAnLi4vY29tcG9uZW50cy9QYWdlQ29tcC5zdmVsdGUnXG5cdGltcG9ydCB7IG9uTW91bnQgfSBmcm9tICdzdmVsdGUnO1xuXG5cdGxldCBzZWxlY3RlZCA9IDE7XG5cdGxldCBBUlQgPSBbXTtcblxuXHRsZXQgcHJvbWlzZSA9IGdldEFydGlzdEluZm8oKS5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSk7XG5cdGFzeW5jIGZ1bmN0aW9uIGdldEFydGlzdEluZm8oKSB7XG5cdFx0YXdhaXQgZmV0Y2goYGh0dHA6Ly8xOTIuMTY4LjAuNzQ6Njc5MC9BcnRpc3RJbmZvP3NlbGVjdGVkPSR7c2VsZWN0ZWR9YCwge21vZGU6IFwiY29yc1wiLCBtZXRob2Q6IFwiR0VUXCJ9KVxuXHRcdC50aGVuKHIgPT4gci5qc29uKCkpXG5cdFx0LnRoZW4oZGF0YSA9PiB7XG5cdFx0XHRBUlQgPSBkYXRhLmFydHNcblx0XHR9KS5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSlcblx0fVxuXG4gICAgZnVuY3Rpb24gaGFuZGxlTWVzc2FnZShldmVudCkge1xuICAgIFx0c2VsZWN0ZWQgPSBldmVudC5kZXRhaWwudGV4dFxuXHRcdHByb21pc2UgPSBnZXRBcnRpc3RJbmZvKCkuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpO1xuXHQgIH1cbjwvc2NyaXB0PlxuXG48c3ZlbHRlOmhlYWQ+PHRpdGxlPkFydGlzdHM8L3RpdGxlPjwvc3ZlbHRlOmhlYWQ+XG5cbjxoMj5BcnRpc3RzPC9oMj5cblxuPFBhZ2VDb21wIG9uOm1lc3NhZ2U9e2hhbmRsZU1lc3NhZ2V9IEFMUEhBPVwiQXJ0aXN0QWxwaGFcIiAvPlxuXG48ZGl2IGNsYXNzPVwiZm9vXCI+XG5cdHsjZWFjaCBBUlQgYXMgYX1cblx0XHQ8ZGl2IGNsYXNzPVwiYmFyXCI+XG5cdFx0XHQ8aDI+e2EuQXJ0aXN0fTwvaDI+XG5cdFx0XHQ8QXJ0aXN0QWxidW1zIGluZm9hbGJ1bXM9e2F9IC8+XG5cdFx0PC9kaXY+XG5cdHsvZWFjaH1cbjwvZGl2PlxuXG48c3R5bGU+XG5cblx0LmJhciB7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogdG9tYXRvO1xuXHRcdGJvcmRlcjogYmxhY2s7XG5cdFx0Ym9yZGVyLXN0eWxlOiBzb2xpZDtcblx0XHRib3JkZXItcmFkaXVzOiAxNXB4O1xuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG5cdFx0d2lkdGg6IDEwMCU7XG5cdFx0bWFyZ2luLXRvcDogMjBweDtcblx0fVxuXG48L3N0eWxlPiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7dUJBZ0VtRSxHQUFHLEtBQUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0RBQWhELEdBQUcsS0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7d0NBQWEsR0FBYSxZQUFDLEdBQUcsS0FBQyxDQUFDLHVCQUFuQixHQUFhLFlBQUMsR0FBRyxLQUFDLENBQUM7Ozs7Ozs7Ozs7OztrRUFBTSxHQUFHLEtBQUMsQ0FBQzs7a0ZBQWhELEdBQUcsS0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs0QkFXVixHQUFLOzs7O2dDQUFWLE1BQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs4Q0FKSCxHQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7cUVBQUwsR0FBSzs7Ozs7MkJBSUQsR0FBSzs7OzsrQkFBVixNQUFJOzs7Ozs7Ozs7Ozs7Ozs7O29DQUFKLE1BQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3VCQUVhLEdBQUUsS0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBDQUE2QyxHQUFlLFdBQUMsR0FBRSxLQUFDLENBQUMseUJBQXBCLEdBQWUsV0FBQyxHQUFFLEtBQUMsQ0FBQzs7Ozs7Ozs7Ozs7OzhEQUFyRSxHQUFFLEtBQUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzttQ0FkcEIsR0FB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
