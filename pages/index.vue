<template>
  <div class="container" ref="container">
    <div class="intro">
      <div class="introduce">
        <div class="introL">
          <div class="introLH">
            <h1>浮生.若梦</h1>
            <h2>Web 开发</h2>
            <img src="../static/images/myself.png" alt="">
          </div>
          <div class="introLB">
            <div class="title" :class="{ active: tab1 }" @click="checkTab(1)">
              <span class="personal">个人简介</span>
              <span class="line"></span>
              <a-icon type="user" />
            </div>
            <div class="title" :class="{ active: tab2 }" @click="checkTab(2)">
              <span class="personal">专业技能</span>
              <span class="line"></span>
              <a-icon type="tags" />
            </div>
            <div class="title" :class="{ active: tab3 }" @click="checkTab(3)">
              <span class="personal">兴趣爱好</span>
              <span class="line"></span>
              <a-icon type="heart-o" />
            </div>
            <div class="title" :class="{ active: tab4 }" @click="checkTab(4)">
              <span class="personal">联系方式</span>
              <span class="line"></span>
              <a-icon type="schedule" />
            </div>
            <div class="footer">
              <a-icon type="wechat" />
              <a-icon type="qq" />
              <a-icon type="weibo" />
              <a-icon type="twitter" />
              <a-icon type="gitlab" />
            </div>
          </div>
        </div>
        <div class="introR">
          <div class="introRH">
            <h1>个人简历</h1>
            <h2>我很坚强，也很无所谓</h2>
          </div>
          <div class="introRB">
            <Intro v-if='tab1' />
            <Skill v-if='tab2' />
            <Hobby v-if='tab3' />
            <Contact v-if='tab4' />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Intro from '../components/mainContent/intro.vue';
  import Skill from '../components/mainContent/skill.vue';
  import Hobby from '../components/mainContent/hobby.vue';
  import Contact from '../components/mainContent/contact.vue';

  export default {
    components: {
      Intro,
      Skill,
      Hobby,
      Contact
    },
    data() {
      return {
        tab1: true,
        tab2: false,
        tab3: false,
        tab4: false,
      }
    },
    methods: {
      checkTab: function(n) {
        for(let i = 1; i <= 4; i++) {
          this[`tab${i}`] = false;
        }
        this[`tab${n}`] = true;
      }
    },
    mounted: function() {
      console.log(this.$refs.container.offsetWidth);
    }
  }
</script>

<style lang="scss">
  .container {
    height: 100vh;
    width: calc(100vw - 200px);
    overflow: hidden;
    background: url('/Images/bg.jpg');
    .intro {
      width: 100%;
      height: 100vh;
      position: relative;
    }
    .introduce {
      width: 800px;
      height: 600px;
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      margin: auto;
      display: flex;
      h1, h2 {
        color: #fff;
      }
      .introL {
        width: 245px;
        margin-right: 15px;
        .introLH {
          height: 290px;
          margin-bottom: 15px;
          background: #000;
          display: flex;
          flex-direction: column;
          align-items: center;
          h1 {
            font-size: 45px;
            margin-top: 20px;
          }
          h2 {
            gont-size: 24px;
            margin-bottom: 10px;
          }
          img {
            width: 140px;
            height: 140px;
            border-radius: 70px;
          }
        }
        .introLB {
          /*width: 250px;*/
          height: 295px;
          background: #f4d03f;
          padding: 15px 0;
          .title {
            width: 100%;
            height: 50px;
            display: flex;
            align-items: center;
            justify-content: flex-end;
            border-bottom: 1px solid #e1c03a;
            cursor: pointer;
          }
          .title:hover {
            background: #000;
            .personal, i {
              color: #f4d03f;
            }
            .line {
              background: #f4d03f;
            }
          }
          .active {
            background: #000;
            .personal, i {
              color: #f4d03f;
            }
            .line {
              background: #f4d03f;
            }
          }
          span, i {
            display: inline-block;
          }
          .personal {
            font-size: 18px;
            padding: 15px;
          }
          .line {
            background: #000;
            width: 1px;
            height: 20px;
          }
          i {
            font-size: 18px;
            padding: 15px;
          }
          .footer {
            padding-top: 20px;
            height: 50px;
            display: flex;
            align-items: center;
            justify-content: space-around;
            i {
              font-size: 18px;
              cursor: pointer;
              padding: 0;
              width: 30px;
              height: 30px;
              border-radius: 15px;
              text-align: center;
              line-height: 30px;
              &:hover {
                background: #000;
                color: #f4d03f;
              }
            }
          }
        }
      }
      .introR {
        width: 540px;
        .introRH {
          /*width: 540px;*/
          height: 130px;
          background: #000;
          margin-bottom: 15px;
          padding: 15px 15px 15px 25px;
          h1 {
            font-size: 30px;
            margin-bottom: 10px;
          }
          h2 {
            color: #f4d03f;
          }
        }
        .introRB {
          z-index: 100;
          width: 540px;
          height: 455px;
          background: #fff;
        }
      }
    }
  }

</style>
