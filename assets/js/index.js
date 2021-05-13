// smooth scroll para realiar el efecto de movimiento lento hacia las secciones
$(document).ready(function() {
    $(".navbar a").click(function(event) {
        event.preventDefault();

        var smooth = this.hash;

        $("html").animate({
                scrollTop: $(smooth).offset().top - 59,
            },
            800
        );
    });
});


// Activiacion de los toogle de bootstrap para el next y el previus
$(function() {
    $('[data-toggle="tooltip"]').tooltip()
})


// Cambio de color nav bar al mover el scroll

$(document).ready(function() {
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll > 100) {
            $(".color-navbar").css("background", "black");
        } else {
            $(".color-navbar").css("background", "");
        }
    })
})