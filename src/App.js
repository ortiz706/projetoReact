import React from 'react';
import './App.css';
import Home from './views/home'
import{
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import Layout from './components/layout';
import {connect} from 'react-redux';
import Login from './views/login'

const GestaoAcesso =({authorized})=>{
  if(authorized){
    return(
      <Switch>
        <Route expect path="/home" component={Home} />
        <Redirect to='/home' />
      </Switch>
    )
  } 
  return(
    <Switch>
      <Route path="/acessoNegado">
        <div>
          <h1>Acesso Negado</h1>
        </div>
      </Route>
      <Route path="/login" component={Login} />
      <Redirect to='/login' />
    </Switch>
  )

}

const App =props=>{
 
  return (
    <Layout>
      <GestaoAcesso authorized={props.authorized}/>
      </Layout> 
   );
}

const mapStateToProps = state=>{
  console.log('state', state)
  return{
    authorized: state.login.authorized
  }
}



export default connect(mapStateToProps, null)(App);
