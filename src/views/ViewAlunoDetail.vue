<template>
  <div style="padding: 20px; position: sticky; top: 56px; background-color: white;">
    <AlunoDescription
      :aluno="aluno"
    />
  </div>
  <div class="page-wrapper">
    <section id="avisos">
      <HorizontalScroll :data="this.avisos"/>
    </section>
    <section id="chart">
      <div style="display: flex; align-items: center; justify-content: space-between; width: 100%; margin: 16px 16px;z-index:0;padding:0 10%">
        <el-select @change="setChosenClass" class="m-2" placeholder="Select" size="large">
          <el-option
            v-for="{ codigoMatricula, turma } in aluno.turmas"
            :key="turma.codigoTurma"
            :label="turma.nome"
            :value="{ id: turma.codigoTurma, nome: turma.nome, codigoMatricula: codigoMatricula }"
          />
        </el-select>
        <el-select @change="setChosenDiscipline" class="m-2" placeholder="Select" size="large">
          <el-option
            v-for="disciplina in listOfDisciplines"
            :key="disciplina.codigo"
            :label="disciplina.nome"
            :value="{ codigo: disciplina.codigo, nome: disciplina.nome }"
          />
        </el-select>
      </div>
    </section>
  </div>
</template>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@700&display=swap');

  .page-wrapper{
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 15px;
      font-family: 'Nunito', sans-serif;
      width: 100%;
  }

  #avisos{
      margin-bottom: 15px;
      width: 100%;
  }

  el-select::placeholder {
      color: black
  }

  #rank{
      width: 100%;
  }

  #chart{
      background-color: white;
      width: 100%;
      margin-bottom: 30px;
  }
</style>

<script>
import AlunoDescription from "@/components/AlunoDescription.vue";
import HorizontalScroll from '@/components/HorizontalScroll.vue'
// import MyChart from '@/components/MyChart.vue'
import _ from 'lodash'

export default {
  name: "ViewAlunoDetail",

  components: {
    AlunoDescription,
    HorizontalScroll,
    // MyChart
  },

  data() {
    const alunoId = parseInt(this.$route.params.id)
    const aluno = this.$store.getters.getStudent(alunoId)
    return {
      aluno,
      avisos: this.$store.getters.getAvisosByStudent(alunoId),
      chosenMatricula: aluno.turmas[0].codigoMatricula
    }
  },

  created() {
    const turmaInicial = this.aluno.turmas[0].turma
    this.$store.commit('setChosenClass', _.pick(turmaInicial, ['codigoTurma', 'nome']));
    this.$store.commit('setChosenDiscipline', _.pick(turmaInicial.disciplinas[0], ['codigo', 'nome']));
  },

  methods: {
    getUserMatriculaFromTurma(turmaId) {
      return this.aluno.turmas.find(({ turma }) => turma.codigoTurma === turmaId).codigoMatricula
    },

    setTurma(newValue) {
      this.chosenMatricula = newValue.codigoMatricula
      const turma = this.$store.getters.getTurma(newValue.codigoTurma);
      this.$store.commit('setChosenClass', newValue);
      this.$store.commit('setChosenDiscipline', _.pick(turma.disciplinas[0], ['codigo', 'nome']));
    },

    setDiscipline(newValue) {
      this.$store.commit('setChosenDiscipline', newValue);
    },
  },

  computed: {
    smartChosenDiscipline () {
      return this.$store.state.chosenDiscipline
    },

    smartChosenClass () {
      return this.$store.state.chosenClass
    },

    listOfDisciplines () {
      return this.$store.getters.getTurma(this.$store.state.chosenClass.codigoTurma).disciplinas
    },
  },
};
</script>
