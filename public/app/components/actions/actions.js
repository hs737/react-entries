import CONSTANTS from '../constants/constants'

export default {
    addEntry: function(entryDetails) {
        console.log("addEntry called", JSON.stringify(entryDetails))
        return {
            type: CONSTANTS.ACTIONS.ADD_ENTRY,
            entry: entryDetails
        }
    },

    getEntries: function(entriesList) {
        console.log("getEntries called", JSON.stringify(entriesList))
        return {
            type: CONSTANTS.ACTIONS.GET_ENTRIES,
            entries: entriesList
        }
    }
}
