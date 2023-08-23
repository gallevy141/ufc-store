import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'

import { Link } from 'react-router-dom'

function LoginPage() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');


  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const login = async () => {
      try {
          const response = await loginUser({ name, password });

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

  return (
    <div>

      <Container className="mt-5">
        <Row className="justify-content-center">
          <Col md={6}>
            <h2 className="text-center">Login</h2>
            <Form>
              <Form.Group className="mb-3" controlId="formUsername">
                <Form.Label>Username:</Form.Label>
                <Form.Control type="text" placeholder="Enter username" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formPassword">
                <Form.Label>Password:</Form.Label>
                <Form.Control type="password" placeholder="Enter password" />
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
          </Col>
        </Row>
      </Container>

    </div>
  )
}

export default LoginPage