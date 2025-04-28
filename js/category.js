$(function () {
    $(function () {
        // navBoxTitle 안의 두 번째 div 클릭 시
        $(".navBoxTitle > div").eq(1).click(function () {
          // 서비스 전체보기 영역 보이기
          $(".seviceAll").show();
      
          // 카테고리 전체보기 숨기기
          $(".categoryAll").hide();
      
          $(".navBoxTitle > div").addClass("backgroundGrey");
          $(this).removeClass("backgroundGrey");
        });
      
        // navBoxTitle 안의 첫 번째 div 클릭 → 카테고리 전체보기 복귀
        $(".navBoxTitle > div").eq(0).click(function () {
          $(".categoryAll").show();
          $(".seviceAll").hide();
      
          $(".navBoxTitle > div").addClass("backgroundGrey");
          $(this).removeClass("backgroundGrey");
        });
      
        // 초기 상태에서 categoryAll만
        $(".categoryAll").show();
        $(".seviceAll").hide();
      });


    $(".categoryTop li").click(function () {
        $(".categoryTop li").removeClass("active");
        $(this).addClass("active");

        const idx = $(this).index();
        const $targets = $(".categoryMain > li").eq(idx).find(".selectBox");


        $targets.hide();

        // 순차적으로 나타나기 (200ms 간격, fadeIn or slideDown 사용 가능)
        $targets.each(function (i) {
            $(this).delay(i * 200).slideDown(400);
            $(this).find()
        });

        // 다른 카테고리Main li들은 전부 숨김
        $(".categoryMain > li").hide();
        $(".categoryMain > li").eq(idx).show(); // 현재만 표시
    });
});

$(function () {

    //교보문고
    $(".selectBox > ul > li").click(function () {
        const idx = $(this).index();

        $(".mainAll > ul > li").hide().eq(idx).fadeIn(300);


        $(".mainSpecial > ul > li").hide().eq(idx).fadeIn(300);


        $(this).addClass("active").siblings().removeClass("active");
    });

    //eBook
    $(".categoryMain li .selectBox > ul > li").click(function () {
        const idx = $(this).index();

        $(".mainAll2 > ul > li").hide().eq(idx).fadeIn(300);

        $(".mainSpecial2 > ul > li").hide().eq(idx).fadeIn(300);

        $(this).addClass("active").siblings().removeClass("active");
    });

    //sam
    $("#samSelectBox > li").click(function () {
        const idx = $(this).index();

        // mainBox와 Special 박스 내 li 표시
        $("#samMainBox > li").hide().eq(idx).fadeIn(300);
        $("#samSpeical > li").hide().eq(idx).fadeIn(300);

        $(this).addClass("active").siblings().removeClass("active");
    });

    //핫트랙스
    $("#HTSelectBox > li").click(function () {
        const idx = $(this).index();

        $("#HTMainBox > li").hide().eq(idx).fadeIn(300);

        $(this).addClass("active").siblings().removeClass("active");
    });

    //초기 상태
    $(".mainAll > ul > li, .mainSpecial > ul > li").hide().eq(0).show();
    $(".mainBoxEbook > .mainAll2 > ul > li, .mainSpecial2 > ul > li").hide().eq(0).show();
    $("#samMainBox > li").hide().eq(0).show();
    $("#samSpeical > li").hide().eq(0).show();
    $(".mainAll3 > ul > li").hide().eq(0).show();

    $(".categoryTop li").removeClass("active").eq(0).addClass("active");           // 상단 탭
    $(".selectBox > ul > li").removeClass("active").eq(0).addClass("active");      // 교보문고
    $("#EbookSelectBox > li").removeClass("active").eq(0).addClass("active"); // eBook
    $("#samSelectBox > li").removeClass("active").eq(0).addClass("active");        // sam
    $("#HTSelectBox > li").removeClass("active").eq(0).addClass("active");

    let icon = ["img/icon/x-button.png", "img/icon/o-button.png"];
    let i = 0;
    
    $("#menu_icon").click(function () {
        $(".navBox").slideToggle(300);
        $(this).attr("src", icon[i]);
        i++;
        if (i > icon.length - 1) i = 0;
    });

    $("#menu_icon2").click(function () {
        $(".navBox").toggleClass("nav_loc").toggleClass("fixed").slideToggle(300);
        $(this).attr("src", icon[i]);
        i++;
        if (i > icon.length - 1) i = 0;
    });
});