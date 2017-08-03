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
    } = this.props;

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
                      className="form-control" name="rows" id="rows" min="5" max="60" step="1"
                      required
                      value={height}
                      onChange={(e) => setHeight(e.target.value)}
                     />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="cols" className="col-md-2 control-label">Number of Columns</label>

                  <div className="col-md-10">
                    <input type="number"
                      className="form-control" name="cols" id="cols" min="5" max="60" step="1"
                      required
                      value={width}
                      onChange={(e) => setWidth(e.target.value)}
                     />
                  </div>
                </div>
                </fieldset>
              <button
                id="test-button"
                type="button"
                className="btn btn-primary btn-lg"
                onClick={() => runSimulation()}
              >
                Run Simulation
              </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Intro;
