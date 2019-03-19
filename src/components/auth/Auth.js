import React from 'react';
import { connect } from 'react-redux';
import Login from './Login';
import Register from './Register';
import './Login.css'

class Auth extends React.Component {

    onSubmit = formValues => {
        this.props.createStream(formValues);
    }

    render() {
        return (
            <div className="login">
                <div className="login-background-overlay"></div>
               <Register></Register>
            </div>
        );
    }
}

export default connect(null, { })(Auth);