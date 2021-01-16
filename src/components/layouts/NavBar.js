import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { Container, NavbarText } from "reactstrap";
import {Navbar,Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';


const NavBar = () => {

    return (
        <div>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <Container>
                <Link className="navbar-brand" to="/list">
                   where2eat
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarsExampleDefault"
                    aria-controls="navbarsExampleDefault"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <div
                    className="collapse navbar-collapse"
                    id="navbarsExampleDefault"
                >
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/list">
                                Home
                                <span className="sr-only">(current)</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/add">
                                Add Restaurant
                            </Link>
                        </li>
                    </ul>
                </div>
                <NavbarText>
                    Welcome 
                </NavbarText>
            </Container>
        </nav>
    </div>
    )
}

export default NavBar;
