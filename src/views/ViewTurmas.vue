<template>
  <div class="turmas-wrapper">
    <turma-card v-for="turma in turmas" :key="turma.codigoTurma" :location="'/turmas/'+turma.codigoTurma" :turma="turma"/>
  </div>
</template>

<style scoped>
  .turmas-wrapper {
    display: flex;
    align-items: center;
    justify-content: top;
    width: 100%;
    flex-direction: column;
    height: max-content;
    padding: 20px;
  }
</style>

<script>
import TurmaCard from '@/components/TurmaCard.vue'

export default {
  name: 'ViewTurmas',

  components: {
    TurmaCard
  },

  data() {
    return {
      turmas: this.$store.state.data.turmas
    }
  },
  created(){
    window.scrollTo(0,0);
  }
}
</script>
