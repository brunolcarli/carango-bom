import axios from 'axios';


const propToken = 'token';


export function login(email: string, senha: string, userStore: any): Promise<any> {
    const loginData = { email, senha };
    return axios.post('http://localhost:3000/api/login', loginData)
    .then(response => response.data.dados)
    .then(response => {
        sessionStorage.setItem(propToken, response.token);
        userStore.user = response.usuario;
        
        return response;
    })
    .catch(error => {
        return Promise.reject(error.message);
    });
}

export function getAuth() {
    return sessionStorage.getItem(propToken);
}

export function logout() {
    return sessionStorage.removeItem(propToken);
}
