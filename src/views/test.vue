<template>
<div>
  <el-input-number v-model="num1" :min="1" :max="10"></el-input-number>
  <span>{{num1}}</span>
</div>
</template>

<script>
export default {
  name: 'test',
  data () {
    return {
      num1: 0
    }
  },
  methods: {

  }
}
</script>

<style scoped>

</style>
