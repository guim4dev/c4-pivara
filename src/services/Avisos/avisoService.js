import http from "@/services/configService";

const avisoService = async () => {
    try {
        const resp = await http.get('/SophiAWebAPI/api/v1/Notificacoes?CodigoProfessor='+process.env.VUE_APP_IDPROF)
        return resp.data
      
    } catch (err) {
        console.log(err)
    }
}

export default avisoService