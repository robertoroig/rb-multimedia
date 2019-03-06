//ALL: Cargar el header y footer
$(function(){
    $("#header").load("header.html"); 
    $("#footer").load("footer.html");
    
});

//ALL: Para que haga el efecto de aparición de inicio
$(window).on('beforeunload', function(){
    $("body").css("opacity", "0");
});

$(window).on('load', function(){
    $("body").css("opacity", "1");
});

//ALL: Función para manejar el menu
function showMenu(x) {
    x.classList.toggle("change");
    if($("#h_menu").is(":visible")) {
        $("#h_menu").fadeOut(300);
        $("#h_menu_bkg").fadeOut(300);
        $('html, body').css({
            overflow: 'auto'
        });
    }
        
    else {
        $("#h_menu").fadeIn(300);
        $("#h_menu_bkg").fadeIn(300);
        $('html, body').css({
            overflow: 'hidden'
        });
    }
    
}

//CONTACTO: Función para ajustar el cuadro de texto
function textAreaAdjust(o) {
  o.style.height = "1px";
  o.style.height = (o.scrollHeight)+"px";
}