import React from 'react';
import './Auth.css'
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';

class Login extends React.Component {

    onSubmit = formValues => {
        this.props.onSubmit(formValues);
    }

    renderError(meta) {
        if (meta.visited) {
            return (
                <div className="element-container__error">
                    {meta.error}
                </div>
            );
        }
    }

    renderInput = ({input, label, meta, type}) => {
        return (
            <div className="form__element-container">
                <div className="element-container__label-input-container">
                    <label className="label-input-container__input-label" for={label}>{label}</label>
                    <input 
                        {...input} 
                        name={label} 
                        className="label-input-container__input"
                        id={label}
                        type={type}
                    ></input>
                </div>
                {this.renderError(meta)}
            </div>
        )
    }

    render() {
        return (
            <form className="login__form" onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <div className="form__element-container">
                    <h3 className="element-container__header">IRIS</h3>
                </div>
                <Field name="username" component={this.renderInput} label="Username" type="text"/>
                <Field name="password" component={this.renderInput} label="Password" type="password" />
                <div className="form__element-container">
                    <div className="element-container__button-container">
                        <button className="button-container__button">Login</button>
                    </div>
                </div>
                <div className="form__element-container">
                    <div className="element-container__alt-text-container">
                        <Link to='/register' className="alt-text-container__text">or Register</Link>
                    </div>
                </div>
            </form>  
        );
    }
}


const validate = (formValues) => {
    const errors = {};

    if (!formValues.username) {
        errors.username = 'Please enter a username.';
    }

    if (!formValues.password) {
        errors.password = 'Please provide a password.';
    }

    return errors;
}

export default reduxForm({
    form: 'login',
    validate,
})(Login);