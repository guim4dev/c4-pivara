<template>
    <div id="main">
        <img src="/img/logo.svg"/>
        <p>Olá, Professor!</p>
        <h1>Bem-vindo ao Painel do professor personalizado, aqui você pode checar a saúde escolar das suas turmas e acompanhar o desenvolvimento dos seus alunos.</h1>
    </div>
</template>

<script>

export default {
    name:"ViewHome",
    mounted(){
        setTimeout(()=>{
            let route = '/avisos'
            this.$router.push(route)
        },5000)
    },
    async created(){
        this.$store.commit('setup')
    },
}
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@200&display=swap');
    #main{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        background-color: #2F8AF5;
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 0 20%;
        color: #fff;
        font-family: 'Nunito', sans-serif;
    }
    h1{
        font-size: 2rem;
        font-weight: bold;
    }
    p{
        margin-bottom: 3rem;
        font-size: 1.4rem;
    }
    img{
        margin-bottom: 1rem;
    }
</style>