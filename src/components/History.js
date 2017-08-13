import React, { Component } from 'react';
import PropTypes from 'prop-types';

class History extends Component {

  render() {
    const { history } = this.props;

    return (
      <div className="col-md-5">
        <div className="panel panel-primary">
          <div className="panel-heading">History</div>
          <div className="panel-body">
            <ul>
              {history.map(item => (
                <li key={item.key}>
                  {item.height}x{item.width} grid, percolates at {item.count} open elements ({(item.count * 100 / (item.width * item.height)).toFixed(2)}%)
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

History.propTypes = {
  history: PropTypes.array
};

export default History;
