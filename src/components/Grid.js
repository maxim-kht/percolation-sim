import React, { Component } from 'react';
import PropTypes from 'prop-types';

import GridElement from './GridElement';

class Grid extends Component {

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
