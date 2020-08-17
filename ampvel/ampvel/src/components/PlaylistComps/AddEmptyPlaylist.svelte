<script>
    import { text } from "svelte/internal";
    import { playliststore, ampvel } from '../PlayerStore.js'

    let visible = false;
    let fuck = () => {
        if (visible) {
            visible = false
        } else {
            visible = true
        }
    }

    let ampvel_value;
    const unsubampvel = ampvel.subscribe(value => {
      ampvel_value = value
    })

    let newplname;
    async function handleAddPlayListNameToDBSubmit(event) {
        visible = false;
        newplname = event.target.plname.value;
        let promise = getAddPlayListNameToDB().catch(err => console.log(err));
    }
	
	async function getAddPlayListNameToDB() {
		fetch(`${ampvel_value}/AddPlayListNameToDB?playlistname=${newplname}`, {mode: "cors", method: "GET"})
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


