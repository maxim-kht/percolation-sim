import React, { Component } from 'react';
import PropTypes from 'prop-types';

import GridElement from './GridElement';

const gridContainerStyle = {
  maxWidth: '200px',
  minWidth: '200px',
};

class Grid extends Component {

  render() {
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
