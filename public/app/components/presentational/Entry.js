import react, {Component} from 'react'
import { connect } from 'react-redux'

import store from '../stores/store'
import CONSTANTS from '../constants/constants'
import actions from '../actions/actions'
import api from '../utils/APIManager'

class Entry extends Component {
    render() {
        return (
            <div>
                entry
            </div>
        )
    }
}

var mapStateToProps = function(state) {
    return {
        entries: state.entryReducer.entriesList
    }
}

export default Entry
