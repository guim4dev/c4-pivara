import http from "@/services/configService";
import autenticacaoHeaderService from "./autenticacaoHeaderService";

const autenticacaoService = async () => {
    try {
        const resp = await http.post('/SophiAWebAPI/api/v1/Autenticacao', {'usuario': 'lucas', 'senha': 'lucas'})
        autenticacaoHeaderService(resp)
        return resp
    } catch (err) {
        console.log(err)
    }
}

export default autenticacaoService