import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { createGrid, runSimulation, openRandom } from '../actions';

import Intro from '../components/Intro';
import Grid from '../components/Grid';

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props; 
    dispatch(createGrid(20, 20));
  }

  runSimulation() {
    const { dispatch } = this.props; 
    const { width, height } = this.props.simulation;

    if (this.intervalId) {
      clearInterval(this.intervalId);
    }

    dispatch(runSimulation());

    let count = 0;
    this.intervalId = setInterval(() => {
      dispatch(openRandom());
      count++;
      if (count > width * height) {
        clearInterval(this.intervalId);
      }
    }, 50);
  }

  render() {
    const { grid } = this.props;

    return (
      <div className="container">
        <Intro runSimulation={() => this.runSimulation()} />
        <Grid grid={grid} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { simulation, grid } = state;
  return { simulation, grid }
}

export default connect(mapStateToProps)(App);
