import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

import Auth from "../../utils/auth";

function Header() {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <>
      <header className="d-flex align-items-center justify-content-between p-1">
        <div className="d-flex align-items-center">
          <img src="/devnetlogo.jpg" alt="logo" className="navbar-brand" />
          <h1 aref="/" className="p-4">
            DevNet
          </h1>
        </div>

        <Navbar>
          <Container fluid>
            <Navbar.Collapse id="navbar">
              <Nav className="ml-auto">
                <Nav.Link
                  as={Link}
                  to="/"
                  style={{ color: "#44d3ff" }}
                  activeStyle={{ color: "white" }}
                >
                  Jobs
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/developers"
                  style={{ color: "#44d3ff" }}
                  activeStyle={{ color: "white" }}
                >
                  Developers
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/addjob"
                  style={{ color: "#44d3ff" }}
                  activeStyle={{ color: "white" }}
                >
                  Add Job
                </Nav.Link>

                {Auth.loggedIn() ? (
                  <>
                    <Nav.Link
                      as={Link}
                      to="/profile"
                      style={{ color: "#44d3ff" }}
                      activeStyle={{ color: "white" }}
                    >
                      Profile
                    </Nav.Link>

                    <Nav.Link
                      as={Link}
                      to="/login"
                      style={{ color: "#44d3ff" }}
                      activeStyle={{ color: "white" }}
                    >
                      <span onClick={logout}>Logout</span>
                    </Nav.Link>
                  </>
                ) : (
                  <>
                    <Nav.Link
                      as={Link}
                      to="/login"
                      style={{ color: "#44d3ff" }}
                      activeStyle={{ color: "white" }}
                    >
                      Login
                    </Nav.Link>

                    <Nav.Link
                      as={Link}
                      to="/signup"
                      style={{ color: "#44d3ff" }}
                      activeStyle={{ color: "white" }}
                    >Signup
                    </Nav.Link>
                  </>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </>
  );
}

export default Header;
