import React, { useState } from "react";
import styled from "styled-components";

import {
  ShoppingCartOutlined,
  AccountCircleOutlined,
  FavoriteBorderOutlined,
  Menu,
} from "@material-ui/icons";

import { Badge } from "@material-ui/core";
import './hover.css';

import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
  MDBNavbarNav,
} from "mdb-react-ui-kit";
import MyButton from "./MyButton";
import logo from "../images/logo.png";
import "./nav.css";

const Logo = styled.img`
  max-height: 60px;
  width: 100%;
  height: auto;
`;

const NavbarComponent = () => {
  const [showNavNoTogglerSecond, setShowNavNoTogglerSecond] = useState(false);

  return (
    <>
      <MDBNavbar expand="lg" bgColor="dark">
        <MDBContainer>
          <MDBNavbarBrand href="#">
            <Logo src={logo} />
          </MDBNavbarBrand>
          <MDBNavbarToggler
            type="button"
            data-target="#navbar"
            aria-controls="navbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setShowNavNoTogglerSecond(!showNavNoTogglerSecond)}
          >
            <Menu sx={{ color: "white" }} fontSize="large" />
          </MDBNavbarToggler>
          <MDBCollapse navbar show={showNavNoTogglerSecond}>
            <MDBNavbarNav className="mr-auto mb-2 mb-lg-0">
              <MDBNavbarItem>
                <MDBNavbarLink href="#">MEN</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="#">WOMEN</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="#">SALE</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="#">BRANDS</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="#">HELP CENTER</MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
            <form className="d-flex input-group w-100">
              <input
                type="search"
                className="form-control"
                placeholder="Type query"
                aria-label="Search"
              />
              <MyButton>Search</MyButton>
            </form>
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current="page" href="#">
                <AccountCircleOutlined className="hvr-grow" fontSize="large" />
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current="page" href="#">
                <FavoriteBorderOutlined className="hvr-grow"  fontSize="large" />
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current="page" href="#">
                <Badge  className="hvr-grow"  badgeContent={2}  color="primary">
                  <ShoppingCartOutlined className="hvr-grow"  fontSize="large" />
                </Badge>
              </MDBNavbarLink>
            </MDBNavbarItem>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
};

export default NavbarComponent;
