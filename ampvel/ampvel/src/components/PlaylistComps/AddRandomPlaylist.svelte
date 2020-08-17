<script>
    import { playliststore, ampvel } from '../PlayerStore.js'

    let radvisible = false;
    let randvis = () => {
        if (radvisible) {
            radvisible = false
        } else {
            radvisible = true
        }
    }

    let plname;
    let plcount;
    let playlists;

    async function handleSubmit(event) {
        radvisible = false;
        plname = event.target.plname.value;
        plcount = event.target.plcount.value;
        let promise = getAddRandomPlaylist().catch(err => console.log(err));
    }
	
	async function getAddRandomPlaylist() {
		await fetch(`${ampvel}/AddRandomPlaylist?playlistname=${plname}&playlistcount=${plcount}`, {mode: "cors", method: "GET"})
		.then(r => r.json())
		.then(data => {
            playlists = data.plists;
            playliststore.set(playlists)
        }).catch(err => console.log(err));
	}

</script>

<button on:click={randvis} >Add Random Playlist</button>

{#if radvisible}
    <form on:submit|preventDefault="{handleSubmit}">
        <input id="plname" name="plname" type="text" />
        <label>Playlist Name</label><br />
        <input id="plcount" name="plcount" type="text" />
        <label>Number Of Songs</label><br />
        <input type="submit" value="Add" />
    </form>
{/if}

<style>
    form {
        margin-bottom: 10px;
    }
</style>