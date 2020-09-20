<script>
    import { set_store_value } from "svelte/internal";
    import Discovery from '../components/TVComps/Discovery.svelte'
    import Enterprise from '../components/TVComps/Enterprise.svelte'
    import Orville from '../components/TVComps/Orville.svelte'
    import STTV from '../components/TVComps/STTV.svelte'
    import TNG from '../components/TVComps/TNG.svelte'
    import VOY from '../components/TVComps/Voyager.svelte'
    import LS from '../components/TVComps/LastShip.svelte'
    import LIS from '../components/TVComps/LostInSpace.svelte'
    import PICARD from '../components/TVComps/Picard.svelte'
    export let LOCALPLAY;
</script>

<nav>
    <Discovery LP={LOCALPLAY}/>
    <Enterprise LP={LOCALPLAY}/>
    <Orville LP={LOCALPLAY}/>
    <STTV LP={LOCALPLAY}/>
    <TNG LP={LOCALPLAY}/>
    <VOY LP={LOCALPLAY}/>
    <LS LP={LOCALPLAY}/>
    <LIS LP={LOCALPLAY} />
    <PICARD LP={LOCALPLAY} />
</nav>

<style>
    nav {
        text-align: center;
    }
</style>
