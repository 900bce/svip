$(function () {
  $('.copy-link-btn').click(function() {
    $(this).attr('url')
    $('.popup-url').html($(this).attr('url'))
    $(".open-link").attr("href", 'http://' + $(this).attr("url"))
    $('.popup').show()
  })

  $(".bookmark-link-btn").click(function () {
    if (document.all) {
      window.external.addFavorite($(this).attr('url'));
    } else if (window.sidebar) {
      this.href = address;
      this.rel = "sidebar";
    } else {
      alert('浏览器不支持加入收藏');
      return false();
    }
  });

  document.body.addEventListener('touchstart', function () { }) //...空函数即可});

  var clipboard = new ClipboardJS('.copy-link-btn');

  $(".close-btn").click(function () {
    $('.popup').hide()
  })
})