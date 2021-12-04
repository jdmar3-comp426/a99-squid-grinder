import { assertExpressionStatement } from '@babel/types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleUserInput = this.handleUserInput.bind(this);
        this.handlePassInput = this.handlePassInput.bind(this);
        this.handleConfirmInput = this.handleConfirmInput.bind(this);
        this.state = {
            username: "",
            password: "",
            confirmpass: ""
        }
    }
    handleUserInput(event) {
        this.setState({
            username: event.target.value
        });
    }
    handlePassInput(event) {
        this.setState({
            password: event.target.value
        });
    }
    handleConfirmInput(event) {
        this.setState({
            confirmpass: event.target.value
        });
    }
    handleSubmit(event) {
        event.preventDefault();
        const req = {
            username: this.state.username,
            password: this.state.password,
            confirmpass: this.state.confirmpass
        }

        axios.post('/api/newuser', req).then(() => {
            console.log("New user created.")
        }).catch((err) => {console.log(err)});
    }
    render() { 
        return (
        <div className="SignUp">
            <div class="container">
            <div class="columns">
                <div class="column is-one-third is-offset-one-third">
                    <div class="box">
                    <form onSubmit={this.handleSubmit}>
                        <div class="field">
                            <label class="label">Username</label>
                            <div class="control">
                                <input name="username" type="text" className="control" onChange={this.handleUserInput} />
                            </div>
                        </div>
                        <div class="field">
                            <label class="label">Password</label>
                            <div class="control">
                                <input name="password" type="text" className="control" onChange={this.handlePassInput} />
                            </div>
                        </div>
                        <div class="field">
                            <label class="label">Confirm Password</label>
                            <div class="control">
                                <input name="confirmpass" type="text" className="control" onChange={this.handleConfirmInput} />
                            </div>
                        </div>
                        <div class="field has-text-centered">
                            <div class="control">
                                <button class="button is-dark" type="submit">
                                    <Link to="/clicker">Submit</Link>
                                </button>
                            </div>
                        </div>
                    </form>
                    
                    </div>
                        
                </div>
            </div>
        </div>
        </div>
            );
    }
}



export default SignUp;