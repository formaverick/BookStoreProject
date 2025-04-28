$(function(){
    $("#adBtn i:first").click(function(){
        $(this).css("color","#ddd").siblings("i").css("color","gray");
        $("#adBtn").parent().find("img").attr("src","img/side/side2.jpg");
        $("#adBtn li:first").text("01");
    });
    $("#adBtn i:last").click(function(){
        $(this).css("color","#ddd").siblings("i").css("color","gray");
        $("#adBtn").parent().find("img").attr("src","img/side/side3.jpg");
        $("#adBtn li:first").text("02");
    });
    $(window).scroll(function() { /*사이드 배너 위치 고정 */ 
    let scrollTop = $(window).scrollTop();       
    if( scrollTop > 800){
        $("#side_ad").css("top",scrollTop+150);
       }
    if( scrollTop > 1200){
        $("#topBtn").css("top",scrollTop+500);
    } 
  });
  
  $( '#topBtn' ).click( function() {
	$( 'html, body' ).animate( { scrollTop : 0 }, 1000 );
	return false;
} );
});