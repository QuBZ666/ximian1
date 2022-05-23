<template>
  <div id="app">
    <router-view></router-view>
    <fotter v-if="$route.meta.asd"></fotter>
  </div>
</template>

<script>
import Fotter from '../src/components/Footer.vue'
export default {
  name: 'App',
  components: {
    Fotter
  }
}
</script>

<style  >
* {
  margin: 0;
  padding: 0;
  list-style: none;
}
</style>
