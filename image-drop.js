$(document).ready(function() {

//This will prevent the appearance of the refinishing gallery on page load.
    $("#juicebox-container").hide();
//This will move the ContentsTrack image inventory off of the page on page load.
    $("#tech-test-btm-right").css("left", "40em");
//This will move the ContentsTrack piad image off of the page on load.
    $("#tech-test-btm-btm-left").css("right", "40em");

//This will prevent the appearance of the bottom half of testimonials on load.
    $(".toShow").hide();
//This function will toggle the appearance of the refinishing gallery on click.
    $("#show-gallery").on('click', function(event) {
        event.preventDefault();
        event.stopPropagation();
       $("#juicebox-container").show('slow');
        $("#show-gallery").hide();
    });
//This will show more testimonials on the click of the more link and will hide the clicked link.
     $("#tests-show").on('click', function(event) {
       event.preventDefault();
        $(".toShow").slideDown(500);
        $(".show-more-tests").hide();
    });
});

//This will slide the inventory image onto the screen if first div is scrolled past.
    $(window).on('scroll', function() {
        var inventoryRight = $("#tech-test-right").offset().top;
       if($(window).scrollTop() > inventoryRight)
           $("#tech-test-btm-right").animate({left: "0em"}, 1000);
    });
//This will slide the ipad image onto the screen if the inventory image div is scrolled past.
    $(window).on('scroll', function() {
        var ipadLeft = $("#tech-test-btm-left").offset().top;
        if ($(window).scrollTop() > ipadLeft)
            $("#tech-test-btm-btm-left").animate({right: "0em"}, 1000);
    });