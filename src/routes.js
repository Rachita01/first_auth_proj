import React,{Component} from 'react';
import Component1 from './functional/component1';
import Component2 from './functional/component2';
import Callback from './functional/callback';
import history from './utils/history';

import {Router, Route, Switch,Redirect} from 'react-router';
import Container from './containers/container';
import Header from './containers/header';
import Auth from './utils/auth';
import AuthCheck from './utils/authcheck';
import UnauthRedirect from './functional/unauthredirect';
import ProtectedRoute from './functional/protectedroute';


const auth = new Auth();

const handleAuthentication = (props) => {
    if(props.location.hash){
        auth.handleAuth()
    }
}

const PrivateRoute = ({component: Component,auth}) => (
    <Route render={props => auth.isAuthenticated() === true?<Component auth={auth} {...props}/>:<Redirect to={{pathname:'/redirect'}}/>}/>)
class Routes extends Component{
    render(){
        return(
            <div>
                <Router history={history}>
                    <div>
                        <Header auth={auth}/>
                      <Switch>
                          <Route exact path='/' render={() => <Container auth={auth}/>}/>
                          <Route path='/authcheck' render={()=> <AuthCheck auth={auth}/>}/>
                          <Route path='/callback' render={(props) => {handleAuthentication(props); return <Callback/>}}/>
                          <Route path='/redirect' component={UnauthRedirect}/>
                          <Route path='/component1' component={Component1}/>
                          <Route path='/component1' component={Component2}/>
                          <PrivateRoute path="/privateroute" auth={auth} component={ProtectedRoute}/>
                         
                      </Switch>
                      </div>
                </Router>
            </div>
        )
    }
}

export default Routes;