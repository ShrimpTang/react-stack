/**
 * Created by Shrimp on 16/7/24.
 */
import React,{PropTypes} from 'react';
import MessageList from './MessageList'
import ChannelList from './ChannelList'
import MessageBox from './MessageBox'
import connectToStores from 'alt-utils/lib/connectToStores';
import ChatStore from '../stores/ChatStore'
@connectToStores
class Chat extends React.Component {
    static getStores() {
        return [ChatStore];
    }

    static  getPropsFromStores() {
        return ChatStore.getState()
    }

    render() {
        return (
            <div>
                <div style={{
                        flexFlow:'row warp',
                        display:'flex',
                        margin:'30px auto 30px',
                        maxWidth:1200,
                        width:'100%'
                    }}>
                    <ChannelList {...this.props}/>
                    <MessageList/>
                </div>
                <MessageBox/>
            </div>);
    }
}
export default Chat;
