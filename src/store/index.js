import { createStore } from 'vuex'
// import VuexPersistence from 'vuex-persistedstate'
import _ from 'lodash'

// const vuexPersistence = new VuexPersistence({
//   key: 'vuex',
//   storage: window.sessionStorage
// })

// Create a new store instance.
const store = createStore({
  state () {
    return {
      data: {
        turmas: [
          {
            "codigoTurma": 27,
            "nomeTurma": "Relatórios acadêmicos Etapa",
            "nomeResumidoTurma": "RAE",
            "situacaoTurma": 1,
            "mediaFalta": 0,
            "mediaNota": 0,
            "curso": {
              "codigo": 14,
              "descricao": "Valida relatórios acadêmicos (aula)",
              "tipoCurso": "Curso Seriado"
            },
            "periodoLetivo": {
              "codigo": 1,
              "descricao": "2022"
            },
            "turnos": {
              "codigo": 2,
              "descricao": "6 AULAS"
            },
            "disciplinas": [
              {
                "codigo": 34,
                "codigoSetor": null,
                "nome": "Validacao (normal)",
                "etapas": [
                  {
                    "numeroEtapa": 1,
                    "nomeEtapa": "1 BIMESTRE",
                    "peso": 1,
                    "tipoEtapa": 1,
                    "codigoTurma": 0,
                    "falta": "9,0000",
                    "media": "9,0000",
                  },
                  {
                    "numeroEtapa": 2,
                    "nomeEtapa": "2 BIMESTRE",
                    "peso": 1,
                    "tipoEtapa": 1,
                    "codigoTurma": 0,
                    "falta": "9,0000",
                    "media": "9,0000",
                  },
                  {
                    "numeroEtapa": 3,
                    "nomeEtapa": "3 BIMESTRE",
                    "peso": 1,
                    "tipoEtapa": 1,
                    "codigoTurma": 0,
                    "falta": "9,0000",
                    "media": "9,0000",
                  },
                  {
                    "numeroEtapa": 4,
                    "nomeEtapa": "4 BIMESTRE",
                    "peso": 1,
                    "tipoEtapa": 1,
                    "codigoTurma": 0,
                    "falta": "9,0000",
                    "media": "9,0000",
                  },
                  {
                    "numeroEtapa": 13,
                    "nomeEtapa": "Fim das etapas",
                    "peso": 1,
                    "tipoEtapa": 2,
                    "codigoTurma": 0,
                    "falta": "9,0000",
                    "media": "9,0000",
                  },
                  {
                    "numeroEtapa": 14,
                    "nomeEtapa": "Rec. Final",
                    "peso": 1,
                    "tipoEtapa": 4,
                    "codigoTurma": 0,
                    "falta": "9,0000",
                    "media": "9,0000",
                  },
                  {
                    "numeroEtapa": 16,
                    "nomeEtapa": "Situação Final",
                    "peso": 1,
                    "tipoEtapa": 6,
                    "codigoTurma": 0,
                    "falta": "9,0000",
                    "media": "9,0000",
                  }
                ]
              }
            ],
            "alunos": [
              {
                "codigoAluno": 66,
                "codigoExterno": "1005",
                "codigoMatricula": 38,
                "situacaoMatricula": "Ativa",
                "nome": "Aluno [etapa] - 2 Faltas (1bim,2bim)"
              },
              {
                "codigoAluno": 69,
                "codigoExterno": "1006",
                "codigoMatricula": 39,
                "situacaoMatricula": "Ativa",
                "nome": "Aluno Etapa 4 Faltas"
              }
            ]
          },
          {
            "codigoTurma": 28,
            "nomeTurma": "Relatórios Brabo da Etapa",
            "nomeResumidoTurma": "RAE",
            "situacaoTurma": 1,
            "mediaFalta": 0,
            "mediaNota": 0,
            "curso": {
              "codigo": 14,
              "descricao": "Valida relatórios acadêmicos (aula)",
              "tipoCurso": "Curso Seriado"
            },
            "periodoLetivo": {
              "codigo": 1,
              "descricao": "2022"
            },
            "turnos": {
              "codigo": 2,
              "descricao": "6 AULAS"
            },
            "disciplinas": [
              {
                "codigo": 34,
                "codigoSetor": null,
                "nome": "Validacao (normal)",
                "etapas": [
                  {
                    "numeroEtapa": 1,
                    "nomeEtapa": "1 BIMESTRE",
                    "peso": 1,
                    "tipoEtapa": 1,
                    "codigoTurma": 0,
                    "falta": "9,0000",
                    "media": "9,0000",
                  },
                  {
                    "numeroEtapa": 2,
                    "nomeEtapa": "2 BIMESTRE",
                    "peso": 1,
                    "tipoEtapa": 1,
                    "codigoTurma": 0,
                    "falta": "9,0000",
                    "media": "9,0000",
                  },
                  {
                    "numeroEtapa": 3,
                    "nomeEtapa": "3 BIMESTRE",
                    "peso": 1,
                    "tipoEtapa": 1,
                    "codigoTurma": 0,
                    "falta": "9,0000",
                    "media": "9,0000",
                  },
                  {
                    "numeroEtapa": 4,
                    "nomeEtapa": "4 BIMESTRE",
                    "peso": 1,
                    "tipoEtapa": 1,
                    "codigoTurma": 0,
                    "falta": "9,0000",
                    "media": "9,0000",
                  },
                  {
                    "numeroEtapa": 13,
                    "nomeEtapa": "Fim das etapas",
                    "peso": 1,
                    "tipoEtapa": 2,
                    "codigoTurma": 0,
                    "falta": "9,0000",
                    "media": "9,0000",
                  },
                  {
                    "numeroEtapa": 14,
                    "nomeEtapa": "Rec. Final",
                    "peso": 1,
                    "tipoEtapa": 4,
                    "codigoTurma": 0,
                    "falta": "9,0000",
                    "media": "9,0000",
                  },
                  {
                    "numeroEtapa": 16,
                    "nomeEtapa": "Situação Final",
                    "peso": 1,
                    "tipoEtapa": 6,
                    "codigoTurma": 0,
                    "falta": "9,0000",
                    "media": "9,0000",
                  }
                ]
              }
            ],
            "alunos": [
              {
                "codigoAluno": 66,
                "codigoExterno": "1005",
                "codigoMatricula": 38,
                "situacaoMatricula": "Ativa",
                "nome": "Aluno [etapa] - 2 Faltas (1bim,2bim)"
              },
              {
                "codigoAluno": 70,
                "codigoExterno": "1006",
                "codigoMatricula": 40,
                "situacaoMatricula": "Ativa",
                "nome": "João josé"
              }
            ]
          },
        ]
      },
      chosenDiscipline: {
        id: null,
        nome: null,
      },
      chosenClass: {
        id: null,
        nome: null,
      }
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

      console.log(students)
      return students
    }
  },
  
  mutations: {
    setChosenDiscipline (state, discipline) {
      state.chosenDiscipline = discipline
    },

    setChosenClass (state, klass) {
      state.chosenClass = klass
      state.chosenDiscipline = _.pick(state.data.turmas.find(turma => turma.id === klass.id).disciplinas[0], ['id', 'nome'])
    }
  }
})

export default store