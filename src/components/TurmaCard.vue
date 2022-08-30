<template>
  <base-card>
    <p>Oiii</p>
    <p>{{turma}}</p>
  </base-card>
</template>

<style scoped>
  .turma-card {
    background-color: white;
    margin-bottom: 1rem
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
