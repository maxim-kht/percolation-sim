import { combineReducers } from 'redux';

import { 
  SET_HEIGHT, SET_WIDTH, RUN_SIMULATION, OPEN_RANDOM,
  CREATE_GRID, STOP_SIMULATION, ADD_HISTORY_ITEM
} from './actions';
import { createGrid, populateNeighbors, openElement, checkPercolationAndFill } from './utils';

const defaultSimulationData = {
  elementSize: 10,
  isRunning: false,
  percolates: undefined,
  percolatesOnSite: undefined,
  percolationStatSent: false,
};

function simulation(state = defaultSimulationData, action) {
  switch (action.type) {
    case CREATE_GRID:
      return { ...state, gridWidth: state.elementSize * action.width };
    case RUN_SIMULATION:
      return { ...state, isRunning: true };
    case STOP_SIMULATION:
      return { ...state, isRunning: false, percolationStatSent: false };
    case ADD_HISTORY_ITEM:
      return { ...state, percolationStatSent: true };
    default:
      return state;
  }
  return state;
}

const defaultInputData = {
  height: 30,
  width: 30,
};

function inputData(state = defaultInputData, action) {
  switch (action.type) {
    case SET_HEIGHT:
      return { ...state, height: action.height };
    case SET_WIDTH:
      return { ...state, width: action.width };
    default:
      return state;
  }
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
      return checkPercolationAndFill(newState);
    default:
      return state;
  }
}

function history(state = [], action) {
  switch (action.type) {
    case ADD_HISTORY_ITEM:
      return [
        ...state,
        {
          key: state.length + 1,
          height: action.height,
          width: action.width,
          count: action.count 
        }
      ];
    default:
      return state;    
  }
}

const rootReducer = combineReducers({
  inputData,
  simulation,
  grid,
  history,
});

export default rootReducer;
