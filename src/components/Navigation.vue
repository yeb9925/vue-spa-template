<template>
  <div id="nav-bar-container">
    <nav id="nav-bar">
      <a class="nav-links" v-scroll-to="'#component1-container'">Component1</a>
      <a class="nav-links" v-scroll-to="'#component2-container'">Component2</a>
      <a class="nav-links" v-scroll-to="'#component3-container'">Component3</a>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navigation'
}
</script>

<style>
#nav-bar {
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  position: fixed;
}

.nav-links {
  margin: 3% 3%;
  text-decoration: none;
  font-weight: bold;
  font-size: 110%;
  color: black;
  cursor: pointer;
}
</style>
