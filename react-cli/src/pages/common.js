// import qqShare from '../asstes/qqShare' //注意路径
import wx from 'weixin-js-sdk'
import $ from 'jquery'

export function $_GET(key) {
  var p = window.location.href.split('?'),
    v = '';
  if (p.length < 2) {
    return false;
  }

  p = p[1].split('&');
  p.map(function (item) {
    var temp = item.split('=');
    if (temp[0] == key) {
      if (temp.length > 2) {
        for (var i in temp) {
          if (i > 0) {
            if (i > 1) {
              v += ('=' + temp[i]);
            } else {
              v += temp[i];
            }
          }
        }
      } else {
        v = temp[1];
      }
    }
  });
  return v;
}

//判断页面是否加载完毕
export function preLoading(id, fn) {
  document.onreadystatechange = function () {
    if (document.readyState == 'complete' || document.readyState == 'loaded') {
      finish(fn);
    }
  }
  function finish(fn) {
    setTimeout(function () {
      document.getElementById(id).style.display = 'none';
      if (fn) {
        fn();
      }
    }, 1000);
  }

  $('#' + id).on('touchstart', function () {
    return false;
  });
}

//toast
export function toastTip(obj, msg, time) {
  if (!msg) return;
  if (!time) { time = 1000 };
  var target = $(obj);
  var sliceLength = 16;
  var sliceRate = Math.ceil(msg.length / 16);
  if (msg.length > sliceLength) {
    var msg2 = '';
    for (var i = 0; i < sliceRate; i++) {
      msg2 += msg.slice(sliceLength * i, sliceLength * (i + 1)) + '<br>'
    }
    msg = msg2
  }
  target.html(msg);
  target.css({ 'left': '50%', 'marginLeft': -target.width() / 2 - 22 })
  target.show();
  setTimeout(function () {
    target.hide();
  }, time);
}

export function resizeWindow() {
  function e() {
      var e = document.documentElement.clientWidth,
          t = document.querySelector("html"),
          f = e / 25;
      window.fontSize = f;
      t.style.fontSize = f + "px";
  }
  e(), window.addEventListener("resize", e);
}

//二次分享
export function wxSecShare(tit,describe,href,img){
  // $('body').append('<script src="../common/jweixin-1.0.0.js"></script>');
  // console.log(wx);
  // $('body').append('<script src="../common/qqShare.js"></script>');
  // console.log(qqShare);

  // QQ二次分享
  // qqShare.setShareInfo({
  //    title: tit,
  //    summary: describe,
  //    pic: img,
  //    url: href
  // });

  // 微信二次分享
  var _HOST = ''
  $.getJSON(_HOST+'/base/common/getWxShareJsApiSignature?callback=?', {share_url: window.location.href} ,function(data){
    //console.log(data);
    wx.config({
        debug: false,
        appId: data.data.appId,
        timestamp: data.data.timestamp, // 必填，生成签名的时间戳
        nonceStr: data.data.noncestr, // 必填，生成签名的随机串
        signature: data.data.signature,// 必填，签名，见附录1
        jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage', 'onMenuShareQQ', 'onMenuShareWeibo','onMenuShareQZone']
    });
    wx.ready(function(){
        wx.onMenuShareTimeline({ //微信分享到朋友圈
            title: tit,
            link: href,
            imgUrl: img,
            success: function () {
            },
            cancel: function () {
            }
        });

        wx.onMenuShareAppMessage({ //微信分享给朋友
            title: tit,
            desc: describe,
            link: href,
            imgUrl: img,
            type: '', // 分享类型,music、video或link，不填默认为link
            dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
            success: function () {
            },
            cancel: function () {
            }
        });

        wx.onMenuShareQQ({//分享到qq
            title: tit,
            desc: describe,
            link: href,
            imgUrl: img,
            success: function () {
            },
            cancel: function () {
            }
        });

        wx.onMenuShareWeibo({//分享到qq微博
            title: tit,
            desc: describe,
            link: href,
            imgUrl: img,
            success: function () {
            },
            cancel: function () {
            }
        });

        wx.onMenuShareQZone({ //分享到qq空间
            title: tit,
            desc: describe,
            link: href,
            imgUrl: img,
            success: function () {
            },
            cancel: function () {
            }
        });
    });
  })
}