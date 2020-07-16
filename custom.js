/*global $*/

$(document).ready(function () {
    "use strict";
    
    //nicescroll
    $("html").niceScroll();
    
    
    $(".carousel").carousel({
        interval: 5000
    });//سرعة تحريك الصور
 
    /*\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\*/
    $(".gear").on("click", function () {
        
        $(".color-option").fadeToggle();
    });
 /*\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\*/
    
    var colorLE = $(".tool-option .color-option ul li");
    colorLE.eq(0).css("background", "#E41B17").end()
            .eq(1).css("background", "#0b90ee").end()
            .eq(2).css("background", "#21cf24").end()
            .eq(3).css("background", "#18e1d8").end()
            .eq(4).css("background", "#f614bb");
    /*تغير ثيم الالوان بتاع الهيد للداتا فليو كما موضح بالكود*/
    $(colorLE).click(function () {
        $("link[href*=theme]").attr("href", $(this).attr("data-value"));
    });
    
    /*\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\*/
    $(".scroll-top").hide();
  
    $(window).scroll(function () {
       
         // console.log($(this).scrollTop());
        if ($(this).scrollTop() >= 800) {
            
            $(".scroll-top").show();
        } else {
            $(".scroll-top").hide();
        }
        
    });
    $(".scroll-top").click(function () {
        $("html,body").animate({scrollTop : 0}, 600);
    });
    
    
});

/*\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\*/

$(window).ready(function () {
    "use strict";
    $(".looding .lod").fadeOut(500, function () {
        $("body").css("overflow", "auto");
        $(".looding").fadeOut(500, function () {
            $(this).remove();
          
        });
    });
});
/*\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\*/