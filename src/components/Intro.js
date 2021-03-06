import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Intro extends Component {

  inputValid(value, min, max) {
    if (typeof value == 'string' && value.includes('.')) {
      return false;
    }
    return value >= min && value <= max;
  }

  render() {
    const {
      height,
      width,
      setHeight,
      setWidth,
      runSimulation,
      stopSimulation,
      isRunning,
    } = this.props;

    const min = 5;
    const max = 60;

    return (
      <div className="row">
        <div className="col-md-12">
          <div className="bs-component">
            <div className="jumbotron">
              <p>Percolation visualization based on <a href="http://coursera.cs.princeton.edu/algs4/assignments/percolation.html">assignment</a> from Coursera <a href="https://www.coursera.org/learn/algorithms-part1">Algorithms, Part I</a> course, implemented using React/Redux</p>
              <p><a href="https://github.com/maxim-kht/percolation-sim">View source code</a></p>
              <form className="form-horizontal">
                <fieldset>
                  <div className="form-group">
                    <label htmlFor="rows" className="col-md-2 control-label">Number of Rows</label>

                    <div className="col-md-10">
                      <input type="number"
                        className="form-control" name="rows" id="rows" min={min} max={max} step="1"
                        required
                        value={height}
                        onChange={(e) => setHeight(e.target.value)}
                        disabled={isRunning}
                       />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="cols" className="col-md-2 control-label">Number of Columns</label>

                    <div className="col-md-10">
                      <input type="number"
                        className="form-control" name="cols" id="cols" min={min} max={max} step="1"
                        required
                        value={width}
                        onChange={(e) => setWidth(e.target.value)}
                        disabled={isRunning}
                       />
                    </div>
                  </div>
                </fieldset>
                {!isRunning && <button
                  type="button"
                  className="btn btn-primary btn-lg"
                  onClick={() => runSimulation()}
                  disabled={!this.inputValid(height, min, max) || !this.inputValid(width, min, max)}
                >
                  Run Simulation
                </button>}
                {isRunning && <button
                  type="button"
                  className="btn btn-primary btn-lg"
                  onClick={() => stopSimulation()}
                >
                  Stop Simulation
                </button>}
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Intro.propTypes = {
  setHeight: PropTypes.func,
  setWidth: PropTypes.func,
  runSimulation: PropTypes.func,
  stopSimulation: PropTypes.func,
  isRunning: PropTypes.bool,
};

export default Intro;
