import React, { Component } from 'react';
import './SignIn.css';
import Input from '../../components/Input';
import { authorize } from '../../store/reducers/AuthReducer';
import { connect } from 'react-redux';

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
                valid: false,
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
                valid: false,
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

    authorize = () => {
        this.props.authorize({
            username: this.state.loginForm.username.value,
            password: this.state.loginForm.password.value,
        });
        this.props.history.push('/');
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

                <button disabled={!formValid} onClick={this.authorize}>
                    Sign In
                </button>
            </div>
        );
    }
}

const mapDispatchToProps = {
    authorize,
};

export default connect(null, mapDispatchToProps)(SignIn);
