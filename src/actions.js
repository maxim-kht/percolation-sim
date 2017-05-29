export const SET_SIMULATION_HEIGHT = 'SET_SIMULATION_HEIGHT';
export const SET_SIMULATION_WIDTH = 'SET_SIMULATION_WIDTH';
export const RUN_SIMULATION = 'RUN_SIMULATION';
export const OPEN_CELL = 'OPEN_CELL';

export function setSimulationHeight(height) {
  return {
    type: SET_SIMULATION_HEIGHT,
    height,
  };
}

export function setSimulationWidth(width) {
  return {
    type: SET_SIMULATION_WIDTH,
    width,
  };
}

export function runSumulation() {
  return {
    type: RUN_SIMULATION,
  };
}

export function openCell(yCoordinate, xCoordinate) {
  return {
    type: OPEN_CELL,
    yCoordinate,
    xCoordinate,
  };
}
