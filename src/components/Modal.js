import React from 'react';
import ReactDOM from 'react-dom';
import StreamCreate from './streams/StreamCreate';
import './Modal.css'

const Modal = props => {
    return ReactDOM.createPortal(
        <div className="modal-container">
            <div className="modal">
                <StreamCreate />
            </div>
        </div>
        ,
        document.querySelector('#modal')
    );
}

export default Modal;