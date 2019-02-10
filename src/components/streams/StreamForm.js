import React from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamForm extends React.Component {

    renderError(meta) {
        return (
            <div>
                {meta.error}
            </div>
        );
    }

    renderInput = ({input, label, meta}) => {
        return (
            <div>
                <label>{label}</label>
                <input {...input}/>
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
                <Field name="title" component={this.renderInput} label="Entter Title"/>
                <Field name="description" component={this.renderInput} label="Enter Description" />
                <button>Submit</button>
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

    return errors;
}

export default reduxForm({
    form: 'streamForm',
    validate: validate
}) (StreamForm);
