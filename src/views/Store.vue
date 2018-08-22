<template>
  <div class="box">
    <div>根状态的state文字{{$store.state.rootTxt}}</div>
    <div>根状态的state文字{{$store.state.rootCount}}
      <el-button @click="countincre(2)">commit</el-button>
      <el-button @click="countdispach(3)">dispach</el-button>
    </div>
    <div>根状态的getters文字{{getTxt}}</div>
    <div>main的getters文字{{mainTxt}}</div>
    <div>main模块的文字{{$store.state.main.txt}}</div>
    <el-switch
      v-model="value2"
      active-color="#ff6600"
      inactive-color="#ccc">
    </el-switch>
    <span>{{value1}} {{value2}}</span>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'Store',
  data () {
    return {
      value2: true
    }
  },
  mounted () {
    console.log(this.$store.state.rootTxt)
  },
  computed: {
    ...mapGetters([
      'getTxt',
      'mainTxt'
    ]),
    value1 () {
      return !this.value2
    }
  },
  methods: {
    ...mapActions([
      'increment' // 将 `this.increment()` 映射为 `this.$store.dispatch('increment')`
    ]),
    countincre (num) {
      this.$store.commit('increment', num)
    },
    countdispach (num) {
      this.increment(num)
    }
  }
}
</script>

<style scoped>
  .box > div {
    line-height: 40px;
    margin: 10px;
    background: #f8f8f8;
  }
</style>
