import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, y as validate_each_argument, v as validate_slots, I as songURLstore, J as artiststore, K as songstore, g as globals, e as element, t as text, c as claim_element, a as children, b as claim_text, f as detach_dev, h as attr_dev, j as add_location, k as insert_dev, l as append_dev, m as listen_dev, L as is_function, u as set_data_dev, p as space, r as claim_space, z as destroy_each, x as empty, n as noop, o as onMount, A as create_component, B as claim_component, C as mount_component, D as transition_in, E as transition_out, F as destroy_component, q as query_selector_all, M as check_outros, N as group_outros } from './client.91558ab0.js';
import { A as AlbumCard, P as Player } from './AlbumCard.660928c5.js';
import { P as PageComp } from './PageComp.53081c7f.js';

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
			add_location(button, file, 64, 12, 1963);
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
			add_location(img, file, 71, 4, 2143);
			attr_dev(ul, "id", "bobo");
			attr_dev(ul, "class", "svelte-1enwpj0");
			add_location(ul, file, 74, 8, 2215);
			attr_dev(div, "class", "artimg");
			add_location(div, file, 73, 4, 2186);
			attr_dev(button, "class", "playall svelte-1enwpj0");
			add_location(button, file, 83, 4, 2517);
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
			add_location(h2, file, 77, 26, 2309);
			add_location(span, file, 77, 20, 2303);
			attr_dev(button0, "class", "play svelte-1enwpj0");
			add_location(button0, file, 77, 49, 2332);
			attr_dev(button1, "class", "playadd svelte-1enwpj0");
			add_location(button1, file, 77, 117, 2400);
			add_location(li, file, 76, 16, 2278);
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
			add_location(button, file, 66, 8, 2059);
			attr_dev(ul, "id", ul_id_value = /*infoalbums*/ ctx[0].ArtistId);
			attr_dev(ul, "class", "svelte-1enwpj0");
			add_location(ul, file, 62, 4, 1880);
			add_location(div, file, 61, 0, 1870);
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
		fetch(`http://192.168.0.31:6789/ImageSongsForAlbum?selected=${selected}`, { mode: "cors", method: "GET" }).then(r => r.json()).then(data => {
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
			fetch(`http://192.168.0.31:6789/PathArt?selected=${x}`, { mode: "cors", method: "GET" }).then(r => r.json()).then(data => {
				let oid = data.HttpMusicPath;
				ARTIST = data.Artist;
				SONG = data.Song;
				FOOID = `http://192.168.0.31:6789` + oid;
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
		await fetch(`http://192.168.0.31:6789/ArtistInfo?selected=${selected}`, { mode: "cors", method: "GET" }).then(r => r.json()).then(data => {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJ0aXN0cy4zOGEzZmNmMy5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvQXJ0aXN0QWxidW1zLnN2ZWx0ZSIsIi4uLy4uLy4uL3NyYy9yb3V0ZXMvYXJ0aXN0cy5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdD5cbiAgICBpbXBvcnQgeyBzb25nVVJMc3RvcmUsIGFydGlzdHN0b3JlLCBzb25nc3RvcmUgfSBmcm9tICcuL1BsYXllclN0b3JlLmpzJ1xuICAgIGltcG9ydCBBbGJ1bUNhcmQgZnJvbSBcIi4vQWxidW1DYXJkLnN2ZWx0ZVwiO1xuICAgIGltcG9ydCBQbGF5ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9QbGF5ZXIuc3ZlbHRlJ1xuICAgIGV4cG9ydCBsZXQgaW5mb2FsYnVtcyA9IFtdO1xuXG4gICAgbGV0IGFydGFsYnZpc2libGUgPSBmYWxzZTtcbiAgICBsZXQgSGlkZVNob3cgPSAoKSA9PiB7XG4gICAgICAgIGlmIChhcnRhbGJ2aXNpYmxlKSB7XG4gICAgICAgICAgICBhcnRhbGJ2aXNpYmxlID0gZmFsc2VcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFydGFsYnZpc2libGUgPSB0cnVlXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgc2VsZWN0ZWQ7XG4gICAgXG4gICAgbGV0IGhhbmRsZU15Q2xpY2sgPSAoeCkgPT4ge1xuICAgICAgICBzZWxlY3RlZCA9IHhcbiAgICAgICAgbGV0IHByb21pc2UgPSBnZXRBbGJ1bUluZm9hbGJ1bXMyKCkuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpO1xuICAgIH1cblxuICAgIGxldCBTT05HUyA9IFtdIDtcbiAgICBsZXQgVEhVTUIgOyBcbiAgICBhc3luYyBmdW5jdGlvbiBnZXRBbGJ1bUluZm9hbGJ1bXMyKCkge1xuICAgICAgICBmZXRjaChgaHR0cDovLzE5Mi4xNjguMC4zMTo2Nzg5L0ltYWdlU29uZ3NGb3JBbGJ1bT9zZWxlY3RlZD0ke3NlbGVjdGVkfWAsIHttb2RlOiBcImNvcnNcIiwgbWV0aG9kOiBcIkdFVFwifSlcbiAgICAgICAgLnRoZW4ociA9PiByLmpzb24oKSlcbiAgICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICBUSFVNQiA9IGRhdGEuZ2V0aW1nc29uYWxiLnRodW1ibmFpbFxuICAgICAgICAgICAgU09OR1MgPSBkYXRhLmdldGltZ3NvbmFsYi5zb25nc1xuICAgICAgICB9KS5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSk7XG4gICAgfVxuXG4gICAgbGV0IGhhbmRsZUNsaWNrID0gKCkgPT4ge1xuICAgICAgICBwcm9taXNlID0gZ2V0QWxidW1JbmZvYWxidW1zMigpLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKTtcbiAgICB9XG5cbiAgICBsZXQgb2lkO1xuICAgIGxldCBTT05HID0gXCJcIjtcbiAgICBsZXQgQVJUSVNUID0gXCJcIjtcbiAgICBsZXQgRk9PSUQgPSBcIlwiO1xuICAgIGxldCBoYW5kbGVQbGF5Q2xpY2sgPSAoeCkgPT4ge1xuICAgICAgICBzZWxlY3RlZCA9IHhcbiAgICAgICAgbGV0IHByb21pc2UgPSBnZXRTb25nVVJMKCkuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpO1xuICAgICAgICBhc3luYyBmdW5jdGlvbiBnZXRTb25nVVJMKCkge1xuICAgICAgICAgICAgZmV0Y2goYGh0dHA6Ly8xOTIuMTY4LjAuMzE6Njc4OS9QYXRoQXJ0P3NlbGVjdGVkPSR7eH1gLCB7bW9kZTogXCJjb3JzXCIsIG1ldGhvZDogXCJHRVRcIn0pXG4gICAgICAgICAgICAgICAgLnRoZW4ociA9PiByLmpzb24oKSlcbiAgICAgICAgICAgICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG9pZCA9IGRhdGEuSHR0cE11c2ljUGF0aFxuICAgICAgICAgICAgICAgICAgICBBUlRJU1QgPSBkYXRhLkFydGlzdFxuICAgICAgICAgICAgICAgICAgICBTT05HID0gZGF0YS5Tb25nXG4gICAgICAgICAgICAgICAgICAgIEZPT0lEID0gYGh0dHA6Ly8xOTIuMTY4LjAuMzE6Njc4OWAgKyBvaWRcbiAgICAgICAgICAgICAgICAgICAgc29uZ1VSTHN0b3JlLnNldChGT09JRClcbiAgICAgICAgICAgICAgICAgICAgYXJ0aXN0c3RvcmUuc2V0KEFSVElTVClcbiAgICAgICAgICAgICAgICAgICAgc29uZ3N0b3JlLnNldChTT05HKVxuICAgICAgICAgICAgICAgIH0pLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG48L3NjcmlwdD5cblxuPGRpdj5cbiAgICA8dWwgaWQ9e2luZm9hbGJ1bXMuQXJ0aXN0SWR9PlxuICAgICAgICB7I2VhY2ggaW5mb2FsYnVtcy5BbGJ1bXMgYXMgYWxifVxuICAgICAgICAgICAgPGJ1dHRvbiBpZD17YWxiWzFdfSBvbjpjbGljaz17aGFuZGxlTXlDbGljayhhbGJbMV0pfSA+e2FsYlswXX08L2J1dHRvbj5cbiAgICAgICAgey9lYWNofVxuICAgICAgICA8YnV0dG9uIG9uOmNsaWNrPXtIaWRlU2hvd30gPisvLTwvYnV0dG9uPlxuICAgIDwvdWw+XG48L2Rpdj5cblxueyNpZiBhcnRhbGJ2aXNpYmxlfVxuICAgIDxpbWcgIHNyYz17VEhVTUJ9IGFsdD1cImZ1Y2ttZVwiIC8+XG4gICAgXG4gICAgPGRpdiBjbGFzcz1cImFydGltZ1wiPlxuICAgICAgICA8dWwgaWQ9XCJib2JvXCI+XG4gICAgICAgICAgICB7I2VhY2ggU09OR1MgYXMgc299XG4gICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj48aDI+e3NvWzBdfTwvaDI+PC9zcGFuPjxidXR0b24gY2xhc3M9XCJwbGF5XCIgb246Y2xpY2s9e2hhbmRsZVBsYXlDbGljayhzb1sxXSl9PlBsYXk8L2J1dHRvbj48YnV0dG9uIGNsYXNzPVwicGxheWFkZFwiPkFkZDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICB7L2VhY2h9XG4gICAgICAgIDwvdWw+XG4gICAgICAgIFxuICAgIDwvZGl2PlxuICAgIDxidXR0b24gY2xhc3M9XCJwbGF5YWxsXCI+UGxheSBBbGw8L2J1dHRvbj5cbnsvaWZ9XG48IS0tIHsjaWYgRk9PSUQgIT0gXCJcIiAmJiBGT09JRCAhPSB1bmRlZmluZWR9XG4gICAgPFBsYXllciBzb25nVVJMPXtGT09JRH0gYXJ0aXN0PXtBUlRJU1R9IHNvbmc9e1NPTkd9IC8+XG57L2lmfSAtLT5cbjxzdHlsZT5cbiAgICAvKiBjbGVhcmZpeCAqL1xuXHR1bCNib2JvOjphZnRlciB7XG5cdFx0Y29udGVudDogJyc7XG5cdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0Y2xlYXI6IGJvdGg7XG5cdH1cbiAgICBpbWcge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuICAgIHVsI2JvYm8ge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICB9XG5cbiAgICBidXR0b24ucGxheWFkZCB7IFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4OyBcbiAgICB9XG5cbiAgICBidXR0b24ucGxheSB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7IFxuICAgIH1cbiAgICBcbiAgICAucGxheWFsbCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBmb250LXNpemU6IDE3cHg7XG4gICAgICAgIHBhZGRpbmc6IDdweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbGF3bmdyZWVuO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIH1cbjwvc3R5bGU+XG4iLCI8c2NyaXB0PlxuXHRpbXBvcnQgQXJ0aXN0QWxidW1zIGZyb20gJy4uL2NvbXBvbmVudHMvQXJ0aXN0QWxidW1zLnN2ZWx0ZSdcblx0aW1wb3J0IFBhZ2VDb21wIGZyb20gJy4uL2NvbXBvbmVudHMvUGFnZUNvbXAuc3ZlbHRlJ1xuXHRpbXBvcnQgeyBvbk1vdW50IH0gZnJvbSAnc3ZlbHRlJztcblxuXHRsZXQgc2VsZWN0ZWQgPSAxO1xuXHRsZXQgQVJUID0gW107XG5cblx0bGV0IHByb21pc2UgPSBnZXRBcnRpc3RJbmZvKCkuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpO1xuXHRhc3luYyBmdW5jdGlvbiBnZXRBcnRpc3RJbmZvKCkge1xuXHRcdGF3YWl0IGZldGNoKGBodHRwOi8vMTkyLjE2OC4wLjMxOjY3ODkvQXJ0aXN0SW5mbz9zZWxlY3RlZD0ke3NlbGVjdGVkfWAsIHttb2RlOiBcImNvcnNcIiwgbWV0aG9kOiBcIkdFVFwifSlcblx0XHQudGhlbihyID0+IHIuanNvbigpKVxuXHRcdC50aGVuKGRhdGEgPT4ge1xuXHRcdFx0QVJUID0gZGF0YS5hcnRzXG5cdFx0fSkuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpXG5cdH1cblxuICAgIGZ1bmN0aW9uIGhhbmRsZU1lc3NhZ2UoZXZlbnQpIHtcbiAgICBcdHNlbGVjdGVkID0gZXZlbnQuZGV0YWlsLnRleHRcblx0XHRwcm9taXNlID0gZ2V0QXJ0aXN0SW5mbygpLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKTtcblx0ICB9XG48L3NjcmlwdD5cblxuPHN2ZWx0ZTpoZWFkPjx0aXRsZT5BcnRpc3RzPC90aXRsZT48L3N2ZWx0ZTpoZWFkPlxuXG48aDI+QXJ0aXN0czwvaDI+XG5cbjxQYWdlQ29tcCBvbjptZXNzYWdlPXtoYW5kbGVNZXNzYWdlfSBBTFBIQT1cIkFydGlzdEFscGhhXCIgLz5cblxuPGRpdiBjbGFzcz1cImZvb1wiPlxuXHR7I2VhY2ggQVJUIGFzIGF9XG5cdFx0PGRpdiBjbGFzcz1cImJhclwiPlxuXHRcdFx0PGgyPnthLkFydGlzdH08L2gyPlxuXHRcdFx0PEFydGlzdEFsYnVtcyBpbmZvYWxidW1zPXthfSAvPlxuXHRcdDwvZGl2PlxuXHR7L2VhY2h9XG48L2Rpdj5cblxuPHN0eWxlPlxuXG5cdC5iYXIge1xuXHRcdGJhY2tncm91bmQtY29sb3I6IHRvbWF0bztcblx0XHRib3JkZXI6IGJsYWNrO1xuXHRcdGJvcmRlci1zdHlsZTogc29saWQ7XG5cdFx0Ym9yZGVyLXJhZGl1czogMTVweDtcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0bGlzdC1zdHlsZS10eXBlOiBub25lO1xuXHRcdHdpZHRoOiAxMDAlO1xuXHRcdG1hcmdpbi10b3A6IDIwcHg7XG5cdH1cblxuPC9zdHlsZT4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3VCQWdFbUUsR0FBRyxLQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29EQUFoRCxHQUFHLEtBQUMsQ0FBQzs7Ozs7Ozs7Ozs7O3dDQUFhLEdBQWEsWUFBQyxHQUFHLEtBQUMsQ0FBQyx1QkFBbkIsR0FBYSxZQUFDLEdBQUcsS0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7a0VBQU0sR0FBRyxLQUFDLENBQUM7O2tGQUFoRCxHQUFHLEtBQUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7NEJBV1YsR0FBSzs7OztnQ0FBVixNQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OENBSkgsR0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3FFQUFMLEdBQUs7Ozs7OzJCQUlELEdBQUs7Ozs7K0JBQVYsTUFBSTs7Ozs7Ozs7Ozs7Ozs7OztvQ0FBSixNQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt1QkFFYSxHQUFFLEtBQUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQ0FBNkMsR0FBZSxXQUFDLEdBQUUsS0FBQyxDQUFDLHlCQUFwQixHQUFlLFdBQUMsR0FBRSxLQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs4REFBckUsR0FBRSxLQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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
