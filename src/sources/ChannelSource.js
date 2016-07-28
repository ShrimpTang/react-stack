import  actions from '../actions';
import firebase from '../firebase';
let ref = firebase.database().ref('channels');
let ChannelSource = {
    getChannels: {
        remote(state,selectedChannelKey){
            return new Promise((resolve, reject)=> {
                ref.once('value').then(snapshot=> {
                    var channels = snapshot.val();
                    selectedChannelKey = selectedChannelKey || _.keys(channels)[0];
                    var selectedChannel = channels[selectedChannelKey];
                    if(selectedChannel){
                        selectedChannel['selected'] = true;
                    }
                    resolve(channels);
                })
            })
        },
        success: actions.channelsReceived,
        error: actions.channelsFailed
    }
}
export default ChannelSource;
