import axios from 'axios';
class LoginService {
    async solicitarAcesso(nickname, password){
        return await axios.get(`${process.env.REACT_APP_API_URL}/autenticacao`, {params:{nickname, password}})
    }
}
export default new LoginService();