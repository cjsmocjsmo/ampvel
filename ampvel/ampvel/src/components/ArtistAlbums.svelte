<script>
    import { songURLstore, artiststore, songstore, ampvel } from './PlayerStore.js'
    import AlbumCard from "./AlbumCard.svelte";
    import Player from '../components/Player.svelte'
    export let infoalbums = [];

    let artalbvisible = false;
    let HideShow = () => {
        if (artalbvisible) {
            artalbvisible = false
        } else {
            artalbvisible = true
        }
    }

    let selected;
    
    let handleMyClick = (x) => {
        selected = x
        let promise = getAlbumInfoalbums2().catch(err => console.log(err));
    }

    let SONGS = [] ;
    let THUMB ; 
    async function getAlbumInfoalbums2() {
        fetch(`${ampvel}/ImageSongsForAlbum?selected=${selected}`, {mode: "cors", method: "GET"})
        .then(r => r.json())
        .then(data => {
            THUMB = data.getimgsonalb.thumbnail
            SONGS = data.getimgsonalb.songs
        }).catch(err => console.log(err));
    }

    let handleClick = () => {
        promise = getAlbumInfoalbums2().catch(err => console.log(err));
    }

    let oid;
    let SONG = "";
    let ARTIST = "";
    let FOOID = "";
    let handlePlayClick = (x) => {
        selected = x
        let promise = getSongURL().catch(err => console.log(err));
        async function getSongURL() {
            fetch(`${ampvel}/PathArt?selected=${x}`, {mode: "cors", method: "GET"})
                .then(r => r.json())
                .then(data => {
                    let oid = data.HttpMusicPath
                    ARTIST = data.Artist
                    SONG = data.Song
                    FOOID = `http://192.168.0.74:6790` + oid
                    songURLstore.set(FOOID)
                    artiststore.set(ARTIST)
                    songstore.set(SONG)
                }).catch(err => console.log(err));
            }
        }

</script>

<div>
    <ul id={infoalbums.ArtistId}>
        {#each infoalbums.Albums as alb}
            <button id={alb[1]} on:click={handleMyClick(alb[1])} >{alb[0]}</button>
        {/each}
        <button on:click={HideShow} >+/-</button>
    </ul>
</div>

{#if artalbvisible}
    <img  src={THUMB} alt="fuckme" />
    
    <div class="artimg">
        <ul id="bobo">
            {#each SONGS as so}
                <li>
                    <span><h2>{so[0]}</h2></span><button class="play" on:click={handlePlayClick(so[1])}>Play</button><button class="playadd">Add</button>
                </li>
            {/each}
        </ul>
        
    </div>
    <button class="playall">Play All</button>
{/if}
<!-- {#if FOOID != "" && FOOID != undefined}
    <Player songURL={FOOID} artist={ARTIST} song={SONG} />
{/if} -->
<style>
    /* clearfix */
	ul#bobo::after {
		content: '';
		display: block;
		clear: both;
	}
    img {
        text-align: center;
    }
    ul#bobo {
        display: inline;
        list-style-type: none;
    }

    button.playadd { 
        margin-bottom: 20px; 
    }

    button.play {
        margin-bottom: 20px; 
    }
    
    .playall {
        width: 100%;
        font-size: 17px;
        padding: 7px;
        background-color: lawngreen;
        border-radius: 15px;
    }
</style>
