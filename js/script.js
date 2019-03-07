//ALL: Cargar el header, contenido y footer
$(function(){
    $("#header").load("header.html"); 
    $("#footer").load("footer.html");
    $("#content").load("main.html")
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
            overflow: 'auto'
        });
    }
        
    else {
        $("#h_menu").fadeIn(300);
        $("#h_menu_bkg").fadeIn(300);
        $('body').css({
            overflow: 'hidden'
        });
    }
    
}

//CONTACTO: Función para ajustar el cuadro de texto
function textAreaAdjust(o) {
  o.style.height = "1px";
  o.style.height = (o.scrollHeight)+"px";
}