<template>
  <base-card>
    <div class="card-wrapper">
      <div class="card-content">
        <h6 class="level">{{ turma.level }}</h6>
        <h3 class="name">{{ turma.name }}</h3>
        <el-tag class="custom-el-tag" type="warning">{{ turma.turno }}</el-tag>
      </div>
      <span style="color: #A3B1BF">2022</span>
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
    }
  },
}
</script>
