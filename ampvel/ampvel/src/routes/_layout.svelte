<script>
	import Nav from '../components/Nav.svelte';
	import {songURLstore, artiststore, songstore} from '../components/PlayerStore.js'

	
	
	let songURLstore_value;
	let artiststore_value;
	let songstore_value;
	
	const unsubscribe = songURLstore.subscribe(value => {
		songURLstore_value = value
	})

	const unsubscribe2 = artiststore.subscribe(value2 => {
		artiststore_value = value2
	})

	const unsubscribe3 = songstore.subscribe(value3 => {
		songstore_value = value3
	})








</script>

<Nav />
<!-- <Nav {segment}/> -->

<nav>
	<button>{artiststore_value}</button>
	<button>{songstore_value}</button>
</nav>

<audio id="audio1" src={songURLstore_value} controls autoplay></audio>



<main>
	<slot></slot>
</main>

<style>

	:global(body) {
		background-color: black;
	}

	main {
		position: relative;
		max-width: 56em;
		background-color: white;
		padding: 2em;
		margin: 0 auto;
		box-sizing: border-box;
		background-color: pink;
	}

	nav {
		text-align: center;
	}

	audio {
		width: 100%;
		margin-top: 7px;
	}

	button {
		background-color: black;
		color: gold;
		border: none;
		width: 25%;
	}
	
</style>