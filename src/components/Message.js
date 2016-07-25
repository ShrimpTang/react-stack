import React from 'react';
import {ListItem}  from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
class Message extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ListItem primaryText={this.props.message}
                      leftAvatar={<Avatar src="http://psn-rsc.prod.dl.playstation.net/psn-rsc/avatar/JP0031/CUSA01054_00-AVATAR1505NEP010_085CC956F3B47D170BED_l.png" />}/>
        )
    }
}
export default Message;