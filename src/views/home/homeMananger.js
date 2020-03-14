import Service from './homeService';
class HomeMananger {
    async listarMusicas(){
        return await Service.listarMusicas()
        .then(res=>{
            return {
                musicas: res && res.data? res.data : [] 
            };
        })
        .catch(error=>{
            return {
                mensage: error.response.data
            }
        })
    }
}

export default new HomeMananger();