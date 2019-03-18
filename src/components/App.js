import React from 'react';
import { Route } from 'react-router-dom';
import StreamList from './streams/StreamList';
import StreamCreate from './streams/StreamCreate';
import StreamEdit from './streams/StreamEdit';
import StreamDelete from './streams/StreamDelete';
import StreamShow from './streams/StreamShow';
import Login from './auth/Login';
import Header from './Header';
import history from '../history';
import { BrowserRouter, Switch } from 'react-router-dom';
import './App.css'

const App = () => {
    const LoginContainer = () => (
        <div className="content">
          <Route path="/login" component={Login} />
        </div>
    )
    
    const DefaultContainer = () => (
        <div>
            <Header />
            <div className="content">
                <Route path='/' exact component={StreamList} />
                <Route path='/streams/new' exact component={StreamCreate} />
                <Route path='/streams/edit/:streamId' exact component={StreamEdit} />
                <Route path='/streams/delete/streamId' exact component={StreamDelete} />
                <Route path='/streams/show/:streamId' exact component={StreamShow} />
            </div>
        </div>
    )
    return (
        <BrowserRouter history={history}>
            <Switch>
                <Route exact path="/(login)" component={LoginContainer}/>
                <Route component={DefaultContainer}/>
            </Switch>
        </BrowserRouter>
    )
};

export default App;