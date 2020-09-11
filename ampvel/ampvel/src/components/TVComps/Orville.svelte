<script>
    import { onMount } from "svelte";
    import { TVlocalplayURL } from '../PlayerStore'
    export let LP;
    let ORVshowlist;
    let ORVshowlistcount;
    let visibleOrv = false


    async function getOrville(x) {
        let addr = `http://192.168.0.42:9999/intOrville?season=${x}`
        fetch(addr, {mode: "cors", method: "GET"})
        .then(r => r.json())
        .then(data => {
            ORVshowlist = data
            ORVshowlistcount = data.length
        }).catch(err => console.log(err));
    }
    let handleOR1 = () => {
        let promise = getOrville(`01`).catch(err => console.log(err));
    }
    let handleOR2 = () => {
        let promise = getOrville(`02`).catch(err => console.log(err));
    }


    let fuckOrv = () => {
        if (visibleOrv) {
            visibleOrv = false
        } else {
            visibleOrv = true
        }
    }

    async function getPlayMedia(x) {
        let addr = `http://192.168.0.42:9999/playMediaReact?tvshow=${x}`
        fetch(addr, {mode: "cors", method: "GET"})
        .then(r => r.json())
        .then(data => {
            console.log(data)
        }).catch(err => console.log(err));
    }

    let handlePlayShowOr = (media) => {
        if (LP) {
            console.log(media)
            let foo = media.split("TVShows", 2)
            let newpath = `http://192.168.0.42:8082` + media
            console.log(newpath)
            TVlocalplayURL.set(newpath)
            visibleOrv = false
        } else {
            let promise = getPlayMedia(media).catch(err => console.log(err));
            visibleOrv = false
        }
    }
</script>

<button on:click={fuckOrv}>Orville</button>

{#if visibleOrv}
    <nav>
        <button on:click={handleOR1}>s1</button>
        <button on:click={handleOR2}>s2</button>
    </nav>

    <ul>
        {#if ORVshowlistcount > 0}
            {#each ORVshowlist as sshow }
                <li>
                    <a href="tvshows" on:click={handlePlayShowOr(sshow.movfspath)}>{sshow.title}</a>
                    <span>{sshow.episode}</span>
                </li>
            {/each}
        {/if}
    </ul>
{/if}

<style>
    span {
        margin-left: 20px;
    }

    ul {
        list-style: none;
    }

    li {
        margin: 10px;
        text-decoration: underline;
    }

    a {
        color: blue;
    }
    
</style>