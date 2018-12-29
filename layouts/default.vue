<template>
  <div id="app">
    <LeftSide />
    <nuxt/>
  </div>
</template>

<script>
  import LeftSide from '../components/layout/LeftSide.vue';

  export default {
    name: 'app',
    components: { LeftSide },
  }
</script>


<style lang="scss">
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    padding: 0;
  }
  a {
    text-decoration: none;
  }
  /*@primary-color: #1890ff;                         // 全局主色*/
  /*@link-color: #1890ff;                            // 链接色*/
  /*@success-color: #52c41a;                         // 成功色*/
  /*@warning-color: #faad14;                         // 警告色*/
  /*@error-color: #f5222d;                           // 错误色*/
  /*@font-size-base: 14px;                           // 主字号*/
  /*@heading-color: rgba(0, 0, 0, .85);              // 标题色*/
  /*@text-color: rgba(0, 0, 0, .65);                 // 主文本色*/
  /*@text-color-secondary : rgba(0, 0, 0, .45);      // 次文本色*/
  /*@disabled-color : rgba(0, 0, 0, .25);            // 失效色*/
  /*@border-radius-base: 4px;                        // 组件/浮层圆角*/
  /*@border-color-base: #d9d9d9;                     // 边框色*/
  /*@box-shadow-base: 0 2px 8px rgba(0, 0, 0, .15);  // 浮层阴影*/
}
  #app {
    display: flex;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    .right {
      height: 100vh;
      width: calc(100vw - 200px);
      overflow: hidden;
    }
  }

</style>
