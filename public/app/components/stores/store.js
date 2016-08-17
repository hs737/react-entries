import {createStore, applyMiddleware, combineReducers} from 'redux'
import thunk from 'redux-thunk'

import entryReducer from '../reducers/entryReducer'

// Combine reducers
var reducers = combineReducers({
    entryReducer: entryReducer
})

// Initialize store
var store = createStore(reducers, applyMiddleware(thunk))

export default store
