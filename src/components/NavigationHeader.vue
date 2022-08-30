<template>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />

  <div class="header-tracking">
    <div class="header-center">
      <NavigationHeaderItem iconName="notifications" itemName="Avisos" link="/avisos"></NavigationHeaderItem>
      <NavigationHeaderItem iconName="school" itemName="Turmas" link="/turmas"></NavigationHeaderItem>
      <NavigationHeaderItem iconName="account_circle" itemName="Alunos" link="/alunos"></NavigationHeaderItem>
    </div>
  </div>
</template> 

<script>
import NavigationHeaderItem from '@/components/NavigationHeaderItem.vue'

export default {
  name: 'App',
  components: {
    NavigationHeaderItem
  }
}
  
</script>
    
<style scoped>
  .header-tracking{
    overflow: hidden;
    background-color: #ffffff;
    padding: 30px 0px 30px 0px;
  }

  .header-center {
    float: center;
    margin-top: auto;
  }

  @media screen and (max-width: 500px) {
  .header a {
    float: none;
    display: block;
    text-align: center;
  }
  .header-center {
    float: none;
  }
}
  
</style>
  