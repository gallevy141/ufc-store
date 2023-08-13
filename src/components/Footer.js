import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
    return (
        <Container fluid className="bg-dark text-white py-3">
            <Row>
                <Col md={4}>
                    About Us | Contact Us | T&C
                </Col>
                <Col md={4} className="text-center">
                    Twitter | Instagram
                </Col>
                <Col md={4} className="text-right">
                    UFC Store © 2023
                </Col>
            </Row>
        </Container>
    )
}

export default Footer