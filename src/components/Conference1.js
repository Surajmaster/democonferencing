import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from "reactstrap";



class Conference1 extends Component {

    render() {

        return (
            <div class="jumbotron jumbotron-fluid">
                <div class="container">
                    <h1 class="display-4">Let's get started...</h1>
                    <p class="lead">For small teams wanting to try out conferencing for an unlimited period of time.</p>
                    <a class="btn btn-primary btn-md" href="#" role="button">Start Conference</a><br/><br/>
                    <h5>The facilities that we are providing : </h5>
                    <ul>
                        <li>Screen sharing</li>
                        <li>Document sharing</li>
                        <li>Good audio and video quality</li>
                    </ul>
                </div>
            </div>
            

        )

    }

}


export default Conference1;