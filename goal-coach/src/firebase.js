import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBtm9NEyel2LJ5KsSG7EJ3zEgJPLwQurnA",
    authDomain: "goalcoach-react-test-project.firebaseapp.com",
    databaseURL: "https://goalcoach-react-test-project.firebaseio.com",
    projectId: "goalcoach-react-test-project",
    storageBucket: "",
    messagingSenderId: "77582605154"
};

export const firebaseApp = firebase.initializeApp(config);