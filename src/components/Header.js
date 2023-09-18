import React, { useContext } from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import UserContext from './UserContext'

const Header = () => {
    const { user, setUser } = useContext(UserContext)
    console.log("User data in header:", user)
    
    const logout = () => {
        setUser(null)
        console.log('User after logout:', user)
        localStorage.removeItem("user")
    }

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
                    <Link to="/about" className="nav-link">About</Link>
                    <Nav.Link href="#">Contact</Nav.Link>
                    {user ? (
                        <>
                            <span className="nav-link">Welcome, {user.name}!</span>
                            <Nav.Link onClick={logout}>Logout</Nav.Link>
                        </>
                    ) : (
                        <Link to="/login" className="nav-link">Login/Profile</Link>
                    )}
                    <Link to="/cart" className="nav-link">Cart</Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header