class ReproductorVideo {
    constructor(player) {
        this.player = player;
    }
    
    function playVideo(){
        vid.play();

        move();
    }

    function pauseVideo(){
        var vid = document.getElementById("myvideo");
        vid.pause();
    }

    function stopVideo() {
        var vid = document.getElementById("myvideo");
        vid.pause();
        vid.currentTime = 0;
    }

    function maxvolumenVideo () {
        var vid = document.getElementById("myvideo");
        vid.volume += vid.volume == 1 ? 0 : 0.1;
    }

    function minvolumenVideo () {
        var vid = document.getElementById("myvideo");
        vid.volume -= (vid.volume == 0 ? 0 : 0.1);
        vid.volume = parseFloat(vid.volume).toFixed(1);
    }

    function maxVideo(){
        var vid = document.getElementById("myvideo");    
        vid.webkitRequestFullScreen();
    }

    function onVideoSourceChanged()
    {
        if(videoSourceRunning == true)
        {
            onButtonStopClickedVideo();
            var source = document.getElementById(videoSourceId);
            source.src = document.getElementById(videoSelectId).value;
            video.load();
            onButtonPlayClickedVideo();
        }
        else
        {
            onButtonStopClickedVideo();
            var source = document.getElementById(videoSourceId);
            source.src = document.getElementById(videoSelectId).value;
            video.load();
        }
    }

    /**
    function progressbarVideo(){
        seekbar = document.getElementById("progressbar");
        //Event listener for the seek bar
        seekBar.addEventListener("change", function() {
            //Calculate new time
            var newTime = video.duration * (seekBar.value / 100);

            video.currentTime = newTime;
        });

        //As video progresses, seekBar moves forward
        seekBar.addEventListener("timeupdate", function() {
            var value = (100 / video.duration) * video.currentTime;
            seekBar.value = value;
        });

    }**/
}

