import  actions from '../actions';
import firebase from '../firebase';

let ref = null;

let MessageSource = {
    sendMessage: {
        remote(state){
            return new Promise((resolve, reject)=> {
                if (!ref) {
                    return resolve()
                }
                ref.push({
                    message: state.message
                });
                resolve();
            })
        },
        success: actions.messageSendSuccess,
        error: actions.messageSendError
    },
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
        error: actions.messagesFailed,
        loading: actions.messagesLoading
    }
}
export default MessageSource;
