<script>
    import { playliststore, ampvel } from '../PlayerStore.js'
    export let PLID;
    let NPL;
	async function getDeletePlaylistFromDB() {
        fetch(`${ampvel}/DeletePlaylistFromDB?playlistid=${PLID}`, {mode: "cors", method: "GET"})
        .then(r => r.json())
        .then(data => {
            NPL = data.npl;
            playliststore.set(NPL)
        })
    }
    let deleteClick = () => {
        let promise = getDeletePlaylistFromDB().catch(err => console.log(err));
    }

</script>

<button id="delete" on:click={deleteClick} >Delete</button>

<style>

    button#delete {
        background-color: red;
        color: white;
        border: none;
        padding: 7px;
    }

</style>