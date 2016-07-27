import alt from '../alt'
import actions from '../actions';
import {decorate,bind,datasource} from 'alt-utils/lib/decorators'
import ChannelSource from '../sources/ChannelSource'

@datasource(ChannelSource)
@decorate(alt)
class ChatStore {
    constructor() {
        this.state = {user: null, channels: null}
    }

    @bind(actions.login)
    login(user) {
        this.setState({user: user})
    }

    @bind(actions.channelsReceived)
    channelsReceived(channels) {
        let selectedChannel;
        _(channels)
        .keys()
        .each((key,index)=>{
            channels[key].key = key;
            if(index==0){
                channels[key].selected = true;
                selectedChannel = channels[key]
            }
        })
        //.value()
        this.setState({channels,selectedChannel})
    }
}
export default alt.createStore(ChatStore)