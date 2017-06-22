import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import { firebaseApp } from './firebase';

import App from './components/App';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';

let routerRef = null;

firebaseApp.auth().onAuthStateChanged(user => {
    if (user) {
        console.log('user has signed in or up', user);

    }else{
        console.log('user has signed put or still needs to sign in.');

    }
});

ReactDOM.render(
    <Router path="/" ref={ el => routerRef = el} >
        <div>
            <Route path="/app" component={App} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
        </div>
    </Router>,
    document.querySelector('#root')
)