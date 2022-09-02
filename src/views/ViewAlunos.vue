<template>
  <div class="alunos-wrapper">
    <aluno-card v-for="aluno in alunos" :key="aluno.codigoAluno" :location="'/alunos/'+aluno.codigoAluno" :aluno="aluno"/>
  </div>
</template>

<style scoped>
  .alunos-wrapper {
    display: flex;
    align-items: center;
    justify-content: top;
    width: 100%;
    flex-direction: column;
    height: max-content;
    padding: 15px;
  }
</style>

<script>
import AlunoCard from '@/components/AlunoCard.vue'

export default {
  name: 'ViewAlunos',

  components: {
    AlunoCard
  },

  data() {
    return {
      alunos: this.$store.getters.getStudents
    }
  },
  created(){
    window.scrollTo(0,0);
  }
}
</script>
