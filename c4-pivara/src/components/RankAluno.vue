<template>
    <el-table :data="dataTable" id="rank"  :default-sort="{ prop: 'nota', order: 'descending' }">
        <el-table-column prop="nome" label="Aluno" />
        <el-table-column prop="nota" label="Nota" sortable=""/>
        <el-table-column prop="falta" label="Falta" sortable=""/>
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
    props:{
        dataTable:[]
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