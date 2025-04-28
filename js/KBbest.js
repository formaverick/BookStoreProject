const BookFetch = {
    apiKey: "KakaoAK f0c426a10f3a2f3aff5eee22d60f3392",
    apiUrl: "https://dapi.kakao.com/v3/search/book?target=title",
  
    fetchBooks: function (query, selector) {
      $.ajax({
        method: "GET",
        url: this.apiUrl,
        data: { query },
        headers: { Authorization: this.apiKey }
      })
      .done(function (msg) {
        $(selector + " li").each(function (i) {
          const data = msg.documents[i];
          if (!data) return;
          $(this)
            .find("img").attr({ src: data.thumbnail, alt: data.title }).end()
            .find(".bestListbookTitle").text(data.title);
        });
      });
    }
};

$(function () {
    BookFetch.fetchBooks("행복", ".bestList1");
    BookFetch.fetchBooks("재능", ".bestList2");
    BookFetch.fetchBooks("summer", ".bestList3");
    BookFetch.fetchBooks("미술", ".bestList4");
    BookFetch.fetchBooks("우리", ".bestList5");
    BookFetch.fetchBooks("음악", ".bestList6");
    BookFetch.fetchBooks("문학동네", ".bestList7");
    BookFetch.fetchBooks("어제", ".bestList8");
    BookFetch.fetchBooks("오늘", ".bestList9");
});

$(function(){
    $('.bestright ul').hide();
    $('.bestList1').show();

    $('.bestCategory ul li:first-child').css({ color: "#474c98", fontWeight: 600, "border-bottom" : "1px solid #474C98"});
  
    //베스트 카테고리 클릭
    $('.bestCategory ul li').click(function(){
      var idx = $(this).index() + 1;
      $('.bestright ul').hide();
      $('.bestList' + idx).show();
      $('.steady ul li').css({ color: "", fontWeight:"", "border-bottom" : ""});
      $('.bestCategory ul li').css({ color: "", fontWeight:"", "border-bottom" : ""});
      $(this).css({ color: "#474c98", fontWeight: 600, "border-bottom" : "1px solid #474C98"});
    });
  
    //스테디셀러 카테고리 클릭
    $('.steady ul li').click(function(){
      var idx = $(this).index() + 8;
      $('.bestright ul').hide();
      $('.bestList' + idx).show();
      $('.bestCategory ul li').css({ color: "", fontWeight:"", "border-bottom" : ""});
      $('.steady ul li').css({ color: "", fontWeight:"", "border-bottom" : ""});
      $(this).css({ color: "#474c98", fontWeight: 600, "border-bottom" : "1px solid #474C98"});
    });
  });