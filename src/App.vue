<template>
  <div id="app">
    <NavigationHeader/>
    <router-view :boards="boards"/>
  </div>
</template>

<script>
import NavigationHeader from '@/components/NavigationHeader'
import data from '../data/data.json'

export default {
  components: {
    NavigationHeader
  },
  data() {
    return {
      boards: data.boards
    }
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
