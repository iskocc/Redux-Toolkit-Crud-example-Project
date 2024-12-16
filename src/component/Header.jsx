import React from "react";
import { Container, Navbar, Stack } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">
          <img
            alt=""
            src="https://w7.pngwing.com/pngs/41/323/png-transparent-searching-gps-logo-digital-marketing-web-development-search-engine-optimization-online-presence-management-computer-icons-location-map-pin-navigation-search-seo-icon-miscellaneous-web-thumbnail.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          REDUX TOOLKIT <span className="fw-bold">CRUD</span>
        </Navbar.Brand>
        <Stack direction="horizontal" gap={3} className="text-dark fs-5">
          <NavLink to="/">Crud</NavLink>
          <NavLink to="/counter">Sayaç</NavLink>
        </Stack>
      </Container>
    </Navbar>
  );
};

export default Header;
