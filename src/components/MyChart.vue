<template>
    <div class="chart-card">
        <line-chart :data="dataChart" />
    </div>
</template>
<script>
export default {
    name:"MyChart",

    props: {
        dataChart: {
            type: Array,
            required: true
        }
    },
}
</script>
<style scoped>
    .chart-card{
        background-color: #fff;
        padding: 15px;
    }
</style>