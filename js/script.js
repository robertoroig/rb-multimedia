//ALL: Cargar el header, contenido y footer
$(function(){
    $("#content").load("main.html");
    p = new ReproductorAudio(document.getElementById("audio_player"));
    addEventListeners(p);
});

function addListenerProyectos() {
    //MENÚ PROYECTOS
    var menu = document.getElementById("dd_current");
    menu.addEventListener("click", function(){
        toggleMenuProyectos();
    });
    
    
}

function toggleMenuProyectos() {
    if($("#dd_elements").is(":visible")) {
        $("#dd_elements").hide();

        $("#dd_arrow").css({
            '-webkit-transform': 'rotate(0deg)',
            'transform': 'rotate(0deg)',
            'animation-name': 'arrowDown',
            'animation-duration': '0.5s',
        });
    }
    else {
        $("#dd_elements").css({
            "opacity":"0",
            "display":"block",
        }).show().animate({opacity:1});

        $("#dd_arrow").css({
            '-webkit-transform': 'rotate(180deg)',
            'transform': 'rotate(180deg)',
            'animation-name': 'arrowUp',
            'animation-duration': '0.5s',
        });
    }
}

function selectProyecto(id) { //Tipo es el id del div
    $("#projects_container > div").each(function() {
        $(this).hide();
    });
    $("#"+id).show();
}

function load(url, x) {
    showMenu(x);
    $("#content").load(url);
    $(window).scrollTop(0);
    
}

//ALL: Para que haga el efecto de aparición de inicio
$(window).on('beforeunload', function(){
    $("body").css("opacity", "0");
});

$(window).on('load', function(){
    $("body").css("opacity", "1");
});

//ALL: Función para manejar el menu
function showMenu(x) {
    $(x).toggleClass("change");
    if($("#h_menu").is(":visible")) {
        $("#h_menu").fadeOut(300);
        $("#h_menu_bkg").fadeOut(300);
        $('body').css({
            'overflow': 'auto',
        });
        $("#audio_player").css({
            'animation-name': 'audioOut',
            'animation-duration': '0.5s',
        });
        $("#audio_player").fadeOut(300);
    }
        
    else {
        $("#h_menu").fadeIn(300);
        $("#h_menu_bkg").fadeIn(300);
        $('body').css({
            'overflow': 'hidden',
        });
        $("#audio_player").show();
        $("#audio_player").css({
            'animation-name': 'audioIn',
            'animation-duration': '0.5s',
        });
    }
    
}

//CONTACTO: Función para ajustar el cuadro de texto
function textAreaAdjust(o) {
  o.style.height = "1px";
  o.style.height = (o.scrollHeight)+"px";
}

//REPRODUCTOR AUDIO: Función que añade los listeners
function addEventListeners(r) {
    r.controls.children[0].addEventListener("click", function() {
        r.previousSong(); 
    });
    r.controls.children[1].addEventListener("click", function() {
        r.playAudio(); 
    });
    r.controls.children[2].addEventListener("click", function() {
        r.nextSong();
r   });

    r.audio.addEventListener("play", function(){
        document.getElementById("ap_play").setAttribute('src', 'src/music/pause.png');
    });

    r.audio.addEventListener("pause", function(){
        document.getElementById("ap_play").setAttribute('src', 'src/music/play.png');
    });
    
    r.audio.addEventListener("timeupdate", function() {
        var elapsedTime = r.audio.currentTime;
        var duration = r.audio.duration;
        
        var eMinutes = Math.floor(elapsedTime / 60);
        var eSeconds = elapsedTime - eMinutes * 60;
        document.getElementById("ap_playback_time").innerHTML = eMinutes + ":" + ("0" + parseInt(eSeconds)).slice(-2) + " / " + r.playlist[r.trackCount].duration;
        document.getElementById("ap_playback_bar").style.width =(elapsedTime/duration)*100 + "%"
    });
    
    r.audio.addEventListener("ended", function() {
        r.nextSong();
    })
}



