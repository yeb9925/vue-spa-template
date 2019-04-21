<template>
  <div class="components-container">
    <navigation></navigation>
    <component1></component1>
    <component2></component2>
    <component3></component3>
  </div>
</template>

<script>
import Navigation from './Navigation.vue'
import Component1 from './Component1.vue'
import Component2 from './Component2.vue'
import Component3 from './Component3.vue'

export default {
  name: 'Index',
  components: {
    Navigation,
    Component1,
    Component2,
    Component3
  }
}
</script>

<style>
body {
  background-color: '#FCFFFD';
  margin: 0;
}
</style>
