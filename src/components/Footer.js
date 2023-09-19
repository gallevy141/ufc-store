import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <Container fluid style={{ backgroundColor: '#101010', color: 'white', fontFamily: 'Oswald, sans-serif' }} className="py-3">
            <Row>
                <Col md={4} className="d-flex justify-content-center justify-content-md-start">
                    <Link to="/about" className="text-white pr-3">About Us</Link>
                    <Link to="/contact" className="text-white pr-3">Contact Us</Link>
                    <Link to="/termsandconditions" className="text-white">Terms & Conditions</Link>
                </Col>
                <Col md={4} className="text-center">
                    <a href="https://twitter.com/ufc?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" target="_blank" rel="noopener noreferrer" className="pr-3 text-white">Twitter</a>
                    <a href="https://www.instagram.com/ufc/?hl=en" target="_blank" rel="noopener noreferrer" className="pl-3 text-white">Instagram</a>
                </Col>
                <Col md={4} className="d-flex justify-content-center justify-content-md-end">
                    UFC Store © 2023
                </Col>
            </Row>
        </Container>
    )
}

export default Footer