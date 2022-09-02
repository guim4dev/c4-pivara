<template>
  <div class="avisos-wrapper">
    <aviso-card v-for="aviso in avisoData" :key="aviso.entidade.codigo" :cod="aviso.entidade.codigo" :isVertical="true" :text="aviso.titulo" :date="aviso.dataCriacao" :status="aviso.situacao" :tags="aviso.entidade.descricao" :location="aviso.location" />
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
  },
  mounted(){
    this.avisoData.forEach(aviso => {
      aviso.location = `/${this.getEntidadeRoute(aviso.entidade.descricao)}/${aviso.entidade.codigo}`
    });
  },
  methods: {
    getEntidadeRoute(tipoEntidade) {
      const mapping = {
        'Turma': 'turmas',
        'Aluno': 'alunos',
      }

      return mapping[tipoEntidade]
    }
  },
  created(){
    window.scrollTo(0,0);
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