$(function () {
  BookFetcher.fetchBooks("오늘", null, null, ".TodayBoxSmall1", () => {
    $(".TodayBoxSmall1").append($(".TodayBoxSmall1 li:first"));
  });
  
  // 초기 상태: 첫 번째 박스만 보이기
  $(".TodayBox1").show().siblings("ul").hide();
  $(".TodayBoxSmall1").show().siblings("ul").hide();
  $("#selectBrand li:first-child").css({ color: "#474c98", fontWeight: 600 });

  // selectBrand 탭 활성화 스타일 적용
  $("#selectBrand > li").each(function (index) {
    const text = $(this).text().trim();
    if (text === "|") return;
    const realIndex = $("#selectBrand > li").filter((_, el) => $(el).text().trim() !== "|").index(this) + 1;
    $(this).attr("data-index", realIndex);
  });

  $("#selectBrand > li").click(function () {
    const i = $(this).data("index");
    if (!i) return;

    $(this).css({ color: "#474c98", fontWeight: 600 })
      .addClass("purple")
      .siblings()
      .css({ color: "", fontWeight: "" })
      .removeClass("purple");

    $(".TodayBox" + i).show().siblings("ul").hide();
    $(".TodayBoxSmall" + i).show().siblings("ul").hide();
  });

  function nextToday() {
    const num = $("#selectBrand .purple").data("index") || 1;

    const $small = $(".TodayBoxSmall" + num);
    $small.animate({ marginLeft: -180 }, 300, function () {
      $small.append($small.find("li:first"));
      $small.css({ marginLeft: 0 });
    });

    const $big = $(".TodayBox" + num);
    $big.animate({ marginLeft: -700 }, 300, function () {
      $big.append($big.find("li:first"));
      $big.css({ marginLeft: 0 });
    });
  }

  function prevToday() {
    const num = $("#selectBrand .purple").data("index") || 1;

    const $small = $(".TodayBoxSmall" + num);
    $small.prepend($small.find("li:last"));
    $small.css({ marginLeft: -180 });
    $small.animate({ marginLeft: 0 }, 300);

    const $big = $(".TodayBox" + num);
    $big.prepend($big.find("li:last"));
    $big.css({ marginLeft: -700 });
    $big.animate({ marginLeft: 0 }, 300);
  }

  $("#todayPicBtn_R").click(prevToday);
  $("#todayPicBtn_L").click(nextToday);

  // 시작 시 right 슬라이드 두 번째 아이템부터 보이게 설정
  for (let i = 1; i <= 6; i++) {
    const $small = $(".TodayBoxSmall" + i);
    $small.append($small.find("li:first"));
  }
});
