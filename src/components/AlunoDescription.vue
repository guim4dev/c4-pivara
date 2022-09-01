<template>
  <div class="content-wrapper">
    <div class="content">
      <h3 class="name">{{ aluno.nome }}</h3>
      <el-tag class="custom-el-tag" type="success">Ativo</el-tag>
    </div>
    <span style="color: #A3B1BF">#{{ aluno.codigoAluno }}</span>
  </div>
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

  .content-wrapper {
    display: flex;
    width: 100%;
    background-color: white;
  }

  .content {
    display: flex;
    align-items: left;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    margin-right: 16px;
  }
</style>

<script>
export default {
  name: 'AlunoDescription',

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
