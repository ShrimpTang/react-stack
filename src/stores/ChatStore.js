import alt from '../alt'
import actions from '../actions';
import {decorate,bind,datasource} from 'alt-utils/lib/decorators'
import ChannelSource from '../sources/ChannelSource'
import MessageSource from '../sources/MessageSource'

@datasource(ChannelSource, MessageSource)
@decorate(alt)
class ChatStore {
    constructor() {
        this.state = {user: null, channels: null, messages: null, messagesLoading: true, message: ""}
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
        this.setState({channels, selectedChannel});
        setTimeout(()=> {
            this.getInstance().getMessages()
        }, 10)
    }

    @bind(actions.messagesReceived)
    messagesReceived(messages) {
        _(messages)
            .keys()
            .each((key, index)=> {
                messages[key].key = key;
            })
        setTimeout(()=> {
            this.setState({messages, messagesLoading: false})
        }, 10)

    }

    @bind(actions.channelOpened)
    channelOpened(selectedChannel) {
        _.each(_.values(this.state.channels), c=> {
            c.selected = false;
        });
        selectedChannel.selected = true;
        this.setState({
            channels: this.state.channels,
            selectedChannel
        });

        setTimeout(()=> {
            this.getInstance().getMessages();
        }, 10)
    }

    @bind(actions.messagesLoading)
    messagesLoading() {
        this.setState({messagesLoading: true})
    }

    @bind(actions.sendMessage)
    sendMessage(message) {
        this.setState({message});
        setTimeout(()=> {
            this.getInstance().sendMessage()
        }, 10)
    }

    @bind(actions.messageReceived)
    messageReceived(message) {
        if(this.state.messages[message.key]){
            return;
        }
        this.state.messages[message.key] = message;
        this.setState({
            messages: this.state.messages
        })
    }


}
export default alt.createStore(ChatStore)