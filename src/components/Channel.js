import React from 'react';
import {ListItem}  from 'material-ui/List';
import actions from '../actions'
class Channel extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        var channel = this.props.channel;
        var style = {};
        if (channel.selected) {
            style.backgroundColor = "#f0f0f0";
        }
        return (
            <ListItem style={style} primaryText={channel.name} href={"/#/chat/"+channel.key}/>
        )
    }

    onClick() {
        // onClick={this.onClick.bind(this)}
        actions.channelOpened(this.props.channel)
    }
}
export default Channel;