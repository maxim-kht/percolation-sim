import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { 
  setHeight, setWidth, createGrid, runSimulation, openRandom,
  stopSimulation, addHistoryItem
} from '../actions';

import Intro from '../components/Intro';
import Grid from '../components/Grid';

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    const { height, width } = this.props.inputData;
    dispatch(createGrid(height, width));
  }

  setHeight(height) {
    const { dispatch } = this.props; 
    dispatch(setHeight(height));
  }

  setWidth(width) {
    const { dispatch } = this.props; 
    dispatch(setWidth(width));
  }

  runSimulation() {
    const { dispatch } = this.props; 
    const { height, width, interval } = this.props.inputData;

    if (this.intervalId) {
      clearInterval(this.intervalId);
    }

    dispatch(createGrid(height, width));
    dispatch(runSimulation());

    let count = 0;
    this.intervalId = setInterval(() => {
      dispatch(openRandom());
      count++;
      if (count === width * height) {
        clearInterval(this.intervalId);
        dispatch(stopSimulation());
      }
    }, 50);
  }

  stopSimulation() {
    const { dispatch } = this.props;
    const { height, width } = this.props.inputData;

    clearInterval(this.intervalId);
    dispatch(stopSimulation());
    dispatch(createGrid(height, width));
  }

  addHistoryItem(height, weight, count) {
    const { dispatch } = this.props;
    dispatch(addHistoryItem(height, weight, count));
  }

  render() {
    const { grid } = this.props;
    const { height, width, interval } = this.props.inputData;
    const { elementSize, gridWidth, isRunning, percolationStatSent } = this.props.simulation;

    return (
      <div className="container">
        <Intro
          height={height}
          width={width}
          setHeight={height => this.setHeight(height)}
          setWidth={width => this.setWidth(width)}
          runSimulation={() => this.runSimulation()}
          stopSimulation={() => this.stopSimulation()}
          isRunning={isRunning}
        />
        <Grid
          height={height}
          width={width}
          grid={grid}
          elementSize={elementSize}
          gridWidth={gridWidth}
          addHistoryItem={(height, weight, count) => this.addHistoryItem(height, weight, count)}
          percolationStatSent={percolationStatSent}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { inputData, simulation, grid } = state;
  return { inputData, simulation, grid }
}

export default connect(mapStateToProps)(App);
