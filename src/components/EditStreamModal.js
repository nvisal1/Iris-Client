import React from 'react';
import ReactDOM from 'react-dom';
import StreamEdit from './streams/StreamEdit';
import './Modal.css';

const EditStreamModal = props => 
    props.open
        ? ReactDOM.createPortal(
            <div className="modal-container">
                <div className="modal">
                    <div onClick={props.close} className="modal__exit">x</div>
                    <StreamEdit stream={props.stream}/>
                </div>
            </div>
            ,
            document.querySelector('#modal')
        )
        : null

export default EditStreamModal;