import React, { Component } from 'react';
import PropTypes from 'prop-types';

class GridElement extends Component {

  render() {
    const { state, size } = this.props;
    const stateColorMap = {
      opened: '#FFFFFF',
      closed: '#000000',
      filled: '#00BFFF',
    };

    let gridElementStyle = {
      float: 'left',
      width: size + 'px',
      height: size + 'px',
    };

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
