import React from 'react'
import { Container, Row, Col, Button, Dropdown, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function CartPage() {
    return (
        <Container>
            <h2 className="mb-4">Your Shopping Cart</h2>

            {/* Example cart item */}
            <Card className="mb-3">
                <Card.Body>
                    <Row>
                        <Col>Product Name</Col>
                        <Col>
                            <Dropdown>
                                <Dropdown.Toggle variant="light">
                                    Quantity: 1
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    {[1, 2, 3, 4, 5].map(qty => (
                                        <Dropdown.Item key={qty}>
                                            {qty}
                                        </Dropdown.Item>
                                    ))}
                                </Dropdown.Menu>
                            </Dropdown>
                        </Col>
                        <Col>Price: $xx.xx</Col>
                        <Col>
                            <Button variant="danger">Delete</Button>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
            {/* End of example cart item. */}

            <Row className="align-items-center">
                <Col>Total: $xx.xx</Col>
                <Col className="text-right">
                <Button as={Link} to="/checkout" variant="primary">Checkout</Button>
                </Col>
            </Row>
        </Container>
    )
}

export default CartPage