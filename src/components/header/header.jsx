import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Header extends Component {


    constructor(props) {

        super();
    }
    render() {
        return (
            <div className="Header">

                <header className="navbar navbar-expand-sm navbar-dark bg-primary"  >
                    <a className="navbar-brand" href='/login'>Navbar</a>

                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <Link className="nav-link" to='/welcome/:name'>Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/homes'>Homes</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/newHome'>New Home</Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <Link className="nav-link" to='/login'>Login <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/logout'>Logout</Link>
                        </li>
                    </ul>
                </header>

            </div>
        );


    }
}

export default Header;