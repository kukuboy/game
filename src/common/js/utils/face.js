const ROOM_FACE_BOX = {
  '[惊讶]': require('../images/face/1.gif'),
  '[撇嘴]': require('../images/face/2.gif'),
  '[色色]': require('../images/face/3.gif'),
  '[发呆]': require('../images/face/4.gif'),
  '[得意]': require('../images/face/5.gif'),
  '[流泪]': require('../images/face/6.gif'),
  '[害羞]': require('../images/face/7.gif'),
  '[闭嘴]': require('../images/face/8.gif'),
  '[瞌睡]': require('../images/face/9.gif'),
  '[大哭]': require('../images/face/10.gif'),
  '[尴尬]': require('../images/face/11.gif'),
  '[发怒]': require('../images/face/12.gif'),
  '[调皮]': require('../images/face/13.gif'),
  '[呲牙]': require('../images/face/14.gif'),
  '[微笑]': require('../images/face/15.gif'),
  '[奋斗]': require('../images/face/16.gif'),
  '[酷拽]': require('../images/face/17.gif'),
  '[抓狂]': require('../images/face/18.gif'),
  '[呕吐]': require('../images/face/19.gif'),
  '[偷笑]': require('../images/face/20.gif'),
  '[愉快]': require('../images/face/21.gif'),
  '[白眼]': require('../images/face/22.gif'),
  '[傲慢]': require('../images/face/23.gif'),
  '[饥饿]': require('../images/face/24.gif'),
  '[困盹]': require('../images/face/25.gif'),
  '[惊恐]': require('../images/face/26.gif'),
  '[流汗]': require('../images/face/27.gif'),
  '[憨笑]': require('../images/face/28.gif'),
  '[悠闲]': require('../images/face/29.gif'),
  '[咒骂]': require('../images/face/30.gif'),
  '[疑问]': require('../images/face/31.gif'),
  '[嘘声]': require('../images/face/32.gif'),
  '[晕了]': require('../images/face/33.gif'),
  '[疯了]': require('../images/face/34.gif'),
  '[敲打]': require('../images/face/35.gif'),
  '[再见]': require('../images/face/36.gif'),
  '[冷汗]': require('../images/face/37.gif'),
  '[擦汗]': require('../images/face/38.gif'),
  '[抠鼻]': require('../images/face/39.gif'),
  '[鼓掌]': require('../images/face/40.gif'),
  '[糗了]': require('../images/face/41.gif'),
  '[坏笑]': require('../images/face/42.gif'),
  '[左哼]': require('../images/face/43.gif'),
  '[右哼]': require('../images/face/44.gif'),
  '[哈欠]': require('../images/face/45.gif'),
  '[鄙视]': require('../images/face/46.gif'),
  '[可怜]': require('../images/face/47.gif'),
  '[惊吓]': require('../images/face/48.gif'),
  '[亲亲]': require('../images/face/49.gif'),
  '[阴险]': require('../images/face/50.gif'),
  '[快哭]': require('../images/face/51.gif'),
  '[委屈]': require('../images/face/52.gif'),
  '[难过]': require('../images/face/53.gif')
}
const ROOM_FACE_LIST = {
  '[惊讶]': require('../images/face/1.gif'),
  '[撇嘴]': require('../images/face/2.gif'),
  '[色色]': require('../images/face/3.gif'),
  '[发呆]': require('../images/face/4.gif'),
  '[得意]': require('../images/face/5.gif'),
  '[流泪]': require('../images/face/6.gif'),
  '[害羞]': require('../images/face/7.gif'),
  '[闭嘴]': require('../images/face/8.gif'),
  '[瞌睡]': require('../images/face/9.gif'),
  '[大哭]': require('../images/face/10.gif'),
  '[尴尬]': require('../images/face/11.gif'),
  '[发怒]': require('../images/face/12.gif'),
  '[调皮]': require('../images/face/13.gif'),
  '[呲牙]': require('../images/face/14.gif'),
  '[微笑]': require('../images/face/15.gif'),
  '[奋斗]': require('../images/face/16.gif'),
  '[酷拽]': require('../images/face/17.gif'),
  '[抓狂]': require('../images/face/18.gif'),
  '[呕吐]': require('../images/face/19.gif'),
  '[偷笑]': require('../images/face/20.gif'),
  '[愉快]': require('../images/face/21.gif'),
  '[白眼]': require('../images/face/22.gif'),
  '[傲慢]': require('../images/face/23.gif'),
  '[饥饿]': require('../images/face/24.gif'),
  '[困盹]': require('../images/face/25.gif'),
  '[惊恐]': require('../images/face/26.gif'),
  '[流汗]': require('../images/face/27.gif'),
  '[憨笑]': require('../images/face/28.gif'),
  '[悠闲]': require('../images/face/29.gif'),
  '[咒骂]': require('../images/face/30.gif'),
  '[疑问]': require('../images/face/31.gif'),
  '[嘘声]': require('../images/face/32.gif'),
  '[晕了]': require('../images/face/33.gif'),
  '[疯了]': require('../images/face/34.gif'),
  '[敲打]': require('../images/face/35.gif'),
  '[再见]': require('../images/face/36.gif'),
  '[冷汗]': require('../images/face/37.gif'),
  '[擦汗]': require('../images/face/38.gif'),
  '[抠鼻]': require('../images/face/39.gif'),
  '[鼓掌]': require('../images/face/40.gif'),
  '[糗了]': require('../images/face/41.gif'),
  '[坏笑]': require('../images/face/42.gif'),
  '[左哼]': require('../images/face/43.gif'),
  '[右哼]': require('../images/face/44.gif'),
  '[哈欠]': require('../images/face/45.gif'),
  '[鄙视]': require('../images/face/46.gif'),
  '[可怜]': require('../images/face/47.gif'),
  '[惊吓]': require('../images/face/48.gif'),
  '[亲亲]': require('../images/face/49.gif'),
  '[阴险]': require('../images/face/50.gif'),
  '[快哭]': require('../images/face/51.gif'),
  '[委屈]': require('../images/face/52.gif'),
  '[难过]': require('../images/face/53.gif')
}
const html = function (val) {
  return val.replace(/[<"& />]/g, function (w) {
    return {
      '<': '&lt;',
      '"': '&quot;',
      '&': '&amp;',
      ' ': '&nbsp;',
      '/': '&#x2F',
      '>': '&gt'
    }[w]
  })
}
const escapeHtml = function (val) {
  var arrEntities = {'lt': '<', '#x2F': '/', 'gt': '>', 'nbsp': ' ', 'amp': '&', 'quot': '"'}
  return val.replace(/&(lt|#x2F|gt|nbsp|amp|quot);/ig, function (all, t) { return arrEntities[t] })
}
const htmlEscape = function (val) {
  //   let regImg = '<img style="max-width: 12rem; padding: 1rem;" src="' + window.envConf.baseUrl
  //   let index = val.indexOf(regImg)
  //   if (index === 0 && !val.substring(62).includes('<')) {
  //     return val
  //   } else
  val = escapeHtml(val)
  // val = escapeHtml(val)
  // 需要跳过的标签放在这里
  // let skipChange = ['<div>', '</div>', '<br>']
  // for (let i of skipChange) {
  //   let l = val.indexOf(i)
  //   if (l >= 0) {
  //     return htmlEscape(val.substring(0, l)) + i + htmlEscape(val.substring(l + i.length))
  //   }
  // }
  // 针对表情情况
  let first = '<img style="height:1.3rem;" src="data:image/gif;base64'
  if (val.indexOf(first) >= 0) {
    for (let key in ROOM_FACE_BOX) {
      let img = '<img style="height:1.3rem;" src="' + ROOM_FACE_BOX[key] + '">'
      let start = val.indexOf(img)
      if (start >= 0) {
        let end = start + img.length
        return htmlEscape(val.substring(0, start)) + img + htmlEscape(val.substring(end))
      }
    }
  }
  // 针对链接情况
  let URLRexExp = new RegExp(/[A-Za-z]+:\/\/[A-Za-z0-9-_]+.[A-Za-z0-9-_%&?/.:=]+/)
  if (URLRexExp.test(val)) {
    if (val.indexOf('<a href="http') >= 0 && val.indexOf('</a>') >= 0) {
      return htmlEscape(val.substring(0, val.indexOf('<a href="http'))) + val + htmlEscape(val.substring(val.indexOf('</a>') + 4))
    } else {
      return val.replace(URLRexExp, function (value) {
        return htmlEscape('<a href="' + value + '">' + value + '</a>')
      })
    }
  }
  //   let two = 'http'
  //   if (val.indexOf(two) >= 0) {
  //     if (val.indexOf('<a href="http') >= 0 && val.indexOf('</a>')) {
  //       return val
  //     } else { return '<a href="' + val + '">' + val + '</a>' }
  //   }
  // 针对评价情况
  //   let regEvaluate = '请你对我此次服务进行评价吧~，<a href="#/evaluate">点此进行评价</a>'
  //   if (val === regEvaluate) {
  //     return val
  //   } else {
  //     return html(val)
  //   }
  return val
  // return html(val)
}
// 将表情替换为img插入
const faceInsert = function (val) {
  for (let key in ROOM_FACE_BOX) {
    let img = '<img  src="' + ROOM_FACE_BOX[key] + '">'
    let reg = '\\' + key.replace(/\]/, '\\]')
    val = val.replace(new RegExp(reg, 'g'), img)
  }
  return val
}
const faceOutsert = function (val) {
  for (let key in ROOM_FACE_BOX) {
    let img = '<img style="height:1.3rem;" src="' + ROOM_FACE_BOX[key] + '">'
    let start = val.indexOf(img)
    let reg = key
    if (start >= 0) {
      let end = start + img.length
      return faceOutsert(val.substring(0, start) + reg + val.substring(end))
    }
  }
  return val
}
const imageInsert = function (val, imageMsg) {
  for (let i of imageMsg) {
    let src = window.envConf.baseUrl + i.url
    val += '<img style="max-width: 88%; padding: 1rem;" src="' + src + '">'
  }
  return val
}
const toMine = function (val, atMsg) {
  for (let i of atMsg) {
    val = '<a style="color:red">' + '@' + i.userName + ' ' + '</a>' + val
  }
  return val
}
const urlInsert = function (val, urlMsg) {
  for (let i of urlMsg) {
    val += '<a href="' + i.url + '">' + i.text + ' ' + '</a>'
    // val += '<a href="javascript:void(0)">' + i.text + ' ' + '</a>'
  }
  return val
}
export {
  ROOM_FACE_BOX,
  ROOM_FACE_LIST,
  faceInsert,
  faceOutsert,
  html,
  htmlEscape,
  escapeHtml,
  imageInsert,
  toMine,
  urlInsert
}
