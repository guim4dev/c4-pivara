<template>
  <div class="avisos-wrapper">
    <aviso-card v-for="aviso in avisoData" :key="aviso.id" :isVertical="true" :text="aviso.text" :date="aviso.data" :status="aviso.status" :tags="aviso.tags"/>
  </div>
</template>
<script>
import AvisoCard from '@/components/AvisoCard.vue'


export default {
  name:"ViewAvisos",
  components:{
    AvisoCard
  },
  data(){
    return{
      avisoData:[{
        id:1,
        text:"Aviso teste 1",
        data:"2 dias atrás",
        status:"Novo",
        tags:[
          {
            type:"custom",
            text:"Ensino-médio",
            icon:"school"
          },
          {
            type:"brand-color",
            text:"1º ano A",
            icon:"group"
          },
          {
            type:"warning",
            text:"Noite",
            icon:"sell"
          }
        ]
      },{
        id:2,
        text:"Aviso teste 2",
        data:"2 dias atrás",
        status:"Resolvido",
        tags:[
          {
            type:"custom",
            text:"Ensino-médio",
            icon:"school"
          },
          {
            type:"brand-color",
            text:"1º ano A",
            icon:"group"
          },
          {
            type:"warning",
            text:"Noite",
            icon:"sell"
          }
        ]
      }]
    }
  }
}
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@700&display=swap');

  .avisos-wrapper{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    font-family: 'Nunito', sans-serif;
  }
</style>