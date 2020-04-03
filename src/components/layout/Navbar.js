import React, { useState } from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBIcon, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBBtn, MDBNavLink } from 'mdbreact';

import ThemeSwitch from './ThemeSwitch';
import { authenticationService } from '_services/auth.service';
import { history } from '_helpers/history';

export default function Navbar() {
  const [currentUser] = useState(authenticationService.currentUserValue);
  const [collapse, setCollapse] = useState(false);

  function logout() {
    authenticationService.logout();
    history.go(0);
  }

  function handleToggle() {
    setCollapse(!collapse);
  }
    
  return (
    <header>
      <MDBNavbar className="top-nav-collapse" fixed="top" dark expand="md">
        <MDBNavbarBrand href="/">
          <strong>HGTools</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={() => handleToggle } />
        <MDBCollapse isOpen = { collapse } navbar>
          <MDBNavbarNav left>
            <MDBNavItem>
              <MDBNavLink to="/">Home</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/builds">Builds</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <span className="mr-2">Tools</span>
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem href="/stats">Status Calculator</MDBDropdownItem>
                  <MDBDropdownItem href="/tree">Skill Tree</MDBDropdownItem>
                  <MDBDropdownItem href="/ceditor">Character Editor</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
          </MDBNavbarNav>
          <MDBNavbarNav right>
            { currentUser ? 
              <MDBNavItem>
                <MDBDropdown>
                  <MDBDropdownToggle nav>
                    <span className="mr-2">{currentUser.username}</span>
                    <MDBIcon icon="user" />
                  </MDBDropdownToggle>
                  <MDBDropdownMenu>
                    <MDBDropdownItem href="#">Profile</MDBDropdownItem>
                    <MDBDropdownItem href="/builds/create">New build</MDBDropdownItem>
                    <MDBDropdownItem href="#">My builds</MDBDropdownItem>
                    <ThemeSwitch />
                    <MDBDropdownItem href="#" onClick={logout}>Logout</MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavItem>
              :
              <>
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
              </>}
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    </header>
  );
}
