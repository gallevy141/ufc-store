import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Button, Card, Badge } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { fetchProducts, addProductToCart, getLoggedInUser } from '../clientDAL'

function ProductPage() {
    const { productId } = useParams()
    const [product, setProduct] = useState(null)
    const [user, setUser] = useState(null)

    useEffect(() => {
        async function fetchProduct() {
            try {
                const productData = await fetchProducts({ productId })
                setProduct(productData)
                
                const userData = await getLoggedInUser()
                setUser(userData)
            } catch (error) {
                console.error("Error fetching product data:", error)
            }
        }
        fetchProduct()
    }, [productId])

    const handleAddToCart = async () => {
        if (!user) {
            alert("Please login to add products to cart.")
            return
        }
        await addProductToCart(user.userId, productId)
    }

    return (
        <Container style={{ fontFamily: 'Oswald, sans-serif' }}>
            {product && (
                <>
                    <Row className="my-4">
                        <Col md={6}>
                            <img src={product.image} alt={product.name} className="img-fluid rounded shadow-sm" />
                        </Col>
                        <Col md={6}>
                            <h2>{product.name}</h2>
                            <h4 className="mb-3">Price: <Badge variant="success">${product.price}</Badge></h4>
                            <p>Quantity: <Badge variant="info">{product.quantity}</Badge></p>
                            <p>Available: 
                                <Badge variant={product.quantity > 0 ? "success" : "danger"}>
                                    {product.quantity > 0 ? "Yes" : "No"}
                                </Badge>
                            </p>
                            <Button variant="primary" onClick={handleAddToCart}>Add to cart</Button>
                        </Col>
                    </Row>
                    <Row className="my-4">
                        <Col>
                            {/* Placeholder for Star Rating */}
                            [Star Rating]
                        </Col>
                    </Row>

                    <Card className="my-4 shadow-sm">
                        <Card.Body>
                            <Card.Title>Product Description</Card.Title>
                            <Card.Text>
                                {product.description}
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card className="my-4 shadow-sm">
                        <Card.Body>
                            <Card.Title>Reviews</Card.Title>
                            <Card.Text>
                                {/* include reviews later */}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </>
            )}
        </Container>
    )
}

export default ProductPage