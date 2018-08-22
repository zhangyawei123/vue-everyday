<template>
  <div>
    <h2>这就是一个导航(这是用了eslint的项目)</h2>
    <ul>
      <router-link tag="li" to="/keepalive">keepalive状态</router-link>
      <router-link tag="li" to="/AnimateCss">animate</router-link>
      <router-link tag="li" to="/Mock">Mock</router-link>
      <router-link tag="li" to="/BetterScroll">BetterScroll</router-link>
      <router-link tag="li" to="/Store">Store</router-link>
    </ul>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
  h2 {
    font-size: 30px;
    text-align: center;
    font-weight: bold;
  }
  ul li {
    padding: 10px;
    background: #f8f8f8;
    margin: 10px 0;
    cursor: pointer;
    color: #00f;
  }
</style>
