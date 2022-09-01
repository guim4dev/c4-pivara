<template>
    <div class="filters">
        <button v-for="filter in filters" :key="filter.type" class="filter" :id="[filter.active?'active':'']" @click="filter.active= !filter.active">{{ filter.type }}</button>    
    </div>
</template>
<script>
export default {
    name:"FilterBar",
    data(){
        return{
            filters:[
                {
                    type:"Todos",
                    active:true
                },
                {
                    type:"Período",
                    active:false
                },{
                    type:"Matrícula",
                    active:false
                },{
                    type:"Etapa",
                    active:false
                },{
                    type:"Disciplina",
                    active:false
                },{
                    type:"Turma",
                    active:false
                }
            ]
        }
    }
}
</script>
<style scoped>
    .filters{
        display: flex;
        align-items: center;
        justify-content: left;
        overflow: auto;
        overflow-x: scroll;
        margin-bottom: 15px;
        width: 100%;
        max-width: 750px;
    }
    .filter{
        padding: 4px 45px;
        border-radius: 15px;
        border: 1.5px solid #232B34;
        color: #232B34;
        background-color: #F4F6F8;
        font-weight: bold;
        margin-right: 8px;
    }
    #active{
        color: #fff;
        background-color: #232B34;
    }

    .filters::-webkit-scrollbar{
        height: 6px;             
        width: 2px;         
    }
    
    .filters::-webkit-scrollbar-thumb:hover{
        background-color: #bbc0c6             
    }

    @media (min-width: 750px){
        .filters{
        width: 750px;
        }
    }
</style>