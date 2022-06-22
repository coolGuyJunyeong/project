$(document).ready(function(){


    // ======== header 시작 ========
    let mainHeader = ".main_wrap .main_nav1";
    $(window).scroll(function(){
        let winS = $(window).scrollTop()*1;
        console.log(winS);
        if(winS <= 100){
            $(mainHeader).removeClass("header_fixed");
            $(mainHeader).css({
                "height":(200-winS)+"px"
            });
        }else{
            $(mainHeader).addClass("header_fixed");
        }
    });

    $(".main_nav1_login").children().click(function(){
        console.log("click login");
        $("body").append("<div class='demo'></div>");
        $(".demo").css({
            "width":"100%", "height":"100%", "background":"rgba(255,0,0,0.2)",
            "position":"fixed", "top":"0", "left":"0", "z-index":"5000"
        });
        $(".demo").append("<div></div>")
        $(".demo div").css({
            "width":"80%", "height":"auto", "background":"rgba(0,0,255,0.4)", "padding":"10px",
            "position":"fixed", "top":"10%", "left":"10%", "z-index":"6000"
        });
        $(".demo>div").load("./login_test.html");
        $(".demo").click(function(){$(".demo").remove()});
    });
    // ======== header 끝   ========
});