<template>
  <div id="app">
    <NavigationHeader/>
    <router-view/>
  </div>
</template>

<script>
import NavigationHeader from '@/components/NavigationHeader'

export default {
  components: {
    NavigationHeader
  }
}
</script>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 100%;
  position: absolute;
}
</style>
