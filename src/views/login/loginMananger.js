import Service from './loginService';
class LoginMananger {
    async solicitarAcesso(nickname, password){
        return await Service.solicitarAcesso(nickname, password)
        .then(res=>{
            return {
                userData: res.data
            }
        })
        .catch(error=>{
            return {
                mensage: error.response.data
            }
        })
    }
}

export default new LoginMananger();