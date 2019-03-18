import React from 'react';
import { connect } from 'react-redux';
import './Login.css'

class Login extends React.Component {

    onSubmit = formValues => {
        this.props.createStream(formValues);
    }

    render() {
        return (
            <div className="login">
                <h3>Create Stream</h3>
            </div>
        );
    }
}

export default connect(null, { })(Login);