import React,{useState} from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {operation} from './redux';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';



const Login=(props)=>{
    const [nickname, setNickname]= useState(null);
    const [password, setPassword]= useState(null);
    const [redirectTo, setRedirect] = useState(false);

    async function solicitarAcesso(){
        await props.solicitarAcesso(nickname, password);
        setRedirect(true);
    }

    return(
        <div>
        <TextField
          onChange = {event=>setNickname(event.target.value)}
          id="standard-error-helper-text"
          label = "Username"
        />
        <TextField
          onChange = {event=>setPassword(event.target.value)}
          id="standard-error-helper-text"
          label = "Password"
        />
        <Button onClick = {solicitarAcesso} />
        {redirectTo && <Redirect to='/home' />}
        </div>
        
    )

}

const mapDispatchToProps = {
    solicitarAcesso: (nickname, password)=>operation.solicitarAcesso(nickname, password)
  }

  export default connect(null,  mapDispatchToProps)(Login);