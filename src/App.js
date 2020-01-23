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

const App =()=>{
 
  return (
    <Layout>
        <Switch>
        <Route expect path="/home" component={Home} />
        <Route path="/admin">
          <div>
            <h1>Admin</h1>
          </div>
        </Route>
        <Redirect to='/home' />
        </Switch>
      </Layout> 
   );
}

export default App;
