import  actions from '../actions';
import firebase from '../firebase';
let ref = firebase.database().ref('channels');
let ChannelSource = {
    getChannels: {
        remote(state){
            return new Promise((resolve, reject)=> {
                ref.once('value').then(snapshot=> {
                    var channels = snapshot.val();
                    resolve(channels);
                })
            })
        },
        success: actions.channelsReceived,
        error: actions.channelsFailed
    }
}
export default ChannelSource;
