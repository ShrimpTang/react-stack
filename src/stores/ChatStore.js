import alt from '../alt'
import actions from '../actions';
import {decorate,bind,datasource} from 'alt-utils/lib/decorators'
import ChannelSource from '../sources/ChannelSource'
import MessageSource from '../sources/MessageSource'

@datasource(ChannelSource, MessageSource)
@decorate(alt)
class ChatStore {
    constructor() {
        this.state = {user: null, channels: null, messages: null}
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
            .each((key, index)=> {
                channels[key].key = key;
                if (index == 0) {
                    channels[key].selected = true;
                    selectedChannel = channels[key]
                }
            })
        this.setState({channels, selectedChannel})
        this.getInstance().getMessages();
    }

    @bind(actions.messagesReceived)
    messagesReceived(messages) {
        _(messages)
        .keys()
        .each((key,index)=>{
            messages[key].key = key;
        })
        this.setState({messages})
    }
}
export default alt.createStore(ChatStore)