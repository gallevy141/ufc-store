import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { loginUser } from '../clientDAL'

function LoginPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [message, setMessage] = useState('')
    const [error, setError] = useState('')

    const login = async () => {
        try {
            const response = await loginUser({ email, password })

            setError('')
            if (response.token) {
                setMessage(response.message)
            } else {
                setError("Invalid login response. Please try again.")
            }
        } catch (error) {
            setMessage('')
            setError("Error logging in. Please check your credentials and try again.")
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
        <div>
            <Container className="mt-5">
                <Row className="justify-content-center">
                    <Col md={6}>
                        <h2 className="text-center">Login</h2>

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

                        <h2 className="text-center">Forgot your password?</h2>
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

                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default LoginPage