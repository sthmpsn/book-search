import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import "./navboot.css";

function NavBoot(props) {

    return (
        <span>
            <Container fluid className="p-0 m-0">
                <Jumbotron id="header" className="text-center mt-3 mb-5 jumbotron-fluid bg-white">
                    <a href="https://books.google.com/" target="_blank" rel="noopener noreferrer" class="nav-link">
                        <h1>
                            <span className="font-weight-bold text-primary">G<i className="fab fa-react text-danger"></i><i className="fab fa-react text-warning"></i><span className="text-primary">g</span><span className="text-success">l</span><span className="text-danger">e </span>
                            <i className="fas fa-book mx-3"></i>
                            <span className="text-primary">B</span><span className="text-danger font-weight-bold">o</span><span className="text-warning">o</span><span className="text-success">k</span><span className="text-danger">s</span></span>
                        </h1>
                    </a>
                    <h2>Search for and Save Books of Interest</h2>
                </Jumbotron>
            </Container>
            <Container>
                <Nav>
                    <Nav.Item>
                        <Nav.Link id="nav-search" className="mx-3 btn btn-primary" href="/"  eventKey="search">Book Search </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link id="nav-saved" className="btn btn-secondary" href="/saved" eventKey="saved">Saved Books</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Container>
            
        </span>
    );
}

export default NavBoot;