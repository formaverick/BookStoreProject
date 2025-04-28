$(function () {
    const $slide = $(".slideList");
    const slideWidth = 890;
    const duration = 500;
    const total = $slide.find("li").length;
    let current = 1;
    let interval;
    let isPlaying = true;

    function slideNext() {
        $slide.animate({ marginLeft: -slideWidth }, duration, function () {
            $slide.find("li:first").appendTo($slide);
            $slide.css("marginLeft", 0);
            current = (current % total) + 1;
            updatePageNum();
        });
    }

    function slidePrev() {
        $slide.find("li:last").prependTo($slide);
        $slide.css("marginLeft", -slideWidth);
        $slide.animate({ marginLeft: 0 }, duration, function () {
            current = (current - 2 + total) % total + 1;
            updatePageNum();
        });
    }

    function updatePageNum() {
        $(".pageNum").text(`${current} - ${total}`);
    }

    function startSlide() {
        interval = setInterval(slideNext, 3000);
        isPlaying = true;
        $(".sliderStopBtn i").removeClass("fa-play").addClass("fa-pause");
    }

    function stopSlide() {
        clearInterval(interval);
        isPlaying = false;
        $(".sliderStopBtn i").removeClass("fa-pause").addClass("fa-play");
    }

    $(".sliderStopBtn").on("click", function () {
        if (isPlaying) {
            clearInterval(interval);
            isPlaying = false;
            $(".sliderStopBtn i")
                .removeClass("fa-pause")
                .addClass("fa-play");
        } else {
            interval = setInterval(slideNext, 3000);
            isPlaying = true;
            $(".sliderStopBtn i")
                .removeClass("fa-play")
                .addClass("fa-pause");
        }
    });

    $(".fa-chevron-left").on("click", function () {
        slidePrev();
    });

    $(".fa-chevron-right").on("click", function () {
        slideNext();
    });

    // 초기 실행
    updatePageNum();
    startSlide();
});