<template>
  <div id="app">
    <img src="http://www.licensingworks.us/wp-content/uploads/2016/04/TheLittlePrinceLogoWTM5.png" alt="Image" height="10%" width="10%">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
