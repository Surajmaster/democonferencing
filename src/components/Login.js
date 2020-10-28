import React from 'react';
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { FacebookLoginButton } from 'react-social-login-buttons';

const Login = () => {
    return (
        <Form className="login-form"><br/><br/>
            <h2 className="text-center">Log In</h2>
            <FormGroup>
                <label>Email Address</label>
                <Input type="email" placeholder="Email Address" />
            </FormGroup>
            <FormGroup>
                <label>Password</label>
                <Input type="Password" placeholder="Password" />
            </FormGroup>
            <Button className="btn-md btn-dark btn-block">Log In</Button><br/>
            {/* <div className="text-center pt-3">or continue with your social account</div>
            <FacebookLoginButton className="mt-3 mb-3"></FacebookLoginButton> */}
            <div className="text-center">
                <a href="/fgt-pwd">forgot password?</a>
                {/* <hr className="new" /> */}
            </div><br/>
            <Button className="btn-sm btn-block">Create New Account +</Button>
        </Form>
    )
}

export default Login;