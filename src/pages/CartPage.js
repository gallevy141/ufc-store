import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { fetchCartItems } from '../clientDAL'

function CartPage() {
    const [cartItems, setCartItems] = useState([])

    useEffect(() => {
        async function fetchCart() {
            try {
                const userResponse = await fetch("http://localhost:3001/api/users/me", {
                    credentials: "include"
                })

                const userData = await userResponse.json()

                if (userData && userData.userId) {
                    const items = await fetchCartItems(userData.userId)
                    setCartItems(items);
                }
            } catch (error) {
                console.error("Error fetching user or cart data:", error)
            }
        }
        fetchCart()
    }, [])

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2)
    }

    return (
        <Container>
            <h2 className="mb-4">Your Shopping Cart</h2>
            {cartItems.map(item => (
                <Card key={item.productId} className="mb-3">
                    <Card.Body>
                        <Card.Title>{item.name}</Card.Title>
                        <p>Price: ${item.price}</p>
                        <p>Quantity: {item.quantity}</p>
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