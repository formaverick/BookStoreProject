const BookFetcher = {
  apiKey: "KakaoAK f0c426a10f3a2f3aff5eee22d60f3392",
  apiUrl: "https://dapi.kakao.com/v3/search/book?target=title",

  fetchBooks: function (query, bigBoxSelector, smallBoxSelector, onlyImgSelector, callback) {
    $.ajax({
      method: "GET",
      url: this.apiUrl,
      data: { query: query },
      headers: { Authorization: this.apiKey }
    })

      .done(function (msg) {
        if (bigBoxSelector) {
          $(bigBoxSelector + " > li").each(function (i) {
            const data = msg.documents[i];
            if (!data) return;

            let summary = data.contents ? data.contents.substring(0, 80) : "";

            $(this).find("img").attr("src", data.thumbnail);

            $(this).find(".todayBoxDetail").empty()
              .append($("<span>").addClass("booktitle").text(data.title || "제목 없음"))
              .append($("<span>").addClass("author").text((data.authors && data.authors.length > 0) ? data.authors.join(", ") : "저자 정보 없음"))
              .append($("<p>").addClass("publisher").text(data.publisher || "출판사 정보 없음"))
              .append($("<p>").addClass("bookinfo").text((summary || "내용 없음") + "..."));
          });
        }

        if (smallBoxSelector) {
          $(smallBoxSelector + " li").each(function (i) {
            const data = msg.documents[i];
            if (!data) return;

            $(this)
              .empty()
              .append($("<img>").attr("src", data.thumbnail))
              .append($("<span>").text(data.title));
          });
        }

        if (onlyImgSelector) {
          $(onlyImgSelector + " li").each(function (i) {
            const data = msg.documents[i];
            if (!data) return;
        
            $(this).empty().append(
              $("<div>").addClass("todayBoxImg").append(
                $("<img>").attr("src", data.thumbnail)
              )
            );
          });
        }

        if (typeof callback === "function") callback();
      });
  }
};

$(function () {
  //오늘의 선택
  BookFetcher.fetchBooks("우리", ".TodayBox1", null, null);
  BookFetcher.fetchBooks("music", ".TodayBox2", null, null);
  BookFetcher.fetchBooks("여름", ".TodayBox3", null, null);
  BookFetcher.fetchBooks("미술", ".TodayBox4", null, null);
  BookFetcher.fetchBooks("교보", ".TodayBox5", null, null);

  BookFetcher.fetchBooks("우리", null, null, ".TodayBoxSmall1");
  BookFetcher.fetchBooks("music", null, null, ".TodayBoxSmall2");
  BookFetcher.fetchBooks("여름", null, null, ".TodayBoxSmall3");
  BookFetcher.fetchBooks("미술", null, null, ".TodayBoxSmall4");
  BookFetcher.fetchBooks("교보", null, null, ".TodayBoxSmall5");

  BookFetcher.fetchBooks("한강", null, ".newBookList", null);             //신작
  BookFetcher.fetchBooks("미술", null, ".recommendBookList", null);       //출판사추천
  BookFetcher.fetchBooks("산문", null, ".popularBookListSlide", null);    //사람들이 많이 찾고 있어요
  BookFetcher.fetchBooks("문학동네", null, ".madeBookListSlide", null);    // 교보문고가 만들었어요
});
