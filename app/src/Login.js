import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.min.css';
import { Outlet, Link } from 'react-router-dom';

function Login() {
    return (
        <div>
            <section class="hero is-dark is-small">
                <div class="hero-body">
                    <div class="columns">
                        <div class="column">
                            <div class="control has-text-left">
                                <button class="button is-white">
                                </button>
                            </div>
                        </div>
                        <div class="column">
                            <div class="container has-text-centered">
                                <h1 class="title">Log-in</h1>
                                <h2 class="subtitle">Please state your destination.</h2>
                            </div>
                        </div>
                        <div class="column">
                        </div>
                    </div>
                </div>
            </section>
            <section class="section">
                <div class="container">
                    <div class="columns">
                        <div class="column is-one-third is-offset-one-third">
                            <div class="box">
                                <form>
                                    <div class="field">
                                        <label class="label">Username</label>
                                        <div class="control">
                                            <input class="input" type="text" placeholder="Username" name="Username"></input>
                                        </div>
                                    </div>
                                    <div class="field">
                                        <label class="label">Password</label>
                                        <div class="control">
                                            <input class="input" type="password" placeholder="Password" name="password"></input>
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
            </section>
        </div>
    )
}