$(function () {

  function slide() {
      $(".slidebannerWrap").stop().animate({ marginLeft: - 1250 }, function () {
          $(".slidebannerWrap li:first").appendTo(".slidebannerWrap");
          $(".slidebannerWrap").css("marginLeft", "0");
      });
  }

  setInterval(slide, 3000);
});