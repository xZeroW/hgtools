import React from 'react';
import Axios from 'axios';

import { config } from 'config';

export default class BuildList extends React.Component {
  constructor()  {
    super();
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    Axios.get( config.API_URL + '/builds')
      .then((response) => {
        // handle success
        this.setState({ data: response.data });
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }
  render(){
    return(
      <React.Fragment>
        <div>
          {this.state.data.map((build =>
            <div key={build.id}>
              <p>Title: {build.title}</p>
              <p>Con: {build.content}</p>
            </div>)
          )}
        </div>
      </React.Fragment>
    );
  }
}