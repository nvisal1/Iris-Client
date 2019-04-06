import React from 'react';
import { connect } from 'react-redux';
import { fetchStream, editStream } from '../../actions';
import StreamForm from './StreamForm';

class StreamEdit extends React.Component {
    componentDidMount() {
        if(this.props.stream) {
            this.props.fetchStream(this.props.stream._id);
        }
    }

    onSubmit = (formValues) =>  {
        this.props.editStream(this.props.stream._id, formValues);
    }

    render() {
        if (!this.props.stream) {
            return <div>Loading...</div>
        }
        return (
            <div className="container">
                <div className="container__content">
                    <div className="content__title">Edit Stream</div>
                    <StreamForm 
                        initialValues={{
                            title: this.props.stream.title,
                            description: this.props.stream.description,
                            thumbnail: this.props.stream.thumbnail,
                        }}
                        onSubmit={this.onSubmit} 
                    />
                </div>
            </div>
        )
    }
}   

const mapStateToProps = (state, ownProps) => {
    return { }
}

export default connect(mapStateToProps, { fetchStream, editStream })(StreamEdit);