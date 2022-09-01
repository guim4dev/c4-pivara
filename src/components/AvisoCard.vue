<template>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    <base-card :id="[isVertical?'vertical':'horizontal']">
        <section id="top">
            <el-tag :type="this.statusTag.type">
                <span class="material-symbols-outlined" style="font-size:14px;margin-bottom:0">{{ this.statusTag.icon }}</span>
                {{ this.statusTag.text }}
            </el-tag>
            <span id="date">{{ difDate }}</span>
        </section>
        <section id="content">
            <!--<span class="material-symbols-outlined" style="font-size:22px;margin-bottom:0">error</span>-->
            <img style="font-size:22px;margin-right:10px;margin-bottom:3px;" :src="'/img/warning.svg'"/>
            <h3>{{ "#" +cod+ "&nbsp;" }}</h3><h3>{{ text }}</h3>
        </section>
        <section id="description">
            <h6>{{ description }}</h6>
        </section>
        <section id="tags">
            <el-tag :type="this.entidadeTag.type">
                <span class="material-symbols-outlined" style="font-size:14px;">{{ this.entidadeTag.icon }}</span>
                {{ this.entidadeTag.text }}
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
    },
    data(){
        const currentDate = Date.now();
        const oldDate = Date.parse(this.date);
        const difDate = currentDate - oldDate;
        
        return{
            statusTag:{},
            entidadeTag:{},
            difDate: difDate,
        }
    },
    props:{
        isVertical:Boolean,
        text:String,
        cod:Int32Array,
        description:String,
        date:Number,
        status:String,
        tags:String
    },
    mounted(){
        switch(this.status){
            case 'Resolvido':
                this.statusTag = {text:this.status,type:'success',icon:'done'}
                break;
            case 'Pendente':
                this.statusTag = {text:this.status,type:'warning',icon:'error'}
        }
        switch(this.tags){
            case 'Turma':
                this.entidadeTag = {text:this.tags}
                break;
            case 'Aluno':
                this.entidadeTag = {text:this.tags}
        }
    }
}
</script>
<style scoped>
    #content{
        margin: 20px 0px 10px 0px;
        display: flex;
        align-content: center;
    }
    #content span{
        margin-right: 8px;
    }
    h6{
        font-size: 14px;
        font-weight: normal;
    }
    #description{
        margin: 0px 0px 25px 30px;
        display: flex;
        align-content: center;
    }
    .el-tag{
        margin-right: 8px;
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

    #horizontal{
        width: 180px !important;
        margin-right: 15px;
    }

    @media (min-width: 750px){
    #vertical{
      width: 750px;
    }
  }
</style>