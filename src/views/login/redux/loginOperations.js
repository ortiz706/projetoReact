import Mananger from '../loginMananger';
import * as Action from './loginActions';

export const solicitarAcesso = (nickname, password) => async dispatch =>{
    try{
        const resposta = await Mananger.solicitarAcesso(nickname, password);
        if(resposta && resposta.userData){
            dispatch(Action.solicitarAcesso(resposta.userData));
        }
        else{
            console.log("deu errado", resposta.mensage);
        }
    }
    catch(erro){
        console.log("erro Interno", erro);
    }
}