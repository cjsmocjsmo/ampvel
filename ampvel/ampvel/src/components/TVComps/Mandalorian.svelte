<script>
    // import { onMount } from "svelte";
    import { TVlocalplayURL } from '../PlayerStore'
    export let LP;

    let showlist;
    let showlistcount;
    let visibleDis = false

    // onMount(
        async function getMandalorian(x) {
            let addr = `http://192.168.0.42:8888/intMandalorian?season=01`
            fetch(addr, {mode: "cors", method: "GET"})
            .then(r => r.json())
            .then(data => {
                console.log(data)
                console.log(data[0].episode)
                showlist = data
                showlistcount = data.length
            }).catch(err => console.log(err));
        }
    //)

    let handleMandalorian1 = () => {
        let promise = getMandalorian(`01`).catch(err => console.log(err));
    }

    let handleMandalorian2 = () => {
        let promise = getMandalorian(`02`).catch(err => console.log(err));
    }

    let fuckDis = () => {
        if (visibleDis) {
            visibleDis = false
        } else {
            visibleDis = true
        }
    }

    async function getPlayMedia(x) {
        let y = "/media/pi/PiTB/media/TVShows" + x
        console.log("this is y")
        console.log(y)
        let addr = `http://192.168.0.42:8888/playMediaReact?movie=${y}`
        console.log(addr)
        fetch(addr, {mode: "cors", method: "GET"})
        .then(r => r.json())
        .then(data => {
            console.log(data)
        }).catch(err => console.log(err));
    }

     let handlePlayShow = (media) => {
        if (LP) {
            console.log(media)

            let foo = media.split("TVShows", 2)
            let newpath = `http://192.168.0.42:8063` + "/" + media
            console.log(newpath)
            TVlocalplayURL.set(newpath)
            visibleDis = false
        } else {
            let promise = getPlayMedia(media).catch(err => console.log(err));
            visibleDis = false
        }
        
    }
</script>

<button on:click={fuckDis}>Mandalorian</button>

{#if visibleDis}
    <nav>
        <button on:click={handleMandalorian1}>s1</button>
        <button on:click={handleMandalorian2}>s2</button>
    </nav>
    <ul>
        {#if showlistcount > 0}
            {#each showlist as sshow }
                <li>
                    <a href="tvshows" on:click={handlePlayShow(sshow.tvfspath)}>{sshow.title}</a>
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