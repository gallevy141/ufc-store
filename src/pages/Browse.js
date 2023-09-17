import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Image, Dropdown, DropdownButton, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { fetchProducts } from '../clientDAL'

const Browse = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetchProducts().then(data => setProducts(data)).catch(err => console.error(err))
    }, [])

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
                {products.map(product => (
                    <Col key={product.productID} xs={12} md={4} lg={3} className="mb-4">
                        <Link to={`/product/${product.productID}`} className="text-decoration-none text-dark">
                            <Card>
                                <Card.Img variant="top" src={product.image} alt={product.name} />
                                <Card.Body>
                                    <Card.Title>{product.name}</Card.Title>
                                    <Card.Text>{product.description || product.price}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Link>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default Browse