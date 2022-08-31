<template>
  <base-card>
    <AlunoDescription :aluno="aluno"/>
  </base-card>
</template>

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
