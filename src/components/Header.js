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
        <Navbar bg="black" variant="dark" expand="lg" style={{ fontFamily: 'Oswald, sans-serif' }}>
            <Link to="/" className="navbar-brand">
                <img src="/public/images/ufc-logo.jpg" alt="UFC Logo" style={{ height: '40px', width: 'auto' }} />
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Link to="/browse" className="nav-link text-white">Browse</Link>
                    <Nav.Link href="#" className="text-danger">Blog</Nav.Link>
                    <Nav.Link href="#" className="text-white">Upcoming</Nav.Link>
                    <Nav.Link href="#" className="text-danger">Rankings</Nav.Link>
                    <Link to="/about" className="nav-link text-white">About</Link>
                    <Nav.Link href="#" className="text-danger">Contact</Nav.Link>
                    {user ? (
                        <>
                            <span className="nav-link text-warning">Welcome, {user.name}!</span>
                            <Nav.Link onClick={logout} className="text-primary">Logout</Nav.Link>
                        </>
                    ) : (
                        <Link to="/login" className="nav-link text-white">Login/Profile</Link>
                    )}
                    <Link to="/cart" className="nav-link text-danger">Cart</Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header