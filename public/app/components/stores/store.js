import {createStore, applyMiddleware, combineReducers} from 'redux'
import thunk from 'redux-thunk'

import entryReducer from '../reducers/entryReducer'

var currentStore

export default {
    createStore: function(initialState) {
        // Combine reducers
        var reducers = combineReducers({
            entryReducer: entryReducer
        })

        // Initialize store
        currentStore = createStore(reducers, initialState, applyMiddleware(thunk))
        return currentStore
    },
    currentStore: function() {
        return currentStore
    }

}
