import React,{useState} from "react";
import TextField from '@material-ui/core/TextField';
import {operation} from './redux';
import {connect} from 'react-redux';
import Botao from "../../components/botao";
import { Grid } from "@material-ui/core";
import {makeStyles} from '@material-ui/core/styles'


const Login=(props)=>{
    const [nickname, setNickname]= useState(null);
    const [password, setPassword]= useState(null);

    async function solicitarAcesso(){
        await props.solicitarAcesso(nickname, password);
    }

    const classes = useStyles();

    return(
      <Grid item md={6} lg={6} xs={12} className={classes.content}>
        <Grid container direction="column" spacing={3} >
          <Grid item xs={12}>
            <TextField
              className = {classes.input}
              onChange = {event=>setNickname(event.target.value)}
              id="standard-error-helper-text"
              label = "Username"
            />
        </Grid>
        <Grid item xs={12}>
          <TextField
            className = {classes.input}
            onChange = {event=>setPassword(event.target.value)}
            id="standard-error-helper-text"
            label = "Password"
            />
        </Grid>
        <Grid item>    
          <Botao texto='enviar' handleChange={solicitarAcesso} />
       </Grid>
      </Grid>
    </Grid>   
    )

}

const useStyles = makeStyles({
  input:{
    width:'100%'
  },
  content:{
    height:'100vh',
    alignItems: 'center',
    margin: "auto"
  }
})

const mapDispatchToProps = {
    solicitarAcesso: (nickname, password) => operation.solicitarAcesso(nickname, password)
  }

  export default connect(null,  mapDispatchToProps)(Login);