import React, { useState, useContext } from 'react'
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { loginUser } from '../clientDAL'
import UserContext from '../components/UserContext'

function LoginPage() {
    const { setUser } = useContext(UserContext)
    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [message, setMessage] = useState('')
    const [error, setError] = useState('')

    const login = async () => {
      try {
          const response = await loginUser({ email, password })

          if (response.status === 200) {
            setUser({ userId: response.data.userId, name: response.data.name })
              console.log("User state after setting:", { name: response.data.name, email: email })
              localStorage.setItem("user", JSON.stringify({ userId: response.data.userId, name: response.data.name }))
              
              navigate('/')
              setMessage(response.message)

            } else {
              setError("Invalid login response. Please try again.")
          }
      } catch (error) {
          setMessage('')
          setError(error.message)
      }
    }


    const handleResetRequest = async (e) => {
      e.preventDefault()
      const email = e.target.resetEmail.value
  
      try {
          const response = await fetch("/api/request-password-reset", {
              method: "POST",
              body: JSON.stringify({ email }),
              headers: {
                  "Content-Type": "application/json"
              }
          })
  
          const data = await response.json();
  
          if (response.ok) {
              alert("Please check your email for password reset instructions.");
          } else {
              alert(data.error || "An error occurred while processing your request.");
          }
      } catch (error) {
          alert("There was an error sending the request. Please try again.");
      }
    }

    return (
        <Container className="mt-5" style={{ fontFamily: 'Oswald, sans-serif' }}>
            <Row className="justify-content-center">
                <Col md={6}>
                    <Card className="mb-4 shadow-sm p-3">
                        <Card.Body>
                            <Card.Title className="text-center">Login</Card.Title>

                            {error && <Alert variant="danger">{error}</Alert>}
                            {message && <Alert variant="success">{message}</Alert>}

                            <Form onSubmit={e => {
                                e.preventDefault();
                                login()
                            }}>
                                <Form.Group className="mb-3" controlId="formEmail">
                                    <Form.Label>Email:</Form.Label>
                                    <Form.Control 
                                        type="text" 
                                        placeholder="Enter email" 
                                        value={email} 
                                        onChange={e => setEmail(e.target.value)}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formPassword">
                                    <Form.Label>Password:</Form.Label>
                                    <Form.Control 
                                        type="password" 
                                        placeholder="Enter password" 
                                        value={password} 
                                        onChange={e => setPassword(e.target.value)}
                                    />
                                </Form.Group>

                                <div className="d-grid gap-2">
                                    <Button variant="primary" type="submit">
                                        Login
                                    </Button>
                                </div>
                            </Form>
                            <p className="mt-3 text-center">
                                Don't have an account? <Link to="/register">Come Register</Link>
                            </p>
                        </Card.Body>
                    </Card>

                    <Card className="shadow-sm p-3">
                        <Card.Body>
                            <Card.Title className="text-center">Forgot your password?</Card.Title>
                            <Form onSubmit={e => handleResetRequest(e)}>
                                <Form.Group className="mb-3" controlId="resetEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder="Enter your email" />
                                </Form.Group>
                                <div className="d-grid gap-2">
                                    <Button variant="primary" type="submit">
                                        Request Password Reset
                                    </Button>
                                </div>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default LoginPage