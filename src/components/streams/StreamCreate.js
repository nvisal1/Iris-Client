import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createStream } from '../../actions/index';

class StreamCreate extends React.Component {

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
        this.props.createStream(formValues);
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

const formWrapper = reduxForm({
    form: 'streamCreate',
    validate: validate
}) (StreamCreate);

export default connect(null, { createStream })(formWrapper);