/**
 * Created by Shrimp on 16/7/26.
 */
import alt from '../alt';
import firebase from 'firebase'
class Actions {
    constructor() {
        this.generateActions(
            'channelsReceived',
            'channelsFailed',
            'messagesReceived',
            'messagesFailed'
        )
    }

    login(args) {
        return (dispatch)=> {
            var provider = new firebase.auth.FacebookAuthProvider();
            firebase.auth().signInWithPopup(provider).then(function (result) {
                dispatch(result.user);
            }).catch(error=> {
                console.log(error)
            })

        }
    }
}

export default alt.createActions(Actions)