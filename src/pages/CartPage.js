import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Button, Card, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { fetchCartItems, getLoggedInUser, removeProductFromCart, updateProductQuantityInCart } from '../clientDAL'

function CartPage() {
    const [cartItems, setCartItems] = useState([])
    const [total, setTotal] = useState([])

    useEffect(() => {
        async function fetchCart() {
            try {
                const userData = await getLoggedInUser()
    
                if (userData && userData.userId) {
                    const items = await fetchCartItems(userData.userId)
                    setCartItems(items)

                    const totalAmount = items.reduce((total, item) => {
                        const price = Number(item.price)
                        if(isNaN(price)) return total
                        return total + (item.price * item.quantity)            
                    }, 0).toFixed(2)
    
                    setTotal(totalAmount)
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
                calculateTotal()
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

    {/*const calculateTotal = () => {
        console.log("cartItems:", cartItems)
        const total = cartItems.reduce((total, item) => {
            const price = Number(item.price)
            if(isNaN(price)) return total
            return total + (item.price * item.quantity)            
        }, 0).toFixed(2)

        setTotal(total)

    }*/}


    return (
        <Container>
            <h2 className="mb-4">Your Shopping Cart</h2>
            {cartItems.map(item => (
                <Card key={item.productID} className="mb-3">
                    <Card.Body>
                        <Card.Img variant="top" src={item.image} />
                        <Card.Title>{item.name}</Card.Title>
                        <Card.Text>{item.description}</Card.Text>
                        <p>Price: ${item.price}</p>
                        <Form.Control
                            as="select"
                            value={item.quantity}
                            onChange={e => handleQuantityChange(item.productID, +e.target.value)}
                        >
                            {[...Array(10)].map((_, idx) => (
                                <option key={idx + 1} value={idx + 1}>{idx + 1}</option>
                            ))}
                        </Form.Control>
                        <Button variant="danger" className="mt-2" onClick={() => handleRemoveFromCart(item.productID)}>
                            Remove
                        </Button>
                    </Card.Body>
                </Card>
            ))}

            <Row className="align-items-center">
                <Col>Total: ${total}</Col> 
                <Col className="text-right">
                    <Button as={Link} to="/checkout" variant="primary">Checkout</Button>
                </Col>
            </Row>
        </Container>
    )
}

export default CartPage