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
    font-size: 12px;
    font-weight: bold
  }

  .name {
    font-weight: 700;
    text-align: left;
    font-size: 16px;
    margin-bottom: 10px;
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

  props: {
    aluno: {
      type: Object,
    }
  },
}
</script>
