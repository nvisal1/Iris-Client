import React from 'react';
import { connect } from 'react-redux';
import { fetchStreams, deleteStream, fetchUserStreams, getUser } from '../../actions';
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

    async componentDidMount() {
        await this.props.getUser();
        this.props.fetchUserStreams(this.props.userId);
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

    renderCreateButton() {
        if (!(this.props.streams.length >= 6)) {
            return (
                <div className="cirlce-button-container">
                    <button onClick={this.toggleCreateModal} className="cirlce-button-container__button">
                        <div className="button__text">+</div>
                    </button>
                </div>
            );
        }
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
                {this.renderCreateButton()}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { 
        streams: Object.values(state.streams),
        userId: state.auth.id
    };
}

export default connect(mapStateToProps, { fetchStreams, deleteStream, fetchUserStreams, getUser })(StreamManage);