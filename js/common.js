$(function(){
    $(".product").mouseover(function(){
        $(this).children("button").stop().css("opacity","1")
    }).mouseout(function(){
        $(this).children("button").stop().css("opacity","0")
    })


})