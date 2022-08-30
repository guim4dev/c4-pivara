<template>
    <router-link :to="link">
        <figure class="icon"><figcaption  id="mouse">
            <span class="material-symbols-outlined">{{ iconName }}</span></figcaption>
            <figcaption id="mouse">{{ itemName }}</figcaption>
        </figure>
    </router-link>
</template>

<script>
export default{
    name:'NavigationHeaderItem',
    props: {
        link:{
            type:String
        },
        iconName: {
            type: String
        },
        itemName: {
            type: String
        }
    }
}
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@200&display=swap');
   
   .material-symbols-outlined {
     font-size: 30px;
     font-variation-settings:
     'FILL' 0,
     'wght' 400,
     'GRAD' 0,
     'opsz' 49
   }

   .header-tracking a {
    font-family: 'Nunito', sans-serif;
    font-weight: bolder;
    font-size: 18px;
    color: black;
    text-align: center;
    padding: 10px 50px 44px 50px;
    line-height: 18px;
  }

  .icon {
    width: 60px;
    display: inline-block;
  }
</style>