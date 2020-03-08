import React, { Component } from 'react';


class Todo extends Component {

    constructor(props) {

        super(props);
        this.state = {
            todos:
                [
                    { id: 1, description: 'Learn to Dance', done: false, targetDate: new Date() },
                    { id: 2, description: 'Become an Expert at React', done: false, targetDate: new Date() },
                    { id: 3, description: 'Visit India', done: false, targetDate: new Date() }
                ]
        }

    }


    render() {
        return (
            <>
                <div className="container-fluid bg-light">
                    <h2>My Todo list </h2>
                    <table className='table table-striped'>
                        <thead className='thead-dark'>
                            <tr>
                                <th>Description</th>
                                <th>Completed</th>
                                <th>Due Date</th></tr>
                        </thead>
                        <tbody>
                            {
                                this.state.todos.map(
                                    todo =>
                                        <tr key={todo.id}>
                                            <td>{todo.description}</td>
                                            <td>{todo.done.toString()}</td>
                                            <td>{todo.targetDate.toString()}</td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </>);


    }


}






export default Todo;