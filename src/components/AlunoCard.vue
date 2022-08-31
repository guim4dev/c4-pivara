<template>
  <base-card id="vertical">
    <AlunoDescription :aluno="aluno"/>
  </base-card>
</template>
<style scoped>
  @media (min-width: 750px){
    #vertical{
      width: 750px;
    }
  }
</style>
<script>
import BaseCard from '@/components/BaseCard.vue'
import AlunoDescription from '@/components/AlunoDescription.vue';

export default {
  name: 'AlunoCard',
  components: {
    BaseCard,
    AlunoDescription
  },

  created() {
    console.log('oieeee')
  },

  props: {
    aluno: {
      type: Object,
    }
  },
}
</script>
