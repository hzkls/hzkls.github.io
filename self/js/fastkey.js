document.onkeydown = e => {
  console.log(e)
  if (e.code == 'ArrowRight' && e.ctrlKey) {

    var $div = document.getElementsByClassName("next-post")
    console.log($div)
    if ($div) {
      console.log("下一篇")
      $div[0].children[0].click();
    }
  } else if (e.code == 'ArrowLeft' && ctrlKey) {

    var $div = document.getElementsByClassName("prev-post")
    if ($div) {
      console.log("上一篇")
      $div[0].children[0].click();
    }
  } else if (e.code == 'KeyC' && e.ctrlKey) {
    console.error(".........")
    window.location.href = '/'
    return false
  } else if (e.code == 'F12') {
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

document.oncontextmenu = e => {
  return false
}


function resize() {
  var threshold = 200;
  var widthThreshold = window.outerWidth - window.innerWidth > threshold;
  var heightThreshold = window.outerHeight - window.innerHeight > threshold;
  if (widthThreshold || heightThreshold) {
    document.body.innerHTML = `<div style="text-align:center;font-size: 200px;background:#fff;color:#707070">
    404
  </div>`
    Snackbar.show({text:"请禁用控制台"})
    debugger
    window.location.reload()
  }
}
window.addEventListener('resize', resize);
window.onload = resize

function fastKeyTips() {
    if(localStorage.getItem("tipsKnown")!='true'){
      Snackbar.show({
        text: '现在支持使用快捷键控制。 上一篇 ctrl + ← / 下一篇 ctrl + → ',
        actionTextColor:'#cccccc',
        pos:'top-center',
        actionText: '我知道了',
        backgroundColor: '#409EFF',
        onActionClick: function (element) {
          localStorage.setItem("tipsKnown",'true')
          element.remove()
        }
      });
    }
}

setTimeout(fastKeyTips,1000);