<script>
	import AlbumCard from '../components/AlbumCard.svelte';
	import PageComp from '../components/PageComp.svelte'
	import { onMount } from 'svelte';

	let selected = 1;
	let ALBSA = [];
	let ALBUMS ;

	let promise = getAlbumInfo().catch(err => console.log(err));
	
	async function getAlbumInfo() {
		await fetch(`http://192.168.0.74:6790/AlbumInfo?selected=${selected}`, {mode: "cors", method: "GET"})
		.then(r => r.json())
		.then(data => {
			if (data.albs.length != 0) {
				ALBUMS = data.albs;
			} else {
				ALBUMS = 0
			}
		}).catch(err => console.log(err));
	}

    let handleMessage = (event) => {
    	selected = event.detail.text
		promise = getAlbumInfo().catch(err => console.log(err));
	  }

</script>

<svelte:head><title>Albums</title></svelte:head>

<h2>Albums</h2>

<PageComp on:message={handleMessage} ALPHA="AlbumAlpha"/>

{#await promise then value}
    {#if ALBUMS != 0}
        {#each ALBUMS as alb}
			<AlbumCard artist={alb.Artist} 
				album={alb.Album}
				albumid={alb.AlbumId}
				albumarthttppath={alb.Smallthumb} 
				numsongs={alb.NumSongs} 
				songs={alb.Songs}/>
        {/each}
    {:else}
        <p>Make a Selections</p>
    {/if}
{/await}

<div id="pad"></div>

<style>

	#pad {
		margin-bottom: 100px;
	}

</style>