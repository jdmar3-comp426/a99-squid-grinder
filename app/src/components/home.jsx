import React, { Component, ReactDOM } from "react";
import { NavLink } from "react-router-dom";

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <html lang="en">
          <head>
            <meta charset="UTF-8" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <link rel="stylesheet" href="custom_style.css" />
            <link rel="stylesheet" href="node_modules/bulma/css/bulma.css" />
            <title>Youtopia</title>
          </head>
          <body>
            <section class="hero is-dark is-fullheight">
              <div class="hero-body">
                <div class="container has-text-centered">
                  <h1 id="main-title" class="title has-text-info">
                    <span id="main-title" class="title">
                      You
                    </span>
                    Topia
                  </h1>
                  <p class="subtitle has-text-centered">
                    They win or they lose. You choose!
                  </p>
                  <div class="content ">
                    <div class="columns">
                      <div class="column has-text-right">
                        <NavLink to="/login">
                          <button class="button is-red" onclick="removeHome()">
                            Login
                          </button>
                        </NavLink>
                      </div>
                      <div class="column has-text-left">
                        <NavLink to="/signup">
                          <button class="button is-red">Sign Up</button>
                        </NavLink>
                      </div>
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

function removeHome() {
  ReactDOM.unmountComponentAtNode("Home");
}

export default Home;
