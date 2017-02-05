import {
    createStore,
    applyMiddleware,
    combineReducers
} from 'redux';
import thunk from 'redux-thunk';

import entryReducer from '../reducers/entryReducer';
import profileReducer from '../reducers/profileReducer';
import searchReducer from '../reducers/searchReducer';
import userReducer from '../reducers/userReducer';
import uiReducer from '../reducers/uiReducer';

var currentStore;

export default {
    createStore: function (initialState) {
        // Combine reducers
        var reducers = combineReducers({
            entryReducer: entryReducer,
            profileReducer: profileReducer,
            searchReducer: searchReducer,
            userReducer: userReducer,
            uiReducer: uiReducer
        });

        // Initialize store
        currentStore = createStore(reducers, initialState, applyMiddleware(thunk))
        return currentStore;
    },
    currentStore: function () {
        return currentStore;
    }

}