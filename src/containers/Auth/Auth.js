import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Auth.css';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';

class AuthPage extends Component {
    state = { 
        email: '', 
        password: '' 
    };

    inputChangeHandler = (event, input) => {
        this.setState({ [input]: event.target.value });
    };

    render() {
        let submitButtonText = 'Login';

        return (
            <main className="auth-main">
                <form className="auth__form" onSubmit={event =>
                    this.props.onAuth(event, {
                        email: this.state.email,
                        password: this.state.password
                    })}>
                    <h1>Login for Admin</h1>
                    <Input label="E-Mail" config={{ type: 'email' }} onChange={event => this.inputChangeHandler(event, 'email')} />
                    <Input label="Password" config={{ type: 'password' }} onChange={event => this.inputChangeHandler(event, 'password')} />
                    <Button type="submit">{submitButtonText}</Button>
                </form>
                <section className="Menu">
                    <Link to={'/Menu'}><Button>See Menu</Button></Link>
                </section> 
            </main>
        );
    }
}
export default AuthPage;
