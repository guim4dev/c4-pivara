import http from "@/services/configService";

const turmaService = async () => {
    try {
        const resp = await http.get('/SophiAWebAPI/api/v1/Colaboradores/51/Turmas')
        return resp.data
    } catch (err) {
        console.log(err)
    }
}

export default turmaService