import React from 'react';
import {Card,CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import actions from '../actions';
class Login extends React.Component {
    login() {
        actions.login();
    }

    render() {
        return (
            <Card style={{
            maxWidth:'800px',
            margin:'30px auto ',
            padding:'50px'

           }}>
                <CardText style={{textAlign:'center'}}>
                    请登录Facebook
                </CardText>
                <RaisedButton
                    style={{display:'block'}}
                    label="点击登录"
                    primary={true}
                    onClick={this.login.bind(this)}
                />
            </Card>
        )
    }
}
export default Login;