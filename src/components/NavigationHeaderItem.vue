<template>
    <router-link :to="link" :style="[active? 'font-weight:bold; font-size:14px':'font-weight:normal; font-size:12px']">
        <figure class="bg"><figcaption>
            <img v-if="active" :src="'/img/black-'+iconPath" />
            <img v-else :src="'/img/'+iconPath"/>
        </figcaption>
            <figcaption>{{ itemName }}</figcaption>
        </figure>
    </router-link>
</template>

<script>
export default{
    name:'NavigationHeaderItem',
    props: {
        link:{
            type: String
        },
        iconPath: {
            type: String
        },
        itemName: {
            type: String
        },
        active: {
            type: Boolean
        }
    }
}
</script>

<style scoped>
   .header-tracking a {
    font-family: 'Nunito', sans-serif;
    font-size: 12px;
    color: black;
    text-align: center;
  }

  .bg {
    display: inline-block;
  }
</style>