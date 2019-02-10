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
                    {/* <img src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"/>
                    <Link to={`/streams/show/${stream.id}`}>{stream.title}</Link> */}
                </div>
            );
        });
        return <div className="card-grid">{cards}</div>
    }

    render() {
        return (
            <div>
                {this.renderList()}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { streams: Object.values(state.streams) };
}

export default connect(mapStateToProps, { fetchStreams })(StreamList);