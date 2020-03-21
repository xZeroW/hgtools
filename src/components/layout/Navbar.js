import React from 'react';
import { NavLink } from 'react-router-dom';

import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBIcon, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBBtn } from 'mdbreact';

import { authenticationService } from '_services/auth.service';
import { history } from '_helpers/history';

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: authenticationService.currentUserValue,
      collapse: false
    };

    this.handleToggle = this.handleToggle.bind(this);
  }

  logout() {
    authenticationService.logout();
    history.go(0);
  }

  componentDidMount() {
    authenticationService.currentUser.subscribe(x => this.setState({ currentUser: x }));
  }

  handleToggle(){
    this.setState({
      collapse: !this.state.collapse,
    });
  }

  render(){
    const { currentUser } = this.state;
    return (
      <header>
        <MDBNavbar className="bg-primary" dark expand="md" scrolling fixed="top">
          <MDBNavbarBrand href="/">
            <strong>HGTools</strong>
          </MDBNavbarBrand>
          <MDBNavbarToggler onClick={ this.handleToggle } />
          <MDBCollapse isOpen = { this.state.collapse } navbar>
            <MDBNavbarNav left>
              <MDBNavItem active>
                <NavLink className="nav-link" to="/">Home</NavLink>
              </MDBNavItem>
              <MDBNavItem>
                <NavLink className="nav-link" to="/builds">Builds</NavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBDropdown>
                  <MDBDropdownToggle nav caret>
                    <span className="mr-2">Tools</span>
                  </MDBDropdownToggle>
                  <MDBDropdownMenu>
                    <MDBDropdownItem href="/stats">Status Calculator</MDBDropdownItem>
                    <MDBDropdownItem href="/tree">Skill Tree</MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavItem>
            </MDBNavbarNav>
            { currentUser ? 
              <MDBNavbarNav right>
                <MDBNavItem>
                  <MDBNavLink to="#"><MDBIcon fab icon="facebook-f" /></MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="#"><MDBIcon fab icon="twitter" /></MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBDropdown>
                    <MDBDropdownToggle nav>
                      <span className="mr-2">{currentUser.username}</span>
                      <MDBIcon icon="user" />
                    </MDBDropdownToggle>
                    <MDBDropdownMenu>
                      <MDBDropdownItem href="#">Profile</MDBDropdownItem>
                      <MDBDropdownItem divider />
                      <MDBDropdownItem href="/builds/create">New build</MDBDropdownItem>
                      <MDBDropdownItem>My builds</MDBDropdownItem>
                      <MDBDropdownItem divider />
                      <MDBDropdownItem onClick={this.logout}>Logout</MDBDropdownItem>
                    </MDBDropdownMenu>
                  </MDBDropdown>
                </MDBNavItem>
              </MDBNavbarNav>
              :
              <MDBNavbarNav right>
                <MDBNavItem>
                  <MDBBtn size="sm" color="primary" href="/register">
                    <MDBIcon className="mr-2" icon="user-plus" />
                    Register
                  </MDBBtn>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBBtn size="sm" color="primary" href="/login">
                    <MDBIcon className="mr-2" icon="user" />
                    Login
                  </MDBBtn>
                </MDBNavItem>
              </MDBNavbarNav>}
          </MDBCollapse>
        </MDBNavbar>
      </header>
    );
  }
}
