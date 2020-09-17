<script>
    import { TVlocalplayURL } from '../PlayerStore'
    export let LP;
    let VOYshowlist;
    let VOYshowlistcount;
    let visibleVoy = false

    async function getVOY(x) {
        let addr = `http://192.168.0.42:8888/intVoyager?season=${x}`
        fetch(addr, {mode: "cors", method: "GET"})
        .then(r => r.json())
        .then(data => {
            VOYshowlist = data
            VOYshowlistcount = data.length
        }).catch(err => console.log(err));
    }

    let handleVOY1 = () => {
        let promise = getVOY(`01`).catch(err => console.log(err));
    }

    let handleVOY2 = () => {
        let promise = getVOY(`02`).catch(err => console.log(err));
    }
    let handleVOY3 = () => {
        let promise = getVOY(`03`).catch(err => console.log(err));
    }
    let handleVOY4 = () => {
        let promise = getVOY(`04`).catch(err => console.log(err));
    }

    let handleVOY5 = () => {
        let promise = getVOY(`05`).catch(err => console.log(err));
    }

    let handleVOY6 = () => {
        let promise = getVOY(`06`).catch(err => console.log(err));
    }

    let handleVOY7 = () => {
        let promise = getVOY(`07`).catch(err => console.log(err));
    }

    let fuckVOY = () => {
        if (visibleVoy) {
            visibleVoy = false
        } else {
            visibleVoy = true
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

    let handlePlayVOY = (media) => {
        if (LP) {
            console.log(media)

            let foo = media.split("TVShows", 2)
            let newpath = `http://192.168.0.42:8082` + media
            console.log(newpath)
            TVlocalplayURL.set(newpath)
            visibleVOY = false
        } else {
            let promise = getPlayMedia(media).catch(err => console.log(err));
            visibleVOY = false
        }
    }

</script>

<button on:click={fuckVOY}>Voyager</button>

{#if visibleVoy}
    <nav>
        <button on:click={handleVOY1}>s1</button>
        <button on:click={handleVOY2}>s2</button>
        <button on:click={handleVOY3}>s3</button>
        <button on:click={handleVOY4}>s4</button>
        <button on:click={handleVOY5}>s5</button>
        <button on:click={handleVOY6}>s6</button>
        <button on:click={handleVOY7}>s7</button>
    </nav>

    <ul>
        {#if VOYshowlistcount > 0}
            {#each VOYshowlist as sshow }
                <li>
                    <a href="tvshows" on:click={handlePlayVOY(sshow.tvfspath)}>{sshow.title}</a>
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