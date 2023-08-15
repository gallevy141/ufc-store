import React from 'react'
import { Container, Row, Col, Image, Dropdown, DropdownButton, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Browse = () => {
    return (
        <Container fluid className="py-4">
            <Row className="mb-4">
                <Col>
                    <Image src="path_to_ufc_product_image.jpg" alt="UFC Product" fluid />
                </Col>
            </Row>

            <Row className="mb-4">
                <Col>
                    <DropdownButton id="dropdown-basic-button" title="Sort By">
                        <Dropdown.Item href="#/gender">Gender</Dropdown.Item>
                        <Dropdown.Item href="#/merchandise">Merchandise</Dropdown.Item>
                        <Dropdown.Item href="#/gear">Gear</Dropdown.Item>
                        <Dropdown.Item href="#/memorabilia">Memorabilia</Dropdown.Item>
                    </DropdownButton>
                </Col>
            </Row>

            {/* Product grid */}
            <Row>
                {/* Example product. map over an array of products to generate these. */}
                <Col xs={12} md={4} lg={3} className="mb-4">
                    <Link to={`/product/${productIdHere}`} className="text-decoration-none text-dark">
                        <Card>
                            <Card.Img variant="top" src="path_to_product1_image.jpg" />
                            <Card.Body>
                                <Card.Title>Product Name 1</Card.Title>
                                <Card.Text>Product description or price.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Link>
                </Col>
                {/* Repeat above Col for more products */}
            </Row>
        </Container>
    )
}

export default Browse