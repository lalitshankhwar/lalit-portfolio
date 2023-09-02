// header color change on scroll
$(window).on("scroll", function() {
    if($(window).scrollTop() > 50) {
        $("header").addClass("fadebg");
    } else {
       $("header").removeClass("fadebg");
    }
});

// open mobile menu
$('.menu-btn').on('click', ()=>{
    $('.menu').toggleClass('open')
})

// Closing the menu when window width greater than 991px

$(window).resize(function(){
    if($(this).width() > 991){
        $('.menu').removeClass("open");
    }
})
