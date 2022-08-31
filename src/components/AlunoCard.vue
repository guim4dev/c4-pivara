<template>
  <base-card>
    <div class="card-wrapper">
      <div class="card-content">
        <h3 class="name">{{ aluno.name }}</h3>
        <el-tag class="custom-el-tag" type="success">Ativo</el-tag>
      </div>
      <span style="color: #A3B1BF">#{{ aluno.ra }}</span>
    </div>
  </base-card>
</template>

<style scoped>
  .custom-el-tag {
    width: fit-content;
  }

  .name {
    font-weight: 700;
    text-align: left;
    font-size: 20px;
    margin-bottom: 20px;
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
</style>

<script>
import BaseCard from '@/components/BaseCard.vue'

export default {
  name: 'AlunoCard',
  components: {
    BaseCard
  },

  props: {
    aluno: {
      type: Object,
    }
  },
}
</script>
