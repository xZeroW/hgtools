import React from 'react';
import Axios from 'axios';

export default class Register extends React.Component {
  state = {
    username: '',
    email: '',
    password: ''
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }


  handleSubmit= (e) => {
    e.preventDefault();
    const user = this.state;
    console.log(user);
    Axios({
      method: 'post',
      url: 'http://localhost:3600/users',
      data: { ...user }
    }).then(res => {
      console.log(res);
      console.log(res.data);
    });
  }

  render(){
    return (
      <div className="container">
        <div className="register">
          <div className="row justify-content-center">
            <div className="col-lg-5">
              <div className="card bg-secondary shadow border">
                <div className="card-body px-lg-5 py-lg-5 bg-white">
                  <form onSubmit={this.handleSubmit} >
                    <div className="form-group">
                      <div className="input-group input-group-alternative mb-3">
                        <div className="input-group-prepend">
                          <span className="input-group-text"><i className="ni ni-hat-3"></i></span>
                        </div>
                        <input onChange={this.handleChange}  className="form-control" placeholder="Username" type="text" name="username" value={this.state.username} />
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="input-group input-group-alternative mb-3">
                        <div className="input-group-prepend">
                          <span className="input-group-text"><i className="ni ni-email-83"></i></span>
                        </div>
                        <input onChange={this.handleChange}  className="form-control" placeholder="Email" type="email" name="email" value={this.state.email} />
                      </div>
                    </div>
                    <div className="form-group focused">
                      <div className="input-group input-group-alternative">
                        <div className="input-group-prepend">
                          <span className="input-group-text"><i className="ni ni-lock-circle-open"></i></span>
                        </div>
                        <input onChange={this.handleChange} className="form-control" placeholder="Password" type="password" name="password" value={this.state.password} />
                      </div>
                    </div>
                    <div className="text-center">
                      <button type="submit" className="btn btn-primary mt-4">Create account</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      );
    }
  }