import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Welcome extends Component {


    render() {
        console.log(this.props)
        return (
            <>
                <h1>Welcome!</h1>
                <div className="container">
                    Welcome {this.props.match.params.username}. You can manage your todos <Link to="/todo">here</Link>.
                </div>
            </>
        )


    }


}





export default Welcome;