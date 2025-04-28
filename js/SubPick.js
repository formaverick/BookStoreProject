$(document).ready(function(){
    $(".PickBtn span").eq(0).css({
        "background-color": "#595959",
        "color": "#ffffff"
    });
    
    $(".PickBtn span").click(function(){
        let index = $(this).index();
        $(".PickPicMain > ul").hide();
        $(".PickPicMain > ul").eq(index).show();

        $(".PickBtn span").css({
            "background-color": "#f7f7f7",
            "color": "#595959"
        });

        $(this).css({
            "background-color": "#595959",
            "color": "#ffffff"
        });
    });
});
