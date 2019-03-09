class ReproductorVideo {
    constructor(player) {
        this.player = player;
        this.video = player.children[0];
        this.controllers = player.children[1].firstElementChild;
        this.timeElapsed = this.controllers.children[3];
        this.progressBar = player.children[2];
        this.progressBarWidth = this.progressBar.offsetWidth;
        this.addEventListeners();
    }
    
    playVideo() { 
        if(this.video.paused) {
            this.video.play();
        }
        else {
            this.video.pause(); 
        }
    } 
    
    addEventListeners() {
        var vp = this;
        
        // Botón play/pause
        this.controllers.children[0].addEventListener("click", function() {
            vp.playVideo();
        });
        
        // Botón video
        this.video.addEventListener("click", function() {
            vp.playVideo();
        });
        
        // Botón stop
        this.controllers.children[1].addEventListener("click", function() {
            vp.video.pause();
            vp.video.currentTime = 0;
            vp.progressBar.style.width = 0;
        });
        
        // Se actualiza en cada segundo de la reproducción y pone los minutos y segundos además de aumentar el tamaño de la progressBar
        this.video.addEventListener("timeupdate", function() {
            var elapsedTime = vp.video.currentTime;
            var duration = vp.video.duration;

            var eMinutes = Math.floor(elapsedTime / 60);
            var eSeconds = elapsedTime - eMinutes * 60;
            var tMinutes = Math.floor(duration / 60);
            var tSeconds = duration - tMinutes * 60;
            
            vp.timeElapsed.innerHTML = eMinutes + ":" + ("0" + parseInt(eSeconds)).slice(-2) + "/" + tMinutes + ":" + ("0" + parseInt(tSeconds)).slice(-2);
            
            vp.progressBar.style.width = (elapsedTime/duration)*vp.player.children[1].offsetWidth + "px";
        });
        
        // Cuando se reproduce el vídeo se cambia el botón a pause
        this.video.addEventListener("play", function(){
            vp.controllers.children[0].firstElementChild.setAttribute('src', 'src/media/pause.png');
        });
        
        // Cuando se para el vídeo se cambia el botón a play
        this.video.addEventListener("pause", function(){
            vp.controllers.children[0].firstElementChild.setAttribute('src', 'src/media/play.png');
        });
        
        // Cuando quiera cambiar el volumen
        this.controllers.getElementsByTagName('input')[0].addEventListener("input", function() {
            vp.video.volume = vp.controllers.getElementsByTagName('input')[0].value/100;
            if(vp.video.volume == 0) {
                vp.controllers.children[2].firstElementChild.setAttribute('src', 'src/media/vol_mute.png');
            } else if (vp.video.volume < 0.5) {
                vp.controllers.children[2].firstElementChild.setAttribute('src', 'src/media/vol.png');
            } else {
                vp.controllers.children[2].firstElementChild.setAttribute('src', 'src/media/vol_max.png');
            }
        });
        
        this.controllers.children[2].children[0].addEventListener("mouseover", function() {
            $(vp.controllers.children[2].children[1]).fadeIn(300);            
        });
        this.controllers.children[2].children[0].addEventListener("mouseout", function() {
            setTimeout(function () {
                $(vp.controllers.children[2].children[1]).fadeOut(300);      
            }, 3000);
        });
        
        this.controllers.children[4].addEventListener("click", function() {
            if (vp.video.requestFullscreen) {
              vp.video.requestFullscreen();
            } else if (vp.video.mozRequestFullScreen) {
              vp.video.mozRequestFullScreen();
            } else if (vp.video.webkitRequestFullscreen) {
              vp.video.webkitRequestFullscreen();
            } else if (vp.video.msRequestFullscreen) { 
              vp.video.msRequestFullscreen();
            }
        }); 
    }
}
