<template>
  <base-card id="vertical" @click="this.$router.push(this.location)">
    <div class="card-wrapper">
      <div class="card-content">
        <h6 class="level">{{ turma.curso.tipoCurso }}</h6>
        <h3 class="name">{{ turma.nomeTurma }}</h3>
        <el-tag class="custom-el-tag">{{ turma.turnos.descricao }}</el-tag>
      </div>
      <span style="color: #A3B1BF">{{ turma.periodoLetivo.descricao }}</span>
    </div>
  </base-card>
</template>

<style scoped>
  .custom-el-tag {
    width: fit-content;
    font-size: 12px;
    font-weight: bold;
  }

  .name {
    font-weight: 700;
    text-align: left;
    font-size: 20px;
    margin-bottom: 6px;
  }

  .level {
    font-weight: 700;
    color: #5451D6;
    font-size: 14px;
    margin-bottom: 6px;
    text-align: left;
  }

  .card-wrapper {
    display: flex;
    width: 100%;
  }

  .card-content {
    display: flex;
    align-items: left;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    margin-right: 16px;
  }

  @media (min-width: 750px){
    #vertical{
      width: 750px;
    }
  }
</style>

<script>
import BaseCard from '@/components/BaseCard.vue'

export default {
  name: 'TurmaCard',
  components: {
    BaseCard
  },

  props: {
    turma: {
      type: Object,
    },
    location:{
      type:String
    }
  },
}
</script>
