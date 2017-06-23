import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { firebaseApp } from './firebase';

import { logUser } from './actions';
import reducer from './reducers';

import App from './components/App';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';


const store = createStore(reducer);
let routerRef = null;

firebaseApp.auth().onAuthStateChanged(user => {
    if (user) {
        console.log('user has signed in or up', user);

        const { email } = user;
        store.dispatch( logUser(email) );
        routerRef.history.push(`/app`);
    }else{
        console.log('user has signed put or still needs to sign in.');

        routerRef.history.replace(`/signin`);
    }
});

ReactDOM.render(
    <Provider store={store}>
        <Router path="/" ref={ el => routerRef = el} >
            <div>
                <Route path="/app" component={App} />
                <Route path="/signin" component={SignIn} />
                <Route path="/signup" component={SignUp} />
            </div>
        </Router>
    </Provider>,
    document.querySelector('#root')
)