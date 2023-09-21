import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Button, Dropdown, Card, Modal, Form } from 'react-bootstrap'
import axios from 'axios'
import { fetchCartItems, getLoggedInUser, clearUserCart } from '../clientDAL'

function CheckoutPage() {
    const [cartItems, setCartItems] = useState([])
    const [total, setTotal] = useState(0)
    const [addresses, setAddresses] = useState([])
    const [selectedAddress, setSelectedAddress] = useState('')
    const [showAddAddressModal, setShowAddAddressModal] = useState(false)
    const [newAddress, setNewAddress] = useState('')
    const BASE_URL = 'http://localhost:5000/api'
    
    useEffect(() => {
        async function fetchData() {
            try {
                const userData = await getLoggedInUser()
                if (userData && userData.userId) {
                    const items = await fetchCartItems(userData.userId)
                    setCartItems(items)
                    calculateTotal(items)

                    const response = await axios.get(`/users/${userData.userId}/addresses`)
                    setAddresses(response.data.addresses || [])
                }
            } catch (error) {
                console.error("Error fetching data:", error)
            }
        }

        fetchData()
    }, [])

    const calculateTotal = (items) => {
        const totalAmount = items.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2)
        setTotal(totalAmount)
    }

    const handleAddAddress = async () => {
        try {
            const userData = await getLoggedInUser();
            if (userData && userData.userId) {
                const response = await axios.post(`${BASE_URL}/users/${userData.userId}/address`, { address: newAddress })
                if (response.data.success) {
                    setAddresses(prevAddresses => [...prevAddresses, newAddress])
                    setSelectedAddress(newAddress)
                }
            }
        } catch (error) {
            console.error("Error adding address:", error)
        }
        setShowAddAddressModal(false)
    }

    const handleConfirmOrder = async () => {
        try {
            const userData = await getLoggedInUser()
            if (userData && userData.userId) {
                const response = await axios.post(`${BASE_URL}/orders`, { userId: userData.userId, cartItems: cartItems, deliveryAddress: selectedAddress })
    
                if (response.data.success) {
                    await clearUserCart(userData.userId)
                    window.location.href = "/receipt"
                } else {
                    console.error("Error creating order:", response.data.message)
                }
            }
        } catch (error) {
            console.error("Error creating order:", error)
        }
    }

    return (
        <Container style={{ fontFamily: 'Oswald, sans-serif' }}>
            <h2 className="mb-4 text-center">Checkout</h2>

            {cartItems.map(item => (
                <Card key={item.productID} className="mb-3 shadow-sm">
                    <Card.Body>
                        <Row>
                            <Col md={6}>{item.name}</Col>
                            <Col md={3}>Quantity: {item.quantity}</Col>
                            <Col md={3}>Price: ${item.price}</Col>
                        </Row>
                    </Card.Body>
                </Card>
            ))}

            <Row className="my-4 align-items-center">
                <Col md={7}>
                    <Dropdown>
                        <Dropdown.Toggle variant="outline-dark">
                            Address: {selectedAddress || 'Select Address'}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {addresses.map(address => (
                                <Dropdown.Item key={address} onClick={() => setSelectedAddress(address)}>
                                    {address}
                                </Dropdown.Item>
                            ))}
                            <Dropdown.Divider />
                            <Dropdown.Item onClick={() => setShowAddAddressModal(true)}>+ Add New Address</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Col>
                <Col md={5} className="text-right">
                    <strong>Total Price:</strong> ${total}
                    <Button variant="primary" className="ml-3" onClick={handleConfirmOrder}>Confirm Order</Button>
                </Col>
            </Row>

            <Modal show={showAddAddressModal} onHide={() => setShowAddAddressModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Add New Address</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="address">
                            <Form.Label>Address</Form.Label>
                            <Form.Control type="text" placeholder="Enter new address" value={newAddress} onChange={(e) => setNewAddress(e.target.value)} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-secondary" onClick={() => setShowAddAddressModal(false)}>
                        Cancel
                    </Button>
                    <Button variant="dark" onClick={handleAddAddress}>
                        Add Address
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    )
}

export default CheckoutPage