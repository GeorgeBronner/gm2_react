import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

function Header() {
    return (
        <div>
        {/*<header>*/}
        {/*    <h1>Golf Mapper 2</h1>*/}


        {/*    <nav>*/}
        {/*        <Link to="/">Home</Link>*/}
        {/*    </nav>*/}
        {/*</header>*/}
        <Navbar bg="light" data-bs-theme="light">
            <Container>
                <Navbar.Brand href="#home">Golf Mapper 2</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/add-course">Add Course</Nav.Link>
                    <Nav.Link href="/map">Map</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
        </div>
    );
}

export default Header;