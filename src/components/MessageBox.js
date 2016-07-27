import React from 'react';
import {Card} from 'material-ui/Card';
import  TextField from 'material-ui/TextField';
import trim from 'trim';
import firebaseRef from '../firebase'
class MessageBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: ''
        }
    }

    render() {
        return (
            <Card style={{
            maxWidth:1200,
              margin:'30px auto 30px',
            }}>
                <TextField
                    value={this.state.message}
                    onKeyUp={this.onKeyUp.bind(this)}
                    onChange={this.onChange.bind(this)}
                    name="messageBox"
                    multiLine={true}
                    style={{width:'100%'}}
                />
            </Card>
        )
    }

    onChange(evt) {
        this.setState({
            message: evt.target.value
        })
    }
    onKeyUp(evt){
        if(evt.keyCode == 13 && trim(this.state.message)!=''){
            evt.preventDefault();
            console.log(this.state.message);
            firebaseRef.database().ref('/messages/firebase').push({
                message:this.state.message
            })
            this.setState({
                message:''
            })
        }
    }
}
export default MessageBox;