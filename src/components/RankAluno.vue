<template>
    <el-table :data="dataTable" id="rank"  :default-sort="{ prop: 'nota', order: 'descending' }">
        <el-table-column prop="aluno" label="Aluno" />
        <el-table-column prop="nota" label="Nota" sortable=""/>
        <el-table-column prop="frequencia" label="Frequência" sortable=""/>
    </el-table>
</template>
<script>
import { ElTable, ElTableColumn } from 'element-plus'

export default {
    name:"RankAluno",
    components:{
        ElTable,
        ElTableColumn
    },
    data(){
        return{
            dataTable:[
                {
                    aluno:"Aluno1",
                    nota:7.5,
                    frequencia:75
                },
                {
                    aluno:"Aluno2",
                    nota:4,
                    frequencia:80
                },
                {
                    aluno:"Aluno3",
                    nota:10,
                    frequencia:20
                }
            ]
        }
    }
}
</script>
<style>
    #rank{
        width: 100vw;
        font-family: 'Nunito', sans-serif !important;
        color: #000;
    }

    thead{
        color: #000 !important;
    }

    td{
         background-color: #F4F6F8 !important;
    }

</style>