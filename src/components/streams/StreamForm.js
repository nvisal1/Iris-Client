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
                <Field name="title" component={this.renderInput} label="Enter Title"/>
                <Field name="description" component={this.renderInput} label="Enter Description" />
                <Field name="thumbnail" component={this.renderInput} label="Thumbnail URL" />
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

    if (!formValues.thumbnail) {
        errors.description = 'Please provide a thumbnail.';
    }

    return errors;
}

export default reduxForm({
    form: 'streamForm',
    validate: validate
}) (StreamForm);
