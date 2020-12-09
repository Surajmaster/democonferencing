import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import GoogleLogin from 'react-google-login';
// import { FacebookLoginButton } from 'react-social-login-buttons';

const emailRegex = RegExp(/^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]/)

const formValid = formErrors => {
    let valid = true;

    Object.values(formErrors).forEach(val => {
        val.length > 0 && (valid = false);
    });
}

class Signup extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: null,
            formErrors: {
                email: ""
            }
        };
    }
    handlesubmit = e => {
        e.preventDefault();

        if (formValid(this.state.formErrors)) {
            console.log(`
                --SUBMITTING--
                Email : ${this.state.email}                    
            `)
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
                    emailRegex.test(value) && value.length > 0
                        ? ""
                        : "invalid email address";
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
            <Form onSubmit={this.handlesubmit} className="signup-form">
                <h3 className="text-center">Sign up its free</h3><br />
                <FormGroup>
                    <label className="uname"><strong>Name</strong></label>
                    <Input autoComplete="off" type="text" placeholder="Full Name" /><br/>
                    <label className="email"><strong>Email Address</strong></label>
                    <Input autoComplete="off" type="email" placeholder="Email Address" onChange={this.handlechange} /><br/>
                    {formErrors.email.length > 0 && (
                        <span className="errorMessage">{formErrors.email}</span>
                    )}
                    <label className="pass"><strong>Password</strong></label>
                    <Input type="password" placeholder="password" /><br/>
                </FormGroup>
                
                {/* <Button className="btn-md btn-info btn-block">Sign up</Button><br /> */}

                <Button className="btn-md btn-info btn-block"><a href="/Details">Sign up</a></Button><br />

                <div className="text-center">
                    <small>Already have an account?<a href="/Signin"> Sign in.</a></small><br />
                    <small>or</small>

                </div>
                <div className="App text-center">
                    <GoogleLogin
                        clientId="81320170018-dther929uc4jgf3aq8n55211rc1g20b5.apps.googleusercontent.com"
                        Text="Sign in with Login"
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        cookiePolicy={'single_host_origin'}
                    />
                </div>

            </Form>
        )

    }

}


export default Signup;