import CONSTANTS from '../constants/constants'

var initialState = {
    displaySelection: null
}

var moduleName = "uiReducer"

export default function (previousState = initialState, someAction) {
    console.log(moduleName + " called", previousState, someAction)

    switch(someAction.type) {
        case CONSTANTS.ACTIONS.UPDATE_HOME_DISPLAY:
            console.log('UPDATE_HOME_DISPLAY', JSON.stringify(someAction))

            var nextState = Object.assign({}, previousState)
            nextState['displaySelection'] = someAction.display

            return nextState

        default:
            return previousState
    }
}
