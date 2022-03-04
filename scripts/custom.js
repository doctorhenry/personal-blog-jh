$(document).ready(function(){    
    $("#profile").fadeIn("slow");   
});

$.fn.isInViewport = function() {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();
    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();
    return elementBottom > viewportTop && elementTop < viewportBottom;
};

$(window).on('resize scroll', function() {
    //Code here
    if($("#profile").isInViewport())
    {        
          // Fade in
        $("#profile").fadeIn();
    }
    else
    {
        // Hide
        $("#profile").hide();             
    }
    if($("#h-posts").isInViewport())
    {
        $("#h-posts").fadeIn();  
    }
    else
    {
        $("#h-posts").hide();
    }
    // if($("#main").isInViewport())
    // {
    //     $("#main").show();
    // }
    // else
    // {
    //     $("#main").hde();
    // }

     
});