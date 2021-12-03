import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit() {
        const requestOptions = {
            method: "POST",
            headers: {"Content-Type": "api/newuser"},
            body: JSON.stringify({title: "POST request"})
        };
        fetch('/api/newuser', requestOptions).then(response => response.json());
    }
    render() { 
        return (
        <div className="SignUp">
            <div class="container">
            <div class="columns">
                <div class="column is-one-third is-offset-one-third">
                    <div class="box">
                    <form onSubmit={this.handleSubmit()}>
                        <div class="field">
                            <label class="label">Username</label>
                            <div class="control">
                                <input class="input" type="text" placeholder="Username" name="username" />
                            </div>
                        </div>
                        <div class="field">
                            <label class="label">Password</label>
                            <div class="control">
                                <input class="input" type="password" placeholder="Password" name="password" />
                            </div>
                        </div>
                        <div class="field">
                            <label class="label">Confirm Password</label>
                            <div class="control">
                                <input class="input" type="password" placeholder="Confirm Password" name="confirmpass" />
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