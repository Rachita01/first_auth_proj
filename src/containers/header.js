import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

class Header extends Component{
    render(){
        return(
            <div>
              <Link to='/component1'>
                  Component 1
              </Link>
              <Link to='/component2'>
                  Component 2
              </Link>
              <Link to='/callback'>
                  Callback
              </Link>
              <Link to='/privateroute'>
                  Private Route
              </Link>
              {console.log(this.props.is_authenticated)}
              {this.props.is_authenticated
                  ?<button onClick={() => this.props.auth.logout()}>Logout</button>
                  :<button onClick={() => this.props.auth.login()}>Login</button>
              }
            </div>
        )
    }
}


function mapStateToProps(state){
    console.log(state.is_authenticated)
    return{
        is_authenticated: state.is_authenticated
    }
}

export default connect(mapStateToProps)(Header);
