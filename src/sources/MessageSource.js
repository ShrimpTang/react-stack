import  actions from '../actions';
import firebase from '../firebase';

let ref = null;

let MessageSource = {
    getMessages: {
        remote(state){
            if (ref) {
                ref.off();
            }
            ref = firebase.database().ref('messages/' + state.selectedChannel.key);
            return new Promise((resolve, reject)=> {
                ref.once('value').then(snapshot=> {
                    var messages = snapshot.val();
                    resolve(messages);
                })
            })
        },
        success: actions.messagesReceived,
        error: actions.messagesFailed
    }
}
export default MessageSource;
