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
            "border-radius":"20px", 
            "position":"fixed", "top":"5%", "left":"5%", "overflow":"auto"
        });
        $(".demo>div").load("./login_test.html");
        $(".demo>div").click(function(){$(".demo").remove()});
    });
    // ======== login popup 끝   ========
    
});