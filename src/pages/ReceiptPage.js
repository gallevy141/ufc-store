import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import { fetchRecentOrder } from './clientDAL'

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
                            {/* Map through an array of ordered products here. temp placeholders. */}
                            <Card.Text>Product 1</Card.Text>
                            <Card.Text>Product 2</Card.Text>
                            <Card.Text>Product 3</Card.Text>
                            <Card.Text>Product 4</Card.Text>
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