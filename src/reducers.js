import { combineReducers } from 'redux';
import {
  SET_HEIGHT,
  SET_WIDTH,
  RUN_SIMULATION,
  OPEN_RANDOM,
  CREATE_GRID,
} from './actions';
// import { openRandom } from './utils';

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
    case RUN_SIMULATION:
      return state.map(elem => {
        return {...elem, state: 'closed'};
      });
    case OPEN_RANDOM:
      const closedKeys = state.filter(elem => elem.state === 'closed')
                              .map(elem => elem.key);
      const randomKey = closedKeys[Math.floor(Math.random() * closedKeys.length)];
      return state.map(elem => {
        if (elem.key === randomKey) {
          return { ...elem, state: 'opened'};
        } else {
          return elem;
        }
      });
    default:
      return state;    
  }
}

const rootReducer = combineReducers({
  simulation,
  grid
});

export default rootReducer;
