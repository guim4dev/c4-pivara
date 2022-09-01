<template>
  <div style="padding: 20px; position: sticky; top: 56px; background-color: white;">
    <p> oieee </p>
    <AlunoDescription
      :aluno="aluno"
    />
    <el-select v-model="chosenClassWatcher" class="m-2" placeholder="Select" size="large">
      <el-option
        v-for="turma in aluno.turmas"
        :key="turma.id"
        :label="turma.nome"
        :value="{id: turma.id, nome: turma.nome}"
      />
    </el-select>
    <el-select v-model="chosenDisciplineWatcher" class="m-2" placeholder="this.$store.chosenDiscipline.nome" size="large">
      <el-option
        v-for="disciplina in listOfDisicplines"
        :key="disciplina.id"
        :label="disciplina.nome"
        :value="{id: disciplina.id, nome: disciplina.nome}"
      />
    </el-select>
  </div>
</template>

<script>
import AlunoDescription from "@/components/AlunoDescription.vue";

export default {
  name: "ViewAlunoDetail",

  components: {
    AlunoDescription,
  },

  data() {
    return {
      aluno: this.$store.getters.getStudentInfo(parseInt(this.$route.params.id)),
    }
  },

  created() {
    console.log('oieee')
    console.log(this.aluno)
    console.log(this.aluno.turmas)
    const turma = this.aluno.turmas[0]
    console.log('turma', turma)
    console.log('turma.id', turma.id)
    this.$store.commit('setChosenClass', turma)
    this.$store.commit('setChosenDiscipline', turma.disciplinas[0]);
  },

  watch: {
    chosenClassWatcher (newValue) {
      this.$store.commit('setChosenClass', newValue)
    },
    chosenDisciplineWatcher (newValue) {
      this.$store.commit('setChosenDiscipline', newValue)
    },
  },

  computed: {
    smartChosenDiscipline () {
      return this.$store.chosenDisicpline
    },

    smartChosenClass () {
      return this.$store.chosenClass
    },

    listOfDisicplines () {
      return this.aluno.turmas.find(turma => turma.id === this.$store.chosenClass.id).disciplinas
    },
  },
};
</script>
