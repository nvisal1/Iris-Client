import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signIn, signOut, getUser } from '../actions';
import md5 from 'md5';


class Header extends React.Component {

    constructor(props) {
        console.log('constructor')
        super(props);
        this.props.getUser();
    }

    renderLogin() {
        return (
            <Link to='/streams/manage'>
                <img className="profile" src={getGravatarImage(this.props.email, 200)}></img>
            </Link> 
        )
    }

    renderLogout() {
        
    }

    render() {
        if (this.props.username) {
            return (
                <header>
                    <nav>
                        <Link className="logo" to="/">IRIS</Link>
                        <input placeholder="Search"></input>
                        {this.renderLogin()}
                    </nav>
                </header>
            );
        } else {
            return (
                <header>
                    <nav>
                        <Link className="logo" to="/">IRIS</Link>
                        <input placeholder="Search"></input>
                        {this.renderLogout()}
                    </nav>
                </header>
            );
        }
    }   
}

const getGravatarImage = (email, imgSize) => {
    console.log('email', email);
    const defaultIcon = 'identicon';
    // r=pg checks the rating of the Gravatar image
    return (
      'https://www.gravatar.com/avatar/' +
      md5(email) +
      '?s=' +
      imgSize +
      '?r=pg&d=' +
      defaultIcon
    );
}

const mapStateToProps = (state) => {
    console.log(state)
    return { 
        username: state.auth.username,
        email: state.auth.email,
    }
}

export default connect(
    mapStateToProps,
    { signIn, signOut, getUser }
)(Header);