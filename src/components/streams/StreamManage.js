import React from 'react';
import { connect } from 'react-redux';
import { fetchStreams, deleteStream } from '../../actions';
import TeamCard from '../TeamCard';
import './StreamManage.css'
import CreateStreamModal from '../CreateStreamModal';
import EditStreamModal from '../EditStreamModal';
import DeleteStreamModal from '../DeleteStreamModal';
class StreamManage extends React.Component {

    state = {
        showCreateModal: false,
        showEditModal: false,
        showDeleteModal: false,
        editStream: {},
        deleteStream: {},
    }

    componentDidMount() {
        this.props.fetchStreams();
    }

    renderUserStreamList() {
        const cards = this.props.streams.map(stream => {
            return (
                <div className="single">
                    <TeamCard 
                        stream={stream}
                        isUser={true}
                        toggleEditModal={this.toggleEditModal}
                        toggleDeleteModal={this.toggleDeleteModal}
                    />
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

    toggleDeleteModal = (stream) => {
        this.setState({
            showDeleteModal: !this.state.showDeleteModal,
            deleteStream: stream
        })
    }

    onDeleteStream = () => {
        this.props.deleteStream(this.state.deleteStream._id);
    }


    render() {
        return (
            <div>
                <CreateStreamModal open={this.state.showCreateModal} close={this.toggleCreateModal}/>
                <EditStreamModal open={this.state.showEditModal} stream={this.state.editStream} close={this.toggleEditModal}/>
                <DeleteStreamModal open={this.state.showDeleteModal} onSubmit={this.onDeleteStream} close={this.toggleDeleteModal}/>
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

export default connect(mapStateToProps, { fetchStreams, deleteStream })(StreamManage);