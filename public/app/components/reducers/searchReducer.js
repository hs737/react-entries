import CONSTANTS from '../constants/constants'

var initialState = {
    searchResults: null
}

var moduleName = "searchReducer"

export default function (previousState = initialState, someAction) {
    console.log(moduleName + " called", previousState, someAction)

    switch(someAction.type) {
        case CONSTANTS.ACTIONS.SEARCH:
            console.log('SEARCH', JSON.stringify(someAction))

            var nextState = Object.assign({}, previousState)
            nextState['searchResults'] = someAction.results

            return nextState

        default:
            return previousState
    }
}
