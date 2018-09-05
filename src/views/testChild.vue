<template>
  <el-dialog
  title="提示"
  :visible.sync="showhide"
  width="30%"
  :before-close="handleClose">
  <span>{{datalist}}</span>
  <span slot="footer" class="dialog-footer">
    <el-button @click="hideDialog">取 消</el-button>
    <el-button type="primary" @click="hideDialog">确 定</el-button>
  </span>
</el-dialog>
</template>

<script>
export default {
  name: 'testChild',
  props: ['showhide', 'url'],
  data () {
    return {
      dialogVisible: false,
      datalist: ''
    }
  },
  mounted () {
  },
  methods: {
    handleClose (done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          this.$emit('hideDialog')
        })
        .catch(_ => {})
    },
    hideDialog () {
      this.$emit('hideDialog')
    },
    getData () {
      this.$http('http://localhost:9428/api/' + this.url).then(res => {
        console.log(res.data)
        this.datalist = res.data
      })
    }
  },
  watch: {
    url (val) {
      this.url = val
      this.getData()
    }
    // datalist (val) {
    //   this.datalist = val
    // }
  }
}
</script>

<style scoped>

</style>
