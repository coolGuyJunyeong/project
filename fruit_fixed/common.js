$(document).ready(function(){
    let swiper = new Swiper(".mySwiper", {
        pagination: {
          el: ".swiper-pagination",
          type: "progressbar",
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });




    let isOpen = false; //상태변수
    $(".menubar").click(function(){   
        
          if(isOpen == false){
              // $("header").addClass("on")
              $("#header_fade").fadeIn("fast");
              // $(pop).show()
              isOpen = true;
          }
          else{  // isOpen == true
              $("#header_fade").fadeOut("fast")
              // $('header').removeClass('on'); 
              isOpen = false
          }
    })


})
