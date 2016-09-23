import CONSTANTS from '../constants/constants'

var initialState = {
    currentProfile: null
}

var moduleName = "profileReducer"

export default function (previousState = initialState, someAction) {
    console.log(moduleName + " called", previousState, someAction)

    switch(someAction.type) {
        case CONSTANTS.ACTIONS.UPDATE_CURRENT_PROFILE:
            console.log('UPDATE_CURRENT_PROFILE', JSON.stringify(someAction))

            var nextState = Object.assign({}, previousState)
            nextState['currentProfile'] = someAction.profileDetails

            return nextState

        default:
            return previousState
    }
}
