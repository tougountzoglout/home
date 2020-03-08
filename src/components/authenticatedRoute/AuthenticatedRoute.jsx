import React, { Component } from 'react';
import AuthenticationService from '../../services/AuthenticationService.js'
import { Route, Redirect } from 'react-router-dom';

class AuthenticationRoute extends Component {
    render() {

        if (AuthenticationService.checklogin()){
          //  console.log('adasdsaa');
            return (<Route {...this.props} />);}
        else
            return (<Redirect to="/login" />);
    }


}





export default AuthenticationRoute;