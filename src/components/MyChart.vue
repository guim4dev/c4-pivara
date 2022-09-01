<template>
    <div class="chart-card">
        <line-chart :data="dataChart" />
    </div>
</template>
<script>
export default {
    name:"MyChart",
    data(){
        return{
            dataChart: [["Jan", 4], ["Feb", 2], ["Mar", 10], ["Apr", 5], ["May", 3]]
        }
    },
    mounted(){
        setTimeout(() => {
            this.dataChart.push(["Jun",9])
        }, 500);
    }
}
</script>
<style scoped>
    .chart-card{
        background-color: #fff;
        padding: 15px;
    }
</style>