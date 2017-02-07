$(document).ready(function(){
  $(window).scroll(function() {
    if ($(this).scrollTop() > $(document).height() * 0.22) {
        $("#vertical").removeClass("no-display");
    } else {
        $("#vertical").addClass("no-display");
    }
    var nav= $("#vertical");
    for (var i = 1; i <= 4; i++) {
      nav.find("#"+i).removeClass("active-bt");
      nav.find("#"+i).find("a").removeClass("active");
    }
    if ($(this).scrollTop() > $(document).height() * 0.75) {
      $("#fourth").addClass("active");
      $("#4").addClass("active-bt");
    } else if ($(this).scrollTop() > $(document).height() * 0.55) {
      $("#third").addClass("active");
      $("#3").addClass("active-bt");
    } else if ($(this).scrollTop() > $(document).height() * 0.35) {
      $("#second").addClass("active");
      $("#2").addClass("active-bt");
    } else if ($(this).scrollTop() > $(document).height() * 0.22) {
      $("#first").addClass("active");
      $("#1").addClass("active-bt");
    }
  });
  $(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  });
});
