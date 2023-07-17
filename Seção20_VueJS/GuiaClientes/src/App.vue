<template>
  <div class="app">
    <Cliente />
    <Produto />
  </div>

</template>

<script>
import Cliente from './components/Cliente.vue'
import Produto from './components/Produto.vue'

  export default {
    name: "App",
    components: {
      Cliente,
      Produto,
    }
  }

</script>

<style scoped>

</style>
