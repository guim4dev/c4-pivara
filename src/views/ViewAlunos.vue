<template>
  <div class="alunos-wrapper">
    <aluno-card v-for="aluno in alunos" :key="aluno.ra" :location="'/alunos/'+aluno.ra" :aluno="aluno"/>
  </div>
</template>

<style scoped>
  .alunos-wrapper {
    display: flex;
    align-items: center;
    justify-content: top;
    width: 100%;
    flex-direction: column;
    height: 100%;
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
      alunos: [
        {
          name: "João Pinheiro",
          ra: '123'
        },
        {
          name: "Miruliro",
          ra: '321'
        },
        {
          name: "Camila",
          ra: '576'
        },
        {
          name: "Dedé Raniere",
          ra: '222'
        },
      ]
    }
  },
}
</script>
