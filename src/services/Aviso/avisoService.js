//import http from "@/services/configService";

const avisoService = async () => {
    //try {
        //const resp = await http.get('/SophiAWebAPI/api/v1/Notificacoes?CodigoProfessor=51')
        //return resp.data
        return [
            {
                "titulo": "Aviso de Turma",
                "descricao": "Descrição do aviso",
                "situacao": "Pendente",
                "dataCriacao": "2022-01-01T00:00:00.000Z",
                "entidade": {
                    "codigoEntidade": 27,
                    "descricaoEntidade": "Turma",
                } 
            },
            {
                "titulo": "Aviso de Aluno",
                "descricao": "Descrição do aviso",
                "situacao": "Pendente",
                "dataCriacao":"2022-01-01T00:00:00.000Z",
                "entidade": {
                    "codigoEntidade": 66,
                    "descricaoEntidade": "Aluno",
                } 
            }
        ];
      
    //} catch (err) {
      //  console.log(err)
    //}
}

export default avisoService