import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Login extends React.Component {
  render() {
    return (
      <div className="Login">
        <html lang="en" class="has-background-light">
          <head>
            <meta charset="UTF-8" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <link rel="stylesheet" href="../node_modules/bulma/css/bulma.css" />
            <link
              href="https://fonts.googleapis.com/css?family=Shrikhand&display=swap"
              rel="stylesheet"
            />
            <title>Signup Page</title>
          </head>
          <body>
            <section class="hero is-dark is-small">
              <div class="hero-body">
                <div class="columns">
                  <div class="column">
                    <div class="control has-text-left">
                      <NavLink to="/">
                        <button class="button is-white">Home</button>
                      </NavLink>
                    </div>
                  </div>
                  <div class="column">
                    <div class="container has-text-centered">
                      <h1 class="title">Log-in</h1>
                      <h2 class="subtitle">Please state your destination.</h2>
                    </div>
                  </div>
                  <div class="column"></div>
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
                            <input
                              class="input"
                              type="text"
                              placeholder="Username"
                              name="Username"
                            />
                          </div>
                        </div>
                        <div class="field">
                          <label class="label">Password</label>
                          <div class="control">
                            <input
                              class="input"
                              type="password"
                              placeholder="Password"
                              name="password"
                            />
                          </div>
                        </div>
                        <div class="field has-text-centered">
                          <div class="control">
                            <button class="button is-dark" type="submit">
                              Login
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </body>
        </html>
      </div>
    );
  }
}

export default Login;
