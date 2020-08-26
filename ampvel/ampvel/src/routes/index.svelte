<script>
	import { onMount } from 'svelte';
	let STATS;
	let artist;
	let albums;
	let mp3;
	onMount(async () => {
		fetch(`http://192.168.0.74:6790/Stats`, {mode: "cors", method: "GET"})
		.then(r => r.json())
		.then(data => {
			STATS = data.stats;
			artist = STATS.total_artists
			albums = STATS.total_albums
			mp3 = STATS.total_mp3
		})
		.catch(err => console.log(err))
	})

	let NASA;
	onMount(async () => {
		fetch(`https://api.nasa.gov/planetary/apod?api_key=qdSdMLU2yc4wXQM9goawTdAA7sngW9KoLkDsVhWG`, {mode: "cors", method: "GET"})
		.then(r => r.json())
		.then(data => {
			NASA = data.url;
		})
		.catch(err => console.log(err))
	})

	let movcount;
	onMount(async () => {
		fetch(`http://192.168.0.42:8888/MovDBCount`, {mode: "cors", method: "GET"})
		.then(r => r.json())
		.then(data => {
			console.log(data)
			movcount = data;
		})
		.catch(err => console.log(err))
	})

	let tvcount;
	onMount(async () => {
		fetch(`http://192.168.0.42:9999/TVDBCount`, {mode: "cors", method: "GET"})
		.then(r => r.json())
		.then(data => {
			console.log(data)
			tvcount = data;
		})
		.catch(err => console.log(err))
	})

    
	async function getMovUpdate() {
		await fetch(`http://192.168.0.42:8888/Update`, {mode: "cors", method: "GET"})
		.then(r => r.json())
		.then(data => {
			console.log(data)
		})
	}

	let handleMovUpdateClick = () => {
		let promise = getMovUpdate().catch(err => console.log(err));
	}

	async function getTVUpdate() {
		await fetch(`http://192.168.0.42:9999/Update`, {mode: "cors", method: "GET"})
		.then(r => r.json())
		.then(data => {
			console.log(data)
		})
	}

	let handleTVUpdateClick = () => {
		let promise = getTVUpdate().catch(err => console.log(err));
	}

</script>

<svelte:head>
	<!-- <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"> -->
	<title>AmpVel</title>
</svelte:head>

<ul>
	<li><a href="http://192.168.0.42:4566/">YTS-EZTV</a></li>
</ul>


<figure>
	<img alt='Success Kid' src={NASA}>
	<figcaption>NASA Pic Of The Day</figcaption>
</figure>

<ul>
	<li><span>Artists:</span> <span id="artspan">{artist}</span></li>
	<li><span>Albums:</span><span id="artspan">{albums}</span></li>
	<li><span>Songs:</span><span id="artspan">{mp3}</span></li>
</ul>

<ul>
	{#if movcount < 1}
		<li><span id="MovSetup1">Movies:</span><span id="artspan">{movcount}</span></li>
	{:else}
		<li><span id="MovSetup2">Movies:</span><span id="artspan">{movcount}</span></li>
	{/if}

	{#if tvcount < 1}
		<li><span id="TVSetup1">TV Shows:</span><span id="artspan">{tvcount}</span></li>
	{:else}
		<li><span id="TVSetup2">TV Shows:</span><span id="artspan">{tvcount}</span></li>
	{/if}
</ul>

<nav>
	{#if movcount < 1}
		<button on:click={handleMovUpdateClick} >Movie Setup</button>
	{/if}
	{#if tvcount < 1}
		<button on:click={handleTVUpdateClick} >TVShows Setup</button>
	{/if}
</nav>

<iframe src="https://art19.com/shows/cbs-evening-news/embed\"></iframe>

<iframe src="https://art19.com/shows/cbs-this-morning/embed\"></iframe>

<style>

	iframe {
		width: 720px;
		height: 505px;
		border: 0 none;
	}

	#MovSetup1 {
		/* background-color: red; */
		padding: 7px;
		color: red;
	}
	#MovSetup2 {
		/* background-color: green; */
		padding: 7px;
		color: black;
	}

	#TVSetup1 {
		/* background-color: red; */
		padding: 7px;
		color: red;
	}
	#TVSetup2 {
		/* background-color: green; */
		padding: 7px;
		color: black;
	}

	#artspan {
		color: blue;
		margin-left: 10px;
	}

	ul {
		list-style-type: none;
		text-align: center;
	}

	li {
		display: inline;
		padding-left: 20px;
		padding-right: 20px;
		color: black;
	}
	figure {
		text-align: center;
		margin: 0 auto;
	}

	figure {
		margin: 0 0 1em 0;
	}

	img {
		width: 100%;
		max-width: 400px;
		margin: 0 0 1em 0;
	}

	button {
		width: 49%;
	}

	/*@media (min-width: 480px) {
		h1 {
			font-size: 4em;
		}
	} */
</style>