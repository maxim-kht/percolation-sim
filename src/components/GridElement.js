import React, { Component } from 'react';
import PropTypes from 'prop-types';

const stateColorMap = {
  opened: '#FFFFFF',
  closed: '#000000',
  filled: '#9bfaff',
};

let gridElementStyle = {
  // border: '1px solid black',
  float: 'left',
  width: '20px',
  height: '20px',
};

class GridElement extends Component {

  render() {
    const { state } = this.props;
    gridElementStyle = {
      ...gridElementStyle,
      background: stateColorMap[state]
    };

    return (
      <div style={gridElementStyle}></div>
    );
  }
}

export default GridElement;
