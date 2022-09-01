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
        avisos: [
          {
            "titulo": "Aviso de Turma",
            "descricao": "Descrição do aviso",
            "situacao": "Pendente",
            "dataCriacao": "2022-01-01T00:00:00.000Z",
            "entidade": {
              "codigoEntidade": 27,
              "descricaoEntidade": "Turma",
            } 
          },
          {
            "titulo": "Aviso de Aluno",
            "descricao": "Descrição do aviso",
            "situacao": "Pendente",
            "dataCriacao": "2022-01-01T00:00:00.000Z",
            "entidade": {
              "codigoEntidade": 66,
              "descricaoEntidade": "Aluno",
            } 
          },
        ],
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
                "nome": "Matemática",
                "etapas": [
                  {
                    "numeroEtapa": 1,
                    "nomeEtapa": "1 BIMESTRE",
                    "peso": 1,
                    "tipoEtapa": 1,
                    "codigoTurma": 0,
                    "percentualFalta": 0.5,
                    "media": "9.5",                  
                  },
                  {
                    "numeroEtapa": 2,
                    "nomeEtapa": "2 BIMESTRE",
                    "peso": 1,
                    "tipoEtapa": 1,
                    "codigoTurma": 0,
                    "percentualFalta": 9.0000,
                    "media": "7,5000",
                  },
                  {
                    "numeroEtapa": 3,
                    "nomeEtapa": "3 BIMESTRE",
                    "peso": 1,
                    "tipoEtapa": 1,
                    "codigoTurma": 0,
                    "percentualFalta": 9.0000,
                    "media": "9,0000",
                  },
                  {
                    "numeroEtapa": 4,
                    "nomeEtapa": "4 BIMESTRE",
                    "peso": 1,
                    "tipoEtapa": 1,
                    "codigoTurma": 0,
                    "percentualFalta": 9.0000,
                    "media": "9,321",
                  },
                  {
                    "numeroEtapa": 13,
                    "nomeEtapa": "Fim das etapas",
                    "peso": 1,
                    "tipoEtapa": 2,
                    "codigoTurma": 0,
                    "percentualFalta": 9.0000,
                    "media": "9,0000",
                  },
                  {
                    "numeroEtapa": 14,
                    "nomeEtapa": "Rec. Final",
                    "peso": 1,
                    "tipoEtapa": 4,
                    "codigoTurma": 0,
                    "percentualFalta": 9.0000,
                    "media": "9,0000",
                  },
                  {
                    "numeroEtapa": 16,
                    "nomeEtapa": "Situação Final",
                    "peso": 1,
                    "tipoEtapa": 6,
                    "codigoTurma": 0,
                    "percentualFalta": 9.0000,
                    "media": "9,0000",
                  }
                ]
              },
              {
                "codigo": 35,
                "codigoSetor": null,
                "nome": "Física",
                "etapas": [
                  {
                    "numeroEtapa": 1,
                    "nomeEtapa": "1 BIMESTRE",
                    "peso": 1,
                    "tipoEtapa": 1,
                    "codigoTurma": 0,
                    "percentualFalta": 2.5000,
                    "media": "5,000",
                  },
                  {
                    "numeroEtapa": 2,
                    "nomeEtapa": "2 BIMESTRE",
                    "peso": 1,
                    "tipoEtapa": 1,
                    "codigoTurma": 0,
                    "percentualFalta": 0.000,
                    "media": "7,5000",
                  },
                  {
                    "numeroEtapa": 3,
                    "nomeEtapa": "3 BIMESTRE",
                    "peso": 1,
                    "tipoEtapa": 1,
                    "codigoTurma": 0,
                    "percentualFalta": 9.000,
                    "media": "5,000",
                  },
                  {
                    "numeroEtapa": 4,
                    "nomeEtapa": "4 BIMESTRE",
                    "peso": 1,
                    "tipoEtapa": 1,
                    "codigoTurma": 0,
                    "percentualFalta": 7.000,
                    "media": "5,000",
                  },
                  {
                    "numeroEtapa": 13,
                    "nomeEtapa": "Fim das etapas",
                    "peso": 1,
                    "tipoEtapa": 2,
                    "codigoTurma": 0,
                    "percentualFalta": 2.000,
                    "media": "5,000",
                  },
                  {
                    "numeroEtapa": 14,
                    "nomeEtapa": "Rec. Final",
                    "peso": 1,
                    "tipoEtapa": 4,
                    "codigoTurma": 0,
                    "percentualFalta": 3.000,
                    "media": "5,312345",
                  },
                  {
                    "numeroEtapa": 16,
                    "nomeEtapa": "Situação Final",
                    "peso": 1,
                    "tipoEtapa": 6,
                    "codigoTurma": 0,
                    "percentualFalta": 3.000,
                    "media": "5,000",
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
                    "percentualFalta": 9.0000,
                    "media": "9,0000",
                  },
                  {
                    "numeroEtapa": 2,
                    "nomeEtapa": "2 BIMESTRE",
                    "peso": 1,
                    "tipoEtapa": 1,
                    "codigoTurma": 0,
                    "percentualFalta": 9.0000,
                    "media": "9,0000",
                  },
                  {
                    "numeroEtapa": 3,
                    "nomeEtapa": "3 BIMESTRE",
                    "peso": 1,
                    "tipoEtapa": 1,
                    "codigoTurma": 0,
                    "percentualFalta": 9.0000,
                    "media": "9,0000",
                  },
                  {
                    "numeroEtapa": 4,
                    "nomeEtapa": "4 BIMESTRE",
                    "peso": 1,
                    "tipoEtapa": 1,
                    "codigoTurma": 0,
                    "percentualFalta": 9.0000,
                    "media": "9,0000",
                  },
                  {
                    "numeroEtapa": 13,
                    "nomeEtapa": "Fim das etapas",
                    "peso": 1,
                    "tipoEtapa": 2,
                    "codigoTurma": 0,
                    "percentualFalta": 9.0000,
                    "media": "9,0000",
                  },
                  {
                    "numeroEtapa": 14,
                    "nomeEtapa": "Rec. Final",
                    "peso": 1,
                    "tipoEtapa": 4,
                    "codigoTurma": 0,
                    "percentualFalta": 9.0000,
                    "media": "9,0000",
                  },
                  {
                    "numeroEtapa": 16,
                    "nomeEtapa": "Situação Final",
                    "peso": 1,
                    "tipoEtapa": 6,
                    "codigoTurma": 0,
                    "percentualFalta": 9.0000,
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
        codigo: null,
        nome: null,
      },
      chosenClass: {
        codigoTurma: null,
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
    },

    getTurma: (state) => (turmaId) => {
      return state.data.turmas.find(turma => turma.codigoTurma === turmaId)
    },

    getDisciplinaFromTurma: (state) => (turmaId, disciplinaId) => {
      console.log('coco')
      console.log(turmaId, disciplinaId)
      return state.data.turmas.find(turma => turma.codigoTurma === turmaId).disciplinas.find(disciplina => disciplina.codigo === disciplinaId)
    }, 
  },
  
  mutations: {
    setChosenDiscipline (state, discipline) {
      state.chosenDiscipline = _.pick(discipline, ['codigo', 'nome'])
    },

    setChosenClass (state, klass) {
      state.chosenClass = _.pick(klass, ['codigoTurma', 'nome'])
    }
  }
})

export default store