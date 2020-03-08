import React, { Component } from 'react';
import { Field, fieldset, Form, Formik } from 'formik';
//import { moment } from 'moment';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

class Insert_home extends Component {

    constructor(props) {

        super(props);
        this.state =

        {
            homeName: '',
            homeUrl: '',
            homePhone: '',

        }

    }


    checkifupdate(id) {
        if (id != null && id > 0) {
            axios.get(`https://homeapp-teo.herokuapp.com/home/${id}`).then(
                response => {
                    if (response.status === 200) {
                        let data = response.data;
                        console.log("Logging state retrieved home")
                        console.log(data)
                        this.setState({ homeName: data.name, homeUrl: data.url, homePhone: data.phone })
                    }

                }
            );

        }
    }

    componentDidMount() {

        this.checkifupdate(this.props.match.params.id);
    }

    onSubmit = (values) => {
        axios.put(`https://homeapp-teo.herokuapp.com/home/ins/${this.props.match.params.id}`,
            {
                name: values.homeName, url: values.homeUrl, phone: values.homePhone


            })

            this.props.history.push(`../homes`)
      //  console.log(values)
    }


    render() {


        let { homeName, homeUrl, homePhone } = this.state;
        return (
            <div>

                <div className="Login container bg-light">
                    <Formik
                        initialValues={{
                            homeName, homeUrl, homePhone
                        }}
                        enableReinitialize={true}
                        onSubmit={this.onSubmit}

                    >
                        {
                            (props) => (
                                <Form>
                                    <fieldset className="form-group">
                                        <label>HomeName</label>
                                        <Field className="form-control" type="text" name="homeName" />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Url</label>
                                        <Field className="form-control" type="text" name="homeUrl" />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Phone</label>
                                        <Field className="form-control" type="number" name="homePhone" />
                                    </fieldset>
                                    <button className="btn btn-success" type="submit">Save</button>
                                </Form>
                            )
                        }
                    </Formik>

                </div>
            </div>
        )
    }



}






export default withRouter(Insert_home);