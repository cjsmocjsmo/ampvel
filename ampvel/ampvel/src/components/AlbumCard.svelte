<script>
    import { songURLstore, artiststore, songstore, ampvel } from './PlayerStore.js'
    import Player from '../components/Player.svelte';
    import { component_subscribe } from 'svelte/internal';
    export let artist;
    export let album;
    export let albumid;
    export let albumarthttppath;
    export let numsongs;
    export let songs;

    let cardvisible = false;
    let cardfuck = () => {
      if (cardvisible) {
        cardvisible = false;
      } else {
        cardvisible = true;
      }
    }
    let SONG = "";
    let ARTIST = "";
    let FOOID = "";
    let zoo = (x) => {
      let promise = getSongURL().catch(err => console.log(err));
      async function getSongURL() {
        fetch(`${ampvle}/PathArt?selected=${x}`, {mode: "cors", method: "GET"})
        .then(r => r.json())
        .then(data => {
          let oid = data.HttpMusicPath
          FOOID = ampvel + oid
          ARTIST = data.Artist
          SONG = data.Song
          songURLstore.set(FOOID)
          artiststore.set(ARTIST)
          songstore.set(SONG)
        }).catch(err => console.log(err));
      }
    }

    let handleClick = () => {
      promise = getSongURL().catch(err => console.log(err));
    }

</script>

<div id={albumid} class="card" on:click={cardfuck}>
  <div class="container">
    <h4><b>{artist}</b></h4>
    <p>{album}</p>
    <p>Songs: {numsongs}</p>
  </div>
  <img src={albumarthttppath} alt={artist}>
</div> 
{#if cardvisible}
  <div>
    <ul id={albumid}>
      {#each songs as s}
        <li>
            <button>Add</button>
            <button on:click={zoo(s[1])}>Play</button>
            <span id={s[1]}>{s[0]}</span>
        </li>
        {/each}
    </ul>
  </div>
{/if}

<!-- {#if FOOID != "" && FOOID != undefined}
  <Player songURL={FOOID} artist={ARTIST} song={SONG} />
{/if} -->

<style>

    button {
      float: right;
      margin-right: 25px;
    }

    .card {
      /* Add shadows to create the "card" effect */
      box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
      transition: 0.3s;
      width: 100%;
      margin-top: 20px;
      margin-bottom: 20px;
      background-color: yellowgreen;
      border: black;
      border-style: solid;
      border-radius: 15px;
    }
    
    /* On mouse-over, add a deeper shadow */
    .card:hover {
      box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }
    
    /* Add some padding inside the card container */
    .container {
      padding-top: 20px;
      padding-right: 35px;
      float: right;
    }
    
    img {
      padding-top: 10px;
      padding-bottom: 4px;
      padding-left: 10px;
    }
    
    ul {
    background-color: tomato;
    border: black;
    border-style: solid;
    border-radius: 15px;
    list-style-type: none;
    }

    li {
        padding: 10px;
        width: 100%;
    }

</style>
