import React, { useContext, useEffect, useState } from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import UserContext from '../components/UserContext'
import axios from 'axios'

function OrderHistoryPage() {
    const { user } = useContext(UserContext)
    const [orders, setOrders] = useState([])

    useEffect(() => {
        const fetchOrderHistory = async () => {
            try {
                const BASE_URL = 'http://localhost:5000'
                const response = await axios.get(`${BASE_URL}/orders/user/${user.id}`)

                if (response.status === 200) {
                    setOrders(response.data)
                } else {
                    console.error('Failed to fetch order history:', response.data.error || 'Unknown error')
                }
            } catch (error) {
                console.error('Error fetching order history:', error)
            }
        }

        fetchOrderHistory()
    }, [user])

    return (
        <Container>
            <Row className="my-4">
                <Col>
                    <h2>Order History</h2>
                </Col>
            </Row>
            <Row>
                {orders.map(order => (
                    <Col md={4} key={order.id}>
                        <Card className="mb-4">
                            <Card.Body>
                                <Card.Title>Order #{order.id}</Card.Title>
                                <Card.Text>Date: {new Date(order.date).toLocaleDateString()}</Card.Text>
                                <Card.Text>Total: ${order.total}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default OrderHistoryPage
