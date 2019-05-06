import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Jumbotron from "react-bootstrap/Jumbotron";
import "./navboot.css";

function NavBoot() {
    return (
        <span>
            <Navbar>
                <Navbar.Brand href="https://books.google.com/" target="_blank">G<i className="fab fa-react"></i><i className="fab fa-react"></i>gle <span className="font-weight-bold"><span className="text-primary">B</span><span className="text-danger font-weight-bold">o</span><span className="text-warning">o</span><span className="text-success">k</span><span className="text-danger">s</span></span></Navbar.Brand>
                <Nav.Link className="px-3" href="/">Search</Nav.Link>
                <Nav.Link className="px-3" href="/saved">Saved</Nav.Link>
            </Navbar>
            <Jumbotron id="header" className="text-center my-3">
                <h1>
                    <span className="font-weight-bold text-primary">G<i className="fab fa-react text-danger"></i><i className="fab fa-react text-warning"></i><span className="text-primary">g</span><span className="text-success">l</span><span className="text-danger">e </span>
                    <i className="fas fa-book mx-3"></i>
                    <span className="text-primary">B</span><span className="text-danger font-weight-bold">o</span><span className="text-warning">o</span><span className="text-success">k</span><span className="text-danger">s</span></span>
                </h1>
                <h2>Search for and Save Books of Interest</h2>
            </Jumbotron>
        </span>
    );
}

export default NavBoot;