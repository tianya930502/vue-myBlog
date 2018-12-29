<template>
  <div class="intro">
    <h3>你好，我是 浮生</h3>
    <h4>前端开发工程师</h4>
    <p>三年多的前端开发经验，乐于接受新技术，专注于优雅精简的代码。身心健康，积极向上，无不良嗜好。</p>
    <h3>个人信息</h3>
    <div class="geren">
      <span>姓名</span>
      <span>浮生</span>
    </div>
    <div class="geren">
      <span>地址</span>
      <span>杭州市拱墅区祥园路与杭行路交叉口</span>
    </div>
    <div class="geren">
      <span>电子邮件</span>
      <span>wangxin_web@126.com</span>
    </div>
    <div class="geren">
      <span>电话</span>
      <span>1884898xxxx</span>
    </div>
  </div>
</template>

<script>

</script>


<style lang="scss">
  .intro {
    /*display: flex;*/
    width: 100%;
    height: 100%;
    padding: 20px 30px;
    h3 {
      font-size: 22px;
    }
    h4 {
      font-size: 18px;
      color: #666;
      margin: 10px 0;
    }
    p {
      margin-bottom: 50px;
    }
    .geren {
      margin: 10px 0;
      span {
        display: inline-block;
        height: 30px;
        line-height: 30px;
      }
      span:first-child {
        width: 75px;
        padding-left: 15px;
        background: #f4d03f;
        margin-right: 10px;
        color: #000;
      }
      span:last-child {
        width: auto;
        padding: 0 10px;
        background: #000;
        color: #fff;
      }
    }
  }
</style>
