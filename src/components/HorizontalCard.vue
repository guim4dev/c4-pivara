<template>
    <div class="horizontal-card">
        <el-tag type="success">Período</el-tag>
        <span>
            <span class="material-symbols-outlined" style="font-size:18px;margin-bottom:0">school</span>
            <h2>Texto</h2>
        </span>
        <el-tag type="brand-color">Turma X</el-tag>
    </div>    
</template>
<script>
export default {
    name:"HoriozontalCard"
}
</script>
<style scoped>
    .horizontal-card{
        padding: 15px;
        background-color: #fff;
        min-width: 180px;
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        margin: 15px;
        border-radius: 12px;
    }
    .horizontal-card span{
        display: flex;
        align-items: center;
        font-size: 16px;  
    }
    h2{
        margin: 15px 0;
    }
</style>