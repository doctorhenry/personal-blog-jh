$(document).ready(function(){    
    $("#profile").fadeIn("slow");   
    $("#top-bar").load("site/nav.html")

    if($("#blog-text").length){
        // We are on a blog page, get the appropriate blog.
        getBlog();
    }
});

function getBlog(){    
    let searchURL = new URLSearchParams(window.location.search)
    let blogURL = "";
    if(searchURL.has("name"))
    {
        if(searchURL.get("name") != "")
        {
            blogURL = "blogs/" + searchURL.get("name") + ".html";
            $("#blog-text").load(blogURL);
        }
        else
        {
            window.location.href = "/personal-blog-jh";
        }
    }
    else
    {
        window.location.href = "/personal-blog-jh";
    }  
}

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
});