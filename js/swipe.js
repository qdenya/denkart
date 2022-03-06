if (document.documentElement.clientWidth < 881) {
  var swipe = new Hammer(document);
  // detect swipe and call to a function
  swipe.on('swiperight swipeleft', function(e) {
    e.preventDefault();
    if (e.type == 'swipeleft') {
      $('.header_mobile').addClass("header_mobile_active");
      $('body').addClass("no-scroll");
    } else {
      $('.header_mobile').removeClass("header_mobile_active");
      $('body').removeClass("no-scroll");
    }
  });
}