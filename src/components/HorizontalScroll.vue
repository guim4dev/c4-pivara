<template>
    <div class="horizontal-scroll">
        <aviso-card v-for="aviso in avisoData" :key="aviso.id" :isVertical="false" :text="aviso.text" :date="aviso.data" :status="aviso.status" :tags="aviso.tags"/>
    </div>
</template>
<script>
import AvisoCard from '@/components/AvisoCard.vue'

export default {
    name:"HorizontalScroll",
    components:{
        AvisoCard
    },
    data(){
        return{
            avisoData:[{
                id:1,
                text:"Aviso teste 1",
                status:"Novo",
                tags:[
                {
                    type:"success",
                    text:"Tag aqui",
                    icon:"group"
                }
                ]
            },{
                id:2,
                text:"Aviso teste 2",
                status:"Resolvido",
                tags:[
                {
                    type:"success",
                    text:"Tag aqui",
                    icon:"group"
                }
                ]
            },{
                id:1,
                text:"Aviso teste 1",
                status:"Novo",
                tags:[
                {
                    type:"success",
                    text:"Tag aqui",
                    icon:"group"
                }
                ]
            },{
                id:2,
                text:"Aviso teste 2",
                status:"Resolvido",
                tags:[
                {
                    type:"success",
                    text:"Tag aqui",
                    icon:"group"
                }
                ]
            },{
                id:1,
                text:"Aviso teste 1",
                status:"Novo",
                tags:[
                {
                    type:"success",
                    text:"Tag aqui",
                    icon:"group"
                }
                ]
            },{
                id:2,
                text:"Aviso teste 2",
                status:"Resolvido",
                tags:[
                {
                    type:"success",
                    text:"Tag aqui",
                    icon:"group"
                }
                ]
            }]
        }
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