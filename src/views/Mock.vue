<template>
  <div v-infinite-scroll="getData" infinite-scroll-disabled="busy" infinite-scroll-distance="50">
    <ul>
      <li v-for="item in list">{{item.title}}</li>
    </ul>
    <div v-if="loadAll">已加载全部</div>
  </div>
</template>

<script>
import '../js/mock'
export default {
  data () {
    return {
      list: [],
      busy: false,
      loadAll: false
    }
  },
  mounted () {
    // this.getData()
  },
  methods: {
    getData () {
      this.$http('/news/index')
        .then(res => {
          console.log(res.data)
          if (res.data.articles.length === 10) {
            // this.loadAll = true
            // this.busy = true
          }
          setTimeout(() => {
            this.list = this.list.concat(res.data.articles)
          }, 1000)
        })
    }
  }
}
</script>

<style scoped>
  ul li {
    padding: 10px;
    background: #f8f8f8;
    margin: 10px 0;
    cursor: pointer;
    color: #00f;
  }
</style>
