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
import ViewAlunoDetail from '@/views/ViewAlunoDetail.vue';

export default {
  name: 'AlunoCard',
  components: {
    BaseCard,
    AlunoDescription
  },

  props: {
    aluno: {
      type: Object,
    }
  },
}
</script>
