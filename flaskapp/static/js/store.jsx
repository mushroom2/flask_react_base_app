import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { DownloadsListReducer }  from './DowloadsList'
const reducers = combineReducers({
    DownloadsListReducer
});

export default createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));