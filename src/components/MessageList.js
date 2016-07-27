import React from 'react';
import Message from './Message'
import {Card} from 'material-ui/Card'
import {List}  from 'material-ui/List'
import CircularProgress from 'material-ui/CircularProgress';
import firebaseRef from '../firebase'
import _ from 'lodash';
import ChatStore from '../stores/ChatStore'
import connectToStores from 'alt-utils/lib/connectToStores'

@connectToStores
class MessageList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: {}
        };
        //var ref = firebaseRef.database().ref('/messages/firebase');
        //ref.on('child_added', msg=> {
        //    if (this.state.messages[msg.key]) {
        //        return;
        //    }
        //    var msgVal = msg.val();
        //    msgVal.key = msg.key;
        //    this.state.messages[msg.key] = msgVal;
        //    this.setState({
        //        messages: this.state.messages
        //    })
        //});
        //ref.on('child_removed', msg=> {
        //    if (this.state.messages[msg.key]) {
        //        delete this.state.messages[msg.key];
        //        this.setState({
        //            messages: this.state.messages
        //        })
        //    }
        //})
    }

    render() {
        var node = null;
        if (!this.props.messagesLoading) {
            node = (<List>
                {_.values(this.props.messages).map((message, i)=> {
                    return (
                        <Message key={i} message={message.message}/>
                    )
                })}
            </List>)
        } else {
            node = (  <CircularProgress
                style={{display:'block',margin:'0 auto',paddingTop: 20,paddingBottom: 20,width:60}}/>)
        }

        return (
            <Card style={{
                flexGrow:'2',
                marginLeft:30
            }}>
                <List>
                    {node}
                </List>

            </Card>
        )


    }

    static getStores() {
        return [ChatStore]
    }

    static getPropsFromStores() {
        return ChatStore.getState()
    }
}
export default MessageList;