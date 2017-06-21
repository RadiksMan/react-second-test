import React from 'react';
import ReactDOM from 'react-dom';
import { Link, Route, BrowserRouter as Router } from 'react-router-dom';

import { firebaseApp } from './firebase';

import App from './components/App';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';

firebaseApp.auth().onAuthStateChanged(user => {
    if (user) {
        console.log('user has signed in or up', user)
    }else{
        console.log('user has signed put or still needs to sign in.')
    }
});

ReactDOM.render(
    <Router path="/">
        <div>
            <Route path="/app" component={App} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
        </div>
    </Router>,
    document.querySelector('#root')
)