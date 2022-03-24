$(document).ready(function() {
  $('.show').on('click', function() {
    $(this).toggleClass('open');
    $(this).next().toggleClass('open');
    $(this).next().slideToggle();
  });
  $('.flow-question').on('click', function() {
    $(this).toggleClass('open');
    $(this).next().toggleClass('open');
    $(this).next().slideToggle();
  });
  $(window).scroll(function() {
    if($(this).scrollTop() > 0) {
      $('.totop').fadeIn();
    } else {
      $('.totop').fadeOut();
    }
  });
  $('.totop').click(function() {
    $('html, body').animate({scrollTop: 0}, 600);
  });
  $('a[href^="."]').click(function() {
    let href = $(this).attr('href');
    let target = $(href == '.' || href =="" ? 'html': href);
    let position = target.offset().top;
    $('html, body').animate({scrollTop:position-80}, 600, 'swing');
    return false;
  });
});