<template>
  <div class="skill">
    <a-tabs defaultActiveKey="1" type="card" size="large">
      <a-tab-pane key="1">
      <span slot="tab">
        <a-icon type="tool" />
        技能
      </span>
        <div>
          <h3>专业技术</h3>
          <div class="tel">
            <span class="telName">JavaScript</span>
            <a-progress :percent="80" strokeWidth="15" />
          </div>
          <div class="tel">
            <span class="telName">HTML</span>
            <a-progress :percent="85" strokeWidth="15" status="active" />
          </div>
          <div class="tel">
            <span class="telName">CSS</span>
            <a-progress :percent="75" strokeWidth="15" />
          </div>
          <div class="tel">
            <span class="telName">React</span>
            <a-progress :percent="70" strokeWidth="15" />
          </div>
          <div class="tel">
            <span class="telName">Vue</span>
            <a-progress :percent="40" strokeWidth="15" />
          </div>
          <h3 style="margin-top: 20px">其他爱好</h3>
          <div class="allHob">
            <div class="hob">
              <a-progress type="circle" :percent="60" width="100" />
              <p>乒乓球</p>
            </div>
            <div class="hob">
              <a-progress type="circle" :percent="65" width="100" />
              <p>象棋</p>
            </div>
            <div class="hob">
              <a-progress type="circle" :percent="55" width="100" />
              <p>篮球</p>
            </div>
          </div>
        </div>
      </a-tab-pane>
      <a-tab-pane key="2">
      <span slot="tab">
        <a-icon type="form" />
        教育经历
      </span>
        <h3>我的教育经历</h3>
        <div>
          <a-collapse accordion activeKey="1">
            <a-collapse-panel header="大学-美国加利福尼亚大学" key="1">
              <h4 style="color: #333; margin-bottom: 5px;">入学时间：公元前2025-2029</h4>
              <p>记得早先少年时
                大家诚诚恳恳
                说一句 是一句
                清早上 火车站
                长街黑暗无行人
                卖豆浆的小店冒着热气
                从前的日色变得慢
                车，马，邮件都慢
                一生只够爱一个人
                从前的锁也好看
                钥匙精美有样子
                你锁了 人家就懂了</p>
            </a-collapse-panel>
            <a-collapse-panel header="高中-英国魔法学院" key="2" :disabled='false'>
              <h4 style="color: #333; margin-bottom: 5px; font-size: 14px;">入学时间：公元前2025-2029</h4>
              <p>我亦只有一个一生，不能慷慨予谁！</p>
            </a-collapse-panel>
            <a-collapse-panel header="初中-洛杉矶铁人二中" key="3">
              <h4 style="color: #333; margin-bottom: 5px; font-size: 14px;">入学时间：公元前2025-2029</h4>
              <p>雨很快就要落下来 而你就坐在我的身边 你的脸微微地斜向窗外 车缓慢向前 你没有问我要去哪里 我们都不曾在意 在哪一站，我们相遇 我也把头侧向另一边，注视那些 渴望雨水浇灌大地 风，就在你我之间，一纸相隔 我要告诉车窗外 枝繁叶茂的植物，在下一站 我就会离去。我们的相遇 也许今生，仅此一次</p>
            </a-collapse-panel>
            <a-collapse-panel header="中国-超能力者第五小学" key="4">
              <h4 style="color: #333; margin-bottom: 5px; font-size: 14px;">入学时间：公元前2025-2029</h4>
              <p>我行过许多地方的桥，看过许多次数的云，喝过许多种类的酒，却只爱过一个正当最好年龄的人</p>
            </a-collapse-panel>
          </a-collapse>
        </div>
      </a-tab-pane>
      <a-tab-pane key="3">
      <span slot="tab">
        <a-icon type="api" />
        工作经历
      </span>
        <h3>工作经历</h3>
        <div class="job">
          <div class="oneJob">
            <div class="jobH">
              <span>xxxx公司</span>
              <span>2015.11-2017.09</span>
            </div>
            <h4>前端开发工程师</h4>
            <p>我行过许多地方的桥，看过许多次数的云，喝过许多种类的酒，却只爱过一个正当最好年龄的人</p>
          </div>
          <div class="oneJob">
            <div class="jobH">
              <span>xxxx公司</span>
              <span>2015.11-2017.09</span>
            </div>
            <h4>前端开发工程师</h4>
            <p>雨很快就要落下来
              而你就坐在我的身边
              你的脸微微地斜向窗外
              车缓慢向前
              你没有问我要去哪里
              我们都不曾在意
              在哪一站，我们相遇
              我也把头侧向另一边，注视那些
              渴望雨水浇灌大地
              风，就在你我之间，一纸相隔
              我要告诉车窗外
              枝繁叶茂的植物，在下一站
              我就会离去。我们的相遇
              也许今生，仅此一次</p>
          </div>
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
    name: 'skill',
  }
</script>


<style lang="scss">
  .skill {
    display: flex;
    width: 100%;
    height: 100%;
    padding: 20px;
    justify-content: center;
    h3 {
      font-size: 18px;
      margin-bottom: 10px;
    }
    p {
      margin: 0;
    }
    .tel {
      width: 100%;
      height: 20px;
      display: flex;
      align-items: center;
      margin: 8px 0;
      .telName {
        display: inline-block;
        width: 100px;
        font-weight: bolder;
      }
    }
    .allHob {
      width: 100%;
      display: flex;
      justify-content: space-around;
      p {
        text-align: center;
      }
    }
    .job {
      width: 100%;
      height: 525px;
      overflow-y: scroll;
      .oneJob {
        width: 100%;
        height: auto;
        padding: 15px;
        background: #000;
        margin-bottom: 15px;
        span, h4, p {
          color: #fff;
          font-weight: bolder;
        }
        .jobH {
          display: flex;
          justify-content: space-between;
          margin-bottom: 3px;
          span:last-child {
            color: #f4d03f;
          }
        }
        h4 {
          color: #f4d03f;
          margin-bottom: 5px;
        }
      }
    }
  }

  .ant-tabs {
    width: 500px;
  }

  .ant-tabs-tab {
    margin: 0 5px 0 0 !important;
  }

  .ant-collapse-content-box {
    padding: 10px!important;
  }
</style>
