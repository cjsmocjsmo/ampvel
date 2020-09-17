<script>
    import { onMount } from "svelte";
    import { TVlocalplayURL } from '../PlayerStore'
    export let LP;
    let LISshowlist;
    let LISshowlistcount;
    let visibleLIS = false


    async function getLostInSpace(x) {
        let addr = `http://192.168.0.42:8888/intLostInSpace?season=${x}`
        console.log(addr)
        fetch(addr, {mode: "cors", method: "GET"})
        .then(r => r.json())
        .then(data => {
            console.log(data)
            LISshowlist = data
            LISshowlistcount = data.length
        }).catch(err => console.log(err));
    }
    let handleLIS1 = () => {
        let promise = getLostInSpace(`01`).catch(err => console.log(err));
    }
    let handleLIS2 = () => {
        let promise = getLostInSpace(`02`).catch(err => console.log(err));
    }


    let fuckLIS = () => {
        if (visibleLIS) {
            visibleLIS = false
        } else {
            visibleLIS = true
        }
    }

    async function getPlayMedia(x) {
        let addr = `http://192.168.0.42:8888/playMediaReact?tvshow=${x}`
        fetch(addr, {mode: "cors", method: "GET"})
        .then(r => r.json())
        .then(data => {
            console.log(data)
        }).catch(err => console.log(err));
    }

    let handlePlayShowLIS = (media) => {
        if (LP) {
            console.log(media)
            let foo = media.split("TVShows", 2)
            let newpath = `http://192.168.0.42:8082` + media
            console.log(newpath)
            TVlocalplayURL.set(newpath)
            visibleLIS = false
        } else {
            let promise = getPlayMedia(media).catch(err => console.log(err));
            visibleLIS = false
        }
    }
</script>

<button on:click={fuckLIS}>Lost In Space</button>

{#if visibleLIS}
    <nav>
        <button on:click={handleLIS1}>s1</button>
        <button on:click={handleLIS2}>s2</button>
    </nav>

    <ul>
        {#if LISshowlistcount > 0}
            {#each LISshowlist as sshow }
                <li>
                    <a href="tvshows" on:click={handlePlayShowLIS(sshow.tvfspath)}>{sshow.title}</a>
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