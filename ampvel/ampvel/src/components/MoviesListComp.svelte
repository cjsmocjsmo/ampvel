<script>
    export let MYDATA = [];
    export let movLOCALPLAY
    import { localplayURL, omxaddr, movaddr } from './PlayerStore'

	async function getPlayMov(mov) {
		await fetch(`${omxaddr}/playMediaReact?movie=${mov}`, {mode: "cors", method: "GET"})
		.then(r => r.json())
		.then(data => {
            console.log(data)
		}).catch(err => console.log(err));
	}
	let handlegetMovClick = (x) => {
        if (movLOCALPLAY) {
            let foo = x.split("Movies", 2)
            let newpath = movaddr + foo[1]
            localplayURL.set(newpath)
            console.log(newpath)
        } else {
            let promise = getPlayMov(x).catch(err => console.log(err));
        }
	}

</script>

{#if MYDATA != ""}
    <nav>
        {#each MYDATA as mydat}
            <img on:click={handlegetMovClick(mydat[6])}  src={mydat[9]} alt={mydat[7]}/>
        {/each}
    </nav>
{/if}

<style>

    nav {
        text-align: center;
    }

    img {
        width: 130px;
        height: 195px;
        padding: 1px;
    }
    
</style>