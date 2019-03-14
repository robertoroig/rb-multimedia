class ReproductorAudio {
    constructor(player) {
        this.trackCount = 0;
        
        this.playlist = [{
            "title": "bloodline",
            "artist": "Ariana Grande",
            "cover": "src/media/covers/bloodline.jpg",
            "file":"src/media/songs/bloodline.mp3",
        }, {
            "title": "Nothing Breaks Like A Heart",
            "artist": "Miley Cyrus",
            "cover": "src/media/covers/nblah.png",
            "file":"src/media/songs/nblah.mp3",
        }, {
            "title": "Low Key",
            "artist": "Mabel",
            "cover": "src/media/covers/low_key.jpg",
            "file":"src/media/songs/low_key.mp3",
        }, {
            "title": "Boomerang",
            "artist": "Imagine Dragons",
            "cover": "src/media/covers/boomerang.jpg",
            "file":"src/media/songs/boomerang.mp3",
        }, {
            "title": "Be Alright",
            "artist": "Ariana Grande",
            "cover": "src/media/covers/be_alright.jpg",
            "file":"src/media/songs/be_alright.mp3",
        }, {
            "title": "Serial Killer",
            "artist": "Lana del Rey",
            "cover": "src/media/covers/ldr.jpg",
            "file":"src/media/songs/serial_killer.mp3",
        }, {
            "title": "Because of You",
            "artist": "Lana del Rey",
            "cover": "src/media/covers/ldr.jpg",
            "file":"src/media/songs/bcofyou.mp3",
        }, {
            "title": "Queen of Disaster",
            "artist": "Lana del Rey",
            "cover": "src/media/covers/ldr.jpg",
            "file":"src/media/songs/qod.mp3",
        }, {
            "title": "Backfire",
            "artist": "Lana del Rey",
            "cover": "src/media/covers/ldr.jpg",
            "file":"src/media/songs/backfire.mp3",
        }, {
            "title": "Meet Me In The Pale Moonlight",
            "artist": "Lana del Rey",
            "cover": "src/media/covers/ldr.jpg",
            "file":"src/media/songs/mmitpm.mp3",
        }]

        this.img_cover = player.firstElementChild.firstElementChild;
        this.title = player.children[1];
        this.audio = player.children[2];
        this.controls = player.children[4];
        
        this.setSong(this.playlist[this.trackCount].file);
        
        this.addEventListeners();
    }
    
    playAudio() { 
        if(this.audio.paused) {
            this.audio.play();
        }
        else {
            this.audio.pause(); 
        }
        
    } 
    
    nextSong() {
        if(this.trackCount < this.playlist.length - 1)
            this.trackCount++;
        else
            this.trackCount = 0;
        
        this.setSong(this.playlist[this.trackCount].file)
        this.playAudio();
    }
    
    previousSong(){
        if(this.trackCount == 0)
            this.trackCount = this.playlist.length - 1;
        else
            this.trackCount--;
        
        this.setSong(this.playlist[this.trackCount].file)
        this.playAudio();
    }
    
    /* FALTA GESTIONAR LAS CANCIONES QUE NO SON COMPATIBLES */
    setSong() {
        if (this.audio.canPlayType("audio/mpeg")) {
            this.audio.setAttribute("src", this.playlist[this.trackCount].file);
        } else {
            this.audio.setAttribute("src", this.playlist[this.trackCount].file);
        }
        
        
        this.title.innerHTML = this.playlist[this.trackCount].title + '<div id="ap_artist" class="ap_artist">'+ this.playlist[this.trackCount].artist +'</div>';
        
        
        this.img_cover.setAttribute("src", this.playlist[this.trackCount].cover);
        
        this.img_cover.setAttribute("alt", this.playlist[this.trackCount].title + ' - ' + this.playlist[this.trackCount].artist);
    }
    
    addEventListeners() {
        var r = this;
        this.controls.children[0].addEventListener("click", function() {
            r.previousSong();
        });
        
        this.controls.children[1].addEventListener("click", function() {
            r.playAudio();
        });
        this.controls.children[2].addEventListener("click", function() {
            r.nextSong();
        });

        this.audio.addEventListener("play", function(){
            document.getElementById("ap_play").setAttribute('src', 'src/media/pause.png');
        });

        this.audio.addEventListener("pause", function(){
            document.getElementById("ap_play").setAttribute('src', 'src/media/play.png');
        });

        this.audio.addEventListener("timeupdate", function() {
            var elapsedTime = r.audio.currentTime;
            var duration = r.audio.duration;
            
            if(isNaN(duration))
                duration = 0;
            
            var eMinutes = Math.floor(elapsedTime / 60);
            var eSeconds = elapsedTime - eMinutes * 60;
            var tMinutes = Math.floor(duration / 60);
            var tSeconds = duration - tMinutes * 60;
            
            
            
            document.getElementById("ap_playback_time").innerHTML = eMinutes + ":" + ("0" + parseInt(eSeconds)).slice(-2) + "/" + tMinutes + ":" + ("0" + parseInt(tSeconds)).slice(-2);
            
            document.getElementById("ap_playback_bar").style.width =(elapsedTime/duration)*100 + "%"
        });

        this.audio.addEventListener("ended", function() {
            r.nextSong();
        });
    }
}

$(function(){
    p = new ReproductorAudio(document.getElementById("audio_player"));
});



