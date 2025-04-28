$(function(){
    $.ajax({
        url: "json/casting.json",
        dataType: "json",
        success: function (data) {
            if (data.length > 0) {
                for (var i in data) {
                    $(".castingBottom li").eq(i).append('<a href="#">' + "<img src='img/" + data[i].src + "'/>" + '</a>');
                    $(".castingBottom li ").eq(i).append('<span>'+data[i].title+'</span>');
                }
            }
        }
    });

    const $slider = $(".castingSlider");

    function nextCasting() {
        $(".castingSlider").stop().animate({marginLeft:-230},function(){
            $('.castingSlider > li:first').appendTo('.castingSlider');
            $('.castingSlider').css({marginLeft:0});
        });
    }
    function prevCasting(){
        $('.castingSlider > li:last').prependTo('.castingSlider');
        $('.castingSlider').css({marginLeft:-230});
        $('.castingSlider').stop().animate({marginLeft:0}); 
    }
    $("#castingBtn_L").click(function(){
        prevCasting();
    });
    $("#castingBtn_R").click(function(){
        nextCasting();
    });
});