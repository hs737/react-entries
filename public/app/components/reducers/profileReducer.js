import CONSTANTS from '../constants/constants'

var initialState = {
    currentProfile: null
}

export default function (previousState = initialState, someAction) {

    switch(someAction.type) {
        case CONSTANTS.UPDATE_PROFILE:
            console.log('UPDATE_PROFILE', JSON.stringify(someAction))

            var nextState = Object.assign({}, previousState)
            nextState['currentProfile'] = someAction.profileId

            return nextState

        default:
            return previousState
    }
}
