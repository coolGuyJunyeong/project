$(document).ready(function(){


    // ======== header 시작 ========
    // 접근할 요소 변수로 선언
    let mainHeader = "header";
    // 스크롤시 header height 조정, 아이콘 변경 프로그램
    $(window).scroll(function(){ 
        let winS = $(window).scrollTop();
        let screenW = $(window).width();
        // console.log(winS);
        console.log(screenW);
        if(winS < 30){
            $(mainHeader).height((150-winS)+"px");
        }else if(winS < 80){
            $(mainHeader).height((150-winS)+"px");
        }else{
            $(mainHeader).height("70px");
        }
    });

    // 햄버거 메뉴
    // let menuCss = {
    //     "position":"fixed", "width":"100vh"
    // }
    // $(mainHeaderMenuShow).click(function(){
    //     // alert($(mainHeaderMenuDefault[0]).css("display"));
    //     if($(mainHeaderMenuDefault[0]).css("display")==="none"){
    //         console.log("menu slideUp");
    //         console.log($(mainHeader).height()+1);
    //         $(mainHeaderMenuDefault[0]).removeClass("on").css({
    //             // "position":"fixed", "top":($(mainHeader).height()+1)+"px", "left":"0",
    //             // "width":"100vw", "height":"150px", "border-radius":"0"
    //         }).stop(true).slideDown(100);
            
    //     }else{
    //         console.log("menu slideDown");
    //         $(mainHeaderMenuDefault[0]).addClass("on").stop(true).slideUp(100);
    //     }
    // })
    // $(window).resize(function(){
    //     let screenW = $(window).width();
    //     if(800 < screenW){
    //         $(mainHeaderMenuDefault[0]).removeClass("on").css("").stop(true).slideDown(0);
    //     }else{
    //         if(!$(mainHeaderMenuDefault[0]).hasClass("on")){
    //             $(mainHeaderMenuDefault[0]).stop(true).slideUp(0);
    //         }
            
    //     }
    // })
    // ======== header 끝   ========


    // ======== login popup 시작 ========
    // 로그인 클릭시 body에 빈 div를 생성하여 추가함
    // 이후 div에 새로운 div를 추가하고 요소 안에 login_test.html를 추가함
    $(".main_nav1_login").children().click(function(){
        console.log("click login");
        $("body").append("<div class='demo'></div>");
        $(".demo").css({
            "width":"100%", "height":"100%", "background":"rgba(0,0,0,0.35)",
            "position":"fixed", "top":"0", "left":"0", "z-index":"5000"
        });
        $(".demo").append("<div></div>")
        $(".demo div").css({
            "width":"80%", "height":"auto", "background":"rgba(0,0,0,0.35)", 
            "padding":"10px", "border-radius":"20px", 
            "position":"fixed", "top":"10%", "left":"10%", "z-index":"6000"
        });
        $(".demo>div").load("./login_test.html");
        $(".demo>div").click(function(){$(".demo").remove()});
    });
    // ======== login popup 끝   ========
    
});