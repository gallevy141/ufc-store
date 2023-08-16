import React from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function ProfilePage() {
    return (
        <Container>
            <Row className="my-4">
                <Col>
                    <h2>Welcome, User's Name</h2>
                </Col>
            </Row>

            <Row className="my-4">
                <Col md={6}>
                    <Card className="mb-4">
                        <Card.Body>
                            <Card.Title>Details</Card.Title>
                            <Link to="/profile/details">
                                <Button variant="primary" block>Details</Button>
                            </Link>
                        </Card.Body>
                    </Card>

                    <Card className="mb-4">
                        <Card.Body>
                            <Card.Title>Order History</Card.Title>
                            <Link to="/profile/order-history">
                                <Button variant="primary" block>Order History</Button>
                            </Link>
                        </Card.Body>
                    </Card>

                    <Card className="mb-4">
                        <Card.Body>
                            <Card.Title>Wishlist</Card.Title>
                            <Link to="/profile/wishlist">
                                <Button variant="primary" block>Wishlist</Button>
                            </Link>
                        </Card.Body>
                    </Card>

                    <Card className="mb-4">
                        <Card.Body>
                            <Card.Title>Reviews</Card.Title>
                            <Link to="/profile/reviews">
                                <Button variant="primary" block>Reviews</Button>
                            </Link>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default ProfilePage