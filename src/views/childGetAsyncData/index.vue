<template>
  <div>
    <Child :showhide="showhide" @hideDialog="showhide=false" :url="url" />
    <el-button @click="showDialog('warn_info')">click</el-button>
    <el-button @click="showDialog('list_user')">cocuele</el-button>
  </div>
</template>

<script>
import Child from './child'
export default {
  name: 'test',
  data () {
    return {
      showhide: false,
      url: ''
    }
  },
  methods: {
    showDialog (url) {
      this.showhide = true
      this.url = url
    }
  },
  components: {
    Child
  }
}
</script>

<style scoped>

</style>
