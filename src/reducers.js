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
  let newState;

  switch (action.type) {
    case CREATE_GRID:
      newState = [];
      // First element, top virtual emenent
      newState.push({
        key: 0,
        unionId: 0,
        state: 'filled',
        type: 'virtual',
      });
      // Grid elements
      let key = 1;
      for (let i = 0; i < action.height; i++) {
        for (let j = 0; j < action.width; j++) {
          newState.push({ key, i, j, state: 'filled' });
          key++;
        }
      }
      // Last element, bottom virtual element
      newState.push({
        key: key,
        unionId: key,
        state: 'opened',
        type: 'virtual',
      });

      populateNeighbors(newState, action.height, action.width);
      return newState;
    case RUN_SIMULATION:
      return state.map(elem => {
        if (elem.key === 0) {
          return { ...elem, unionId: elem.key, state: 'filled'};
        } else if (elem.key === state.length - 1) {
          return { ...elem, unionId: elem.key, state: 'opened' };
        } else {
          return { ...elem, unionId: elem.key, state: 'closed' };
        }
      });
    case OPEN_RANDOM:
      const closedElements = state.filter(elem => elem.state === 'closed')
      const randomElement = closedElements[Math.floor(Math.random() * closedElements.length)];
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
