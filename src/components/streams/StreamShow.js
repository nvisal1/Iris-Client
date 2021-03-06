import React from 'react';
import flv from 'flv.js';
import { connect } from 'react-redux';
import { fetchStream, fetchUserStreams, getUser } from '../../actions'; 
import StreamCard from '../StreamCard';
import './StreamShow.css';

class StreamShow extends React.Component {

    constructor(props) {
        super(props);
        this.videoRef = React.createRef();
    }
   
    async componentDidMount() {
        await this.props.fetchStream(this.props.match.params.streamId);
        await this.props.fetchUserStreams(this.props.stream.owner);
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

        this.player = flv.createPlayer({
            type: 'flv',
            url: `http://40.67.184.195:8000/live/${this.props.stream.streamKey}.flv`
        });
        this.player.attachMediaElement(this.videoRef.current);
        this.player.load();
    }

    renderTeamList() {
        const cards = this.props.streams.map(stream => {
            if(stream.owner === this.props.stream.owner) {
                if (stream._id !== this.props.match.params.streamId) {
                    return (
                        <div className="single">
                            <StreamCard stream={stream}/>
                        </div>
                    );
                }
            }
        });
        return (
            <div>
                <div className="stream-view__team-title">
                    Team
                </div>
                <div className="stream-cards">{cards}</div>
            </div>
        );
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
                <div className="stream-view__chat">
                    <div className="chat__container">
                        <div className="container__content">Chat Coming Soon!</div>
                    </div>
                </div>
                <div className="stream-view__meta-data">
                    <h1 className="stream-view__title">{this.props.stream.title}</h1>
                    <h3 className="stream-view__description">{this.props.stream.description}</h3>
                </div>
                
                {this.renderTeamList()}
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return { 
        stream: state.streams[ownProps.match.params.streamId],
        streams: Object.values(state.streams),
    };
};

export default connect(
    mapStateToProps, 
    {fetchStream, fetchUserStreams}
)(StreamShow);
