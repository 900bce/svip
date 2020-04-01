$(function () {
  $('.copy-link-btn').click(function() {
    $(this).attr('url')
    $('.popup-url').html($(this).attr('url'))
    $(".open-link").attr("href", 'http://' + $(this).attr("url"))
    $('.popup').show()
  })

  $(".bookmark-link-btn").click(function () {
    // if (document.all) {
    //   window.external.addFavorite($(this).attr('url'));
    // } else if (window.sidebar) {
    //   this.href = $(this).attr('url');
    //   this.rel = "sidebar";
    // } else {
    //   alert('浏览器不支持加入收藏');
    //   return false();
    // }
    console.log($(this).attr('url'))
    if (document.all) {
      try {
        window.external.addFavorite($(this).attr('url'), '开元棋牌SVIP版');
      } catch (e) {
        alert('浏览器不支持加入收藏');
      }
    } else if (window.sidebar) {
      window.sidebar.addPanel('开元棋牌SVIP版', $(this).attr('url'), "");
    } else {
      alert('浏览器不支持加入收藏');
    }
  });

  document.body.addEventListener('touchstart', function () { }) //...空函数即可});

  var clipboard = new ClipboardJS('.copy-link-btn');

  $(".close-btn").click(function () {
    $('.popup').hide()
  })
})