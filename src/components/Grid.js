import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { gridPercolates } from '../utils';

import GridElement from './GridElement';

class Grid extends Component {

  componentDidUpdate() {
    const { height, width, grid, addHistoryItem, percolationStatSent, isRunning } = this.props;

    if (isRunning && !percolationStatSent && grid.length && gridPercolates(grid)) {
      const openElementsCount = grid.filter(element => element.state !== 'closed' && element.type !== 'virtual' ).length;
      addHistoryItem(height, width, openElementsCount);
    }
  }

  render() {
    const { grid, elementSize, gridWidth } = this.props;
    const gridContainerStyle = {
      maxWidth: gridWidth + 'px',
      minWidth: gridWidth + 'px',
    };

    return (
      <div className="col-md-7">
        <div className="panel panel-primary">
          <div className="panel-heading">Simulation</div>
          <div className="panel-body">
            <div className="grid-container" style={gridContainerStyle}>
              {grid.filter(element => element.type !== 'virtual')
                   .map(element => (
                    <GridElement
                      key={element.key}
                      state={element.state}
                      size={elementSize}
                    />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Grid.propTypes = {
  grid: PropTypes.array,
  elementSize: PropTypes.number,
  gridWidth: PropTypes.number,
  addHistoryItem: PropTypes.func,
  percolationStatSent: PropTypes.bool,
  isRunning: PropTypes.bool,
};

export default Grid;
