import React from 'react';
import flv from 'flv.js';
import { connect } from 'react-redux';
import { fetchStream } from '../../actions'; 

class StreamShow extends React.Component {

    constructor(props) {
        super(props);
        this.videoRef = React.createRef();
    }
   
    componentDidMount() {
        this.props.fetchStream(this.props.match.params.streamId);
        this.buildPlayer();
    }

    componentDidUpdate() {
        this.buildPlayer()
    }

    componentWillUnmount() {
        this.player.destroy();
    }

    buildPlayer() {
        if(this.player || !this.props.stream) {
            return;
        }

        console.log(this.props.stream.value.streamKey);

        this.player = flv.createPlayer({
            type: 'flv',
            url: `http://localhost:8000/live/${this.props.stream.value.streamKey}.flv`
        });
        this.player.attachMediaElement(this.videoRef.current);
        this.player.load();
    }

    render() {
        if (!this.props.stream) {
            return <div>Loading...</div>
        }
        return (
            <div>
                <video ref={this.videoRef} style={{ width: '100%' }} controls/>
                <h1>{this.props.stream.value.title}</h1>
                <h3>{this.props.stream.value.description}</h3>
            </div>

        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(
    mapStateToProps, 
    {fetchStream}
)(StreamShow);
