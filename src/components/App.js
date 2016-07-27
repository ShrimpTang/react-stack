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
import connectToStores from 'alt-utils/lib/connectToStores';
import ChatStore from '../stores/ChatStore'
injectTapEventPlugin();
@connectToStores
class App extends React.Component {
    static getStores() {
        return [ChatStore];
    }

    static  getPropsFromStores() {
        return ChatStore.getState()
    }

    render() {
        var view = <Login/>;
        if (true || this.props.user != null) {
            view = (
                <div>
                    <div style={{
                        flexFlow:'row warp',
                        display:'flex',
                        margin:'30px auto 30px',
                        maxWidth:1200,
                        width:'100%'
                    }}>
                        <ChannelList/>
                        <MessageList/>
                    </div>
                    <MessageBox/>
                </div>);
        }
        return (
            <MuiThemeProvider>
                <div>
                    <AppBar title="Awesome Chat App"/>
                    {view}
                </div>
            </MuiThemeProvider>
        )
    }
}
export default App;
