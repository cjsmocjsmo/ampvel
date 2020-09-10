<script>
    import { onMount } from "svelte";
    import { TVlocalplayURL } from '../PlayerStore'
    export let LP;

    let showlist;
    let showlistcount;
    let visibleDis = false

    onMount(
        async function getDiscovery() {
            let addr = `http://192.168.0.42:9999/intDiscovery?season=01`
            fetch(addr, {mode: "cors", method: "GET"})
            .then(r => r.json())
            .then(data => {
                console.log(data)
                console.log(data[0].episode)
                showlist = data
                showlistcount = data.length
            }).catch(err => console.log(err));
        }
    )

    let fuckDis = () => {
        if (visibleDis) {
            visibleDis = false
        } else {
            visibleDis = true
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

    let handleDiscovery = (media) => {
        if (LP) {
            console.log(media)

            let foo = media.split("TVShows", 2)
            let newpath = `http://192.168.0.42:8082` + media
            console.log(newpath)
            TVlocalplayURL.set(newpath)
            visibleDis = false
        } else {
            let promise = getPlayMedia(media).catch(err => console.log(err));
            visibleDis = false
        }
        
    }
</script>

<button on:click={fuckDis}>Discovery</button>

{#if visibleDis}
    <ul>
        {#if showlistcount > 0}
            {#each showlist as sshow }
                <li>
                    <a href="tvshows" on:click={handleDiscovery(sshow.tvfspath)}>{sshow.title}</a>
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