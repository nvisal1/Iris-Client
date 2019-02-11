import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchStreams } from '../../actions';
import Card from '../Card';
import './StreamList.css'

class StreamList extends React.Component {
    componentDidMount() {
        this.props.fetchStreams();
    }

    renderList() {
        const cards = this.props.streams.map(stream => {
            return (
                <div className="single">
                    <Card stream={stream}/>
                </div>
            );
        });
        return <div className="card-grid">{cards}</div>
    }

    render() {
        return (
            <div>
                <h2 className="title">All Stream</h2>
                {this.renderList()}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { streams: Object.values(state.streams) };
}

export default connect(mapStateToProps, { fetchStreams })(StreamList);