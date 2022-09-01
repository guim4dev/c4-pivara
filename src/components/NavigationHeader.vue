<template>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />

  <div class="header-tracking">
    <div class="header-center">
      <NavigationHeaderItem v-for = "icon in colorIcon" :key="colorIcon.indexOf(icon, colorIcon)" :avisos="this.num" v-on:click="()=>{this.clearColorIcon();icon.active=true;}" :active="icon.active" :iconPath="icon.default" :itemName="icon.itemName" :link="icon.link"></NavigationHeaderItem>
    </div>
  </div>
</template> 

<script>
import NavigationHeaderItem from '@/components/NavigationHeaderItem.vue'

export default {
  name: 'App',
  components: {
    NavigationHeaderItem
  },
  data(){
    return{
      num:this.$store.getters.getAvisosNum,
      colorIcon:[
        {
          default: 'bell.svg',
          active: false,
          itemName: "Alertas",
          link: "/avisos"
        },
        {
          default: 'notes.svg',
          active: false,
          itemName: "Turmas",
          link: "/turmas"
        },
        {
          default: 'user-circle.svg',
          active: false,
          itemName: "Alunos",
          link: "/alunos"
        }
      ]
    }
  },
  methods: {
    clearColorIcon(){
      this.colorIcon.forEach(o=>{
        o.active=false;
      })
    }
  },
  created(){
    switch(this.$route.path){
      case "/avisos":
        this.colorIcon[0].active = true;
        break;
      case "/turmas":
        this.colorIcon[1].active = true;
        break;
      case "/alunos":
        this.colorIcon[2].active = true;
        break;
      default:
        this.colorIcon[0].active = true
    }
  }
}
</script>
    
<style scoped>
  .header-tracking {
    overflow: hidden;
    background-color: #ffffff;
    padding: 20px 0px 10px 0px;
    position: -webkit-sticky; /* Safari */
    position: sticky;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .header-center {
    margin-top: auto;
    display: flex;
    width: 100%;
    max-width: 900px;
    align-items: center;
    justify-content: space-around;
  }

  @media screen and (max-width: 500px) {
    
  }
</style>