import React from 'react';
import ReactDOM from 'react-dom';
import StreamCreate from './streams/StreamCreate';
import './Modal.css';



const CreateStreamModal = props => 
    props.open
        ? ReactDOM.createPortal(
            <div className="modal-container">
                <div className="modal">
                    <div onClick={props.close} className="modal__exit">x</div>
                    <StreamCreate />
                </div>
            </div>
            ,
            document.querySelector('#modal')
        )
        : null



export default CreateStreamModal;