<template>
    <Scroll class="wrapper"
            :data="list"
            :pulldown="pulldown"
            :pullup="pullup"
            @pulldown="dropDownHandle"
            @scrollToEnd="pullUpHandle">
      <!--下拉加载不是事件不是pullup而是scrollToEnd-->
      <p class="drop-down" v-if="dropDown">松手刷新数据...</p>
      <ul class="content">
        <li v-for="item in list">{{item.title}}</li>
        <li v-for="item in list">{{item.title}}</li>
      </ul>
    </Scroll>
</template>

<script>
import Scroll from '../components/Scroll'
import '../js/mock'
export default {
  data () {
    return {
      scroll: '',
      list: [],
      pulldown: true,
      pullup: true,
      dropDown: false
    }
  },
  components: {
    Scroll
  },
  created () {
    this.getData()
  },
  mounted () {
    this.$nextTick(() => {
    })
  },
  methods: {
    getData () {
      this.$http('/news/index')
        .then(res => {
          console.log(res.data)
          this.list = this.list.concat(res.data.articles)
        })
    },
    dropDownHandle () {
      this.dropDown = true
    },
    pullUpHandle () {
      this.getData()
    }
  }
}
</script>

<style scoped>
  .wrapper {
    height: 100vh;
    overflow: hidden;
  }
  ul li {
    padding: 10px;
    background: #f8f8f8;
    margin: 10px 0;
    cursor: pointer;
    color: #00f;
  }
  .drop-down {
    line-height: 60px;
    text-align: center;
    font-style: 30px;
  }
</style>
