$(function () {
    const $slider = $("#bookSlider");

    function nextPopular() {
        $("#bookSlider").stop().animate({marginLeft:-310},function(){
            $('#bookSlider > li:first').appendTo('#bookSlider');
            $('#bookSlider').css({marginLeft:0});
        });
    }
    function prevPopular(){
        $('#bookSlider > li:last').prependTo('#bookSlider');
        $('#bookSlider').css({marginLeft:-310});
        $('#bookSlider').stop().animate({marginLeft:0}); 
    }
    $("#popularBtn_L").click(function(){
        prevPopular();
    });
    $("#popularBtn_R").click(function(){
        nextPopular();
    });
});