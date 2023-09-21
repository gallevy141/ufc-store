import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Image, Dropdown, DropdownButton, Card } from 'react-bootstrap'
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

            <Row className="mb-4">
                <Col md={6}>
                    <input 
                        type="text"
                        placeholder="Search for products..."
                        value={searchTerm}
                        onChange={e => setSearchTerm(e.target.value)}
                        className="form-control" 
                    />
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