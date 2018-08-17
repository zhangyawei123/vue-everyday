<template>

</template>

<script>
import axios from 'axios'
import '../js/mock'
export default {
  mounted () {
    this.getData()
  },
  methods: {
    getData () {
      axios.get('/news/index')
        .then(res => {
          console.log(res.data)
        })
    }
  }
}
</script>

<style scoped>

</style>
