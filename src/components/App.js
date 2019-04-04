import React from 'react';
import { Route } from 'react-router-dom';
import StreamList from './streams/StreamList';
import StreamCreate from './streams/StreamCreate';
import StreamEdit from './streams/StreamEdit';
import StreamDelete from './streams/StreamDelete';
import StreamShow from './streams/StreamShow';
import StreamManage from './streams/StreamManage';
import Auth from './auth/Auth';
import Header from './Header';
import history from '../history';
import { Router, Switch } from 'react-router-dom';
import './App.css'

const App = () => {
    const AuthContainer = () => (
        <div>
          <Route 
            path="/login"
            render={(props) => <Auth {...props} page='login' />} />
          <Route 
            path="/register"
            render={(props) => <Auth {...props} page='register' />} />
        </div>
    )
    
    const DefaultContainer = () => (
        <div>
            <Header />
            <div className="content">
                <Route path='/' exact component={StreamList} />
                <Route path='/streams/manage' exact component={StreamManage} />
                <Route path='/streams/new' exact component={StreamCreate} />
                <Route path='/streams/edit/:streamId' exact component={StreamEdit} />
                <Route path='/streams/delete/streamId' exact component={StreamDelete} />
                <Route path='/streams/show/:streamId' exact component={StreamShow} />
            </div>
        </div>
    )
    return (
        <Router history={history}>
            <Switch>
                <Route exact path="/login" component={AuthContainer}/>
                <Route exact path="/register" component={AuthContainer}/>
                <Route component={DefaultContainer} />
            </Switch>
        </Router>
    )
};

export default App;