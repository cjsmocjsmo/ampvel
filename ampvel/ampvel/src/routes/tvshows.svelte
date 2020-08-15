<script>
    import TVShows from '../components/TVShowsListComp.svelte'
    import Controls from '../components/Controls.svelte'
    import { TVlocalplayURL } from '../components/PlayerStore'
    
    let visible = false
    let visible3 = false

	let fuck = () => {
        if (visible) {
            visible = false
        } else {
            visible = true
        }
    }

    let fuck3 = () => {
        if (visible3) {
            visible3 = false
        } else {
            visible3 = true
        }
    }

    let TVlocalplayURL_value
	const unsubplid = TVlocalplayURL.subscribe(value => {
        TVlocalplayURL_value = value
    })

</script>

<svelte:head><title>TV Shows</title></svelte:head>

{#if visible3}
    <div id="vid2">
        <!-- "http://192.168.0.42:8081/Action/12 Strong (2018).mp4" -->
        <video src={TVlocalplayURL_value} controls autoplay></video>
    </div>
{/if}

<input type="checkbox" bind:checked={visible3} value="fuck">
<lable>localplay</lable>

{#if !visible3}
    <Controls />
    <!-- <button class="controller" on:click={fuck} >controls</button> -->
{/if}

<TVShows LOCALPLAY={visible3} />

<style>

    #vid2 {
        text-align: center;
    }

    video {
        width: 85%;
    }

</style>