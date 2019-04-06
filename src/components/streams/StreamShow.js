import React from 'react';
import flv from 'flv.js';
import { connect } from 'react-redux';
import { fetchStream } from '../../actions'; 
import './StreamShow.css';

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
        console.log(this.props);
        if(this.player || !this.props.stream) {
            return;
        }

        this.player = flv.createPlayer({
            type: 'flv',
            url: `http://localhost:8000/live/${this.props.stream.streamKey}.flv`
        });
        this.player.attachMediaElement(this.videoRef.current);
        this.player.load();
    }

    render() {
        if (!this.props.stream) {
            return <div>Loading...</div>
        }
        return (
            <div className="stream-view">
                <div>
                    <video className="stream-view__main-video-player" preload="none" ref={this.videoRef} controls/>
                </div>
                <div className="stream-view__meta-data">
                    <h1 className="stream-view__title">{this.props.stream.title}</h1>
                    <h3 className="stream-view__description">{this.props.stream.description}</h3>
                </div>
            </div>

        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return { stream: state.streams[ownProps.match.params.streamId] };
};

export default connect(
    mapStateToProps, 
    {fetchStream}
)(StreamShow);
