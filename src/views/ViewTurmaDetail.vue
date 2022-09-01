<template>
    <div style="padding: 20px; position: sticky; top: 56px; background-color: white;">
        <TurmaDescription :tag="'Ensino Médio'" :nome="'1º Ano A'" :tags="tags"/>
    </div>
    <div class="page-wrapper">
        <section id="avisos">
            <HorizontalScroll/>
        </section>
        <section id="chart">
            <div style="display: flex; align-items: center; justify-content: space-around; width: 100%; margin: 16px 16px">
                <el-select @change="setDisciplina" class="m-2" :placeholder="currentDisciplina.nome" size="large">
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
            <MyChart :dataChart="chartData" :suffix="tipoGrafico.suffix"/>
        </section>
        <section id="rank">
            <RankAluno/>
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
            tipoGrafico: { slug: 'media', nome: 'Média', suffix: '' },
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
                if (this.tipoGrafico.slug === 'media') {
                    etapa[this.tipoGrafico.slug] = etapa[this.tipoGrafico.slug].replace(',', '.')
                }
                dataChart.push([etapa.nomeEtapa, etapa[this.tipoGrafico.slug]])
            })
            return dataChart
        }
    },

    created() {
        const disciplinaInicial = this.turma.disciplinas[0]
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
    }

</style>