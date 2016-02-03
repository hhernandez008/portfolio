

$("document").ready(function () {
    $("body").scrollspy({
        target: ".navbar",
        offset: 250
    });
    $("li.active > a").addClass("currentSection");
    $(".navbar").on("activate.bs.scrollspy", function () {
        var $activeSection = $("li.active > a");
        $(".active").parent(".links")
            .find(".currentSection")
            .removeClass("currentSection");
        $($activeSection).addClass("currentSection");
    });


    //Display the project buttons on hover
    $(".project").mouseenter(function(){
       $(this).find(".projectButtons").attr("style", "opacity: 1");
    });

    //Remove the mouse buttons when not hovered
    $(".project").mouseleave(function(){
        $(this).find(".projectButtons").attr("style", "opacity: 0");
    });


});

