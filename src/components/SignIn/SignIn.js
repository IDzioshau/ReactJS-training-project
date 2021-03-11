import React, { Component } from 'react';
import './SignIn.css';
import { Link } from 'react-router-dom';
import Input from '../Input';

export class SignIn extends Component {
    state = {
        loginForm: {
            username: {
                element: 'input',
                label: 'Username',
                type: 'email',
                value: '',
                validation: {
                    required: true,
                    email: true,
                },
                valid: true,
            },
            password: {
                element: 'input',
                label: 'Password',
                type: 'password',
                value: '',
                validation: {
                    required: true,
                    minLength: 8,
                    requiredNumbers: true,
                    requiredLetters: true,
                },
                valid: true,
            },
        },
        formValid: false,
    };

    validate = (value, rule) => {
        let isValid = true;

        if (rule.required) {
            isValid = value.trim() !== '' && isValid;
        }

        if (rule.email) {
            isValid =
                /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/.test(
                    value,
                ) && isValid;
        }

        if (rule.minLength) {
            isValid = value.length >= rule.minLength && isValid;
        }

        if (rule.requiredLetters) {
            isValid = /[A-Za-z]+/.test(value) && isValid;
        }

        if (rule.requiredNumbers) {
            isValid = /\d+/.test(value) && isValid;
        }

        return isValid;
    };

    inputChangeHandler = (event, id) => {
        const value = event.target.value;
        const loginForm = { ...this.state.loginForm };
        const element = { ...loginForm[id] };
        element.value = value;
        element.valid = this.validate(value, element.validation);
        loginForm[id] = element;

        let formValid = true;
        for (let element in loginForm) {
            formValid = loginForm[element].valid && formValid;
        }

        this.setState({ loginForm, formValid });
    };

    render() {
        const { loginForm, formValid } = this.state;

        return (
            <div className="login-page">
                <h2>Sign In</h2>
                {Object.entries(loginForm).map(([key, value]) => (
                    <Input
                        key={key}
                        {...value}
                        changed={event => this.inputChangeHandler(event, key)}
                    />
                ))}
                <Link to="/">
                    <button disabled={!formValid}>Sign In</button>
                </Link>
            </div>
        );
    }
}

export default SignIn;
