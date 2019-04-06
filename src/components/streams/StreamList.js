import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchStreams } from '../../actions';
import TeamCard from '../TeamCard';
import StreamCard from '../StreamCard';
import './StreamList.css'

class StreamList extends React.Component {
    componentDidMount() {
        this.props.fetchStreams();
    }

    renderTeamList() {
        const cards = this.props.streams.map(stream => {
            return (
                <div className="single">
                    <TeamCard stream={stream}/>
                </div>
            );
        });
        return <div className="team-card__grid">{cards}</div>
    }

    renderStreamList() {
        const cards = this.props.streams.map(stream => {
            return (
                <div className="single">
                    <StreamCard stream={stream}/>
                </div>
            );
        });
        return <div className="stream-card__grid">{cards}</div>
    }

    render() {
        return (
            <div>
                <div className="gradient">
                    <h2 className="title">All Streams</h2>
                </div>
                <div className="grid-container">
                    {this.renderTeamList()}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { streams: Object.values(state.streams) };
}

export default connect(mapStateToProps, { fetchStreams })(StreamList);