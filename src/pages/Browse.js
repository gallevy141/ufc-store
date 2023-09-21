import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Image, Dropdown, DropdownButton, Card, InputGroup, FormControl, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { fetchProducts } from '../clientDAL'

const Browse = () => {
    const [products, setProducts] = useState([])
    const [searchTerm, setSearchTerm] = useState('')

    useEffect(() => {
        fetchProducts().then(data => {
            console.log("Products fetched:", data)
            setProducts(data)
        }).catch(err => console.error(err))
    }, [])

    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    )

    return (
        <Container fluid className="py-4" style={{ fontFamily: 'Oswald, sans-serif' }}>
            <Row className="mb-4 bg-light">
                <Col className="text-center py-5">
                    <h1>UFC Product Catalogue</h1>
                </Col>
            </Row>

            <Row className="mb-4">
                <Col>
                    <Image src="path_to_ufc_product_image.jpg" alt="UFC Product" fluid />
                </Col>
            </Row>

            <Row className="mb-4 align-items-center">
                <Col md={6}>
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <Button variant="outline-secondary">Search</Button>
                        </InputGroup.Prepend>
                        <FormControl 
                            type="text"
                            placeholder="Search for products..."
                            value={searchTerm}
                            onChange={e => setSearchTerm(e.target.value)}
                        />
                    </InputGroup>
                </Col>
                <Col md={6}>
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
                {filteredProducts.map(product => (
                    <Col key={product.productID} xs={12} md={4} lg={3} className="mb-4">
                        <Link to={`/product/${product.productID}`} className="text-decoration-none text-dark">
                            <Card className="h-100" border="light">
                                <Card.Img variant="top" src={product.image} alt={product.name} />
                                <Card.Body>
                                    <Card.Title>{product.name}</Card.Title>
                                    <Card.Text>{product.description}</Card.Text>
                                    <Card.Footer>
                                        <small className="text-muted">Price: ${product.price}</small>
                                    </Card.Footer>
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