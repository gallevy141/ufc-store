import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import { fetchRecentOrder } from '../clientDAL'

function ReceiptPage() {
    const [orderData, setOrderData] = useState(null)
    
    useEffect(() => {
        async function fetchOrder() {
            try {
                const data = await fetchRecentOrder()
                setOrderData(data);
            } catch (error) {
                console.error("Error fetching the recent order:", error)
            }
        }
        
        fetchOrder()
    }, [])

    if (!orderData) {
        return <p>Loading...</p>
    }

    return (
        <Container>
            <Row className="my-4">
                <Col>
                    <h2>Your Receipt</h2>
                </Col>
            </Row>

            <Row className="my-4">
                <Col md={6}>
                    <Card>
                        <Card.Body>
                            <Card.Title>You have ordered...</Card.Title>
                            {orderData.products && orderData.products.map(product => (
                                <div key={product.productId}>
                                    <Card.Text>{product.name} - Quantity: {product.quantity} - Price: ${product.price}</Card.Text>
                                </div>
                            ))}
                            
                            <hr />
                            <Card.Text><strong>Total Price:</strong> ${orderData.totalPrice}</Card.Text>
                            <Card.Text><strong>Shipping Address:</strong> {orderData.deliveryAddress}</Card.Text>
                            <Card.Text><strong>Order Number:</strong> {orderData.orderID}</Card.Text>
                            <Card.Text><strong>Order Date:</strong> {new Date(orderData.date).toLocaleDateString()}</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row className="my-4">
                <Col>
                    <h4>Thank you for your order!</h4>
                    <p>Please come again!</p>
                </Col>
            </Row>
        </Container>
    )
}

export default ReceiptPage