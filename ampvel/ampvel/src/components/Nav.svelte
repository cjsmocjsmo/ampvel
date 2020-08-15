<script>
	// export let segment;
</script>

<style>
	nav {
		border-bottom: 1px solid rgba(255,62,0,0.1);
		font-weight: 300;
		padding: 0 1em;
	}

	ul {
		margin: 0;
		padding: 0;
	}

	/* clearfix */
	ul::after {
		content: '';
		display: block;
		clear: both;
	}

	li {
		display: block;
		float: left;
	}
	
	a {
		text-decoration: none;
		padding: 1em 0.5em;
		display: block;
		color: white;
	}
	/* .foo {
		color: lawngreen;
	} */

</style>

<nav>
	<ul>
		<li><a href=".">home</a></li>
		<li><a href="movies">movies</a></li>
		<li><a href="tvshows">tvshows</a></li>
		<li><a href="artists">artists</a></li>
		<li><a href="albums">albums</a></li>
		<li><a  href="songs">songs</a></li>
		<li><a href="playlists">playlists</a></li>
		<!-- <li><a class="foo" href="http://192.168.0.42:4566/">YTS-EZTV</a></li>
		<li><a class="foo" href="http://192.168.0.42:8081/">ReGoMo</a></li> -->
	</ul>
</nav>
