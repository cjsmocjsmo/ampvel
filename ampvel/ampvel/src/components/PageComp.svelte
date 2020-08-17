<script>
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	import { onMount } from 'svelte';
	let selected = 1;

	function dispatchMyPageEvent() {
		dispatch("message", {
			text: selected
		})
	}

	export let ALPHA;
    const ADDR = `http://192.168.0.74:6790/${ALPHA}`

	let AS = [];
	onMount(async () => {
		await fetch(ADDR, {mode: "cors", method: "GET"})
		.then(r => r.json())
		.then(data => {
			if (ALPHA === "ArtistAlpha") {
				AS = data.artal
			} 
			if (ALPHA === "AlbumAlpha") {
				AS = data.albal
			}
			if (ALPHA === "SongAlpha") {
				AS = data.songal;
			}
		})
	})

	let visible = false;
    let fuck = () => {
        if (visible) {
            visible = false
        } else {
            visible = true
        }
	}

	let alphasel = (asel) => {
		selected = asel
		visible = false
		dispatchMyPageEvent()
	}
</script>

<button id="SongsPageButton" on:click={fuck}>Page<span>{selected}</span></button>

{#if visible}
	<nav>
		<ul class="pageUL">
			{#each AS as p}
				<li class="pageLI"><button on:click={alphasel(p)}>{p}</button></li>
			{/each}
		</ul>
	</nav>
{/if}

<style>
	#SongsPageButton {
		color: black;
	}
	#SongsPageButton {
		border-radius: 10px;
		font-size: 17px;
		padding: 7px;
		width: 100%;
		background-color: lawngreen;
	}
	.pageUL {
		text-align: center;
		list-style-type: none;
		font-size: 19px;
	}
	.pageLI {
		display: inline;
		margin: 20px;
	}
	span {
		padding-left: 17px;
	}
</style>