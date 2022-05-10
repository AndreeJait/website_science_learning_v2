import React from "react";
import { connect } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import Constant from "../../../constants";
import { buildClass } from "../../../helpers/classHelper";
import { reduxDispatch, reduxState } from "../../../helpers/reduxHelper";
import { Container, Nav, Navbar as NavbarB } from "react-bootstrap";
/**
 *
 * @param {{
 * navbar: [{
 * name: string, link: string}], props: any}} param0
 * @returns
 */
function Navbar({ navbar, isTransparent, ...props }) {
  const location = useLocation();
  return (
    <NavbarB
      collapseOnSelect
      expand="lg"
      className={buildClass({
        "shadow-sm bg-white": !(location.pathname === "/"),
        "absolute": location.pathname === "/" ,
      })}
    >
      <Container fluid>
        <Link to={"/"} className="navbar-brand">
          <div className="navbar-icon rounded-circle">
            <img src={Constant.LOGO} alt="" />
          </div>
        </Link>
        <NavbarB.Toggle aria-controls="basic-navbar-nav" />
        <NavbarB.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto mt-md-0 mt-3 d-flex gap-3">
            {navbar.map((item, index) => (
              <Link
                key={index}
                to={item.link}
                className={buildClass({
                  "navbar-link navbar-top-link": true,
                  active: location.pathname === item.link,
                })}
              >
                {item.name}
              </Link>
            ))}
          </Nav>
        </NavbarB.Collapse>
      </Container>
    </NavbarB>
  );
}

export default connect(reduxState, reduxDispatch)(Navbar);
