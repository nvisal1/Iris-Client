import React from 'react';
import { connect } from 'react-redux';
import Login from './Login';
import Register from './Register';
import { register, signIn} from '../../actions/index';
import './Auth.css'

class Auth extends React.Component {

    onSubmitRegister = formValues => {
        this.props.register(formValues);
    }

    onSubmitLogin = formValues => {
        this.props.signIn(formValues);
    }

    render() {
        if (this.props.page === 'login') {
            return (
                <div className="login">
                    <div className="login-background-overlay"></div>
                    <Login onSubmit={this.onSubmitLogin}></Login>
                </div>
            );
        } else {
            return (
                <div className="login">
                    <div className="login-background-overlay"></div>
                    <Register onSubmit={this.onSubmitRegister}></Register>
                </div>
            );
        }
    }
}

export default connect(null, {register, signIn })(Auth);