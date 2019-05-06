import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

function NavBoot() {
    return (
        <Navbar>
            <Navbar.Brand href="https://books.google.com/" target="_blank">Google <span className="font-weight-bold"><span className="text-primary">B</span><span className="text-danger font-weight-bold">o</span><span className="text-warning">o</span><span className="text-success">k</span><span className="text-danger">s</span></span></Navbar.Brand>
            <Nav.Link className="px-3" href="/">Search</Nav.Link>
            <Nav.Link className="px-3" href="/saved">Saved</Nav.Link>
        </Navbar>
    );
}

export default NavBoot;