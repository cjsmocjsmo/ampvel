<script>
	import { movhttp } from './PlayerStore.js'

    async function getNext() {
		fetch(`${movhttp}/Next`, {mode: "cors", method: "GET"})
		.then(r => r.json())
		.then(data => {
            console.log(data)
        }).catch(err => console.log(err));
	}
    let handleNextSubmit = () => {
        let promise = getNext().catch(err => console.log(err));
    }

	async function getStop() {
		fetch(`${movhttp}/Stop`, {mode: "cors", method: "GET"})
		.then(r => r.json())
		.then(data => {
            console.log(data)
        }).catch(err => console.log(err));
	}
    let handleStopSubmit = () => {
        let promise = getStop().catch(err => console.log(err));
	}
	
	let movhttp_value;
    const unsubampvel = movhttp_value.subscribe(value => {
      movhttp_value = value
    })


	async function getPrevious() {
		fetch(`${movhttp_value}/Previous`, {mode: "cors", method: "GET"})
		.then(r => r.json())
		.then(data => {
            console.log(data)
        }).catch(err => console.log(err));
	}
    let handlePreviousSubmit = () => {
        let promise = getPrevious().catch(err => console.log(err));
	}

	async function getPause() {
		fetch(`${movhttp_value}/Pause`, {mode: "cors", method: "GET"})
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
		fetch(`${movhttp_value}/Play`, {mode: "cors", method: "GET"})
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