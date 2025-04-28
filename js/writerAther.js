$(function(){
    $.ajax({
        url: "json/writerAther.json",
        dataType: "json",
        success: function (data) {
            if (data.length > 0) {
                for (var i in data) {
                    $(".writerAther ul li").eq(i).append('<a href="sub.html">' + "<img src='img/subimgs/smallbook" + data[i].src + "'/>" + '</a>');
                    $(".writerAther ul li").eq(i).append('<span>'+data[i].title+'</span>');
                }
            }
        }
    });
});