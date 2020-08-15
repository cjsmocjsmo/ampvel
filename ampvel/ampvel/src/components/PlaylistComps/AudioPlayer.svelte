<script>
    // // HTML5 audio player + playlist controls
    let jsPlayer = document.querySelector('.player-wrap');
    if (jsPlayer) {
        jsPlayer = {
            wrap: jsPlayer,
            player: (jsPlayer.querySelector('audio') ),
    //         player: (jsPlayer.querySelector('audio') || { play: function(){}, pause: function(){} }),

    //         play: (jsPlayer.querySelector('.play') || {}),
    //         pause: (jsPlayer.querySelector('.pause') || {}),
    //         seek: (jsPlayer.querySelector('.seek') || {}),
    //         prev: (jsPlayer.querySelector('.prev') || {}),
            next: (jsPlayer.querySelector('.next') || {}),
    //         button: (jsPlayer.querySelector('.button') || { style: {} }),
    //         wrapList: (document.querySelector('.playlist-wrap') || {}),
    //         action: (jsPlayer.querySelector('.action') || {}),
    //         title: (jsPlayer.querySelector('.title') || {}),
    //         current: (jsPlayer.querySelector('.current') || {}),
    //         duration: (jsPlayer.querySelector('.duration') || {}),
            trackCount: 0,
    //     seeking: null,
            playing: false,
            tracks: [],
            track: [],
            idx: 0
        };

    //     jsPlayer.playClicked = function jsPlayerPlayClicked(){
    //         jsPlayer.button.style.visibility = 'hidden';
    //         jsPlayer.pause.style.display = 'block';
    //         jsPlayer.play.style.display = 'none';
    //         jsPlayer.playing = true;
    //         jsPlayer.action.innerHTML = 'Now Playing&hellip;';
    //         jsPlayer.player.play();
    //         jsPlayer.updateSeek();
    //     };
    //     jsPlayer.pauseClicked = function jsPlayerPauseClicked(){
    //         jsPlayer.play.style.display = 'block';
    //         jsPlayer.pause.style.display = 'none';
    //         clearTimeout(jsPlayer.seeking);
    //         jsPlayer.playing = false;
    //         jsPlayer.action.innerHTML = 'Paused&hellip;';
    //         jsPlayer.player.pause();
    //     };
    //     jsPlayer.loadPlaylist = function jaPlayerLoadPlaylist(){
    //         jsPlayer.playlist = jsPlayer.wrapList? jsPlayer.wrapList.querySelectorAll('ol > li') : [];
    //         var len = jsPlayer.playlist.length,
    //             tmp, i;
    //         for (i = 0; i < len; i++) {
    //             if (!jsPlayer.playlist[i].dataset) {
    //                 jsPlayer.playlist[i].dataset = {};
    //             }
    //             tmp = jsPlayer.playlist[i].querySelector('a');
    //             if (tmp && !jsPlayer.playlist[i].dataset.idx) {
    //                 jsPlayer.playlist[i].dataset.idx = i + 1;
    //                 jsPlayer.trackCount++;
    //                 jsPlayer.tracks.push({
    //                     "file": tmp.href,
    //                     "name": (tmp.textContent || tmp.innerText).replace(/^\s+|\s+$/g, ''),
    //                     "track": i + 1
    //                 });
    //             }
    //         }
    //     };
    //     jsPlayer.loadTrack = function jsPlayerLoadTrack(idx){
    //         var len = jsPlayer.playlist.length,
    //             i;
    //         for (i=0; i < len; i++) {
    //             if (jsPlayer.playlist[i].classList) {
    //                 if (i === idx) {
    //                     jsPlayer.playlist[i].classList.add('sel');
    //                 } else {
    //                     jsPlayer.playlist[i].classList.remove('sel');
    //                 }
    //             }
    //         }
    //         jsPlayer.title.innerHTML = jsPlayer.tracks[idx].name;
    //         jsPlayer.player.src = jsPlayer.tracks[idx].file + '.mp3';
    //     };
    //     jsPlayer.playTrack = function jsPlayerPlayTrack(idx){
    //         jsPlayer.loadTrack(idx);
    //         jsPlayer.playing = true;
    //         jsPlayer.playClicked();
    //     };
        jsPlayer.init = function jsPlayerInit(){
            var track = (jsPlayer.wrap && jsPlayer.wrap.dataset && jsPlayer.wrap.dataset.url)? jsPlayer.wrap : null,
                tmp, i;
    //         if (!!document.createElement('audio').canPlayType('audio/mpeg')) {
    //             if (jsPlayer.wrapList && jsPlayer.wrapList.querySelectorAll('ol > li').length > 0) {
    //                 jsPlayer.loadPlaylist();
    //             } else if (track) {
    //                 jsPlayer.tracks = [{
    //                     "file": track.dataset.url,
    //                     "name": (track.dataset.title || ''),
    //                     "track": 1
    //                 }];
    //             }
    //             if (jsPlayer.tracks.length > 0) {
    //                 if (jsPlayer.player) {
    //                     jsPlayer.player.addEventListener('ended', function playerEnded(){
    //                         if (jsPlayer.idx + 1 < jsPlayer.trackCount) {
    //                             jsPlayer.idx++;
    //                             jsPlayer.playTrack(jsPlayer.idx);
    //                         } else {
    //                             jsPlayer.action.innerHTML = 'Paused&hellip;';
    //                             jsPlayer.player.pause();
    //                             jsPlayer.idx = 0;
    //                             jsPlayer.loadTrack(jsPlayer.idx);
    //                         }
    //                     }, true);
    //                     jsPlayer.player.addEventListener('loadeddata', function playerLoadeddata(){
    //                         jsPlayer.setDuration();
    //                     }, true);
    //                 }
    //                 if (jsPlayer.play) {
    //                     jsPlayer.play.addEventListener('click', jsPlayer.playClicked, true);
    //                 }
    //                 if (jsPlayer.pause) {
    //                     jsPlayer.pause.addEventListener('click', jsPlayer.pauseClicked, true);
    //                 }
    //                 if (jsPlayer.button) {
    //                     jsPlayer.button.addEventListener('click', function buttonClicked(event){
    //                         event.preventDefault();
    //                         jsPlayer.playClicked();
    //                     }, true);
    //                 }
    //                 if (jsPlayer.prev) {
    //                     jsPlayer.prev.addEventListener('click', function prevClicked(event){
    //                         event.preventDefault();
    //                         if (jsPlayer.idx - 1 > -1) {
    //                             jsPlayer.idx--;
    //                             jsPlayer.loadTrack(jsPlayer.idx);
    //                             if (jsPlayer.playing) {
    //                                 jsPlayer.action.innerHTML = 'Now Playing&hellip;';
    //                                 jsPlayer.player.play();
    //                             }
    //                         } else {
    //                             jsPlayer.action.innerHTML = 'Paused&hellip;';
    //                             jsPlayer.playing = false;
    //                             jsPlayer.player.pause();
    //                             jsPlayer.idx = 0;
    //                             jsPlayer.loadTrack(jsPlayer.idx);
    //                         }
    //                     }, true);
    //                 }
    //                 if (jsPlayer.next) {
    //                     jsPlayer.next.addEventListener('click', function nextClicked(event){
    //                         event.preventDefault();
    //                         if (jsPlayer.idx + 1 < jsPlayer.trackCount) {
    //                             jsPlayer.idx++;
    //                             jsPlayer.loadTrack(jsPlayer.idx);
    //                             if (jsPlayer.playing) {
    //                                 jsPlayer.action.innerHTML = 'Now Playing&hellip;';
    //                                 jsPlayer.player.play();
    //                             }
    //                         } else {
    //                             jsPlayer.action.innerHTML = 'Paused&hellip;';
    //                             jsPlayer.playing = false;
    //                             jsPlayer.player.pause();
    //                             jsPlayer.idx = 0;
    //                             jsPlayer.loadTrack(jsPlayer.idx);
    //                         }
    //                     }, true);
    //                 }
    //                 if (jsPlayer.seek) {
    //                     jsPlayer.seek.addEventListener('mousedown', function seekClicked(){
    //                         clearTimeout(jsPlayer.seeking);
    //                         jsPlayer.action.innerHTML = 'Paused&hellip;';
    //                         jsPlayer.player.pause();
    //                     }, true);
    //                     jsPlayer.seek.addEventListener('mouseup', function seekReleased(){
    //                         jsPlayer.player.currentTime = jsPlayer.seek.value * jsPlayer.player.duration / 100;
    //                         jsPlayer.updateSeek();
    //                         if (jsPlayer.playing) {
    //                             jsPlayer.action.innerHTML = 'Now Playing&hellip;';
    //                             jsPlayer.player.play();
    //                         }
    //                     }, true);
    //                 }
    //                 if (jsPlayer.wrapList) {
    //                     jsPlayer.wrapList.addEventListener('click', function listClicked(event){
    //                         var parent = event.target.parentNode;
    //                         if (parent.parentNode.tagName.toLowerCase() === 'ol') {
    //                             event.preventDefault();
    //                             var len = jsPlayer.playlist.length,
    //                             i;
    //                             for (i = 0; i < len; i++) {
    //                                 if (parent.dataset.idx == i + 1) {
    //                                     jsPlayer.idx = i;
    //                                     jsPlayer.playTrack(jsPlayer.idx);
    //                                     i = len;
    //                                 }
    //                             }
    //                         }
    //                     }, true);
    //                 }
    //                 jsPlayer.setDuration = function setDuration() {
    //                     jsPlayer.duration.innerHTML = jsPlayer.formatTime(jsPlayer.player.duration);
    //                     jsPlayer.current.innerHTML = jsPlayer.formatTime(jsPlayer.player.currentTime);
    //                     jsPlayer.seek.value = jsPlayer.player.currentTime / jsPlayer.player.duration;
    //                 };
    //                 jsPlayer.updateSeek = function updateSeek() {
    //                     jsPlayer.seek.value = 100 * jsPlayer.player.currentTime / jsPlayer.player.duration;
    //                     jsPlayer.current.innerHTML = jsPlayer.formatTime(jsPlayer.player.currentTime);
    //                     if (jsPlayer.playing) {
    //                         jsPlayer.seeking = setTimeout(jsPlayer.updateSeek, 500);
    //                     }
    //                 };
    //                 jsPlayer.formatTime = function formatTime(val) {
    //                     var h = 0, m = 0, s;
    //                     val = parseInt(val, 10);
    //                     if (val > 60 * 60) {
    //                         h = parseInt(val / (60 * 60), 10);
    //                         val -= h * 60 * 60;
    //                     }
    //                     if (val > 60) {
    //                         m = parseInt(val / 60, 10);
    //                         val -= m * 60;
    //                     }
    //                     s = val;
    //                     val = (h > 0)? h + ':' : '';
    //                     val += (m > 0)? ((m < 10 && h > 0)? '0' : '') + m + ':' : '0:';
    //                     val += ((s < 10)? '0' : '') + s;
    //                     return val;
    //                 };
    //             }
    //         }
    //         if (jsPlayer.tracks.length > 0) {
    //             jsPlayer.wrap.className += ' enabled';
    //             jsPlayer.loadTrack(jsPlayer.idx);
    //         }
        };
        jsPlayer.init();
    }

</script>



<!-- <div class="page"> -->
    <!-- <audio src="boo1.mp3" controls ></audio> -->
	<!-- <div class="player-wrap" data-url="" data-title="Boo1">
            <audio controls ></audio>
            <div class="button">Play</div>

        
    </div> -->
        <!-- <div class="info"> -->
            <!-- <h1>Album: Mythium</h1> -->
            <!-- <p class="action">&nbsp;</p>
            <p class="title ellipsis"></p> -->

            <!-- <audio src="" controls ></audio> -->
            
            <!-- <div class="player">
                <audio preload controls ></audio> -->
                <!-- <div class="playpause">
                    <div class="play"><svg viewBox="0 0 2 2"><path d="M0,0 L0,14 L11,7 L0,0 Z"/></svg></div>
                    <div class="pause"><svg viewBox="0 0 14 14"><path d="M0,14 L4,14 L4,0 L0,0 L0,14 L0,14 Z M8,0 L8,14 L12,14 L12,0 L8,0 L8,0 Z"/></svg></div>
                </div> -->
                <!-- <div class="timer">
                    <div class="current">0:00:00</div>
                    <div>/</div>
                    <div class="duration">0:00:00</div>
                </div> -->
                <!-- <div><input type="range" min="0" max="100" step=".1" value="0" class="seek"></div> -->
                <!-- <div class="prev"><svg viewBox="0 0 12 12"><path d="M3.5,6 L12,12 L12,0 L3.5,6 Z M0,0 L0,12 L2,12 L2,0 L0,0 L0,0 Z"/></svg></div>
                <div class="next"><svg viewBox="0 0 12 12"><path d="M0,12 L8.5,6 L0,0 L0,12 L0,12 Z M10,0 L10,12 L12,12 L12,0 L10,0 L10,0 Z"/></svg></div> -->
            <!-- </div> -->
        <!-- </div> -->
    <!-- </div> -->

<div class="player-wrap" data-url="boo1.mp3" data-title="Boo1" >
    <audio src="" controls ></audio>
</div>


<div>
	<div class="playlist-wrap">
		<ol>
			<li><a href="boo1.mp3">Boo1</a></li>
			<li><a href="boo2.mp3">Boo2</a></li>
			<!-- <li><a href="//archive.org/download/mythium/BS_ATKM">All The King's Men - Broadwing Studio (Final Mix)</a></li>
			<li><a href="//archive.org/download/mythium/BSFM_TF">The Forsaken - Broadwing Studio (First Mix)</a></li>
			<li><a href="//archive.org/download/mythium/BSFM_ATKM">All The King's Men - Broadwing Studio (First Mix)</a></li>
			<li><a href="//archive.org/download/mythium/AC_ATI">All This Is - Alternate Cuts</a></li>
			<li><a href="//archive.org/download/mythium/AC_ATKMTake_1">All The King's Men (Take 1) - Alternate Cuts</a></li>
			<li><a href="//archive.org/download/mythium/AC_ATKMTake_2">All The King's Men (Take 2) - Alternate Cuts</a></li>
			<li><a href="//archive.org/download/mythium/AC_M">Magus - Alternate Cuts</a></li>
			<li><a href="//archive.org/download/mythium/AC_TSOWAfucked_up">The State Of Wearing Address (fucked up) - Alternate Cuts</a></li>
			<li><a href="//archive.org/download/mythium/PNY04-05_M">Magus - Popeye's (New Years '04 - '05)</a></li>
			<li><a href="//archive.org/download/mythium/PNY04-05_OTW">On The Waterfront - Popeye's (New Years '04 - '05)</a></li>
			<li><a href="//archive.org/download/mythium/PNY04-05_T">Trance - Popeye's (New Years '04 - '05)</a></li>
			<li><a href="//archive.org/download/mythium/PNY04-05_TF">The Forsaken - Popeye's (New Years '04 - '05)</a></li>
			<li><a href="//archive.org/download/mythium/PNY04-05_TSOWA">The State Of Wearing Address - Popeye's (New Years '04 - '05)</a></li>
			<li><a href="//archive.org/download/mythium/PVD_M">Magus - Popeye's (Valentine's Day '05)</a></li>
			<li><a href="//archive.org/download/mythium/PVD_T">Trance - Popeye's (Valentine's Day '05)</a></li>
			<li><a href="//archive.org/download/mythium/PVD_TSOWA">The State Of Wearing Address - Popeye's (Valentine's Day '05)</a></li>
			<li><a href="//archive.org/download/mythium/SSB01_08_04_ATI">All This Is - Smith St. Basement (01/08/04)</a></li>
			<li><a href="//archive.org/download/mythium/SSB01_08_04_M">Magus - Smith St. Basement (01/08/04)</a></li>
			<li><a href="//archive.org/download/mythium/SSB06_06_03_BTPE">Beneath The Painted Eye - Smith St. Basement (06/06/03)</a></li>
			<li><a href="//archive.org/download/mythium/SSB06_06_03_I">Innocence - Smith St. Basement (06/06/03)</a></li>
			<li><a href="//archive.org/download/mythium/SSB06_06_03_M">Magus - Smith St. Basement (06/06/03)</a></li>
			<li><a href="//archive.org/download/mythium/SSB06_06_03_ME">Madness Explored - Smith St. Basement (06/06/03)</a></li>
			<li><a href="//archive.org/download/mythium/SSB06_06_03_TF">The Forsaken - Smith St. Basement (06/06/03)</a></li>
			<li><a href="//archive.org/download/mythium/SSB12_28_03_ATI">All This Is - Smith St. Basement (12/28/03)</a></li>
			<li><a href="//archive.org/download/mythium/SSB12_28_03_M">Magus - Smith St. Basement (12/28/03)</a></li>
			<li><a href="//archive.org/download/mythium/SSB12_28_03_ME">Madness Explored - Smith St. Basement (12/28/03)</a></li>
			<li><a href="//archive.org/download/mythium/SSB12_28_03_T">Trance - Smith St. Basement (12/28/03)</a></li>
			<li><a href="//archive.org/download/mythium/SSB12_28_03_TF">The Forsaken - Smith St. Basement (12/28/03)</a></li>
			<li><a href="//archive.org/download/mythium/SSB___11_03_ATITake_1">All This Is (Take 1) - Smith St. Basement (Nov. '03)</a></li>
			<li><a href="//archive.org/download/mythium/SSB___11_03_ATITake_2">All This Is (Take 2) - Smith St. Basement (Nov. '03)</a></li>
			<li><a href="//archive.org/download/mythium/SSB___11_03_BTPETake_1">Beneath The Painted Eye (Take 1) - Smith St. Basement (Nov. '03)</a></li>
			<li><a href="//archive.org/download/mythium/SSB___11_03_BTPETake_2">Beneath The Painted Eye (Take 2) - Smith St. Basement (Nov. '03)</a></li>
			<li><a href="//archive.org/download/mythium/SSB___11_03_TFTake_1">The Forsaken (Take 1) - Smith St. Basement (Nov. '03)</a></li>
			<li><a href="//archive.org/download/mythium/SSB___11_03_TFTake_2">The Forsaken (Take 2) - Smith St. Basement (Nov. '03)</a></li> -->
		</ol>
	</div>
</div>

<style>
    /* >> reset */
    /* html, body, div, span, h1, p, a, ol, li, audio {
        border: 0;
        font: inherit;
        font-size: 100%;
        margin: 0;
        padding: 0;
        vertical-align: baseline;
    } */
    ol {
        list-style: none;
        margin: 0;
        padding: 0;
    }
    ol li {
        margin: 0;
        list-style: decimal outside;
    }
    * {
        -webkit-tap-highlight-color: rgba(0,0,0,0);
        -webkit-tap-highlight-color: transparent;
    }
    /* html, body {
        margin: 0;
        padding: 0;
        height: 100%;
    } */
    /* body {
        padding: 5px 0;
        background: #111 none;
        font: 20px/24px 'Helvetica', 'Arial', sans-serif;
        color: #eee;
    } */
    /* a, a:focus, a:active, a:hover, a:visited {
        text-decoration: none;
    }
    a[href], a[href]:active, a[href]:visited {
        color: #ddd;
        outline: 0 none;
        text-decoration: underline;
    }
    a[href]:hover, a[href]:focus {
        color: #bbb;
    } */
    /* << reset */

    /* page style */
    /* .page {
        position: relative;
        margin: 0 auto;
        width: 70%;
        min-width: 300px;
        max-width: 700px;
    } */
    /* .ellipsis {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    } */

    /* Audio Player */
    .player-wrap {
        /* position: relative; */
        margin: 0 0 1em;
        padding: 0;
        background-color: white;
        /* background-color: #222; */
    }
    /* .player-wrap.enabled {
        padding-bottom: 4em;
    }
    .player-wrap .button {
        float: left;
        display: none;
        margin: 1.5em 2em;
        width: 5em;
        height: 5em;
        background-color: #333;
        background-color: purple;
        line-height: 5em;
        text-align: center;
        border-radius: 25%;
        color: white;
    } */
    /* .player-wrap .button:hover {
    background-color: purple;
        cursor: pointer;
    }
    .player-wrap.enabled .button {
        display: block;
    }
    .player-wrap .info {
        margin-left: 10em;
    }
    .player-wrap h1 {
        padding: 1.5em 0;
    }
    .player-wrap .action {
        font-style: italic;
    } */
    /* .player-wrap .player {
        position: absolute;
    display: none;
        left: 0;
        bottom: 0;
        padding: 0 1em 0 6em;
        width: 100%;
        height: 1em;
        background-color: #333;
        font-size: 2em;
        box-sizing: border-box;
    }
    .player-wrap.enabled .player {
        display: block;
    }
    .player-wrap .player svg {
        margin: .25em;
        width: .5em;
        height: .5em;
        fill: currentColor;
    } */
    /* .player-wrap .player div {
        display: block;
        height: 1em;
    }
    .player-wrap audio,
    .player-wrap .player .pause {
        display: none;
    }
    .player-wrap .playpause, .player-wrap .timer,
    .player-wrap .prev, .player-wrap .next {
        position: absolute;
        left: 0;
        bottom: 0;
        display: block;
        height: 1em;
        line-height: 1em;
        text-align: center;
    } */
    /* .player-wrap .playpause,
    .player-wrap .prev, .player-wrap .next {
        width: 1em;
        cursor: pointer;
    }
    .player-wrap .playpause {
        left: 1em;
    }
    .player-wrap .next {
        left: auto;
        right: 0;
    }
    .player-wrap .playpause:hover,
    .player-wrap .prev:hover, .player-wrap .next:hover {
        background-color: #444;
    }
    .player-wrap .playpause, .player-wrap .play, .player-wrap .pause,
    .player-wrap .prev::-moz-focus-inner,
    .player-wrap .next::-moz-focus-inner {
        border: 0;
        padding: 0;
    } */
    /* .player-wrap .timer {
        left: 2em;
        width: 4em;
    }
    .player-wrap .timer div {
        display: inline-block;
        height: 100%;
        vertical-align: top;
        font-size: .45em;
    }
    .player-wrap .seek {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
        color: blue;
    } */
    .playlist-wrap {
        background-color: #222;
    }
    .playlist-wrap li {
        margin: 0 0 0 3em;
        padding: .25em 0 .25em .5em;
        list-style: decimal outside;
    }
    /* .playlist-wrap li.sel {
        background-color: #333;
    }
    .playlist-wrap li:hover {
        background-color: #444;
    } */

    /* >> input[type=range] class: seek */
    /* input.seek[type=range] {
        box-sizing: border-box;

        background-color: transparent;
        vertical-align: top;
        font-size: 1em;
        -webkit-appearance: none;
    }
    input.seek[type=range]:focus {
        outline: none;
    }
    input.seek[type=range]::-webkit-slider-runnable-track {
        box-sizing: border-box;
        width: 98%;
        height: .17em;
        background-color: #eee;
        cursor: pointer;
        border-radius: .1em;
        transition: all .2s ease;
    }
    input.seek[type=range]::-webkit-slider-thumb {
        box-sizing: border-box;
        width: .17em;
        height: .7em;
        margin-top: -.27em;
        border-radius: .1em;
        background-color: #eee;
        cursor: pointer;
        -webkit-appearance: none;
    }
    input.seek[type=range]:focus::-webkit-slider-runnable-track {
        background-color: #eee;
    }
    input.seek[type=range]::-moz-range-track {
        box-sizing: border-box;
        border: 0 solid #eee;
        width: 98%;
        height: .17em;
        background-color: #eee;
        cursor: pointer;
        border-radius: .1em;
        transition: all .2s ease;
    }
    input.seek[type=range]::-moz-range-thumb {
        box-sizing: border-box;
        border: 0 solid #eee;
        width: .17em;
        height: .7em;
        background-color: #eee;
        cursor: pointer;
        border-radius: .1em;
    }
    input.seek[type=range]::-ms-track {
        box-sizing: border-box;
        border: 0 none;
        width: 98%;
        height: .17em;
        background-color: transparent;
        color: transparent;
        cursor: pointer;
        transition: all .2s ease;
    }
    input.seek[type=range]::-ms-fill-lower {
        background-color: #eee;
        border-radius: .1em;
    }
    input.seek[type=range]::-ms-fill-upper {
        background-color: #eee;
        border-radius: .1em;
    }
    input.seek[type=range]::-ms-thumb {
        margin-top: -.01em;
        box-sizing: border-box;
        width: .17em;
        height: .7em;
        background-color: #eee;
        cursor: pointer;
        border-radius: .1em;
    }
    input.seek[type=range]:focus::-ms-fill-lower {
        background-color: #eee;
    }
    input.seek[type=range]:focus::-ms-fill-upper {
        background-color: #eee;
    } */
    /* << input[type=range] class: seek */

</style>