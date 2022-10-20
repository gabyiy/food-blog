import React, { useContext, useState } from "react";
import "./Header.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Store } from "../../Store";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const Header = () => {
  const navigate = useNavigate();
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { userInfo } = state;

  const signoutHandler = () => {
    ctxDispatch({ type: "USER_SIGNOUT" });
    localStorage.removeItem("userInfo");
    navigate("/");
  };
  const [homeActive, setHomeActive] = useState(true);
  const [recipesActive, setRecipesActive] = useState(false);
  const [registerActive, setRegisterActive] = useState(false);
  const [loginActive, setLoginActive] = useState(false);
  const [profileActive, setProfileActivate] = useState(false);

  const homeActivator = () => {
    setHomeActive(true);
    setRegisterActive(false);
    setLoginActive(false);
    setRecipesActive(false);
    setProfileActivate(false);
  };
  const recipeActivator = () => {
    setRecipesActive(true);

    setHomeActive(false);
    setRegisterActive(false);
    setLoginActive(false);
    setProfileActivate(false);
  };
  const reisterActivator = () => {
    setHomeActive(false);
    setRegisterActive(true);
    setLoginActive(false);
    setRecipesActive(false);
  };

  const loginActivator = () => {
    setHomeActive(false);
    setRegisterActive(false);
    setLoginActive(true);
    setRecipesActive(false);
  };
  const profileActivator = () => {
    setHomeActive(false);
    setRegisterActive(false);
    setLoginActive(false);
    setRecipesActive(false);
    setProfileActivate(true);
  };

  console.log(homeActive);
  return (
    <div>
   

      <Navbar collapseOnSelect expand="lg" bg="white" variant="white">
    
        <Container className="containerHead">
          <Navbar.Brand className="logo" onClick={() => homeActivator()}>
            <Link to="/" className="linksHeader">
              Food Blog
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            className=" navBarTogler"
          />
          <Navbar.Collapse id="responsive-navbar-nav" className="m-auto">
            <Nav className="me-auto"></Nav>
            <Nav className="mr-auto my-2 my-lg-0 navDrop" navbarScroll>
              {userInfo ? (
                <NavDropdown
                  title={userInfo.name}
                  className={profileActive ? "dropdown active" : "dropdown"}
                  onClick={() => profileActivator()}
                  id="collasible-nav-dropdown"
                >
                  <NavDropdown.Item href="#action/3.1" onClick={signoutHandler}>
                    Sign Out
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    <Link to="/userProfile" className="linksHeader">
                      Profile
                    </Link>
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                ""
              )}

              <Nav.Link
                className={homeActive ? "links active" : "links"}
                onClick={() => homeActivator()}
              >
                {" "}
                <Link to="/" className="linksHeader">
                  Home
                </Link>
              </Nav.Link>

              <Nav.Link
                className={recipesActive ? "links active" : "links"}
                onClick={() => recipeActivator()}
              >
                <Link className="linksHeader" to="/">
                  Recipes
                </Link>
              </Nav.Link>
              {!userInfo ? (
                <Nav.Link
                  className={loginActive ? "links active" : "links"}
                  onClick={() => loginActivator()}
                >
                  <Link to="/login" className="linksHeader">
                    Login
                  </Link>
                </Nav.Link>
              ) : (
                ""
              )}
              {!userInfo ? (
                <Nav.Link
                  className={registerActive ? "links active" : "links"}
                  onClick={() => reisterActivator()}
                >
                  <Link to="/register" className="linksHeader">
                    Register
                  </Link>
                </Nav.Link>
              ) : (
                ""
              )}
            </Nav>
            
          </Navbar.Collapse>
        
        </Container>
    
      </Navbar>
      <div className="hrHeader"></div>
    </div>
  );
};

export default Header;
