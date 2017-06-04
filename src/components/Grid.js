import React, { Component } from 'react';
import PropTypes from 'prop-types';

const gridContainerStyle = {
  maxWidth: '600px',
  minWidth: '600px',
};

const gridCellStyle = {
  border: '1px dashed black',
  float: 'left',
  width: '30px',
  height: '30px',
};

const gridCellFilledStyle = {
  ...gridCellStyle,
  background: '#5d90e2',
}

class Grid extends Component {

  render() {
    const grids = [];

    for (let i = 0; i < 400; i++) {
      grids.push(
        <div key={i} style={gridCellFilledStyle} />
      );
    }

    return (
      <div className="row">
        <div className="col-md-12">
          <div className="panel panel-primary">
            <div className="panel-heading">Simulation</div>
            <div className="panel-body">
              <div className="grid-container" style={gridContainerStyle}>
                {grids}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Grid;
