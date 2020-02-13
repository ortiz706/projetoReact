import {SOLICITAR_ACESSO} from './loginActions';
const INITIAL_STATE = {
    userData:{
    name: null,
    age: null,
    cpf: null,
    expiredAccess: null
    },
    authorized: false
}

export default(state=INITIAL_STATE, action) =>{
    switch(action.type){
        case SOLICITAR_ACESSO:
            return{...state,userData:{...action.payLoad}, authorized: true }
        default:
            return state    
    }
}