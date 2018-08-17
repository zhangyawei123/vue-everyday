<template>
    <div class="container">
      <div id="demo" class="demo animated" v-bind:class="{flipInX:animaclass }">dlsadjsa</div>
      <el-button @click="animaclass=!animaclass">click me</el-button>
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
  .container {
    padding-top: 60px;
  }
  /*找到对应动画定义的初始状态，设置相反或初始状态的值*/
  .demo {
    top: 0;
    position: absolute;
    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
    /*opacity: 0;*/
  }
</style>
