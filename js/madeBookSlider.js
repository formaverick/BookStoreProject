$(function () {
    const $slider = $(".madeBookListSlide");

    function nextmadeBook() {
        $(".madeBookListSlide").stop().animate({marginLeft:-310},function(){
            $('.madeBookListSlide > li:first').appendTo('.madeBookListSlide');
            $('.madeBookListSlide').css({marginLeft:0});
        });
    }
    function prevmadeBook(){
        $('.madeBookListSlide > li:last').prependTo('.madeBookListSlide');
        $('.madeBookListSlide').css({marginLeft:-310});
        $('.madeBookListSlide').stop().animate({marginLeft:0}); 
    }
    $("#madeBookBtn_L").click(function(){
        prevmadeBook();
    });
    $("#madeBookBtn_R").click(function(){
        nextmadeBook();
    });
});