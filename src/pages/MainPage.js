import React from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'

const MainPage = () => {
    return (
        <Container fluid>
            <Row className="my-4">
                <Col className="text-center">
                    <h1>WELCOME TO THE UFC</h1>
                </Col>
            </Row>
            <Row className="my-4">
                <Col className="text-center">
                    <img src="/path/to/ufc-fighter.jpg" alt="UFC Fighter" className="img-fluid"/>
                </Col>
            </Row>
            <Row className="my-4">
                {Array.from({ length: 3 }).map((_, idx) => (
                    <Col md={4} key={idx}>
                        <Card>
                            <Card.Img variant="top" src="/path/to/product-image.jpg" />
                            <Card.Body>
                                <Card.Title>Product {idx + 1}</Card.Title>
                                <Button variant="primary">Add to Cart</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default MainPage