import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
    return (
        <Container fluid style={{ backgroundColor: '#101010', color: 'white', fontFamily: 'Oswald, sans-serif' }} className="py-3">
            <Row>
                <Col md={4} className="d-flex justify-content-center justify-content-md-start">
                    <div className="pr-3">About Us</div>
                    <div className="pr-3">|</div>
                    <div className="pr-3">Contact Us</div>
                    <div>|</div>
                    <div className="pl-3">T&C</div>
                </Col>
                <Col md={4} className="text-center">
                    <a href="https://twitter.com/ufc?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" target="_blank" rel="noopener noreferrer" className="pr-3 text-white">Twitter</a>
                    <div>|</div>
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