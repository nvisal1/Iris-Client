import React from 'react';
import { connect } from 'react-redux';
import { fetchStreams } from '../../actions';
import TeamCard from '../TeamCard';
import './StreamManage.css'
import Modal from '../Modal';
class StreamManage extends React.Component {

    state = {
        showModal: false,
    }

    componentDidMount() {
        this.props.fetchStreams();
    }

    renderUserStreamList() {
        const cards = this.props.streams.map(stream => {
            return (
                <div className="single">
                    <TeamCard stream={stream} isUser={true}/>
                </div>
            );
        });
        return <div className="team-card__grid">{cards}</div>
    }

    toggleModal = () => {
        this.setState({
            showModal: !this.state.showModal,
        })
    }

    render() {
        return (
            <div>
                <Modal open={this.state.showModal} close={this.toggleModal}/>
                <div className="gradient">
                    <h2 className="title">Manage Streams</h2>
                </div>
                {this.renderUserStreamList()}l
                <div className="cirlce-button-container">
                    <button onClick={this.toggleModal} className="cirlce-button-container__button">
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