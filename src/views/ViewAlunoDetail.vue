<template>
  <div style="padding: 20px; position: sticky; top: 56px; background-color: white;">
    <AlunoDescription
      :aluno="aluno"
    />
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
</template>

<script>
import AlunoDescription from "@/components/AlunoDescription.vue";
import _ from 'lodash'

export default {
  name: "ViewAlunoDetail",

  components: {
    AlunoDescription,
  },

  data() {
    return {
      aluno: this.$store.getters.getStudent(parseInt(this.$route.params.id)),
    }
  },

  created() {
    const turmaInicial = this.aluno.turmas[0].turma
    this.$store.commit('setChosenClass', _.pick(turmaInicial, ['codigoTurma', 'nome']));
    this.$store.commit('setChosenDiscipline', _.pick(turmaInicial.disciplinas[0], ['codigo', 'nome']));
  },

  methods: {
    setTurma(newValue) {
      this.$store.commit('setChosenClass', newValue);
      const turma = this.$store.getters.getTurma(newValue.codigoTurma);
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
