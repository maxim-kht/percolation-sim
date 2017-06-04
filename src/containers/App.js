import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { createGrid } from '../actions';

import Intro from '../components/Intro';
import Grid from '../components/Grid';

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props; 
    dispatch(createGrid(20, 20));
  }

  render() {
    const { grid } = this.props;

    return (
      <div className="container">
        <Intro />
        <Grid grid={grid} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { grid } = state;

  return { grid }
}

export default connect(mapStateToProps)(App);
