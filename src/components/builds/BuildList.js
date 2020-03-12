import React from 'react';
import Axios from 'axios';
import ReactLoading from 'react-loading';
import { Link } from 'react-router-dom';
import TruncateString from 'react-truncate-string';


import { config } from 'config';

export default class BuildList extends React.Component {
  constructor()  {
    super();
    this.state = {
      isLoading: true,
      data: []
    };
  }

  componentDidMount() {
    Axios.get( config.API_URL + '/builds')
      .then((response) => {
        // handle success
        this.setState({ isLoading: false, data: response.data  });
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }
  render(){
    return(
      <React.Fragment>
        
        {this.state.isLoading ? <ReactLoading type='spin' color="grey" /> : 
          (this.state.data.map(build =>
            <div key={build.id} className="col-lg-6">
              <div  className="card mb-4 py-3 border-left-primary">
                <div className="card-body">
                  <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                      <div className="h5 font-weight-bold text-gray-800">
                        <Link to={'/builds/' + build.id}>
                          <TruncateString text={build.title} truncateAt={100} />
                        </Link>
                      </div>
                    </div>
                    <div className="col-auto">
                      <i className="fas fa-user fa-2x text-gray-300"></i>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          ))}
        
      </React.Fragment>
    );
  }
}