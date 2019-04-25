import React from 'react';
import './Auth.css'
import { connect } from 'react-redux';

class ThankYou extends React.Component {

    render() {
        return (
            <div className="thankyou-container">
                <div className="container__title"> 
                    We're happy you're here!
                </div>
                <br></br>
                Iris is an open source streaming platform.
                <br></br>
                Our goal is to create a free environment
                <br></br>
                where streamers can easily interact with developers.
                <br></br>
                We are looking for motivated people to maintain this site!
                <br></br>
                If you are interested in contributing to Iris, please contact
                <br></br>
                <a href="mailto:nvisal1@students.towson.edu">Nick Visalli</a>.
                <br></br>
            </div>
        );
    }
}

export default connect(
    null,
    {}
)(ThankYou);