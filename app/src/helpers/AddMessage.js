import store                           from 'store/store';
import messagesActions from 'store/messages/messagesActions';


export const AddMessage = (message) => store.dispatch(messagesActions.addMessage(message));
