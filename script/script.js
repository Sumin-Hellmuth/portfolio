$(document).ready(function() {

// a href='#' 클릭 무시 스크립트
        $('a[href="#"]').click(function(ignore) {
            ignore.preventDefault();
        });

// pc 메뉴 스크립트
    $(".nav > ul > li").mouseover(function(){
    $(this).find(".sub-menu").stop().slideDown(300);
});
$(".nav > ul > li").mouseout(function(){
    $(this).find(".sub-menu").stop().slideUp(300);
});


// 모바일 메뉴 스크립트
const navtab = {
 init: function(){
  this.motab(); }, 
  motab: function() { 
    var mBtn = $(".m-Btn"); 
    var closeBtn = $(".closeBtn");

     // 모바일 버튼 클릭 
    $(mBtn).click(function(){
     $(".m-Nav").addClass("on");
    $(".bg-shadow").css("display", "block");
     }); 

    // 화면 클릭 
    $(".bg-shadow").click(function(){
    $(".m-Nav").removeClass("on");
    $(".bg-shadow").css("display", "none"); 
    }); 

    // 닫기 버튼 클릭 
    $(closeBtn).click(function(){
    $(".m-Nav").removeClass("on");
    $(".bg-shadow").css("display", "none"); 
    });
    }
  }
     navtab.init();


// 배너 슬라이드 스크립트
$("#slider > img").eq(0).siblings().css("top","-678px");

var sliderIndex = 0;

setInterval(function(){
    if(sliderIndex<2){
        sliderIndex++
    }else{
        sliderIndex=0;
    }
    $("#slider > img").eq(sliderIndex).siblings().animate({top:"-678px"});
    $("#slider > img").eq(sliderIndex).animate({top:"0"});

},3000);
        
        $("#m-slider > img").eq(0).siblings().css("top","-678px");

var sliderIndex = 0;

setInterval(function(){
    if(sliderIndex<2){
        sliderIndex++
    }else{
        sliderIndex=0;
    }
    $("#m-slider > img").eq(sliderIndex).siblings().animate({top:"-678px"});
    $("#m-slider > img").eq(sliderIndex).animate({top:"0"});

},3000);


});
