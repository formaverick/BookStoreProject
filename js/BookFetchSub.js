const BookFetcher2 = {
    apiKey: "KakaoAK f0c426a10f3a2f3aff5eee22d60f3392",
    apiUrl: "https://dapi.kakao.com/v3/search/book?target=title",
  
    fetchBooks2: function (query, selector, onlyImgselector) {
      $.ajax({
        method: "GET",
        url: this.apiUrl,
        data: { query: query, size: 20 },
        headers: { Authorization: this.apiKey }
      })
  
      .done(function (msg) {
        if (selector) {
          $(selector + " > ul > li").each(function (i) {
            const data = msg.documents[i];
            if (!data) return;

            // 기존 내용 다 비우기
            $(this).empty();

            // 이미지 추가
            const img = $("<img>").attr("src", data.thumbnail || "img/subimgs/smallbook/smallbook1.jpg");
            $(this).append(img);

            // 책 정보 박스 추가
            const bookInfo = $("<div>").addClass("togetherBookInfo");

            bookInfo.append(
              $("<span>").addClass("BookTitle").text(data.title || "제목 없음")
            ).append(
              $("<span>").addClass("BookWriter").text(
                (data.authors && data.authors.length > 0) ? data.authors.join(", ") : "저자 정보 없음"
              )
            ).append(
              $("<span>").addClass("BookPrice").text(
                data.price ? data.price.toLocaleString() + "원" : "가격 정보 없음"
              )
            );

            $(this).append(bookInfo);
          });
        }

        if (onlyImgselector) {
          $(onlyImgselector + " li").each(function (i) {
            const data = msg.documents[i];
            if (!data) return;
        
            $(this).empty().append(
              $("<div>").addClass("todayBoxImg").append(
                $("<img>").attr("src", data.thumbnail)
              )
            );
          });
        }
      });
    }
};
  
  $(function () {
    BookFetcher2.fetchBooks2("행복", ".togetherBookWrap");
    BookFetcher2.fetchBooks2("사람", null, ".togetherLifeWrap");

    // 키워드 pick
    BookFetcher2.fetchBooks2("안부", null, ".PickPic1");
    BookFetcher2.fetchBooks2("드라마", null, ".PickPic2");
    BookFetcher2.fetchBooks2("관계", null, ".PickPic3");
    BookFetcher2.fetchBooks2("다짐", null, ".PickPic4");
    BookFetcher2.fetchBooks2("목적", null, ".PickPic5");
    BookFetcher2.fetchBooks2("성장", null, ".PickPic6");
  });
  