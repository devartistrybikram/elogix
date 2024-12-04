$(document).ready(function(){

    $("#call").on( "click", function() {
        if($("#callform").hasClass("d-none")){
            $("#callform").removeClass("d-none").addClass("d-block");
        } else {
            $("#callform").removeClass("d-block").addClass("d-none");
        }
    });

    $('.others').owlCarousel({
        loop:true,
        margin:10,
        // nav:true,
        center: true,
        // dots: true,
        responsive:{
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            },
            1200: {
                items: 5
            },
            1400: {
                items: 6
            }
        }
    });

    $('.slider').owlCarousel({
        loop: true,
        margin: 50,
        // nav:true,
        center: true,
        // dots: true,
        responsive:{
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 2
            },
            1200: {
                items: 3
            }
        }
    });
});
