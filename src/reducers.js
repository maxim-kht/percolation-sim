import { combineReducers } from 'redux';

import { RUN_SIMULATION, OPEN_RANDOM, CREATE_GRID } from './actions';
import { populateNeighbors, openElement, checkPercolation } from './utils';

const defaultSimulationData = {
  height: 10,
  width: 10,
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
      for (let j = 0; j < action.height; j++) {
        for (let i = 0; i < action.width; i++) {
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
          return { ...elem, unionId: elem.key, state: 'opened'};
        } else {
          return { ...elem, unionId: elem.key, state: 'closed' };
        }
      });
    case OPEN_RANDOM:
      const closedKeys = state.filter(elem => elem.state === 'closed')
                              .map(elem => elem.key);
      const randomKey = closedKeys[Math.floor(Math.random() * closedKeys.length)];
      newState = [...state];
      newState = openElement(newState, randomKey);
      newState = checkPercolation(newState);
      // console.log(newState.map(el => ( el.state + ' ' + el.key + ' ' + el.unionId)))
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
