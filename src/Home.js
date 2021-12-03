import React, { Component } from 'react';

class Home extends React.Component {
    render() { 
        return (
        <div className="Home">
            <h1>Clicker</h1>
            <div class="buttons">
                <div class="action_btn">
                    <button name="login" type="submit" value="Save" onclick="myFunction()">Login</button>
                    <button name="signup" type="submit" value="Cancel" onclick="myFunction2()">Sign Up</button>
                    <p id="saved"></p>
                </div>
            </div>
        </div>
            );
    }
}
 
export default Home;