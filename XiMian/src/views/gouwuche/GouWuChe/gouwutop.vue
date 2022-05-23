<template>
  <div>
    <ul>
      <li >共{{this.num}}件商品</li>
      <li>管理</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'gouwutop',
  props: ['num'],
  methods: {

  }
}
</script>

<style scoped="scoped">
div {
  width: 100%;
  height: 0.57rem;
  position: fixed;
  top: 0;
  background-color: #f0f0f0;
}
div ul {
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin: 0 auto;
}
div ul li {
  padding: 0.1rem 0;
  font-size: 0.18rem;
}
</style>
