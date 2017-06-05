import React, { Component } from 'react';
import PropTypes from 'prop-types';

const stateColorMap = {
  opened: '#FFFFFF',
  closed: '#000000',
  filled: '#5d90e2'
};

const gridElementStyle = {
  border: '1px dashed black',
  float: 'left',
  width: '30px',
  height: '30px',
};

class GridElement extends Component {

  render() {
    const { state } = this.props;
    gridElementStyle.background = stateColorMap[state];

    return (
      <div style={gridElementStyle}></div>
    );
  }
}

export default GridElement;
