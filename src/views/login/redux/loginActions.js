export const SOLICITAR_ACESSO = 'login/SOLICITAR_ACESSO';
const solicitarAcesso= (userData) => {
    return {
        type: SOLICITAR_ACESSO,
        payLoad: userData
    }
};

export { solicitarAcesso };