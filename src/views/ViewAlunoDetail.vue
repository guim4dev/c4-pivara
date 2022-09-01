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
      <div style="display: flex; align-items: center; justify-content: center; margin: 16px 16px;z-index:0;padding:0 10%">
        <el-select @change="setTurma" class="m-2" :placeholder="smartChosenClass.nomeTurma" style="margin-right: 8px" size="large">
          <el-option
            v-for="turma in aluno.turmas"
            :key="turma.turma.codigoTurma"
            :label="turma.turma.nomeTurma"
            :value="{ codigoTurma: turma.turma.codigoTurma, nomeTurma: turma.turma.nomeTurma, codigoMatricula: turma.codigoMatricula }"
          />
        </el-select>
        <el-select @change="setDiscipline" class="m-2" :placeholder="smartChosenDiscipline.nome" style="margin-right: 8px" size="large">
          <el-option
            v-for="disciplina in listOfDisciplines"
            :key="disciplina.codigo"
            :label="disciplina.nome"
            :value="{ codigo: disciplina.codigo, nome: disciplina.nome }"
          />
        </el-select>
        <el-select @change="setTipoGrafico" class="m-2" :placeholder="tipoGrafico.nome" size="large">
          <el-option
            v-for="tipo in [{ slug: 'media', nome: 'Média', suffix: '' }, { slug: 'falta', nome: 'Faltas', suffix: '' }]"
            :key="tipo.slug"
            :label="tipo.nome"
            :value="tipo"
          />
        </el-select>
      </div>
      <h2 style="text-align: left; margin-left: 32px">{{ tipoGrafico.nome }} em {{ smartChosenDiscipline.nome }}</h2>
      <MyChart
        :dataChart="[
          { name: aluno.nome, data: chartData, color: '#2F8AF5' },
          { name: smartChosenClass.nomeTurma, data: turmaChartData, color: '#F97777' }
        ]" :suffix="tipoGrafico.suffix" />
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
      max-width: 1500px;
      border-radius: 8px;
  }
</style>

<script>
import AlunoDescription from "@/components/AlunoDescription.vue";
import HorizontalScroll from '@/components/HorizontalScroll.vue'
import notasDisciplina from '@/services/Alunos/notasDisciplina.js'
import MyChart from '@/components/MyChart.vue'
import _ from 'lodash'

export default {
  name: "ViewAlunoDetail",

  components: {
    AlunoDescription,
    HorizontalScroll,
    MyChart
  },

  data() {
    const alunoId = parseInt(this.$route.params.id)
    const aluno = this.$store.getters.getStudent(alunoId)

    return {
      aluno,
      avisos: this.$store.getters.getAvisosByStudent(alunoId),
      chosenMatricula: aluno.turmas[0].codigoMatricula,
      tipoGrafico: { slug: 'media', nome: 'Média', suffix: '' },
      fullData: [],
      chartData: [],
      classChartData: [],
    }
  },

  async created() {
    const turmaInicial = this.aluno.turmas[0].turma
    this.$store.commit('setChosenClass', _.pick(turmaInicial, ['codigoTurma', 'nomeTurma']));
    this.$store.commit('setChosenDiscipline', _.pick(turmaInicial.disciplinas[0], ['codigo', 'nome']));
    await this.refreshChartData()
  },

  methods: {
    async setTurma(newValue) {
      this.chosenMatricula = newValue.codigoMatricula
      const turma = this.$store.getters.getTurma(newValue.codigoTurma);
      this.$store.commit('setChosenClass', newValue);
      this.$store.commit('setChosenDiscipline', _.pick(turma.disciplinas[0], ['codigo', 'nome']));
      await this.refreshChartData()
    },

    async setDiscipline(newValue) {
      this.$store.commit('setChosenDiscipline', newValue);
      await this.refreshChartData()
    },

    setTipoGrafico (newValue) {
      this.tipoGrafico = newValue
      this.chartData = this.getChartData()
    },

    getChartData () {
      const dataForChart = []
      this.fullData.forEach(etapa => {
        if (!etapa[this.tipoGrafico.slug]) {
          return
        }
 
        if (this.tipoGrafico.slug === 'media') {
          etapa.media = etapa.media.replace(',', '.')
        }

        dataForChart.push([etapa.nomeEtapa, etapa[this.tipoGrafico.slug] || '0.0'])
      })
      return dataForChart
    },

    async refreshChartData() {
      const userDisciplineGrades = await notasDisciplina(this.chosenMatricula, this.smartChosenDiscipline.codigo)
      const disciplina = userDisciplineGrades.disciplinas[0]
      this.fullData = disciplina.etapas
      this.chartData = this.getChartData()
    }
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

    currentTurmaDisciplina() {
      return this.$store.getters.getDisciplinaFromTurma(this.$store.state.chosenClass.codigoTurma, this.$store.state.chosenDiscipline.codigo)
    },

    turmaChartData() {
      const finalData = []
      this.currentTurmaDisciplina.etapas.forEach(etapa => {
        if (!etapa[this.tipoGrafico.slug]) {
          return
        }
 
        if (this.tipoGrafico.slug === 'media') {
          etapa.media = etapa.media.replace(',', '.')
        }

        finalData.push([etapa.nomeEtapa, etapa[this.tipoGrafico.slug] || '0.0'])
      })

      return finalData
    }
  },
};
</script>
