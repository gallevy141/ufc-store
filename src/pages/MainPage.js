import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import { fetchProducts } from '../clientDAL' 

const MainPage = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        async function loadProducts() {
            try {
                const data = await fetchProducts({ limit: 3 })
                setProducts(data);
            } catch (error) {
                console.error("Error fetching products:", error)
            }
        }
    
        loadProducts()
    }, [])

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
                {products.map(product => (
                    <Col md={4} key={product.productID}>
                        <Card>
                            <Card.Img variant="top" src={product.image} />
                            <Card.Body>
                                <Card.Title>{product.name}</Card.Title>
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