import http from "@/services/configService";
import autenticacaoHeaderService from "./autenticacaoHeaderService";

const autenticacaoService = async () => {
    try {
        const resp = await http.post('/SophiAWebAPI/api/v1/Autenticacao', {'usuario': process.env.VUE_APP_USER, 'senha': process.env.VUE_APP_USER})
        autenticacaoHeaderService(resp.data)
        return resp.data
    } catch (err) {
        console.log(err)
    }
}

export default autenticacaoService