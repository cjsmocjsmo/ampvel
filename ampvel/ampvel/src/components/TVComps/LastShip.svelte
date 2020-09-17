<script>
    import { TVlocalplayURL } from '../PlayerStore'
    export let LP;
    let LSshowlist;
    let LSshowlistcount;

    async function getLS(x) {
        let addr = `http://192.168.0.42:8888/intLastShip?season=${x}`
        fetch(addr, {mode: "cors", method: "GET"})
        .then(r => r.json())
        .then(data => {
            LSshowlist = data
            LSshowlistcount = data.length
        }).catch(err => console.log(err));
    }

    let handleLS1 = () => {
        let promise = getLS(`01`).catch(err => console.log(err));
    }

    let handleLS2 = () => {
        let promise = getLS(`02`).catch(err => console.log(err));
    }
    let handleLS3 = () => {
        let promise = getLS(`03`).catch(err => console.log(err));
    }
    let handleLS4 = () => {
        let promise = getLS(`04`).catch(err => console.log(err));
    }


    let visibleLS = false
    let fuckLS = () => {
        if (visibleLS) {
            visibleLS = false
        } else {
            visibleLS = true
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

    let handlePlayLS = (media) => {
        if (LP) {
            console.log(media)

            let foo = media.split("TVShows", 2)
            let newpath = `http://192.168.0.42:8082` + foo[1]
            console.log(newpath)
            TVlocalplayURL.set(newpath)
            visibleLS = false
        } else {
            let promise = getPlayMedia(media).catch(err => console.log(err));
            visibleLS = false
        }
    }

</script>

<button on:click={fuckLS} >The Last Ship</button>

{#if visibleLS}
    <nav>
        <button on:click={handleLS1}>s1</button>
        <button on:click={handleLS2}>s2</button>
        <button on:click={handleLS3}>s3</button>
        <button on:click={handleLS4}>s4</button>
    </nav>

    <ul>
        {#if LSshowlistcount > 0}
            {#each LSshowlist as sshow }
                <li>
                    <a href="tvshows" on:click={handlePlayLS(sshow.tvfspath)}>{sshow.title}</a>
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