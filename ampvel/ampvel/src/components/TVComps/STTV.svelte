<script>
    import { TVlocalplayURL } from '../PlayerStore'
    export let LP;
    let showlist;
    let showlistcount;
    let visibleDis = false

    async function getSTTV(x) {
        let addr = `http://192.168.0.42:8888/intSTTV?season=${x}`
        fetch(addr, {mode: "cors", method: "GET"})
        .then(r => r.json())
        .then(data => {
            showlist = data
            showlistcount = data.length
        }).catch(err => console.log(err));
    }

    let handleSTTVClick1 = () => {
        let promise = getSTTV(`01`).catch(err => console.log(err));
    }

    let handleSTTVClick2 = () => {
        let promise = getSTTV(`02`).catch(err => console.log(err));
    }
    let handleSTTVClick3 = () => {
        let promise = getSTTV(`03`).catch(err => console.log(err));
    }

    let fuckDis = () => {
        if (visibleDis) {
            visibleDis = false
        } else {
            visibleDis = true
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

    let handlePlayShowSTTV = (media) => {
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

<button on:click={fuckDis} >STTV</button>

{#if visibleDis}
    <nav>
        <button on:click={handleSTTVClick1}>s1</button>
        <button on:click={handleSTTVClick2}>s2</button>
        <button on:click={handleSTTVClick3}>s3</button>
    </nav>

    <ul>
        {#if showlistcount > 0}
            {#each showlist as sshow }
                <li>
                    <a href="tvshows" on:click={handlePlayShowSTTV(sshow.movfspath)}>{sshow.title}</a>
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