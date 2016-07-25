/**
 * Created by Shrimp on 16/7/24.
 */
import React,{PropTypes} from 'react';
import MessageList from './MessageList'
import ChannelList from './ChannelList'
import MessageBox from './MessageBox'
import AppBar from 'material-ui/AppBar'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
class App extends React.Component {
    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <AppBar title="Awesome Chat App"/>
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
                </div>

            </MuiThemeProvider>
        )
    }
}
export default App;
