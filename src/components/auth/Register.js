import React from 'react';
import { connect } from 'react-redux';
import './Auth.css'

class Register extends React.Component {

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
                        <label className="label-input-container__input-label" for="email">Email</label>
                        <input className="label-input-container__input" id="email"></input>
                    </div>
                </div>
                <div className="form__element-container">
                    <div className="element-container__label-input-container">
                        <label className="label-input-container__input-label" for="password">Password</label>
                        <input className="label-input-container__input" id="password"></input>
                    </div>
                </div>  
                <div className="form__element-container">
                    <div className="element-container__label-input-container">
                        <label className="label-input-container__input-label" for="password-confirmation">Password Confirmation</label>
                        <input className="label-input-container__input" id="password-confirmation"></input>
                    </div>
                </div> 
                <div className="form__element-container">
                    <div className="element-container__button-container">
                        <button className="button-container__button">Join!</button>
                    </div>
                </div>
                <div className="form__element-container">
                    <div className="element-container__alt-text-container">
                        <div className="alt-text-container__text">or Login</div>
                    </div>
                </div>
            </div>  
        );
    }
}

export default connect(null, { })(Register);