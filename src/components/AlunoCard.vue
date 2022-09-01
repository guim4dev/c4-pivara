<template>
  <base-card id="vertical" @click="this.$router.push(this.location)">
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

  props: {
    aluno: {
      type: Object,
    },
    location:{
      type: String
    }
  },
}
</script>
