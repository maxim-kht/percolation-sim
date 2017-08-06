import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Intro extends Component {

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
    const max = 50;

    return (
      <div className="row">
        <div className="col-md-12">
          <div className="bs-component">
            <div className="jumbotron">
              <h1>Привет &#128522;</h1>

              <p>Здесь находится вступительный текст.</p>
              <p>А здесь есть еще больше текста!</p>
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
                  disabled={height > max || width > max || height < min || width < min}
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

export default Intro;
