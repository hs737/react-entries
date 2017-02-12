import CONSTANTS from '../constants/constants';

var initialState = {
    entriesList: null
};

var moduleName = "entryReducer";

export default function (previousState = initialState, someAction) {
    console.log(moduleName + " called", previousState, someAction);
    var nextState = null;

    switch (someAction.type) {
        case CONSTANTS.ACTIONS.GET_ENTRIES:
            console.log('GET_ENTRIES', JSON.stringify(someAction));

            nextState = Object.assign({}, previousState);
            nextState['entriesList'] = someAction.entries;

            return nextState;

        case CONSTANTS.ACTIONS.ADD_ENTRY:
            console.log('ADD_ENTRY', JSON.stringify(someAction));

            nextState = Object.assign({}, previousState);
            var entriesList = Object.assign([], nextState.entriesList);

            entriesList.unshift(someAction.entry);
            nextState['entriesList'] = entriesList;

            return nextState;

        case CONSTANTS.ACTIONS.REMOVE_ENTRY:
            console.log('REMOVE_ENTRY', JSON.stringify(someAction));

            nextState = Object.assign({}, previousState);
            var entriesList = Object.assign([], nextState.entriesList);

            entriesList = entriesList.filter(element => element._id !== someAction.entry._id);
            nextState['entriesList'] = entriesList;

            return nextState;

        default:
            return previousState;
    }
}