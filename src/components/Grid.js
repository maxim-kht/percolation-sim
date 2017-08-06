import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { gridPercolates } from '../utils';

import GridElement from './GridElement';

class Grid extends Component {

  componentDidUpdate() {
    const { height, width, grid, addHistoryItem, percolationStatSent } = this.props;
    const openState = grid.filter(element => element.state !== 'closed' && element.type !== 'virtual').length === height * width;

    if (!openState && !percolationStatSent && grid.length && gridPercolates(grid)) {
      const openElementsCount = grid.filter(element => element.state !== 'closed' && element.type !== 'virtual' ).length;
      addHistoryItem(height, width, openElementsCount);
    }
  }

  render() {
    const { elementSize, gridWidth } = this.props;
    const gridContainerStyle = {
      maxWidth: gridWidth + 'px',
      minWidth: gridWidth + 'px',
    };
    const { grid } = this.props;

    return (
      <div className="row">
        <div className="col-md-12">
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
      </div>
    );
  }
}

export default Grid;
