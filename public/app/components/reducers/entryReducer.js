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

var MODULE_NAME = "entryReducer";

const mapDBEntrytoStoreObj = (elem) => {
    const functionName = "mapDBEntrytoStoreObj";
    console.log(MODULE_NAME, functionName + " called", elem);

    if (elem.title === null || elem.title === undefined || elem.title.length === 0) {
        const formattedDate = new Date(elem.timestamp).toString();
        elem.title = formattedDate;
    }

    // TODO: Would ideally not tightly couple the mongoose object to the frontend
    // However, any formatting here would also have to be replicated when loading the reducer in index.js
    // var result = {
    //     id: elem._id,
    //     text: elem.text,
    //     title: elem.title,
    //     timestamp: elem.timestamp
    // };
    // console.log(MODULE_NAME, functionName, "Result", result);
    // return result;

    return elem;
};

export default function (previousState = initialState, someAction) {
    console.log(MODULE_NAME + " called", previousState, someAction);

    var nextState = null;
    var entriesList = null;
    var element = null;

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

            element = mapDBEntrytoStoreObj(someAction.payload);

            nextState = Object.assign({}, previousState);
            entriesList = Object.assign([], nextState.entriesList).filter((elemItr) => elemItr._id !== element._id);
            nextState.entriesList = entriesList;

            return nextState;

        case CONSTANTS.ACTIONS.UPDATE_ENTRY:
            console.log('UPDATE_ENTRY', someAction.type, JSON.stringify(someAction.payload));

            nextState = Object.assign({}, previousState);
            entriesList = Object.assign([], nextState.entriesList);
            element = mapDBEntrytoStoreObj(someAction.payload);

            let elementToUpdateIndex = entriesList.findIndex((elemItr) => element._id === elemItr._id);
            if (elementToUpdateIndex < 0) {
                console.log("Error: Could not find element to update", elementToUpdateIndex, element, entriesList);
                return nextState;
            }

            entriesList[elementToUpdateIndex] = element;
            nextState.entriesList = entriesList;

            return nextState;

        default:
            console.log('DEFAULT', someAction.type, JSON.stringify(someAction.payload));
            return previousState;
    }
}

// handleAction(CONSTANTS.ACTIONS.ADD_ENTRY)