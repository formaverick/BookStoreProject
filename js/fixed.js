$(function(){
      $(window).scroll(function() {
        let scrollTop = $(window).scrollTop();       
        if( scrollTop > 280){
            $("#fixedTop").slideDown("fast");
           }
        if ( scrollTop < 280){
            $("#fixedTop").slideUp("fast");
        } 
      }); 
});