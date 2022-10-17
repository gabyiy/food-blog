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
      {/* <div className="head border_b">
        <nav className="navbar navbar-expand-lg navbar-light main_div ">
          <div className="container-fluid ">
            <Link to="/" style={{ textDecoration: "none" }}>
              <div
                className="navbar-brand logo"
                onClick={() => homeActivator()}
              >
                {" "}
                Food Blog
              </div>
            </Link>
            <div className="d-flex">
              {userInfo ? (
                <div className={profileActive ? "dropdown active" : "dropdown"}>
                  <button
                    className="btn  dropdown-toggle"
                    type="button"
                    id="dropdownMenu2"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    onClick={() => profileActivator()}
                  >
                    {userInfo.name}
                  </button>
                  <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
                    <li>
                      <button
                        className="dropdown-item"
                        type="button"
                        onClick={signoutHandler}
                      >
                        Sign out
                      </button>
                    </li>
                    <li>
                      <Link to="/userProfile">
                        <button className="dropdown-item" type="button">
                          Profile
                        </button>
                      </Link>
                    </li>
                    <li>
                      <button className="dropdown-item" type="button">
                        Something else here
                      </button>
                    </li>
                  </ul>
                </div>
              ) : (
                <div></div>
              )}
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse justify-content-end "
                id="navbarNav"
              >
                <ul className="navbar-nav  ">
                  <li className="nav-item " onClick={() => homeActivator()}>
                    <Link
                      className={
                        homeActive ? "nav-link links active" : "nav-link links "
                      }
                      to="/"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="nav-item" onClick={() => recipeActivator()}>
                    <a
                      className={
                        recipesActive
                          ? "nav-link links active"
                          : "nav-link links "
                      }
                      href="#"
                    >
                      Recipes
                    </a>
                  </li>

                  <li className="nav-item" onClick={() => reisterActivator()}>
                    {!userInfo ? (
                      <Link
                        className={
                          registerActive
                            ? "nav-link links active"
                            : "nav-link links "
                        }
                        to="/register"
                      >
                        Register
                      </Link>
                    ) : (
                      ""
                    )}
                  </li>
                  <li className="nav-item" onClick={() => loginActivator()}>
                    {!userInfo ? (
                      <Link
                        className={
                          loginActive
                            ? "nav-link links active"
                            : "nav-link links "
                        }
                        to="/login"
                      >
                        Login
                      </Link>
                    ) : (
                      ""
                    )}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div> */}

      <Navbar collapseOnSelect expand="lg" bg="white" variant="white">
        <Container>
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
    </div>
  );
};

export default Header;
