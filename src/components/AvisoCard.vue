<template>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    <base-card :id="[isVertical?'vertical':'horizontal']">
        <section id="top">
            <el-tag :type="this.statusTag.type">
                <span class="material-symbols-outlined" style="font-size:14px;margin-bottom:0">{{ this.statusTag.icon }}</span>
                {{ this.statusTag.text }}
            </el-tag>
            <span id="date">{{ date }}</span>
        </section>
        <section id="content">
            <span class="material-symbols-outlined" style="font-size:22px;margin-bottom:0">error</span>
            <h3>{{ text }}</h3>
        </section>
        <section id="tags">
            <el-tag :type="tag.type" v-for="tag in tags" :key="tags.indexOf(tag,tags)">
                <span class="material-symbols-outlined" style="font-size:14px;margin-bottom:0">{{tag.icon}}</span>
                {{ tag.text }}
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
        return{
            statusTag:{},
        }
    },
    props:{
        isVertical:Boolean,
        text:String,
        date:String,
        status:String,
        tags:Array
    },
    mounted(){
        switch(this.status){
            case 'Novo':
                this.statusTag = {text:this.status,type:'warning',icon:'error'}
                break;
            case 'Resolvido':
                this.statusTag = {text:this.status,type:'success',icon:'done'}
                break;
            case 'Pendente':
                this.statusTag = {text:this.status,type:'danger',icon:'error'}
        }
    }
}
</script>
<style scoped>
    #content{
        margin: 25px 0;
        display: flex;
        align-content: center;
    }
    #content span{
        margin-right: 8px;
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