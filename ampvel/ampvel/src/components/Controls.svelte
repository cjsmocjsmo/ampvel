<script>
	
    async function getNext() {
		fetch(`http://192.168.0.42:8181/Next`, {mode: "cors", method: "GET"})
		.then(r => r.json())
		.then(data => {
            console.log(data)
        }).catch(err => console.log(err));
	}
    let handleNextSubmit = () => {
        let promise = getNext().catch(err => console.log(err));
    }

	async function getStop() {
		fetch(`http://192.168.0.42:8181/Stop`, {mode: "cors", method: "GET"})
		.then(r => r.json())
		.then(data => {
            console.log(data)
        }).catch(err => console.log(err));
	}
    let handleStopSubmit = () => {
        let promise = getStop().catch(err => console.log(err));
	}
	
	async function getPrevious() {
		fetch(`http://192.168.0.42:8181/Previous`, {mode: "cors", method: "GET"})
		.then(r => r.json())
		.then(data => {
            console.log(data)
        }).catch(err => console.log(err));
	}
    let handlePreviousSubmit = () => {
        let promise = getPrevious().catch(err => console.log(err));
	}

	async function getPause() {
		fetch(`http://192.168.0.42:8181/Pause`, {mode: "cors", method: "GET"})
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
		fetch(`http://192.168.0.42:8181/Play`, {mode: "cors", method: "GET"})
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