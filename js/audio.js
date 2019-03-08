class ReproductorAudio {
    constructor(player) {
        this.trackCount = 0;
        
        this.playlist = [{
            "title": "bloodline",
            "artist": "Ariana Grande",
            "duration": "3:37",
            "cover": "src/music/covers/bloodline.jpg",
            "file":"src/music/songs/bloodline.mp3",
        }, {
            "title": "Nothing Breaks Like A Heart",
            "artist": "Miley Cyrus",
            "duration": "3:37",
            "cover": "src/music/covers/nblah.png",
            "file":"src/music/songs/nblah.mp3",
        }, {
            "title": "Low Key",
            "artist": "Mabel",
            "duration": "3:51",
            "cover": "src/music/covers/low_key.jpg",
            "file":"src/music/songs/low_key.mp3",
        }, {
            "title": "Boomerang",
            "artist": "Imagine Dragons",
            "duration": "3:08",
            "cover": "src/music/covers/boomerang.jpg",
            "file":"src/music/songs/boomerang.mp3",
        }, {
            "title": "Be Alright",
            "artist": "Ariana Grande",
            "duration": "2:57",
            "cover": "src/music/covers/be_alright.jpg",
            "file":"src/music/songs/be_alright.mp3",
        }]

        this.img_cover = player.firstElementChild.firstElementChild;
        this.title = player.children[1];
        this.audio = player.children[2];
        this.controls = player.children[5];
        
        this.setSong(this.playlist[this.trackCount].file);
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
    
}





