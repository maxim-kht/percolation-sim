export const SET_HEIGHT = 'SET_HEIGHT';
export const SET_WIDTH = 'SET_WIDTH';
export const RUN_SIMULATION = 'RUN_SIMULATION';
export const OPEN_RANDOM = 'OPEN_RANDOM';
export const CREATE_GRID = 'CREATE_GRID';
export const STOP_SIMULATION = 'STOP_SIMULATION';

export function setHeight(height) {
  return {
    type: SET_HEIGHT,
    height,
  };
}

export function setWidth(width) {
  return {
    type: SET_WIDTH,
    width,
  };
}

export function createGrid(height, width) {
  return {
    type: CREATE_GRID,
    width,
    height,
  };
}

export function runSimulation() {
  return {
    type: RUN_SIMULATION,
  };
}

export function openRandom() {
  return {
    type: OPEN_RANDOM,
  };
}

export function stopSimulation() {
  return {
    type: STOP_SIMULATION,
  };
}
