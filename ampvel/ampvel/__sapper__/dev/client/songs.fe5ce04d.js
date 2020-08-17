import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, g as globals, y as validate_each_argument, I as songURLstore, J as artiststore, K as songstore, W as songidstore, v as validate_slots, X as each, e as element, t as text, p as space, c as claim_element, a as children, b as claim_text, f as detach_dev, r as claim_space, j as add_location, h as attr_dev, k as insert_dev, l as append_dev, m as listen_dev, L as is_function, u as set_data_dev, x as empty, n as noop, z as destroy_each, A as create_component, q as query_selector_all, B as claim_component, C as mount_component, D as transition_in, E as transition_out, F as destroy_component } from './client.b84d0c32.js';
import { a as playlistidstore } from './PlaylistListStore.76746e67.js';
import { P as PageComp } from './PageComp.aa62bf25.js';

/* src/components/SongPage.svelte generated by Svelte v3.24.0 */

const { console: console_1 } = globals;
const file = "src/components/SongPage.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[13] = list[i];
	return child_ctx;
}

// (62:0) {#each songs as so}
function create_each_block(ctx) {
	let ul;
	let li0;
	let h2;
	let t0_value = /*so*/ ctx[13].Song + "";
	let t0;
	let t1;
	let li1;
	let p;
	let t2_value = /*so*/ ctx[13].Artist + "";
	let t2;
	let t3;
	let li2;
	let button0;
	let t4;
	let t5;
	let button1;
	let t6;
	let t7;
	let ul_id_value;
	let mounted;
	let dispose;

	const block = {
		c: function create() {
			ul = element("ul");
			li0 = element("li");
			h2 = element("h2");
			t0 = text(t0_value);
			t1 = space();
			li1 = element("li");
			p = element("p");
			t2 = text(t2_value);
			t3 = space();
			li2 = element("li");
			button0 = element("button");
			t4 = text("Play");
			t5 = space();
			button1 = element("button");
			t6 = text("Add");
			t7 = space();
			this.h();
		},
		l: function claim(nodes) {
			ul = claim_element(nodes, "UL", { id: true, class: true });
			var ul_nodes = children(ul);
			li0 = claim_element(ul_nodes, "LI", { class: true });
			var li0_nodes = children(li0);
			h2 = claim_element(li0_nodes, "H2", {});
			var h2_nodes = children(h2);
			t0 = claim_text(h2_nodes, t0_value);
			h2_nodes.forEach(detach_dev);
			li0_nodes.forEach(detach_dev);
			t1 = claim_space(ul_nodes);
			li1 = claim_element(ul_nodes, "LI", { class: true });
			var li1_nodes = children(li1);
			p = claim_element(li1_nodes, "P", {});
			var p_nodes = children(p);
			t2 = claim_text(p_nodes, t2_value);
			p_nodes.forEach(detach_dev);
			li1_nodes.forEach(detach_dev);
			t3 = claim_space(ul_nodes);
			li2 = claim_element(ul_nodes, "LI", { class: true });
			var li2_nodes = children(li2);
			button0 = claim_element(li2_nodes, "BUTTON", {});
			var button0_nodes = children(button0);
			t4 = claim_text(button0_nodes, "Play");
			button0_nodes.forEach(detach_dev);
			t5 = claim_space(li2_nodes);
			button1 = claim_element(li2_nodes, "BUTTON", {});
			var button1_nodes = children(button1);
			t6 = claim_text(button1_nodes, "Add");
			button1_nodes.forEach(detach_dev);
			li2_nodes.forEach(detach_dev);
			t7 = claim_space(ul_nodes);
			ul_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(h2, file, 63, 12, 1811);
			attr_dev(li0, "class", "svelte-1dvefsq");
			add_location(li0, file, 63, 8, 1807);
			add_location(p, file, 64, 12, 1847);
			attr_dev(li1, "class", "svelte-1dvefsq");
			add_location(li1, file, 64, 8, 1843);
			add_location(button0, file, 66, 10, 1894);
			add_location(button1, file, 67, 10, 1952);
			attr_dev(li2, "class", "svelte-1dvefsq");
			add_location(li2, file, 65, 8, 1879);
			attr_dev(ul, "id", ul_id_value = /*so*/ ctx[13].SongId);
			attr_dev(ul, "class", "svelte-1dvefsq");
			add_location(ul, file, 62, 4, 1778);
		},
		m: function mount(target, anchor) {
			insert_dev(target, ul, anchor);
			append_dev(ul, li0);
			append_dev(li0, h2);
			append_dev(h2, t0);
			append_dev(ul, t1);
			append_dev(ul, li1);
			append_dev(li1, p);
			append_dev(p, t2);
			append_dev(ul, t3);
			append_dev(ul, li2);
			append_dev(li2, button0);
			append_dev(button0, t4);
			append_dev(li2, t5);
			append_dev(li2, button1);
			append_dev(button1, t6);
			append_dev(ul, t7);

			if (!mounted) {
				dispose = listen_dev(
					button0,
					"click",
					function () {
						if (is_function(/*zoo*/ ctx[1](/*so*/ ctx[13].SongId))) /*zoo*/ ctx[1](/*so*/ ctx[13].SongId).apply(this, arguments);
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
			if (dirty & /*songs*/ 1 && t0_value !== (t0_value = /*so*/ ctx[13].Song + "")) set_data_dev(t0, t0_value);
			if (dirty & /*songs*/ 1 && t2_value !== (t2_value = /*so*/ ctx[13].Artist + "")) set_data_dev(t2, t2_value);

			if (dirty & /*songs*/ 1 && ul_id_value !== (ul_id_value = /*so*/ ctx[13].SongId)) {
				attr_dev(ul, "id", ul_id_value);
			}
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(ul);
			mounted = false;
			dispose();
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block.name,
		type: "each",
		source: "(62:0) {#each songs as so}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let each_1_anchor;
	let each_value = /*songs*/ ctx[0];
	validate_each_argument(each_value);
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	const block = {
		c: function create() {
			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			each_1_anchor = empty();
		},
		l: function claim(nodes) {
			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(nodes);
			}

			each_1_anchor = empty();
		},
		m: function mount(target, anchor) {
			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(target, anchor);
			}

			insert_dev(target, each_1_anchor, anchor);
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*songs, zoo*/ 3) {
				each_value = /*songs*/ ctx[0];
				validate_each_argument(each_value);
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}

				each_blocks.length = each_value.length;
			}
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			destroy_each(each_blocks, detaching);
			if (detaching) detach_dev(each_1_anchor);
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
	let { songs } = $$props;

	async function getSongURL(x) {
		fetch(`http://192.168.0.74:6790/PathArt?selected=${x}`, { mode: "cors", method: "GET" }).then(r => r.json()).then(data => {
			let SONGURL = `http://192.168.0.74:6790` + data.HttpMusicPath;
			songURLstore.set(SONGURL);
			artiststore.set(data.Artist);
			songstore.set(data.Song);
			songidstore.set(x);
		}).catch(err => console.log(err));
	}

	let zoo = z => {
		let promise = getSongURL(z).catch(err => console.log(err));
	};

	let { songURLstore_value } = $$props;
	let { artiststore_value } = $$props;
	let { songstore_value } = $$props;
	let { songidstore_value } = $$props;
	let { playlistidstore_value } = $$props;

	const unsubSongUrl = songURLstore.subscribe(value => {
		$$invalidate(2, songURLstore_value = value);
		console.log(songURLstore_value);
	});

	const unsubArtist = artiststore.subscribe(value => {
		$$invalidate(3, artiststore_value = value);
	});

	const unsubSong = songstore.subscribe(value => {
		$$invalidate(4, songstore_value = value);
	});

	const unsubSongId = songidstore.subscribe(value => {
		$$invalidate(5, songidstore_value = value);
	});

	const unsubPlaylistId = playlistidstore.subscribe(value => {
		$$invalidate(6, playlistidstore_value = value);
	});

	console.log(songURLstore_value);
	console.log(songstore_value);
	console.log(songidstore_value);
	console.log(playlistidstore_value);

	const writable_props = [
		"songs",
		"songURLstore_value",
		"artiststore_value",
		"songstore_value",
		"songidstore_value",
		"playlistidstore_value"
	];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1.warn(`<SongPage> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("SongPage", $$slots, []);

	$$self.$set = $$props => {
		if ("songs" in $$props) $$invalidate(0, songs = $$props.songs);
		if ("songURLstore_value" in $$props) $$invalidate(2, songURLstore_value = $$props.songURLstore_value);
		if ("artiststore_value" in $$props) $$invalidate(3, artiststore_value = $$props.artiststore_value);
		if ("songstore_value" in $$props) $$invalidate(4, songstore_value = $$props.songstore_value);
		if ("songidstore_value" in $$props) $$invalidate(5, songidstore_value = $$props.songidstore_value);
		if ("playlistidstore_value" in $$props) $$invalidate(6, playlistidstore_value = $$props.playlistidstore_value);
	};

	$$self.$capture_state = () => ({
		songURLstore,
		artiststore,
		songstore,
		songidstore,
		playlistidstore,
		each,
		songs,
		getSongURL,
		zoo,
		songURLstore_value,
		artiststore_value,
		songstore_value,
		songidstore_value,
		playlistidstore_value,
		unsubSongUrl,
		unsubArtist,
		unsubSong,
		unsubSongId,
		unsubPlaylistId
	});

	$$self.$inject_state = $$props => {
		if ("songs" in $$props) $$invalidate(0, songs = $$props.songs);
		if ("zoo" in $$props) $$invalidate(1, zoo = $$props.zoo);
		if ("songURLstore_value" in $$props) $$invalidate(2, songURLstore_value = $$props.songURLstore_value);
		if ("artiststore_value" in $$props) $$invalidate(3, artiststore_value = $$props.artiststore_value);
		if ("songstore_value" in $$props) $$invalidate(4, songstore_value = $$props.songstore_value);
		if ("songidstore_value" in $$props) $$invalidate(5, songidstore_value = $$props.songidstore_value);
		if ("playlistidstore_value" in $$props) $$invalidate(6, playlistidstore_value = $$props.playlistidstore_value);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [
		songs,
		zoo,
		songURLstore_value,
		artiststore_value,
		songstore_value,
		songidstore_value,
		playlistidstore_value
	];
}

class SongPage extends SvelteComponentDev {
	constructor(options) {
		super(options);

		init(this, options, instance, create_fragment, safe_not_equal, {
			songs: 0,
			songURLstore_value: 2,
			artiststore_value: 3,
			songstore_value: 4,
			songidstore_value: 5,
			playlistidstore_value: 6
		});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "SongPage",
			options,
			id: create_fragment.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*songs*/ ctx[0] === undefined && !("songs" in props)) {
			console_1.warn("<SongPage> was created without expected prop 'songs'");
		}

		if (/*songURLstore_value*/ ctx[2] === undefined && !("songURLstore_value" in props)) {
			console_1.warn("<SongPage> was created without expected prop 'songURLstore_value'");
		}

		if (/*artiststore_value*/ ctx[3] === undefined && !("artiststore_value" in props)) {
			console_1.warn("<SongPage> was created without expected prop 'artiststore_value'");
		}

		if (/*songstore_value*/ ctx[4] === undefined && !("songstore_value" in props)) {
			console_1.warn("<SongPage> was created without expected prop 'songstore_value'");
		}

		if (/*songidstore_value*/ ctx[5] === undefined && !("songidstore_value" in props)) {
			console_1.warn("<SongPage> was created without expected prop 'songidstore_value'");
		}

		if (/*playlistidstore_value*/ ctx[6] === undefined && !("playlistidstore_value" in props)) {
			console_1.warn("<SongPage> was created without expected prop 'playlistidstore_value'");
		}
	}

	get songs() {
		throw new Error("<SongPage>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set songs(value) {
		throw new Error("<SongPage>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get songURLstore_value() {
		throw new Error("<SongPage>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set songURLstore_value(value) {
		throw new Error("<SongPage>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get artiststore_value() {
		throw new Error("<SongPage>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set artiststore_value(value) {
		throw new Error("<SongPage>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get songstore_value() {
		throw new Error("<SongPage>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set songstore_value(value) {
		throw new Error("<SongPage>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get songidstore_value() {
		throw new Error("<SongPage>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set songidstore_value(value) {
		throw new Error("<SongPage>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get playlistidstore_value() {
		throw new Error("<SongPage>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set playlistidstore_value(value) {
		throw new Error("<SongPage>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

/* src/routes/songs.svelte generated by Svelte v3.24.0 */

const { console: console_1$1 } = globals;
const file$1 = "src/routes/songs.svelte";

function create_fragment$1(ctx) {
	let t0;
	let h2;
	let t1;
	let t2;
	let pagecomp;
	let t3;
	let songpage;
	let current;

	pagecomp = new PageComp({
			props: { ALPHA: "SongAlpha" },
			$$inline: true
		});

	pagecomp.$on("message", /*handleMessage*/ ctx[1]);

	songpage = new SongPage({
			props: { songs: /*SONGS*/ ctx[0] },
			$$inline: true
		});

	const block = {
		c: function create() {
			t0 = space();
			h2 = element("h2");
			t1 = text("Songs");
			t2 = space();
			create_component(pagecomp.$$.fragment);
			t3 = space();
			create_component(songpage.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-obvr2p\"]", document.head);
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			h2 = claim_element(nodes, "H2", {});
			var h2_nodes = children(h2);
			t1 = claim_text(h2_nodes, "Songs");
			h2_nodes.forEach(detach_dev);
			t2 = claim_space(nodes);
			claim_component(pagecomp.$$.fragment, nodes);
			t3 = claim_space(nodes);
			claim_component(songpage.$$.fragment, nodes);
			this.h();
		},
		h: function hydrate() {
			document.title = "Songs";
			add_location(h2, file$1, 25, 0, 624);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, h2, anchor);
			append_dev(h2, t1);
			insert_dev(target, t2, anchor);
			mount_component(pagecomp, target, anchor);
			insert_dev(target, t3, anchor);
			mount_component(songpage, target, anchor);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			const songpage_changes = {};
			if (dirty & /*SONGS*/ 1) songpage_changes.songs = /*SONGS*/ ctx[0];
			songpage.$set(songpage_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(pagecomp.$$.fragment, local);
			transition_in(songpage.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(pagecomp.$$.fragment, local);
			transition_out(songpage.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(h2);
			if (detaching) detach_dev(t2);
			destroy_component(pagecomp, detaching);
			if (detaching) detach_dev(t3);
			destroy_component(songpage, detaching);
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
	let SONGS = [];
	let promise = getSongInfo().catch(err => console.log(err));

	async function getSongInfo() {
		await fetch(`http://192.168.0.31:6789/SongInfo?selected=${selected}`, { mode: "cors", method: "GET" }).then(r => r.json()).then(data => {
			$$invalidate(0, SONGS = data.song);
		});
	}

	function handleMessage(event) {
		selected = event.detail.text;
		promise = getSongInfo().catch(err => console.log(err));
	}

	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1$1.warn(`<Songs> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Songs", $$slots, []);

	$$self.$capture_state = () => ({
		SongPage,
		selected,
		SONGS,
		promise,
		getSongInfo,
		PageComp,
		handleMessage
	});

	$$self.$inject_state = $$props => {
		if ("selected" in $$props) selected = $$props.selected;
		if ("SONGS" in $$props) $$invalidate(0, SONGS = $$props.SONGS);
		if ("promise" in $$props) promise = $$props.promise;
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [SONGS, handleMessage];
}

class Songs extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$1, create_fragment$1, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Songs",
			options,
			id: create_fragment$1.name
		});
	}
}

export default Songs;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29uZ3MuZmU1Y2UwNGQuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1NvbmdQYWdlLnN2ZWx0ZSIsIi4uLy4uLy4uL3NyYy9yb3V0ZXMvc29uZ3Muc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQ+XG4gICAgaW1wb3J0IHsgc29uZ1VSTHN0b3JlLCBhcnRpc3RzdG9yZSwgc29uZ3N0b3JlLCBzb25naWRzdG9yZSB9IGZyb20gJy4vUGxheWVyU3RvcmUuanMnXG4gICAgaW1wb3J0IHsgcGxheWxpc3RpZHN0b3JlIH0gZnJvbSAnLi9QbGF5bGlzdENvbXBzL1BsYXlsaXN0TGlzdFN0b3JlLmpzJ1xuICAgIGltcG9ydCB7IGVhY2ggfSBmcm9tICdzdmVsdGUvaW50ZXJuYWwnO1xuICAgIGV4cG9ydCBsZXQgc29uZ3M7XG5cbiAgICBhc3luYyBmdW5jdGlvbiBnZXRTb25nVVJMKHgpIHtcbiAgICAgICAgZmV0Y2goYGh0dHA6Ly8xOTIuMTY4LjAuNzQ6Njc5MC9QYXRoQXJ0P3NlbGVjdGVkPSR7eH1gLCB7bW9kZTogXCJjb3JzXCIsIG1ldGhvZDogXCJHRVRcIn0pXG4gICAgICAgIC50aGVuKHIgPT4gci5qc29uKCkpXG4gICAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgIGxldCBTT05HVVJMID0gYGh0dHA6Ly8xOTIuMTY4LjAuNzQ6Njc5MGAgKyBkYXRhLkh0dHBNdXNpY1BhdGhcbiAgICAgICAgICBzb25nVVJMc3RvcmUuc2V0KFNPTkdVUkwpXG4gICAgICAgICAgYXJ0aXN0c3RvcmUuc2V0KGRhdGEuQXJ0aXN0KVxuICAgICAgICAgIHNvbmdzdG9yZS5zZXQoZGF0YS5Tb25nKVxuICAgICAgICAgIHNvbmdpZHN0b3JlLnNldCh4KVxuICAgICAgICB9KS5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSk7XG4gICAgICB9XG5cbiAgICBsZXQgem9vID0gKHopID0+IHtcbiAgICAgIGxldCBwcm9taXNlID0gZ2V0U29uZ1VSTCh6KS5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSk7XG4gICAgfVxuXG4gICAgZXhwb3J0IGxldCBzb25nVVJMc3RvcmVfdmFsdWU7XG5cdCAgZXhwb3J0IGxldCBhcnRpc3RzdG9yZV92YWx1ZTtcbiAgICBleHBvcnQgbGV0IHNvbmdzdG9yZV92YWx1ZTtcbiAgICBleHBvcnQgbGV0IHNvbmdpZHN0b3JlX3ZhbHVlO1xuICAgIGV4cG9ydCBsZXQgcGxheWxpc3RpZHN0b3JlX3ZhbHVlO1xuXG5cdCAgY29uc3QgdW5zdWJTb25nVXJsID0gc29uZ1VSTHN0b3JlLnN1YnNjcmliZSh2YWx1ZSA9PiB7XG4gICAgICBzb25nVVJMc3RvcmVfdmFsdWUgPSB2YWx1ZVxuICAgICAgY29uc29sZS5sb2coc29uZ1VSTHN0b3JlX3ZhbHVlKVxuICAgIH0pXG5cbiAgICBjb25zdCB1bnN1YkFydGlzdCA9IGFydGlzdHN0b3JlLnN1YnNjcmliZSh2YWx1ZSA9PiB7XG4gICAgICBhcnRpc3RzdG9yZV92YWx1ZSA9IHZhbHVlXG4gICAgfSlcblxuICAgIGNvbnN0IHVuc3ViU29uZyA9IHNvbmdzdG9yZS5zdWJzY3JpYmUodmFsdWUgPT4ge1xuICAgICAgc29uZ3N0b3JlX3ZhbHVlID0gdmFsdWVcbiAgICB9KVxuXG4gICAgY29uc3QgdW5zdWJTb25nSWQgPSBzb25naWRzdG9yZS5zdWJzY3JpYmUodmFsdWUgPT4ge1xuICAgICAgc29uZ2lkc3RvcmVfdmFsdWUgPSB2YWx1ZVxuICAgIH0pXG5cbiAgICBjb25zdCB1bnN1YlBsYXlsaXN0SWQgPSBwbGF5bGlzdGlkc3RvcmUuc3Vic2NyaWJlKHZhbHVlID0+IHtcbiAgICAgIHBsYXlsaXN0aWRzdG9yZV92YWx1ZSA9IHZhbHVlXG4gICAgfSlcblxuICAgIGNvbnNvbGUubG9nKHNvbmdVUkxzdG9yZV92YWx1ZSlcbiAgICBjb25zb2xlLmxvZyhzb25nc3RvcmVfdmFsdWUpXG4gICAgY29uc29sZS5sb2coc29uZ2lkc3RvcmVfdmFsdWUpXG4gICAgY29uc29sZS5sb2cocGxheWxpc3RpZHN0b3JlX3ZhbHVlKVxuXG4gICAgLy8gdGhpcyBpcyBmb3IgYWRkIHNvbmcgdG8gcGxheWxpc3RcbiAgICAvLyBBZGRTb25nc1RvUGxpc3REQlxuICAgIC8vIHNvbmduYW1lXG4gICAgLy8gc29uZ2lkXG4gICAgLy8gcGxheWxpc3RpZFxuPC9zY3JpcHQ+XG5cbnsjZWFjaCBzb25ncyBhcyBzb31cbiAgICA8dWwgaWQ9e3NvLlNvbmdJZH0gPlxuICAgICAgICA8bGk+PGgyPntzby5Tb25nfTwvaDI+PC9saT5cbiAgICAgICAgPGxpPjxwPntzby5BcnRpc3R9PC9wPjwvbGk+XG4gICAgICAgIDxsaT5cbiAgICAgICAgICA8YnV0dG9uIG9uOmNsaWNrPXt6b28oc28uU29uZ0lkKX0+UGxheTwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b24+QWRkPC9idXR0b24+XG4gICAgICAgIDwvbGk+XG4gICAgPC91bD5cbnsvZWFjaH1cblxuPHN0eWxlPlxuXG4gICAgdWwge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0b21hdG87XG4gICAgICAgIGJvcmRlcjogYmxhY2s7XG4gICAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgICAgICB3aWR0aDogOTUlO1xuICAgIH1cblxuICAgIGxpIHtcbiAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgIH1cblxuPC9zdHlsZT4iLCI8c2NyaXB0PlxuXHRpbXBvcnQgU29uZ1BhZ2UgZnJvbSAnLi4vY29tcG9uZW50cy9Tb25nUGFnZS5zdmVsdGUnO1xuXG5cdGxldCBzZWxlY3RlZCA9IDE7XG5cdGxldCBTT05HUyA9IFtdO1xuIFxuICAgIGxldCBwcm9taXNlID0gZ2V0U29uZ0luZm8oKS5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSk7XG5cdGFzeW5jIGZ1bmN0aW9uIGdldFNvbmdJbmZvKCkge1xuXHRcdGF3YWl0IGZldGNoKGBodHRwOi8vMTkyLjE2OC4wLjMxOjY3ODkvU29uZ0luZm8/c2VsZWN0ZWQ9JHtzZWxlY3RlZH1gLCB7bW9kZTogXCJjb3JzXCIsIG1ldGhvZDogXCJHRVRcIn0pXG5cdFx0LnRoZW4ociA9PiByLmpzb24oKSlcblx0XHQudGhlbihkYXRhID0+IHtcblx0XHRcdFNPTkdTID0gZGF0YS5zb25nO1xuXHRcdH0pXG5cdH1cblxuXHRpbXBvcnQgUGFnZUNvbXAgZnJvbSAnLi4vY29tcG9uZW50cy9QYWdlQ29tcC5zdmVsdGUnXG4gICAgZnVuY3Rpb24gaGFuZGxlTWVzc2FnZShldmVudCkge1xuICAgIFx0c2VsZWN0ZWQgPSBldmVudC5kZXRhaWwudGV4dFxuXHRcdHByb21pc2UgPSBnZXRTb25nSW5mbygpLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKTtcblx0fVxuICAgIFxuPC9zY3JpcHQ+XG5cbjxzdmVsdGU6aGVhZD48dGl0bGU+U29uZ3M8L3RpdGxlPjwvc3ZlbHRlOmhlYWQ+XG5cbjxoMj5Tb25nczwvaDI+XG5cbjxQYWdlQ29tcCBvbjptZXNzYWdlPXtoYW5kbGVNZXNzYWdlfSBBTFBIQT1cIlNvbmdBbHBoYVwiIC8+XG5cbjxTb25nUGFnZSBzb25ncz17U09OR1N9IC8+XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7dUJBK0RpQixHQUFFLEtBQUMsSUFBSTs7Ozs7dUJBQ1IsR0FBRSxLQUFDLE1BQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzJDQUZiLEdBQUUsS0FBQyxNQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBSU8sR0FBRyxXQUFDLEdBQUUsS0FBQyxNQUFNLFlBQWIsR0FBRyxXQUFDLEdBQUUsS0FBQyxNQUFNOzs7Ozs7Ozs7Ozs7OERBSHhCLEdBQUUsS0FBQyxJQUFJOzhEQUNSLEdBQUUsS0FBQyxNQUFNOztvRUFGYixHQUFFLEtBQUMsTUFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzRCQURkLEdBQUs7Ozs7Z0NBQVYsTUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsyQkFBQyxHQUFLOzs7OytCQUFWLE1BQUk7Ozs7Ozs7Ozs7Ozs7Ozs7b0NBQUosTUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7T0F6RFMsS0FBSzs7Z0JBRUQsVUFBVSxDQUFDLENBQUM7RUFDdkIsS0FBSyw4Q0FBOEMsQ0FBQyxNQUFLLElBQUksRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEtBQUssSUFDbkYsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxJQUNoQixJQUFJLENBQUMsSUFBSTtPQUNKLE9BQU8sZ0NBQWdDLElBQUksQ0FBQyxhQUFhO0dBQzdELFlBQVksQ0FBQyxHQUFHLENBQUMsT0FBTztHQUN4QixXQUFXLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNO0dBQzNCLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUk7R0FDdkIsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQ2hCLEtBQUssQ0FBQyxHQUFHLElBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHOzs7S0FHL0IsR0FBRyxHQUFJLENBQUM7TUFDTixPQUFPLEdBQUcsVUFBVSxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsR0FBRyxJQUFJLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRzs7O09BRy9DLGtCQUFrQjtPQUNuQixpQkFBaUI7T0FDaEIsZUFBZTtPQUNmLGlCQUFpQjtPQUNqQixxQkFBcUI7O09BRTNCLFlBQVksR0FBRyxZQUFZLENBQUMsU0FBUyxDQUFDLEtBQUs7a0JBQzlDLGtCQUFrQixHQUFHLEtBQUs7RUFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0I7OztPQUcxQixXQUFXLEdBQUcsV0FBVyxDQUFDLFNBQVMsQ0FBQyxLQUFLO2tCQUM3QyxpQkFBaUIsR0FBRyxLQUFLOzs7T0FHckIsU0FBUyxHQUFHLFNBQVMsQ0FBQyxTQUFTLENBQUMsS0FBSztrQkFDekMsZUFBZSxHQUFHLEtBQUs7OztPQUduQixXQUFXLEdBQUcsV0FBVyxDQUFDLFNBQVMsQ0FBQyxLQUFLO2tCQUM3QyxpQkFBaUIsR0FBRyxLQUFLOzs7T0FHckIsZUFBZSxHQUFHLGVBQWUsQ0FBQyxTQUFTLENBQUMsS0FBSztrQkFDckQscUJBQXFCLEdBQUcsS0FBSzs7O0NBRy9CLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCO0NBQzlCLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZTtDQUMzQixPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQjtDQUM3QixPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MkNDekJmLEdBQWE7Ozs2QkFFbEIsR0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OytEQUFMLEdBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQTFCakIsUUFBUSxHQUFHLENBQUM7S0FDWixLQUFLO0tBRUYsT0FBTyxHQUFHLFdBQVcsR0FBRyxLQUFLLENBQUMsR0FBRyxJQUFJLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRzs7Z0JBQzVDLFdBQVc7UUFDbkIsS0FBSywrQ0FBK0MsUUFBUSxNQUFLLElBQUksRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEtBQUssSUFDakcsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxJQUNoQixJQUFJLENBQUMsSUFBSTttQkFDVCxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUk7Ozs7VUFLUCxhQUFhLENBQUMsS0FBSztFQUMzQixRQUFRLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJO0VBQy9CLE9BQU8sR0FBRyxXQUFXLEdBQUcsS0FBSyxDQUFDLEdBQUcsSUFBSSxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
