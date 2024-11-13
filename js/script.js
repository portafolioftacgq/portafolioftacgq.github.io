$(window).resize(function() {
    if ($(window).width() > 768) {
      $('.carousel-inner > .item > img').css('width', '50%');
    } else {
      $('.carousel-inner > .item > img').css('width', '80%');
    }
  });