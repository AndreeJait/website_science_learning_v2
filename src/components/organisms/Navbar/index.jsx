import React from "react";
import { connect } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Constant from "../../../constants";
import { buildClass } from "../../../helpers/classHelper";
import { reduxDispatch, reduxState } from "../../../helpers/reduxHelper";
import { Container, Nav, Navbar as NavbarB } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
/**
 *
 * @param {{
 * navbar: [{
 * name: string, link: string}], props: any}} param0
 * @returns
 */
function Navbar({ navbar, isTransparent, ...props }) {
  const [key, setKey] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <NavbarB
      collapseOnSelect
      expand="lg"
      className={buildClass({
        "shadow-sm bg-white": !(location.pathname === "/"),
        absolute: location.pathname === "/",
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
          <div className="d-flex ms-auto align-items-center">
            <form
              action=""
              onSubmit={(event) => {
                event.preventDefault();
                console.log(key);
                navigate(`/search/${key}`);
              }}
            >
              <div className="d-flex align-items-center">
                <div className="form-group">
                  <input
                    className="form-control"
                    onChange={(event) => {
                      setKey(event.currentTarget.value);
                    }}
                    type="text"
                    name=""
                    value={key}
                    id=""
                  />
                </div>
                <button className="btn btn-success" type="submit">
                  <FontAwesomeIcon icon={"search"} />
                </button>
              </div>
            </form>
          </div>
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
