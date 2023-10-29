document.onkeydown = e => {
  if (e.code == 'ArrowRight' && e.ctrlKey) {

    var $div = document.getElementsByClassName("next-post")
    if ($div.length > 0) {
      $div[0].children[0].click();
    } else {
      Snackbar.show({
        text: '没有下一篇了~',
        pos: 'top-center',
        backgroundColor: 'rgba(48,48,48,0.5)',
        showAction: false
      });
    }
  } else if (e.code == 'ArrowLeft' && e.ctrlKey) {

    var $div = document.getElementsByClassName("prev-post")
    if ($div.length > 0) {
      $div[0].children[0].click();
    } else {
      Snackbar.show({
        text: '没有上一篇了~',
        pos: 'top-center',
        backgroundColor: 'rgba(48,48,48,0.5)',
        showAction: false
      });
    }
  } else if (e.code == 'KeyC' && e.ctrlKey) {
    console.error(".........")
    window.location.href = '/'
    return false
  } else if (e.code == 'KeyI' && e.ctrlKey && e.shiftKey) {
    window.location.href = '/'
    return false
  } else if (e.code == 'KeyS' && e.ctrlKey) {
    return false
  }
}


(function () {

  setTimeout(function () {
    if (localStorage.getItem("tipsShown") != 'true') {
      Snackbar.show({
        text: '现在支持使用快捷键控制。 上一篇 ctrl + ← / 下一篇 ctrl + → ',
        // actionTextColor: '#cccccc',
        pos: 'top-center',
        actionText: '我知道了',
        backgroundColor: 'rgba(48,48,48,0.5)',
        onActionClick: function (element) {
          element.style.opacity = 0;
          localStorage.setItem("tipsShown", 'true')
        }
      });

    }
  }, 1000)

})()