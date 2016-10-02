import CONSTANTS from '../constants/constants'

var initialState = {
    currentUser: null
}

var moduleName = "userReducer"

export default function (previousState = initialState, someAction) {
    console.log(moduleName + " called", previousState, someAction)

    switch(someAction.type) {
        case CONSTANTS.ACTIONS.UPDATE_CURRENT_USER:
            console.log('UPDATE_CURRENT_USER', JSON.stringify(someAction))

            var nextState = Object.assign({}, previousState)
            nextState['currentUser'] = someAction.userDetails

            return nextState

        default:
            return previousState
    }
}
