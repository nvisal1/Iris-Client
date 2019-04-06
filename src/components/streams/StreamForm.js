import React from 'react';
import { Field, reduxForm } from 'redux-form';
import './StreamForm.css';

class StreamForm extends React.Component {

    renderError(meta) {
        if (meta.visited) {
            return (
                <div className="form-element__error">
                    {meta.error}
                </div>
            );
        }
    }

    renderInput = ({input, label, meta}) => {
        return (
            <div className="form__element">
                <label className="form-element__input-label">{label}</label>
                <input className="form-element__input" {...input}/>
                {this.renderError(meta)}
            </div>
        );
    }


    onSubmit = formValues => {
        this.props.onSubmit(formValues);
    }

 

    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <Field name="title" component={this.renderInput} label="Enter Title"/>
                <Field name="description" component={this.renderInput} label="Enter Description" />
                <Field name="thumbnail" component={this.renderInput} label="Thumbnail URL" />
                <div className="button-element">
                    <button className="button-element__button">Submit</button>
                </div> 
            </form>
        );
    }
}

const validate = (formValues) => {
    const errors = {};

    if (!formValues.title) {
        errors.title = 'Please enter a title.';
    }

    if (!formValues.description) {
        errors.description = 'Please enter a description.';
    }

    if (!formValues.thumbnail) {
        errors.thumbnail = 'Please provide a thumbnail.';
    }

    return errors;
}

export default reduxForm({
    form: 'streamForm',
    validate: validate
}) (StreamForm);
