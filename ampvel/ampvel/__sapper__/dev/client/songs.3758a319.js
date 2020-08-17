import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, g as globals, A as validate_each_argument, K as songURLstore, L as artiststore, M as songstore, $ as songidstore, C as playlistidstore, v as validate_slots, x as ampvel, a0 as each, e as element, t as text, p as space, c as claim_element, a as children, b as claim_text, f as detach_dev, r as claim_space, j as add_location, h as attr_dev, k as insert_dev, l as append_dev, m as listen_dev, N as is_function, u as set_data_dev, z as empty, n as noop, B as destroy_each, D as create_component, q as query_selector_all, E as claim_component, F as mount_component, G as transition_in, H as transition_out, I as destroy_component } from './client.e11a9057.js';
import { P as PageComp } from './PageComp.76ddecd3.js';

/* src/components/SongPage.svelte generated by Svelte v3.24.0 */

const { console: console_1 } = globals;
const file = "src/components/SongPage.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[13] = list[i];
	return child_ctx;
}

// (63:0) {#each songs as so}
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
			add_location(h2, file, 64, 12, 1770);
			attr_dev(li0, "class", "svelte-1dvefsq");
			add_location(li0, file, 64, 8, 1766);
			add_location(p, file, 65, 12, 1806);
			attr_dev(li1, "class", "svelte-1dvefsq");
			add_location(li1, file, 65, 8, 1802);
			add_location(button0, file, 67, 10, 1853);
			add_location(button1, file, 68, 10, 1911);
			attr_dev(li2, "class", "svelte-1dvefsq");
			add_location(li2, file, 66, 8, 1838);
			attr_dev(ul, "id", ul_id_value = /*so*/ ctx[13].SongId);
			attr_dev(ul, "class", "svelte-1dvefsq");
			add_location(ul, file, 63, 4, 1737);
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
		source: "(63:0) {#each songs as so}",
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
		fetch(`${ampvel}/PathArt?selected=${x}`, { mode: "cors", method: "GET" }).then(r => r.json()).then(data => {
			let SONGURL = ampvel + data.HttpMusicPath;
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
		ampvel,
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
			add_location(h2, file$1, 26, 0, 677);
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
		await fetch(`http://192.168.0.74:6790/SongInfo?selected=${selected}`, { mode: "cors", method: "GET" }).then(r => r.json()).then(data => {
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
		ampvel,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29uZ3MuMzc1OGEzMTkuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1NvbmdQYWdlLnN2ZWx0ZSIsIi4uLy4uLy4uL3NyYy9yb3V0ZXMvc29uZ3Muc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQ+XG4gICAgaW1wb3J0IHsgc29uZ1VSTHN0b3JlLCBhcnRpc3RzdG9yZSwgc29uZ3N0b3JlLCBzb25naWRzdG9yZSwgYW1wdmVsfSBmcm9tICcuL1BsYXllclN0b3JlLmpzJ1xuICAgIGltcG9ydCB7IHBsYXlsaXN0aWRzdG9yZSB9IGZyb20gJy4vUGxheWVyU3RvcmUuanMnXG4gICAgaW1wb3J0IHsgZWFjaCB9IGZyb20gJ3N2ZWx0ZS9pbnRlcm5hbCc7XG4gICAgZXhwb3J0IGxldCBzb25ncztcblxuICAgIGFzeW5jIGZ1bmN0aW9uIGdldFNvbmdVUkwoeCkge1xuICAgICAgXG4gICAgICAgIGZldGNoKGAke2FtcHZlbH0vUGF0aEFydD9zZWxlY3RlZD0ke3h9YCwge21vZGU6IFwiY29yc1wiLCBtZXRob2Q6IFwiR0VUXCJ9KVxuICAgICAgICAudGhlbihyID0+IHIuanNvbigpKVxuICAgICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgICBsZXQgU09OR1VSTCA9IGFtcHZlbCArIGRhdGEuSHR0cE11c2ljUGF0aFxuICAgICAgICAgIHNvbmdVUkxzdG9yZS5zZXQoU09OR1VSTClcbiAgICAgICAgICBhcnRpc3RzdG9yZS5zZXQoZGF0YS5BcnRpc3QpXG4gICAgICAgICAgc29uZ3N0b3JlLnNldChkYXRhLlNvbmcpXG4gICAgICAgICAgc29uZ2lkc3RvcmUuc2V0KHgpXG4gICAgICAgIH0pLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKTtcbiAgICAgIH1cblxuICAgIGxldCB6b28gPSAoeikgPT4ge1xuICAgICAgbGV0IHByb21pc2UgPSBnZXRTb25nVVJMKHopLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKTtcbiAgICB9XG5cbiAgICBleHBvcnQgbGV0IHNvbmdVUkxzdG9yZV92YWx1ZTtcblx0ICBleHBvcnQgbGV0IGFydGlzdHN0b3JlX3ZhbHVlO1xuICAgIGV4cG9ydCBsZXQgc29uZ3N0b3JlX3ZhbHVlO1xuICAgIGV4cG9ydCBsZXQgc29uZ2lkc3RvcmVfdmFsdWU7XG4gICAgZXhwb3J0IGxldCBwbGF5bGlzdGlkc3RvcmVfdmFsdWU7XG5cblx0ICBjb25zdCB1bnN1YlNvbmdVcmwgPSBzb25nVVJMc3RvcmUuc3Vic2NyaWJlKHZhbHVlID0+IHtcbiAgICAgIHNvbmdVUkxzdG9yZV92YWx1ZSA9IHZhbHVlXG4gICAgICBjb25zb2xlLmxvZyhzb25nVVJMc3RvcmVfdmFsdWUpXG4gICAgfSlcblxuICAgIGNvbnN0IHVuc3ViQXJ0aXN0ID0gYXJ0aXN0c3RvcmUuc3Vic2NyaWJlKHZhbHVlID0+IHtcbiAgICAgIGFydGlzdHN0b3JlX3ZhbHVlID0gdmFsdWVcbiAgICB9KVxuXG4gICAgY29uc3QgdW5zdWJTb25nID0gc29uZ3N0b3JlLnN1YnNjcmliZSh2YWx1ZSA9PiB7XG4gICAgICBzb25nc3RvcmVfdmFsdWUgPSB2YWx1ZVxuICAgIH0pXG5cbiAgICBjb25zdCB1bnN1YlNvbmdJZCA9IHNvbmdpZHN0b3JlLnN1YnNjcmliZSh2YWx1ZSA9PiB7XG4gICAgICBzb25naWRzdG9yZV92YWx1ZSA9IHZhbHVlXG4gICAgfSlcblxuICAgIGNvbnN0IHVuc3ViUGxheWxpc3RJZCA9IHBsYXlsaXN0aWRzdG9yZS5zdWJzY3JpYmUodmFsdWUgPT4ge1xuICAgICAgcGxheWxpc3RpZHN0b3JlX3ZhbHVlID0gdmFsdWVcbiAgICB9KVxuXG4gICAgY29uc29sZS5sb2coc29uZ1VSTHN0b3JlX3ZhbHVlKVxuICAgIGNvbnNvbGUubG9nKHNvbmdzdG9yZV92YWx1ZSlcbiAgICBjb25zb2xlLmxvZyhzb25naWRzdG9yZV92YWx1ZSlcbiAgICBjb25zb2xlLmxvZyhwbGF5bGlzdGlkc3RvcmVfdmFsdWUpXG5cbiAgICAvLyB0aGlzIGlzIGZvciBhZGQgc29uZyB0byBwbGF5bGlzdFxuICAgIC8vIEFkZFNvbmdzVG9QbGlzdERCXG4gICAgLy8gc29uZ25hbWVcbiAgICAvLyBzb25naWRcbiAgICAvLyBwbGF5bGlzdGlkXG48L3NjcmlwdD5cblxueyNlYWNoIHNvbmdzIGFzIHNvfVxuICAgIDx1bCBpZD17c28uU29uZ0lkfSA+XG4gICAgICAgIDxsaT48aDI+e3NvLlNvbmd9PC9oMj48L2xpPlxuICAgICAgICA8bGk+PHA+e3NvLkFydGlzdH08L3A+PC9saT5cbiAgICAgICAgPGxpPlxuICAgICAgICAgIDxidXR0b24gb246Y2xpY2s9e3pvbyhzby5Tb25nSWQpfT5QbGF5PC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvbj5BZGQ8L2J1dHRvbj5cbiAgICAgICAgPC9saT5cbiAgICA8L3VsPlxuey9lYWNofVxuXG48c3R5bGU+XG5cbiAgICB1bCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRvbWF0bztcbiAgICAgICAgYm9yZGVyOiBibGFjaztcbiAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgICAgIHdpZHRoOiA5NSU7XG4gICAgfVxuXG4gICAgbGkge1xuICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgfVxuXG48L3N0eWxlPiIsIjxzY3JpcHQ+XG5cdGltcG9ydCBTb25nUGFnZSBmcm9tICcuLi9jb21wb25lbnRzL1NvbmdQYWdlLnN2ZWx0ZSc7XG5cdGltcG9ydCB7YW1wdmVsfSBmcm9tICcuLi9jb21wb25lbnRzL1BsYXllclN0b3JlLmpzJ1xuXG5cdGxldCBzZWxlY3RlZCA9IDE7XG5cdGxldCBTT05HUyA9IFtdO1xuIFxuICAgIGxldCBwcm9taXNlID0gZ2V0U29uZ0luZm8oKS5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSk7XG5cdGFzeW5jIGZ1bmN0aW9uIGdldFNvbmdJbmZvKCkge1xuXHRcdGF3YWl0IGZldGNoKGBodHRwOi8vMTkyLjE2OC4wLjc0OjY3OTAvU29uZ0luZm8/c2VsZWN0ZWQ9JHtzZWxlY3RlZH1gLCB7bW9kZTogXCJjb3JzXCIsIG1ldGhvZDogXCJHRVRcIn0pXG5cdFx0LnRoZW4ociA9PiByLmpzb24oKSlcblx0XHQudGhlbihkYXRhID0+IHtcblx0XHRcdFNPTkdTID0gZGF0YS5zb25nO1xuXHRcdH0pXG5cdH1cblxuXHRpbXBvcnQgUGFnZUNvbXAgZnJvbSAnLi4vY29tcG9uZW50cy9QYWdlQ29tcC5zdmVsdGUnXG4gICAgZnVuY3Rpb24gaGFuZGxlTWVzc2FnZShldmVudCkge1xuICAgIFx0c2VsZWN0ZWQgPSBldmVudC5kZXRhaWwudGV4dFxuXHRcdHByb21pc2UgPSBnZXRTb25nSW5mbygpLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKTtcblx0fVxuICAgIFxuPC9zY3JpcHQ+XG5cbjxzdmVsdGU6aGVhZD48dGl0bGU+U29uZ3M8L3RpdGxlPjwvc3ZlbHRlOmhlYWQ+XG5cbjxoMj5Tb25nczwvaDI+XG5cbjxQYWdlQ29tcCBvbjptZXNzYWdlPXtoYW5kbGVNZXNzYWdlfSBBTFBIQT1cIlNvbmdBbHBoYVwiIC8+XG5cbjxTb25nUGFnZSBzb25ncz17U09OR1N9IC8+XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt1QkFnRWlCLEdBQUUsS0FBQyxJQUFJOzs7Ozt1QkFDUixHQUFFLEtBQUMsTUFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MkNBRmIsR0FBRSxLQUFDLE1BQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs4QkFJTyxHQUFHLFdBQUMsR0FBRSxLQUFDLE1BQU0sWUFBYixHQUFHLFdBQUMsR0FBRSxLQUFDLE1BQU07Ozs7Ozs7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
