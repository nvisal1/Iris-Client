import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';

const DeleteStreamModal = props => 
    props.open
        ? ReactDOM.createPortal(
            <div className="modal-container">
                <div className="modal">
                    <div className="modal__background">
                        <div className="modal__content">
                            <div onClick={props.close} className="modal__exit">x</div>
                            <div className="content__title">You are about to delete a stream</div>
                            <div className="content__text">Are you sure?</div>
                            <div className="content__delete-button-container">
                                <button 
                                    className="delete-button-container__delete-button"
                                    onClick={props.onSubmit}
                                >Yes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            ,
            document.querySelector('#modal') 
        )
        : null

export default DeleteStreamModal