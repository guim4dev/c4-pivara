<template>
  <div class="avisos-wrapper">
    <aviso-card v-for="aviso in avisoData" :key="aviso.entidade.codigoEntidade" :isVertical="true" :text="aviso.titulo" :description="aviso.descricao" :date="aviso.dataCriacao" :status="aviso.situacao" :tags="aviso.entidade.descricaoEntidade"/>
  </div>
</template>
<script>
import AvisoCard from '@/components/AvisoCard.vue'


export default {
  name:"ViewAvisos",
  components:{
    AvisoCard
  },

  data(){
    return {
      avisoData: this.$store.state.data.avisos,
    }
  }
}
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@700&display=swap');

  .avisos-wrapper{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    font-family: 'Nunito', sans-serif;
  }
</style>