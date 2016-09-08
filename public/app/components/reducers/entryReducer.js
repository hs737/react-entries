import CONSTANTS from '../constants/constants'

var initialState = {
    entriesList: []
}

var moduleName = "entryReducer"

export default function (previousState = initialState, someAction){
    console.log(moduleName + " called", previousState, someAction)

    switch(someAction.type) {
        case CONSTANTS.ACTIONS.GET_ENTRIES:
            console.log('GET_ENTRIES', JSON.stringify(someAction))

            var nextState = Object.assign({}, previousState)
            nextState['entriesList'] = someAction.entries

            return nextState

        case CONSTANTS.ACTIONS.ADD_ENTRY:
            console.log('ADD_ENTRY', JSON.stringify(someAction))

            var nextState = Object.assign({}, previousState)
            var entriesList = Object.assign([], nextState.entriesList)

            entriesList.push(someAction.entry)
            nextState['entriesList'] = entriesList

            return nextState

        default:
            return previousState
    }
}
