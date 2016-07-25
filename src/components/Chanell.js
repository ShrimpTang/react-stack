import React from 'react';
import {ListItem}  from 'material-ui/List';
class Chanell extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ListItem primaryText={this.props.channel}/>
        )
    }
}
export default Chanell;