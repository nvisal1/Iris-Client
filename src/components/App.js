import React from 'react';
import { Router, Route } from 'react-router-dom';
import StreamList from './streams/StreamList';
import StreamCreate from './streams/StreamCreate';
import StreamEdit from './streams/StreamEdit';
import StreamDelete from './streams/StreamDelete';
import StreamShow from './streams/StreamShow';
import Header from './Header';
import history from '../history';
import Sidebar from './Sidebar';
import './App.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIgloo } from '@fortawesome/free-solid-svg-icons'

library.add(faIgloo)

const App = () => {
    return (
        <div>
            <Router history={history}>
                <div>
                    <Header />
                    <Sidebar />
                    <div className="content">
                        <Route path='/' exact component={StreamList} />
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