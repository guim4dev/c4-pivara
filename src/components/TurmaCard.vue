<template>
  <base-card>
    <div class="card-wrapper">
      <div class="card-content">
        <h6 class="level"><b>{{ turma.level }}</b></h6>
        <h3 class="name">{{ turma.name }}</h3>
      </div>
      <span style="color: #A3B1BF">2022</span>
    </div>
  </base-card>
</template>

<style scoped>
  .name {
    font-weight: 700;
    text-align: left;
  }

  .level {
    color: #5451D6;
    font-size: 17px;
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

  created() {
    console.log('oiiiiieee')   
  },
}
</script>
