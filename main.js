/**
 * Created by Heather on 10/19/2015.
 */


/*
    Methods
 */

//Start when document is done loading
$(document).ready(function(){

    $(".certs").on("click", function(){
        var element = $(this).children(".title");
        if($(this).hasClass("certMove")){
            $(element).fadeIn(0).removeAttr("style");
            $(this).removeClass("certMove");
        }else {
            $(element).css({
                "transform-origin": "100% 100%",
                width: "120",
                height: "120"
                //border: "transparent"
            }).fadeOut(1000);
            $(this).addClass("certMove");
        }

    })


});
