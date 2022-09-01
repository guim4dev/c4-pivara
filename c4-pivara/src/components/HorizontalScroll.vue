<template>
    <div class="horizontal-scroll">
        <aviso-card v-for="aviso in data" :key="data.indexOf(aviso,data)" :isVertical="false" :date="aviso.dataCriacao" :text="aviso.titulo" :descricao="aviso.descricao" :status="aviso.situacao" :tags="aviso.entidade.descricaoEntidade"/>
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
    },
    mounted(){
        switch(this.tags){
            case 'Turma':
                this.entidadeTag = {text:this.tags}
                break;
            case 'Aluno':
                this.entidadeTag = {text:this.tags}
        }
    },
    data(){
        const currentDate = Date.now();
        const oldDate = Date.parse(this.date);

        function calculateDateDiff(){
            let start = oldDate
            let end = currentDate

            start = new Date(start)
            end = new Date(end)
            
            let diffInTime = Math.abs(end - start)
            let timeInOneDay = 1000 * 60 * 60 * 24
            let difDate = Math.ceil(diffInTime / timeInOneDay)

            return difDate
        }

        const difDate = calculateDateDiff()
        
        return{
            statusTag:{},
            entidadeTag:{},
            difDate: difDate,
        }
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