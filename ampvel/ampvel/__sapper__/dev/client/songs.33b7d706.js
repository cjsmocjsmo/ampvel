import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, g as globals, y as validate_each_argument, I as songURLstore, J as artiststore, K as songstore, W as songidstore, v as validate_slots, X as each, e as element, t as text, p as space, c as claim_element, a as children, b as claim_text, f as detach_dev, r as claim_space, j as add_location, h as attr_dev, k as insert_dev, l as append_dev, m as listen_dev, L as is_function, u as set_data_dev, x as empty, n as noop, z as destroy_each, A as create_component, q as query_selector_all, B as claim_component, C as mount_component, D as transition_in, E as transition_out, F as destroy_component } from './client.cbc74c36.js';
import { a as playlistidstore } from './PlaylistListStore.08b663eb.js';
import { P as PageComp } from './PageComp.17485437.js';

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
			add_location(h2, file, 63, 12, 1809);
			attr_dev(li0, "class", "svelte-1dvefsq");
			add_location(li0, file, 63, 8, 1805);
			add_location(p, file, 64, 12, 1845);
			attr_dev(li1, "class", "svelte-1dvefsq");
			add_location(li1, file, 64, 8, 1841);
			add_location(button0, file, 66, 10, 1892);
			add_location(button1, file, 67, 10, 1950);
			attr_dev(li2, "class", "svelte-1dvefsq");
			add_location(li2, file, 65, 8, 1877);
			attr_dev(ul, "id", ul_id_value = /*so*/ ctx[13].SongId);
			attr_dev(ul, "class", "svelte-1dvefsq");
			add_location(ul, file, 62, 4, 1776);
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
		fetch(`http://192.168.0.:6789/PathArt?selected=${x}`, { mode: "cors", method: "GET" }).then(r => r.json()).then(data => {
			let SONGURL = `http://192.168.0.31:6789` + data.HttpMusicPath;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29uZ3MuMzNiN2Q3MDYuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1NvbmdQYWdlLnN2ZWx0ZSIsIi4uLy4uLy4uL3NyYy9yb3V0ZXMvc29uZ3Muc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQ+XG4gICAgaW1wb3J0IHsgc29uZ1VSTHN0b3JlLCBhcnRpc3RzdG9yZSwgc29uZ3N0b3JlLCBzb25naWRzdG9yZSB9IGZyb20gJy4vUGxheWVyU3RvcmUuanMnXG4gICAgaW1wb3J0IHsgcGxheWxpc3RpZHN0b3JlIH0gZnJvbSAnLi9QbGF5bGlzdENvbXBzL1BsYXlsaXN0TGlzdFN0b3JlLmpzJ1xuICAgIGltcG9ydCB7IGVhY2ggfSBmcm9tICdzdmVsdGUvaW50ZXJuYWwnO1xuICAgIGV4cG9ydCBsZXQgc29uZ3M7XG5cbiAgICBhc3luYyBmdW5jdGlvbiBnZXRTb25nVVJMKHgpIHtcbiAgICAgICAgZmV0Y2goYGh0dHA6Ly8xOTIuMTY4LjAuOjY3ODkvUGF0aEFydD9zZWxlY3RlZD0ke3h9YCwge21vZGU6IFwiY29yc1wiLCBtZXRob2Q6IFwiR0VUXCJ9KVxuICAgICAgICAudGhlbihyID0+IHIuanNvbigpKVxuICAgICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgICBsZXQgU09OR1VSTCA9IGBodHRwOi8vMTkyLjE2OC4wLjMxOjY3ODlgICsgZGF0YS5IdHRwTXVzaWNQYXRoXG4gICAgICAgICAgc29uZ1VSTHN0b3JlLnNldChTT05HVVJMKVxuICAgICAgICAgIGFydGlzdHN0b3JlLnNldChkYXRhLkFydGlzdClcbiAgICAgICAgICBzb25nc3RvcmUuc2V0KGRhdGEuU29uZylcbiAgICAgICAgICBzb25naWRzdG9yZS5zZXQoeClcbiAgICAgICAgfSkuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpO1xuICAgICAgfVxuXG4gICAgbGV0IHpvbyA9ICh6KSA9PiB7XG4gICAgICBsZXQgcHJvbWlzZSA9IGdldFNvbmdVUkwoeikuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpO1xuICAgIH1cblxuICAgIGV4cG9ydCBsZXQgc29uZ1VSTHN0b3JlX3ZhbHVlO1xuXHQgIGV4cG9ydCBsZXQgYXJ0aXN0c3RvcmVfdmFsdWU7XG4gICAgZXhwb3J0IGxldCBzb25nc3RvcmVfdmFsdWU7XG4gICAgZXhwb3J0IGxldCBzb25naWRzdG9yZV92YWx1ZTtcbiAgICBleHBvcnQgbGV0IHBsYXlsaXN0aWRzdG9yZV92YWx1ZTtcblxuXHQgIGNvbnN0IHVuc3ViU29uZ1VybCA9IHNvbmdVUkxzdG9yZS5zdWJzY3JpYmUodmFsdWUgPT4ge1xuICAgICAgc29uZ1VSTHN0b3JlX3ZhbHVlID0gdmFsdWVcbiAgICAgIGNvbnNvbGUubG9nKHNvbmdVUkxzdG9yZV92YWx1ZSlcbiAgICB9KVxuXG4gICAgY29uc3QgdW5zdWJBcnRpc3QgPSBhcnRpc3RzdG9yZS5zdWJzY3JpYmUodmFsdWUgPT4ge1xuICAgICAgYXJ0aXN0c3RvcmVfdmFsdWUgPSB2YWx1ZVxuICAgIH0pXG5cbiAgICBjb25zdCB1bnN1YlNvbmcgPSBzb25nc3RvcmUuc3Vic2NyaWJlKHZhbHVlID0+IHtcbiAgICAgIHNvbmdzdG9yZV92YWx1ZSA9IHZhbHVlXG4gICAgfSlcblxuICAgIGNvbnN0IHVuc3ViU29uZ0lkID0gc29uZ2lkc3RvcmUuc3Vic2NyaWJlKHZhbHVlID0+IHtcbiAgICAgIHNvbmdpZHN0b3JlX3ZhbHVlID0gdmFsdWVcbiAgICB9KVxuXG4gICAgY29uc3QgdW5zdWJQbGF5bGlzdElkID0gcGxheWxpc3RpZHN0b3JlLnN1YnNjcmliZSh2YWx1ZSA9PiB7XG4gICAgICBwbGF5bGlzdGlkc3RvcmVfdmFsdWUgPSB2YWx1ZVxuICAgIH0pXG5cbiAgICBjb25zb2xlLmxvZyhzb25nVVJMc3RvcmVfdmFsdWUpXG4gICAgY29uc29sZS5sb2coc29uZ3N0b3JlX3ZhbHVlKVxuICAgIGNvbnNvbGUubG9nKHNvbmdpZHN0b3JlX3ZhbHVlKVxuICAgIGNvbnNvbGUubG9nKHBsYXlsaXN0aWRzdG9yZV92YWx1ZSlcblxuICAgIC8vIHRoaXMgaXMgZm9yIGFkZCBzb25nIHRvIHBsYXlsaXN0XG4gICAgLy8gQWRkU29uZ3NUb1BsaXN0REJcbiAgICAvLyBzb25nbmFtZVxuICAgIC8vIHNvbmdpZFxuICAgIC8vIHBsYXlsaXN0aWRcbjwvc2NyaXB0PlxuXG57I2VhY2ggc29uZ3MgYXMgc299XG4gICAgPHVsIGlkPXtzby5Tb25nSWR9ID5cbiAgICAgICAgPGxpPjxoMj57c28uU29uZ308L2gyPjwvbGk+XG4gICAgICAgIDxsaT48cD57c28uQXJ0aXN0fTwvcD48L2xpPlxuICAgICAgICA8bGk+XG4gICAgICAgICAgPGJ1dHRvbiBvbjpjbGljaz17em9vKHNvLlNvbmdJZCl9PlBsYXk8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uPkFkZDwvYnV0dG9uPlxuICAgICAgICA8L2xpPlxuICAgIDwvdWw+XG57L2VhY2h9XG5cbjxzdHlsZT5cblxuICAgIHVsIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdG9tYXRvO1xuICAgICAgICBib3JkZXI6IGJsYWNrO1xuICAgICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICAgICAgd2lkdGg6IDk1JTtcbiAgICB9XG5cbiAgICBsaSB7XG4gICAgICAgIGNvbG9yOiBibGFjaztcbiAgICB9XG5cbjwvc3R5bGU+IiwiPHNjcmlwdD5cblx0aW1wb3J0IFNvbmdQYWdlIGZyb20gJy4uL2NvbXBvbmVudHMvU29uZ1BhZ2Uuc3ZlbHRlJztcblxuXHRsZXQgc2VsZWN0ZWQgPSAxO1xuXHRsZXQgU09OR1MgPSBbXTtcbiBcbiAgICBsZXQgcHJvbWlzZSA9IGdldFNvbmdJbmZvKCkuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpO1xuXHRhc3luYyBmdW5jdGlvbiBnZXRTb25nSW5mbygpIHtcblx0XHRhd2FpdCBmZXRjaChgaHR0cDovLzE5Mi4xNjguMC4zMTo2Nzg5L1NvbmdJbmZvP3NlbGVjdGVkPSR7c2VsZWN0ZWR9YCwge21vZGU6IFwiY29yc1wiLCBtZXRob2Q6IFwiR0VUXCJ9KVxuXHRcdC50aGVuKHIgPT4gci5qc29uKCkpXG5cdFx0LnRoZW4oZGF0YSA9PiB7XG5cdFx0XHRTT05HUyA9IGRhdGEuc29uZztcblx0XHR9KVxuXHR9XG5cblx0aW1wb3J0IFBhZ2VDb21wIGZyb20gJy4uL2NvbXBvbmVudHMvUGFnZUNvbXAuc3ZlbHRlJ1xuICAgIGZ1bmN0aW9uIGhhbmRsZU1lc3NhZ2UoZXZlbnQpIHtcbiAgICBcdHNlbGVjdGVkID0gZXZlbnQuZGV0YWlsLnRleHRcblx0XHRwcm9taXNlID0gZ2V0U29uZ0luZm8oKS5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSk7XG5cdH1cbiAgICBcbjwvc2NyaXB0PlxuXG48c3ZlbHRlOmhlYWQ+PHRpdGxlPlNvbmdzPC90aXRsZT48L3N2ZWx0ZTpoZWFkPlxuXG48aDI+U29uZ3M8L2gyPlxuXG48UGFnZUNvbXAgb246bWVzc2FnZT17aGFuZGxlTWVzc2FnZX0gQUxQSEE9XCJTb25nQWxwaGFcIiAvPlxuXG48U29uZ1BhZ2Ugc29uZ3M9e1NPTkdTfSAvPlxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3VCQStEaUIsR0FBRSxLQUFDLElBQUk7Ozs7O3VCQUNSLEdBQUUsS0FBQyxNQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsyQ0FGYixHQUFFLEtBQUMsTUFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhCQUlPLEdBQUcsV0FBQyxHQUFFLEtBQUMsTUFBTSxZQUFiLEdBQUcsV0FBQyxHQUFFLEtBQUMsTUFBTTs7Ozs7Ozs7Ozs7OzhEQUh4QixHQUFF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
