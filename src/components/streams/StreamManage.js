import React from 'react';
import { connect } from 'react-redux';
import { fetchStreams } from '../../actions';
import TeamCard from '../TeamCard';
import './StreamManage.css'
import CreateStreamModal from '../CreateStreamModal';
import EditStreamModal from '../EditStreamModal';
class StreamManage extends React.Component {

    state = {
        showCreateModal: false,
        showEditModal: false,
        editStream: {}
    }

    componentDidMount() {
        this.props.fetchStreams();
    }

    renderUserStreamList() {
        const cards = this.props.streams.map(stream => {
            return (
                <div className="single">
                    <TeamCard stream={stream} isUser={true} toggleModal={this.toggleEditModal}/>
                </div>
            );
        });
        return <div className="team-card__grid">{cards}</div>
    }

    toggleCreateModal = () => {
        this.setState({
            showCreateModal: !this.state.showCreateModal,
        });
    }

    toggleEditModal = (stream) => {
        this.setState({
            showEditModal: !this.state.showEditModal,
            editStream: stream
        });
    }

    render() {
        return (
            <div>
                <CreateStreamModal open={this.state.showCreateModal} close={this.toggleCreateModal}/>
                <EditStreamModal open={this.state.showEditModal} stream={this.state.editStream} close={this.toggleEditModal}/>
                <div className="gradient">
                    <h2 className="title">Manage Streams</h2>
                </div>
                {this.renderUserStreamList()}
                <div className="cirlce-button-container">
                    <button onClick={this.toggleCreateModal} className="cirlce-button-container__button">
                        <div className="button__text">+</div>
                    </button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { streams: Object.values(state.streams) };
}

export default connect(mapStateToProps, { fetchStreams })(StreamManage);