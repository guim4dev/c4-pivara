<template>
  <div>
    <p> Oieee </p>
  </div>
</template>

<script>
export default {
  name: 'ViewAlunoDetail',
  data() {
    return {
      aluno: {
        nome: '',
        email: '',
        telefone: '',
        dataNascimento: '',
        turma: {
          nome: ''
        }
      }
    }
  },
  created() {
    console.log('ViewAlunoDetail created')
  },
  methods: {
    getAluno() {
      const id = this.$route.params.id
      this.$http.get(`/alunos/${id}`)
        .then(response => {
          this.aluno = response.data
        })
    }
  }
}
</script>