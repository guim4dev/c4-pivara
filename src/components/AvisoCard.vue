<template>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    <base-card id="aviso-card">
        <section id="top">
            <el-tag type="success">Turma X</el-tag>
            <span>2 horas atrás</span>
        </section>
        <section id="content">
            <span class="material-symbols-outlined">error</span>
            <h2>Alerta queda de frequência</h2>
        </section>
        <section id="tags">
            <el-tag type="custom">
                <span class="material-symbols-outlined" style="font-size:14px;margin-bottom:0">school</span>
                Ensino-médio
            </el-tag>
            <el-tag type="brand-color" style="margin:0 6px">
                <span class="material-symbols-outlined" style="font-size:14px;margin-bottom:0">group</span>
                1º ano A
            </el-tag>
            <el-tag type="warning">
                <span class="material-symbols-outlined" style="font-size:14px;margin-bottom:0">sell</span>
                Noite
            </el-tag>
        </section>
    </base-card>
</template>
<script>
import BaseCard from '@/components/BaseCard.vue'
import {ElTag} from 'element-plus'
export default {
    name:"AvisoCard",
    components:{
        BaseCard,
        ElTag
    }
}
</script>
<style scoped>
    #content{
        margin: 25px 0;
        display: flex;
        align-content: center;
        font-size: 16px;
    }
    #content span{
        margin-right: 8px;
    }
    .tag{
        font-size: 12px;
        display: flex;
        flex-direction: row;
        padding: 2px 6px
    }
    
    #top{
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #30B565;
    }
    #top span{
        font-size: 14px;
    }
    #tags{
        display: flex;
        align-items: center;
    }
    .el-tag.el-tag--custom{
        --el-tag-bg-color: #EEEEFB;
        --el-tag-border-color: #EEEEFB;
        --el-tag-hover-color: #EEEEFB;
        --el-tag-text-color: #5451D6
    }
</style>