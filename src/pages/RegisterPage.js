import React from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Register() {
  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">Register</h2>
      <Form>
        <Form.Group controlId="registerName" className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter name" />
        </Form.Group>
        
        <Form.Group controlId="registerEmail" className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        
        <Form.Group controlId="registerPassword" className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Form.Group controlId="registerConfirmPassword" className="mb-3">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type="password" placeholder="Confirm Password" />
        </Form.Group>
        
        <Form.Group controlId="registerAddress" className="mb-3">
          <Form.Label>Address (Optional)</Form.Label>
          <Form.Control type="text" placeholder="Enter address" />
        </Form.Group>
        
        <Form.Group controlId="registerPhone" className="mb-3">
          <Form.Label>Phone Number (Optional)</Form.Label>
          <Form.Control type="tel" placeholder="Enter phone number" />
        </Form.Group>
        
        <Button variant="primary" type="submit" className="w-100 mt-3">
          Register
        </Button>
      </Form>

      <div className="mt-3 text-center">
        Already have an account? <Link to="/login">Login</Link>
      </div>
    </Container>
  )
}

export default Register