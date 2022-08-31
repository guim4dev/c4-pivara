<template>
  <div class="turmas-wrapper">
    <turma-card v-for="turma in turmas" :key="turma.name" :turma="turma"/>
  </div>
</template>

<style scoped>
  .turmas-wrapper {
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
import TurmaCard from '@/components/TurmaCard.vue'

export default {
  name: 'ViewTurmas',

  components: {
    TurmaCard
  },

  data() {
    return {
      turmas: [
        {
          level: "Ensino Médio",
          name: "1º Ano A",
          year: '2022',
          vigent: true,
          turno: 'manhã'
        },
        {
          level: "Ensino Médio",
          name: "1º Ano B",
          year: '2022',
          vigent: true,
          turno: 'tarde'
        },
        {
          level: "Ensino Médio",
          name: "1º Ano C",
          year: '2022',
          vigent: false,
          turno: 'noite'
        }
      ]
    }
  },
}
</script>
