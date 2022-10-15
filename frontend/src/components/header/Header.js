import React, { useContext, useState } from "react";
import "./Header.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Store } from "../../Store";

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

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

  const setHomeActivator = () => {
    setHomeActive(true);
    setRegisterActive(false);
    setLoginActive(false);
    setRecipesActive(false);
  };
  const recipeActivator = () => {
    setHomeActive(false);
    setRegisterActive(false);
    setLoginActive(false);
    setRecipesActive(true);
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
  return (
    <div>
    <div className="head border_b">
      <nav className="navbar navbar-expand-lg navbar-light main_div ">
        <div className="container-fluid ">
          <Link to="/" style={{ textDecoration: "none" }}>
            <div
              className="navbar-brand logo"
              onClick={() => setHomeActivator()}
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
                <li className="nav-item " onClick={() => setHomeActivator()}>
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
    </div>


<Navbar collapseOnSelect expand="lg" bg="white" variant="white">
      <Container  >
        <Navbar.Brand  href="#home" className="logo">Food Blog</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className='m-auto' />
        <Navbar.Collapse id="responsive-navbar-nav"  className='m-auto'>
          <Nav className="me-auto"> 
          </Nav>
          <Nav>
          <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
            
            </NavDropdown>
            <Nav.Link href="#deets" className="links">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes" className="links">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   
  </div>
  
  );


};

export default Header;
