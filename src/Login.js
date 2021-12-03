import React, { Component } from 'react';

class Login extends React.Component {
    render() { 
        return (
        <div className="Login">
            <div class="container">
            <div class="columns">
                <div class="column is-one-third is-offset-one-third">
                    <div class="box">
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
                        <div class="field has-text-centered">
                            <div class="control">
                                <button class="button is-dark" type="submit">Login</button>
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
 
export default Login;