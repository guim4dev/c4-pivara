<template>
    <div class="horizontal-scroll">
        <div v-for="item in 8" :key="item">
            <HoriozontalCard/>
        </div>
    </div>
</template>
<script>
import HoriozontalCard from '@/components/HorizontalCard.vue'

export default {
    name:"HorizontalScroll",
    components:{
        HoriozontalCard
    }
}
</script>
<style scoped>
    .horizontal-scroll{
        display: flex;
        width: 100vw;
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