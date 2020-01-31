import React, { Component } from 'react';
import News from './News';

class Dashboard extends Component {
  render() {
    return(
    <div className="dashboard container">
      <div className="row">
        <div className="col s12 m8">
          <p>Index</p>
        </div>
        <div className="col s12 m3 offset-m1">
          <News />
        </div>
      </div>
    </div>
    )
  }
}

export default Dashboard;