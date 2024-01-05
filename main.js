$('#toggle').click(function() {
  $('.toggle-list').toggle()
})

// ページトップへ戻るボタン
$(function(){
  const pagetop = $('.pagetop');
  pagetop.hide();
  $(window).scroll(function(){
    if ($(this).scrollTop() > 80) {
      pagetop.fadeIn();
    } else {
      pagetop.fadeOut();
    }
  });
  pagetop.click(function() {
    $('body, html').animate({scrollTop:0}, 500);
    return false;
  })
})

