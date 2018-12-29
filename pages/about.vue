<template>
  <section class="container">
    <div>
      <h1 class="title">
        vue-myBlog
      </h1>
      <h2 class="subtitle">
        about
      </h2>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green">Documentation</a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey">GitHub</a>
      </div>
      <a-button type="primary">Primary</a-button>
      <a-button>Default</a-button>
      <a-button type="dashed">Dashed</a-button>
      <a-button type="danger">Danger</a-button>
      <a-pagination v-model="current" :total="50" />
    </div>
  </section>
</template>

<script>
  import Vue from 'vue';
  import { Button, Pagination } from 'ant-design-vue';
  import 'ant-design-vue/lib/button/style/css';
  import 'ant-design-vue/lib/pagination/style/css';
  // import 'ant-design-vue/dist/antd.css';

  Vue.use(Button);
  Vue.use(Pagination);


  export default {
    components: {

    },
    data() {
      return {
        current: 2,
      }
    }
  }
</script>

<style>

  .container {
    height: calc(100vh - 60px);
    overflow-y: scroll;
    /*display: flex;*/
    /*justify-content: center;*/
    /*align-items: center;*/
    /*text-align: center;*/

  }


</style>
