<script>
    import { playliststore, ampvel } from '../PlayerStore.js'
    export let PLID;
    let NPL;

    let ampvel_value;
    const unsubampvel = ampvel.subscribe(value => {
      ampvel_value = value
    })

	async function getDeletePlaylistFromDB() {
        fetch(`${ampvel_value}/DeletePlaylistFromDB?playlistid=${PLID}`, {mode: "cors", method: "GET"})
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