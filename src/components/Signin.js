import { render } from '@testing-library/react';
import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import GoogleLogin from 'react-google-login';

const emailRegex = RegExp(/^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]/)

const formValid = formErrors => {
    let valid = true;

    Object.values(formErrors).forEach(val => {
        val.length > 0 && (valid = false);
    });
}

class Signin extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: null,
            password: null,
            formErrors: {
                email: "",
                password: ""
            }
        };
    }
    handlesubmit = e => {
        e.preventDefault();

        if (formValid(this.state.formErrors)) {
            console.log(`
                --SUBMITTING--
                Email : ${this.state.email}
                password : ${this.state.password}                     
            `);
        }
        else {
            console.error("form invalid - display error message");
        }
    };

    handlechange = e => {
        e.preventDefault();
        const { name, value } = e.target;
        let formErrors = this.state.formErrors;



        switch (name) {
            case 'email':
                formErrors.email =
                    emailRegex.test(value)
                        ? ""
                        : "invalid email address";
                break;
            case 'password':
                formErrors.password =
                    value.length < 6 ? "minimum 6 characters required" : "";
                break;
            default:
                break;
        }

        this.setState({ formErrors, [name]: value }, () => console.log(this.state));


    }


    render() {
        const { formErrors } = this.state;
        const responseGoogle = response => {
            console.log(response);
        };
        return (
            <Form onSubmit={this.handlesubmit} className="signin-form">
                <h3 className="text-center">Sign In</h3>

                <FormGroup>
                    <label for="email">Email Address</label>
                    <Input autoComplete="off" type="email" name="email" placeholder="Email Address" onChange={this.handlechange} />
                    {formErrors.email.length > 0 && (
                        <span className="errorMessage">{formErrors.email}</span>
                    )}
                </FormGroup>
                <FormGroup>
                    <label for="password">Password</label>
                    <Input type="Password" name="password" placeholder="Password" onChange={this.handlechange} />
                    {formErrors.password.length > 0 && (
                        <span className="errorMessage">{formErrors.password}</span>
                    )}
                </FormGroup>
                <Button className="btn-md btn-info btn-block">Sign In</Button><br />

                <div className="text-center">
                    <small>New to conferencing?<a href="/Signup"> Sign up.</a></small><br />
                    <small>or</small>

                    <div className="App text-center">
                        <GoogleLogin
                            clientId="81320170018-dther929uc4jgf3aq8n55211rc1g20b5.apps.googleusercontent.com"
                            Text="Sign in with Login"
                            onSuccess={responseGoogle}
                            onFailure={responseGoogle}
                            cookiePolicy={'single_host_origin'}
                        />
                    </div>
                </div>
            </Form>
        )

    }

}

export default Signin;