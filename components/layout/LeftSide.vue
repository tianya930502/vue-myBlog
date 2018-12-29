<template>
  <div id="leftSide">
    <div class="left-header">
      <img src="../../static/images/blog.png" />
      <h3>MY Blog</h3>
    </div>
    <a-menu
      style="width: 200px"
      :defaultSelectedKeys="keys"
      theme="dark"
      mode="inline"
    >
      <a-menu-item key="1">
        <nuxt-link :to="'/'" >
          <a-icon type="home" />
          个人简介
        </nuxt-link>
      </a-menu-item>
      <a-menu-item key="2">
        <nuxt-link :to="'/music'">
          <a-icon type="medium" />
          我的音乐
        </nuxt-link>
      </a-menu-item>
      <a-menu-item key="3">
        <nuxt-link :to="'/about'">
          <a-icon type="compass" />
          开心一刻
        </nuxt-link>
      </a-menu-item>
    </a-menu>
  </div>
</template>

<script>
  import Vue from 'vue';
  import { Icon, Menu } from 'ant-design-vue';
  import 'ant-design-vue/lib/icon/style/css';

  Vue.use(Icon);
  Vue.use(Menu);

  export default {
    name: 'left-side',
    data() {
      return {
        keys: ['2']
      }
    },
    methods: {

    },
    mounted: function() {
      const pathname = window.location.pathname;
      console.log('pathname:',pathname);
      switch(pathname){
        case '/':
          this.keys = ['1']; break;
        case '/music':
          this.keys = ['2']; break;
        case '/about':
          this.keys = ['3']; break;
      }
    },
  }
</script>

<style lang="scss">
  #leftSide {
    width: 200px;
    height: auto;
    background: rgba(0, 0, 0, 0.9);
    .left-header {
      background: #fff;
      margin-bottom: 10px;
      height: 60px;
      display: flex;
      align-items: center;
      img {
        width: 60px;
        height: 60px;
        margin: 0 10px;
      }
      h3 {
        color: #1890ff;
        font-size: 20px
      }
    }
  }
</style>
