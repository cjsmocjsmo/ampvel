<script>
	import MoviesListComp from '../components/MoviesListComp.svelte'
	import Controls from '../components/Controls.svelte'
	import {localplayURL} from '../components/PlayerStore'

	
	let NewDat;
	async function getMovies(x) {
		await fetch(`http://192.168.0.42:8888/${x}`, {mode: "cors", method: "GET"})
		.then(r => r.json())
		.then(data => {
			// console.log(data)
			NewDat = data.map(da => {
				// console.log(da.movname)
				const carosthumb = da.carosthumb
				const catagory = da.catagory
				const dirpath = da.dirpath
				const filepath = da.filepath
				const genre = da.genre
				const mediaid = da.mediaid
				const movfspath = da.movfspath
				const movname = da.movname
				const movyear = da.movyear
				console.log(da.thumbpath)
				const addr = "http://192.168.0.42:8888/"
				let np = da.thumbpath.split("/")
				let newpath =  np[1] + "/" + np[2]
				const thumbpath = addr + newpath
				console.log(thumbpath)

				return [carosthumb, catagory, dirpath, filepath, genre, mediaid, movfspath, movname, movyear, thumbpath]
			})
		}).catch(err => console.log(err));
	}

	let handleActionClick = () => {
		let movs = "intAction"
		let promise = getMovies(movs).catch(err => console.log(err));
	}

	let handleCartoonsClick = () => {
		let movs = "intCartoons"
		let promise = getMovies(movs).catch(err => console.log(err));
	}

	let handleComedyClick = () => {
		let movs = "intComedy"
		let promise = getMovies(movs).catch(err => console.log(err));
	}

	let handleDramaClick = () => {
		let movs = "intDrama"
		let promise = getMovies(movs).catch(err => console.log(err));
	}

	let handleSciFiClick = () => {
		let movs = "intSciFi"
		let promise = getMovies(movs).catch(err => console.log(err));
	}

	let handleMiscClick = () => {
		let movs = "intMisc"
		let promise = getMovies(movs).catch(err => console.log(err));
	}

	let handleDieHardClick = () => {
		let movs = "intDieHard"
		let promise = getMovies(movs).catch(err => console.log(err));
	}

	let handleGodzillaClick = () => {
		let movs = "intGodzilla"
		let promise = getMovies(movs).catch(err => console.log(err));
	}

	let handleHarryPotterClick = () => {
		let movs = "intHarryPotter"
		let promise = getMovies(movs).catch(err => console.log(err));
	}

	let handleIndianaJonesClick = () => {
		let movs = "intIndianaJones"
		let promise = getMovies(movs).catch(err => console.log(err));
	}

	let handleJohnWayneClick = () => {
		let movs = "intJohnWayne"
		let promise = getMovies(movs).catch(err => console.log(err));
	}

	let handleJohnWickClick = () => {
		let movs = "intJohnWick"
		let promise = getMovies(movs).catch(err => console.log(err));
	}

	let handleKingsMenClick = () => {
		let movs = "intKingsMan"
		let promise = getMovies(movs).catch(err => console.log(err));
	}

	let handlePiratesClick = () => {
		let movs = "intPirates"
		let promise = getMovies(movs).catch(err => console.log(err));
	}

	let handleStarTrekClick = () => {
		let movs = "intStarTrek"
		let promise = getMovies(movs).catch(err => console.log(err));
	}

	let handleStarWarsClick = () => {
		let movs = "intStarWars"
		let promise = getMovies(movs).catch(err => console.log(err));
	}

	let handleSuperHerosClick = () => {
		let movs = "intSuperHeros"
		let promise = getMovies(movs).catch(err => console.log(err));
	}

	let handleTremorsClick = () => {
		let movs = "intTremors"
		let promise = getMovies(movs).catch(err => console.log(err));
	}

	let handleMenInBlackClick = () => {
		let movs = "intMenInBlack"
		let promise = getMovies(movs).catch(err => console.log(err));
	}

	let handleJurassicParkClick = () => {
		let movs = "intJurassicPark"
		let promise = getMovies(movs).catch(err => console.log(err));
	}

	let handleFantasyClick = () => {
		let movs = "intFantasy"
		let promise = getMovies(movs).catch(err => console.log(err));
	}

	let visible = false
	let fuck = () => {
        if (visible) {
			visible = false
        } else {
            visible = true
        }
	}

	let localplayURL_value
	const unsubplid = localplayURL.subscribe(value => {
        localplayURL_value = value
    })
</script>

<svelte:head><title>Movies</title></svelte:head>

<input type="checkbox" bind:checked={visible} value="fuck">
<lable>localplay</lable>
<span></span>
{#if visible}
	<div id="vid1">
		<video controls autoplay src={localplayURL_value}></video>
		<!-- <video controls src={localplayURL_value}></video> -->
	</div>
{:else}
	<Controls />
{/if}

<nav>
	<ul>
		<button on:click={handleActionClick}>Action</button>
		<button on:click={handleCartoonsClick}>Cartoons</button>
		<button on:click={handleComedyClick}>Comedy</button>
		<button on:click={handleDramaClick}>Drama</button>

		<button on:click={handleFantasyClick}>Fantasy</button>


		<button on:click={handleSciFiClick}>SciFi</button>
		<button on:click={handleMiscClick}>Misc</button>
		<button on:click={handleDieHardClick}>Die Hard</button>
		<button on:click={handleGodzillaClick}>Godzilla</button>
		<button on:click={handleHarryPotterClick}>Harry Potter</button>
		<button on:click={handleIndianaJonesClick}>Indiana Jones</button>
		<button on:click={handleJohnWayneClick}>John Wayne</button>
		<button on:click={handleJohnWickClick}>John Wick</button>
		<button on:click={handleJurassicParkClick}>Jurassic Park</button>
		<button on:click={handleKingsMenClick}>KingsMen</button>
		<button on:click={handlePiratesClick}>Pirates</button>
		<button on:click={handleStarTrekClick}>Star Trek</button>
		<button on:click={handleStarWarsClick}>Star Wars</button>
		<button on:click={handleSuperHerosClick}>Super Heros</button>
		<button on:click={handleTremorsClick}>Tremors</button>
		<button on:click={handleMenInBlackClick}>Men In Black</button>
	</ul>
</nav>

<MoviesListComp movLOCALPLAY={visible}  MYDATA={NewDat}/>

<style>

	lable, input {
		margin-bottom: 25px;
	}

	video {
		width: 85%;
	}
	
	div#vid1 {
		text-align: center;
		
	}

</style>