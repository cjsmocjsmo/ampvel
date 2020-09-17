<script>
    import { TVlocalplayURL } from '../PlayerStore'
    export let LP;
    let TNGshowlist;
    let TNGshowlistcount;
    let visibleTNG = false

    async function getTNG(x) {
        let addr = `http://192.168.0.42:8888/intTNG?season=${x}`
        fetch(addr, {mode: "cors", method: "GET"})
        .then(r => r.json())
        .then(data => {
            TNGshowlist = data
            TNGshowlistcount = data.length
        }).catch(err => console.log(err));
    }

    let handleTNG1 = () => {
        let promise = getTNG(`01`).catch(err => console.log(err));
    }

    let handleTNG2 = () => {
        let promise = getTNG(`02`).catch(err => console.log(err));
    }
    let handleTNG3 = () => {
        let promise = getTNG(`03`).catch(err => console.log(err));
    }
    let handleTNG4 = () => {
        let promise = getTNG(`04`).catch(err => console.log(err));
    }

    let handleTNG5 = () => {
        let promise = getTNG(`05`).catch(err => console.log(err));
    }

    let handleTNG6 = () => {
        let promise = getTNG(`06`).catch(err => console.log(err));
    }

    let handleTNG7 = () => {
        let promise = getTNG(`07`).catch(err => console.log(err));
    }

    let fuckTNG = () => {
        if (visibleTNG) {
            visibleTNG = false
        } else {
            visibleTNG = true
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

    let handlePlayTNG = (media) => {
        if (LP) {
            console.log(media)

            let foo = media.split("TVShows", 2)
            let newpath = `http://192.168.0.42:8082` + media
            console.log(newpath)
            TVlocalplayURL.set(newpath)
            visibleTNG = false
        } else {
            let promise = getPlayMedia(media).catch(err => console.log(err));
            visibleTNG = false
        }
    }

</script>

<button on:click={fuckTNG}>The Next Generation</button>

{#if visibleTNG}
    <nav>
        <button on:click={handleTNG1}>s1</button>
        <button on:click={handleTNG2}>s2</button>
        <button on:click={handleTNG3}>s3</button>
        <button on:click={handleTNG4}>s4</button>
        <button on:click={handleTNG5}>s5</button>
        <button on:click={handleTNG6}>s6</button>
        <button on:click={handleTNG7}>s7</button>
    </nav>

    <ul>
        {#if TNGshowlistcount > 0}
            {#each TNGshowlist as sshow }
                <li>
                    <a href="tvshows" on:click={handlePlayTNG(sshow.tvfspath)}>{sshow.title}</a>
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