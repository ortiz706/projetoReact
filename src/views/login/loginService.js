import axios from 'axios';
class LoginService {
    async solicitarAcesso(nickname, password){
        return await axios.get('https://5b1b5cd1.ngrok.io/api/v1/autenticacao', {params:{nickname:nickname, password:password}})
    }
}
export default new LoginService();