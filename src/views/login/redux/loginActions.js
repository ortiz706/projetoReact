export const SOLICITAR_ACESSO = 'login/SOLICITAR_ACESSO';
const solicitarAcesso= (userData) =>(
    {
        type: SOLICITAR_ACESSO,
        payLoad: userData
    }
);

export default solicitarAcesso;