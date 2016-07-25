import React from 'react';
import Message from './Message'
import {Card} from 'material-ui/Card'
import {List}  from 'material-ui/List'
import firebaseRef from '../firebase/firebase'
import _ from 'lodash';
class MessageList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: {}
        };
        var ref = firebaseRef.database().ref('/messages/firebase');
        ref.on('child_added', msg=> {
            if (this.state.messages[msg.key]) {
                return;
            }
            var msgVal = msg.val();
            msgVal.key = msg.key;
            this.state.messages[msg.key] = msgVal;
            this.setState({
                messages: this.state.messages
            })
        });
        ref.on('child_removed', msg=> {
            if (this.state.messages[msg.key]) {
                delete this.state.messages[msg.key];
                this.setState({
                    messages: this.state.messages
                })
            }
        })
    }

    render() {
        var messageNodes = _.values(this.state.messages).map((message, i)=> {
            return (
                <Message key={i} message={message.message}/>
            )
        });
        return (
            <Card style={{
                flexGrow:'2',
                marginLeft:30
            }}>
                <List>
                    {messageNodes}
                </List>

            </Card>

        )
    }
}
export default MessageList;