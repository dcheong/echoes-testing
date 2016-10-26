import { ADD_STEP, REMOVE_STEP } from '../actions/steps'
import update from 'react-addons-update';

const initialState = []

export default function steps(state = initialState, action) {
  switch (action.type) {
    case ADD_STEP:
      return [
        ...state,
        { id: state.length, content: action.content }
      ]
    case REMOVE_STEP:
      return update(state, {$splice: [[action.id, 1]]})
    default:
      return state
  }
}
