import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, X as handle_promise, v as validate_slots, o as onMount, g as globals, p as space, e as element, t as text, E as create_component, u as query_selector_all, f as detach_dev, q as claim_space, c as claim_element, a as children, b as claim_text, F as claim_component, j as add_location, h as attr_dev, k as insert_dev, l as append_dev, G as mount_component, H as transition_in, I as transition_out, J as destroy_component, n as noop, A as empty, Q as group_outros, P as check_outros, B as validate_each_argument, C as destroy_each } from './client.83b90feb.js';
import { A as AlbumCard } from './AlbumCard.1fff7fed.js';
import { P as PageComp } from './PageComp.89fc907c.js';

/* src/routes/albums.svelte generated by Svelte v3.24.0 */

const { console: console_1 } = globals;
const file = "src/routes/albums.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[7] = list[i];
	return child_ctx;
}

// (1:0) <script>  import AlbumCard from '../components/AlbumCard.svelte';  import PageComp from '../components/PageComp.svelte'  import { onMount }
function create_catch_block(ctx) {
	const block = {
		c: noop,
		l: noop,
		m: noop,
		p: noop,
		i: noop,
		o: noop,
		d: noop
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_catch_block.name,
		type: "catch",
		source: "(1:0) <script>  import AlbumCard from '../components/AlbumCard.svelte';  import PageComp from '../components/PageComp.svelte'  import { onMount }",
		ctx
	});

	return block;
}

// (37:27)      {#if ALBUMS != 0}
function create_then_block(ctx) {
	let current_block_type_index;
	let if_block;
	let if_block_anchor;
	let current;
	const if_block_creators = [create_if_block, create_else_block];
	const if_blocks = [];

	function select_block_type(ctx, dirty) {
		if (/*ALBUMS*/ ctx[0] != 0) return 0;
		return 1;
	}

	current_block_type_index = select_block_type(ctx);
	if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);

	const block = {
		c: function create() {
			if_block.c();
			if_block_anchor = empty();
		},
		l: function claim(nodes) {
			if_block.l(nodes);
			if_block_anchor = empty();
		},
		m: function mount(target, anchor) {
			if_blocks[current_block_type_index].m(target, anchor);
			insert_dev(target, if_block_anchor, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			let previous_block_index = current_block_type_index;
			current_block_type_index = select_block_type(ctx);

			if (current_block_type_index === previous_block_index) {
				if_blocks[current_block_type_index].p(ctx, dirty);
			} else {
				group_outros();

				transition_out(if_blocks[previous_block_index], 1, 1, () => {
					if_blocks[previous_block_index] = null;
				});

				check_outros();
				if_block = if_blocks[current_block_type_index];

				if (!if_block) {
					if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
					if_block.c();
				}

				transition_in(if_block, 1);
				if_block.m(if_block_anchor.parentNode, if_block_anchor);
			}
		},
		i: function intro(local) {
			if (current) return;
			transition_in(if_block);
			current = true;
		},
		o: function outro(local) {
			transition_out(if_block);
			current = false;
		},
		d: function destroy(detaching) {
			if_blocks[current_block_type_index].d(detaching);
			if (detaching) detach_dev(if_block_anchor);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_then_block.name,
		type: "then",
		source: "(37:27)      {#if ALBUMS != 0}",
		ctx
	});

	return block;
}

// (47:4) {:else}
function create_else_block(ctx) {
	let p;
	let t;

	const block = {
		c: function create() {
			p = element("p");
			t = text("Make a Selections");
			this.h();
		},
		l: function claim(nodes) {
			p = claim_element(nodes, "P", {});
			var p_nodes = children(p);
			t = claim_text(p_nodes, "Make a Selections");
			p_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(p, file, 47, 8, 1142);
		},
		m: function mount(target, anchor) {
			insert_dev(target, p, anchor);
			append_dev(p, t);
		},
		p: noop,
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(p);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_else_block.name,
		type: "else",
		source: "(47:4) {:else}",
		ctx
	});

	return block;
}

// (38:4) {#if ALBUMS != 0}
function create_if_block(ctx) {
	let each_1_anchor;
	let current;
	let each_value = /*ALBUMS*/ ctx[0];
	validate_each_argument(each_value);
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	const out = i => transition_out(each_blocks[i], 1, 1, () => {
		each_blocks[i] = null;
	});

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
			current = true;
		},
		p: function update(ctx, dirty) {
			if (dirty & /*ALBUMS*/ 1) {
				each_value = /*ALBUMS*/ ctx[0];
				validate_each_argument(each_value);
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
						transition_in(each_blocks[i], 1);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						transition_in(each_blocks[i], 1);
						each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
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

			for (let i = 0; i < each_value.length; i += 1) {
				transition_in(each_blocks[i]);
			}

			current = true;
		},
		o: function outro(local) {
			each_blocks = each_blocks.filter(Boolean);

			for (let i = 0; i < each_blocks.length; i += 1) {
				transition_out(each_blocks[i]);
			}

			current = false;
		},
		d: function destroy(detaching) {
			destroy_each(each_blocks, detaching);
			if (detaching) detach_dev(each_1_anchor);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block.name,
		type: "if",
		source: "(38:4) {#if ALBUMS != 0}",
		ctx
	});

	return block;
}

// (39:8) {#each ALBUMS as alb}
function create_each_block(ctx) {
	let albumcard;
	let current;

	albumcard = new AlbumCard({
			props: {
				artist: /*alb*/ ctx[7].Artist,
				album: /*alb*/ ctx[7].Album,
				albumid: /*alb*/ ctx[7].AlbumId,
				albumarthttppath: /*alb*/ ctx[7].Smallthumb,
				numsongs: /*alb*/ ctx[7].NumSongs,
				songs: /*alb*/ ctx[7].Songs
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(albumcard.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(albumcard.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(albumcard, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const albumcard_changes = {};
			if (dirty & /*ALBUMS*/ 1) albumcard_changes.artist = /*alb*/ ctx[7].Artist;
			if (dirty & /*ALBUMS*/ 1) albumcard_changes.album = /*alb*/ ctx[7].Album;
			if (dirty & /*ALBUMS*/ 1) albumcard_changes.albumid = /*alb*/ ctx[7].AlbumId;
			if (dirty & /*ALBUMS*/ 1) albumcard_changes.albumarthttppath = /*alb*/ ctx[7].Smallthumb;
			if (dirty & /*ALBUMS*/ 1) albumcard_changes.numsongs = /*alb*/ ctx[7].NumSongs;
			if (dirty & /*ALBUMS*/ 1) albumcard_changes.songs = /*alb*/ ctx[7].Songs;
			albumcard.$set(albumcard_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(albumcard.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(albumcard.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(albumcard, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block.name,
		type: "each",
		source: "(39:8) {#each ALBUMS as alb}",
		ctx
	});

	return block;
}

// (1:0) <script>  import AlbumCard from '../components/AlbumCard.svelte';  import PageComp from '../components/PageComp.svelte'  import { onMount }
function create_pending_block(ctx) {
	const block = {
		c: noop,
		l: noop,
		m: noop,
		p: noop,
		i: noop,
		o: noop,
		d: noop
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_pending_block.name,
		type: "pending",
		source: "(1:0) <script>  import AlbumCard from '../components/AlbumCard.svelte';  import PageComp from '../components/PageComp.svelte'  import { onMount }",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let t0;
	let h2;
	let t1;
	let t2;
	let pagecomp;
	let t3;
	let promise_1;
	let t4;
	let div;
	let current;

	pagecomp = new PageComp({
			props: { ALPHA: "AlbumAlpha" },
			$$inline: true
		});

	pagecomp.$on("message", /*handleMessage*/ ctx[2]);

	let info = {
		ctx,
		current: null,
		token: null,
		pending: create_pending_block,
		then: create_then_block,
		catch: create_catch_block,
		value: 6,
		blocks: [,,,]
	};

	handle_promise(promise_1 = /*promise*/ ctx[1], info);

	const block = {
		c: function create() {
			t0 = space();
			h2 = element("h2");
			t1 = text("Albums");
			t2 = space();
			create_component(pagecomp.$$.fragment);
			t3 = space();
			info.block.c();
			t4 = space();
			div = element("div");
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-1sm0h3z\"]", document.head);
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			h2 = claim_element(nodes, "H2", {});
			var h2_nodes = children(h2);
			t1 = claim_text(h2_nodes, "Albums");
			h2_nodes.forEach(detach_dev);
			t2 = claim_space(nodes);
			claim_component(pagecomp.$$.fragment, nodes);
			t3 = claim_space(nodes);
			info.block.l(nodes);
			t4 = claim_space(nodes);
			div = claim_element(nodes, "DIV", { id: true, class: true });
			children(div).forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document.title = "Albums";
			add_location(h2, file, 32, 0, 775);
			attr_dev(div, "id", "pad");
			attr_dev(div, "class", "svelte-a1wug1");
			add_location(div, file, 51, 0, 1187);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, h2, anchor);
			append_dev(h2, t1);
			insert_dev(target, t2, anchor);
			mount_component(pagecomp, target, anchor);
			insert_dev(target, t3, anchor);
			info.block.m(target, info.anchor = anchor);
			info.mount = () => t4.parentNode;
			info.anchor = t4;
			insert_dev(target, t4, anchor);
			insert_dev(target, div, anchor);
			current = true;
		},
		p: function update(new_ctx, [dirty]) {
			ctx = new_ctx;
			info.ctx = ctx;

			if (dirty & /*promise*/ 2 && promise_1 !== (promise_1 = /*promise*/ ctx[1]) && handle_promise(promise_1, info)) ; else {
				const child_ctx = ctx.slice();
				child_ctx[6] = info.resolved;
				info.block.p(child_ctx, dirty);
			}
		},
		i: function intro(local) {
			if (current) return;
			transition_in(pagecomp.$$.fragment, local);
			transition_in(info.block);
			current = true;
		},
		o: function outro(local) {
			transition_out(pagecomp.$$.fragment, local);

			for (let i = 0; i < 3; i += 1) {
				const block = info.blocks[i];
				transition_out(block);
			}

			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(h2);
			if (detaching) detach_dev(t2);
			destroy_component(pagecomp, detaching);
			if (detaching) detach_dev(t3);
			info.block.d(detaching);
			info.token = null;
			info = null;
			if (detaching) detach_dev(t4);
			if (detaching) detach_dev(div);
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
	let selected = 1;
	let ALBSA = [];
	let ALBUMS;
	let promise = getAlbumInfo().catch(err => console.log(err));

	async function getAlbumInfo() {
		await fetch(`http://192.168.0.74:6790/AlbumInfo?selected=${selected}`, { mode: "cors", method: "GET" }).then(r => r.json()).then(data => {
			if (data.albs.length != 0) {
				$$invalidate(0, ALBUMS = data.albs);
			} else {
				$$invalidate(0, ALBUMS = 0);
			}
		}).catch(err => console.log(err));
	}

	let handleMessage = event => {
		selected = event.detail.text;
		$$invalidate(1, promise = getAlbumInfo().catch(err => console.log(err)));
	};

	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1.warn(`<Albums> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Albums", $$slots, []);

	$$self.$capture_state = () => ({
		AlbumCard,
		PageComp,
		onMount,
		selected,
		ALBSA,
		ALBUMS,
		promise,
		getAlbumInfo,
		handleMessage
	});

	$$self.$inject_state = $$props => {
		if ("selected" in $$props) selected = $$props.selected;
		if ("ALBSA" in $$props) ALBSA = $$props.ALBSA;
		if ("ALBUMS" in $$props) $$invalidate(0, ALBUMS = $$props.ALBUMS);
		if ("promise" in $$props) $$invalidate(1, promise = $$props.promise);
		if ("handleMessage" in $$props) $$invalidate(2, handleMessage = $$props.handleMessage);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [ALBUMS, promise, handleMessage];
}

class Albums extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Albums",
			options,
			id: create_fragment.name
		});
	}
}

export default Albums;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxidW1zLjk0ZWM3YjE4LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcm91dGVzL2FsYnVtcy5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdD5cblx0aW1wb3J0IEFsYnVtQ2FyZCBmcm9tICcuLi9jb21wb25lbnRzL0FsYnVtQ2FyZC5zdmVsdGUnO1xuXHRpbXBvcnQgUGFnZUNvbXAgZnJvbSAnLi4vY29tcG9uZW50cy9QYWdlQ29tcC5zdmVsdGUnXG5cdGltcG9ydCB7IG9uTW91bnQgfSBmcm9tICdzdmVsdGUnO1xuXG5cdGxldCBzZWxlY3RlZCA9IDE7XG5cdGxldCBBTEJTQSA9IFtdO1xuXHRsZXQgQUxCVU1TIDtcblxuXHRsZXQgcHJvbWlzZSA9IGdldEFsYnVtSW5mbygpLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKTtcblx0XG5cdGFzeW5jIGZ1bmN0aW9uIGdldEFsYnVtSW5mbygpIHtcblx0XHRhd2FpdCBmZXRjaChgaHR0cDovLzE5Mi4xNjguMC43NDo2NzkwL0FsYnVtSW5mbz9zZWxlY3RlZD0ke3NlbGVjdGVkfWAsIHttb2RlOiBcImNvcnNcIiwgbWV0aG9kOiBcIkdFVFwifSlcblx0XHQudGhlbihyID0+IHIuanNvbigpKVxuXHRcdC50aGVuKGRhdGEgPT4ge1xuXHRcdFx0aWYgKGRhdGEuYWxicy5sZW5ndGggIT0gMCkge1xuXHRcdFx0XHRBTEJVTVMgPSBkYXRhLmFsYnM7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRBTEJVTVMgPSAwXG5cdFx0XHR9XG5cdFx0fSkuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpO1xuXHR9XG5cbiAgICBsZXQgaGFuZGxlTWVzc2FnZSA9IChldmVudCkgPT4ge1xuICAgIFx0c2VsZWN0ZWQgPSBldmVudC5kZXRhaWwudGV4dFxuXHRcdHByb21pc2UgPSBnZXRBbGJ1bUluZm8oKS5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSk7XG5cdCAgfVxuXG48L3NjcmlwdD5cblxuPHN2ZWx0ZTpoZWFkPjx0aXRsZT5BbGJ1bXM8L3RpdGxlPjwvc3ZlbHRlOmhlYWQ+XG5cbjxoMj5BbGJ1bXM8L2gyPlxuXG48UGFnZUNvbXAgb246bWVzc2FnZT17aGFuZGxlTWVzc2FnZX0gQUxQSEE9XCJBbGJ1bUFscGhhXCIvPlxuXG57I2F3YWl0IHByb21pc2UgdGhlbiB2YWx1ZX1cbiAgICB7I2lmIEFMQlVNUyAhPSAwfVxuICAgICAgICB7I2VhY2ggQUxCVU1TIGFzIGFsYn1cblx0XHRcdDxBbGJ1bUNhcmQgYXJ0aXN0PXthbGIuQXJ0aXN0fSBcblx0XHRcdFx0YWxidW09e2FsYi5BbGJ1bX1cblx0XHRcdFx0YWxidW1pZD17YWxiLkFsYnVtSWR9XG5cdFx0XHRcdGFsYnVtYXJ0aHR0cHBhdGg9e2FsYi5TbWFsbHRodW1ifSBcblx0XHRcdFx0bnVtc29uZ3M9e2FsYi5OdW1Tb25nc30gXG5cdFx0XHRcdHNvbmdzPXthbGIuU29uZ3N9Lz5cbiAgICAgICAgey9lYWNofVxuICAgIHs6ZWxzZX1cbiAgICAgICAgPHA+TWFrZSBhIFNlbGVjdGlvbnM8L3A+XG4gICAgey9pZn1cbnsvYXdhaXR9XG5cbjxkaXYgaWQ9XCJwYWRcIj48L2Rpdj5cblxuPHN0eWxlPlxuXG5cdCNwYWQge1xuXHRcdG1hcmdpbi1ib3R0b206IDEwMHB4O1xuXHR9XG5cbjwvc3R5bGU+Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztpQkFxQ1MsR0FBTSxPQUFJLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs2QkFDTCxHQUFNOzs7O2dDQUFYLE1BQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs0QkFBQyxHQUFNOzs7OytCQUFYLE1BQUk7Ozs7Ozs7Ozs7Ozs7Ozs7d0JBQUosTUFBSTs7Ozs7Ozs7OztrQ0FBSixNQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBQ1EsR0FBRyxJQUFDLE1BQU07bUJBQ3JCLEdBQUcsSUFBQyxLQUFLO3FCQUNQLEdBQUcsSUFBQyxPQUFPOzhCQUNGLEdBQUcsSUFBQyxVQUFVO3NCQUN0QixHQUFHLElBQUMsUUFBUTttQkFDZixHQUFHLElBQUMsS0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7O2dFQUxFLEdBQUcsSUFBQyxNQUFNOytEQUNyQixHQUFHLElBQUMsS0FBSztpRUFDUCxHQUFHLElBQUMsT0FBTzswRUFDRixHQUFHLElBQUMsVUFBVTtrRUFDdEIsR0FBRyxJQUFDLFFBQVE7K0RBQ2YsR0FBRyxJQUFDLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzJDQVZFLEdBQWE7Ozs7Ozs7Ozs7Ozs7d0NBRTNCLEdBQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt1RUFBUCxHQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0EvQlYsUUFBUSxHQUFHLENBQUM7S0FDWixLQUFLO0tBQ0wsTUFBTTtLQUVOLE9BQU8sR0FBRyxZQUFZLEdBQUcsS0FBSyxDQUFDLEdBQUcsSUFBSSxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUc7O2dCQUUxQyxZQUFZO1FBQ3BCLEtBQUssZ0RBQWdELFFBQVEsTUFBSyxJQUFJLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxLQUFLLElBQ2xHLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksSUFDaEIsSUFBSSxDQUFDLElBQUk7T0FDTCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDO29CQUN4QixNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUk7O29CQUVsQixNQUFNLEdBQUcsQ0FBQzs7S0FFVCxLQUFLLENBQUMsR0FBRyxJQUFJLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRzs7O0tBR3pCLGFBQWEsR0FBSSxLQUFLO0VBQ3pCLFFBQVEsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUk7a0JBQy9CLE9BQU8sR0FBRyxZQUFZLEdBQUcsS0FBSyxDQUFDLEdBQUcsSUFBSSxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
