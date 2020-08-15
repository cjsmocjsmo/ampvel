<script>

    import AddRandomPlaylist from '../components/PlaylistComps/AddRandomPlaylist.svelte'
    import AddEmptyPlaylist from '../components/PlaylistComps/AddEmptyPlaylist.svelte'
    import PlaylistList from '../components/PlaylistList.svelte'
    // import html5AudioPlayer from '../components/html5AudioPlayer.svelte'
    import AudioPlayer from '../components/PlaylistComps/AudioPlayer.svelte'

</script>

<svelte:head><title>Playlists</title></svelte:head>

<!-- <audio controls ></audio> -->


<h2>Playlists</h2>

<AddRandomPlaylist />

<AddEmptyPlaylist />

<PlaylistList />

<AudioPlayer />
