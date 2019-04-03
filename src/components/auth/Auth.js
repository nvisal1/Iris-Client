import React from 'react';
import { connect } from 'react-redux';
import Login from './Login';
import Register from './Register';
import { register } from '../../actions/index';
import './Auth.css'

class Auth extends React.Component {

    onSubmit = formValues => {
        this.props.register(formValues);
    }

    render() {
        return (
            <div className="login">
                <div className="login-background-overlay"></div>
                <Register onSubmit={this.onSubmit}></Register>
            </div>
        );
    }
}

export default connect(null, {register})(Auth);