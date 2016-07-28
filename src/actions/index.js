/**
 * Created by Shrimp on 16/7/26.
 */
import alt from '../alt';
import firebase from 'firebase'
import {hashHistory} from 'react-router'
class Actions {
    constructor() {
        this.generateActions(
            'channelsReceived',
            'channelsFailed',
            'messagesReceived',
            'messagesFailed',
            'channelOpened',
            'messagesLoading',
            'sendMessage',
            'messageSendSuccess',
            'messageSendError',
            'messageReceived'
        )
    }

    login() {
        return (dispatch)=> {
            var provider = new firebase.auth.FacebookAuthProvider();
            firebase.auth().signInWithPopup(provider).then(function (result) {
                dispatch(result.user);
                hashHistory.push('/')
            }).catch(error=> {
                console.log(error)
            })
        }
    }
}

export default alt.createActions(Actions)