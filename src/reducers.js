import { combineReducers } from 'redux';
import {
  SET_HEIGHT,
  SET_WIDTH,
  RUN_SIMULATION,
  OPEN_RANDOM,
  CREATE_GRID,
} from './actions';

const defaultSimulationData = {
  height: 20,
  width: 20,
  isRunning: false,
  isComplete: false,
  percolates: undefined,
  percolatesOnSite: undefined,
  openElements: 400,
};

function simulation(state = defaultSimulationData, action) {
  return state;
}

function grid(state = [], action) {
  switch (action.type) {
    case CREATE_GRID:
      let newState = [];
      let key = 0;
      for (let j = 0; j < action.height; j++) {
        for (let i = 0; i < action.width; i++) {
          newState.push({ key, i, j, state: 'filled' });
          key++;
        }
      }
      return newState;
    default:
      return state;    
  }
}

const rootReducer = combineReducers({
  simulation,
  grid
});

export default rootReducer;
