<template>
  <div style="padding: 20px; position: sticky; top: 56px; background-color: white;">
    <AlunoDescription 
      :aluno="{ ra: '212', name: 'João Pedro' }"
    />
  </div>
</template>

<script>
import AlunoDescription from "@/components/AlunoDescription.vue";

export default {
  name: "ViewAlunoDetail",

  components: {
    AlunoDescription,
  },
};
</script>