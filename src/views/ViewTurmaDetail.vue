<template>
    <div class="page-wrapper">
        <section id="avisos">
            <HorizontalScroll/>
        </section>
        <section id="rank">
            <RankAluno/>
        </section>
    </div>
</template>
<script>

import HorizontalScroll from '@/components/HorizontalScroll.vue'
import RankAluno from '@/components/RankAluno.vue'
 
export default {
    name:"ViewTurmaDetail",
    components:{
        HorizontalScroll,
        RankAluno
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

    #avisos{
        width: 100%;
        margin-bottom: 15px;
    }

    #rank{
        width: 100vw;
    }

</style>