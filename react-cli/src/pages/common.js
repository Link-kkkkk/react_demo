// import qqShare from '../asstes/qqShare' //注意路径
import wx from 'weixin-js-sdk'
import $ from 'jquery'

// 配置参数
const _HOST = 'https://app.hxsapp.com';
const _ACTHOST = 'https://act.hxsapp.com';

const modelIdfa = $_GET('model_idfa');
var CallBack ='?callback=?&model_idfa=' + modelIdfa;
export { _HOST, _ACTHOST };

function setCookie() {
  var sess_token = $_GET('sess_token');
  if (sess_token) {
    if ($.cookie('ci_session')) {
      $.removeCookie('ci_session', { path: '/' });
    }

    var date = new Date();
    date.setTime(date.getTime() + (86400 * 1000)); //sec秒
    $.cookie('ci_session', sess_token, { path: '/', expires: date });
  }
}
/**
 * [$_GET 从url取参数值]
 * @param  {[type]} key [description]
 * @return {[type]}     [description]
 */
export function $_GET(key) {
  var p = window.location.href.split('?'),
    v = '';
  if (p.length < 2) {
    return false;
  }

  p = p[1].split('#')
  p = p[0].split('&')
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

//获取url参数
var locationSearch = window.location.href.split('?')[1];
export function getUrlParam(name, param = locationSearch) {
  if (!param) return null;
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
  var r = param.match(reg);
  if (r != null) return unescape(r[2]);
  return null
}

//判断页面是否加载完毕
export function preLoading(id, fn) {
  // document.onreadystatechange = function () {
  //   if (document.readyState == 'complete' || document.readyState == 'loaded') {
  //     finish(fn);
  //   }
  // }
  // function finish(fn) {
  //   setTimeout(function () {
  //     document.getElementById(id).style.display = 'none';
  //     if (fn) {
  //       fn();
  //     }
  //   }, 1000);
  // }

  // $('#' + id).on('touchstart', function () {
  //   return false;
  // });
}

//判断好享瘦版本
export var UserAgent = window.navigator.userAgent;
export function myUserAgent(fn, state) {
  var hxsVersion = getHxsAppVersion()
  if (fn) {
    fn(hxsVersion);
  }
}
function moreMyUserAgent(fn, state) {
  var hxsVersion = getHxsAppVersion()
  if (fn) {
    fn(hxsVersion);
  }
}

export function getHxsAppVersion() {
  //获取版本号
  var UserAgent = window.navigator.userAgent;
  var windowLocation = window.location.href;
  var __version = UserAgent.split('hxsapp-version-')[1] ? UserAgent.split('hxsapp-version-')[1].split("&")[0] : "0.0.0";
  function __get_dian(str) {
    var num = 0;
    for (var i = 0; i < str.length; i++) {
      if (str[i] == ".") {
        num++;
      }
    }
    return num
  }

  //先补零操作
  //例如 2.10 ＝> 2.10.0
  //例如 2.10.1 不会补零操作

  if (__get_dian(__version) == 1) {
    __version = __version + ".0"
  }
  return __version

}

export function compareAppVersion(new_str, old_str) {

  //new_str > old_str
  // compareVersionEle("2.10.0","2.9.0") ture

  if (typeof new_str != "string" || typeof old_str != "string") {
    console.log("参数类型必须微字符串：string ")
    return;
  }
  if (new_str.indexOf(".") < 0 || old_str.indexOf(".") < 0) {
    console.log("版本号传入有错误")
    return;
  }

  function __get_dian(str) {
    var num = 0;
    for (var i = 0; i < str.length; i++) {
      if (str[i] == ".") {
        num++;
      }
    }
    return num
  }

  var __new_str = new_str;
  var __old_str = old_str;

  //先补零操作
  if (__get_dian(new_str) == 1) {
    __new_str = new_str + ".0"
  }
  if (__get_dian(old_str) == 1) {
    __old_str = old_str + ".0"
  }

  // debugger

  var new_str_split = __new_str.split(".");
  var old_str_split = __old_str.split(".");

  //比较第一位
  if (new_str_split[0] === old_str_split[0]) {

    //比较第二位
    if (new_str_split[1] === old_str_split[1]) {

      //比较第三位
      if (parseInt(new_str_split[2]) >= parseInt(old_str_split[2])) {
        return true
      } else if (parseInt(new_str_split[2]) < parseInt(old_str_split[2])) {
        return false
      }
    } else if (parseInt(new_str_split[1]) > parseInt(old_str_split[1])) {
      return true
    } else if (parseInt(new_str_split[1]) < parseInt(old_str_split[1])) {
      return false
    }

  } else if (parseInt(new_str_split[0]) > parseInt(old_str_split[0])) {
    return true
  } else if (parseInt(new_str_split[0]) < parseInt(old_str_split[0])) {
    return false
  }

}

export function toastTip(obj, msg, time) {
  if (!msg) return;
  if (!time) { time = 1000 };
  if (!obj) {
    var target = $('.toast_tip');
  } else {
    var target = $(obj);
  }
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

//下载链接
export var href = 'https://www.hxsapp.com/download';
// hxsDownload('.d_foot a');
export function hxsDownload(obj, shareImg, objpadding) {
  var ua = window.navigator.userAgent;
  var IsAndroid = new RegExp('Android').test(ua);
  var isAndroidQQ = new RegExp('Mobile MQQBrowser').test(ua);
  var MicroMessenger = new RegExp('MicroMessenger').test(ua);

  var isIos = new RegExp('iPhone').test(ua);
  var isIpad = new RegExp('iPad').test(ua);
  var isIosQQ = new RegExp(' QQ/').test(ua);
  if (isIos || isIpad) {
    $(obj).attr('href', 'https://at.umeng.com/5viObq');
  } else if (IsAndroid) {
    $(obj).attr('href', 'https://at.umeng.com/aCKnSD');
  }

  if ((IsAndroid && isAndroidQQ && !MicroMessenger) || (isIos && isIosQQ) || (isIpad && isIosQQ)) {
    $(obj).attr('href', 'https://www.hxsapp.com/download');
  }
  if ($(shareImg).length >= 1) {
    $.getJSON(_HOST + '/base/common/getAdListByType' + CallBack, { keywords: 'down_load_btn_ad' }, function (data) {
      var data = data.data[0];

      if (!data.image) {
        $(shareImg).hide();
        return false;
      }
      $(shareImg).css({
        width: parseInt(data.width) / 2,
        height: parseInt(data.height) / 2,
        background: 'url(' + data.image + ') left top no-repeat',
        'background-size': '100%',
        top: -parseInt(data.height) / 2
      });

      $(shareImg).click(function () {
        window.location.href = data.link;
      });
      $(objpadding).css('padding-bottom', 59 + parseInt(data.height) / 2);
    })
  }
}

//二次分享
export function wxSecShare(tit, describe, href, img) {
  // QQ二次分享
  // qqShare.setShareInfo({
  //   title: tit,
  //   summary: describe,
  //   pic: img,
  //   url: href
  // });

  // 微信二次分享
  $.getJSON(_HOST + '/base/common/getWxShareJsApiSignature?callback=?', { share_url: window.location.href }, function (data) {
    //console.log(data);
    wx.config({
      debug: false,
      appId: data.data.appId,
      timestamp: data.data.timestamp, // 必填，生成签名的时间戳
      nonceStr: data.data.noncestr, // 必填，生成签名的随机串
      signature: data.data.signature,// 必填，签名，见附录1
      jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage', 'onMenuShareQQ', 'onMenuShareWeibo', 'onMenuShareQZone']
    });
    wx.ready(function () {
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

//埋点统计
//ua参数获取
function getUaparen(key) {
  var p = window.navigator.userAgent;
  var v = '';
  p = p.split('&');
  p.map(function (item) {
    var temp = item.split('-');
    if (temp[0] == key) {
      if (temp.length > 2) {
        for (var i in temp) {
          if (i > 0) {
            if (i > 1) {
              v += ('-' + temp[i]);
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

var newMobileSystem = getUaparen('mobile_system');
var newBrand = getUaparen('brand');
var newModel = getUaparen('model');
var newSystemResolution = getUaparen('system_resolution');
var newChannelNumber = getUaparen('channel_number');
var newVersionNumber = getUaparen('version_number');

var newNetworkEnvironment = getUaparen('network_environment');
var newLongitude = getUaparen('longitude');
var newLatitude = getUaparen('latitude');

var newRegisterId = getUaparen('register_id');
var newConversationId = getUaparen('conversation_id');
var newUserId = getUaparen('user_id');
export function buriedPoint(behavior, clickResults) {
  var webtype = '';
  moreMyUserAgent(function (Version) {
    var MicroMessenger2 = new RegExp('MicroMessenger').test(UserAgent);
    var type = MicroMessenger2 ? '微信' : '其他';
    if (Version) {
      webtype = 'APP内已设置类型';
    } else {
      webtype = type;
    }
  });

  var json = {
    'one_web': '/',
    'two_web': '/',
    'three_web': '/',
    'columned': '/',
    'behavior': behavior,
    'click_results': clickResults,
    'access_occurred_type': 'H5活动页面',
    'access_occurred_type_id': $_GET('id'),
    'statistical_type': '页面型',
    'previous_web_type': webtype,
    'mobile_system': newMobileSystem,
    'brand': newBrand,
    'model': newModel,
    'system_resolution': newSystemResolution,
    'channel_number': newChannelNumber,
    'version_number': newVersionNumber,
    'network_environment': newNetworkEnvironment,
    'longitude': newLongitude,
    'latitude': newLatitude,
    'register_id': newRegisterId,
    'conversation_id': newConversationId,
    'user_id': newUserId
  }
  $.getJSON('https://mars.hxsapp.com/h5' + CallBack, json, function (data) { });
}

export function isApp() {
  var shareType;
  if (window.location.search.indexOf('shareType') >= 0) {
    shareType = true
  } else {
    shareType = false
  }

  if (!shareType) {

    var is_sess_token;
    if (window.location.search.indexOf('sess_token') >= 0) {
      is_sess_token = true;
    } else {
      is_sess_token = false;
    }

    var in_app;
    if (getHxsAppVersion() === '0.0.0') {
      in_app = false;
    } else {
      in_app = true;
    }

    if (in_app) {
      if (is_sess_token) {
        console.log("在app里，且已经登录了,Version:" + getHxsAppVersion())
        return true
      } else {
        console.log("在app里，且没有登录,Version:" + getHxsAppVersion())
        return false
      }
    } else {
      console.log("当前在PC开发环境")
      return false
    }

  } else {
    //不是app
    console.log("有shareType字段，在app外部")
    return false
  }

}
var h5CallAppAction = {
  hxsapp_visible_share_btn: function (obj) {
    var shareTitle = obj.shareTitle;
    var shareLink = obj.shareLink;
    var shareImages = obj.shareImages;
    var shareDescr = obj.shareDescr;
    var shareArticleId = obj.shareArticleId;
    var shareType = obj.shareType;
    var shareMediaLink = obj.shareMediaLink;
    var shareActWindowTitle = obj.shareActWindowTitle;
    var shareActWindowDescr = obj.shareActWindowDescr;

    var shareContent = [
      shareTitle,
      shareLink,
      shareImages,
      shareDescr,
      shareArticleId,
      shareType,
      shareMediaLink,
      shareActWindowTitle,
      shareActWindowDescr
    ].join("#");
    if (process.env.NODE_ENV === 'production' && isApp()) {
      window.location.href = 'https://hxsapp_visible_share_btn#' + shareContent;
    } else {
      console.log("本地开发pc环境，无法调起app分享协议")
    }

  },
  hxsapp_showloginpage: function () {
    window.location.href = "https://hxsapp_showloginpage";
  },
  hxsapp_addNubmerCar: function () {
    window.location.href = 'https://hxsapp_add_nubmer_car';
    if (process.env.NODE_ENV === 'production' && isApp()) {
      window.location.href = "https://hxsapp_showloginpage"
    } else {
      console.log("本地开发pc环境，无法调起app登录协议")
    }
  },
  hxsapp_new_webview: function (url) {
    console.log(url);
    if (process.env.NODE_ENV === 'production' && isApp()) {
      window.location.href = "https://hxsapp_new_webview#" + url
    } else {
      console.log("本地开发pc环境，无法开启新页面的app分享协议")
    }
  }
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

const UA = window.navigator.userAgent;
export var locationType = window.location.search.indexOf('sess_token');

// var downloadHref = 'https://www.hxsapp.com/download'
export function init(url) {
  // 解释权
  const UA = window.navigator.userAgent;
  if (UA.indexOf('iPhone') != -1 || UA.indexOf('iPad') != -1) {
    $('.notice').html('<p>活动最终解释权归好享瘦APP所有 </p><p>本活动与苹果公司无关</p>');
  } else if (UserAgent.indexOf('Android') != -1) {
    $('.notice').html('<p>活动最终解释权归好享瘦APP所有 </p>');
  }

  // 埋点
  if ($_GET('shareType') == 1) {
    buriedPoint('站外活动H5', '站外活动H5');
  } else {
    buriedPoint('H5活动页面', 'H5活动页面');
  }

  // 下载链接处理
  var ua = window.navigator.userAgent;
  var IsAndroid = new RegExp('Android').test(ua);
  var isAndroidQQ = new RegExp('Mobile MQQBrowser').test(ua);
  var MicroMessenger = new RegExp('MicroMessenger').test(ua);
  var isIos = new RegExp('iPhone').test(ua);
  var isIpad = new RegExp('iPad').test(ua);
  var isIosQQ = new RegExp(' QQ/').test(ua);
  var downloadHref = ((IsAndroid && isAndroidQQ && !MicroMessenger) || (isIos && isIosQQ) || (isIpad && isIosQQ)) ? 'https://www.hxsapp.com/download' : url;
  $('.d_foot a').attr('href', downloadHref);

  // rem
  function e() {
      var e = document.documentElement.clientWidth,
          t = document.querySelector("html"),
          f = e / 25;
      window.fontSize = f;
      t.style.fontSize = f + "px";
  }
  e(), window.addEventListener("resize", e);

}

export function getChannel(id) {
  var ua = window.navigator.userAgent;
  var IsAndroid = new RegExp('Android').test(ua);
  var isAndroidQQ = new RegExp('Mobile MQQBrowser').test(ua);
  var MicroMessenger = new RegExp('MicroMessenger').test(ua);

  var isIos = new RegExp('iPhone').test(ua);
  var isIpad = new RegExp('iPad').test(ua);
  var isIosQQ = new RegExp(' QQ/').test(ua);
  var head = 'http://app.hxsapp.com/html/channel_statistics.html?channel_id=' + id
  if ((IsAndroid && isAndroidQQ && !MicroMessenger) || (isIos && isIosQQ) || (isIpad && isIosQQ)) {
    head = 'https://www.hxsapp.com/download'
  }
  if (id == 'empty') {
    head = 'https://www.hxsapp.com/download'
  }
  $('.d_foot a').attr('href', head)
  return head
}

export function prevent() {
  $("body").on("touchmove", function (event) {
    event.preventDefault();
  }, false)
}

export function checklogin(hre) {
  var token = $_GET('sess_token');
  if ($_GET('shareType') == 1) {
    toastTip('.toast_tip', '快来下载好享瘦参加活动吧！', 2500);
    setTimeout(function () {
      window.location.href = hre;
    }, 500)
    return false;
  } else if (token && token.length < 10 || (locationType != -1 && !token)) {
    window.location.href = 'https://hxsapp_showloginpage';
    // myUserAgent(function (Version) {
    //     if (Version && (compareAppVersion(Version, "2.5.0") || Version == "2.5.0")) {
    //         window.location.href = 'https://hxsapp_showloginpage';
    //     }
    // })
    return false;
  }
}

//分享方法
export function shareFun(data, link, descr) {
  //H5通知客户端显示分享按钮
  var shareLink = data.link + '&shareType=1&';
  var share_url = { share_url: window.location.href };
  var shareTitle = data.title;
  var shareImages = data.share_pic;
  var shareDescr = data.descr;
  var shareType = data.share_type;

  if (link) {
    shareLink = link + '&shareType=1&';
  }
  if (descr) {
    shareDescr = descr
  }

  var Version = getHxsAppVersion();
  //qq分享
  $('#qqShareContent').attr('content', decodeURIComponent(shareTitle));
  $('#qqShareDes').attr('content', '好享瘦APP  专享福利');
  $('#qqShareImg').attr('content', shareImages);
  //分享方法
  // wxSecShare(shareTitle, shareDescr, shareLink, shareImages);

  if ((compareAppVersion(Version, "2.6.0")) && Version) {
    window.location.href = 'https://hxsapp_visible_act_share_btn#' + shareTitle + '#' + shareLink + '#' + shareImages + '#' + shareDescr + '#' + shareType;
  } else if ((compareAppVersion(Version, "2.2.0") || Version == "2.2.0") && (!(compareAppVersion(Version, "2.6.0") || Version == "2.6.0")) && Version) {
    window.location.href = 'https://hxsapp_visible_share_btn#' + shareTitle + '#' + shareLink + '#' + shareImages + '#' + shareDescr + '#' + shareType;
  } else if ((compareAppVersion(Version, "2.1.0") || Version == "2.1.0") && Version) {
    window.location.href = 'hxsapp://visible_share_btn|' + shareTitle + '|' + shareLink + '|' + shareImages + '|' + shareDescr + '|' + shareType;
  }

}