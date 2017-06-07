import { combineReducers } from 'redux';

import { RUN_SIMULATION, OPEN_RANDOM, CREATE_GRID } from './actions';
import { createGrid, populateNeighbors, openElement, checkPercolation } from './utils';

const defaultSimulationData = {
  height: 40,
  width: 40,
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
  let newState;

  switch (action.type) {
    case CREATE_GRID:
      newState = createGrid(action.height, action.width);
      newState = populateNeighbors(newState, action.height, action.width);
      return newState;
    case RUN_SIMULATION:
      return state.map(elem => {
        if (elem.key === 0) {
          return { ...elem, state: 'filled'};
        } else if (elem.key === state.length - 1) {
          return { ...elem, state: 'opened' };
        } else {
          return { ...elem, state: 'closed' };
        }
      });
    case OPEN_RANDOM:
      let closedElements = state.filter(elem => elem.state === 'closed')
      let randomElement = closedElements[Math.floor(Math.random() * closedElements.length)];
      newState = [...state];
      newState = openElement(newState, randomElement);
      return checkPercolation(newState);
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  simulation,
  grid
});

export default rootReducer;
