$(function () {
    $.ajax({
        url: "json/subslider.json",
        dataType: "json",
        success: function (data) {
            if (data.length > 0) {
                for (var i in data) {
                    $(".todaySaleBox .todaySaleimg").eq(i).append('<a href="sub.html">' + "<img src='img/" + data[i].src + "'/>" + '</a>');
                    $(".todaySaleBox .todaySaleDetail p").eq(i).append(data[i].title + "</br>" + data[i].name);
                    $(".todaySaleBox .todaySaleDetail span").eq(i).text(data[i].detail);
                }
            }
        }
    });

    
    const $slide = $(".todaySaleSlide");
    const slideCount = $(".todaySaleBox").length;
    const slideWidth = 320;
    let currentIndex = 0;

    function updateSlide() {
        const moveX = -slideWidth * currentIndex;
        $slide.css("transform", `translateX(${moveX}px)`);
        $(".todaySaleBtn .pagenum").text(`${currentIndex + 1} - ${slideCount}`);
    }

    $(".todaySaleBtn .fa-chevron-right").on("click", function () {
        if (currentIndex < slideCount - 1) {
            currentIndex++;
            updateSlide();
        }
    });

    $(".todaySaleBtn .fa-chevron-left").on("click", function () {
        if (currentIndex > 0) {
            currentIndex--;
            updateSlide();
        }
    });

    updateSlide();
});