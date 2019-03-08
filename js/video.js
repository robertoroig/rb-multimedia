var vid = document.getElementById("myvideo");

function playVideo(){
    vid.play();
}

function pauseVideo(){
    vid.pause();
}

function stop() {
   mediaPlayer.pause();
   mediaPlayer.currentTime = 0;
}