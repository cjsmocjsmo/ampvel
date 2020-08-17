<script>
    import { text } from "svelte/internal";
    import { playliststore } from './PlaylistListStore.js'

    let visible = false;
    let fuck = () => {
        if (visible) {
            visible = false
        } else {
            visible = true
        }
    }

    let newplname;
    async function handleAddPlayListNameToDBSubmit(event) {
        visible = false;
        newplname = event.target.plname.value;
        let promise = getAddPlayListNameToDB().catch(err => console.log(err));
    }
	
	async function getAddPlayListNameToDB() {
		fetch(`http://192.168.0.74:6790/AddPlayListNameToDB?playlistname=${newplname}`, {mode: "cors", method: "GET"})
		.then(r => r.json())
		.then(data => {
            let pname = data.pnames;
            playliststore.set(pname)
        }).catch(err => console.log(err));
	}

</script>

<button on:click={fuck}>Add Empty Playlist</button>

{#if visible}
    <form on:submit|preventDefault="{handleAddPlayListNameToDBSubmit}">
        <input id="plname" name="plname" type="text" value=""/>
        <label>Playlist Name</label><br />
        <input type="submit" value="Add"/>
    </form>
{/if}


