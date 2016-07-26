import alt from '../alt'
import actions from '../actions';
import {decorate,bind,datasource} from 'alt-utils/lib/decorators'
@decorate(alt)
class ChatStore {
    constructor() {
        this.state = {user: null}
    }

    @bind(actions.login)
    login(user) {
        this.setState({user:user})
    }
}
export default alt.createStore(ChatStore)