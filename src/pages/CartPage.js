import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Button, Dropdown, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { getLoggedInUser, fetchCartItems } from '../clientDAL'

function CartPage() {
    const [userId, setUserId] = useState(null)
    const [cartItems, setCartItems] = useState([])

    useEffect(() => {

        async function fetchUser() {
            try {
                const userData = await getLoggedInUser()
                setUserId(userData.userId)

                const cartData = await fetchCartItems(userData.userId)
                setCartItems(cartData)
            } catch (error) {
                console.error("Error fetching user or cart data:", error)
            }
        }
        fetchUser()
    }, [])

    return (
        <Container>
            <h2 className="mb-4">Your Shopping Cart</h2>
            {cartItems.map(item => (
                <Card key={item.productId} className="mb-3"> 
                    {/* ... Display cart item details ... */}
                </Card>
            ))}

            <Row className="align-items-center">
                <Col>Total: $xx.xx</Col>  {/* Update this with actual total */}
                <Col className="text-right">
                    <Button as={Link} to="/checkout" variant="primary">Checkout</Button>
                </Col>
            </Row>
        </Container>
    )
}

export default CartPage