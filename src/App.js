import React, { Component } from 'react';
import './App.css';
import Header from './components/header/header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/login/Login';
import Footer from './components/footer/footer';
import Welcome from './components/welcome/welcome';
import { Switch,  BrowserRouter as Router,Route} from 'react-router-dom';
import Logout from './components/logout/logout';
import AuthenticationRoute from './components/authenticatedRoute/AuthenticatedRoute'
import Home from './components/homes/homes';
import Insert_home from './components/insert_home/Insert_home';


class App extends Component {

  render() {
    return (
      <div className="container-fluid">
        <Router >
          <Header></Header>
          <Switch>
            <AuthenticationRoute path='/' exact component={Login}></AuthenticationRoute>
            <AuthenticationRoute path='/welcome/:username' exact component={Welcome}></AuthenticationRoute>
            <Route path='/login' exact component={Login}></Route>
            <AuthenticationRoute path='/homes' exact component={Home}></AuthenticationRoute>
            {/* <AuthenticationRoute path='/newHome' exact component={Insert_home}></AuthenticationRoute> */}
            <AuthenticationRoute path='/newHome/:id'  component={Insert_home}></AuthenticationRoute>
            <AuthenticationRoute path='/logout' exact component={Logout}></AuthenticationRoute>
          </Switch>
          <Footer></Footer>
        </Router>
      </div>
    );
  }
}

export default App;
