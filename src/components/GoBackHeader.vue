<template>
  <div class="header-wrapper">
    <img src="/img/arrow.svg" style="cursor: pointer" @click="goBack"/>
    <img src="/img/blueLogo.svg" />
  </div>
</template>

<style scoped>
  .header-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 20px 0px 20px;
    background-color: white;
    height: 56px;
    position: sticky;
    top: 0;
    z-index: 10;
  }

</style>

<script>
export default {
  name: 'GoBackHeader',

  methods: {
    goBack() {
      this.$router.go(-1)
    }
  }
}
</script>
