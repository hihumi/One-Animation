jQuery.noConflict();
(function($) {
  
  $(function() {
      $("#startAnimation").click(function() {
        $("#footer").text(":D");
        for (var i = 0; i < 10; i++) {
          $("#bluePng").hide(1500);
          $("#bluePng").show(2000);
        
             $("#stopAnimation").click(function() {
               $("#bluePng").stop();
             });
        }
      });
  });

  $(function() {
    $("#reloadBtn").click(function() {
      location.reload();
    });
  });

})(jQuery);
