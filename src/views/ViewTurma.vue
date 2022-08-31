<template>
    <div class="page-wrapper">
        <section id="avisos">
            <HorizontalScroll/>
        </section>
    </div>
</template>
<script>

import HorizontalScroll from '@/components/HorizontalScroll.vue'
 
export default {
    name:"ViewTurma",
    components:{
        HorizontalScroll
    }
}
</script>
<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@700&display=swap');

  .page-wrapper{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 15px;
    font-family: 'Nunito', sans-serif;
  }
</style>