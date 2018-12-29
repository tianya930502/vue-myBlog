



音乐表单接口：post请求
接口：https://api.hibai.cn/api/index/index
  网易云音乐歌单：
    {
      TransCode: '020117', // 请求码
      OpenId: '7cwa.com', // 请求地址
      Body: '', // 请求内容
    }

  QQ音乐歌单：
    {
      TransCode: '020337', // 请求码
      OpenId: '7cwa.com', // 请求地址
      Body: '', // 请求内容
    }

  酷狗音乐歌单： 请求不到数据
    {
      TransCode: '020227', // 请求码
      OpenId: '7cwa.com', // 请求地址
      Body: '', // 请求内容
    }

  歌曲分类：所有歌曲可以分为哪些类别
    {
      TransCode: '020553', // 请求码
      OpenId: '7cwa.com', // 请求地址
      Body: '', // 请求内容
    }
  每一类歌曲表单:
    {
      TransCode: '020112', // 请求码
      OpenId: '7cwa.com', // 请求地址
      'Body[SongListId]': '', // 分类歌曲的discover_id值
    }



歌曲接口：get请求
https://api.hibai.cn/music/Music/Music?
  {
    id: '', // 歌曲ID
    type: '', // 请求类型 'lrc': 歌词, 'url': 音乐播放地址, 'pic': 歌曲图片
  }
