import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Button, Card } from 'react-bootstrap'
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
        <Container>
            {product && (
                <>
                    <Row className="my-4">
                        <Col md={6}>
                            <img src={product.image} alt={product.name} className="img-fluid" />
                        </Col>
                        <Col md={6}>
                            <h4>Price: ${product.price}</h4>
                            <p>Quantity: {product.quantity}</p>
                            <p>Available: {product.quantity > 0 ? "Yes" : "No"}</p>
                            <Button variant="primary" onClick={handleAddToCart}>Add to cart</Button>
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
                                {product.description}
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card className="my-4">
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