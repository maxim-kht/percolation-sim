import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Intro extends Component {

  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <div className="bs-component">
            <div className="jumbotron">
              <h1>Привет &#128522;</h1>

              <p>Здесь находится вступительный текст.</p>
              <p>А здесь есть еще больше текста!</p>

              Number of rows <input type="number" name="rows" />
              Number of columns <input type="number" name="cols" />
              <a id="test-button" className="btn btn-primary btn-lg" onClick={(e) => console.log(e)}>Run Simulation</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Intro;