<script>
	import ArtistAlbums from '../components/ArtistAlbums.svelte'
	import PageComp from '../components/PageComp.svelte'
	import { onMount } from 'svelte';

	let selected = 1;
	let ART = [];

	let promise = getArtistInfo().catch(err => console.log(err));
	async function getArtistInfo() {
		await fetch(`http://192.168.0.31:6789/ArtistInfo?selected=${selected}`, {mode: "cors", method: "GET"})
		.then(r => r.json())
		.then(data => {
			ART = data.arts
		}).catch(err => console.log(err))
	}

    function handleMessage(event) {
    	selected = event.detail.text
		promise = getArtistInfo().catch(err => console.log(err));
	  }
</script>

<svelte:head><title>Artists</title></svelte:head>

<h2>Artists</h2>

<PageComp on:message={handleMessage} ALPHA="ArtistAlpha" />

<div class="foo">
	{#each ART as a}
		<div class="bar">
			<h2>{a.Artist}</h2>
			<ArtistAlbums infoalbums={a} />
		</div>
	{/each}
</div>

<style>

	.bar {
		background-color: tomato;
		border: black;
		border-style: solid;
		border-radius: 15px;
		text-align: center;
		list-style-type: none;
		width: 100%;
		margin-top: 20px;
	}

</style>