import React from 'react'
import { Container, Row, Col, Button, Card } from 'react-bootstrap'

function ProductPage() {
    return (
        <Container>

            <Row className="my-4">
                <Col md={6}>
                    <img src="product-image-url-here" alt="Product Name" className="img-fluid" />
                </Col>
                <Col md={6}>
                    <h4>Price: $xx.xx</h4>
                    <p>Quantity: xx</p>
                    <p>Available: Y/N</p>
                    <Button variant="primary">Add to cart</Button>
                </Col>
            </Row>

            <Row className="my-4">
                <Col>
                    {/* Placeholder for Star Rating */}
                    [Star Rating]
                </Col>
            </Row>

            <Card className="my-4">
                <Card.Body>
                    <Card.Title>Product Description</Card.Title>
                    <Card.Text>
                        Product description goes here...
                    </Card.Text>
                </Card.Body>
            </Card>

            <Card className="my-4">
                <Card.Body>
                    <Card.Title>Reviews</Card.Title>
                    <Card.Text>
                        Reviews content goes here...
                    </Card.Text>
                </Card.Body>
            </Card>

        </Container>
    )
}

export default ProductPage