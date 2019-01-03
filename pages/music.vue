<template>
  <div class="music">
    <div class="header">
      <h1>My Music</h1>
      <div class="category">
        <h3 @click="checkType('home')">首页</h3>
        <h3 @click="checkType('home')">排行榜</h3>
        <h3 @click="checkType('songList')">歌单</h3>
        <h3 @click="checkType('about')">关于</h3>
      </div>
      <a-input-search
        placeholder="请输入歌名搜索"
        style="width: 250px"
        @search="onSearch"
        pressEnter="onSearch"
        enterButton
      />
    </div>
    <div class="songs" v-if="type === 'home'">
      <div class="source">
        <a-tabs defaultActiveKey="020117" size="large" @change="checkSource">
          <a-tab-pane key="020117">
          <span slot="tab">
            <a-icon type="aliyun" />
            网易云音乐
          </span>
            <musicList
              :musicList="musicList"
              :playId="playId"
              :playing="playing"
              :loading="loading"
              @playMusic="playMusic"
              @pauseMusic="pauseMusic"
            />
          </a-tab-pane>
          <a-tab-pane key="020337">
          <span slot="tab">
            <a-icon type="qq" />
            QQ音乐
          </span>
            <musicList
              :musicList="musicList"
              :playId="playId"
              :playing="playing"
              :loading="loading"
              @playMusic="playMusic"
              @pauseMusic="pauseMusic"
            />
          </a-tab-pane>
        </a-tabs>
        <div class="pagination">
          <a-pagination
            :defaultCurrent="currentPage"
            :pageSize="15"
            :total="total"
            @change="changePage"
          />
        </div>
      </div>
    </div>
    <div class="songList" v-if="type === 'songList'">
      <div class="type" v-if="typeShow">
        <div class="one" v-for="item in musicTypeList" @click="clickMusicType(item)">
          <img :src="item.discover_pic" alt="">
          <span>{{item.discover_title}}</span>
        </div>
      </div>
      <div class="typeSongs" v-if="!typeShow">
        <musicList
          :musicList="musicList"
          :playId="playId"
          :playing="playing"
          :loading="loading"
          @playMusic="playMusic"
          @pauseMusic="pauseMusic"
        />
        <div class="pagination">
          <a-pagination
            :defaultCurrent="currentPage"
            :pageSize="15"
            :total="total"
            @change="changePage"
          />
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="footerKe">
        <div class="footL">
          <div>
            <img :src="playImg" alt="">
          </div>
          <a-icon
            v-if="playing"
            type="pause-circle-o"
            @click="pause"
          ></a-icon>
          <a-icon
            v-if="!playing"
            type="play-circle-o"
            @click="play"
          ></a-icon>
        </div>
        <div class="footC">
          <div class="name">
            <span>{{playName}} - </span>
            <span>{{playAuthor}}</span>
          </div>
          <div class="lyric">
            <div class="ke">
              <p v-for="(line, index) in playLyric" :class="{'current': line.time <= currentTime}" :id="index">
                {{line.txt}}
              </p>
            </div>
          </div>
          <div class="audio">
            <myProgress :value="value" @valueChange="valueChange"/>
            <span class="showTime">{{currentTime ? dealTime(currentTime) : '00:00'}} / {{dealTime(totalTime)}}</span>
            <div class="operate">
              <div class="sound">
                <div class="soundShow">
                  <soundControl :sound="sound" @soundChange="soundChange"/>
                </div>
                <a-icon type="sound" />
              </div>
              <a-tooltip placement="top" >
                <template slot="title">
                  <span>循环播放</span>
                </template>
                <a-icon type="arrow-right" @click="clickCirculation" :class="{'clicked': circulation}"/>
              </a-tooltip>
              <a-tooltip placement="top" >
                <template slot="title">
                  <span>单曲循环</span>
                </template>
                <a-icon type="retweet" @click="clickSingle" :class="{'clicked': single}"/>
              </a-tooltip>
            </div>
          </div>
          <audio
            id="audio"
            controls="controls"
            ref="audio"
            :src="playUrl"
            @play="play"
            @pause="pause"
            @timeupdate="updateTime"
          >
          </audio>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue';
  import axios from 'axios';
  import Lyric from 'lyric-parser'; // 处理歌词
  import { Input, Pagination, Spin, Icon, Progress, Tooltip, Tabs, message } from 'ant-design-vue';
  import musicList from '../components/tools/musicList.vue';  // 歌曲列表
  import myProgress from '../components/tools/myProgress.vue'; // 歌曲进度条
  import soundControl from '../components/tools/soundControl.vue'; // 声音进度条
  import './music.scss';
  import 'ant-design-vue/dist/antd.css';

  Vue.use(Input);
  Vue.use(Pagination);
  Vue.use(Spin);
  Vue.use(Icon);
  Vue.use(Progress);
  Vue.use(Tooltip);
  Vue.use(Tabs);
  Vue.use(message);

  Vue.prototype.$message = message;

  export default {
    name: 'music',
    components: {
      musicList,
      myProgress,
      soundControl
    },
    data() {
      return {
        type: 'songList',     // 首页/排行榜 ：home, 歌单：songList, 关于：about
        typeShow: true,       // 在歌单中默认显示的是歌曲类型，点击某一类型是显示歌曲列表
        musicTypeList: [],    // 所有音乐类型
        source: '020117',     // 音乐来源。网易云：'020117'，QQ：'020337'
        circulation: true,    // 当前歌曲放完是否放下一首
        single: false,        // 是否单曲循环
        sound: '50',          // 音量
        value: '0',           // 当前播放百分比
        nextMusicDetail: {},  // 下一首歌详情

        playId: '',           // 当前点击的音乐Id
        playImg: '',          // 当前播放歌曲的图片地址
        playName: '',         // 当前播放歌曲名
        playAuthor: '',       // 当前播放歌曲的作者
        playUrl: '',          // 当前音乐播放地址
        playLyric: '',        // 当前播放音乐的歌词
        currentTime: 0,       // 当前播放时间
        totalTime: 0,         // 总时间

        playing: false,       // 是播放还是暂停
        loading: true,        // 是否加载中
        allMusicList: [],     // 拿到所有的音乐表单
        musicList: [],        // 根据分页拿到对应的音乐表单
        currentPage: 1,
        pageSize: 10,
        total: 1,
      }
    },
    methods: {
      dealObj(Obj) {
        return new URLSearchParams(Obj).toString();
      },
      // 从url中拿到Id
      getId(url) {
        const arr = url.split('?')[1].split('&');
        let id;
        for(var i = 0; i < arr.length; i++) {
          if(arr[i].split('=')[0] === 'id') {
            id =  arr[i].split('=')[1];
            return id;
          }
        }
      },
      // 切换首页/歌单
      checkType(value) {
        this.typeShow = true;
        this.type = value;
        console.log(value);
      },
      // 点击歌单中的某一类型音乐
      clickMusicType(item, currentPage=1, pageSize=15) {
        console.log('current:', this.currentTime);
        console.log('value:', this.value);
        this.typeShow = false;
        this.loading = true;
        this.playing = false;
        // 因为歌单中的音乐是从QQ音乐中拿到的
        this.source = '020337';
        axios({
          method: 'post',
          url: 'https://api.hibai.cn/api/index/index',
          data: this.dealObj({
            TransCode: '020335',
            OpenId: '7cwa.com',
            'Body[SongListId]': item.discover_id,
          })
        }).then((res) => {
          if (res && res.status == 200) {
            this.loading = false;
            const arr = res.data.Body;
            arr.forEach((item, key) => {
              item.key = key;
              // 网易云音乐中有id,QQ音乐中没有id.在QQ音乐中要从URL中拿到ID
              if(!item.id) {
                item.id = this.getId(item.url);
              }
            });
            this.getMusicLyric(arr[0].id, this.source);
            // 获取下一首歌的信息
            this.nextMusicDetail = arr[1];
            this.allMusicList = arr;
            this.total = arr.length;
            this.musicList = arr.slice(0, pageSize);
            this.playId = String(arr[0].id);
            this.playImg = arr[0].pic;
            this.playName = arr[0].title;
            this.playAuthor = arr[0].author;
            this.playUrl = arr[0].url;
            this.totalTime = arr[0].time;
            this.currentTime = 0;
            this.value = '0';
          }
        });
      },
      // 切换音乐来源
      checkSource(value) {
        this.source = value;
        this.playing = false;
        this.getMusicList(1, 15);
      },
      // 处理歌曲时间, 转成00：00格式
      dealTime(time) {
        if (time) {
          const minute = Math.floor(time / 60) >= 10 ? Math.floor(time / 60) : '0' + Math.floor(time / 60);
          const second = (time % 60) >= 10 ? time % 60 : '0' + (time % 60);
          return `${minute}:${second}`;
        } else {
          return '--'
        }
      },
      onSearch(value) {
        console.log(value);
        alert('暂时没有搜索功能！！！');
      },
      // 音乐类型列表
      getMusicTypeList() {
        this.playing = false;
        axios({
          method: 'post',
          url: 'https://api.hibai.cn/api/index/index',
          data: this.dealObj({
            TransCode: '020553',
            OpenId: '7cwa.com',
            // 'Body[SongListId]': '2382222083',
          })
        }).then((res) => {
          if (res && res.status == 200) {
            console.log('歌曲类型列表：', res.data.Body);
            this.musicTypeList = res.data.Body;
          }
        });
      },
      // 音乐列表, 网易云音乐：soruce='020117' QQ音乐： source='020337'
      getMusicList(currentPage=1, pageSize=15) {
        this.loading = true;
        axios({
          method: 'post',
          url: 'https://api.hibai.cn/api/index/index',
          data: this.dealObj({
            TransCode: this.source,
            OpenId: '7cwa.com',
            // 'Body[SongListId]': '2382222083',
          })
        }).then((res) => {
          if (res && res.status == 200) {
            this.loading = false;
            const arr = res.data.Body;
            arr.forEach((item, key) => {
              item.key = key;
              // 网易云音乐中有id,QQ音乐中没有id.在QQ音乐中要从URL中拿到ID
              if(!item.id) {
                item.id = this.getId(item.url);
              }
            });
            this.getMusicLyric(arr[0].id, this.source);
            // 获取下一首歌的信息
            this.nextMusicDetail = arr[1];
            this.allMusicList = arr;
            this.total = arr.length;
            this.musicList = arr.slice(0, pageSize);
            this.playId = String(arr[0].id);
            this.playImg = arr[0].pic;
            this.playName = arr[0].title;
            this.playAuthor = arr[0].author;
            this.playUrl = arr[0].url;
            this.totalTime = arr[0].time;
          }
        });
      },
      // 点击单曲播放
      clickSingle() {
        if(!this.single) {
          this.single = true;
        }
        this.circulation = false;
        this.$refs.audio.loop = true;
      },
      // 点击循环播放
      clickCirculation() {
        this.single = false;
        if(!this.circulation) {
          this.circulation = true;
        }
      },
      // 获取音乐歌词
      getMusicLyric(id) {
        console.log(this.source);
         var music;
        if(this.source == '020117') {
          music = 'Music'
        } else if (this.source == '020337') {
          music = 'QMusic';
        }
        axios({
          method: 'get',
          url: `https://api.hibai.cn/music/${music}/Music?id=${id}&type=lrc`,
        }).then((res) => {
          if (res && res.status == 200) {
            const lyric = new Lyric(res.data).lines;
            lyric.forEach((item, index) => {
              item.time = item.time/1000;
            });
            this.playLyric = lyric;
          }
        });
      },
      // 播放列表中音乐的播放按键
      playMusic(item) {
        const allMusicList = this.allMusicList;
        const itemKey = item.key + 1;
        const newObj = allMusicList.filter((it) => {
          return Number(itemKey) === Number(it.key);
        })
        if(newObj.length > 0) {
          this.nextMusicDetail = newObj[0];
        } else {
          this.nextMusicDetail = '';
        }
        this.getMusicLyric(item.id, );
        const that = this;
        setTimeout(function() {
          that.play();
        }, 100);
        this.playId = String(item.id);
        this.playImg = item.pic;
        this.playName = item.title;
        this.playAuthor = item.author;
        this.playUrl = item.url;
        this.totalTime = item.time;
      },
      // 点击列表中音乐的暂停按键
      pauseMusic() {
        this.pause();
      },
      // 播放时间
      updateTime(e) {
        console.log('currentTime', e.target.currentTime);
        const currentTime = Math.round(e.target.currentTime);
        // 当前播放时间（保留整数）
        this.currentTime = currentTime;
        // 播放百分比（保留两位小数）
        this.value = (e.target.currentTime*100/this.totalTime).toFixed(2);
        const isEnded = this.$refs.audio.ended;
        if (isEnded && this.single) {
          this.currentTime = 0;
          this.value = '0';
          this.play();
        } else if (isEnded && this.circulation) {
          this.currentTime = 0;
          this.value = '0';
          this.playMusic(this.nextMusicDetail);
        }
        this.dealLyric();
      },
      // 播放进度改变
      valueChange(value) {
        // 当前播放时间 = 总时间乘以100除以进度再四舍五入取整
        this.value = value;
        console.log('播放进度：', value);
        const currentTime = this.totalTime*value/100;
        this.currentTime = Math.round(currentTime);
        const audio = document.querySelector('audio');
        audio.currentTime = this.currentTime;
      },
      // 播放音量改变
      soundChange(value) {
        this.sound = value;
        this.$refs.audio.volume = value / 100;
        console.log(value);
      },
      // 播放
      play() {
        this.playing = true;
        const audio = document.querySelector('audio');
        this.$refs.audio.volume = this.sound / 100;
        audio.play();
        const that = this;
        function xunhuan() {
          setTimeout(function(){
            // 如果加载完成 获取歌曲总时长
            if (audio.readyState == 4) {
              that.totalTime = Math.round(audio.duration);
              console.log('状态：', audio.readyState);
              console.log('时长：', audio.duration);
            } else {
              xunhuan();
            }
          }, 100)
        }
        xunhuan();
      },
      // 暂停
      pause() {
        this.playing = false;
        const audio = document.querySelector('audio');
        audio.pause();
      },
      // 分页
      changePage(current) {
        const start = (Number(current) - 1) * 15;
        const end = (Number(current) - 1) * 15 + 15;
        this.musicList = this.allMusicList.slice(start, end)
      },
      // 处理歌词
      dealLyric() {
        const documents = document.getElementsByClassName('current');
        const ke = document.getElementsByClassName('ke')[0];
        const length = documents.length;
        if(length > 0) {
          const line = documents[length-1].getAttribute('id');
          ke.style.top = `-${line*20}px`;
        }
      },
    },
    mounted: function () {
      this.getMusicList();
      this.getMusicTypeList();
    },
  }
</script>

<style lang="scss">

</style>
