import React from 'react';
import { Router, Route } from 'react-router-dom';
import StreamList from './streams/StreamList';
import StreamCreate from './streams/StreamCreate';
import StreamEdit from './streams/StreamEdit';
import StreamDelete from './streams/StreamDelete';
import StreamShow from './streams/StreamShow';
import Login from './auth/Login';
import Header from './Header';
import history from '../history';
import './App.css'

const App = () => {
    return (
        <div>
            <Router history={history}>
                <div>
                    <Header />
                    <div className="content">
                        <Route path='/' exact component={StreamList} />
                        <Route path='/login' exact component={Login} />
                        <Route path='/streams/new' exact component={StreamCreate} />
                        <Route path='/streams/edit/:streamId' exact component={StreamEdit} />
                        <Route path='/streams/delete/streamId' exact component={StreamDelete} />
                        <Route path='/streams/show/:streamId' exact component={StreamShow} />
                    </div>
                </div>
            </Router>
        </div>
    )
};

export default App;