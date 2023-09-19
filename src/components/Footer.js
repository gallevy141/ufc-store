import React from 'react'
import { Container, Row, Col, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <Container fluid style={{ backgroundColor: '#101010', color: 'white', fontFamily: 'Oswald, sans-serif' }} className="py-3">
            <Row>
                <Col md={4} className="d-flex justify-content-center justify-content-md-start">
                    <Nav>
                        <Link to="/about" className="nav-link text-white pr-3">About Us</Link>
                        <Link to="/contact" className="nav-link text-white pr-3">Contact Us</Link>
                        <Link to="/termsandconditions" className="nav-link text-white">Terms & Conditions</Link>
                    </Nav>
                </Col>
                <Col md={4} className="text-center">
                    <Nav>
                        <Nav.Link href="https://twitter.com/ufc?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" target="_blank" rel="noopener noreferrer" className="text-white pr-3">Twitter</Nav.Link>
                        <Nav.Link href="https://www.instagram.com/ufc/?hl=en" target="_blank" rel="noopener noreferrer" className="text-white pl-3">Instagram</Nav.Link>
                    </Nav>
                </Col>
                <Col md={4} className="d-flex justify-content-center justify-content-md-end">
                    UFC Store © 2023
                </Col>
            </Row>
        </Container>
    )
}

export default Footer