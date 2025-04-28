$(function () {
    const $slider = $(".eventContentWrap");
    const slideWidth = $(".eventContent").width();
    const duration = 500;

    //selectBrand 인덱스에 | 제외 후 넣기 위함
    let currentIndex = 0;
    
    const $tabList = $(".selctbrnadEventSlide li").filter(function () {
        return $(this).text().trim() !== "|"; // | 제외한 li만 선택
    });
    const totalSlides = $slider.children("ul").length;

    function updateTab(index) {
        $tabList.removeClass("active").eq(index).addClass("active");
    }

    // 초기 상태
    updateTab(currentIndex);

    $(".todayPicBtn_R").on("click", function () {
        $slider.animate({ marginLeft: -slideWidth }, duration, function () {
            $slider.append($slider.children("ul").first());
            $slider.css("marginLeft", 0);
            currentIndex = (currentIndex + 1) % totalSlides;
            updateTab(currentIndex);
        });
    });

    $(".todayPicBtn_L").on("click", function () {
        $slider.prepend($slider.children("ul").last());
        $slider.css("marginLeft", -slideWidth);
        $slider.animate({ marginLeft: 0 }, duration, function () {
            currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
            updateTab(currentIndex);
        });
    });
});