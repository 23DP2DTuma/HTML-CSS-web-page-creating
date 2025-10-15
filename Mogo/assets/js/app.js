$(function() {

    var header = $("header");
    var introH = $("#intro").innerHeight();
    var scrollOffset = $(window).scrollTop();

    /* fixed header */
    checkScroll(scrollOffset);

    $(window).on("scroll", function() {
        scrollOffset = $(this).scrollTop();
        checkScroll(scrollOffset);

    });

    function checkScroll(scrollOffset) {
        if ( scrollOffset >= introH) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }

    /* smooth scroll */

    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        var elementID = $(this).data('scroll'),
            blockofset = $(elementID).offset().top;

        $("html, body").animate({
            scrollTop: blockofset
        }, 500);
    });

});