import React, { useState } from 'react';
import { getAuth, updateProfile } from 'firebase/auth';
import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';
import { UserRecord } from 'firebase/auth';
import { Link } from 'react-router-dom'

function Account() {
    const [anchorEl, setAnchorEl] = useState(null);
    
    var user = firebase.auth().currentUser;
    var userID = user.uid;

    const [displayName, setDisplayName] = useState(user.displayName);

    const handleSubmit = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleChangePhone = (event) => {
        event.preventDefault();
        user.updateProfile({
            displayName: `${document.getElementById("displayName").value}`,
            // phoneNumber: `${document.getElementById("phone").value}`
        }).then(() => {
            // Profile updated!
            user = firebase.auth().currentUser;
            setDisplayName(user.displayName);
            console.log(user.displayName);
        }).catch((error) => {
            // An error occurred
            // ...
            console.log("not updated");
        });
    };

    const handleDelete = () => {
        user.delete().then(() => {
            // User deleted.
        }).catch((error) => {
            // An error ocurred
            // ...
        });
    }
    

    return (
        <div>
            <h1>User Information</h1>
            <div>
                <h4>Display Name: {user.displayName}</h4>
            </div>
            <div>
                <form action="" method="get">
                    <div>
                        <label for="displayName">Add or Change your display name: </label>
                        <input id="displayName"></input>
                    </div>
                    <div>
                        <input type="submit" value="Submit" onClick={handleChangePhone}></input>
                    </div>
                    <div>
                        <button type="submit" onClick={handleDelete}>
                            <Link to="/app/">Delete Account</Link>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Account;