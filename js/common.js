$(function(){
    console.log("log");

    // 메인페이지 찜 버튼
    $(".product").mouseover(function(){
        $(this).children("button").stop().css("opacity","1")
    }).mouseout(function(){
        $(this).children("button").stop().css("opacity","0")
    })
    // 메인페이지 찜 버튼 끝

 // ======== header 시작 ========
    // 접근할 요소 변수로 선언
    let mainHeader = "header";
    // 스크롤시 header height 조정, 아이콘 변경 프로그램
    $(window).scroll(function(){ 
        let winS = $(window).scrollTop();
        let screenW = $(window).width();
        // console.log(winS);
        // console.log(screenW);
        if(winS < 30){
            $(mainHeader).height((150-winS)+"px");
        }else if(winS < 80){
            $(mainHeader).height((150-winS)+"px");
        }else{
            $(mainHeader).height("70px");
        }
    });
    // ======== header 끝   ========


    // ======== login popup 시작 ========
    // 로그인 클릭시 body에 빈 div를 생성하여 추가함
    // 이후 div에 새로운 div를 추가하고 요소 안에 login_test.html를 추가함
    $(".fa-user").click(function(){
        console.log("click login");
        $("body").append("<div class='demo'></div>");
        $(".demo").css({
            "width":"100%", "height":"100%", "background":"rgba(0,0,0,0.35)",
            "position":"fixed", "top":"0", "left":"0", "z-index":"6000"
        });
        $(".demo").append("<div></div>")
        $(".demo div").css({
            "width":"90%", "height":"90%", "border":"10px solid #ccc", 
            "border-radius":"20px", "background-color":"#fff",
            "position":"relative", "top":"5%", "left":"5%", "overflow":"auto"
        });
        $(".demo>div").load("./login.html");
        $(".demo").append("<div class='btnX'>X</div>")
        $(".demo .btnX").css({
            "width":"50px", "height":"50px", "border":"5px solid #ccc", 
            "border-radius":"10px", "background-color":"#aaa",
            "text-align":"center","line-height":"40px", "font-size":"40px", "color":"#fff",
            "position":"absolute", "top":"5%", "right":"5%", "overflow":"auto", "z-index":"7000"
        });
        $(".demo>div").focus();
        $(".demo .btnX").click(function(){$(".demo").remove()});
    });
    // ======== login popup 끝   ========
})