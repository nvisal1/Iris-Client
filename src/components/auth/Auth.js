import React from 'react';
import { connect } from 'react-redux';
import Login from './Login';
import Register from './Register';
import { register, signIn} from '../../actions/index';
import './Auth.css'
import ThankYou from './ThankYou';

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
                    <div className="login__thankyou">
                        <ThankYou></ThankYou>
                    </div>
                    <Login onSubmit={this.onSubmitLogin}></Login>
                </div>
            );
        } else {
            return (
                <div className="login">
                    <div className="login-background-overlay"></div>
                    <div className="login__thankyou">
                        <ThankYou></ThankYou>
                    </div>
                    <Register onSubmit={this.onSubmitRegister}></Register>
                </div>
            );
        }
    }
}

export default connect(null, {register, signIn })(Auth);