<template>
  <div class="progress">
    <div class="ke" ref="ke" @click="changeProgress">
      <div
        class="active"
        :style="{width: `${currentValue || value}%`}"
        ref="active"
      >
      </div>
      <div class="dian" re="dian"></div>
    </div>
  </div>
</template>
<script>
  /*
  * min 进度条最小值
  * max 进度条最大值
  * v-model 对当前值进行双向绑定实时显示拖拽进度
  * */
  export default {
    props: {
      value: String,
    },
    name: 'my-progress',
    data() {
      return {
        currentValue: 0,
      }
    },
    methods: {
      changeProgress(e) {
        let totalWidth = this.$refs.ke.offsetWidth;
        let clickWidth = e.layerX;
        this.value = (clickWidth*100/totalWidth).toFixed(2);
        this.$emit('valueChange', this.value);
      },
    }
  }
</script>
<style lang="scss">
  .progress {
    width: calc(100% - 210px);
    height: 10px;
    overflow: hidden;
    display: flex;
    align-items: center;
    /*background:#ccc;*/
    .ke {
      width: 100%;
      height: 6px;
      background: #f5f5f5;
      border-radius: 3px;
      display: flex;
      cursor: pointer;
      .active {
        background: #1890ff;
        height: 100%;
        border-radius: 5px;
      }
      .dian{
        background: #ccc;
        height:10px;
        width: 10px;
        border-radius: 5px;
        margin-top: -2px;
        margin-left: -3px;
        cursor: pointer;
      }
    }
  }
</style>
