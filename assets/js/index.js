// smooth scroll
$(document).ready(function() {
    $("a").click(function(event) {
        event.preventDefault();

        var smooth = this.hash;

        $("html").animate({
                scrollTop: $(smooth).offset().top - 59,
            },
            800
        );
    });
});


// Activiacion de los toogle de bootstrap
$(function() {
    $('[data-toggle="tooltip"]').tooltip()
})