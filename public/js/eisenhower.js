(function(){
    var wh = $(window).height();
   $(".box").css("height", wh/2+"px");
   
   $(window).resize(function(){
       var wh = $(window).height();
       $(".box").css("height", wh/2+"px");
   });
   
   $("button").click(function(){
       var id = $(this).data("id");
       $("#"+id+" > ul").append("<li><input type='text' focus='true' placeholder='<empty>'><span class='glyphicon glyphicon-remove' aria-hidden='true'></span></li>");
       $(".glyphicon-remove").click(function(){
           $(this).parent().remove();
       });
   });
   
   $(".glyphicon-remove").click(function(){
           $(this).parent().remove();
       });
})();