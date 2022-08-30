<template>
  <div class="avisos-wrapper">
    <aviso-card/>
    <aviso-card/>
    <aviso-card/>
  </div>
</template>
<script>
import AvisoCard from '@/components/AvisoCard.vue'


export default {
  name:"ViewAvisos",
  components:{
    AvisoCard
  }
}
</script>
<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@700&display=swap');

  .avisos-wrapper{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 15px;
    font-family: 'Nunito', sans-serif;
  }
</style>