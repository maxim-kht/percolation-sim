import { combineReducers } from 'redux';
import {
  SET_SIMULATION_HEIGHT,
  SET_SIMULATION_WIDTH,
  RUN_SIMULATION,
  OPEN_CELL,
} from './actions';


function placeholderReducer(state = {}, action) {
  return state;
}

const rootReducer = combineReducers({
  placeholderReducer
});

export default rootReducer;
