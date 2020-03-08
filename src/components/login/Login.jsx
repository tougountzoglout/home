import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AuthenticationService from '../../services/AuthenticationService.js';
import { withRouter } from 'react-router-dom';
class Login extends Component {

    constructor(props) {

        super(props);
        this.state =

        {
            username: '',
            password: '',
            status: -1
        }

    }

    handleChange = (event) => {

        this.setState({ [event.target.name]: event.target.value });
    }

    checkLogin = () => {


        if (this.state.username === 'teo' && this.state.password === '123') {
            AuthenticationService.login(this.state.username, this.state.password)
            this.props.history.push(`/welcome/${this.state.username}`)
            this.setState({ status: 1 })
        }
        else
            this.setState({ status: 0 })
    }

    render() {
        return (
            <div className="Login container">
                <div className="form-group">


                    <ShowLogin status={this.state.status}></ShowLogin>
                    <label htmlFor="username">UserName:</label>
                    <input type="text" name="username" className="form-control" placeholder="" aria-describedby="usernamehelp" onChange={this.handleChange} value={this.state.username} />

                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" className="form-control" placeholder="" aria-describedby="passhelp" onChange={this.handleChange} value={this.state.password} />

                    <br></br>
                    <button className="btn btn-success" onClick={this.checkLogin}>
                        Login
                </button>
                </div>
            </div>
        );


    }


}




function ShowLogin(props) {

    if (props.status === 0)
        return (
            <div className="alert alert-danger">
                Login Failed!
            </div>
        )
    else if (props.status === 1)
        return (
            <div className="alert alert-danger">
                Login Succeeded!
            </div>
        )
    else
        return null;


}

ShowLogin.defaultProps = {
    status: -1,

}

ShowLogin.propTypes = {
    status: PropTypes.number
}



export default withRouter(Login);