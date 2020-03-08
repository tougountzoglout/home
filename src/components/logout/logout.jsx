import React, { Component } from 'react';
import AuthenticationService from '../../services/AuthenticationService.js';

class Logout extends Component {




    render() {
        AuthenticationService.logout();
        return (
           
            <div className="Welcome container bg-success">
               <h2>You are Logget Out </h2>
            </div>
        );


    }


}





export default Logout;