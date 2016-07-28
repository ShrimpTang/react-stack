import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App';
import Chat from '../components/Chat';
import Login from '../components/Login';
import ChatStore  from '../stores/ChatStore'
import {Router,Route,Link,IndexRoute,Redirect,hashHistory} from 'react-router';

function auth(nextState, replace) {
    if (!ChatStore.getState().user) {
        replace({nextPathname: nextState.location.pathname}, '/login')
    }

}
ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Chat} onEnter={auth}></IndexRoute>
            <Route path="login" component={Login}></Route>
        </Route>
    </Router>
    , document.getElementById('container'))