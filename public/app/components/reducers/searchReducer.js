import CONSTANTS from '../constants/constants'

var initialState = {
    searchResults: null
}

export default function (previousState = initialState, someAction) {

    switch(someAction.type) {
        case CONSTANTS.SEARCH:
            console.log('SEARCH', JSON.stringify(someAction))

            var nextState = Object.assign({}, previousState)
            nextState['searchResults'] = someAction.results

            return nextState

        default:
            return previousState
    }
}
