<script>
	import { movhttp } from './PlayerStore.js'
	
	let movhttp_value;
	const unsubampvel = movhttp.subscribe(value => {
      movhttp_value = value
	})
	const ADDR = "http://" + movhttp_value
	const NADDR = ADDR + "/Next"
	const SADDR = ADDR + "/Stop"
	const PREADDR = ADDR + "/Previous"
	const PADDR = ADDR + "/Pause"
	const PLAYADDR = ADDR + "/Play"

	
    async function getNext() {
		fetch(NADDR, {mode: "cors", method: "GET"})
		.then(r => r.json())
		.then(data => {
            console.log(data)
        }).catch(err => console.log(err));
	}
    let handleNextSubmit = () => {
        let promise = getNext().catch(err => console.log(err));
    }

	async function getStop() {
		fetch(SADDR, {mode: "cors", method: "GET"})
		.then(r => r.json())
		.then(data => {
            console.log(data)
        }).catch(err => console.log(err));
	}
    let handleStopSubmit = () => {
        let promise = getStop().catch(err => console.log(err));
	}

	async function getPrevious() {
		fetch(PREADDR, {mode: "cors", method: "GET"})
		.then(r => r.json())
		.then(data => {
            console.log(data)
        }).catch(err => console.log(err));
	}
    let handlePreviousSubmit = () => {
        let promise = getPrevious().catch(err => console.log(err));
	}

	async function getPause() {
		fetch(PADDR, {mode: "cors", method: "GET"})
		.then(r => r.json())
		.then(data => {
            console.log(data)
        }).catch(err => console.log(err));
	}
    let handlePauseSubmit = () => {
	    let promise = getPause().catch(err => console.log(err));
		fuck()
	}

	async function getPlay() {
		fetch(PLAYADDR, {mode: "cors", method: "GET"})
		.then(r => r.json())
		.then(data => {
            console.log(data)
        }).catch(err => console.log(err));
	}
    let handlePlaySubmit = () => {
	    let promise = getPlay().catch(err => console.log(err));
		fuck()
	}

	let visible = false;
    let fuck = () => {
        if (visible) {
            visible = false
        } else {
            visible = true
        }
	}
</script>

<nav>
	<ul>
		<button on:click={handlePreviousSubmit} >previous</button>
		{#if visible}
			<button on:click={handlePlaySubmit}>play</button>
		{:else}
			<button on:click={handlePauseSubmit}>pause</button>
		{/if}
		<button on:click={handleStopSubmit} >stop</button>
		<button on:click={handleNextSubmit} >next</button>
	</ul>
</nav>

<style>

	button {
		background-color: lawngreen;
		border-radius: 7px;
		border-color: black;
		padding: 7px;
		width: 24%;
		color: black;
	}

</style>