/**
 * Created by Shrimp on 16/7/24.
 */
import React,{PropTypes} from 'react';
import MessageList from './MessageList'
import ChannelList from './ChannelList'
import Login from './Login';
import MessageBox from './MessageBox'
import AppBar from 'material-ui/AppBar'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import ChatStore from '../stores/ChatStore'
injectTapEventPlugin();
class App extends React.Component {

    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <AppBar title="Awesome Chat App"/>
                    {this.props.children}
                </div>
            </MuiThemeProvider>
        )
    }
}
export default App;
