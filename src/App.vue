<template>
  <NavigationHeader v-if="shouldShowNavbar"/>
  <router-view/>
</template>

<script>
import NavigationHeader from '@/components/NavigationHeader.vue'

export default {
  name: 'App',
  components: {
    NavigationHeader
  },

  computed: {
    shouldShowNavbar() {
      return !this.$route.meta.hideNavbar
    }
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #F4F6F8;
  height: 100vh
}
</style>
