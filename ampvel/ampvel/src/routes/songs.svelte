<script>
	import SongPage from '../components/SongPage.svelte';

	let selected = 1;
	let SONGS = [];
 
    let promise = getSongInfo().catch(err => console.log(err));
	async function getSongInfo() {
		await fetch(`http://192.168.0.74:6790/SongInfo?selected=${selected}`, {mode: "cors", method: "GET"})
		.then(r => r.json())
		.then(data => {
			SONGS = data.song;
		})
	}

	import PageComp from '../components/PageComp.svelte'
    function handleMessage(event) {
    	selected = event.detail.text
		promise = getSongInfo().catch(err => console.log(err));
	}
    
</script>

<svelte:head><title>Songs</title></svelte:head>

<h2>Songs</h2>

<PageComp on:message={handleMessage} ALPHA="SongAlpha" />

<SongPage songs={SONGS} />
