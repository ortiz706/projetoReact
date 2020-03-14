import axios from 'axios';
class HomeService {
    async listarMusicas(){
        return await axios.get(`${process.env.REACT_APP_API_URL}/playlist`)
    }
}
export default new HomeService();