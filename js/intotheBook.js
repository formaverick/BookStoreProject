$(document).ready(function () {
    const $text = $(".intotheBook > p");
    const $showBtn = $("#showBtn2 span").eq(0);  // 펼치기 버튼
    const $hideBtn = $("#showBtn2 span").eq(1);  // 접기 버튼

    const collapsedLines = 5; // 접힌 상태 줄 수
    const lineHeight = 23; // p태그 line-height(px)

    const collapsedHeight = collapsedLines * lineHeight; // 5줄 높이 (69px)
    const fullHeight = $text.prop('scrollHeight'); // 전체 높이

    $text.css({
        "height": collapsedHeight + "px"
    });

    $showBtn.on("click", function () {
        $text
            .css({
                "-webkit-line-clamp": "unset", // 줄 제한 풀기
                "height": fullHeight + "px",   // 전체 높이
                "overflow": "visible"
            });
        $showBtn.hide();
        $hideBtn.show();
    });

    $hideBtn.on("click", function () {
        $text
            .css({
                "-webkit-line-clamp": collapsedLines,
                "height": collapsedHeight + "px",
                "overflow": "hidden",
            });
        $hideBtn.hide();
        $showBtn.show();
    });
});