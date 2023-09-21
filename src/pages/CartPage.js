import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Button, Card, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { fetchCartItems, getLoggedInUser, removeProductFromCart, updateProductQuantityInCart } from '../clientDAL'

function CartPage() {
    const [cartItems, setCartItems] = useState([])
    const [total, setTotal] = useState('0.00')

    useEffect(() => {
        async function fetchCart() {
            try {
                const userData = await getLoggedInUser()
    
                if (userData && userData.userId) {
                    const items = await fetchCartItems(userData.userId)
                    setCartItems(items)
                    calculateTotal(items) 
                }
            } catch (error) {
                console.error("Error fetching user or cart data:", error)
            }
        }
    
        fetchCart()
    }, [])

    const calculateTotal = (items) => {
        const totalAmount = items.reduce((total, item) => {
            const price = Number(item.price)
            if(isNaN(price)) return total
            return total + (item.price * item.quantity)            
        }, 0).toFixed(2)

        setTotal(totalAmount)
    }

    const handleQuantityChange = async (productId, quantity) => {
        try {
            const userData = await getLoggedInUser()
            if (userData && userData.userId) {
                await updateProductQuantityInCart(userData.userId, productId, quantity)
                const updatedItems = await fetchCartItems(userData.userId)
                setCartItems(updatedItems)
                calculateTotal(updatedItems)
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
                calculateTotal(updatedItems)
            }
        } catch (error) {
            console.error("Error removing item from cart:", error)
        }
    }

    return (
        <Container style={{ fontFamily: 'Oswald, sans-serif' }}>
            <h2 className="mb-4 text-center">Your Shopping Cart</h2>
            {cartItems.map(item => (
                <Card key={item.productID} className="mb-3 shadow-sm">
                    <Card.Body>
                        <Row>
                            <Col xs={2}>
                                <Card.Img variant="top" src={item.image} className="img-fluid" style={{maxHeight: '80px'}} />
                            </Col>
                            <Col xs={3}>
                                <Card.Title>{item.name}</Card.Title>
                                <p className="mb-0">Price: ${item.price}</p>
                            </Col>
                            <Col xs={3}>
                                <Form.Control
                                    as="select"
                                    value={item.quantity}
                                    onChange={e => handleQuantityChange(item.productID, +e.target.value)}
                                    style={{ width: '70px', display: 'inline-block' }}
                                >
                                    {[...Array(10)].map((_, idx) => (
                                        <option key={idx + 1} value={idx + 1}>{idx + 1}</option>
                                    ))}
                                </Form.Control>
                            </Col>
                            <Col xs={4} className="text-right">
                                <Button variant="danger" onClick={() => handleRemoveFromCart(item.productID)}>
                                    Delete
                                </Button>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            ))}

            <Row className="align-items-center mt-3">
                <Col><strong>Total:</strong> ${total}</Col> 
                <Col className="text-right">
                    <Button as={Link} to="/checkout" variant="primary">Checkout</Button>
                </Col>
            </Row>
        </Container>
    )
}

export default CartPage