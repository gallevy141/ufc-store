import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'

function AboutUs() {
    return (
        <Container fluid style={{ fontFamily: 'Oswald, sans-serif' }}>

            <Card className="my-4 bg-light text-center py-4 shadow-sm">
                <Card.Body>
                    <h2>"We Are The Most Entertaining Sport On The Planet"</h2>
                    <Card.Footer className="text-muted">- Dana White</Card.Footer>
                </Card.Body>
            </Card>

            <Row className="my-4">
                <Col md={6}>
                    <img src="/public/images/conor-belts.jpg" alt="Conor McGregor with Belts" className="img-fluid rounded" />
                </Col>
                <Col md={6}>
                    <h3>Welcome to the Ultimate Fighting Championship (UFC)</h3>
                    <p>
                        The premier global organization for mixed martial arts (MMA) competition. Founded in 1993, the UFC has 
                        revolutionized the world of combat sports, showcasing the best fighters from around the globe. With a rich 
                        history and a commitment to excellence, the UFC brings together the most talented athletes in thrilling 
                        matchups across various weight classes and divisions. 
                    </p>
                    <p>
                        Our mission is to provide fans with unparalleled excitement, sportsmanship, and unforgettable moments inside 
                        the octagon. Explore our website to learn more about our champions, upcoming events, and the electrifying 
                        world of MMA.
                    </p>
                </Col>
            </Row>

        </Container>
    )
}

export default AboutUs