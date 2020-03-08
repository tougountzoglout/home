import React, { Component } from 'react';
//import GetHomeService from '../../services/GetHomeService.js';
import axios from 'axios';

class Homes extends Component {

    constructor(props) {

        super(props);

        this.state = {

            homelist: []
        }
        console.log("asda")
        this.refresh();
    }

    componentDidMount() {
        this.refresh();
    }

    refresh = () => {
        axios.get('https://homeapp-teo.herokuapp.com/homes').then(
            response => {
                if (response.status === 200) {
                    this.setState({ homelist: response.data })
                }

            }
        );
    }

    render() {
        return (
            <>
                <div className="container bg-light">
                    <table className='table table-striped'>
                        <thead className='thead-dark'>
                            <tr>
                                <th>Description</th>
                                <th>Completed</th>
                                <th>Due Date</th></tr>
                        </thead>
                        <tbody>
                            {
                                this.state.homelist.map(
                                    home =>
                                        <tr key={home.homeId}>
                                            <td>{home.name}</td>
                                            <td>{home.url.toString()}</td>
                                            <td>{home.phone.toString()}</td>
                                            <td><button className='btn btn-warning' onClick={() => this.deletehome(home.homeId)}>
                                                Delete</button>
                                            </td>
                                            <td><button className='btn btn-primary' onClick={() => this.update(home.homeId)}>
                                                Update</button>
                                            </td>
                                        </tr>
                                )
                            }

                        </tbody>

                    </table>
                </div>
            </>);


    }

    deletehome = (id) => {
        axios.delete(`https://homeapp-teo.herokuapp.com//home/delete/${id}`).then(
            response => {
                if (response.status === 200) {
                    
                    this.refresh();

                }

            }
        );

    }

    update = (id) => {

        this.props.history.push(`/newHome/${id}`)

    }




}




export default Homes;