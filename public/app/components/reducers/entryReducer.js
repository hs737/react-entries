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

const mapDBEntrytoStoreObj = (elem) => {
    return {
        text: elem.text,
        timestamp: elem.timestamp
    };
};

export default function (previousState = initialState, someAction) {
    console.log(moduleName + " called", previousState, someAction);
    var nextState = null;

    switch (someAction.type) {
        case CONSTANTS.ACTIONS.ADD_ENTRY:
            console.log('ADD_ENTRY', someAction.type, JSON.stringify(someAction.payload));

            nextState = Object.assign({}, previousState);
            var entriesList = Object.assign([], nextState.entriesList);
            entriesList.unshift(mapDBEntrytoStoreObj(someAction.payload));
            nextState['entriesList'] = entriesList;

            return nextState;

        case CONSTANTS.ACTIONS.SET_ENTRIES:
            console.log('SET_ENTRIES', someAction.type, JSON.stringify(someAction.payload));

            nextState = Object.assign({}, previousState);
            var entriesList = someAction.payload.map(mapDBEntrytoStoreObj);
            nextState.entriesList = entriesList;

            return nextState;

        default:
            return previousState;
    }
}

// handleAction(CONSTANTS.ACTIONS.ADD_ENTRY)