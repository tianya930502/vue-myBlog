<template>
  <div class="soundControl" @click="changeSound">
    <div class="operSound" ref="soundKe" >
    </div>
    <div
      ref="control"
      class="control"
      :style="{height: `${currentSound || sound}%`}"
    >
    </div>
  </div>
</template>

<script>
  export default {
    name: 'soundControl',
    props: {
      sound: String,
    },
    data() {
      return {
        currentSound: 0,
      }
    },
    methods: {
      changeSound(e) {
        let soundHeight = this.$refs.soundKe.offsetHeight;
        // 点击的位置离屏幕最底部的距离
        const distance = document.body.clientHeight - e.clientY;
        // 音量的最顶部离屏幕的最底部距离为95px
        // 95 - distance 即为点击的位置在音量中的偏移量
        const currentSound = ((soundHeight - (95 - distance)) * 100 / soundHeight).toFixed(2);
        console.log(currentSound);
        this.currentSound = currentSound;
        this.$emit('soundChange', currentSound);
      }
    }
  }
</script>

<style lang="scss">
  .soundControl {
    width: 7px;
    height: 70px;
    cursor: pointer;
    position: absolute;
    border-radius: 4px;
    background: #ccc;
    bottom: 25px;
    left: 7px;
  }
  .operSound {
    width: 7px;
    height: 70px;
  }
  .control{
    position: absolute;
    bottom:0;
    max-height: 70px;
    background: #1890ff;
    width: 100%;
    border-radius: 4px;
    transition: all 0.1s;
  }
</style>
