import React, { Component } from "react";
import { MDBContainer, MDBTabPane, MDBTabContent, MDBNav, MDBNavItem, MDBNavLink } from "mdbreact";

import './pbar.css';
import Crusader from "./classes/Crusader";
import Hunter from "./classes/Hunter";
import Exorcist from "./classes/Exorcist";
import Magus from "./classes/Magus";
import Navbar from "components/layout/Navbar";

  export default class Tree extends Component {
    state = {
      activeItem: "1"
    };

    toggle = tab => e => {
      if (this.state.activeItem !== tab) {
        this.setState({
          activeItem: tab
        });
      }
    };

    render() {
      return (
        <React.Fragment>
      <Navbar />
        <MDBContainer className="text-left mt-5 pt-5">
        <MDBNav className="nav-tabs">
          <MDBNavItem>
            <MDBNavLink link to="#" active={this.state.activeItem === "1"} onClick={this.toggle("1")} role="tab" >
              Crusader
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink link to="#" active={this.state.activeItem === "2"} onClick={this.toggle("2")} role="tab" >
              Hunter
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink link to="#" active={this.state.activeItem === "3"} onClick={this.toggle("3")} role="tab" >
              Exorcist
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink link to="#" active={this.state.activeItem === "4"} onClick={this.toggle("4")} role="tab" >
              Magus
            </MDBNavLink>
          </MDBNavItem>
        </MDBNav>
        <MDBTabContent activeItem={this.state.activeItem} >
          <MDBTabPane tabId="1" role="tabpanel">
            <Crusader />
          </MDBTabPane>
          <MDBTabPane tabId="2" role="tabpanel">
            <Hunter />
          </MDBTabPane>
          <MDBTabPane tabId="3" role="tabpanel">
            <Exorcist />
          </MDBTabPane>
          <MDBTabPane tabId="4" role="tabpanel">
            <Magus />
          </MDBTabPane>
        </MDBTabContent>
      </MDBContainer>
      </React.Fragment>
    );
  }
}