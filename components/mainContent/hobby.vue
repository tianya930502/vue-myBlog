<template>
  <div class="hobby">
    <a-tabs defaultActiveKey="1" type="card" size="large">
      <a-tab-pane key="1">
      <span slot="tab">
        <a-icon type="tool" />
        所有
      </span>
        <div class="all">
          <figure class="ke1">
            <img src="/Images/fj1.jpg" alt="">
            <figcaption>
              <h4>这是第一张图片</h4>
            </figcaption>
          </figure>
          <figure class="ke2">
            <img src="/Images/fj2.jpg" alt="">
            <figcaption>
              <span>利用位移过渡</span>
              <span>多条简介文字</span>
              <span>逐一飞入动画</span>
            </figcaption>
          </figure>
          <figure class="ke3">
            <img src="/Images/fj3.jpg" alt="">
            <figcaption>
              <p class="bot">从底部划出文字或动画</p>
            </figcaption>
          </figure>
          <figure class="ke4">
            <img src="/Images/mn1.jpg" alt="">
            <figcaption>
              <p class="info1">利用旋转显示隐藏信息</p>
              <p class="info2">延时0.5秒aaaaaaaaa</p>
            </figcaption>
          </figure>
          <figure class="ke5">
            <img src="/Images/mn2.jpg" alt="">
            <figcaption>
              <div></div>
              <p class="info3">第五张图片</p>
            </figcaption>
          </figure>
          <figure class="ke6">
            <img src="/Images/mn3.jpg" alt="">
            <figcaption>
              <h4>通过斜拉控制文字的显示</h4>
              <h4>延迟0.5秒显示</h4>
            </figcaption>
          </figure>
          <figure class="ke7">
            <img src="/Images/mn4.jpg" alt="">
            <figcaption>
              <h4>hover时图片放大1.2倍</h4>
            </figcaption>
          </figure>
          <figure class="ke8">
            <img src="/Images/xk1.jpg" alt="">
            <figcaption>
              <span class="l"></span>
              <span class="r"></span>
              <span class="t"></span>
              <span class="b"></span>
              <span class="info4">
                通过缩放属性绘制线条
              </span>
            </figcaption>
          </figure>
          <div class="ke9">
            <img src="/Images/xk2.jpg" alt="">
          </div>
        </div>
      </a-tab-pane>
      <a-tab-pane key="2">
      <span slot="tab">
        <a-icon type="form" />
        风景
      </span>
        <div class="oth">
          <img v-for="item in fj" :src="item.url" alt="">
        </div>
      </a-tab-pane>
      <a-tab-pane key="3">
      <span slot="tab">
        <a-icon type="api" />
        美女
      </span>
        <div class="oth">
          <img v-for="item in mn" :src="item.url" alt="">
        </div>
      </a-tab-pane>
      <a-tab-pane key="4">
      <span slot="tab">
        <a-icon type="form" />
        星空
      </span>
        <div class="oth">
          <img v-for="item in xk" :src="item.url" alt="">
        </div>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script>
  import Vue from 'vue';
  import { Tabs, Progress, Collapse } from 'ant-design-vue';
  import 'ant-design-vue/dist/antd.css';

  Vue.use(Tabs);
  Vue.use(Progress);
  Vue.use(Collapse);
  export default {
    name: 'hobby',
    data() {
      return {
        mn: [
          { url: "/Images/mn1.jpg" },
          { url: "/Images/mn2.jpg" },
          { url: "/Images/mn3.jpg" },
          { url: "/Images/mn4.jpg" },
        ],
        xk: [
          { url: "/Images/xk1.jpg" },
          { url: "/Images/xk2.jpg" },
        ],
        fj: [
          { url: "/Images/fj1.jpg" },
          { url: "/Images/fj2.jpg" },
          { url: "/Images/fj3.jpg" },
        ]
      }
    },
  }
</script>


<style lang="scss">
  .hobby {
    display: flex;
    width: 100%;
    height: 100%;
    padding: 20px;
    justify-content: center;
    .all {
      width: 500px;
      height: 360px;
      /*background: #ccc;*/
      padding: 0 10px;
      h4, img, span, .bot {
        transition: all 0.3s;
      }
      h4 {
        color: #000;
        background: #fff;
      }
      figure {
        float: left;
        width: 145px;
        height: 110px;
        position: relative;
        overflow: hidden;
        margin: 5px;
        figcaption {
          padding: 0 20px;
        }
        img {
          position: absolute;
          left: 0;
          top: 0;
          width: 175px;
          height: 110px;
        }
      }
      figure:hover img {
        transform: translateX(-30px);
      }
      .ke1 h4 {
        font-size: 14px;
        position: absolute;
        bottom: -30px;
      }
      .ke1:hover h4 {
        z-index: 100;
        transform: translateY(-40px);
      }
      .ke2 {
        span {
          position: absolute;
          background: #fff;
          left: -200px;
        }
        span:nth-child(1) {
          color: red;
          top: 15px;
        }
        span:nth-child(2) {
          color: blue;
          top: 45px;
          transition-delay: 0.1s;
        }
        span:nth-child(3) {
          color: green;
          top: 75px;
          transition-delay: 0.2s;
        }
      }
      .ke2:hover span {
        transform: translateX(220px);
      }
      .ke3 {
        figcaption {
          padding: 0;
        }
        .bot {
          margin: 0;
          position: absolute;
          bottom: -30px;
          width: 145px;
          height: 30px;
          line-height: 30px;
          background: #fff;
        }
      }
      .ke3:hover .bot {
        transform: translateY(-30px);
      }
      .ke4 {
        figcaption {
          transition: all 0.3s;
          background: #fff;
          position: absolute;
          width: 200px;
          height: 100px;
          bottom: -100px;
          .info1 {
            opacity: 0;
            transition-delay: 0.25s;
          }
          .info2 {
            opacity: 0;
            transition-delay: 0.5s;
          }
        }
      }
      .ke4:hover figcaption {
        transform: rotate(-30deg);
        transform-origin: 0 0;
        .info1, .info2 {
          opacity: 1;
        }
      }
      .ke5 {
        div {
          transition: all 0.5s;
          position: absolute;
          left: 25px;
          transform: rotate(0deg) translateY(-90px);
          width: 90px;
          height: 65px;
          border: 1px solid #000;
        }
        .info3 {
          transition: all 0.5s;
          position: absolute;
          left: 35px;
          top: 40px;
          opacity: 0;
          font-weight: bolder;
        }
      }
      .ke5:hover {
        div {
          transform: rotate(720deg) translateY(20px);
        }
        .info3 {
          opacity: 1;
        }
      }
      .ke6 {
        figcaption {
          padding: 0;
        }
        h4 {
          transition: all 0.5s;
          transform: skewX(90deg);
          position: absolute;
          top: 10px;
          background: none;
          color: #fff;
        }
        h4:nth-child(2) {
          transition-delay: 0.5s;
          top: 50px;
          color: red;
        }
      }
      .ke6:hover h4 {
        transform: skewX(0deg);
      }
      .ke7 {
        img, h4 {
          transform: scale(1);
        }
        h4 {
          position: absolute;
          top: 10px;
          background: none;
        }
      }
      .ke7:hover {
        img, h4 {
          transform: scale(1.2);
        }
      }
      .ke8 {
        figcaption {
          padding: 0;
        }
        .info4 {
          position: absolute;
          left: 25%;
          /*top: 125%;*/
          bottom: -40px;
          color: #fff;
          width: 50%;
          transition: all 0.5s;
          /*transform: translateY(100px);*/
        }
        .l, .r, .t, .b {
          position: absolute;
          background: #fff;
          transition: all 0.5s;
        }
        .l {
          width: 1px;
          height: 80%;
          left: 15%;
          top: 10%;
          transform: scaleY(0);
        }
        .r {
          width: 1px;
          height: 80%;
          right: 15%;
          top: 10%;
          transform: scaleY(0);
        }
        .t {
          width: 80%;
          height: 1px;
          top: 15%;
          left: 10%;
          transform: scaleX(0);
        }
        .b {
          width: 80%;
          height: 1px;
          bottom: 15%;
          left: 10%;
          transform: scaleX(0);
        }
      }
      .ke8:hover {
        .info4 {
          transform: translateY(-70px);
        }
        .l, .r{
          transform: scaleY(1)
        }
        .t, .b{
          transform: scaleX(1)
        }
      }
      @keyframes ani {
        0% { transform: rotateY(0deg); }
        100% { transform: rotateY(360deg);}
      }
      .ke9 {
        width: 145px;
        height: 110px;
        overflow: hidden;
        perspective: 1000px;
        display: inline-block;
        margin: 5px;
        img {
          width: 145px;
          height: 110px;
          animation: ani 5s linear 0s infinite;
        }
        &:hover img{
          animation-play-state: paused;
        }
      }
    }
    .oth {
      width: 500px;
      height: 360px;
      padding: 0 10px;
      img {
        margin: 0;
        padding: 0;
        width: 145px;
        height: 110px;
        margin: 5px;
      }
    }
  }


  .ant-tabs {
    width: 500px;
  }

  .ant-tabs-tab {
    margin: 0 5px 0 0 !important;
  }

</style>
