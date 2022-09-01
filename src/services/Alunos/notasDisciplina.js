import http from "@/services/configService";

export default async (matricula, disciplina) => {
  try {
    const resp = await http.get(`SophiAWebAPI/api/v1/alunos/Matriculas/${matricula}/Boletim?Disciplinas=${disciplina}`);
    return resp.data;

  } catch (err) {
    console.log(err);
    return {};
  }
}