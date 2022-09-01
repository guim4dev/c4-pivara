import http from "@/services/configService";

const autenticacaoHeaderService = (token) => {
    if (token) {
        http.defaults.headers = {
            "token": token,
            "Content-Type": "application/json",
        };
    } else {
        delete http.defaults.headers.Authorization;
    }
}

export default autenticacaoHeaderService;