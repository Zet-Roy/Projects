import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCeIbm8xaDxqxleXj0wDqTKdjXvbojMbXc",
    authDomain: "goalcoach-1d0ba.firebaseapp.com",
    databaseURL: "https://goalcoach-1d0ba.firebaseio.com",
    projectId: "goalcoach-1d0ba",
    storageBucket: "goalcoach-1d0ba.appspot.com",
    messagingSenderId: "319741927045"
};

export const firebaseApp = firebase.initializeApp(config);
export const goalRef = firebase.database().ref('goals');
export const completeGoalRef = firebase.database().ref('completeGoals');