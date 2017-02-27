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
    if (elem.title === null || elem.title === undefined || elem.title.length === 0) {
        const formattedDate = new Date(elem.timestamp).toDateString();
        elem.title = formattedDate;
    }

    return {
        id: elem._id,
        text: elem.text,
        title: elem.title,
        timestamp: elem.timestamp
    };
};

export default function (previousState = initialState, someAction) {
    console.log(moduleName + " called", previousState, someAction);
    var nextState = null;
    var entriesList = null;

    switch (someAction.type) {
        case CONSTANTS.ACTIONS.ADD_ENTRY:
            console.log('ADD_ENTRY', someAction.type, JSON.stringify(someAction.payload));

            nextState = Object.assign({}, previousState);
            entriesList = Object.assign([], nextState.entriesList);
            entriesList.unshift(mapDBEntrytoStoreObj(someAction.payload));
            nextState.entriesList = entriesList;

            return nextState;

        case CONSTANTS.ACTIONS.SET_ENTRIES:
            console.log('SET_ENTRIES', someAction.type, JSON.stringify(someAction.payload));

            nextState = Object.assign({}, previousState);
            entriesList = someAction.payload.map(mapDBEntrytoStoreObj);
            nextState.entriesList = entriesList;

            return nextState;

        case CONSTANTS.ACTIONS.REMOVE_ENTRY:
            console.log('REMOVE_ENTRY', someAction.type, JSON.stringify(someAction.payload));

            const element = mapDBEntrytoStoreObj(someAction.payload);

            nextState = Object.assign({}, previousState);
            entriesList = Object.assign([], nextState.entriesList).filter((elem) => elem.id !== element.id);
            nextState.entriesList = entriesList;

            return nextState;

        default:
            return previousState;
    }
}

// handleAction(CONSTANTS.ACTIONS.ADD_ENTRY)