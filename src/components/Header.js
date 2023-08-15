import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Link to="/" className="navbar-brand">UFC</Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Link to="/browse" className="nav-link">Browse</Link>
                    <Nav.Link href="#">Blog</Nav.Link>
                    <Nav.Link href="#">Upcoming</Nav.Link>
                    <Nav.Link href="#">Rankings</Nav.Link>
                    <Nav.Link href="#">About</Nav.Link>
                    <Nav.Link href="#">Contact</Nav.Link>
                    <Link to="/login" className="nav-link">Login/Profile</Link>
                    <Link to="/cart" className="nav-link">Cart</Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header