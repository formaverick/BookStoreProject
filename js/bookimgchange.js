$(document).ready(function () {
    const originalSrc = "img/subimgs/mainbook.jpg";
    const toggledSrc = "img/subimgs/booksize.png";

    $(".mainBookimg").on("click", function () {
        const currentSrc = $(this).attr("src");

        if (currentSrc === originalSrc) {
            $(this).attr("src", toggledSrc);
        } else {
            $(this).attr("src", originalSrc);
        }
    });
});