$(".nav > ul > li").mouseover(function(){
	$(this).find(".sub-menu").stop().slideDown(300);
});
$(".nav > ul > li").mouseout(function(){
	$(this).find(".sub-menu").stop().slideUp(300);
});


$(document).ready(function() {

        // a href='#' 클릭 무시 스크립트

        $('a[href="#"]').click(function(ignore) {

            ignore.preventDefault();

        });

    });
$(document).ready(function() {
    let thumbnails = document.getElementsByClassName('item');
let slider = document.getElementById('item-slider');

let buttonRight = document.getElementById('slide-right');
let buttonLeft = document.getElementById('slide-left');

buttonLeft.addEventListener('click', function(){
    slider.scrollLeft -= 407;
})

buttonRight.addEventListener('click', function(){
    slider.scrollLeft += 407;
})

const maxScrollLeft = slider.scrollWidth - slider.clientWidth;
// alert(maxScrollLeft);
// alert("Left Scroll:" + slider.scrollLeft);

//AUTO PLAY THE SLIDER 
//function autoPlay() {
 //   if (slider.scrollLeft > (maxScrollLeft - 1)) {
  //      slider.scrollLeft -= maxScrollLeft;
 //   } else {
 //       slider.scrollLeft += 1;
 //   }
//}
//let play = setInterval(autoPlay, 50);

// PAUSE THE SLIDE ON HOVER
//for (var i=0; i < thumbnails.length; i++){

//thumbnails[i].addEventListener('mouseover', function() {
//    clearInterval(play);
//});

//thumbnails[i].addEventListener('mouseout', function() {
//   return play = setInterval(autoPlay, 50);
//});
//}


//});


