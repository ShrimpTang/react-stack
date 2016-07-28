import React from 'react';
import Channel from './Channel'
import {Card} from 'material-ui/Card'
import {List}  from 'material-ui/List'
import CircularProgress from 'material-ui/CircularProgress';
import ChatStore from '../stores/ChatStore'
import connectToStores from 'alt-utils/lib/connectToStores'
@connectToStores
class ChannelList extends React.Component {
    constructor(props) {
        super(props);
//        ChatStore.getChannels()
    }

    componentDidMount() {
        this.selectedChannel = this.props.params.channel;
        ChatStore.getChannels(this.selectedChannel)
    }

    componentWillReceiveProps(nextProps) {
        if (this.selectedChannel != nextProps.params.channel) {
            this.selectedChannel = nextProps.params.channel;
            ChatStore.getChannels(this.selectedChannel)
        }
    }

    static getStores() {
        return [ChatStore]
    }

    static getPropsFromStores() {
        return ChatStore.getState()
    }

    render() {
        if (!this.props.channels) {
            return (
                <Card style={{flexGrow:1}}>
                    <CircularProgress
                        style={{display:'block',margin:'0 auto',paddingTop: 20,paddingBottom: 20,width:60}}/>
                </Card>
            )
        }
        var channelNodes = _.values(this.props.channels).map((channel, i)=> {
            return (
                <Channel key={i} channel={channel}/>
            )
        });
        return (
            <Card style={{
                flexGrow:'1'
            }}>
                <List>
                    {channelNodes}
                </List>

            </Card>

        )
    }
}
export default ChannelList;