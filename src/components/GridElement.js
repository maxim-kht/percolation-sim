import React, { Component } from 'react';
import PropTypes from 'prop-types';

const stateColorMap = {
  opened: '#FFFFFF',
  closed: '#000000',
  filled: '#00BFFF',
};

let gridElementStyle = {
  // border: '1px solid black',
  float: 'left',
  width: '10px',
  height: '10px',
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
