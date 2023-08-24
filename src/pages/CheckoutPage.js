import React from 'react'
import { Container, Row, Col, Button, Dropdown, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function CheckoutPage() {
    return (
        <Container>
            <h2 className="mb-4">Checkout</h2>

            {/* Example product item in checkout */}
            <Card className="mb-2">
                <Card.Body>
                    <Row>
                        <Col>Product 1</Col>
                        <Col>Quantity: xxx</Col>
                        <Col>Price: $xx.xx</Col>
                    </Row>
                </Card.Body>
            </Card>
            {/* End of example product item */}

            <Row className="my-4 align-items-center">
                <Col md={8}>
                    <Dropdown>
                        <Dropdown.Toggle variant="light">
                            Address: Selected Address
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item>Address 1</Dropdown.Item>
                            <Dropdown.Item>Address 2</Dropdown.Item>
                            <Dropdown.Item>Add New Address</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Col>
                <Col md={4} className="text-right">
                <Button as={Link} to="/receipt" variant="primary">Confirm Order</Button>
                </Col>
            </Row>
        </Container>
    )
}

export default CheckoutPage