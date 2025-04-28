$(function(){
    $.ajax({
        url: "json/iconmenu.json",
        dataType: "json",
        success: function (data) {
            if (data.length > 0) {
                for (var i in data) {
                    $(".icon_bar ul li").eq(i).append('<a href="sub.html">' + "<img src='img/" + data[i].src + "'/>" + '</a>');
                    $(".icon_bar ul li").eq(i).append("<span>" + data[i].title + "</span>");
                }
            }
        }
    });
});

$(function(){
    $.ajax({
        url: "json/KBcategory.json",
        dataType: "json",
        success: function (data) {
            if (data.length > 0) {
                for (var i in data) {
                    $(".iconMenuBox ul li").eq(i).append('<a href="sub.html">' + "<img src='img/" + data[i].src + "'/>" + '</a>');
                    $(".iconMenuBox ul li").eq(i).append("<span>" + data[i].title + "</span>");
                }
            }
        }
    });
});

$(function(){
    $.ajax({
        url: "json/eBookcategory.json",
        dataType: "json",
        success: function (data) {
            if (data.length > 0) {
                for (var i in data) {
                    $(".iconMenuBox2 ul li").eq(i).append('<a href="sub.html">' + "<img src='img/" + data[i].src + "'/>" + '</a>');
                    $(".iconMenuBox2 ul li").eq(i).append("<span>" + data[i].title + "</span>");
                }
            }
        }
    });
});

$(function(){
    $.ajax({
        url: "json/samcategory.json",
        dataType: "json",
        success: function (data) {
            if (data.length > 0) {
                for (var i in data) {
                    $(".iconMenuBox3 ul li").eq(i).append('<a href="sub.html">' + "<img src='img/" + data[i].src + "'/>" + '</a>');
                    $(".iconMenuBox3 ul li").eq(i).append("<span>" + data[i].title + "</span>");
                }
            }
        }
    });
});

$(function(){
    $.ajax({
        url: "json/HTcategory.json",
        dataType: "json",
        success: function (data) {
            if (data.length > 0) {
                for (var i in data) {
                    $(".iconMenuBox4 ul li").eq(i).append('<a href="sub.html">' + "<img src='img/" + data[i].src + "'/>" + '</a>');
                    $(".iconMenuBox4 ul li").eq(i).append("<span>" + data[i].title + "</span>");
                }
            }
        }
    });
});