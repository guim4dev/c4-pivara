<template>
  <NavigationHeader v-if="shouldShowNavbar"/>
  <GoBackHeader v-if="shouldShowGoBackHeader"/>
  <router-view/>
</template>

<script>
import NavigationHeader from '@/components/NavigationHeader.vue'
import GoBackHeader from '@/components/GoBackHeader.vue'

export default {
  name: 'App',
  components: {
    NavigationHeader,
    GoBackHeader
  },

  computed: {
    shouldShowNavbar() {
      return !this.$route.meta.hideNavbar
    },

    shouldShowGoBackHeader() {
      return this.$route.meta.showGoBackHeader
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

body{
    background-color: #F4F6F8;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
