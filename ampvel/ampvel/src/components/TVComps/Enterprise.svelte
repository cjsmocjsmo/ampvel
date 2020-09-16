<script>
    import { TVlocalplayURL } from '../PlayerStore'
    export let LP;
    let Entshowlist;
    let Entshowlistcount;
    let visibleEnt = false

    async function getEnterprise(x) {
        let addr = `http://192.168.0.42:8888/intEnterprise?season=${x}`
        fetch(addr, {mode: "cors", method: "GET"})
        .then(r => r.json())
        .then(data => {
            Entshowlist = data
            Entshowlistcount = data.length
        }).catch(err => console.log(err));
    }

    let handleEnterprise1 = () => {
        let promise = getEnterprise(`01`).catch(err => console.log(err));
    }

    let handleEnterprise2 = () => {
        let promise = getEnterprise(`02`).catch(err => console.log(err));
    }
    let handleEnterprise3 = () => {
        let promise = getEnterprise(`03`).catch(err => console.log(err));
    }
    let handleEnterprise4 = () => {
        let promise = getEnterprise(`04`).catch(err => console.log(err));
    }

    let fuckEnt = () => {
        if (visibleEnt) {
            visibleEnt = false
        } else {
            visibleEnt = true
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

    let handlePlayShow = (media) => {
        if (LP) {
            console.log("this is media")
            console.log(media)

            // let foo = media.split("TVShows", 2)
            let newpath = `http://192.168.0.42:8082` + "/" + media
            console.log("this is newpath")
            console.log(newpath)
            TVlocalplayURL.set(newpath)
            visibleEnt = false
        } else {
            let promise = getPlayMedia(media).catch(err => console.log(err));
            visibleEnt = false
        }
    }

</script>

<button on:click={fuckEnt} >Enterprise</button>

{#if visibleEnt}
    <nav>
        <button on:click={handleEnterprise1}>s1</button>
        <button on:click={handleEnterprise2}>s2</button>
        <button on:click={handleEnterprise3}>s3</button>
        <button on:click={handleEnterprise4}>s4</button>
    </nav>

    <ul>
        {#if Entshowlistcount > 0}
            {#each Entshowlist as sshow }
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