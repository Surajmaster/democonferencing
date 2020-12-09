import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import GoogleLogin from 'react-google-login';
// import { FacebookLoginButton } from 'react-social-login-buttons';


class Details extends Component {

    render() {

        return (
            <Form onSubmit={this.handlesubmit} className="signup-form">
                <h3 className="text-center">Set up your account</h3><br />
                <FormGroup>
                    <label><strong>Company Name</strong></label>
                    <Input type="text"></Input><br />
                    <label></label>
                    <label for="cars"><strong>Company Size</strong></label><br />
                    {/* <select name="size" id="csize">
                        <option value="1">1-5</option>
                        <option value="2">6-15</option>
                        <option value="3">upto 30</option>
                        <option value="4">upto 50</option>
                    </select><br /><br /> */}
                    <div class="select-menu"><select id="welcome-select-company-size" class="select-menu-wrapper"><option class="select-menu__option" value="">Please select one</option><option class="select-menu__option" value="1 - 5">1 - 5</option><option class="select-menu__option" value="6 - 10">6 - 10</option><option class="select-menu__option" value="11 - 50">11 - 50</option><option class="select-menu__option" value="51 - 99">51 - 99</option><option class="select-menu__option" value="100 - 499">100 - 499</option><option class="select-menu__option" value="500 - 750">500 - 750</option><option class="select-menu__option" value="751 - 1,000">751 - 1,000</option><option class="select-menu__option" value="1,001 - 10,000">1,001 - 10,000</option><option class="select-menu__option" value="10,001+">10,001+</option></select></div><br/>

                    <label><strong>Phone No.</strong></label>
                    <Input text="number"></Input>


                </FormGroup>

                <Button className="btn-md btn-info btn-block"><a href="/Conference1">Continue</a></Button><br />




                {/* <Button className="btn-md btn-info btn-block">Continue</Button><br /> */}


            </Form>
        )

    }

}


export default Details;