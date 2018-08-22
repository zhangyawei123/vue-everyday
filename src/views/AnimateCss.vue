<template>
    <div class="container">
      <el-button @click="animaclass=!animaclass">click me</el-button>
      <transition
        name="custom-classes-transition"
        enter-active-class="animated bounceInRight"
        leave-active-class="animated bounceOutRight">
        <div v-if="animaclass" class="inner">这是animate.css实现的css3动画</div>
      </transition>
    </div>
</template>

<script>
export default {
  data () {
    return {
      animaclass: false
    }
  },
  mounted () {
  }

}
</script>

<style scoped>
  html,body {
    height: 100%;
    overflow: hidden;
  }
  .container {
    padding: 60px;
    height: 100%;
  }
  .inner {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    width: 200px;
    background-color: #0f0;
    color: #ffff;
  }
</style>
