import React from 'react';
import Channel from './Chanell'
import {Card} from 'material-ui/Card'
import {List}  from 'material-ui/List'
class ChannelList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            channels: [
                'dog`',
                'cat'
            ]
        }
    }

    render() {
        var channelNodes = this.state.channels.map((channel, i)=> {
            return (
                <Channel key={i} channel={channel}/>
            )
        });
        return (
            <Card  style={{
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