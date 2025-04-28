$(function(){
    $.ajax({
        url: "json/picks.json",
        dataType: "json",
        success: function (data) {
            if (data.length > 0) {
                for (var i in data) {
                    $(".picksright li").eq(i).append('<a href="sub.html">' + "<img src='img/" + data[i].src + "'/>" + '</a>');
                    $(".picksright li ").eq(i).append('<span>'+data[i].small+'</span>');
                    $(".picksright li").eq(i).append('<a class="picksRightDetail">'+data[i].detail+'</a>');
                }
            }
        }
    });
});