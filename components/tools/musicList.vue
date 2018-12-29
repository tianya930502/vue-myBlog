<template>
  <div class="musicList">
    <div class="songH">
      <span class="num">序号</span>
      <div>歌曲</div>
      <span class="play">播放</span>
      <span class="upload">下载</span>
      <span class="time">时长</span>
    </div>
    <a-spin size="large" :spinning="loading">
      <div class="songH" v-for="item in musicList" title="item.key">
        <span class="num">{{item.key + 1}}</span>
        <div>
          <img :src="item.pic" alt="">
          <p>{{item.title}}</p>
          <span>{{item.author}}</span>
        </div>
        <span class="play">
            <a-icon
              v-if="item.id == playId && playing"
              type="pause-circle-o"
              @click="pauseMusic(item)"
            ></a-icon>
            <a-icon
              v-else
              type="play-circle-o"
              @click="playMusic(item)"
            ></a-icon>
          </span>
        <span class="upload"><a :href="item.url"><a-icon type="upload" /></a></span>
        <span class="time">{{dealTime(item.time)}}</span>
      </div>
    </a-spin>
  </div>
</template>
<script>
  import Vue from 'vue';
  import { Spin, Icon } from 'ant-design-vue';
  Vue.use(Spin);
  Vue.use(Icon);

  export default {
    props: {
      musicList: Array,     // 音乐列表
      playId: String,       // 当前播放音乐的Id
      playing: Boolean,     // 是播放还是暂停
      loading: Boolean,     // 是否加载中
    },
    name: 'music-list',
    data() {
      return {
        isPlaying: false,
      }
    },
    methods: {
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
      playMusic(item) {
        // this.isPlaying = true;
        this.$emit('playMusic', item);
      },
      pauseMusic(item) {
        // this.isPlaying = false;
        this.$emit('pauseMusic', item);
      }
    },
    mounted: function() {
      console.log(this.playId);
    },
    updated: function() {
      console.log(this.playing);
    }
  }
</script>
<style lang="scss">
  .musicList {
    height: auto;
    .songH {
      height: 60px;
      width: 100%;
      padding: 0 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      span {
        color: #333;
        text-align: center;
      }
      .num {
        width: 80px;
        color: #999;
      }
      div {
        height: 60px;
        min-width: 200px;
        text-align: left;
        display: flex;
        align-items: center;
        width: calc(100% - 400px);
        img {
          width: 45px;
          height: 45px;
          border-radius: 5px;
        }
        p {
          color: #222;
          margin: 0 20px;
          font-size: 14px;
        }
        span {
          color: #999;
          font-size: 13px;
        }
      }
      .play {
        width: 80px;
        cursor: pointer;
      }
      .upload {
        a {
          color: #000;
        }
        width: 80px;
        cursor: pointer;
      }
      .time {
        width: 120px;
      }
      i {
        transform: scale(1.5);
      }
    }
  }
</style>
