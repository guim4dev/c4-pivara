<template>
    <div class="horizontal-scroll">
        <aviso-card v-for="aviso in data" :key="data.indexOf(aviso,data)" :isVertical="false" :text="aviso.titulo" :descricao="aviso.descricao" :status="aviso.situacao" :tags="aviso.tags"/>
    </div>
</template>
<script>
import AvisoCard from '@/components/AvisoCard.vue'

export default {
    name:"HorizontalScroll",
    components:{
        AvisoCard
    },
    props:{
        data:Array
    }
}
</script>
<style scoped>
    .horizontal-scroll{
        display: flex;
        width: 100%;
        overflow: auto;
        overflow-x: visible;
    }
    .horizontal-scroll::-webkit-scrollbar{
        height: 6px;             
        width: 2px;         
    }
    
    .horizontal-scroll::-webkit-scrollbar-thumb:hover{
        background-color: #bbc0c6             
    }

</style>