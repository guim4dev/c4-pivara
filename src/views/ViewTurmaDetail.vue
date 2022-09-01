<template>
    <div style="padding: 20px; position: sticky; top: 56px; background-color: white;z-index:10">
        <TurmaDescription :tag="this.turma.curso.tipoCurso" :nome="this.turma.nomeTurma" :tags="tags"/>
    </div>
    <div class="page-wrapper">
        <section id="avisos">
            <HorizontalScroll :data="this.avisos"/>
        </section>
        <section id="chart">
            <div style="display: flex; align-items: center; justify-content: center; margin: 16px 16px;z-index:0;padding:0 10%">
                <el-select @change="setDisciplina" style="margin-right: 8px" class="m-2" :placeholder="currentDisciplina.nome" size="large">
                    <el-option
                    v-for="disciplina in this.turma.disciplinas"
                    :key="disciplina.codigo"
                    :label="disciplina.nome"
                    :value="{ codigo: disciplina.codigo, nome: disciplina.nome }"
                    />
                </el-select>
                <el-select @change="setTipoGrafico" class="m-2" :placeholder="tipoGrafico.nome" size="large">
                    <el-option
                    v-for="tipo in [{ slug: 'media', nome: 'Média', suffix: '' }, { slug: 'percentualFalta', nome: 'Percentual de Falta', suffix: '%' }]"
                    :key="tipo.slug"
                    :label="tipo.nome"
                    :value="tipo"
                    />
                </el-select>
            </div>
            <h2 style="text-align: left; margin-left: 32px">{{ tipoGrafico.nome }} em {{ currentDisciplina.nome }}</h2>
            <MyChart :dataChart="chartData" :suffix="tipoGrafico.suffix"/>
        </section>
        <section id="rank">
            <h2 style="text-align: left; margin: 32px">Ranking da Turma</h2>
            <RankAluno :data="this.turma.alunos"/>
        </section>
    </div>
</template>
<script>
import TurmaDescription from '@/components/TurmaDescription.vue'
import HorizontalScroll from '@/components/HorizontalScroll.vue'
import RankAluno from '@/components/RankAluno.vue'
import MyChart from '@/components/MyChart.vue'
 
export default {
    name: "ViewTurmaDetail",

    components: {
        TurmaDescription,
        HorizontalScroll,
        RankAluno,
        MyChart
    },

    data() {
        const turmaId = parseInt(this.$route.params.id)
        return {
            turmaId,
            turma: this.$store.getters.getTurma(turmaId),
            avisos: this.$store.getters.getAvisosByTurma(turmaId),
            tipoGrafico: { slug: 'media', nome: 'Média', suffix: '' }
        }
    },

    methods: {
        setDisciplina (newValue) {
            this.$store.commit('setChosenDiscipline', newValue)
        },

        setTipoGrafico (newValue) {
            this.tipoGrafico = newValue
        }
    },

    computed: {
        currentDisciplina() {
            return this.$store.getters.getDisciplinaFromTurma(this.turmaId, this.$store.state.chosenDiscipline.codigo)
        },

        chartData() {
            const dataChart = []
            this.currentDisciplina.etapas.forEach(etapa => {
                if (!etapa[this.tipoGrafico.slug]) {
                    return
                }
            
                if (this.tipoGrafico.slug === 'media') {
                    etapa.media = etapa.media.replace(',', '.')
                }
                dataChart.push([etapa.nomeEtapa, etapa[this.tipoGrafico.slug]])
            })
            return dataChart
        }
    },

    created() {
        const disciplinaInicial = this.turma.disciplinas[0]
        this.turma.alunos.forEach(aluno=>{
            aluno.nota = (Math.random() * (10 - 0) + 0).toFixed(2);
            aluno.falta = (Math.random() * (100 - 0) + 0).toFixed(2)+"%";
        })
        this.avisos.forEach(aviso=>{
            aviso.tags = [
                {
                    type:"brand-color",
                    text:this.turma.nomeTurma,
                    icon:"group"
                }
            ]
        })
        this.$store.commit('setChosenDiscipline', { codigo: disciplinaInicial.codigo, nome: disciplinaInicial.nome })
    }
}

</script>
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
        align-self: left;
        max-width: 1500px;
    }

</style>