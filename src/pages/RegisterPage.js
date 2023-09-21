import React, { useState, useContext } from 'react'
import { Container, Form, Button, Alert, Card } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { registerUser } from '../clientDAL'
import UserContext from '../components/UserContext'

function Register() {
    const navigate = useNavigate()
    const { setUser } = useContext(UserContext)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [address, setAddress] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    
    const [message, setMessage] = useState('')
    const [error, setError] = useState('')

    const register = async () => {
      try {
          if (password !== confirmPassword) {
              setError("Passwords do not match.")
              return
          }
  
          const response = await registerUser({ name, email, password, address, phoneNumber })
          console.log('Received response from server:', response)
  
          if (response.message === 'User registered successfully.') {
              setUser({ name: response.name, email: response.email })
              navigate('/')
              setMessage(response.message)
          } else {
              setError("Registration failed. Please try again.")
          }
      } catch (error) {
          setMessage('')
          setError("Error registering. Please try again.")
      }
    }

    return (
        <Container className="mt-5 mb-5" style={{ fontFamily: 'Oswald, sans-serif' }}>
            <h2 className="text-center mb-4">Register</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            {message && <Alert variant="success">{message}</Alert>}

            <Card className="shadow-sm p-3 mb-5">
                <Card.Body>
                    <Form onSubmit={e => {
                        e.preventDefault()
                        register()
                    }}>
                        <Form.Group controlId="registerName" className="mb-3">
                            <Form.Label>Name</Form.Label>
                            <Form.Control 
                                type="text" 
                                placeholder="Enter name" 
                                value={name} 
                                onChange={e => setName(e.target.value)}
                            />
                        </Form.Group>
                        
                        <Form.Group controlId="registerEmail" className="mb-3">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control 
                                type="email" 
                                placeholder="Enter email" 
                                value={email} 
                                onChange={e => setEmail(e.target.value)}
                            />
                        </Form.Group>
                        
                        <Form.Group controlId="registerPassword" className="mb-3">
                            <Form.Label>Password</Form.Label>
                            <Form.Control 
                                type="password" 
                                placeholder="Password" 
                                value={password} 
                                onChange={e => setPassword(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group controlId="registerConfirmPassword" className="mb-3">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control 
                                type="password" 
                                placeholder="Confirm Password" 
                                value={confirmPassword} 
                                onChange={e => setConfirmPassword(e.target.value)}
                            />
                        </Form.Group>
                        
                        <Form.Group controlId="registerAddress" className="mb-3">
                            <Form.Label>Address (Optional)</Form.Label>
                            <Form.Control 
                                type="text" 
                                placeholder="Enter address" 
                                value={address} 
                                onChange={e => setAddress(e.target.value)}
                            />
                        </Form.Group>
                        
                        <Form.Group controlId="registerPhone" className="mb-3">
                            <Form.Label>Phone Number (Optional)</Form.Label>
                            <Form.Control 
                                type="tel" 
                                placeholder="Enter phone number" 
                                value={phoneNumber} 
                                onChange={e => setPhoneNumber(e.target.value)}
                            />
                        </Form.Group>  
                            
                            <Button variant="primary" type="submit" className="w-100 mt-3">
                                Register
                            </Button>
                    </Form>
                    <div className="mt-3 text-center">
                        Already have an account? <Link to="/login">Login</Link>
                    </div>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default Register