<template>
    <div class="chart-card">
        <line-chart :data="dataChart" :suffix="suffix" />
    </div>
</template>
<script>
export default {
    name:"MyChart",

    props: {
        dataChart: {
            type: Array,
            required: true
        },
        suffix: {
            type: String
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