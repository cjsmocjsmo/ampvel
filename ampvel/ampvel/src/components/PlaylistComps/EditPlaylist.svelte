<script>
    export let PLID
    import {ampvel} from '../PlayerStore.js'
 
    let handleAllPlaylistSongsFromDBSubmit = () => {
        editvisible = true
        let promise = getAllPlaylistSongsFromDB().catch(err => console.log(err));
    }

    let ampvel_value;
    const unsubampvel = ampvel.subscribe(value => {
      ampvel_value = value
    })

	let songlist;
    let songlist_count;
	async function getAllPlaylistSongsFromDB() {
		fetch(`${ampvel_value}/AllPlaylistSongsFromDB?playlistid=${PLID}`, {mode: "cors", method: "GET"})
		.then(r => r.json())
		.then(data => {
            songlist = data.taz;
            songlist_count = songlist.length
        }).catch(err => console.log(err));
	}

    let editvisible = true;
    let edvi = () => {
        if (editvisible) {
            editvisible = false
        } else {
            editvisible = true
        }
    }

    // this is for playlist song removal
    // DeleteSongFromPlaylist
    // delsongid
    // playlistname
    // result

</script>


<button on:click={handleAllPlaylistSongsFromDBSubmit}>Edit</button>
{#if editvisible}
    {#if songlist_count > 1}
        {#each songlist as song}
            <ul>
                <li>
                    <p id={song[1]}>{song[0]}<button id="removeBtn">Remove</button></p>
                </li>
            </ul>
        {/each}
        <button on:click={edvi}>Complete</button>
    {:else}
        <p>Whoops zero songs</p>
    {/if}
{/if}

<style>
    ul {
        list-style-type: none;
    }
    button#removeBtn {
        float: right;
    }

</style>