import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import { fetchRecentOrder } from '../clientDAL'

function ReceiptPage() {
    const [orderData, setOrderData] = useState(null)
    
    useEffect(() => {
        async function fetchOrder() {
            try {
                const data = await fetchRecentOrder()
                setOrderData(data)
            } catch (error) {
                console.error("Error fetching the recent order:", error)
            }
        }
        
        fetchOrder()
    }, [])

    if (!orderData) {
        return (
            <Container className="text-center mt-5">
                <p>Loading...</p>
            </Container>
        )
    }

    return (
        <Container className="text-center" style={{ fontFamily: 'Oswald, sans-serif' }}>
            <Row className="my-4">
                <Col>
                    <h2>Your Receipt</h2>
                </Col>
            </Row>

            <Row className="my-4 justify-content-center">
                <Col md={8}>
                    <Card className="shadow-sm">
                        <Card.Body>
                            <Card.Title>You have ordered...</Card.Title>
                            {orderData.products && orderData.products.map(product => (
                                <div key={product.productId}>
                                    <Card.Text>{product.name} - Quantity: {product.quantity} - Price: ${product.price}</Card.Text>
                                </div>
                            ))}
                            
                            <hr />
                            <Card.Text><strong>Total Price:</strong> ${orderData.totalPrice}</Card.Text>
                            <Card.Text>
                                <strong>Shipping Address:</strong> 
                                {orderData.deliveryAddress ? orderData.deliveryAddress : 'Not provided'}
                            </Card.Text>
                            <Card.Text><strong>Order Number:</strong> {orderData.orderID}</Card.Text>
                            <Card.Text><strong>Order Date:</strong> {new Date(orderData.date).toLocaleDateString()}</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row className="my-4">
                <Col>
                    <h4>Thank you for your order!</h4>
                    <p>We hope to see you again soon!</p>
                </Col>
            </Row>
        </Container>
    )
}


export default ReceiptPage