import React, { Component } from 'react';
import './SignIn.css';

export class SignIn extends Component {
    state = {
        username: '',
        password: '',
    };

    render() {
        return (
            <div className="login-page">
                <h2>Sign In</h2>
                <label htmlFor="username">Username</label>
                <br />
                <input id="username" type="text" />
                <br />
                <label htmlFor="password">Password</label>
                <br />
                <input id="password" type="password" />
                <br />
                <button>Sign In</button>
            </div>
        );
    }
}

export default SignIn;
