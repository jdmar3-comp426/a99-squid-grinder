import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'bulma/css/bulma.min.css';

class SignUp extends React.Component {
    render() { 
        return (
            <div className="SignUp">
                <div class="container">
                    <div class="columns">
                        <div class="column">
                            <div class="box">
                                <h1 class="title">Sign Up</h1>
                                <form>
                                    <div class="field">
                                        <label class="label">Username</label>
                                        <div class="control">
                                            <input class="input" type="text" placeholder="Username" name="Username" />
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
                                            <button class="button" type="submit">
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