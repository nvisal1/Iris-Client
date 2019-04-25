import React from 'react';
import { connect } from 'react-redux';
import { createStream } from '../../actions/index';
import StreamForm from './StreamForm';
import './StreamCreate.css'

class StreamCreate extends React.Component {

    onSubmit = formValues => {
        this.props.createStream({...formValues, owner: this.props.userId});
    }

    render() {
        return (
            <div className="container">
                <div className="container__content">
                    <div className="content__title">Create Stream</div>
                    <StreamForm onSubmit={this.onSubmit} />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return { userId: state.auth.id };
};

export default connect(mapStateToProps, { createStream })(StreamCreate);