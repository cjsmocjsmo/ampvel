<script>
    import { songURLstore, artiststore, songstore, songidstore, ampvel} from './PlayerStore.js'
    import { playlistidstore } from './PlayerStore.js'
    import { each } from 'svelte/internal';
    export let songs;

    let ampvel_value;
    const unsubampvel = ampvel.subscribe(value => {
      ampvel_value = value
    })

    async function getSongURL(x) {
        let addr = `${ampvel_value}/PathArt?selected=${x}`
        fetch(addr, {mode: "cors", method: "GET"})
        .then(r => r.json())
        .then(data => {
          let SONGURL = ampvel_value + data.HttpMusicPath
          songURLstore.set(SONGURL)
          artiststore.set(data.Artist)
          songstore.set(data.Song)
          songidstore.set(x)
        }).catch(err => console.log(err));
      }

    let zoo = (z) => {
      let promise = getSongURL(z).catch(err => console.log(err));
    }

    export let songURLstore_value;
	  export let artiststore_value;
    export let songstore_value;
    export let songidstore_value;
    export let playlistidstore_value;

	  const unsubSongUrl = songURLstore.subscribe(value => {
      songURLstore_value = value
      console.log(songURLstore_value)
    })

    const unsubArtist = artiststore.subscribe(value => {
      artiststore_value = value
    })

    const unsubSong = songstore.subscribe(value => {
      songstore_value = value
    })

    const unsubSongId = songidstore.subscribe(value => {
      songidstore_value = value
    })

    const unsubPlaylistId = playlistidstore.subscribe(value => {
      playlistidstore_value = value
    })

    console.log(songURLstore_value)
    console.log(songstore_value)
    console.log(songidstore_value)
    console.log(playlistidstore_value)

    // this is for add song to playlist
    // AddSongsToPlistDB
    // songname
    // songid
    // playlistid
</script>

{#each songs as so}
    <ul id={so.SongId} >
        <li><h2>{so.Song}</h2></li>
        <li><p>{so.Artist}</p></li>
        <li>
          <button on:click={zoo(so.SongId)}>Play</button>
          <button>Add</button>
        </li>
    </ul>
{/each}

<style>

    ul {
        background-color: tomato;
        border: black;
        border-style: solid;
        border-radius: 15px;
        text-align: center;
        list-style-type: none;
        width: 95%;
    }

    li {
        color: black;
    }

</style>