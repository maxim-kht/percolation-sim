import { combineReducers } from 'redux';

import { RUN_SIMULATION, OPEN_RANDOM, CREATE_GRID } from './actions';
import { populateNeighbors, openElement, checkPercolation } from './utils';

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
      let key = 1;
      for (let j = 0; j < action.height; j++) {
        for (let i = 0; i < action.width; i++) {
          newState.push({ key, i, j, unionId: key, state: 'filled' });
          key++;
        }
      }
      populateNeighbors(newState, action.height, action.width);
      return newState;
    case RUN_SIMULATION:
      return state.map(elem => {
        return { ...elem, state: 'closed' };
      });
    case OPEN_RANDOM:
      const closedKeys = state.filter(elem => elem.state === 'closed')
                              .map(elem => elem.key);
      const randomKey = closedKeys[Math.floor(Math.random() * closedKeys.length)];
      let newState = { ...state };
      newState = openElement(newState, randomKey);
      return checkPercolation(newState);
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
