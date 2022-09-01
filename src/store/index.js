import { createStore } from 'vuex'
import _ from 'lodash'
import autenticacaoService from '@/services/Autenticacao/autenticacaoService'
import turmaService from '@/services/Turma/turmaService'
import avisoService from '@/services/Avisos/avisoService'

const store = createStore({
  state () {
    return {
      data: {
        avisos: [],
        turmas: []
      },
      chosenDiscipline: {
        codigo: null,
        nome: null,
      },
      chosenClass: {
        codigoTurma: null,
        nomeTurma: null,
      },        
      token: null
    }
  },
  getters: {
    getStudents: (state) => {
      const students = []
      state.data.turmas.forEach((turma) => {
        turma.alunos.forEach((aluno) => {
          const foundAluno = students.find(student => student.codigoAluno === aluno.codigoAluno)
          if (foundAluno) {
            foundAluno.matriculas.push(aluno.codigoMatricula)
          } else {
            students.push({
              ...aluno,
              matriculas: [aluno.codigoMatricula]
            })
          }
        })
      })

      return students
    },

    getAvisosByTurma:(state)=>(turmaId)=>{
      const avisos = []
      state.data.avisos.forEach(aviso=>{
        if(aviso.entidade.descricaoEntidade=="Turma" && aviso.entidade.codigoEntidade==turmaId){
          avisos.push(aviso)
        }
      })
      return avisos
    },

    getAvisosByStudent:(state)=>(alunoId)=>{
      const avisos = []
      state.data.avisos.forEach(aviso=>{
        if(aviso.entidade.descricaoEntidade=="Aluno" && aviso.entidade.codigoEntidade==alunoId){
          avisos.push(aviso)
        }
      })
      return avisos
    },

    getStudent: (state) => (id) => {
      let student = null
      state.data.turmas.forEach((turma) => {
        const foundAluno = turma.alunos.find((aluno) => aluno.codigoAluno === id)
        if (!foundAluno) {
          return
        }

        if (!student) {
          student = {
            ...foundAluno,
            turmas: [{ turma: turma , codigoMatricula: foundAluno.codigoMatricula }]
          }
          return
        }
        student.turmas.push({ turma: turma , codigoMatricula: foundAluno.codigoMatricula }) 
      })

      return student
    },

    getTurma: (state) => (turmaId) => {
      return state.data.turmas.find(turma => turma.codigoTurma === turmaId)
    },

    getDisciplinaFromTurma: (state) => (turmaId, disciplinaId) => {
      return state.data.turmas.find(turma => turma.codigoTurma === turmaId).disciplinas.find(disciplina => disciplina.codigo === disciplinaId)
    }, 

    getAvisosNum:(state)=>()=>{
      let num = 0
      state.data.avisos.forEach(aviso=>{
        if(aviso.situacao==="Pendente"){
          num++
        }
      })
      return num
    },
    getToken:(state)=>{
      return state.token
    },
    getTurmas:(state)=>{
      return state.data.turmas
    }
  },
  
  mutations: {
    setChosenDiscipline (state, discipline) {
      state.chosenDiscipline = _.pick(discipline, ['codigo', 'nome'])
    },

    setChosenClass (state, klass) {
      state.chosenClass = _.pick(klass, ['codigoTurma', 'nomeTurma'])
    },

    async setup(state){
      state.token = await autenticacaoService()
      state.data.turmas = await turmaService()
      state.data.avisos = await avisoService()
    }
  }
})

export default store