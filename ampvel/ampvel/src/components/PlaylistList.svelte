<script>
    import DeletePlaylist from './PlaylistComps/DeletePlaylist.svelte'
    import LoadPlaylist from './PlaylistComps/LoadPlaylist.svelte'
    import EditPlaylist from './PlaylistComps/EditPlaylist.svelte'
    import { playliststore, playlistidstore } from './PlaylistComps/PlaylistListStore.js'
    import { onMount } from 'svelte';

    let plid = "";
    let PLNAMES;
    let PLCOUNT = 0;

	onMount(async function getAllPlaylists() {
		fetch(`http://192.168.0.74:6790/AllPlaylists`, {mode: "cors", method: "GET"})
		.then(r => r.json())
		.then(data => {
            let cunt = [];
            let voo;
            let moo = data.plnames.map((da) => {
                voo = {
                    playlistname : da[0],
                    playlistid : da[1],
                }
                cunt.push(voo)
            })
            PLNAMES = cunt
            playliststore.set(PLNAMES)
            playlistidstore.set(plid)
            if (PLNAMES != undefined) {
                PLCOUNT = PLNAMES.length
            }
		})
    })

    let PPLNAMES;
    let PPLCOUNT;
    const unsubscribe = playliststore.subscribe(value => {
        PLNAMES = undefined;
        PLCOUNT = undefined;
        PPLNAMES = value;
        PPLCOUNT = PPLNAMES.length
    });
    let playlistidstore_value;
    const unsubplid = playlistidstore.subscribe(value => {
        playlistidstore_value = value
    })
        // let playlistidstore_value;
</script>

<div>
    <p>Currently selected playlist: {plid}</p>
    <form>
        <ul>
            {#if PLCOUNT > 1}
                {#each PLNAMES as pln}
                    <li>
                        <label for={pln[1]}>{pln[0]}</label>
                        <input bind:group={plid} id={pln[1]} name={pln[1]} type="radio" value={pln[1]}>
                    </li>
                {/each}
            {:else if PLCOUNT < 1}
                <p>Whoops no playlists found</p>
            {:else}
                <!-- <label for={PLNAMES[0]}>{PLNAMES[0]}</label> -->
                <!-- <input bind:group={plid} id={PLNAMES["playlistid"]} name={PLN"playlistname"["playlistid"]} type="rad"playlistname"value={PLNAMES[0][0]}> -->
            {/if}

            {#if PPLCOUNT > 1}
                {#each PPLNAMES as pln}
                    <li>
                        <label for={pln["playlistid"]}>{pln["playlistname"]}</label>
                        <input bind:group={plid} id={pln["playlistid"]} name= {pln["playlistid"]} type="radio" value={pln["playlistid"]}>
                    </li>
                {/each}
            {:else if PPLCOUNT < 1}
                <p>Whoops no playlists found</p>
            {:else}
            <p>this is pplnames: {PPLNAMES[0]["playlistid"]}</p>
                <label for={PPLNAMES[0]["playlistid"]}>{PPLNAMES[0]["playlistname"]}</label>
                <input bind:group={plid} id={PPLNAMES[0]["playlistid"]} name={PPLNAMES[0]["playlistname"]} type="radio" value={PPLNAMES[0]["playlistname"]}>
            {/if}
        </ul>
    </form>
</div>

<nav>
    <LoadPlaylist PLID={plid} />
    <DeletePlaylist PLID={plid}/>
    <EditPlaylist PLID={plid} />
    
</nav>

<style>
    nav {
        margin-bottom: 10px;
    }
    ul {
        list-style-type: none;
    }
</style>