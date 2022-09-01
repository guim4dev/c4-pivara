<template>
    <section>
        <span id="top">{{ tag }}</span>
        <div id="content">
            <h2>{{ nome }}</h2>
            <section id="tags">
                <el-tag :type="tag.type" v-for="tag in tags" :key="tags.indexOf(tag,tags)">
                    <span class="material-symbols-outlined" style="font-size:14px;margin-bottom:0">{{tag.icon}}</span>
                    {{ tag.text }}
                </el-tag>
            </section>
        </div>
    </section>
</template>
<script>
export default {
    name:"TurmaDescription",
    props:{
        tag:String,
        nome:String,
        tags:Array
    }
}
</script>
<style scoped>
    section{
        display: flex;
        flex-direction: column;
        padding: 10px 20px;
    }
    #top{
        color:#5451D6;
        font-size: 14px;
        text-align: left;
        margin-bottom: 8px;
    }
    .el-tag{
        margin-left: 8px;
    }
    #content{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    #tags{
        flex-direction: row;
    }
</style>