import {combineReducers} from 'redux';
import {connectRouter}   from 'connected-react-router';


import generalReducer          from './general/generalReducer';
import messagesReducer         from './messages/messagesReducer';
import homeReducer             from './home/homeReducer';
import sculptureReducer        from './sculpture/sculptureReducer';
import exteriorInteriorReducer from './exteriorInterior/exteriorInteriorReducer';
import paintingReducer         from './painting/paintingReducer';
import publicationReducer      from './publication/publicationReducer';


const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  general: generalReducer,
  messages: messagesReducer,
  home: homeReducer,
  sculpture: sculptureReducer,
  exteriorInterior: exteriorInteriorReducer,
  painting: paintingReducer,
  publication: publicationReducer,
});
export default createRootReducer;
