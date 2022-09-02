<template>
    <router-link :to="link" :style="[active? 'font-weight:bold; font-size:14px':'font-weight:normal; font-size:12px']">
        <figure class="bg"><figcaption>
            <el-badge v-if="avisos>0 && itemName=='Alertas'" :value="avisos" class="item">
                <img v-if="active" :src="'/img/black-'+iconPath" />
                <img v-else :src="'/img/'+iconPath"/>
            </el-badge>
            <span v-else>
                <img v-if="active" :src="'/img/black-'+iconPath" />
                <img v-else :src="'/img/'+iconPath"/>
            </span>
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
        },
        avisos: {
            type: Number
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