/**
 * Created by Shrimp on 16/7/25.
 */
import firebase from 'firebase';
var firebaseRef = firebase.initializeApp({
    apiKey: "AIzaSyAaaaVmnNk1TvH0vIII0kkIIED5An2GkAo",
    authDomain: "react-stack-server.firebaseapp.com",
    databaseURL: "https://react-stack-server.firebaseio.com",
    storageBucket: "react-stack-server.appspot.com",
});
export default firebaseRef;