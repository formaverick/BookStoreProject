// $(function(){
//     $.ajax({
//         url: "json/castingTop.json",
//         dataType: "json",
//         success: function (data) {
//             if (data.length > 0) {
//                 for (var i in data) {
//                     $(".castingInfo").eq(i).append('<span>'+data[i].title+"<br>"+data[i].titlebr+'</span>');
//                     $(".castingInfo").eq(i).append('<p>'+data[i].detail+'</p>');
//                     $(".castingTopimg").eq(i).append('<a href="#">' + "<img src='img/" + data[i].srcTop + "'/>" + '</a>');
//                     $(".backImg").css("background-image", "url(" + data[i].srcback+ ")");
//                 }
//             }
//         }
//     });
// });

// js/castingTop.js
$(function(){
    let castingData = [];
    let currentIdx = 0;

    function renderCasting(idx) {
      const item = castingData[idx];
      if (!item) return;
  
      // 텍스트 초기화 후 span, p 삽입
      $('.castingInfo')
        .empty()
        .append('<span>' + item.title + '<br>' + item.titlebr + '</span>')
        .append('<p>' + item.detail + '</p>');

      $('.castingTopimg')
        .empty()
        .append('<a href="sub.html"><img src="img/' + item.srcTop + '" alt=""></a>');
  
      // 배경이미지
      $('.castingBackImg')
        .css('background-image', "url(" + item.srcBack + ")");
    }
  
    $.getJSON('json/castingTop.json', function(data){
      if (!Array.isArray(data) || data.length === 0) return;
      castingData = data;
      renderCasting(0);
    });
  
    $('#castingSlidBtn_R').click(function(){
      if (castingData.length === 0) return;
      currentIdx = (currentIdx + 1) % castingData.length;
      renderCasting(currentIdx);
    });
  
    $('#castingSlidBtn_L').click(function(){
      if (castingData.length === 0) return;
      currentIdx = (currentIdx - 1 + castingData.length) % castingData.length;
      renderCasting(currentIdx);
    });
  });
  