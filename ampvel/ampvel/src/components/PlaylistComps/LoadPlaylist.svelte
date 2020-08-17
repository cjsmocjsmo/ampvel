<script>
    export let PLID;
    import {ampvel} from '../PlayerStore.js'

    let ampvel_value;
    const unsubampvel = ampvel.subscribe(value => {
      ampvel_value = value
    })

	let SONGS = [];
	async function getCreatePlayerPlaylist() {
        let addr = `${ampvel_value}/CreatePlayerPlaylist?playlistid=${PLID}`
        console.log(addr)
		await fetch(addr, {mode: "cors", method: "GET"})
		.then(r => r.json())
		.then(data => {
            SONGS = data.makePL;
            console.log(SONGS[0])
        }).catch(err => console.log(err));
    }
    
    // async function handleLoadSubmit(event) {
    async function handleLoadSubmit() {
        // console.log(event.target.SONGS)
        // plname = event.target.plname.value;
        let promise = getCreatePlayerPlaylist().catch(err => console.log(err));
        console.log("this is songs from loadplaylist page")
        console.log(SONGS)
    }

</script>

<button id="playlistLoadBtn" on:click={handleLoadSubmit} >Load</button>

{#if PLID !== ""}
    {#each SONGS as s}
        <div>
            <img src={s.thumbnail} alt="fuck"/>
            <p>{s.artist}</p>
            <p>{s.album}</p>
            <p>{s.name}</p>
        </div>
    {/each}
{:else}
    <p>Whoops no Playlist selected</p>
{/if}

<style>
    img {
        float: right;
        margin-right: 50px;
    }
</style>