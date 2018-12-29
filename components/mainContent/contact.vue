<template>
  <div class="contact">
    <div class="top">
      <div class="imgke">
        <div>
          <img src="/Images/mn1.jpg" alt="">
        </div>
        <div>
          <img src="/Images/mn2.jpg" alt="">
        </div>
        <div>
          <img src="/Images/mn3.jpg" alt="">
        </div>
        <div>
          <img src="/Images/mn4.jpg" alt="">
        </div>
        <div>
          <img src="/Images/fj1.jpg" alt="">
        </div>
        <div>
          <img src="/Images/fj2.jpg" alt="">
        </div>
        <div>
          <img src="/Images/fj3.jpg" alt="">
        </div>
        <div>
          <img src="/Images/xk1.jpg" alt="">
        </div>
        <div>
          <img src="/Images/xk2.jpg" alt="">
        </div>
      </div>
    </div>
    <div class="le">
      <h3>联系信息</h3>
      <div>
        <a-icon type="phone" />
        <span>188xxxxxxxx</span>
      </div>
      <div>
        <a-icon type="environment-o" />
        <span>杭州市拱墅区xxxx</span>
      </div>
      <div>
        <a-icon type="mail" />
        <span>wangxin_web@126.com</span>
      </div>
    </div>
    <div class="ri">
      <div>
        <h2>记得联系我</h2>
        <a-input placeholder="Name" />
        <a-input placeholder="Email" />
        <a-textarea placeholder="Message" :rows="4" />
        <a-button type="primary">发送</a-button>
      </div>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue';
  import { Input, Button } from 'ant-design-vue';
  import 'ant-design-vue/dist/antd.css';

  Vue.use(Input);
  Vue.use(Button);

  export default {
    name: 'contact',
  }
</script>


<style lang="scss">
  .contact {
    display: flex;
    flex-wrap: wrap;
    padding: 20px;
    width: 540px;
    height: 454px;
    @keyframes name {
      0%{transform:rotateX(0deg) rotateY(0deg)}
      25%{transform:rotateX(5deg) rotateY(90deg)}
      50%{transform:rotateX(0deg) rotateY(180deg)}
      75%{transform:rotateX(-5deg) rotateY(270deg)}
      100%{transform:rotateX(0deg) rotateY(360deg)}
    }
    .top {
      width: 500px;
      height: 125px;
      perspective: 2000px;
      .imgke {
        width: 500px;
        position: relative;
        height: 125px;
        transform-style: preserve-3d;
        animation: name 20s linear 0s infinite;
        &:hover {
          animation-play-state:paused;
        }
        div {
          width: 100px;
          height: 125px;
          position: absolute;
          /*overflow: hidden;*/
          left: 0;
          right: 0;
          top: 0;
          bottom: 0;
          margin: auto;
          img {
            width: 100px;
            height: 120px;
          }
        }
        div:nth-child(1) {
          transform: rotateY(0deg) translateZ(200px);
        }
        div:nth-child(2) {
          transform: rotateY(40deg) translateZ(200px);
        }
        div:nth-child(3) {
          transform: rotateY(80deg) translateZ(200px);
        }
        div:nth-child(4) {
          transform: rotateY(120deg) translateZ(200px);
        }
        div:nth-child(5) {
          transform: rotateY(160deg) translateZ(200px);
        }
        div:nth-child(6) {
          transform: rotateY(200deg) translateZ(200px);
        }
        div:nth-child(7) {
          transform: rotateY(240deg) translateZ(200px);
        }
        div:nth-child(8) {
          transform: rotateY(280deg) translateZ(200px);
        }
        div:nth-child(9) {
          transform: rotateY(320deg) translateZ(200px);
        }
      }
    }
    .le {
      width: 48%;
      padding-top: 20%;
      padding-left: 15px;
      h3 {
        font-size: 20px;
        margin-bottom: 10px;
      }
      i, span {
        color: #000;
      }
    }
    .ri {
      height: 100%;
      width: 52%;
      div {
        width: 250px;
        height: 300px;
        background: #000;
        padding: 15px 10px;
        h2 {
          margin-bottom: 5px;
          text-align: center;
        }
        input, textarea {
          margin: 5px 0;
        }
        button {
          margin: 10px 0 0 20%;
          width: 60%;
        }
      }
    }
  }
</style>
