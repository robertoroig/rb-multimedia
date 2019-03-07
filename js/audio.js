


class ReproductorAudio {
    constructor(audio) {
        this.controles = {
            "play": false,
            "progress": 0,
            "current_time": 0,
            "duration": 0,
            "mute": false,
            "volume": 50,
        };
        this.trackCount = 0;
        
        this.playlist = [{
            "track": 0,
            "title": "Be Alright",
            "artist": "Ariana Grande",
            "duration": "2:58",
            "cover": "src/ariana.jpg",
            "file":"src/be_alright.mp3",
        }, {
            "track": 1,
            "title": "Be Alright",
            "artist": "Ariana Grande",
            "duration": "2:58",
            "cover": "src/ariana.jpg",
            "file":"src/be_alright.mp3",
        }]
        
        this.audio = audio;
        if (audio.canPlayType("audio/mpeg")) {
            audio.setAttribute("src",this.playlist[0].file);
        } else {
            //audio.setAttribute("src","horse.ogg");
        }
    }
    
    playAudio() { 
        this.audio.play(); 
    } 

    pauseAudio() { 
        this.audio.pause(); 
    }
}

var player = new ReproductorAudio(document.getElementById("ap"));



