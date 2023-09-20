import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Button, Card, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { fetchCartItems, getLoggedInUser, removeProductFromCart, updateProductQuantityInCart } from '../clientDAL'

function CartPage() {
    const [cartItems, setCartItems] = useState([])

    useEffect(() => {
        async function fetchCart() {
            try {
                const userData = await getLoggedInUser()
                
                if (userData && userData.userId) {
                    const items = await fetchCartItems(userData.userId)
                    setCartItems(items)
                }
            } catch (error) {
                console.error("Error fetching user or cart data:", error)
            }
        }

        fetchCart()
    }, [])

    const handleQuantityChange = async (productId, quantity) => {
        try {
            const userData = await getLoggedInUser()
            if (userData && userData.userId) {
                await updateProductQuantityInCart(userData.userId, productId, quantity)
                const updatedItems = await fetchCartItems(userData.userId)
                setCartItems(updatedItems)
            }
        } catch (error) {
            console.error("Error updating cart quantity:", error)
        }
    }

    const handleRemoveFromCart = async (productId) => {
        try {
            const userData = await getLoggedInUser()
            if (userData && userData.userId) {
                await removeProductFromCart(userData.userId, productId)
                const updatedItems = await fetchCartItems(userData.userId)
                setCartItems(updatedItems)
            }
        } catch (error) {
            console.error("Error removing item from cart:", error)
        }
    }

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2)
    }

    return (
        <Container>
            <h2 className="mb-4">Your Shopping Cart</h2>
            {cartItems.map(item => (
                <Card key={item.productId} className="mb-3">
                    <Card.Body>
                        <Card.Img variant="top" src={item.image} />
                        <Card.Title>{item.name}</Card.Title>
                        <Card.Text>{item.description}</Card.Text>
                        <p>Price: ${item.price}</p>
                        <Form.Control
                            as="select"
                            value={item.quantity}
                            onChange={e => handleQuantityChange(item.productId, +e.target.value)}
                        >
                            {[...Array(10)].map((_, idx) => (
                                <option key={idx + 1} value={idx + 1}>{idx + 1}</option>
                            ))}
                        </Form.Control>
                        <Button variant="danger" className="mt-2" onClick={() => handleRemoveFromCart(item.productId)}>
                            Remove
                        </Button>
                    </Card.Body>
                </Card>
            ))}

            <Row className="align-items-center">
                <Col>Total: ${calculateTotal()}</Col> 
                <Col className="text-right">
                    <Button as={Link} to="/checkout" variant="primary">Checkout</Button>
                </Col>
            </Row>
        </Container>
    )
}

export default CartPage