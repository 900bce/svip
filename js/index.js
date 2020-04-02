$(function () {
  $('.copy-link-btn').click(function() {
    $(this).attr('url')
    $('.popup-url').html($(this).attr('url'))
    // $(".open-link").attr("href", 'http://' + $(this).attr("url"))
    $('.popup').show()
  })

  $(".bookmark-link-btn").click(function () {
    if (document.all) {
      try {
        window.external.addFavorite($(this).attr('url'), '开元棋牌');
      } catch (e) {
        const errorMessage = window.screen.width < 480 ? 
          '抱歉，您所使用的浏览器无法完成此操作。\n请您手动添加收藏' : 
          '抱歉，您所使用的浏览器无法完成此操作。\n加入收藏失败，请使用Ctrl + D进行添加';
        alert(errorMessage);
      }
    } else if (window.sidebar && window.sidebar.addPanel) {
      window.sidebar.addPanel('开元棋牌', $(this).attr('url'), "");
    } else {
      const errorMessage = window.screen.width < 480 ?
        '抱歉，您所使用的浏览器无法完成此操作。\n请您手动添加收藏' :
        '抱歉，您所使用的浏览器无法完成此操作。\n加入收藏失败，请使用Ctrl + D进行添加';
      alert(errorMessage);
    }
  });

  document.body.addEventListener('touchstart', function () { }) //...空函数即可});

  var clipboard = new ClipboardJS('.copy-link-btn');

  $(".close-btn").click(function () {
    $('.popup').hide()
  })
})