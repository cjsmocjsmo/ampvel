<script>
	import {songURLstore, artiststore, songstore} from './PlayerStore.js'


	export let songURLstore_value;
	export let artiststore_value;
	export let songstore_value;
	

	const unsubSongUrl = songURLstore.subscribe(value => {
		songURLstore_value = value
		console.log(songURLstore_value)
	})

	const unsubArtist = artiststore.subscribe(value => {
		artiststore_value = value
	})

	const unsubSong = songstore.subscribe(value => {
		songstore_value = value
	})

	console.log("from player")
	console.log(songURLstore_value)
	console.log(artiststore_value)
	console.log(songstore_value)

</script>

<nav>
	{#if songURLstore_value != "" && songURLstore_value != undefined}
		<div>
			<audio controls src={songURLstore_value}></audio>
		</div>
		<ul>
			<li><span>{artiststore_value}</span></li>
			<li><span>{songstore_value}</span></li>
		</ul>
	{:else}
		<p>Whoops bad URL</p>
	{/if}
</nav>

<style>

	nav {
		position: fixed;
		left: 0;
		bottom: 0;
		width: 100%;
		background-color: yellowgreen;
		color: white;
		text-align: center;
	}

	ul {
		list-style-type: none;
	}

	li {
		display: inline;
		margin: 20px;
	}

	span {
		color: black
	}

	audio {
		width: 50%;
		padding: 7px;
	}

</style>

