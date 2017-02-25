import CONSTANTS from '../constants/constants';
// import {
//     handleAction
// } from 'redux-actions';

var initialState = {
    entriesList: []
    // composition: {
    //     text: "",
    //     transaction: {
    //         inProgress: false,
    //         status: undefined
    //     }
    // },
};

var moduleName = "entryReducer";

export default function (previousState = initialState, someAction) {
    console.log(moduleName + " called", previousState, someAction);
    var nextState = null;

    switch (someAction.type) {
        case CONSTANTS.ACTIONS.ADD_ENTRY:
            console.log('ADD_ENTRY', someAction.type, JSON.stringify(someAction.payload));

            nextState = Object.assign({}, previousState);
            // nextState.composition.text = "";
            // var entriesList = Object.assign([], nextState.entriesList);

            // entriesList.unshift(someAction.entry);
            // nextState['entriesList'] = entriesList;

            return nextState;

        case CONSTANTS.ACTIONS.SET_ENTRIES:
            console.log('SET_ENTRIES', someAction.type, JSON.stringify(someAction.payload));

            nextState = Object.assign({}, previousState);
            var entriesList = someAction.payload.map((elem) => {
                return {
                    text: elem.text,
                    timestamp: elem.timestamp
                };
            });
            nextState.entriesList = entriesList;

            return nextState;

        default:
            return previousState;
    }
}

// handleAction(CONSTANTS.ACTIONS.ADD_ENTRY)