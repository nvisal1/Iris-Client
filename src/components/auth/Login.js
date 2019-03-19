import React from 'react';
import { connect } from 'react-redux';
import './Auth.css'

class Login extends React.Component {

    onSubmit = formValues => {
        this.props.createStream(formValues);
    }

    render() {
        return (
            <div className="login__form">
                <div className="form__element-container">
                    <h3 className="element-container__header">IRIS</h3>
                </div>
                <div className="form__element-container">
                    <div className="element-container__label-input-container">
                        <label className="label-input-container__input-label" for="username">Username</label>
                        <input className="label-input-container__input" id="username"></input>
                    </div>
                </div>
                <div className="form__element-container">
                    <div className="element-container__label-input-container">
                        <label className="label-input-container__input-label" for="password">Password</label>
                        <input className="label-input-container__input" id="password"></input>
                    </div>
                </div>  
                <div className="form__element-container">
                    <div className="element-container__button-container">
                        <button className="button-container__button">Login</button>
                    </div>
                </div>
                <div className="form__element-container">
                    <div className="element-container__alt-text-container">
                        <div className="alt-text-container__text">or Register</div>
                    </div>
                </div>
            </div>  
        );
    }
}

export default connect(null, { })(Login);