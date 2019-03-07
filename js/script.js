//ALL: Cargar el header, contenido y footer
$(function(){
    $("#content").load("main.html");
    p = new ReproductorAudio(document.getElementById("audio_player"));
    addEventListeners(p);
});


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
addEventListeners(reproductor) {
    //reproductor.controls.children[0].addEventListener("click", repr.previousSong());
    reproductor.controls.children[1].addEventListener("click", function() {
        reproductor.playAudio(); 
    });
    reproductor.controls.children[2].addEventListener("click", function() {
        reproductor.nextSong(); 
    });

    reproductor.audio.addEventListener("play", function(){
        document.getElementById("ap_play").setAttribute('src', 'src/music/pause.png');
    });

    reproductor.audio.addEventListener("pause", function(){
        document.getElementById("ap_play").setAttribute('src', 'src/music/play.png');
    });
}

